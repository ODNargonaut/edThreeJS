import {
	Controls,
	MOUSE,
	Quaternion,
	Spherical,
	TOUCH,
	Vector2,
	Vector3,
	Plane,
	Ray,
	MathUtils
} from 'three';

// OrbitControls выполняет вращение по орбите, перемещение (масштабирование) и панорамирование.
// В отличие от TrackballControls, он сохраняет направление "вверх" object.up (+Y по умолчанию).
//
//    Orbit - left mouse / touch: one-finger move
//    Zoom - middle mouse, or mousewheel / touch: раздвинуть или раздавить двумя пальцами
//    Pan - right mouse, or left mouse + ctrl/meta/shiftKey, or arrow keys / touch: two-finger move

const _changeEvent = {type: 'change'};
const _startEvent = {type: 'start'};
const _endEvent = {type: 'end'};
const _ray = new Ray();
const _plane = new Plane();
const _TILT_LIMIT = Math.cos(70 * MathUtils.DEG2RAD);

const _v = new Vector3();
const _twoPI = 2 * Math.PI;

const _STATE = 
{
	NONE: -1,
	ROTATE: 0,
	DOLLY: 1,
	PAN: 2,
	TOUCH_ROTATE: 3,
	TOUCH_PAN: 4,
	TOUCH_DOLLY_PAN: 5,
	TOUCH_DOLLY_ROTATE: 6
};
const _EPS = 0.000001;


class OrbitControls extends Controls 
{
	/* ... */
	constructor(object, domElement=null)
	{
		super(object, domElement);

		this.state = _STATE.NONE;

		// Установите значение false, чтобы отключить этот элемент управления.
		this.enabled = true;

		// "target" устанавливает местоположение фокуса, вокруг которого вращается объект
		this.target = new Vector3();

		// Устанавливает 3D-курсор (аналогично Blender), от которого зависит maxTargetRadius
		this.cursor = new Vector3();

		// Насколько далеко вы можете приблизиться и отдалиться (только PerspectiveCamera)
		this.minDistance = 0;
		this.maxDistance = Infinity;

		// Насколько далеко вы можете приближать и отдалять (только OrthographicCamera)
		this.minZoom = 0;
		this.maxZoom = Infinity;

		// Ограничить цель камеры сферической областью вокруг курсора
		this.minTargetRadius = 0;
		this.maxTargetRadius = Infinity;

		// Как далеко вы можете двигаться по вертикальной орбите, верхний и нижний пределы.
		// Диапазон от 0 до Math.PI радиан.
		this.minPolarAngle = 0;        // радианы
		this.maxPolarAngle = Math.PI;  // радианы

		// Как далеко вы можете двигаться по горизонтальной орбите, верхний и нижний пределы.
		// Если задано, интервал [min, max] должен быть подынтервалом [-2PI, 2PI], при этом (max - min < 2PI)
		this.minAzimuthAngle = -Infinity;  // радианы
		this.maxAzimuthAngle = Infinity;   // радианы

		// Установите значение true, чтобы включить демпфирование (инерцию)
		// Если демпфирование включено, необходимо вызвать controls.update() в цикле анимации.
		this.enableDamping = false;
		this.dampingFactor = 0.05;

		// Эта опция фактически позволяет приближать и отдалять камеру; оставлено значение "zoom" » для обратной совместимости.
		// Установите значение false, чтобы отключить масштабирование.
		this.enableZoom = true;
		this.zoomSpeed = 1.0;

		// Установите значение false, чтобы отключить вращение.
		this.enableRotate = true;
		this.rotateSpeed = 1.0;
		this.keyRotateSpeed = 1.0;

		// Установите значение false, чтобы отключить панорамирование.
		this.enablePan = true;
		this.panSpeed = 1.0;
		this.screenSpacePanning = true;  // если false, панорамировать ортогонально направлению мирового пространства camera.up
		this.keyPanSpeed = 7.0;        	 // пиксели перемещаются при нажатии клавиши со стрелкой
		this.zoomToCursor = false;

		// Установите значение true для автоматического вращения вокруг цели.
		// Если включен автоматический поворот, необходимо вызвать controls.update() в цикле анимации.
		this.autoRotate = false;
		this.autoRotateSpeed = 2.0;  // 30 секунд на орбиту при частоте кадров 60

		// Четыре клавиши со стрелками
		this.keys = {LEFT: 'ArrowLeft', UP: 'ArrowUp', RIGHT: 'ArrowRight', BOTTOM: 'ArrowDown'};

		// Кнопки мыши
		this.mouseButtons = {LEFT: MOUSE.ROTATE, MIDDLE: MOUSE.DOLLY, RIGHT: MOUSE.PAN};

		// Touch fingers
		this.touches = {ONE: TOUCH.ROTATE, TWO: TOUCH.DOLLY_PAN};

		// для сброса
		this.target0 = this.target.clone();
		this.position0 = this.object.position.clone();
		this.zoom0 = this.object.zoom;

		// целевой элемент DOM для ключевых событий
		this._domElementKeyEvents = null;

		// внутренности
		this._lastPosition = new Vector3();
		this._lastQuaternion = new Quaternion();
		this._lastTargetPosition = new Vector3();

		// so camera.up это ось орбиты
		this._quat = new Quaternion().setFromUnitVectors(object.up, new Vector3(0, 1, 0));
		this._quatInverse = this._quat.clone().invert();

		// текущее положение в сферических координатах
		this._spherical = new Spherical();
		this._sphericalDelta = new Spherical();

		this._scale = 1;
		this._panOffset = new Vector3();

		this._rotateStart = new Vector2();
		this._rotateEnd = new Vector2();
		this._rotateDelta = new Vector2();

		this._panStart = new Vector2();
		this._panEnd = new Vector2();
		this._panDelta = new Vector2();

		this._dollyStart = new Vector2();
		this._dollyEnd = new Vector2();
		this._dollyDelta = new Vector2();

		this._dollyDirection = new Vector3();
		this._mouse = new Vector2();
		this._performCursorZoom = false;

		this._pointers = [];
		this._pointerPositions = {};

		this._controlActive = false;

		// прослушиватели событий
		this._onPointerMove = onPointerMove.bind(this);
		this._onPointerDown = onPointerDown.bind(this);
		this._onPointerUp = onPointerUp.bind(this);
		this._onContextMenu = onContextMenu.bind(this);
		this._onMouseWheel = onMouseWheel.bind(this);
		this._onKeyDown = onKeyDown.bind(this);

		this._onTouchStart = onTouchStart.bind(this);
		this._onTouchMove = onTouchMove.bind(this);

		this._onMouseDown = onMouseDown.bind(this);
		this._onMouseMove = onMouseMove.bind(this);

		this._interceptControlDown = interceptControlDown.bind(this);
		this._interceptControlUp = interceptControlUp.bind(this);

		//
		if (this.domElement !== null)
		{
			this.connect();
		}

		this.update();
	}

