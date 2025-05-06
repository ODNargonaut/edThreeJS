/* Создать сцену, камеру и рендерер */

import {mgc} from "./dt/magicNum.js";
import {mdl} from "./modules/mainModules.js";

class Scene
{
  ID_canvas = "";

  scene = null;
  camera = null;
  orbit = null;
  renderer = null;

  ambientLight = 
  {
    o: null, 
    intensity: 0.3
  }

  countZoom = 0;

  ray = 
  {
    casting: null,
    pointer: null,
    arr: []
  };

  identifyAnObjInSpace = true;


  /* ... */
  constructor(id) 
  {
    this.ID_canvas = id;
  }

  /* /// */
  createScene()
  {
    mgc.WIDTH = window.innerWidth;
    mgc.HEIGHT = window.innerHeight;

    this.scene = new mdl.Scene();
    this.scene.background = new mdl.Color(0x666666);
    
    this.scene.fog = new mdl.Fog(0xf7d9aa, 100, 950);

    let grid = new mdl.GridHelper(200, 50, 0xffffff, 0x7b7b7b);
    this.scene.add(grid);

    this.camera = new mdl.PerspectiveCamera(60, mgc.WIDTH/mgc.HEIGHT, 1, 1e4);
    this.camera.position.x = 0;
    this.camera.position.y = 70;
    this.camera.position.z = 200;

    this.renderer = new mdl.WebGLRenderer({alpha: true, antialias: true});
    this.renderer.setSize(mgc.WIDTH, mgc.HEIGHT);
    this.renderer.shadowMap.enabled = true;

    document.getElementById(this.ID_canvas).appendChild(this.renderer.domElement);

    this.orbit = new mdl.OrbitControls(this.camera, this.renderer.domElement);
    this.orbit.maxDistance = 300;  // на сколько можно отдалить камеру
    this.orbit.minDistance = 5;    // на сколько можно приблизить камеру

    this.createLight();

    this.ray.casting = new mdl.Raycaster();
    this.ray.pointer = new mdl.Vector2();

    mgc.gui.addNodeIdentifyAnObjInSpace();

    this.addResizeWin();
    this.addNodeOrbtiControls();
  }

  /* Обновить размеры при изменении окна */
  updateSize()
  {
    mgc.WIDTH = window.innerWidth;
    mgc.HEIGHT = window.innerHeight;

    mgc.scene.renderer.setSize(mgc.WIDTH, mgc.HEIGHT);

    mgc.scene.camera.aspect = mgc.WIDTH / mgc.HEIGHT;
    mgc.scene.camera.updateProjectionMatrix();

    mgc.scene.render();
  }

  /* Создние источника света */
  createLight()
  {
    let hemisphereLight = new mdl.HemisphereLight(0xAAAAAA, 0x000000, 0.9);
    let shadowLight = new mdl.DirectionalLight(0xFFFFFF, 0.9);
    shadowLight.position.set(150, 350, 350);
    shadowLight.castShadow = true;

    // определить видимую облость проецируемой тени
    let shadowCam = shadowLight.shadow.camera;
    shadowCam.left = -400;
    shadowCam.right = 400;
    shadowCam.top = 400;
    shadowCam.bottom = -400;
    shadowCam.near = 1;
    shadowCam.far = 1e3;

    // определить разрешение тени; чем выше, тем лучше
    // но также дороже и менее производительно
    shadowLight.shadow.mapSize.width = 2096;
    shadowLight.shadow.mapSize.height = 2096;

    // окружающий свет изменяет глобальный цвет сцены и делает тени мягче
    this.ambientLight.o = new mdl.AmbientLight(0xDC8874, this.ambientLight.intensity);

    this.scene.add(hemisphereLight);
    this.scene.add(shadowLight);
    this.scene.add(this.ambientLight.o);
  }

  /* /// */
  updateGroupGeometry(mesh, geometry)
  {
    mesh.children[0].geometry.dispose();
    mesh.children[1].geometry.dispose();

    mesh.children[0].geometry = new mdl.WireframeGeometry(geometry);
    mesh.children[1].geometry = geometry;
  }

  /* /// */
  updateLineSeg()
  {
    let o = mgc.figure.selGeom;
    let geometry = o.geom.object3D.children[1].geometry;

    this.updateGroupGeometry(o.geom.object3D, geometry);
    this.render();
  }

  /* /// */
  render()
  {
    let mgcs = mgc.scene;

    mgcs.ray.casting.setFromCamera(mgcs.ray.pointer, mgcs.camera);
    mgcs.ray.arr = mgcs.ray.casting.intersectObjects(mgcs.scene.children);

    mgcs.renderer.render(mgcs.scene, mgcs.camera);
  }

  /* /// */
  getW() { return $(this.renderer.domElement).width(); }

  /* /// */
  getH() { return $(this.renderer.domElement).height(); }

  /* /// */
  removeModel(model)
  {
    this.scene.remove(model);
  }

  /* /// */
  enabledOrbitControls() { this.orbit.enabled = true; }

  /* /// */
  disableOrbitControls() { this.orbit.enabled = false; }

  /* /// */
  ambientLightByDefault() 
  {
    this.ambientLight.o.intensity = this.ambientLight.intensity;
  }

  /* /// */
  addResizeWin() 
  {
    this.updateSize();
    window.addEventListener("resize", this.updateSize, false);
  }
  
  /* /// */
  removeResizeWin() { window.removeEventListener("resize", this.updateSize, false); }

  /* /// */
  addNodeOrbtiControls()
  {
    this.orbit.addEventListener("change", this.render);
  }

  /* /// */
  randomNum(min, max) { return min + Math.floor(Math.random() * max); }

  /* /// */
  reset()
  {
    this.ambientLightByDefault();
  }
}

export {Scene};