	/* /// */
	connect()
	{
		this.domElement.addEventListener('pointerdown', this._onPointerDown);
		this.domElement.addEventListener('pointercancel', this._onPointerUp);

		this.domElement.addEventListener('contextmenu', this._onContextMenu);
		this.domElement.addEventListener('wheel', this._onMouseWheel, {passive: false});

		const document = this.domElement.getRootNode();  // совместимость с холстом за пределами экрана
		document.addEventListener('keydown', this._interceptControlDown, {passive: true, capture: true});

		this.domElement.style.touchAction = 'none';  // отключить сенсорную прокрутку
	}

	/* /// */
	disconnect()
	{
		this.domElement.removeEventListener('pointerdown', this._onPointerDown);
		this.domElement.removeEventListener('pointermove', this._onPointerMove);
		this.domElement.removeEventListener('pointerup', this._onPointerUp);
		this.domElement.removeEventListener('pointercancel', this._onPointerUp);

		this.domElement.removeEventListener('wheel', this._onMouseWheel);
		this.domElement.removeEventListener('contextmenu', this._onContextMenu);

		this.stopListenToKeyEvents();

		const document = this.domElement.getRootNode();  // совместимость с холстом за пределами экрана
		document.removeEventListener('keydown', this._interceptControlDown, {capture: true});

		this.domElement.style.touchAction = 'auto';
	}

	/* /// */
	dispose()
	{
		this.disconnect();
	}

	/* /// */
	getPolarAngle()
	{
		return this._spherical.phi;
	}

	/* /// */
	getAzimuthalAngle()
	{
		return this._spherical.theta;
	}

	/* /// */
	getDistance()
	{
		return this.object.position.distanceTo(this.target);
	}

	/* /// */
	listenToKeyEvents(domElement)
	{
		domElement.addEventListener('keydown', this._onKeyDown);
		this._domElementKeyEvents = domElement;
	}

	/* /// */
	stopListenToKeyEvents()
	{
		if (this._domElementKeyEvents !== null)
		{
			this._domElementKeyEvents.removeEventListener('keydown', this._onKeyDown);
			this._domElementKeyEvents = null;
		}
	}

	/* /// */
	saveState()
	{
		this.target0.copy(this.target);
		this.position0.copy(this.object.position);
		this.zoom0 = this.object.zoom;
	}

	/* /// */
	reset()
	{
		this.target.copy(this.target0);
		this.object.position.copy(this.position0);
		this.object.zoom = this.zoom0;

		this.object.updateProjectionMatrix();
		this.dispatchEvent(_changeEvent);

		this.update();

		this.state = _STATE.NONE;
	}

	/* /// */
	update(deltaTime=null)
	{
		const position = this.object.position;

		_v.copy(position).sub(this.target);

		// смещение поворота в положение "ось Y находится сверху"
		_v.applyQuaternion(this._quat);

		// угол от оси z вокруг оси y
		this._spherical.setFromVector3(_v);

		if (this.autoRotate && this.state === _STATE.NONE)
		{
			this._rotateLeft(this._getAutoRotationAngle(deltaTime));
		}

		if (this.enableDamping)
		{
			this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor;
			this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor;
		}
		else
		{
			this._spherical.theta += this._sphericalDelta.theta;
			this._spherical.phi += this._sphericalDelta.phi;
		}

		// ограничить theta до желаемых пределов
		let min = this.minAzimuthAngle;
		let max = this.maxAzimuthAngle;

		if (isFinite(min) && isFinite(max))
		{
			if (min < -Math.PI) 
				min += _twoPI; 
			else if (min > Math.PI) 
				min -= _twoPI;

			if (max < -Math.PI) 
				max += _twoPI; 
			else if (max > Math.PI) 
				max -= _twoPI;

			if (min <= max)
			{
				this._spherical.theta = Math.max(min, Math.min(max, this._spherical.theta));
			}
			else
			{
				this._spherical.theta = (this._spherical.theta > (min + max) / 2) 
				                         ?
					                       Math.max(min, this._spherical.theta)
																 :
					                       Math.min(max, this._spherical.theta);
			}
		}

		// ограничить phi до желаемых пределов
		this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi));

		this._spherical.makeSafe();


		// переместить цель в панорамируемое место
		if (this.enableDamping === true)
		{
			this.target.addScaledVector(this._panOffset, this.dampingFactor);
		}
		else
		{
			this.target.add(this._panOffset);
		}

		// Ограничьте расстояние до курсора, чтобы создать сферу вокруг интересующего центра.
		this.target.sub(this.cursor);
		this.target.clampLength(this.minTargetRadius, this.maxTargetRadius);
		this.target.add(this.cursor);

		let zoomChanged = false;
		// отрегулируйте положение камеры на основе масштабирования только в том случае, если 
		// мы не приближаемся к курсору или если это ортокамера, мы отрегулируем масштабирование позже в этих случаях
		if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera)
		{
			this._spherical.radius = this._clampDistance(this._spherical.radius);
		}
		else
		{
			const prevRadius = this._spherical.radius;
			this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale);
			zoomChanged = prevRadius != this._spherical.radius;
		}

		_v.setFromSpherical(this._spherical);

		// повернуть смещение обратно в пространство "камера-вверх-вектор-наверху"
		_v.applyQuaternion(this._quatInverse);

		position.copy(this.target).add(_v);

		this.object.lookAt(this.target);

		if (this.enableDamping === true)
		{
			this._sphericalDelta.theta *= (1 - this.dampingFactor);
			this._sphericalDelta.phi *= (1 - this.dampingFactor);

			this._panOffset.multiplyScalar(1 - this.dampingFactor);
		}
		else
		{
			this._sphericalDelta.set(0, 0, 0);
			this._panOffset.set(0, 0, 0);
		}

		// отрегулируйте положение камеры
		if (this.zoomToCursor && this._performCursorZoom)
		{
			let newRadius = null;
			if (this.object.isPerspectiveCamera)
			{
				// переместите камеру вниз по лучу указателя
				// этот метод позволяет избежать ошибок с плавающей точкой
				const prevRadius = _v.length();
				newRadius = this._clampDistance(prevRadius * this._scale);

				const radiusDelta = prevRadius - newRadius;
				this.object.position.addScaledVector(this._dollyDirection, radiusDelta);
				this.object.updateMatrixWorld();

				zoomChanged = !!radiusDelta;

			} 
			else if (this.object.isOrthographicCamera)
			{
				// отрегулируйте положение ортокамеры в зависимости от изменения масштаба
				const mouseBefore = new Vector3(this._mouse.x, this._mouse.y, 0);
				mouseBefore.unproject(this.object);

				const prevZoom = this.object.zoom;
				this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale));
				this.object.updateProjectionMatrix();

				zoomChanged = prevZoom !== this.object.zoom;

				const mouseAfter = new Vector3(this._mouse.x, this._mouse.y, 0);
				mouseAfter.unproject(this.object);

				this.object.position.sub(mouseAfter).add(mouseBefore);
				this.object.updateMatrixWorld();

				newRadius = _v.length();
			}
			else
			{
				console.warn('WARNING: OrbitControls.js обнаружен неизвестный тип камеры - приближение по курсору отключено.');
				this.zoomToCursor = false;
			}

			// управлять размещением цели
			if (newRadius !== null)
			{
				if (this.screenSpacePanning)
				{
					// расположите цель орбиты перед новой позицией камеры
					this.target.set(0, 0, -1)
						.transformDirection(this.object.matrix)
						.multiplyScalar(newRadius)
						.add(this.object.position);
				}
				else
				{
					// получить луч и плоскость трансляции для вычисления цели
					_ray.origin.copy(this.object.position);
					_ray.direction.set(0, 0, -1).transformDirection(this.object.matrix);

					// если камера находится на 20 градусов выше горизонта, то не настраивайте 
					// фокусную точку, чтобы избежать слишком больших значений
					if (Math.abs(this.object.up.dot(_ray.direction)) < _TILT_LIMIT)
					{
						this.object.lookAt(this.target);
					}
					else
					{
						_plane.setFromNormalAndCoplanarPoint(this.object.up, this.target);
						_ray.intersectPlane(_plane, this.target);
					}
				}
			}
		} 
		else if (this.object.isOrthographicCamera)
		{
			const prevZoom = this.object.zoom;
			this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale));

			if (prevZoom !== this.object.zoom)
			{
				this.object.updateProjectionMatrix();
				zoomChanged = true;
			}
		}

		this._scale = 1;
		this._performCursorZoom = false;

		// Условие обновления:
		// min(смещение камеры, поворот камеры в радианах)^2 > EPS
		// с использованием малоуглового приближения cos(x/2) = 1 - x^2 / 8

		if (zoomChanged                                                     ||
			this._lastPosition.distanceToSquared(this.object.position) > _EPS ||
			8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > _EPS ||
			this._lastTargetPosition.distanceToSquared(this.target)    > _EPS )
		{
			this.dispatchEvent(_changeEvent);

			this._lastPosition.copy(this.object.position);
			this._lastQuaternion.copy(this.object.quaternion);
			this._lastTargetPosition.copy(this.target);

			return true;
		}

		return false;
	}

	/* /// */
	_getAutoRotationAngle(deltaTime)
	{
		if (deltaTime !== null)
		{
			return (_twoPI / 60 * this.autoRotateSpeed) * deltaTime;
		}
		else
		{
			return _twoPI / 60 / 60 * this.autoRotateSpeed;
		}
	}

	/* /// */
	_getZoomScale(delta)
	{
		const normalizedDelta = Math.abs(delta * 0.01);
		return Math.pow(0.95, this.zoomSpeed * normalizedDelta);
	}

	/* /// */
	_rotateLeft(angle)
	{
		this._sphericalDelta.theta -= angle;
	}

	/* /// */
	_rotateUp(angle)
	{
		this._sphericalDelta.phi -= angle;
	}

	/* /// */
	_panLeft(distance, objectMatrix)
	{
		_v.setFromMatrixColumn(objectMatrix, 0); // получит X столбеца objectMatrix
		_v.multiplyScalar(-distance);

		this._panOffset.add(_v);
	}

	/* /// */
	_panUp(distance, objectMatrix)
	{
		if (this.screenSpacePanning === true)
		{
			_v.setFromMatrixColumn(objectMatrix, 1);
		} 
		else
		{
			_v.setFromMatrixColumn(objectMatrix, 0);
			_v.crossVectors(this.object.up, _v);
		}

		_v.multiplyScalar(distance);

		this._panOffset.add(_v);
	}

	/* deltaX и deltaY указаны в пикселях; right и down — положительные значения */
	_pan(deltaX, deltaY)
	{
		const element = this.domElement;

		if (this.object.isPerspectiveCamera)
		{
			// перспектива
			const position = this.object.position;
			_v.copy(position).sub(this.target);
			let targetDistance = _v.length();

			// половина поля зрения находится в центре верхней части экрана
			targetDistance *= Math.tan((this.object.fov / 2 ) * Math.PI / 180.0);

			// здесь мы используем только clientHeight, поэтому соотношение сторон не искажает скорость
			this._panLeft(2 * deltaX * targetDistance / element.clientHeight, this.object.matrix);
			this._panUp(2 * deltaY * targetDistance / element.clientHeight, this.object.matrix);
		}
		else if (this.object.isOrthographicCamera)
		{
			// орфографический
			this._panLeft(deltaX * (this.object.right - this.object.left) / this.object.zoom / element.clientWidth, this.object.matrix);
			this._panUp(deltaY * (this.object.top - this.object.bottom) / this.object.zoom / element.clientHeight, this.object.matrix);
		}
		else
		{
			// камера не ортографическая и не перспективная
			console.warn('WARNING: OrbitControls.js обнаружен неизвестный тип камеры - панорамирование отключено.');
			this.enablePan = false;
		}
	}

	/* /// */
	_dollyOut(dollyScale)
	{
		if (this.object.isPerspectiveCamera || this.object.isOrthographicCamera)
		{
			this._scale /= dollyScale;
		}
		else
		{
			console.warn('WARNING: OrbitControls.js обнаружен неизвестный тип камеры - функция перемещение/приближения отключена.');
			this.enableZoom = false;
		}
	}

	/* /// */
	_dollyIn(dollyScale)
	{
		if (this.object.isPerspectiveCamera || this.object.isOrthographicCamera)
		{
			this._scale *= dollyScale;
		}
		else
		{
			console.warn('WARNING: OrbitControls.js обнаружен неизвестный тип камеры - функция перемещение/приближения отключена.');
			this.enableZoom = false;
		}
	}

	/* /// */
	_updateZoomParameters(x, y)
	{
		if (!this.zoomToCursor)
			return;

		this._performCursorZoom = true;

		const rect = this.domElement.getBoundingClientRect();
		const dx = x - rect.left;
		const dy = y - rect.top;
		const w = rect.width;
		const h = rect.height;

		this._mouse.x = (dx / w) * 2 - 1;
		this._mouse.y = -(dy / h) * 2 + 1;

		this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
	}

	/* /// */
	_clampDistance(dist)
	{
		return Math.max(this.minDistance, Math.min(this.maxDistance, dist));
	}

	//
	// обратные вызовы событий — обновление состояния объекта
	//

	/* /// */
	_handleMouseDownRotate(e)
	{
		this._rotateStart.set(e.clientX, e.clientY);
	}

	/* /// */
	_handleMouseDownDolly(e)
	{
		this._updateZoomParameters(e.clientX, e.clientX);
		this._dollyStart.set(e.clientX, e.clientY);
	}

	/* /// */
	_handleMouseDownPan(e)
	{
		this._panStart.set(e.clientX, e.clientY);
	}

	/* /// */
	_handleMouseMoveRotate(e)
	{
		this._rotateEnd.set(e.clientX, e.clientY);
		this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);

		const element = this.domElement;

		this._rotateLeft(_twoPI * this._rotateDelta.x / element.clientHeight);  // yes, height
		this._rotateUp(_twoPI * this._rotateDelta.y / element.clientHeight);
		this._rotateStart.copy(this._rotateEnd);
		this.update();
	}

	/* /// */
	_handleMouseMoveDolly(e)
	{
		this._dollyEnd.set(e.clientX, e.clientY);
		this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart);

		if (this._dollyDelta.y > 0)
		{
			this._dollyOut(this._getZoomScale(this._dollyDelta.y));
		}
		else if (this._dollyDelta.y < 0)
		{
			this._dollyIn(this._getZoomScale(this._dollyDelta.y));
		}

		this._dollyStart.copy(this._dollyEnd);

		this.update();
	}

	/* /// */
	_handleMouseMovePan(e)
	{
		this._panEnd.set(e.clientX, e.clientY);
		this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed);
		this._pan(this._panDelta.x, this._panDelta.y);
		this._panStart.copy(this._panEnd);
		this.update();
	}

	/* /// */
	_handleMouseWheel(e)
	{
		this._updateZoomParameters(e.clientX, e.clientY);

		if (e.deltaY < 0)
		{
			this._dollyIn(this._getZoomScale(e.deltaY));
		}
		else if (e.deltaY > 0)
		{
			this._dollyOut(this._getZoomScale(e.deltaY));
		}

		this.update();
	}

	/* /// */
	_handleKeyDown(e)
	{
		let needsUpdate = false;

		switch (e.code)
		{
			case this.keys.UP:
			{
				if (e.ctrlKey || e.metaKey || e.shiftKey)
				{
					if (this.enableRotate)
						this._rotateUp(_twoPI * this.keyRotateSpeed / this.domElement.clientHeight);
				}
				else
				{
					if (this.enablePan)
						this._pan(0, this.keyPanSpeed);
				}

				needsUpdate = true;
				break;
			}

			case this.keys.BOTTOM:
			{
				if (e.ctrlKey || e.metaKey || e.shiftKey)
				{
					if (this.enableRotate)
						this._rotateUp(-_twoPI * this.keyRotateSpeed / this.domElement.clientHeight);
				}
				else
				{
					if (this.enablePan)
						this._pan( 0, - this.keyPanSpeed );
				}

				needsUpdate = true;
				break;
			}

			case this.keys.LEFT:
			{
				if (e.ctrlKey || e.metaKey || e.shiftKey)
				{
					if (this.enableRotate)
						this._rotateLeft(_twoPI * this.keyRotateSpeed / this.domElement.clientHeight);
				}
				else
				{
					if (this.enablePan)
						this._pan(this.keyPanSpeed, 0);
				}

				needsUpdate = true;
				break;
			}

			case this.keys.RIGHT:
			{
				if (e.ctrlKey || e.metaKey || e.shiftKey)
				{
					if (this.enableRotate)
						this._rotateLeft(-_twoPI * this.keyRotateSpeed / this.domElement.clientHeight);
				} 
				else
				{
					if (this.enablePan)
						this._pan(-this.keyPanSpeed, 0);
				}

				needsUpdate = true;
				break;
			}
		}

		if (needsUpdate)
		{
			// запретить прокрутку браузера с помощью клавиш курсора
			e.preventDefault();

			this.update();
		}
	}

	/* /// */
	_handleTouchStartRotate(e)
	{
		if (this._pointers.length === 1)
		{
			this._rotateStart.set(e.pageX, e.pageY);
		}
		else
		{
			const position = this._getSecondPointerPosition(e);

			const x = 0.5 * (e.pageX + position.x);
			const y = 0.5 * (e.pageY + position.y);

			this._rotateStart.set(x, y);
		}
	}

	/* /// */
	_handleTouchStartPan(e)
	{
		if (this._pointers.length === 1)
		{
			this._panStart.set(e.pageX, e.pageY);
		}
		else
		{
			const position = this._getSecondPointerPosition(e);

			const x = 0.5 * (e.pageX + position.x);
			const y = 0.5 * (e.pageY + position.y);

			this._panStart.set(x, y);
		}
	}

	/* /// */
	_handleTouchStartDolly(e)
	{
		const position = this._getSecondPointerPosition(e);

		const dx = e.pageX - position.x;
		const dy = e.pageY - position.y;

		const distance = Math.sqrt(dx * dx + dy * dy);

		this._dollyStart.set(0, distance);
	}

	/* /// */
	_handleTouchStartDollyPan(e)
	{
		if (this.enableZoom)
			this._handleTouchStartDolly(e);

		if (this.enablePan)
			this._handleTouchStartPan(e);
	}

	/* /// */
	_handleTouchStartDollyRotate(e)
	{
		if (this.enableZoom)
			this._handleTouchStartDolly(e);

		if (this.enableRotate)
			this._handleTouchStartRotate(e);
	}

	/* /// */
	_handleTouchMoveRotate(e)
	{
		if (this._pointers.length == 1)
		{
			this._rotateEnd.set(e.pageX, e.pageY);
		}
		else
		{
			const position = this._getSecondPointerPosition(e);

			const x = 0.5 * (e.pageX + position.x);
			const y = 0.5 * (e.pageY + position.y);

			this._rotateEnd.set(x, y);
		}

		this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);

		const element = this.domElement;

		this._rotateLeft(_twoPI * this._rotateDelta.x / element.clientHeight);  // yes, height
		this._rotateUp(_twoPI * this._rotateDelta.y / element.clientHeight);

		this._rotateStart.copy(this._rotateEnd);
	}

	/* /// */
	_handleTouchMovePan(e)
	{
		if (this._pointers.length === 1)
		{
			this._panEnd.set(e.pageX, e.pageY);
		}
		else
		{
			const position = this._getSecondPointerPosition(e);

			const x = 0.5 * (e.pageX + position.x);
			const y = 0.5 * (e.pageY + position.y);

			this._panEnd.set(x, y);
		}

		this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed);
		
		this._pan(this._panDelta.x, this._panDelta.y);

		this._panStart.copy(this._panEnd);
	}

	/* /// */
	_handleTouchMoveDolly(e)
	{
		const position = this._getSecondPointerPosition(e);

		const dx = e.pageX - position.x;
		const dy = e.pageY - position.y;

		const distance = Math.sqrt(dx * dx + dy * dy);

		this._dollyEnd.set(0, distance);

		this._dollyDelta.set(0, Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed));

		this._dollyOut(this._dollyDelta.y);

		this._dollyStart.copy(this._dollyEnd);

		const centerX = (e.pageX + position.x) * 0.5;
		const centerY = (e.pageY + position.y) * 0.5;

		this._updateZoomParameters(centerX, centerY);
	}

	/* /// */
	_handleTouchMoveDollyPan(e)
	{
		if (this.enableZoom)
			this._handleTouchMoveDolly(e);
		if (this.enablePan)
			this._handleTouchMovePan(e);

	}

	/* /// */
	_handleTouchMoveDollyRotate(e)
	{
		if (this.enableZoom)
			this._handleTouchMoveDolly(e);

		if (this.enableRotate) 
			this._handleTouchMoveRotate(e);
	}

	// указатели

	/* /// */
	_addPointer(e)
	{
		this._pointers.push(e.pointerId);
	}

	/* /// */
	_removePointer(e)
	{
		delete this._pointerPositions[e.pointerId];

		for (let i = 0; i < this._pointers.length; i++)
		{
			if (this._pointers[i] == e.pointerId)
			{
				this._pointers.splice(i, 1);
				return;
			}
		}
	}

	/* /// */
	_isTrackingPointer(e)
	{
		for (let i = 0; i < this._pointers.length; i++)
		{
			if (this._pointers[i] == e.pointerId) 
				return true;
		}

		return false;
	}

	/* /// */
	_trackPointer(e)
	{
		let position = this._pointerPositions[e.pointerId];

		if (position === undefined)
		{
			position = new Vector2();
			this._pointerPositions[e.pointerId] = position;
		}

		position.set(e.pageX, e.pageY);
	}

	/* /// */
	_getSecondPointerPosition(e)
	{
		const pointerId = (e.pointerId === this._pointers[0]) ? this._pointers[1] : this._pointers[0];

		return this._pointerPositions[pointerId];
	}

	//

	/* /// */
	_customWheelEvent(e)
	{
		const mode = e.deltaMode;

		// минимальное событие колеса изменено для удовлетворения спроса на дельта-приближение
		const newEvent = 
		{
			clientX: e.clientX,
			clientY: e.clientY,
			deltaY:  e.deltaY,
		};

		switch (mode)
		{
			case 1: // LINE_MODE
				newEvent.deltaY *= 16;
				break;

			case 2: // PAGE_MODE
				newEvent.deltaY *= 100;
				break;
		}

		// определить, было ли событие вызвано сжатием
		if (e.ctrlKey && !this._controlActive)
		{
			newEvent.deltaY *= 10;
		}

		return newEvent;
	}
}

// 
function onPointerDown(e)
{
	if (this.enabled === false)
		return;

	if (this._pointers.length === 0)
	{
		this.domElement.setPointerCapture(e.pointerId);

		this.domElement.addEventListener('pointermove', this._onPointerMove);
		this.domElement.addEventListener('pointerup', this._onPointerUp);
	}

	if (this._isTrackingPointer(e)) 
		return;

	this._addPointer(e);

	if (e.pointerType === 'touch')
		this._onTouchStart(e);
	else
		this._onMouseDown(e);
}

// 
function onPointerMove(e)
{
	if (this.enabled === false)
		return;

	if (e.pointerType === 'touch')
		this._onTouchMove(e);
	else
		this._onMouseMove(e);
}

// 
function onPointerUp(e)
{
	this._removePointer(e);

	switch (this._pointers.length)
	{
		case 0:
		{
			this.domElement.releasePointerCapture(e.pointerId);

			this.domElement.removeEventListener('pointermove', this._onPointerMove);
			this.domElement.removeEventListener('pointerup', this._onPointerUp);

			this.dispatchEvent(_endEvent);

			this.state = _STATE.NONE;

			break;
		}

		case 1:
		{
			const pointerId = this._pointers[0];
			const position = this._pointerPositions[pointerId];

			// минимальное событие-заполнитель - позволяет корректировать состояние при поднятии указателя
			this._onTouchStart({pointerId: pointerId, pageX: position.x, pageY: position.y});

			break;
		}
	}
}

// 
function onMouseDown(e)
{
	let mouseAction;

	switch (e.button)
	{
		case 0:
			mouseAction = this.mouseButtons.LEFT;
			break;

		case 1:
			mouseAction = this.mouseButtons.MIDDLE;
			break;

		case 2:
			mouseAction = this.mouseButtons.RIGHT;
			break;

		default:
			mouseAction = - 1;
			break;
	}

	switch (mouseAction)
	{
		case MOUSE.DOLLY:
		{
			if (this.enableZoom === false) 
				return;

			this._handleMouseDownDolly(e);

			this.state = _STATE.DOLLY;

			break;
		}

		case MOUSE.ROTATE:
		{
			if (e.ctrlKey || e.metaKey || e.shiftKey)
			{
				if (this.enablePan === false)
					return;

				this._handleMouseDownPan(e);

				this.state = _STATE.PAN;
			}
			else
			{
				if (this.enableRotate === false)
					return;

				this._handleMouseDownRotate(e);

				this.state = _STATE.ROTATE;
			}

			break;
		}

		case MOUSE.PAN:
		{
			if (e.ctrlKey || e.metaKey || e.shiftKey)
			{
				if (this.enableRotate === false)
					return;

				this._handleMouseDownRotate(e);

				this.state = _STATE.ROTATE;
			}
			else
			{
				if (this.enablePan === false)
					return;

				this._handleMouseDownPan(e);

				this.state = _STATE.PAN;
			}

			break;
		}

		default:
			this.state = _STATE.NONE;
			break;
	}

	if (this.state !== _STATE.NONE)
	{
		this.dispatchEvent(_startEvent);
	}
}

// 
function onMouseMove(e)
{
	switch (this.state)
	{
		case _STATE.ROTATE:
		{
			if (this.enableRotate === false)
				return;

			this._handleMouseMoveRotate(e);
			break;
    }

		case _STATE.DOLLY:
		{
			if (this.enableZoom === false)
				return;

			this._handleMouseMoveDolly(e);
			break;
    }

		case _STATE.PAN:
		{
			if (this.enablePan === false)
				return;

			this._handleMouseMovePan(e);
			break;
		}
	}
}

// 
function onMouseWheel(e)
{
	if (this.enabled === false || this.enableZoom === false || this.state !== _STATE.NONE) 
		return;

	e.preventDefault();

	this.dispatchEvent(_startEvent);

	this._handleMouseWheel(this._customWheelEvent(e));

	this.dispatchEvent(_endEvent);
}

// 
function onKeyDown(e)
{
	if (this.enabled === false)
		return;

	this._handleKeyDown(e);
}

// 
function onTouchStart(e)
{
	this._trackPointer(e);

	switch (this._pointers.length)
	{
		case 1:
		{
			let touche = this.touches.ONE;

			if (touche == TOUCH.ROTATE)
			{
				if (this.enableRotate === false)
					return;

				this._handleTouchStartRotate(e);
				this.state = _STATE.TOUCH_ROTATE;
			}
			else if (touche == TOUCH.PAN)
			{
				if (this.enablePan === false)
					return;

				this._handleTouchStartPan(e);
				this.state = _STATE.TOUCH_PAN;
			}
			else
				this.state = _STATE.NONE;

			break;
		}

		case 2:
		{
			let touche = this.touches.TWO;

			if (touche == TOUCH.DOLLY_PAN)
			{
				if (this.enableZoom === false && this.enablePan === false)
					return;

				this._handleTouchStartDollyPan(e);
				this.state = _STATE.TOUCH_DOLLY_PAN;
			}
			else if (touche == TOUCH.DOLLY_ROTATE)
			{
				if (this.enableZoom === false && this.enableRotate === false)
					return;

				this._handleTouchStartDollyRotate(e);
				this.state = _STATE.TOUCH_DOLLY_ROTATE;
			}
			else
			  this.state = _STATE.NONE;

			break;
		}

		default:
			this.state = _STATE.NONE;
			break;
	}

	if (this.state !== _STATE.NONE)
		this.dispatchEvent(_startEvent);
}

// 
function onTouchMove(e)
{
	this._trackPointer(e);

	switch (this.state)
	{
		case _STATE.TOUCH_ROTATE:
		{
			if (this.enableRotate === false)
				return;

			this._handleTouchMoveRotate(e);
			this.update();

			break;
    }

		case _STATE.TOUCH_PAN:
		{
			if (this.enablePan === false)
				return;

			this._handleTouchMovePan(e);
			this.update();

			break;
		}

		case _STATE.TOUCH_DOLLY_PAN:
		{
			if (this.enableZoom === false && this.enablePan === false)
				return;

			this._handleTouchMoveDollyPan(e);
			this.update();

			break;
    }

		case _STATE.TOUCH_DOLLY_ROTATE:
		{
			if (this.enableZoom === false && this.enableRotate === false)
				return;

			this._handleTouchMoveDollyRotate(e);
			this.update();

			break;
    }

		default:
			this.state = _STATE.NONE;
			break;
	}
}

// 
function onContextMenu(e)
{
	if (this.enabled === false)
		return;

	e.preventDefault();
}

// 
function interceptControlDown(e)
{
	if (e.key === 'Control')
	{
		this._controlActive = true;

		const document = this.domElement.getRootNode();  // совместимость с холстом за пределами экрана

		document.addEventListener('keyup', this._interceptControlUp, {passive: true, capture: true});
	}
}

// 
function interceptControlUp(e)
{
	if (e.key === 'Control')
	{
		this._controlActive = false;

		const document = this.domElement.getRootNode();  // совместимость с холстом за пределами экрана

		document.removeEventListener('keyup', this._interceptControlUp, {passive: true, capture: true});
	}
}

export {OrbitControls};
