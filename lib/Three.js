// threejs.org/license
'use strict';
var THREE = {
    REVISION: "75"
};
"function" === typeof define && define.amd ? define("three", THREE) : "undefined" !== typeof exports && "undefined" !== typeof module && (module.exports = THREE);
void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52));
void 0 === Math.sign && (Math.sign = function(a) {
    return 0 > a ? -1 : 0 < a ? 1 : +a
}
);
void 0 === Function.prototype.name && void 0 !== Object.defineProperty && Object.defineProperty(Function.prototype, "name", {
    get: function() {
        return this.toString().match(/^\s*function\s*(\S*)\s*\(/)[1]
    }
});
void 0 === Object.assign && Object.defineProperty(Object, "assign", {
    writable: !0,
    configurable: !0,
    value: function(a) {
        if (void 0 === a || null === a)
            throw new TypeError("Cannot convert first argument to object");
        for (var b = Object(a), c = 1, d = arguments.length; c !== d; ++c) {
            var e = arguments[c];
            if (void 0 !== e && null !== e)
                for (var e = Object(e), f = Object.keys(e), g = 0, h = f.length; g !== h; ++g) {
                    var k = f[g]
                      , l = Object.getOwnPropertyDescriptor(e, k);
                    void 0 !== l && l.enumerable && (b[k] = e[k])
                }
        }
        return b
    }
});
THREE.MOUSE = {
    LEFT: 0,
    MIDDLE: 1,
    RIGHT: 2
};
THREE.CullFaceNone = 0;
THREE.CullFaceBack = 1;
THREE.CullFaceFront = 2;
THREE.CullFaceFrontBack = 3;
THREE.FrontFaceDirectionCW = 0;
THREE.FrontFaceDirectionCCW = 1;
THREE.BasicShadowMap = 0;
THREE.PCFShadowMap = 1;
THREE.PCFSoftShadowMap = 2;
THREE.FrontSide = 0;
THREE.BackSide = 1;
THREE.DoubleSide = 2;
THREE.FlatShading = 1;
THREE.SmoothShading = 2;
THREE.NoColors = 0;
THREE.FaceColors = 1;
THREE.VertexColors = 2;
THREE.NoBlending = 0;
THREE.NormalBlending = 1;
THREE.AdditiveBlending = 2;
THREE.SubtractiveBlending = 3;
THREE.MultiplyBlending = 4;
THREE.CustomBlending = 5;
THREE.AddEquation = 100;
THREE.SubtractEquation = 101;
THREE.ReverseSubtractEquation = 102;
THREE.MinEquation = 103;
THREE.MaxEquation = 104;
THREE.ZeroFactor = 200;
THREE.OneFactor = 201;
THREE.SrcColorFactor = 202;
THREE.OneMinusSrcColorFactor = 203;
THREE.SrcAlphaFactor = 204;
THREE.OneMinusSrcAlphaFactor = 205;
THREE.DstAlphaFactor = 206;
THREE.OneMinusDstAlphaFactor = 207;
THREE.DstColorFactor = 208;
THREE.OneMinusDstColorFactor = 209;
THREE.SrcAlphaSaturateFactor = 210;
THREE.NeverDepth = 0;
THREE.AlwaysDepth = 1;
THREE.LessDepth = 2;
THREE.LessEqualDepth = 3;
THREE.EqualDepth = 4;
THREE.GreaterEqualDepth = 5;
THREE.GreaterDepth = 6;
THREE.NotEqualDepth = 7;
THREE.MultiplyOperation = 0;
THREE.MixOperation = 1;
THREE.AddOperation = 2;
THREE.NoToneMapping = 0;
THREE.LinearToneMapping = 1;
THREE.ReinhardToneMapping = 2;
THREE.Uncharted2ToneMapping = 3;
THREE.CineonToneMapping = 4;
THREE.UVMapping = 300;
THREE.CubeReflectionMapping = 301;
THREE.CubeRefractionMapping = 302;
THREE.EquirectangularReflectionMapping = 303;
THREE.EquirectangularRefractionMapping = 304;
THREE.SphericalReflectionMapping = 305;
THREE.CubeUVReflectionMapping = 306;
THREE.CubeUVRefractionMapping = 307;
THREE.RepeatWrapping = 1E3;
THREE.ClampToEdgeWrapping = 1001;
THREE.MirroredRepeatWrapping = 1002;
THREE.NearestFilter = 1003;
THREE.NearestMipMapNearestFilter = 1004;
THREE.NearestMipMapLinearFilter = 1005;
THREE.LinearFilter = 1006;
THREE.LinearMipMapNearestFilter = 1007;
THREE.LinearMipMapLinearFilter = 1008;
THREE.UnsignedByteType = 1009;
THREE.ByteType = 1010;
THREE.ShortType = 1011;
THREE.UnsignedShortType = 1012;
THREE.IntType = 1013;
THREE.UnsignedIntType = 1014;
THREE.FloatType = 1015;
THREE.HalfFloatType = 1025;
THREE.UnsignedShort4444Type = 1016;
THREE.UnsignedShort5551Type = 1017;
THREE.UnsignedShort565Type = 1018;
THREE.AlphaFormat = 1019;
THREE.RGBFormat = 1020;
THREE.RGBAFormat = 1021;
THREE.LuminanceFormat = 1022;
THREE.LuminanceAlphaFormat = 1023;
THREE.RGBEFormat = THREE.RGBAFormat;
THREE.RGB_S3TC_DXT1_Format = 2001;
THREE.RGBA_S3TC_DXT1_Format = 2002;
THREE.RGBA_S3TC_DXT3_Format = 2003;
THREE.RGBA_S3TC_DXT5_Format = 2004;
THREE.RGB_PVRTC_4BPPV1_Format = 2100;
THREE.RGB_PVRTC_2BPPV1_Format = 2101;
THREE.RGBA_PVRTC_4BPPV1_Format = 2102;
THREE.RGBA_PVRTC_2BPPV1_Format = 2103;
THREE.RGB_ETC1_Format = 2151;
THREE.LoopOnce = 2200;
THREE.LoopRepeat = 2201;
THREE.LoopPingPong = 2202;
THREE.InterpolateDiscrete = 2300;
THREE.InterpolateLinear = 2301;
THREE.InterpolateSmooth = 2302;
THREE.ZeroCurvatureEnding = 2400;
THREE.ZeroSlopeEnding = 2401;
THREE.WrapAroundEnding = 2402;
THREE.TrianglesDrawMode = 0;
THREE.TriangleStripDrawMode = 1;
THREE.TriangleFanDrawMode = 2;
THREE.LinearEncoding = 3E3;
THREE.sRGBEncoding = 3001;
THREE.GammaEncoding = 3007;
THREE.RGBEEncoding = 3002;
THREE.LogLuvEncoding = 3003;
THREE.RGBM7Encoding = 3004;
THREE.RGBM16Encoding = 3005;
THREE.RGBDEncoding = 3006;
THREE.Color = function(a) {
    return 3 === arguments.length ? this.fromArray(arguments) : this.set(a)
}
;
THREE.Color.prototype = {
    constructor: THREE.Color,
    r: 1,
    g: 1,
    b: 1,
    set: function(a) {
        a instanceof THREE.Color ? this.copy(a) : "number" === typeof a ? this.setHex(a) : "string" === typeof a && this.setStyle(a);
        return this
    },
    setScalar: function(a) {
        this.b = this.g = this.r = a
    },
    setHex: function(a) {
        a = Math.floor(a);
        this.r = (a >> 16 & 255) / 255;
        this.g = (a >> 8 & 255) / 255;
        this.b = (a & 255) / 255;
        return this
    },
    setRGB: function(a, b, c) {
        this.r = a;
        this.g = b;
        this.b = c;
        return this
    },
    setHSL: function() {
        function a(a, c, d) {
            0 > d && (d += 1);
            1 < d && (d -= 1);
            return d < 1 / 6 ? a + 6 * (c - a) * d : .5 > d ? c : d < 2 / 3 ? a + 6 * (c - a) * (2 / 3 - d) : a
        }
        return function(b, c, d) {
            b = THREE.Math.euclideanModulo(b, 1);
            c = THREE.Math.clamp(c, 0, 1);
            d = THREE.Math.clamp(d, 0, 1);
            0 === c ? this.r = this.g = this.b = d : (c = .5 >= d ? d * (1 + c) : d + c - d * c,
            d = 2 * d - c,
            this.r = a(d, c, b + 1 / 3),
            this.g = a(d, c, b),
            this.b = a(d, c, b - 1 / 3));
            return this
        }
    }(),
    setStyle: function(a) {
        function b(b) {
            void 0 !== b && 1 > parseFloat(b) && console.warn("THREE.Color: Alpha component of " + a + " will be ignored.")
        }
        var c;
        if (c = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(a)) {
            var d = c[2];
            switch (c[1]) {
            case "rgb":
            case "rgba":
                if (c = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d))
                    return this.r = Math.min(255, parseInt(c[1], 10)) / 255,
                    this.g = Math.min(255, parseInt(c[2], 10)) / 255,
                    this.b = Math.min(255, parseInt(c[3], 10)) / 255,
                    b(c[5]),
                    this;
                if (c = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d))
                    return this.r = Math.min(100, parseInt(c[1], 10)) / 100,
                    this.g = Math.min(100, parseInt(c[2], 10)) / 100,
                    this.b = Math.min(100, parseInt(c[3], 10)) / 100,
                    b(c[5]),
                    this;
                break;
            case "hsl":
            case "hsla":
                if (c = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d)) {
                    var d = parseFloat(c[1]) / 360
                      , e = parseInt(c[2], 10) / 100
                      , f = parseInt(c[3], 10) / 100;
                    b(c[5]);
                    return this.setHSL(d, e, f)
                }
            }
        } else if (c = /^\#([A-Fa-f0-9]+)$/.exec(a)) {
            c = c[1];
            d = c.length;
            if (3 === d)
                return this.r = parseInt(c.charAt(0) + c.charAt(0), 16) / 255,
                this.g = parseInt(c.charAt(1) + c.charAt(1), 16) / 255,
                this.b = parseInt(c.charAt(2) + c.charAt(2), 16) / 255,
                this;
            if (6 === d)
                return this.r = parseInt(c.charAt(0) + c.charAt(1), 16) / 255,
                this.g = parseInt(c.charAt(2) + c.charAt(3), 16) / 255,
                this.b = parseInt(c.charAt(4) + c.charAt(5), 16) / 255,
                this
        }
        a && 0 < a.length && (c = THREE.ColorKeywords[a],
        void 0 !== c ? this.setHex(c) : console.warn("THREE.Color: Unknown color " + a));
        return this
    },
    clone: function() {
        return new this.constructor(this.r,this.g,this.b)
    },
    copy: function(a) {
        this.r = a.r;
        this.g = a.g;
        this.b = a.b;
        return this
    },
    copyGammaToLinear: function(a, b) {
        void 0 === b && (b = 2);
        this.r = Math.pow(a.r, b);
        this.g = Math.pow(a.g, b);
        this.b = Math.pow(a.b, b);
        return this
    },
    copyLinearToGamma: function(a, b) {
        void 0 === b && (b = 2);
        var c = 0 < b ? 1 / b : 1;
        this.r = Math.pow(a.r, c);
        this.g = Math.pow(a.g, c);
        this.b = Math.pow(a.b, c);
        return this
    },
    convertGammaToLinear: function() {
        var a = this.r
          , b = this.g
          , c = this.b;
        this.r = a * a;
        this.g = b * b;
        this.b = c * c;
        return this
    },
    convertLinearToGamma: function() {
        this.r = Math.sqrt(this.r);
        this.g = Math.sqrt(this.g);
        this.b = Math.sqrt(this.b);
        return this
    },
    getHex: function() {
        return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
    },
    getHexString: function() {
        return ("000000" + this.getHex().toString(16)).slice(-6)
    },
    getHSL: function(a) {
        a = a || {
            h: 0,
            s: 0,
            l: 0
        };
        var b = this.r, c = this.g, d = this.b, e = Math.max(b, c, d), f = Math.min(b, c, d), g, h = (f + e) / 2;
        if (f === e)
            f = g = 0;
        else {
            var k = e - f
              , f = .5 >= h ? k / (e + f) : k / (2 - e - f);
            switch (e) {
            case b:
                g = (c - d) / k + (c < d ? 6 : 0);
                break;
            case c:
                g = (d - b) / k + 2;
                break;
            case d:
                g = (b - c) / k + 4
            }
            g /= 6
        }
        a.h = g;
        a.s = f;
        a.l = h;
        return a
    },
    getStyle: function() {
        return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
    },
    offsetHSL: function(a, b, c) {
        var d = this.getHSL();
        d.h += a;
        d.s += b;
        d.l += c;
        this.setHSL(d.h, d.s, d.l);
        return this
    },
    add: function(a) {
        this.r += a.r;
        this.g += a.g;
        this.b += a.b;
        return this
    },
    addColors: function(a, b) {
        this.r = a.r + b.r;
        this.g = a.g + b.g;
        this.b = a.b + b.b;
        return this
    },
    addScalar: function(a) {
        this.r += a;
        this.g += a;
        this.b += a;
        return this
    },
    multiply: function(a) {
        this.r *= a.r;
        this.g *= a.g;
        this.b *= a.b;
        return this
    },
    multiplyScalar: function(a) {
        this.r *= a;
        this.g *= a;
        this.b *= a;
        return this
    },
    lerp: function(a, b) {
        this.r += (a.r - this.r) * b;
        this.g += (a.g - this.g) * b;
        this.b += (a.b - this.b) * b;
        return this
    },
    equals: function(a) {
        return a.r === this.r && a.g === this.g && a.b === this.b
    },
    fromArray: function(a, b) {
        void 0 === b && (b = 0);
        this.r = a[b];
        this.g = a[b + 1];
        this.b = a[b + 2];
        return this
    },
    toArray: function(a, b) {
        void 0 === a && (a = []);
        void 0 === b && (b = 0);
        a[b] = this.r;
        a[b + 1] = this.g;
        a[b + 2] = this.b;
        return a
    }
};
THREE.ColorKeywords = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
};
THREE.Quaternion = function(a, b, c, d) {
    this._x = a || 0;
    this._y = b || 0;
    this._z = c || 0;
    this._w = void 0 !== d ? d : 1
}
;
THREE.Quaternion.prototype = {
    constructor: THREE.Quaternion,
    get x() {
        return this._x
    },
    set x(a) {
        this._x = a;
        this.onChangeCallback()
    },
    get y() {
        return this._y
    },
    set y(a) {
        this._y = a;
        this.onChangeCallback()
    },
    get z() {
        return this._z
    },
    set z(a) {
        this._z = a;
        this.onChangeCallback()
    },
    get w() {
        return this._w
    },
    set w(a) {
        this._w = a;
        this.onChangeCallback()
    },
    set: function(a, b, c, d) {
        this._x = a;
        this._y = b;
        this._z = c;
        this._w = d;
        this.onChangeCallback();
        return this
    },
    clone: function() {
        return new this.constructor(this._x,this._y,this._z,this._w)
    },
    copy: function(a) {
        this._x = a.x;
        this._y = a.y;
        this._z = a.z;
        this._w = a.w;
        this.onChangeCallback();
        return this
    },
    setFromEuler: function(a, b) {
        if (!1 === a instanceof THREE.Euler)
            throw Error("THREE.Quaternion: .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
        var c = Math.cos(a._x / 2)
          , d = Math.cos(a._y / 2)
          , e = Math.cos(a._z / 2)
          , f = Math.sin(a._x / 2)
          , g = Math.sin(a._y / 2)
          , h = Math.sin(a._z / 2)
          , k = a.order;
        "XYZ" === k ? (this._x = f * d * e + c * g * h,
        this._y = c * g * e - f * d * h,
        this._z = c * d * h + f * g * e,
        this._w = c * d * e - f * g * h) : "YXZ" === k ? (this._x = f * d * e + c * g * h,
        this._y = c * g * e - f * d * h,
        this._z = c * d * h - f * g * e,
        this._w = c * d * e + f * g * h) : "ZXY" === k ? (this._x = f * d * e - c * g * h,
        this._y = c * g * e + f * d * h,
        this._z = c * d * h + f * g * e,
        this._w = c * d * e - f * g * h) : "ZYX" === k ? (this._x = f * d * e - c * g * h,
        this._y = c * g * e + f * d * h,
        this._z = c * d * h - f * g * e,
        this._w = c * d * e + f * g * h) : "YZX" === k ? (this._x = f * d * e + c * g * h,
        this._y = c * g * e + f * d * h,
        this._z = c * d * h - f * g * e,
        this._w = c * d * e - f * g * h) : "XZY" === k && (this._x = f * d * e - c * g * h,
        this._y = c * g * e - f * d * h,
        this._z = c * d * h + f * g * e,
        this._w = c * d * e + f * g * h);
        if (!1 !== b)
            this.onChangeCallback();
        return this
    },
    setFromAxisAngle: function(a, b) {
        var c = b / 2
          , d = Math.sin(c);
        this._x = a.x * d;
        this._y = a.y * d;
        this._z = a.z * d;
        this._w = Math.cos(c);
        this.onChangeCallback();
        return this
    },
    setFromRotationMatrix: function(a) {
        var b = a.elements
          , c = b[0];
        a = b[4];
        var d = b[8]
          , e = b[1]
          , f = b[5]
          , g = b[9]
          , h = b[2]
          , k = b[6]
          , b = b[10]
          , l = c + f + b;
        0 < l ? (c = .5 / Math.sqrt(l + 1),
        this._w = .25 / c,
        this._x = (k - g) * c,
        this._y = (d - h) * c,
        this._z = (e - a) * c) : c > f && c > b ? (c = 2 * Math.sqrt(1 + c - f - b),
        this._w = (k - g) / c,
        this._x = .25 * c,
        this._y = (a + e) / c,
        this._z = (d + h) / c) : f > b ? (c = 2 * Math.sqrt(1 + f - c - b),
        this._w = (d - h) / c,
        this._x = (a + e) / c,
        this._y = .25 * c,
        this._z = (g + k) / c) : (c = 2 * Math.sqrt(1 + b - c - f),
        this._w = (e - a) / c,
        this._x = (d + h) / c,
        this._y = (g + k) / c,
        this._z = .25 * c);
        this.onChangeCallback();
        return this
    },
    setFromUnitVectors: function() {
        var a, b;
        return function(c, d) {
            void 0 === a && (a = new THREE.Vector3);
            b = c.dot(d) + 1;
            1E-6 > b ? (b = 0,
            Math.abs(c.x) > Math.abs(c.z) ? a.set(-c.y, c.x, 0) : a.set(0, -c.z, c.y)) : a.crossVectors(c, d);
            this._x = a.x;
            this._y = a.y;
            this._z = a.z;
            this._w = b;
            this.normalize();
            return this
        }
    }(),
    inverse: function() {
        this.conjugate().normalize();
        return this
    },
    conjugate: function() {
        this._x *= -1;
        this._y *= -1;
        this._z *= -1;
        this.onChangeCallback();
        return this
    },
    dot: function(a) {
        return this._x * a._x + this._y * a._y + this._z * a._z + this._w * a._w
    },
    lengthSq: function() {
        return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
    },
    length: function() {
        return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
    },
    normalize: function() {
        var a = this.length();
        0 === a ? (this._z = this._y = this._x = 0,
        this._w = 1) : (a = 1 / a,
        this._x *= a,
        this._y *= a,
        this._z *= a,
        this._w *= a);
        this.onChangeCallback();
        return this
    },
    multiply: function(a, b) {
        return void 0 !== b ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),
        this.multiplyQuaternions(a, b)) : this.multiplyQuaternions(this, a)
    },
    multiplyQuaternions: function(a, b) {
        var c = a._x
          , d = a._y
          , e = a._z
          , f = a._w
          , g = b._x
          , h = b._y
          , k = b._z
          , l = b._w;
        this._x = c * l + f * g + d * k - e * h;
        this._y = d * l + f * h + e * g - c * k;
        this._z = e * l + f * k + c * h - d * g;
        this._w = f * l - c * g - d * h - e * k;
        this.onChangeCallback();
        return this
    },
    slerp: function(a, b) {
        if (0 === b)
            return this;
        if (1 === b)
            return this.copy(a);
        var c = this._x
          , d = this._y
          , e = this._z
          , f = this._w
          , g = f * a._w + c * a._x + d * a._y + e * a._z;
        0 > g ? (this._w = -a._w,
        this._x = -a._x,
        this._y = -a._y,
        this._z = -a._z,
        g = -g) : this.copy(a);
        if (1 <= g)
            return this._w = f,
            this._x = c,
            this._y = d,
            this._z = e,
            this;
        var h = Math.sqrt(1 - g * g);
        if (.001 > Math.abs(h))
            return this._w = .5 * (f + this._w),
            this._x = .5 * (c + this._x),
            this._y = .5 * (d + this._y),
            this._z = .5 * (e + this._z),
            this;
        var k = Math.atan2(h, g)
          , g = Math.sin((1 - b) * k) / h
          , h = Math.sin(b * k) / h;
        this._w = f * g + this._w * h;
        this._x = c * g + this._x * h;
        this._y = d * g + this._y * h;
        this._z = e * g + this._z * h;
        this.onChangeCallback();
        return this
    },
    equals: function(a) {
        return a._x === this._x && a._y === this._y && a._z === this._z && a._w === this._w
    },
    fromArray: function(a, b) {
        void 0 === b && (b = 0);
        this._x = a[b];
        this._y = a[b + 1];
        this._z = a[b + 2];
        this._w = a[b + 3];
        this.onChangeCallback();
        return this
    },
    toArray: function(a, b) {
        void 0 === a && (a = []);
        void 0 === b && (b = 0);
        a[b] = this._x;
        a[b + 1] = this._y;
        a[b + 2] = this._z;
        a[b + 3] = this._w;
        return a
    },
    onChange: function(a) {
        this.onChangeCallback = a;
        return this
    },
    onChangeCallback: function() {}
};
Object.assign(THREE.Quaternion, {
    slerp: function(a, b, c, d) {
        return c.copy(a).slerp(b, d)
    },
    slerpFlat: function(a, b, c, d, e, f, g) {
        var h = c[d + 0]
          , k = c[d + 1]
          , l = c[d + 2];
        c = c[d + 3];
        d = e[f + 0];
        var p = e[f + 1]
          , n = e[f + 2];
        e = e[f + 3];
        if (c !== e || h !== d || k !== p || l !== n) {
            f = 1 - g;
            var m = h * d + k * p + l * n + c * e
              , q = 0 <= m ? 1 : -1
              , u = 1 - m * m;
            u > Number.EPSILON && (u = Math.sqrt(u),
            m = Math.atan2(u, m * q),
            f = Math.sin(f * m) / u,
            g = Math.sin(g * m) / u);
            q *= g;
            h = h * f + d * q;
            k = k * f + p * q;
            l = l * f + n * q;
            c = c * f + e * q;
            f === 1 - g && (g = 1 / Math.sqrt(h * h + k * k + l * l + c * c),
            h *= g,
            k *= g,
            l *= g,
            c *= g)
        }
        a[b] = h;
        a[b + 1] = k;
        a[b + 2] = l;
        a[b + 3] = c
    }
});
THREE.Vector2 = function(a, b) {
    this.x = a || 0;
    this.y = b || 0
}
;
THREE.Vector2.prototype = {
    constructor: THREE.Vector2,
    get width() {
        return this.x
    },
    set width(a) {
        this.x = a
    },
    get height() {
        return this.y
    },
    set height(a) {
        this.y = a
    },
    set: function(a, b) {
        this.x = a;
        this.y = b;
        return this
    },
    setScalar: function(a) {
        this.y = this.x = a;
        return this
    },
    setX: function(a) {
        this.x = a;
        return this
    },
    setY: function(a) {
        this.y = a;
        return this
    },
    setComponent: function(a, b) {
        switch (a) {
        case 0:
            this.x = b;
            break;
        case 1:
            this.y = b;
            break;
        default:
            throw Error("index is out of range: " + a);
        }
    },
    getComponent: function(a) {
        switch (a) {
        case 0:
            return this.x;
        case 1:
            return this.y;
        default:
            throw Error("index is out of range: " + a);
        }
    },
    clone: function() {
        return new this.constructor(this.x,this.y)
    },
    copy: function(a) {
        this.x = a.x;
        this.y = a.y;
        return this
    },
    add: function(a, b) {
        if (void 0 !== b)
            return console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
            this.addVectors(a, b);
        this.x += a.x;
        this.y += a.y;
        return this
    },
    addScalar: function(a) {
        this.x += a;
        this.y += a;
        return this
    },
    addVectors: function(a, b) {
        this.x = a.x + b.x;
        this.y = a.y + b.y;
        return this
    },
    addScaledVector: function(a, b) {
        this.x += a.x * b;
        this.y += a.y * b;
        return this
    },
    sub: function(a, b) {
        if (void 0 !== b)
            return console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
            this.subVectors(a, b);
        this.x -= a.x;
        this.y -= a.y;
        return this
    },
    subScalar: function(a) {
        this.x -= a;
        this.y -= a;
        return this
    },
    subVectors: function(a, b) {
        this.x = a.x - b.x;
        this.y = a.y - b.y;
        return this
    },
    multiply: function(a) {
        this.x *= a.x;
        this.y *= a.y;
        return this
    },
    multiplyScalar: function(a) {
        isFinite(a) ? (this.x *= a,
        this.y *= a) : this.y = this.x = 0;
        return this
    },
    divide: function(a) {
        this.x /= a.x;
        this.y /= a.y;
        return this
    },
    divideScalar: function(a) {
        return this.multiplyScalar(1 / a)
    },
    min: function(a) {
        this.x = Math.min(this.x, a.x);
        this.y = Math.min(this.y, a.y);
        return this
    },
    max: function(a) {
        this.x = Math.max(this.x, a.x);
        this.y = Math.max(this.y, a.y);
        return this
    },
    clamp: function(a, b) {
        this.x = Math.max(a.x, Math.min(b.x, this.x));
        this.y = Math.max(a.y, Math.min(b.y, this.y));
        return this
    },
    clampScalar: function() {
        var a, b;
        return function(c, d) {
            void 0 === a && (a = new THREE.Vector2,
            b = new THREE.Vector2);
            a.set(c, c);
            b.set(d, d);
            return this.clamp(a, b)
        }
    }(),
    clampLength: function(a, b) {
        var c = this.length();
        this.multiplyScalar(Math.max(a, Math.min(b, c)) / c);
        return this
    },
    floor: function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    },
    ceil: function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    },
    round: function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    },
    roundToZero: function() {
        this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x);
        this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y);
        return this
    },
    negate: function() {
        this.x = -this.x;
        this.y = -this.y;
        return this
    },
    dot: function(a) {
        return this.x * a.x + this.y * a.y
    },
    lengthSq: function() {
        return this.x * this.x + this.y * this.y
    },
    length: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    },
    lengthManhattan: function() {
        return Math.abs(this.x) + Math.abs(this.y)
    },
    normalize: function() {
        return this.divideScalar(this.length())
    },
    angle: function() {
        var a = Math.atan2(this.y, this.x);
        0 > a && (a += 2 * Math.PI);
        return a
    },
    distanceTo: function(a) {
        return Math.sqrt(this.distanceToSquared(a))
    },
    distanceToSquared: function(a) {
        var b = this.x - a.x;
        a = this.y - a.y;
        return b * b + a * a
    },
    setLength: function(a) {
        return this.multiplyScalar(a / this.length())
    },
    lerp: function(a, b) {
        this.x += (a.x - this.x) * b;
        this.y += (a.y - this.y) * b;
        return this
    },
    lerpVectors: function(a, b, c) {
        this.subVectors(b, a).multiplyScalar(c).add(a);
        return this
    },
    equals: function(a) {
        return a.x === this.x && a.y === this.y
    },
    fromArray: function(a, b) {
        void 0 === b && (b = 0);
        this.x = a[b];
        this.y = a[b + 1];
        return this
    },
    toArray: function(a, b) {
        void 0 === a && (a = []);
        void 0 === b && (b = 0);
        a[b] = this.x;
        a[b + 1] = this.y;
        return a
    },
    fromAttribute: function(a, b, c) {
        void 0 === c && (c = 0);
        b = b * a.itemSize + c;
        this.x = a.array[b];
        this.y = a.array[b + 1];
        return this
    },
    rotateAround: function(a, b) {
        var c = Math.cos(b)
          , d = Math.sin(b)
          , e = this.x - a.x
          , f = this.y - a.y;
        this.x = e * c - f * d + a.x;
        this.y = e * d + f * c + a.y;
        return this
    }
};
THREE.Vector3 = function(a, b, c) {
    this.x = a || 0;
    this.y = b || 0;
    this.z = c || 0
}
;
THREE.Vector3.prototype = {
    constructor: THREE.Vector3,
    set: function(a, b, c) {
        this.x = a;
        this.y = b;
        this.z = c;
        return this
    },
    setScalar: function(a) {
        this.z = this.y = this.x = a;
        return this
    },
    setX: function(a) {
        this.x = a;
        return this
    },
    setY: function(a) {
        this.y = a;
        return this
    },
    setZ: function(a) {
        this.z = a;
        return this
    },
    setComponent: function(a, b) {
        switch (a) {
        case 0:
            this.x = b;
            break;
        case 1:
            this.y = b;
            break;
        case 2:
            this.z = b;
            break;
        default:
            throw Error("index is out of range: " + a);
        }
    },
    getComponent: function(a) {
        switch (a) {
        case 0:
            return this.x;
        case 1:
            return this.y;
        case 2:
            return this.z;
        default:
            throw Error("index is out of range: " + a);
        }
    },
    clone: function() {
        return new this.constructor(this.x,this.y,this.z)
    },
    copy: function(a) {
        this.x = a.x;
        this.y = a.y;
        this.z = a.z;
        return this
    },
    add: function(a, b) {
        if (void 0 !== b)
            return console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
            this.addVectors(a, b);
        this.x += a.x;
        this.y += a.y;
        this.z += a.z;
        return this
    },
    addScalar: function(a) {
        this.x += a;
        this.y += a;
        this.z += a;
        return this
    },
    addVectors: function(a, b) {
        this.x = a.x + b.x;
        this.y = a.y + b.y;
        this.z = a.z + b.z;
        return this
    },
    addScaledVector: function(a, b) {
        this.x += a.x * b;
        this.y += a.y * b;
        this.z += a.z * b;
        return this
    },
    sub: function(a, b) {
        if (void 0 !== b)
            return console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
            this.subVectors(a, b);
        this.x -= a.x;
        this.y -= a.y;
        this.z -= a.z;
        return this
    },
    subScalar: function(a) {
        this.x -= a;
        this.y -= a;
        this.z -= a;
        return this
    },
    subVectors: function(a, b) {
        this.x = a.x - b.x;
        this.y = a.y - b.y;
        this.z = a.z - b.z;
        return this
    },
    multiply: function(a, b) {
        if (void 0 !== b)
            return console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),
            this.multiplyVectors(a, b);
        this.x *= a.x;
        this.y *= a.y;
        this.z *= a.z;
        return this
    },
    multiplyScalar: function(a) {
        isFinite(a) ? (this.x *= a,
        this.y *= a,
        this.z *= a) : this.z = this.y = this.x = 0;
        return this
    },
    multiplyVectors: function(a, b) {
        this.x = a.x * b.x;
        this.y = a.y * b.y;
        this.z = a.z * b.z;
        return this
    },
    applyEuler: function() {
        var a;
        return function(b) {
            !1 === b instanceof THREE.Euler && console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order.");
            void 0 === a && (a = new THREE.Quaternion);
            this.applyQuaternion(a.setFromEuler(b));
            return this
        }
    }(),
    applyAxisAngle: function() {
        var a;
        return function(b, c) {
            void 0 === a && (a = new THREE.Quaternion);
            this.applyQuaternion(a.setFromAxisAngle(b, c));
            return this
        }
    }(),
    applyMatrix3: function(a) {
        var b = this.x
          , c = this.y
          , d = this.z;
        a = a.elements;
        this.x = a[0] * b + a[3] * c + a[6] * d;
        this.y = a[1] * b + a[4] * c + a[7] * d;
        this.z = a[2] * b + a[5] * c + a[8] * d;
        return this
    },
    applyMatrix4: function(a) {
        var b = this.x
          , c = this.y
          , d = this.z;
        a = a.elements;
        this.x = a[0] * b + a[4] * c + a[8] * d + a[12];
        this.y = a[1] * b + a[5] * c + a[9] * d + a[13];
        this.z = a[2] * b + a[6] * c + a[10] * d + a[14];
        return this
    },
    applyProjection: function(a) {
        var b = this.x
          , c = this.y
          , d = this.z;
        a = a.elements;
        var e = 1 / (a[3] * b + a[7] * c + a[11] * d + a[15]);
        this.x = (a[0] * b + a[4] * c + a[8] * d + a[12]) * e;
        this.y = (a[1] * b + a[5] * c + a[9] * d + a[13]) * e;
        this.z = (a[2] * b + a[6] * c + a[10] * d + a[14]) * e;
        return this
    },
    applyQuaternion: function(a) {
        var b = this.x
          , c = this.y
          , d = this.z
          , e = a.x
          , f = a.y
          , g = a.z;
        a = a.w;
        var h = a * b + f * d - g * c
          , k = a * c + g * b - e * d
          , l = a * d + e * c - f * b
          , b = -e * b - f * c - g * d;
        this.x = h * a + b * -e + k * -g - l * -f;
        this.y = k * a + b * -f + l * -e - h * -g;
        this.z = l * a + b * -g + h * -f - k * -e;
        return this
    },
    project: function() {
        var a;
        return function(b) {
            void 0 === a && (a = new THREE.Matrix4);
            a.multiplyMatrices(b.projectionMatrix, a.getInverse(b.matrixWorld));
            return this.applyProjection(a)
        }
    }(),
    unproject: function() {
        var a;
        return function(b) {
            void 0 === a && (a = new THREE.Matrix4);
            a.multiplyMatrices(b.matrixWorld, a.getInverse(b.projectionMatrix));
            return this.applyProjection(a)
        }
    }(),
    transformDirection: function(a) {
        var b = this.x
          , c = this.y
          , d = this.z;
        a = a.elements;
        this.x = a[0] * b + a[4] * c + a[8] * d;
        this.y = a[1] * b + a[5] * c + a[9] * d;
        this.z = a[2] * b + a[6] * c + a[10] * d;
        this.normalize();
        return this
    },
    divide: function(a) {
        this.x /= a.x;
        this.y /= a.y;
        this.z /= a.z;
        return this
    },
    divideScalar: function(a) {
        return this.multiplyScalar(1 / a)
    },
    min: function(a) {
        this.x = Math.min(this.x, a.x);
        this.y = Math.min(this.y, a.y);
        this.z = Math.min(this.z, a.z);
        return this
    },
    max: function(a) {
        this.x = Math.max(this.x, a.x);
        this.y = Math.max(this.y, a.y);
        this.z = Math.max(this.z, a.z);
        return this
    },
    clamp: function(a, b) {
        this.x = Math.max(a.x, Math.min(b.x, this.x));
        this.y = Math.max(a.y, Math.min(b.y, this.y));
        this.z = Math.max(a.z, Math.min(b.z, this.z));
        return this
    },
    clampScalar: function() {
        var a, b;
        return function(c, d) {
            void 0 === a && (a = new THREE.Vector3,
            b = new THREE.Vector3);
            a.set(c, c, c);
            b.set(d, d, d);
            return this.clamp(a, b)
        }
    }(),
    clampLength: function(a, b) {
        var c = this.length();
        this.multiplyScalar(Math.max(a, Math.min(b, c)) / c);
        return this
    },
    floor: function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        this.z = Math.floor(this.z);
        return this
    },
    ceil: function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        this.z = Math.ceil(this.z);
        return this
    },
    round: function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        this.z = Math.round(this.z);
        return this
    },
    roundToZero: function() {
        this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x);
        this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y);
        this.z = 0 > this.z ? Math.ceil(this.z) : Math.floor(this.z);
        return this
    },
    negate: function() {
        this.x = -this.x;
        this.y = -this.y;
        this.z = -this.z;
        return this
    },
    dot: function(a) {
        return this.x * a.x + this.y * a.y + this.z * a.z
    },
    lengthSq: function() {
        return this.x * this.x + this.y * this.y + this.z * this.z
    },
    length: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
    },
    lengthManhattan: function() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
    },
    normalize: function() {
        return this.divideScalar(this.length())
    },
    setLength: function(a) {
        return this.multiplyScalar(a / this.length())
    },
    lerp: function(a, b) {
        this.x += (a.x - this.x) * b;
        this.y += (a.y - this.y) * b;
        this.z += (a.z - this.z) * b;
        return this
    },
    lerpVectors: function(a, b, c) {
        this.subVectors(b, a).multiplyScalar(c).add(a);
        return this
    },
    cross: function(a, b) {
        if (void 0 !== b)
            return console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),
            this.crossVectors(a, b);
        var c = this.x
          , d = this.y
          , e = this.z;
        this.x = d * a.z - e * a.y;
        this.y = e * a.x - c * a.z;
        this.z = c * a.y - d * a.x;
        return this
    },
    crossVectors: function(a, b) {
        var c = a.x
          , d = a.y
          , e = a.z
          , f = b.x
          , g = b.y
          , h = b.z;
        this.x = d * h - e * g;
        this.y = e * f - c * h;
        this.z = c * g - d * f;
        return this
    },
    projectOnVector: function() {
        var a, b;
        return function(c) {
            void 0 === a && (a = new THREE.Vector3);
            a.copy(c).normalize();
            b = this.dot(a);
            return this.copy(a).multiplyScalar(b)
        }
    }(),
    projectOnPlane: function() {
        var a;
        return function(b) {
            void 0 === a && (a = new THREE.Vector3);
            a.copy(this).projectOnVector(b);
            return this.sub(a)
        }
    }(),
    reflect: function() {
        var a;
        return function(b) {
            void 0 === a && (a = new THREE.Vector3);
            return this.sub(a.copy(b).multiplyScalar(2 * this.dot(b)))
        }
    }(),
    angleTo: function(a) {
        a = this.dot(a) / Math.sqrt(this.lengthSq() * a.lengthSq());
        return Math.acos(THREE.Math.clamp(a, -1, 1))
    },
    distanceTo: function(a) {
        return Math.sqrt(this.distanceToSquared(a))
    },
    distanceToSquared: function(a) {
        var b = this.x - a.x
          , c = this.y - a.y;
        a = this.z - a.z;
        return b * b + c * c + a * a
    },
    setFromSpherical: function(a) {
        var b = Math.sin(a.phi) * a.radius;
        this.x = b * Math.sin(a.theta);
        this.y = Math.cos(a.phi) * a.radius;
        this.z = b * Math.cos(a.theta);
        return this
    },
    setFromMatrixPosition: function(a) {
        return this.setFromMatrixColumn(a, 3)
    },
    setFromMatrixScale: function(a) {
        var b = this.setFromMatrixColumn(a, 0).length()
          , c = this.setFromMatrixColumn(a, 1).length();
        a = this.setFromMatrixColumn(a, 2).length();
        this.x = b;
        this.y = c;
        this.z = a;
        return this
    },
    setFromMatrixColumn: function(a, b) {
        "number" === typeof a && (console.warn("THREE.Vector3: setFromMatrixColumn now expects ( matrix, index )."),
        b = a = b);
        return this.fromArray(a.elements, 4 * b)
    },
    equals: function(a) {
        return a.x === this.x && a.y === this.y && a.z === this.z
    },
    fromArray: function(a, b) {
        void 0 === b && (b = 0);
        this.x = a[b];
        this.y = a[b + 1];
        this.z = a[b + 2];
        return this
    },
    toArray: function(a, b) {
        void 0 === a && (a = []);
        void 0 === b && (b = 0);
        a[b] = this.x;
        a[b + 1] = this.y;
        a[b + 2] = this.z;
        return a
    },
    fromAttribute: function(a, b, c) {
        void 0 === c && (c = 0);
        b = b * a.itemSize + c;
        this.x = a.array[b];
        this.y = a.array[b + 1];
        this.z = a.array[b + 2];
        return this
    }
};
THREE.Vector4 = function(a, b, c, d) {
    this.x = a || 0;
    this.y = b || 0;
    this.z = c || 0;
    this.w = void 0 !== d ? d : 1
}
;
THREE.Vector4.prototype = {
    constructor: THREE.Vector4,
    set: function(a, b, c, d) {
        this.x = a;
        this.y = b;
        this.z = c;
        this.w = d;
        return this
    },
    setScalar: function(a) {
        this.w = this.z = this.y = this.x = a;
        return this
    },
    setX: function(a) {
        this.x = a;
        return this
    },
    setY: function(a) {
        this.y = a;
        return this
    },
    setZ: function(a) {
        this.z = a;
        return this
    },
    setW: function(a) {
        this.w = a;
        return this
    },
    setComponent: function(a, b) {
        switch (a) {
        case 0:
            this.x = b;
            break;
        case 1:
            this.y = b;
            break;
        case 2:
            this.z = b;
            break;
        case 3:
            this.w = b;
            break;
        default:
            throw Error("index is out of range: " + a);
        }
    },
    getComponent: function(a) {
        switch (a) {
        case 0:
            return this.x;
        case 1:
            return this.y;
        case 2:
            return this.z;
        case 3:
            return this.w;
        default:
            throw Error("index is out of range: " + a);
        }
    },
    clone: function() {
        return new this.constructor(this.x,this.y,this.z,this.w)
    },
    copy: function(a) {
        this.x = a.x;
        this.y = a.y;
        this.z = a.z;
        this.w = void 0 !== a.w ? a.w : 1;
        return this
    },
    add: function(a, b) {
        if (void 0 !== b)
            return console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
            this.addVectors(a, b);
        this.x += a.x;
        this.y += a.y;
        this.z += a.z;
        this.w += a.w;
        return this
    },
    addScalar: function(a) {
        this.x += a;
        this.y += a;
        this.z += a;
        this.w += a;
        return this
    },
    addVectors: function(a, b) {
        this.x = a.x + b.x;
        this.y = a.y + b.y;
        this.z = a.z + b.z;
        this.w = a.w + b.w;
        return this
    },
    addScaledVector: function(a, b) {
        this.x += a.x * b;
        this.y += a.y * b;
        this.z += a.z * b;
        this.w += a.w * b;
        return this
    },
    sub: function(a, b) {
        if (void 0 !== b)
            return console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
            this.subVectors(a, b);
        this.x -= a.x;
        this.y -= a.y;
        this.z -= a.z;
        this.w -= a.w;
        return this
    },
    subScalar: function(a) {
        this.x -= a;
        this.y -= a;
        this.z -= a;
        this.w -= a;
        return this
    },
    subVectors: function(a, b) {
        this.x = a.x - b.x;
        this.y = a.y - b.y;
        this.z = a.z - b.z;
        this.w = a.w - b.w;
        return this
    },
    multiplyScalar: function(a) {
        isFinite(a) ? (this.x *= a,
        this.y *= a,
        this.z *= a,
        this.w *= a) : this.w = this.z = this.y = this.x = 0;
        return this
    },
    applyMatrix4: function(a) {
        var b = this.x
          , c = this.y
          , d = this.z
          , e = this.w;
        a = a.elements;
        this.x = a[0] * b + a[4] * c + a[8] * d + a[12] * e;
        this.y = a[1] * b + a[5] * c + a[9] * d + a[13] * e;
        this.z = a[2] * b + a[6] * c + a[10] * d + a[14] * e;
        this.w = a[3] * b + a[7] * c + a[11] * d + a[15] * e;
        return this
    },
    divideScalar: function(a) {
        return this.multiplyScalar(1 / a)
    },
    setAxisAngleFromQuaternion: function(a) {
        this.w = 2 * Math.acos(a.w);
        var b = Math.sqrt(1 - a.w * a.w);
        1E-4 > b ? (this.x = 1,
        this.z = this.y = 0) : (this.x = a.x / b,
        this.y = a.y / b,
        this.z = a.z / b);
        return this
    },
    setAxisAngleFromRotationMatrix: function(a) {
        var b, c, d;
        a = a.elements;
        var e = a[0];
        d = a[4];
        var f = a[8]
          , g = a[1]
          , h = a[5]
          , k = a[9];
        c = a[2];
        b = a[6];
        var l = a[10];
        if (.01 > Math.abs(d - g) && .01 > Math.abs(f - c) && .01 > Math.abs(k - b)) {
            if (.1 > Math.abs(d + g) && .1 > Math.abs(f + c) && .1 > Math.abs(k + b) && .1 > Math.abs(e + h + l - 3))
                return this.set(1, 0, 0, 0),
                this;
            a = Math.PI;
            e = (e + 1) / 2;
            h = (h + 1) / 2;
            l = (l + 1) / 2;
            d = (d + g) / 4;
            f = (f + c) / 4;
            k = (k + b) / 4;
            e > h && e > l ? .01 > e ? (b = 0,
            d = c = .707106781) : (b = Math.sqrt(e),
            c = d / b,
            d = f / b) : h > l ? .01 > h ? (b = .707106781,
            c = 0,
            d = .707106781) : (c = Math.sqrt(h),
            b = d / c,
            d = k / c) : .01 > l ? (c = b = .707106781,
            d = 0) : (d = Math.sqrt(l),
            b = f / d,
            c = k / d);
            this.set(b, c, d, a);
            return this
        }
        a = Math.sqrt((b - k) * (b - k) + (f - c) * (f - c) + (g - d) * (g - d));
        .001 > Math.abs(a) && (a = 1);
        this.x = (b - k) / a;
        this.y = (f - c) / a;
        this.z = (g - d) / a;
        this.w = Math.acos((e + h + l - 1) / 2);
        return this
    },
    min: function(a) {
        this.x = Math.min(this.x, a.x);
        this.y = Math.min(this.y, a.y);
        this.z = Math.min(this.z, a.z);
        this.w = Math.min(this.w, a.w);
        return this
    },
    max: function(a) {
        this.x = Math.max(this.x, a.x);
        this.y = Math.max(this.y, a.y);
        this.z = Math.max(this.z, a.z);
        this.w = Math.max(this.w, a.w);
        return this
    },
    clamp: function(a, b) {
        this.x = Math.max(a.x, Math.min(b.x, this.x));
        this.y = Math.max(a.y, Math.min(b.y, this.y));
        this.z = Math.max(a.z, Math.min(b.z, this.z));
        this.w = Math.max(a.w, Math.min(b.w, this.w));
        return this
    },
    clampScalar: function() {
        var a, b;
        return function(c, d) {
            void 0 === a && (a = new THREE.Vector4,
            b = new THREE.Vector4);
            a.set(c, c, c, c);
            b.set(d, d, d, d);
            return this.clamp(a, b)
        }
    }(),
    floor: function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        this.z = Math.floor(this.z);
        this.w = Math.floor(this.w);
        return this
    },
    ceil: function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        this.z = Math.ceil(this.z);
        this.w = Math.ceil(this.w);
        return this
    },
    round: function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        this.z = Math.round(this.z);
        this.w = Math.round(this.w);
        return this
    },
    roundToZero: function() {
        this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x);
        this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y);
        this.z = 0 > this.z ? Math.ceil(this.z) : Math.floor(this.z);
        this.w = 0 > this.w ? Math.ceil(this.w) : Math.floor(this.w);
        return this
    },
    negate: function() {
        this.x = -this.x;
        this.y = -this.y;
        this.z = -this.z;
        this.w = -this.w;
        return this
    },
    dot: function(a) {
        return this.x * a.x + this.y * a.y + this.z * a.z + this.w * a.w
    },
    lengthSq: function() {
        return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    },
    length: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
    },
    lengthManhattan: function() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    },
    normalize: function() {
        return this.divideScalar(this.length())
    },
    setLength: function(a) {
        return this.multiplyScalar(a / this.length())
    },
    lerp: function(a, b) {
        this.x += (a.x - this.x) * b;
        this.y += (a.y - this.y) * b;
        this.z += (a.z - this.z) * b;
        this.w += (a.w - this.w) * b;
        return this
    },
    lerpVectors: function(a, b, c) {
        this.subVectors(b, a).multiplyScalar(c).add(a);
        return this
    },
    equals: function(a) {
        return a.x === this.x && a.y === this.y && a.z === this.z && a.w === this.w
    },
    fromArray: function(a, b) {
        void 0 === b && (b = 0);
        this.x = a[b];
        this.y = a[b + 1];
        this.z = a[b + 2];
        this.w = a[b + 3];
        return this
    },
    toArray: function(a, b) {
        void 0 === a && (a = []);
        void 0 === b && (b = 0);
        a[b] = this.x;
        a[b + 1] = this.y;
        a[b + 2] = this.z;
        a[b + 3] = this.w;
        return a
    },
    fromAttribute: function(a, b, c) {
        void 0 === c && (c = 0);
        b = b * a.itemSize + c;
        this.x = a.array[b];
        this.y = a.array[b + 1];
        this.z = a.array[b + 2];
        this.w = a.array[b + 3];
        return this
    }
};
THREE.Euler = function(a, b, c, d) {
    this._x = a || 0;
    this._y = b || 0;
    this._z = c || 0;
    this._order = d || THREE.Euler.DefaultOrder
}
;
THREE.Euler.RotationOrders = "XYZ YZX ZXY XZY YXZ ZYX".split(" ");
THREE.Euler.DefaultOrder = "XYZ";
THREE.Euler.prototype = {
    constructor: THREE.Euler,
    get x() {
        return this._x
    },
    set x(a) {
        this._x = a;
        this.onChangeCallback()
    },
    get y() {
        return this._y
    },
    set y(a) {
        this._y = a;
        this.onChangeCallback()
    },
    get z() {
        return this._z
    },
    set z(a) {
        this._z = a;
        this.onChangeCallback()
    },
    get order() {
        return this._order
    },
    set order(a) {
        this._order = a;
        this.onChangeCallback()
    },
    set: function(a, b, c, d) {
        this._x = a;
        this._y = b;
        this._z = c;
        this._order = d || this._order;
        this.onChangeCallback();
        return this
    },
    clone: function() {
        return new this.constructor(this._x,this._y,this._z,this._order)
    },
    copy: function(a) {
        this._x = a._x;
        this._y = a._y;
        this._z = a._z;
        this._order = a._order;
        this.onChangeCallback();
        return this
    },
    setFromRotationMatrix: function(a, b, c) {
        var d = THREE.Math.clamp
          , e = a.elements;
        a = e[0];
        var f = e[4]
          , g = e[8]
          , h = e[1]
          , k = e[5]
          , l = e[9]
          , p = e[2]
          , n = e[6]
          , e = e[10];
        b = b || this._order;
        "XYZ" === b ? (this._y = Math.asin(d(g, -1, 1)),
        .99999 > Math.abs(g) ? (this._x = Math.atan2(-l, e),
        this._z = Math.atan2(-f, a)) : (this._x = Math.atan2(n, k),
        this._z = 0)) : "YXZ" === b ? (this._x = Math.asin(-d(l, -1, 1)),
        .99999 > Math.abs(l) ? (this._y = Math.atan2(g, e),
        this._z = Math.atan2(h, k)) : (this._y = Math.atan2(-p, a),
        this._z = 0)) : "ZXY" === b ? (this._x = Math.asin(d(n, -1, 1)),
        .99999 > Math.abs(n) ? (this._y = Math.atan2(-p, e),
        this._z = Math.atan2(-f, k)) : (this._y = 0,
        this._z = Math.atan2(h, a))) : "ZYX" === b ? (this._y = Math.asin(-d(p, -1, 1)),
        .99999 > Math.abs(p) ? (this._x = Math.atan2(n, e),
        this._z = Math.atan2(h, a)) : (this._x = 0,
        this._z = Math.atan2(-f, k))) : "YZX" === b ? (this._z = Math.asin(d(h, -1, 1)),
        .99999 > Math.abs(h) ? (this._x = Math.atan2(-l, k),
        this._y = Math.atan2(-p, a)) : (this._x = 0,
        this._y = Math.atan2(g, e))) : "XZY" === b ? (this._z = Math.asin(-d(f, -1, 1)),
        .99999 > Math.abs(f) ? (this._x = Math.atan2(n, k),
        this._y = Math.atan2(g, a)) : (this._x = Math.atan2(-l, e),
        this._y = 0)) : console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + b);
        this._order = b;
        if (!1 !== c)
            this.onChangeCallback();
        return this
    },
    setFromQuaternion: function() {
        var a;
        return function(b, c, d) {
            void 0 === a && (a = new THREE.Matrix4);
            a.makeRotationFromQuaternion(b);
            this.setFromRotationMatrix(a, c, d);
            return this
        }
    }(),
    setFromVector3: function(a, b) {
        return this.set(a.x, a.y, a.z, b || this._order)
    },
    reorder: function() {
        var a = new THREE.Quaternion;
        return function(b) {
            a.setFromEuler(this);
            this.setFromQuaternion(a, b)
        }
    }(),
    equals: function(a) {
        return a._x === this._x && a._y === this._y && a._z === this._z && a._order === this._order
    },
    fromArray: function(a) {
        this._x = a[0];
        this._y = a[1];
        this._z = a[2];
        void 0 !== a[3] && (this._order = a[3]);
        this.onChangeCallback();
        return this
    },
    toArray: function(a, b) {
        void 0 === a && (a = []);
        void 0 === b && (b = 0);
        a[b] = this._x;
        a[b + 1] = this._y;
        a[b + 2] = this._z;
        a[b + 3] = this._order;
        return a
    },
    toVector3: function(a) {
        return a ? a.set(this._x, this._y, this._z) : new THREE.Vector3(this._x,this._y,this._z)
    },
    onChange: function(a) {
        this.onChangeCallback = a;
        return this
    },
    onChangeCallback: function() {}
};
THREE.Line3 = function(a, b) {
    this.start = void 0 !== a ? a : new THREE.Vector3;
    this.end = void 0 !== b ? b : new THREE.Vector3
}
;
THREE.Line3.prototype = {
    constructor: THREE.Line3,
    set: function(a, b) {
        this.start.copy(a);
        this.end.copy(b);
        return this
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(a) {
        this.start.copy(a.start);
        this.end.copy(a.end);
        return this
    },
    center: function(a) {
        return (a || new THREE.Vector3).addVectors(this.start, this.end).multiplyScalar(.5)
    },
    delta: function(a) {
        return (a || new THREE.Vector3).subVectors(this.end, this.start)
    },
    distanceSq: function() {
        return this.start.distanceToSquared(this.end)
    },
    distance: function() {
        return this.start.distanceTo(this.end)
    },
    at: function(a, b) {
        var c = b || new THREE.Vector3;
        return this.delta(c).multiplyScalar(a).add(this.start)
    },
    closestPointToPointParameter: function() {
        var a = new THREE.Vector3
          , b = new THREE.Vector3;
        return function(c, d) {
            a.subVectors(c, this.start);
            b.subVectors(this.end, this.start);
            var e = b.dot(b)
              , e = b.dot(a) / e;
            d && (e = THREE.Math.clamp(e, 0, 1));
            return e
        }
    }(),
    closestPointToPoint: function(a, b, c) {
        a = this.closestPointToPointParameter(a, b);
        c = c || new THREE.Vector3;
        return this.delta(c).multiplyScalar(a).add(this.start)
    },
    applyMatrix4: function(a) {
        this.start.applyMatrix4(a);
        this.end.applyMatrix4(a);
        return this
    },
    equals: function(a) {
        return a.start.equals(this.start) && a.end.equals(this.end)
    }
};
THREE.Box2 = function(a, b) {
    this.min = void 0 !== a ? a : new THREE.Vector2(Infinity,Infinity);
    this.max = void 0 !== b ? b : new THREE.Vector2(-Infinity,-Infinity)
}
;
THREE.Box2.prototype = {
    constructor: THREE.Box2,
    set: function(a, b) {
        this.min.copy(a);
        this.max.copy(b);
        return this
    },
    setFromPoints: function(a) {
        this.makeEmpty();
        for (var b = 0, c = a.length; b < c; b++)
            this.expandByPoint(a[b]);
        return this
    },
    setFromCenterAndSize: function() {
        var a = new THREE.Vector2;
        return function(b, c) {
            var d = a.copy(c).multiplyScalar(.5);
            this.min.copy(b).sub(d);
            this.max.copy(b).add(d);
            return this
        }
    }(),
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(a) {
        this.min.copy(a.min);
        this.max.copy(a.max);
        return this
    },
    makeEmpty: function() {
        this.min.x = this.min.y = Infinity;
        this.max.x = this.max.y = -Infinity;
        return this
    },
    isEmpty: function() {
        return this.max.x < this.min.x || this.max.y < this.min.y
    },
    center: function(a) {
        return (a || new THREE.Vector2).addVectors(this.min, this.max).multiplyScalar(.5)
    },
    size: function(a) {
        return (a || new THREE.Vector2).subVectors(this.max, this.min)
    },
    expandByPoint: function(a) {
        this.min.min(a);
        this.max.max(a);
        return this
    },
    expandByVector: function(a) {
        this.min.sub(a);
        this.max.add(a);
        return this
    },
    expandByScalar: function(a) {
        this.min.addScalar(-a);
        this.max.addScalar(a);
        return this
    },
    containsPoint: function(a) {
        return a.x < this.min.x || a.x > this.max.x || a.y < this.min.y || a.y > this.max.y ? !1 : !0
    },
    containsBox: function(a) {
        return this.min.x <= a.min.x && a.max.x <= this.max.x && this.min.y <= a.min.y && a.max.y <= this.max.y ? !0 : !1
    },
    getParameter: function(a, b) {
        return (b || new THREE.Vector2).set((a.x - this.min.x) / (this.max.x - this.min.x), (a.y - this.min.y) / (this.max.y - this.min.y))
    },
    intersectsBox: function(a) {
        return a.max.x < this.min.x || a.min.x > this.max.x || a.max.y < this.min.y || a.min.y > this.max.y ? !1 : !0
    },
    clampPoint: function(a, b) {
        return (b || new THREE.Vector2).copy(a).clamp(this.min, this.max)
    },
    distanceToPoint: function() {
        var a = new THREE.Vector2;
        return function(b) {
            return a.copy(b).clamp(this.min, this.max).sub(b).length()
        }
    }(),
    intersect: function(a) {
        this.min.max(a.min);
        this.max.min(a.max);
        return this
    },
    union: function(a) {
        this.min.min(a.min);
        this.max.max(a.max);
        return this
    },
    translate: function(a) {
        this.min.add(a);
        this.max.add(a);
        return this
    },
    equals: function(a) {
        return a.min.equals(this.min) && a.max.equals(this.max)
    }
};
THREE.Box3 = function(a, b) {
    this.min = void 0 !== a ? a : new THREE.Vector3(Infinity,Infinity,Infinity);
    this.max = void 0 !== b ? b : new THREE.Vector3(-Infinity,-Infinity,-Infinity)
}
;
THREE.Box3.prototype = {
    constructor: THREE.Box3,
    set: function(a, b) {
        this.min.copy(a);
        this.max.copy(b);
        return this
    },
    setFromArray: function(a) {
        this.makeEmpty();
        for (var b = Infinity, c = Infinity, d = Infinity, e = -Infinity, f = -Infinity, g = -Infinity, h = 0, k = a.length; h < k; h += 3) {
            var l = a[h]
              , p = a[h + 1]
              , n = a[h + 2];
            l < b && (b = l);
            p < c && (c = p);
            n < d && (d = n);
            l > e && (e = l);
            p > f && (f = p);
            n > g && (g = n)
        }
        this.min.set(b, c, d);
        this.max.set(e, f, g)
    },
    setFromPoints: function(a) {
        this.makeEmpty();
        for (var b = 0, c = a.length; b < c; b++)
            this.expandByPoint(a[b]);
        return this
    },
    setFromCenterAndSize: function() {
        var a = new THREE.Vector3;
        return function(b, c) {
            var d = a.copy(c).multiplyScalar(.5);
            this.min.copy(b).sub(d);
            this.max.copy(b).add(d);
            return this
        }
    }(),
    setFromObject: function() {
        var a;
        return function(b) {
            void 0 === a && (a = new THREE.Box3);
            var c = this;
            this.makeEmpty();
            b.updateMatrixWorld(!0);
            b.traverse(function(b) {
                var e = b.geometry;
                void 0 !== e && (null === e.boundingBox && e.computeBoundingBox(),
                !1 === e.boundingBox.isEmpty() && (a.copy(e.boundingBox),
                a.applyMatrix4(b.matrixWorld),
                c.union(a)))
            });
            return this
        }
    }(),
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(a) {
        this.min.copy(a.min);
        this.max.copy(a.max);
        return this
    },
    makeEmpty: function() {
        this.min.x = this.min.y = this.min.z = Infinity;
        this.max.x = this.max.y = this.max.z = -Infinity;
        return this
    },
    isEmpty: function() {
        return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
    },
    center: function(a) {
        return (a || new THREE.Vector3).addVectors(this.min, this.max).multiplyScalar(.5)
    },
    size: function(a) {
        return (a || new THREE.Vector3).subVectors(this.max, this.min)
    },
    expandByPoint: function(a) {
        this.min.min(a);
        this.max.max(a);
        return this
    },
    expandByVector: function(a) {
        this.min.sub(a);
        this.max.add(a);
        return this
    },
    expandByScalar: function(a) {
        this.min.addScalar(-a);
        this.max.addScalar(a);
        return this
    },
    containsPoint: function(a) {
        return a.x < this.min.x || a.x > this.max.x || a.y < this.min.y || a.y > this.max.y || a.z < this.min.z || a.z > this.max.z ? !1 : !0
    },
    containsBox: function(a) {
        return this.min.x <= a.min.x && a.max.x <= this.max.x && this.min.y <= a.min.y && a.max.y <= this.max.y && this.min.z <= a.min.z && a.max.z <= this.max.z ? !0 : !1
    },
    getParameter: function(a, b) {
        return (b || new THREE.Vector3).set((a.x - this.min.x) / (this.max.x - this.min.x), (a.y - this.min.y) / (this.max.y - this.min.y), (a.z - this.min.z) / (this.max.z - this.min.z))
    },
    intersectsBox: function(a) {
        return a.max.x < this.min.x || a.min.x > this.max.x || a.max.y < this.min.y || a.min.y > this.max.y || a.max.z < this.min.z || a.min.z > this.max.z ? !1 : !0
    },
    intersectsSphere: function() {
        var a;
        return function(b) {
            void 0 === a && (a = new THREE.Vector3);
            this.clampPoint(b.center, a);
            return a.distanceToSquared(b.center) <= b.radius * b.radius
        }
    }(),
    intersectsPlane: function(a) {
        var b, c;
        0 < a.normal.x ? (b = a.normal.x * this.min.x,
        c = a.normal.x * this.max.x) : (b = a.normal.x * this.max.x,
        c = a.normal.x * this.min.x);
        0 < a.normal.y ? (b += a.normal.y * this.min.y,
        c += a.normal.y * this.max.y) : (b += a.normal.y * this.max.y,
        c += a.normal.y * this.min.y);
        0 < a.normal.z ? (b += a.normal.z * this.min.z,
        c += a.normal.z * this.max.z) : (b += a.normal.z * this.max.z,
        c += a.normal.z * this.min.z);
        return b <= a.constant && c >= a.constant
    },
    clampPoint: function(a, b) {
        return (b || new THREE.Vector3).copy(a).clamp(this.min, this.max)
    },
    distanceToPoint: function() {
        var a = new THREE.Vector3;
        return function(b) {
            return a.copy(b).clamp(this.min, this.max).sub(b).length()
        }
    }(),
    getBoundingSphere: function() {
        var a = new THREE.Vector3;
        return function(b) {
            b = b || new THREE.Sphere;
            b.center = this.center();
            b.radius = .5 * this.size(a).length();
            return b
        }
    }(),
    intersect: function(a) {
        this.min.max(a.min);
        this.max.min(a.max);
        return this
    },
    union: function(a) {
        this.min.min(a.min);
        this.max.max(a.max);
        return this
    },
    applyMatrix4: function() {
        var a = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3];
        return function(b) {
            a[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(b);
            a[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(b);
            a[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(b);
            a[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(b);
            a[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(b);
            a[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(b);
            a[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(b);
            a[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(b);
            this.makeEmpty();
            this.setFromPoints(a);
            return this
        }
    }(),
    translate: function(a) {
        this.min.add(a);
        this.max.add(a);
        return this
    },
    equals: function(a) {
        return a.min.equals(this.min) && a.max.equals(this.max)
    }
};
THREE.Matrix3 = function() {
    this.elements = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
    0 < arguments.length && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
}
;
THREE.Matrix3.prototype = {
    constructor: THREE.Matrix3,
    set: function(a, b, c, d, e, f, g, h, k) {
        var l = this.elements;
        l[0] = a;
        l[1] = d;
        l[2] = g;
        l[3] = b;
        l[4] = e;
        l[5] = h;
        l[6] = c;
        l[7] = f;
        l[8] = k;
        return this
    },
    identity: function() {
        this.set(1, 0, 0, 0, 1, 0, 0, 0, 1);
        return this
    },
    clone: function() {
        return (new this.constructor).fromArray(this.elements)
    },
    copy: function(a) {
        a = a.elements;
        this.set(a[0], a[3], a[6], a[1], a[4], a[7], a[2], a[5], a[8]);
        return this
    },
    setFromMatrix4: function(a) {
        a = a.elements;
        this.set(a[0], a[4], a[8], a[1], a[5], a[9], a[2], a[6], a[10]);
        return this
    },
    applyToVector3Array: function() {
        var a;
        return function(b, c, d) {
            void 0 === a && (a = new THREE.Vector3);
            void 0 === c && (c = 0);
            void 0 === d && (d = b.length);
            for (var e = 0; e < d; e += 3,
            c += 3)
                a.fromArray(b, c),
                a.applyMatrix3(this),
                a.toArray(b, c);
            return b
        }
    }(),
    applyToBuffer: function() {
        var a;
        return function(b, c, d) {
            void 0 === a && (a = new THREE.Vector3);
            void 0 === c && (c = 0);
            void 0 === d && (d = b.length / b.itemSize);
            for (var e = 0; e < d; e++,
            c++)
                a.x = b.getX(c),
                a.y = b.getY(c),
                a.z = b.getZ(c),
                a.applyMatrix3(this),
                b.setXYZ(a.x, a.y, a.z);
            return b
        }
    }(),
    multiplyScalar: function(a) {
        var b = this.elements;
        b[0] *= a;
        b[3] *= a;
        b[6] *= a;
        b[1] *= a;
        b[4] *= a;
        b[7] *= a;
        b[2] *= a;
        b[5] *= a;
        b[8] *= a;
        return this
    },
    determinant: function() {
        var a = this.elements
          , b = a[0]
          , c = a[1]
          , d = a[2]
          , e = a[3]
          , f = a[4]
          , g = a[5]
          , h = a[6]
          , k = a[7]
          , a = a[8];
        return b * f * a - b * g * k - c * e * a + c * g * h + d * e * k - d * f * h
    },
    getInverse: function(a, b) {
        a instanceof THREE.Matrix4 && console.warn("THREE.Matrix3.getInverse no longer takes a Matrix4 argument.");
        var c = a.elements
          , d = this.elements
          , e = c[0]
          , f = c[1]
          , g = c[2]
          , h = c[3]
          , k = c[4]
          , l = c[5]
          , p = c[6]
          , n = c[7]
          , c = c[8]
          , m = c * k - l * n
          , q = l * p - c * h
          , u = n * h - k * p
          , v = e * m + f * q + g * u;
        if (0 === v) {
            if (b)
                throw Error("THREE.Matrix3.getInverse(): can't invert matrix, determinant is 0");
            console.warn("THREE.Matrix3.getInverse(): can't invert matrix, determinant is 0");
            return this.identity()
        }
        d[0] = m;
        d[1] = g * n - c * f;
        d[2] = l * f - g * k;
        d[3] = q;
        d[4] = c * e - g * p;
        d[5] = g * h - l * e;
        d[6] = u;
        d[7] = f * p - n * e;
        d[8] = k * e - f * h;
        return this.multiplyScalar(1 / v)
    },
    transpose: function() {
        var a, b = this.elements;
        a = b[1];
        b[1] = b[3];
        b[3] = a;
        a = b[2];
        b[2] = b[6];
        b[6] = a;
        a = b[5];
        b[5] = b[7];
        b[7] = a;
        return this
    },
    flattenToArrayOffset: function(a, b) {
        var c = this.elements;
        a[b] = c[0];
        a[b + 1] = c[1];
        a[b + 2] = c[2];
        a[b + 3] = c[3];
        a[b + 4] = c[4];
        a[b + 5] = c[5];
        a[b + 6] = c[6];
        a[b + 7] = c[7];
        a[b + 8] = c[8];
        return a
    },
    getNormalMatrix: function(a) {
        return this.setFromMatrix4(a).getInverse(this).transpose()
    },
    transposeIntoArray: function(a) {
        var b = this.elements;
        a[0] = b[0];
        a[1] = b[3];
        a[2] = b[6];
        a[3] = b[1];
        a[4] = b[4];
        a[5] = b[7];
        a[6] = b[2];
        a[7] = b[5];
        a[8] = b[8];
        return this
    },
    fromArray: function(a) {
        this.elements.set(a);
        return this
    },
    toArray: function() {
        var a = this.elements;
        return [a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8]]
    }
};
THREE.Matrix4 = function() {
    this.elements = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    0 < arguments.length && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
}
;
THREE.Matrix4.prototype = {
    constructor: THREE.Matrix4,
    set: function(a, b, c, d, e, f, g, h, k, l, p, n, m, q, u, v) {
        var t = this.elements;
        t[0] = a;
        t[4] = b;
        t[8] = c;
        t[12] = d;
        t[1] = e;
        t[5] = f;
        t[9] = g;
        t[13] = h;
        t[2] = k;
        t[6] = l;
        t[10] = p;
        t[14] = n;
        t[3] = m;
        t[7] = q;
        t[11] = u;
        t[15] = v;
        return this
    },
    identity: function() {
        this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return this
    },
    clone: function() {
        return (new THREE.Matrix4).fromArray(this.elements)
    },
    copy: function(a) {
        this.elements.set(a.elements);
        return this
    },
    copyPosition: function(a) {
        var b = this.elements;
        a = a.elements;
        b[12] = a[12];
        b[13] = a[13];
        b[14] = a[14];
        return this
    },
    extractBasis: function(a, b, c) {
        a.setFromMatrixColumn(this, 0);
        b.setFromMatrixColumn(this, 1);
        c.setFromMatrixColumn(this, 2);
        return this
    },
    makeBasis: function(a, b, c) {
        this.set(a.x, b.x, c.x, 0, a.y, b.y, c.y, 0, a.z, b.z, c.z, 0, 0, 0, 0, 1);
        return this
    },
    extractRotation: function() {
        var a;
        return function(b) {
            void 0 === a && (a = new THREE.Vector3);
            var c = this.elements
              , d = b.elements
              , e = 1 / a.setFromMatrixColumn(b, 0).length()
              , f = 1 / a.setFromMatrixColumn(b, 1).length();
            b = 1 / a.setFromMatrixColumn(b, 2).length();
            c[0] = d[0] * e;
            c[1] = d[1] * e;
            c[2] = d[2] * e;
            c[4] = d[4] * f;
            c[5] = d[5] * f;
            c[6] = d[6] * f;
            c[8] = d[8] * b;
            c[9] = d[9] * b;
            c[10] = d[10] * b;
            return this
        }
    }(),
    makeRotationFromEuler: function(a) {
        !1 === a instanceof THREE.Euler && console.error("THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
        var b = this.elements
          , c = a.x
          , d = a.y
          , e = a.z
          , f = Math.cos(c)
          , c = Math.sin(c)
          , g = Math.cos(d)
          , d = Math.sin(d)
          , h = Math.cos(e)
          , e = Math.sin(e);
        if ("XYZ" === a.order) {
            a = f * h;
            var k = f * e
              , l = c * h
              , p = c * e;
            b[0] = g * h;
            b[4] = -g * e;
            b[8] = d;
            b[1] = k + l * d;
            b[5] = a - p * d;
            b[9] = -c * g;
            b[2] = p - a * d;
            b[6] = l + k * d;
            b[10] = f * g
        } else
            "YXZ" === a.order ? (a = g * h,
            k = g * e,
            l = d * h,
            p = d * e,
            b[0] = a + p * c,
            b[4] = l * c - k,
            b[8] = f * d,
            b[1] = f * e,
            b[5] = f * h,
            b[9] = -c,
            b[2] = k * c - l,
            b[6] = p + a * c,
            b[10] = f * g) : "ZXY" === a.order ? (a = g * h,
            k = g * e,
            l = d * h,
            p = d * e,
            b[0] = a - p * c,
            b[4] = -f * e,
            b[8] = l + k * c,
            b[1] = k + l * c,
            b[5] = f * h,
            b[9] = p - a * c,
            b[2] = -f * d,
            b[6] = c,
            b[10] = f * g) : "ZYX" === a.order ? (a = f * h,
            k = f * e,
            l = c * h,
            p = c * e,
            b[0] = g * h,
            b[4] = l * d - k,
            b[8] = a * d + p,
            b[1] = g * e,
            b[5] = p * d + a,
            b[9] = k * d - l,
            b[2] = -d,
            b[6] = c * g,
            b[10] = f * g) : "YZX" === a.order ? (a = f * g,
            k = f * d,
            l = c * g,
            p = c * d,
            b[0] = g * h,
            b[4] = p - a * e,
            b[8] = l * e + k,
            b[1] = e,
            b[5] = f * h,
            b[9] = -c * h,
            b[2] = -d * h,
            b[6] = k * e + l,
            b[10] = a - p * e) : "XZY" === a.order && (a = f * g,
            k = f * d,
            l = c * g,
            p = c * d,
            b[0] = g * h,
            b[4] = -e,
            b[8] = d * h,
            b[1] = a * e + p,
            b[5] = f * h,
            b[9] = k * e - l,
            b[2] = l * e - k,
            b[6] = c * h,
            b[10] = p * e + a);
        b[3] = 0;
        b[7] = 0;
        b[11] = 0;
        b[12] = 0;
        b[13] = 0;
        b[14] = 0;
        b[15] = 1;
        return this
    },
    makeRotationFromQuaternion: function(a) {
        var b = this.elements
          , c = a.x
          , d = a.y
          , e = a.z
          , f = a.w
          , g = c + c
          , h = d + d
          , k = e + e;
        a = c * g;
        var l = c * h
          , c = c * k
          , p = d * h
          , d = d * k
          , e = e * k
          , g = f * g
          , h = f * h
          , f = f * k;
        b[0] = 1 - (p + e);
        b[4] = l - f;
        b[8] = c + h;
        b[1] = l + f;
        b[5] = 1 - (a + e);
        b[9] = d - g;
        b[2] = c - h;
        b[6] = d + g;
        b[10] = 1 - (a + p);
        b[3] = 0;
        b[7] = 0;
        b[11] = 0;
        b[12] = 0;
        b[13] = 0;
        b[14] = 0;
        b[15] = 1;
        return this
    },
    lookAt: function() {
        var a, b, c;
        return function(d, e, f) {
            void 0 === a && (a = new THREE.Vector3);
            void 0 === b && (b = new THREE.Vector3);
            void 0 === c && (c = new THREE.Vector3);
            var g = this.elements;
            c.subVectors(d, e).normalize();
            0 === c.lengthSq() && (c.z = 1);
            a.crossVectors(f, c).normalize();
            0 === a.lengthSq() && (c.x += 1E-4,
            a.crossVectors(f, c).normalize());
            b.crossVectors(c, a);
            g[0] = a.x;
            g[4] = b.x;
            g[8] = c.x;
            g[1] = a.y;
            g[5] = b.y;
            g[9] = c.y;
            g[2] = a.z;
            g[6] = b.z;
            g[10] = c.z;
            return this
        }
    }(),
    multiply: function(a, b) {
        return void 0 !== b ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),
        this.multiplyMatrices(a, b)) : this.multiplyMatrices(this, a)
    },
    multiplyMatrices: function(a, b) {
        var c = a.elements
          , d = b.elements
          , e = this.elements
          , f = c[0]
          , g = c[4]
          , h = c[8]
          , k = c[12]
          , l = c[1]
          , p = c[5]
          , n = c[9]
          , m = c[13]
          , q = c[2]
          , u = c[6]
          , v = c[10]
          , t = c[14]
          , s = c[3]
          , w = c[7]
          , E = c[11]
          , c = c[15]
          , x = d[0]
          , D = d[4]
          , z = d[8]
          , y = d[12]
          , B = d[1]
          , G = d[5]
          , F = d[9]
          , H = d[13]
          , L = d[2]
          , A = d[6]
          , N = d[10]
          , M = d[14]
          , I = d[3]
          , O = d[7]
          , Q = d[11]
          , d = d[15];
        e[0] = f * x + g * B + h * L + k * I;
        e[4] = f * D + g * G + h * A + k * O;
        e[8] = f * z + g * F + h * N + k * Q;
        e[12] = f * y + g * H + h * M + k * d;
        e[1] = l * x + p * B + n * L + m * I;
        e[5] = l * D + p * G + n * A + m * O;
        e[9] = l * z + p * F + n * N + m * Q;
        e[13] = l * y + p * H + n * M + m * d;
        e[2] = q * x + u * B + v * L + t * I;
        e[6] = q * D + u * G + v * A + t * O;
        e[10] = q * z + u * F + v * N + t * Q;
        e[14] = q * y + u * H + v * M + t * d;
        e[3] = s * x + w * B + E * L + c * I;
        e[7] = s * D + w * G + E * A + c * O;
        e[11] = s * z + w * F + E * N + c * Q;
        e[15] = s * y + w * H + E * M + c * d;
        return this
    },
    multiplyToArray: function(a, b, c) {
        var d = this.elements;
        this.multiplyMatrices(a, b);
        c[0] = d[0];
        c[1] = d[1];
        c[2] = d[2];
        c[3] = d[3];
        c[4] = d[4];
        c[5] = d[5];
        c[6] = d[6];
        c[7] = d[7];
        c[8] = d[8];
        c[9] = d[9];
        c[10] = d[10];
        c[11] = d[11];
        c[12] = d[12];
        c[13] = d[13];
        c[14] = d[14];
        c[15] = d[15];
        return this
    },
    multiplyScalar: function(a) {
        var b = this.elements;
        b[0] *= a;
        b[4] *= a;
        b[8] *= a;
        b[12] *= a;
        b[1] *= a;
        b[5] *= a;
        b[9] *= a;
        b[13] *= a;
        b[2] *= a;
        b[6] *= a;
        b[10] *= a;
        b[14] *= a;
        b[3] *= a;
        b[7] *= a;
        b[11] *= a;
        b[15] *= a;
        return this
    },
    applyToVector3Array: function() {
        var a;
        return function(b, c, d) {
            void 0 === a && (a = new THREE.Vector3);
            void 0 === c && (c = 0);
            void 0 === d && (d = b.length);
            for (var e = 0; e < d; e += 3,
            c += 3)
                a.fromArray(b, c),
                a.applyMatrix4(this),
                a.toArray(b, c);
            return b
        }
    }(),
    applyToBuffer: function() {
        var a;
        return function(b, c, d) {
            void 0 === a && (a = new THREE.Vector3);
            void 0 === c && (c = 0);
            void 0 === d && (d = b.length / b.itemSize);
            for (var e = 0; e < d; e++,
            c++)
                a.x = b.getX(c),
                a.y = b.getY(c),
                a.z = b.getZ(c),
                a.applyMatrix4(this),
                b.setXYZ(a.x, a.y, a.z);
            return b
        }
    }(),
    determinant: function() {
        var a = this.elements
          , b = a[0]
          , c = a[4]
          , d = a[8]
          , e = a[12]
          , f = a[1]
          , g = a[5]
          , h = a[9]
          , k = a[13]
          , l = a[2]
          , p = a[6]
          , n = a[10]
          , m = a[14];
        return a[3] * (+e * h * p - d * k * p - e * g * n + c * k * n + d * g * m - c * h * m) + a[7] * (+b * h * m - b * k * n + e * f * n - d * f * m + d * k * l - e * h * l) + a[11] * (+b * k * p - b * g * m - e * f * p + c * f * m + e * g * l - c * k * l) + a[15] * (-d * g * l - b * h * p + b * g * n + d * f * p - c * f * n + c * h * l)
    },
    transpose: function() {
        var a = this.elements, b;
        b = a[1];
        a[1] = a[4];
        a[4] = b;
        b = a[2];
        a[2] = a[8];
        a[8] = b;
        b = a[6];
        a[6] = a[9];
        a[9] = b;
        b = a[3];
        a[3] = a[12];
        a[12] = b;
        b = a[7];
        a[7] = a[13];
        a[13] = b;
        b = a[11];
        a[11] = a[14];
        a[14] = b;
        return this
    },
    flattenToArrayOffset: function(a, b) {
        var c = this.elements;
        a[b] = c[0];
        a[b + 1] = c[1];
        a[b + 2] = c[2];
        a[b + 3] = c[3];
        a[b + 4] = c[4];
        a[b + 5] = c[5];
        a[b + 6] = c[6];
        a[b + 7] = c[7];
        a[b + 8] = c[8];
        a[b + 9] = c[9];
        a[b + 10] = c[10];
        a[b + 11] = c[11];
        a[b + 12] = c[12];
        a[b + 13] = c[13];
        a[b + 14] = c[14];
        a[b + 15] = c[15];
        return a
    },
    getPosition: function() {
        var a;
        return function() {
            void 0 === a && (a = new THREE.Vector3);
            console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");
            return a.setFromMatrixColumn(this, 3)
        }
    }(),
    setPosition: function(a) {
        var b = this.elements;
        b[12] = a.x;
        b[13] = a.y;
        b[14] = a.z;
        return this
    },
    getInverse: function(a, b) {
        var c = this.elements
          , d = a.elements
          , e = d[0]
          , f = d[1]
          , g = d[2]
          , h = d[3]
          , k = d[4]
          , l = d[5]
          , p = d[6]
          , n = d[7]
          , m = d[8]
          , q = d[9]
          , u = d[10]
          , v = d[11]
          , t = d[12]
          , s = d[13]
          , w = d[14]
          , d = d[15]
          , E = q * w * n - s * u * n + s * p * v - l * w * v - q * p * d + l * u * d
          , x = t * u * n - m * w * n - t * p * v + k * w * v + m * p * d - k * u * d
          , D = m * s * n - t * q * n + t * l * v - k * s * v - m * l * d + k * q * d
          , z = t * q * p - m * s * p - t * l * u + k * s * u + m * l * w - k * q * w
          , y = e * E + f * x + g * D + h * z;
        if (0 === y) {
            if (b)
                throw Error("THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0");
            console.warn("THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0");
            return this.identity()
        }
        c[0] = E;
        c[1] = s * u * h - q * w * h - s * g * v + f * w * v + q * g * d - f * u * d;
        c[2] = l * w * h - s * p * h + s * g * n - f * w * n - l * g * d + f * p * d;
        c[3] = q * p * h - l * u * h - q * g * n + f * u * n + l * g * v - f * p * v;
        c[4] = x;
        c[5] = m * w * h - t * u * h + t * g * v - e * w * v - m * g * d + e * u * d;
        c[6] = t * p * h - k * w * h - t * g * n + e * w * n + k * g * d - e * p * d;
        c[7] = k * u * h - m * p * h + m * g * n - e * u * n - k * g * v + e * p * v;
        c[8] = D;
        c[9] = t * q * h - m * s * h - t * f * v + e * s * v + m * f * d - e * q * d;
        c[10] = k * s * h - t * l * h + t * f * n - e * s * n - k * f * d + e * l * d;
        c[11] = m * l * h - k * q * h - m * f * n + e * q * n + k * f * v - e * l * v;
        c[12] = z;
        c[13] = m * s * g - t * q * g + t * f * u - e * s * u - m * f * w + e * q * w;
        c[14] = t * l * g - k * s * g - t * f * p + e * s * p + k * f * w - e * l * w;
        c[15] = k * q * g - m * l * g + m * f * p - e * q * p - k * f * u + e * l * u;
        return this.multiplyScalar(1 / y)
    },
    scale: function(a) {
        var b = this.elements
          , c = a.x
          , d = a.y;
        a = a.z;
        b[0] *= c;
        b[4] *= d;
        b[8] *= a;
        b[1] *= c;
        b[5] *= d;
        b[9] *= a;
        b[2] *= c;
        b[6] *= d;
        b[10] *= a;
        b[3] *= c;
        b[7] *= d;
        b[11] *= a;
        return this
    },
    getMaxScaleOnAxis: function() {
        var a = this.elements;
        return Math.sqrt(Math.max(a[0] * a[0] + a[1] * a[1] + a[2] * a[2], a[4] * a[4] + a[5] * a[5] + a[6] * a[6], a[8] * a[8] + a[9] * a[9] + a[10] * a[10]))
    },
    makeTranslation: function(a, b, c) {
        this.set(1, 0, 0, a, 0, 1, 0, b, 0, 0, 1, c, 0, 0, 0, 1);
        return this
    },
    makeRotationX: function(a) {
        var b = Math.cos(a);
        a = Math.sin(a);
        this.set(1, 0, 0, 0, 0, b, -a, 0, 0, a, b, 0, 0, 0, 0, 1);
        return this
    },
    makeRotationY: function(a) {
        var b = Math.cos(a);
        a = Math.sin(a);
        this.set(b, 0, a, 0, 0, 1, 0, 0, -a, 0, b, 0, 0, 0, 0, 1);
        return this
    },
    makeRotationZ: function(a) {
        var b = Math.cos(a);
        a = Math.sin(a);
        this.set(b, -a, 0, 0, a, b, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return this
    },
    makeRotationAxis: function(a, b) {
        var c = Math.cos(b)
          , d = Math.sin(b)
          , e = 1 - c
          , f = a.x
          , g = a.y
          , h = a.z
          , k = e * f
          , l = e * g;
        this.set(k * f + c, k * g - d * h, k * h + d * g, 0, k * g + d * h, l * g + c, l * h - d * f, 0, k * h - d * g, l * h + d * f, e * h * h + c, 0, 0, 0, 0, 1);
        return this
    },
    makeScale: function(a, b, c) {
        this.set(a, 0, 0, 0, 0, b, 0, 0, 0, 0, c, 0, 0, 0, 0, 1);
        return this
    },
    compose: function(a, b, c) {
        this.makeRotationFromQuaternion(b);
        this.scale(c);
        this.setPosition(a);
        return this
    },
    decompose: function() {
        var a, b;
        return function(c, d, e) {
            void 0 === a && (a = new THREE.Vector3);
            void 0 === b && (b = new THREE.Matrix4);
            var f = this.elements
              , g = a.set(f[0], f[1], f[2]).length()
              , h = a.set(f[4], f[5], f[6]).length()
              , k = a.set(f[8], f[9], f[10]).length();
            0 > this.determinant() && (g = -g);
            c.x = f[12];
            c.y = f[13];
            c.z = f[14];
            b.elements.set(this.elements);
            c = 1 / g;
            var f = 1 / h
              , l = 1 / k;
            b.elements[0] *= c;
            b.elements[1] *= c;
            b.elements[2] *= c;
            b.elements[4] *= f;
            b.elements[5] *= f;
            b.elements[6] *= f;
            b.elements[8] *= l;
            b.elements[9] *= l;
            b.elements[10] *= l;
            d.setFromRotationMatrix(b);
            e.x = g;
            e.y = h;
            e.z = k;
            return this
        }
    }(),
    makeFrustum: function(a, b, c, d, e, f) {
        var g = this.elements;
        g[0] = 2 * e / (b - a);
        g[4] = 0;
        g[8] = (b + a) / (b - a);
        g[12] = 0;
        g[1] = 0;
        g[5] = 2 * e / (d - c);
        g[9] = (d + c) / (d - c);
        g[13] = 0;
        g[2] = 0;
        g[6] = 0;
        g[10] = -(f + e) / (f - e);
        g[14] = -2 * f * e / (f - e);
        g[3] = 0;
        g[7] = 0;
        g[11] = -1;
        g[15] = 0;
        return this
    },
    makePerspective: function(a, b, c, d) {
        a = c * Math.tan(THREE.Math.degToRad(.5 * a));
        var e = -a;
        return this.makeFrustum(e * b, a * b, e, a, c, d)
    },
    makeOrthographic: function(a, b, c, d, e, f) {
        var g = this.elements
          , h = 1 / (b - a)
          , k = 1 / (c - d)
          , l = 1 / (f - e);
        g[0] = 2 * h;
        g[4] = 0;
        g[8] = 0;
        g[12] = -((b + a) * h);
        g[1] = 0;
        g[5] = 2 * k;
        g[9] = 0;
        g[13] = -((c + d) * k);
        g[2] = 0;
        g[6] = 0;
        g[10] = -2 * l;
        g[14] = -((f + e) * l);
        g[3] = 0;
        g[7] = 0;
        g[11] = 0;
        g[15] = 1;
        return this
    },
    equals: function(a) {
        var b = this.elements;
        a = a.elements;
        for (var c = 0; 16 > c; c++)
            if (b[c] !== a[c])
                return !1;
        return !0
    },
    fromArray: function(a) {
        this.elements.set(a);
        return this
    },
    toArray: function() {
        var a = this.elements;
        return [a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]]
    }
};
THREE.Ray = function(a, b) {
    this.origin = void 0 !== a ? a : new THREE.Vector3;
    this.direction = void 0 !== b ? b : new THREE.Vector3
}
;
THREE.Ray.prototype = {
    constructor: THREE.Ray,
    set: function(a, b) {
        this.origin.copy(a);
        this.direction.copy(b);
        return this
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(a) {
        this.origin.copy(a.origin);
        this.direction.copy(a.direction);
        return this
    },
    at: function(a, b) {
        return (b || new THREE.Vector3).copy(this.direction).multiplyScalar(a).add(this.origin)
    },
    lookAt: function(a) {
        this.direction.copy(a).sub(this.origin).normalize()
    },
    recast: function() {
        var a = new THREE.Vector3;
        return function(b) {
            this.origin.copy(this.at(b, a));
            return this
        }
    }(),
    closestPointToPoint: function(a, b) {
        var c = b || new THREE.Vector3;
        c.subVectors(a, this.origin);
        var d = c.dot(this.direction);
        return 0 > d ? c.copy(this.origin) : c.copy(this.direction).multiplyScalar(d).add(this.origin)
    },
    distanceToPoint: function(a) {
        return Math.sqrt(this.distanceSqToPoint(a))
    },
    distanceSqToPoint: function() {
        var a = new THREE.Vector3;
        return function(b) {
            var c = a.subVectors(b, this.origin).dot(this.direction);
            if (0 > c)
                return this.origin.distanceToSquared(b);
            a.copy(this.direction).multiplyScalar(c).add(this.origin);
            return a.distanceToSquared(b)
        }
    }(),
    distanceSqToSegment: function() {
        var a = new THREE.Vector3
          , b = new THREE.Vector3
          , c = new THREE.Vector3;
        return function(d, e, f, g) {
            a.copy(d).add(e).multiplyScalar(.5);
            b.copy(e).sub(d).normalize();
            c.copy(this.origin).sub(a);
            var h = .5 * d.distanceTo(e), k = -this.direction.dot(b), l = c.dot(this.direction), p = -c.dot(b), n = c.lengthSq(), m = Math.abs(1 - k * k), q;
            0 < m ? (d = k * p - l,
            e = k * l - p,
            q = h * m,
            0 <= d ? e >= -q ? e <= q ? (h = 1 / m,
            d *= h,
            e *= h,
            k = d * (d + k * e + 2 * l) + e * (k * d + e + 2 * p) + n) : (e = h,
            d = Math.max(0, -(k * e + l)),
            k = -d * d + e * (e + 2 * p) + n) : (e = -h,
            d = Math.max(0, -(k * e + l)),
            k = -d * d + e * (e + 2 * p) + n) : e <= -q ? (d = Math.max(0, -(-k * h + l)),
            e = 0 < d ? -h : Math.min(Math.max(-h, -p), h),
            k = -d * d + e * (e + 2 * p) + n) : e <= q ? (d = 0,
            e = Math.min(Math.max(-h, -p), h),
            k = e * (e + 2 * p) + n) : (d = Math.max(0, -(k * h + l)),
            e = 0 < d ? h : Math.min(Math.max(-h, -p), h),
            k = -d * d + e * (e + 2 * p) + n)) : (e = 0 < k ? -h : h,
            d = Math.max(0, -(k * e + l)),
            k = -d * d + e * (e + 2 * p) + n);
            f && f.copy(this.direction).multiplyScalar(d).add(this.origin);
            g && g.copy(b).multiplyScalar(e).add(a);
            return k
        }
    }(),
    intersectSphere: function() {
        var a = new THREE.Vector3;
        return function(b, c) {
            a.subVectors(b.center, this.origin);
            var d = a.dot(this.direction)
              , e = a.dot(a) - d * d
              , f = b.radius * b.radius;
            if (e > f)
                return null;
            f = Math.sqrt(f - e);
            e = d - f;
            d += f;
            return 0 > e && 0 > d ? null : 0 > e ? this.at(d, c) : this.at(e, c)
        }
    }(),
    intersectsSphere: function(a) {
        return this.distanceToPoint(a.center) <= a.radius
    },
    distanceToPlane: function(a) {
        var b = a.normal.dot(this.direction);
        if (0 === b)
            return 0 === a.distanceToPoint(this.origin) ? 0 : null;
        a = -(this.origin.dot(a.normal) + a.constant) / b;
        return 0 <= a ? a : null
    },
    intersectPlane: function(a, b) {
        var c = this.distanceToPlane(a);
        return null === c ? null : this.at(c, b)
    },
    intersectsPlane: function(a) {
        var b = a.distanceToPoint(this.origin);
        return 0 === b || 0 > a.normal.dot(this.direction) * b ? !0 : !1
    },
    intersectBox: function(a, b) {
        var c, d, e, f, g;
        d = 1 / this.direction.x;
        f = 1 / this.direction.y;
        g = 1 / this.direction.z;
        var h = this.origin;
        0 <= d ? (c = (a.min.x - h.x) * d,
        d *= a.max.x - h.x) : (c = (a.max.x - h.x) * d,
        d *= a.min.x - h.x);
        0 <= f ? (e = (a.min.y - h.y) * f,
        f *= a.max.y - h.y) : (e = (a.max.y - h.y) * f,
        f *= a.min.y - h.y);
        if (c > f || e > d)
            return null;
        if (e > c || c !== c)
            c = e;
        if (f < d || d !== d)
            d = f;
        0 <= g ? (e = (a.min.z - h.z) * g,
        g *= a.max.z - h.z) : (e = (a.max.z - h.z) * g,
        g *= a.min.z - h.z);
        if (c > g || e > d)
            return null;
        if (e > c || c !== c)
            c = e;
        if (g < d || d !== d)
            d = g;
        return 0 > d ? null : this.at(0 <= c ? c : d, b)
    },
    intersectsBox: function() {
        var a = new THREE.Vector3;
        return function(b) {
            return null !== this.intersectBox(b, a)
        }
    }(),
    intersectTriangle: function() {
        var a = new THREE.Vector3
          , b = new THREE.Vector3
          , c = new THREE.Vector3
          , d = new THREE.Vector3;
        return function(e, f, g, h, k) {
            b.subVectors(f, e);
            c.subVectors(g, e);
            d.crossVectors(b, c);
            f = this.direction.dot(d);
            if (0 < f) {
                if (h)
                    return null;
                h = 1
            } else if (0 > f)
                h = -1,
                f = -f;
            else
                return null;
            a.subVectors(this.origin, e);
            e = h * this.direction.dot(c.crossVectors(a, c));
            if (0 > e)
                return null;
            g = h * this.direction.dot(b.cross(a));
            if (0 > g || e + g > f)
                return null;
            e = -h * a.dot(d);
            return 0 > e ? null : this.at(e / f, k)
        }
    }(),
    applyMatrix4: function(a) {
        this.direction.add(this.origin).applyMatrix4(a);
        this.origin.applyMatrix4(a);
        this.direction.sub(this.origin);
        this.direction.normalize();
        return this
    },
    equals: function(a) {
        return a.origin.equals(this.origin) && a.direction.equals(this.direction)
    }
};
THREE.Sphere = function(a, b) {
    this.center = void 0 !== a ? a : new THREE.Vector3;
    this.radius = void 0 !== b ? b : 0
}
;
THREE.Sphere.prototype = {
    constructor: THREE.Sphere,
    set: function(a, b) {
        this.center.copy(a);
        this.radius = b;
        return this
    },
    setFromPoints: function() {
        var a = new THREE.Box3;
        return function(b, c) {
            var d = this.center;
            void 0 !== c ? d.copy(c) : a.setFromPoints(b).center(d);
            for (var e = 0, f = 0, g = b.length; f < g; f++)
                e = Math.max(e, d.distanceToSquared(b[f]));
            this.radius = Math.sqrt(e);
            return this
        }
    }(),
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(a) {
        this.center.copy(a.center);
        this.radius = a.radius;
        return this
    },
    empty: function() {
        return 0 >= this.radius
    },
    containsPoint: function(a) {
        return a.distanceToSquared(this.center) <= this.radius * this.radius
    },
    distanceToPoint: function(a) {
        return a.distanceTo(this.center) - this.radius
    },
    intersectsSphere: function(a) {
        var b = this.radius + a.radius;
        return a.center.distanceToSquared(this.center) <= b * b
    },
    intersectsBox: function(a) {
        return a.intersectsSphere(this)
    },
    intersectsPlane: function(a) {
        return Math.abs(this.center.dot(a.normal) - a.constant) <= this.radius
    },
    clampPoint: function(a, b) {
        var c = this.center.distanceToSquared(a)
          , d = b || new THREE.Vector3;
        d.copy(a);
        c > this.radius * this.radius && (d.sub(this.center).normalize(),
        d.multiplyScalar(this.radius).add(this.center));
        return d
    },
    getBoundingBox: function(a) {
        a = a || new THREE.Box3;
        a.set(this.center, this.center);
        a.expandByScalar(this.radius);
        return a
    },
    applyMatrix4: function(a) {
        this.center.applyMatrix4(a);
        this.radius *= a.getMaxScaleOnAxis();
        return this
    },
    translate: function(a) {
        this.center.add(a);
        return this
    },
    equals: function(a) {
        return a.center.equals(this.center) && a.radius === this.radius
    }
};
THREE.Frustum = function(a, b, c, d, e, f) {
    this.planes = [void 0 !== a ? a : new THREE.Plane, void 0 !== b ? b : new THREE.Plane, void 0 !== c ? c : new THREE.Plane, void 0 !== d ? d : new THREE.Plane, void 0 !== e ? e : new THREE.Plane, void 0 !== f ? f : new THREE.Plane]
}
;
THREE.Frustum.prototype = {
    constructor: THREE.Frustum,
    set: function(a, b, c, d, e, f) {
        var g = this.planes;
        g[0].copy(a);
        g[1].copy(b);
        g[2].copy(c);
        g[3].copy(d);
        g[4].copy(e);
        g[5].copy(f);
        return this
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(a) {
        for (var b = this.planes, c = 0; 6 > c; c++)
            b[c].copy(a.planes[c]);
        return this
    },
    setFromMatrix: function(a) {
        var b = this.planes
          , c = a.elements;
        a = c[0];
        var d = c[1]
          , e = c[2]
          , f = c[3]
          , g = c[4]
          , h = c[5]
          , k = c[6]
          , l = c[7]
          , p = c[8]
          , n = c[9]
          , m = c[10]
          , q = c[11]
          , u = c[12]
          , v = c[13]
          , t = c[14]
          , c = c[15];
        b[0].setComponents(f - a, l - g, q - p, c - u).normalize();
        b[1].setComponents(f + a, l + g, q + p, c + u).normalize();
        b[2].setComponents(f + d, l + h, q + n, c + v).normalize();
        b[3].setComponents(f - d, l - h, q - n, c - v).normalize();
        b[4].setComponents(f - e, l - k, q - m, c - t).normalize();
        b[5].setComponents(f + e, l + k, q + m, c + t).normalize();
        return this
    },
    intersectsObject: function() {
        var a = new THREE.Sphere;
        return function(b) {
            var c = b.geometry;
            null === c.boundingSphere && c.computeBoundingSphere();
            a.copy(c.boundingSphere);
            a.applyMatrix4(b.matrixWorld);
            return this.intersectsSphere(a)
        }
    }(),
    intersectsSphere: function(a) {
        var b = this.planes
          , c = a.center;
        a = -a.radius;
        for (var d = 0; 6 > d; d++)
            if (b[d].distanceToPoint(c) < a)
                return !1;
        return !0
    },
    intersectsBox: function() {
        var a = new THREE.Vector3
          , b = new THREE.Vector3;
        return function(c) {
            for (var d = this.planes, e = 0; 6 > e; e++) {
                var f = d[e];
                a.x = 0 < f.normal.x ? c.min.x : c.max.x;
                b.x = 0 < f.normal.x ? c.max.x : c.min.x;
                a.y = 0 < f.normal.y ? c.min.y : c.max.y;
                b.y = 0 < f.normal.y ? c.max.y : c.min.y;
                a.z = 0 < f.normal.z ? c.min.z : c.max.z;
                b.z = 0 < f.normal.z ? c.max.z : c.min.z;
                var g = f.distanceToPoint(a)
                  , f = f.distanceToPoint(b);
                if (0 > g && 0 > f)
                    return !1
            }
            return !0
        }
    }(),
    containsPoint: function(a) {
        for (var b = this.planes, c = 0; 6 > c; c++)
            if (0 > b[c].distanceToPoint(a))
                return !1;
        return !0
    }
};
THREE.Plane = function(a, b) {
    this.normal = void 0 !== a ? a : new THREE.Vector3(1,0,0);
    this.constant = void 0 !== b ? b : 0
}
;
THREE.Plane.prototype = {
    constructor: THREE.Plane,
    set: function(a, b) {
        this.normal.copy(a);
        this.constant = b;
        return this
    },
    setComponents: function(a, b, c, d) {
        this.normal.set(a, b, c);
        this.constant = d;
        return this
    },
    setFromNormalAndCoplanarPoint: function(a, b) {
        this.normal.copy(a);
        this.constant = -b.dot(this.normal);
        return this
    },
    setFromCoplanarPoints: function() {
        var a = new THREE.Vector3
          , b = new THREE.Vector3;
        return function(c, d, e) {
            d = a.subVectors(e, d).cross(b.subVectors(c, d)).normalize();
            this.setFromNormalAndCoplanarPoint(d, c);
            return this
        }
    }(),
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(a) {
        this.normal.copy(a.normal);
        this.constant = a.constant;
        return this
    },
    normalize: function() {
        var a = 1 / this.normal.length();
        this.normal.multiplyScalar(a);
        this.constant *= a;
        return this
    },
    negate: function() {
        this.constant *= -1;
        this.normal.negate();
        return this
    },
    distanceToPoint: function(a) {
        return this.normal.dot(a) + this.constant
    },
    distanceToSphere: function(a) {
        return this.distanceToPoint(a.center) - a.radius
    },
    projectPoint: function(a, b) {
        return this.orthoPoint(a, b).sub(a).negate()
    },
    orthoPoint: function(a, b) {
        var c = this.distanceToPoint(a);
        return (b || new THREE.Vector3).copy(this.normal).multiplyScalar(c)
    },
    intersectLine: function() {
        var a = new THREE.Vector3;
        return function(b, c) {
            var d = c || new THREE.Vector3
              , e = b.delta(a)
              , f = this.normal.dot(e);
            if (0 === f) {
                if (0 === this.distanceToPoint(b.start))
                    return d.copy(b.start)
            } else
                return f = -(b.start.dot(this.normal) + this.constant) / f,
                0 > f || 1 < f ? void 0 : d.copy(e).multiplyScalar(f).add(b.start)
        }
    }(),
    intersectsLine: function(a) {
        var b = this.distanceToPoint(a.start);
        a = this.distanceToPoint(a.end);
        return 0 > b && 0 < a || 0 > a && 0 < b
    },
    intersectsBox: function(a) {
        return a.intersectsPlane(this)
    },
    intersectsSphere: function(a) {
        return a.intersectsPlane(this)
    },
    coplanarPoint: function(a) {
        return (a || new THREE.Vector3).copy(this.normal).multiplyScalar(-this.constant)
    },
    applyMatrix4: function() {
        var a = new THREE.Vector3
          , b = new THREE.Vector3
          , c = new THREE.Matrix3;
        return function(d, e) {
            var f = e || c.getNormalMatrix(d)
              , f = a.copy(this.normal).applyMatrix3(f)
              , g = this.coplanarPoint(b);
            g.applyMatrix4(d);
            this.setFromNormalAndCoplanarPoint(f, g);
            return this
        }
    }(),
    translate: function(a) {
        this.constant -= a.dot(this.normal);
        return this
    },
    equals: function(a) {
        return a.normal.equals(this.normal) && a.constant === this.constant
    }
};
THREE.Spherical = function(a, b, c) {
    this.radius = void 0 !== a ? a : 1;
    this.phi = void 0 !== b ? b : 0;
    this.theta = void 0 !== c ? c : 0;
    return this
}
;
THREE.Spherical.prototype = {
    constructor: THREE.Spherical,
    set: function(a, b, c) {
        this.radius = a;
        this.phi = b;
        this.theta = c
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(a) {
        this.radius.copy(a.radius);
        this.phi.copy(a.phi);
        this.theta.copy(a.theta);
        return this
    },
    makeSafe: function() {
        this.phi = Math.max(1E-6, Math.min(Math.PI - 1E-6, this.phi))
    },
    setFromVector3: function(a) {
        this.radius = a.length();
        0 === this.radius ? this.phi = this.theta = 0 : (this.theta = Math.atan2(a.x, a.z),
        this.phi = Math.acos(THREE.Math.clamp(a.y / this.radius, -1, 1)));
        return this
    }
};
THREE.Math = {
    generateUUID: function() {
        var a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), b = Array(36), c = 0, d;
        return function() {
            for (var e = 0; 36 > e; e++)
                8 === e || 13 === e || 18 === e || 23 === e ? b[e] = "-" : 14 === e ? b[e] = "4" : (2 >= c && (c = 33554432 + 16777216 * Math.random() | 0),
                d = c & 15,
                c >>= 4,
                b[e] = a[19 === e ? d & 3 | 8 : d]);
            return b.join("")
        }
    }(),
    clamp: function(a, b, c) {
        return Math.max(b, Math.min(c, a))
    },
    euclideanModulo: function(a, b) {
        return (a % b + b) % b
    },
    mapLinear: function(a, b, c, d, e) {
        return d + (a - b) * (e - d) / (c - b)
    },
    smoothstep: function(a, b, c) {
        if (a <= b)
            return 0;
        if (a >= c)
            return 1;
        a = (a - b) / (c - b);
        return a * a * (3 - 2 * a)
    },
    smootherstep: function(a, b, c) {
        if (a <= b)
            return 0;
        if (a >= c)
            return 1;
        a = (a - b) / (c - b);
        return a * a * a * (a * (6 * a - 15) + 10)
    },
    random16: function() {
        console.warn("THREE.Math.random16() has been deprecated. Use Math.random() instead.");
        return Math.random()
    },
    randInt: function(a, b) {
        return a + Math.floor(Math.random() * (b - a + 1))
    },
    randFloat: function(a, b) {
        return a + Math.random() * (b - a)
    },
    randFloatSpread: function(a) {
        return a * (.5 - Math.random())
    },
    degToRad: function() {
        var a = Math.PI / 180;
        return function(b) {
            return b * a
        }
    }(),
    radToDeg: function() {
        var a = 180 / Math.PI;
        return function(b) {
            return b * a
        }
    }(),
    isPowerOfTwo: function(a) {
        return 0 === (a & a - 1) && 0 !== a
    },
    nearestPowerOfTwo: function(a) {
        return Math.pow(2, Math.round(Math.log(a) / Math.LN2))
    },
    nextPowerOfTwo: function(a) {
        a--;
        a |= a >> 1;
        a |= a >> 2;
        a |= a >> 4;
        a |= a >> 8;
        a |= a >> 16;
        a++;
        return a
    }
};
THREE.Spline = function(a) {
    function b(a, b, c, d, e, f, g) {
        a = .5 * (c - a);
        d = .5 * (d - b);
        return (2 * (b - c) + a + d) * g + (-3 * (b - c) - 2 * a - d) * f + a * e + b
    }
    this.points = a;
    var c = [], d = {
        x: 0,
        y: 0,
        z: 0
    }, e, f, g, h, k, l, p, n, m;
    this.initFromArray = function(a) {
        this.points = [];
        for (var b = 0; b < a.length; b++)
            this.points[b] = {
                x: a[b][0],
                y: a[b][1],
                z: a[b][2]
            }
    }
    ;
    this.getPoint = function(a) {
        e = (this.points.length - 1) * a;
        f = Math.floor(e);
        g = e - f;
        c[0] = 0 === f ? f : f - 1;
        c[1] = f;
        c[2] = f > this.points.length - 2 ? this.points.length - 1 : f + 1;
        c[3] = f > this.points.length - 3 ? this.points.length - 1 : f + 2;
        l = this.points[c[0]];
        p = this.points[c[1]];
        n = this.points[c[2]];
        m = this.points[c[3]];
        h = g * g;
        k = g * h;
        d.x = b(l.x, p.x, n.x, m.x, g, h, k);
        d.y = b(l.y, p.y, n.y, m.y, g, h, k);
        d.z = b(l.z, p.z, n.z, m.z, g, h, k);
        return d
    }
    ;
    this.getControlPointsArray = function() {
        var a, b, c = this.points.length, d = [];
        for (a = 0; a < c; a++)
            b = this.points[a],
            d[a] = [b.x, b.y, b.z];
        return d
    }
    ;
    this.getLength = function(a) {
        var b, c, d, e = b = b = 0, f = new THREE.Vector3, g = new THREE.Vector3, h = [], k = 0;
        h[0] = 0;
        a || (a = 100);
        c = this.points.length * a;
        f.copy(this.points[0]);
        for (a = 1; a < c; a++)
            b = a / c,
            d = this.getPoint(b),
            g.copy(d),
            k += g.distanceTo(f),
            f.copy(d),
            b *= this.points.length - 1,
            b = Math.floor(b),
            b !== e && (h[b] = k,
            e = b);
        h[h.length] = k;
        return {
            chunks: h,
            total: k
        }
    }
    ;
    this.reparametrizeByArcLength = function(a) {
        var b, c, d, e, f, g, h = [], k = new THREE.Vector3, l = this.getLength();
        h.push(k.copy(this.points[0]).clone());
        for (b = 1; b < this.points.length; b++) {
            c = l.chunks[b] - l.chunks[b - 1];
            g = Math.ceil(a * c / l.total);
            e = (b - 1) / (this.points.length - 1);
            f = b / (this.points.length - 1);
            for (c = 1; c < g - 1; c++)
                d = e + 1 / g * c * (f - e),
                d = this.getPoint(d),
                h.push(k.copy(d).clone());
            h.push(k.copy(this.points[b]).clone())
        }
        this.points = h
    }
}
;
THREE.Triangle = function(a, b, c) {
    this.a = void 0 !== a ? a : new THREE.Vector3;
    this.b = void 0 !== b ? b : new THREE.Vector3;
    this.c = void 0 !== c ? c : new THREE.Vector3
}
;
THREE.Triangle.normal = function() {
    var a = new THREE.Vector3;
    return function(b, c, d, e) {
        e = e || new THREE.Vector3;
        e.subVectors(d, c);
        a.subVectors(b, c);
        e.cross(a);
        b = e.lengthSq();
        return 0 < b ? e.multiplyScalar(1 / Math.sqrt(b)) : e.set(0, 0, 0)
    }
}();
THREE.Triangle.barycoordFromPoint = function() {
    var a = new THREE.Vector3
      , b = new THREE.Vector3
      , c = new THREE.Vector3;
    return function(d, e, f, g, h) {
        a.subVectors(g, e);
        b.subVectors(f, e);
        c.subVectors(d, e);
        d = a.dot(a);
        e = a.dot(b);
        f = a.dot(c);
        var k = b.dot(b);
        g = b.dot(c);
        var l = d * k - e * e;
        h = h || new THREE.Vector3;
        if (0 === l)
            return h.set(-2, -1, -1);
        l = 1 / l;
        k = (k * f - e * g) * l;
        d = (d * g - e * f) * l;
        return h.set(1 - k - d, d, k)
    }
}();
THREE.Triangle.containsPoint = function() {
    var a = new THREE.Vector3;
    return function(b, c, d, e) {
        b = THREE.Triangle.barycoordFromPoint(b, c, d, e, a);
        return 0 <= b.x && 0 <= b.y && 1 >= b.x + b.y
    }
}();
THREE.Triangle.prototype = {
    constructor: THREE.Triangle,
    set: function(a, b, c) {
        this.a.copy(a);
        this.b.copy(b);
        this.c.copy(c);
        return this
    },
    setFromPointsAndIndices: function(a, b, c, d) {
        this.a.copy(a[b]);
        this.b.copy(a[c]);
        this.c.copy(a[d]);
        return this
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(a) {
        this.a.copy(a.a);
        this.b.copy(a.b);
        this.c.copy(a.c);
        return this
    },
    area: function() {
        var a = new THREE.Vector3
          , b = new THREE.Vector3;
        return function() {
            a.subVectors(this.c, this.b);
            b.subVectors(this.a, this.b);
            return .5 * a.cross(b).length()
        }
    }(),
    midpoint: function(a) {
        return (a || new THREE.Vector3).addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
    },
    normal: function(a) {
        return THREE.Triangle.normal(this.a, this.b, this.c, a)
    },
    plane: function(a) {
        return (a || new THREE.Plane).setFromCoplanarPoints(this.a, this.b, this.c)
    },
    barycoordFromPoint: function(a, b) {
        return THREE.Triangle.barycoordFromPoint(a, this.a, this.b, this.c, b)
    },
    containsPoint: function(a) {
        return THREE.Triangle.containsPoint(a, this.a, this.b, this.c)
    },
    equals: function(a) {
        return a.a.equals(this.a) && a.b.equals(this.b) && a.c.equals(this.c)
    }
};
THREE.Interpolant = function(a, b, c, d) {
    this.parameterPositions = a;
    this._cachedIndex = 0;
    this.resultBuffer = void 0 !== d ? d : new b.constructor(c);
    this.sampleValues = b;
    this.valueSize = c
}
;
THREE.Interpolant.prototype = {
    constructor: THREE.Interpolant,
    evaluate: function(a) {
        var b = this.parameterPositions
          , c = this._cachedIndex
          , d = b[c]
          , e = b[c - 1];
        a: {
            b: {
                c: {
                    d: if (!(a < d)) {
                        for (var f = c + 2; ; ) {
                            if (void 0 === d) {
                                if (a < e)
                                    break d;
                                this._cachedIndex = c = b.length;
                                return this.afterEnd_(c - 1, a, e)
                            }
                            if (c === f)
                                break;
                            e = d;
                            d = b[++c];
                            if (a < d)
                                break b
                        }
                        d = b.length;
                        break c
                    }
                    if (a >= e)
                        break a;
                    else {
                        f = b[1];
                        a < f && (c = 2,
                        e = f);
                        for (f = c - 2; ; ) {
                            if (void 0 === e)
                                return this._cachedIndex = 0,
                                this.beforeStart_(0, a, d);
                            if (c === f)
                                break;
                            d = e;
                            e = b[--c - 1];
                            if (a >= e)
                                break b
                        }
                        d = c;
                        c = 0
                    }
                }
                for (; c < d; )
                    e = c + d >>> 1,
                    a < b[e] ? d = e : c = e + 1;
                d = b[c];
                e = b[c - 1];
                if (void 0 === e)
                    return this._cachedIndex = 0,
                    this.beforeStart_(0, a, d);
                if (void 0 === d)
                    return this._cachedIndex = c = b.length,
                    this.afterEnd_(c - 1, e, a)
            }
            this._cachedIndex = c;
            this.intervalChanged_(c, e, d)
        }
        return this.interpolate_(c, e, a, d)
    },
    settings: null,
    DefaultSettings_: {},
    getSettings_: function() {
        return this.settings || this.DefaultSettings_
    },
    copySampleValue_: function(a) {
        var b = this.resultBuffer
          , c = this.sampleValues
          , d = this.valueSize;
        a *= d;
        for (var e = 0; e !== d; ++e)
            b[e] = c[a + e];
        return b
    },
    interpolate_: function(a, b, c, d) {
        throw Error("call to abstract method");
    },
    intervalChanged_: function(a, b, c) {}
};
Object.assign(THREE.Interpolant.prototype, {
    beforeStart_: THREE.Interpolant.prototype.copySampleValue_,
    afterEnd_: THREE.Interpolant.prototype.copySampleValue_
});
THREE.CubicInterpolant = function(a, b, c, d) {
    THREE.Interpolant.call(this, a, b, c, d);
    this._offsetNext = this._weightNext = this._offsetPrev = this._weightPrev = -0
}
;
THREE.CubicInterpolant.prototype = Object.assign(Object.create(THREE.Interpolant.prototype), {
    constructor: THREE.CubicInterpolant,
    DefaultSettings_: {
        endingStart: THREE.ZeroCurvatureEnding,
        endingEnd: THREE.ZeroCurvatureEnding
    },
    intervalChanged_: function(a, b, c) {
        var d = this.parameterPositions
          , e = a - 2
          , f = a + 1
          , g = d[e]
          , h = d[f];
        if (void 0 === g)
            switch (this.getSettings_().endingStart) {
            case THREE.ZeroSlopeEnding:
                e = a;
                g = 2 * b - c;
                break;
            case THREE.WrapAroundEnding:
                e = d.length - 2;
                g = b + d[e] - d[e + 1];
                break;
            default:
                e = a,
                g = c
            }
        if (void 0 === h)
            switch (this.getSettings_().endingEnd) {
            case THREE.ZeroSlopeEnding:
                f = a;
                h = 2 * c - b;
                break;
            case THREE.WrapAroundEnding:
                f = 1;
                h = c + d[1] - d[0];
                break;
            default:
                f = a - 1,
                h = b
            }
        a = .5 * (c - b);
        d = this.valueSize;
        this._weightPrev = a / (b - g);
        this._weightNext = a / (h - c);
        this._offsetPrev = e * d;
        this._offsetNext = f * d
    },
    interpolate_: function(a, b, c, d) {
        var e = this.resultBuffer
          , f = this.sampleValues
          , g = this.valueSize;
        a *= g;
        var h = a - g
          , k = this._offsetPrev
          , l = this._offsetNext
          , p = this._weightPrev
          , n = this._weightNext
          , m = (c - b) / (d - b);
        c = m * m;
        d = c * m;
        b = -p * d + 2 * p * c - p * m;
        p = (1 + p) * d + (-1.5 - 2 * p) * c + (-.5 + p) * m + 1;
        m = (-1 - n) * d + (1.5 + n) * c + .5 * m;
        n = n * d - n * c;
        for (c = 0; c !== g; ++c)
            e[c] = b * f[k + c] + p * f[h + c] + m * f[a + c] + n * f[l + c];
        return e
    }
});
THREE.DiscreteInterpolant = function(a, b, c, d) {
    THREE.Interpolant.call(this, a, b, c, d)
}
;
THREE.DiscreteInterpolant.prototype = Object.assign(Object.create(THREE.Interpolant.prototype), {
    constructor: THREE.DiscreteInterpolant,
    interpolate_: function(a, b, c, d) {
        return this.copySampleValue_(a - 1)
    }
});
THREE.LinearInterpolant = function(a, b, c, d) {
    THREE.Interpolant.call(this, a, b, c, d)
}
;
THREE.LinearInterpolant.prototype = Object.assign(Object.create(THREE.Interpolant.prototype), {
    constructor: THREE.LinearInterpolant,
    interpolate_: function(a, b, c, d) {
        var e = this.resultBuffer
          , f = this.sampleValues
          , g = this.valueSize;
        a *= g;
        var h = a - g;
        b = (c - b) / (d - b);
        c = 1 - b;
        for (d = 0; d !== g; ++d)
            e[d] = f[h + d] * c + f[a + d] * b;
        return e
    }
});
THREE.QuaternionLinearInterpolant = function(a, b, c, d) {
    THREE.Interpolant.call(this, a, b, c, d)
}
;
THREE.QuaternionLinearInterpolant.prototype = Object.assign(Object.create(THREE.Interpolant.prototype), {
    constructor: THREE.QuaternionLinearInterpolant,
    interpolate_: function(a, b, c, d) {
        var e = this.resultBuffer
          , f = this.sampleValues
          , g = this.valueSize;
        a *= g;
        b = (c - b) / (d - b);
        for (c = a + g; a !== c; a += 4)
            THREE.Quaternion.slerpFlat(e, 0, f, a - g, f, a, b);
        return e
    }
});
THREE.Clock = function(a) {
    this.autoStart = void 0 !== a ? a : !0;
    this.elapsedTime = this.oldTime = this.startTime = 0;
    this.running = !1
}
;
THREE.Clock.prototype = {
    constructor: THREE.Clock,
    start: function() {
        this.oldTime = this.startTime = performance.now();
        this.running = !0
    },
    stop: function() {
        this.getElapsedTime();
        this.running = !1
    },
    getElapsedTime: function() {
        this.getDelta();
        return this.elapsedTime
    },
    getDelta: function() {
        var a = 0;
        this.autoStart && !this.running && this.start();
        if (this.running) {
            var b = performance.now()
              , a = .001 * (b - this.oldTime);
            this.oldTime = b;
            this.elapsedTime += a
        }
        return a
    }
};
THREE.EventDispatcher = function() {}
;
THREE.EventDispatcher.prototype = {
    constructor: THREE.EventDispatcher,
    apply: function(a) {
        a.addEventListener = THREE.EventDispatcher.prototype.addEventListener;
        a.hasEventListener = THREE.EventDispatcher.prototype.hasEventListener;
        a.removeEventListener = THREE.EventDispatcher.prototype.removeEventListener;
        a.dispatchEvent = THREE.EventDispatcher.prototype.dispatchEvent
    },
    addEventListener: function(a, b) {
        void 0 === this._listeners && (this._listeners = {});
        var c = this._listeners;
        void 0 === c[a] && (c[a] = []);
        -1 === c[a].indexOf(b) && c[a].push(b)
    },
    hasEventListener: function(a, b) {
        if (void 0 === this._listeners)
            return !1;
        var c = this._listeners;
        return void 0 !== c[a] && -1 !== c[a].indexOf(b) ? !0 : !1
    },
    removeEventListener: function(a, b) {
        if (void 0 !== this._listeners) {
            var c = this._listeners[a];
            if (void 0 !== c) {
                var d = c.indexOf(b);
                -1 !== d && c.splice(d, 1)
            }
        }
    },
    dispatchEvent: function(a) {
        if (void 0 !== this._listeners) {
            var b = this._listeners[a.type];
            if (void 0 !== b) {
                a.target = this;
                for (var c = [], d = b.length, e = 0; e < d; e++)
                    c[e] = b[e];
                for (e = 0; e < d; e++)
                    c[e].call(this, a)
            }
        }
    }
};
THREE.Layers = function() {
    this.mask = 1
}
;
THREE.Layers.prototype = {
    constructor: THREE.Layers,
    set: function(a) {
        this.mask = 1 << a
    },
    enable: function(a) {
        this.mask |= 1 << a
    },
    toggle: function(a) {
        this.mask ^= 1 << a
    },
    disable: function(a) {
        this.mask &= ~(1 << a)
    },
    test: function(a) {
        return 0 !== (this.mask & a.mask)
    }
};
(function(a) {
    function b(a, b) {
        return a.distance - b.distance
    }
    function c(a, b, f, g) {
        if (!1 !== a.visible && (a.raycast(b, f),
        !0 === g)) {
            a = a.children;
            g = 0;
            for (var h = a.length; g < h; g++)
                c(a[g], b, f, !0)
        }
    }
    a.Raycaster = function(b, c, f, g) {
        this.ray = new a.Ray(b,c);
        this.near = f || 0;
        this.far = g || Infinity;
        this.params = {
            Mesh: {},
            Line: {},
            LOD: {},
            Points: {
                threshold: 1
            },
            Sprite: {}
        };
        Object.defineProperties(this.params, {
            PointCloud: {
                get: function() {
                    console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points.");
                    return this.Points
                }
            }
        })
    }
    ;
    a.Raycaster.prototype = {
        constructor: a.Raycaster,
        linePrecision: 1,
        set: function(a, b) {
            this.ray.set(a, b)
        },
        setFromCamera: function(b, c) {
            c instanceof a.PerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(c.matrixWorld),
            this.ray.direction.set(b.x, b.y, .5).unproject(c).sub(this.ray.origin).normalize()) : c instanceof a.OrthographicCamera ? (this.ray.origin.set(b.x, b.y, -1).unproject(c),
            this.ray.direction.set(0, 0, -1).transformDirection(c.matrixWorld)) : console.error("THREE.Raycaster: Unsupported camera type.")
        },
        intersectObject: function(a, e) {
            var f = [];
            c(a, this, f, e);
            f.sort(b);
            return f
        },
        intersectObjects: function(a, e) {
            var f = [];
            if (!1 === Array.isArray(a))
                return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),
                f;
            for (var g = 0, h = a.length; g < h; g++)
                c(a[g], this, f, e);
            f.sort(b);
            return f
        }
    }
}
)(THREE);
THREE.Object3D = function() {
    Object.defineProperty(this, "id", {
        value: THREE.Object3DIdCount++
    });
    this.uuid = THREE.Math.generateUUID();
    this.name = "";
    this.type = "Object3D";
    this.parent = null;
    this.children = [];
    this.up = THREE.Object3D.DefaultUp.clone();
    var a = new THREE.Vector3
      , b = new THREE.Euler
      , c = new THREE.Quaternion
      , d = new THREE.Vector3(1,1,1);
    b.onChange(function() {
        c.setFromEuler(b, !1)
    });
    c.onChange(function() {
        b.setFromQuaternion(c, void 0, !1)
    });
    Object.defineProperties(this, {
        position: {
            enumerable: !0,
            value: a
        },
        rotation: {
            enumerable: !0,
            value: b
        },
        quaternion: {
            enumerable: !0,
            value: c
        },
        scale: {
            enumerable: !0,
            value: d
        },
        modelViewMatrix: {
            value: new THREE.Matrix4
        },
        normalMatrix: {
            value: new THREE.Matrix3
        }
    });
    this.rotationAutoUpdate = !0;
    this.matrix = new THREE.Matrix4;
    this.matrixWorld = new THREE.Matrix4;
    this.matrixAutoUpdate = THREE.Object3D.DefaultMatrixAutoUpdate;
    this.matrixWorldNeedsUpdate = !1;
    this.layers = new THREE.Layers;
    this.visible = !0;
    this.receiveShadow = this.castShadow = !1;
    this.frustumCulled = !0;
    this.renderOrder = 0;
    this.userData = {}
}
;
THREE.Object3D.DefaultUp = new THREE.Vector3(0,1,0);
THREE.Object3D.DefaultMatrixAutoUpdate = !0;
THREE.Object3D.prototype = {
    constructor: THREE.Object3D,
    applyMatrix: function(a) {
        this.matrix.multiplyMatrices(a, this.matrix);
        this.matrix.decompose(this.position, this.quaternion, this.scale)
    },
    setRotationFromAxisAngle: function(a, b) {
        this.quaternion.setFromAxisAngle(a, b)
    },
    setRotationFromEuler: function(a) {
        this.quaternion.setFromEuler(a, !0)
    },
    setRotationFromMatrix: function(a) {
        this.quaternion.setFromRotationMatrix(a)
    },
    setRotationFromQuaternion: function(a) {
        this.quaternion.copy(a)
    },
    rotateOnAxis: function() {
        var a = new THREE.Quaternion;
        return function(b, c) {
            a.setFromAxisAngle(b, c);
            this.quaternion.multiply(a);
            return this
        }
    }(),
    rotateX: function() {
        var a = new THREE.Vector3(1,0,0);
        return function(b) {
            return this.rotateOnAxis(a, b)
        }
    }(),
    rotateY: function() {
        var a = new THREE.Vector3(0,1,0);
        return function(b) {
            return this.rotateOnAxis(a, b)
        }
    }(),
    rotateZ: function() {
        var a = new THREE.Vector3(0,0,1);
        return function(b) {
            return this.rotateOnAxis(a, b)
        }
    }(),
    translateOnAxis: function() {
        var a = new THREE.Vector3;
        return function(b, c) {
            a.copy(b).applyQuaternion(this.quaternion);
            this.position.add(a.multiplyScalar(c));
            return this
        }
    }(),
    translateX: function() {
        var a = new THREE.Vector3(1,0,0);
        return function(b) {
            return this.translateOnAxis(a, b)
        }
    }(),
    translateY: function() {
        var a = new THREE.Vector3(0,1,0);
        return function(b) {
            return this.translateOnAxis(a, b)
        }
    }(),
    translateZ: function() {
        var a = new THREE.Vector3(0,0,1);
        return function(b) {
            return this.translateOnAxis(a, b)
        }
    }(),
    localToWorld: function(a) {
        return a.applyMatrix4(this.matrixWorld)
    },
    worldToLocal: function() {
        var a = new THREE.Matrix4;
        return function(b) {
            return b.applyMatrix4(a.getInverse(this.matrixWorld))
        }
    }(),
    lookAt: function() {
        var a = new THREE.Matrix4;
        return function(b) {
            a.lookAt(b, this.position, this.up);
            this.quaternion.setFromRotationMatrix(a)
        }
    }(),
    add: function(a) {
        if (1 < arguments.length) {
            for (var b = 0; b < arguments.length; b++)
                this.add(arguments[b]);
            return this
        }
        if (a === this)
            return console.error("THREE.Object3D.add: object can't be added as a child of itself.", a),
            this;
        a instanceof THREE.Object3D ? (null !== a.parent && a.parent.remove(a),
        a.parent = this,
        a.dispatchEvent({
            type: "added"
        }),
        this.children.push(a)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", a);
        return this
    },
    remove: function(a) {
        if (1 < arguments.length)
            for (var b = 0; b < arguments.length; b++)
                this.remove(arguments[b]);
        b = this.children.indexOf(a);
        -1 !== b && (a.parent = null,
        a.dispatchEvent({
            type: "removed"
        }),
        this.children.splice(b, 1))
    },
    getObjectById: function(a) {
        return this.getObjectByProperty("id", a)
    },
    getObjectByName: function(a) {
        return this.getObjectByProperty("name", a)
    },
    getObjectByProperty: function(a, b) {
        if (this[a] === b)
            return this;
        for (var c = 0, d = this.children.length; c < d; c++) {
            var e = this.children[c].getObjectByProperty(a, b);
            if (void 0 !== e)
                return e
        }
    },
    getWorldPosition: function(a) {
        a = a || new THREE.Vector3;
        this.updateMatrixWorld(!0);
        return a.setFromMatrixPosition(this.matrixWorld)
    },
    getWorldQuaternion: function() {
        var a = new THREE.Vector3
          , b = new THREE.Vector3;
        return function(c) {
            c = c || new THREE.Quaternion;
            this.updateMatrixWorld(!0);
            this.matrixWorld.decompose(a, c, b);
            return c
        }
    }(),
    getWorldRotation: function() {
        var a = new THREE.Quaternion;
        return function(b) {
            b = b || new THREE.Euler;
            this.getWorldQuaternion(a);
            return b.setFromQuaternion(a, this.rotation.order, !1)
        }
    }(),
    getWorldScale: function() {
        var a = new THREE.Vector3
          , b = new THREE.Quaternion;
        return function(c) {
            c = c || new THREE.Vector3;
            this.updateMatrixWorld(!0);
            this.matrixWorld.decompose(a, b, c);
            return c
        }
    }(),
    getWorldDirection: function() {
        var a = new THREE.Quaternion;
        return function(b) {
            b = b || new THREE.Vector3;
            this.getWorldQuaternion(a);
            return b.set(0, 0, 1).applyQuaternion(a)
        }
    }(),
    raycast: function() {},
    traverse: function(a) {
        a(this);
        for (var b = this.children, c = 0, d = b.length; c < d; c++)
            b[c].traverse(a)
    },
    traverseVisible: function(a) {
        if (!1 !== this.visible) {
            a(this);
            for (var b = this.children, c = 0, d = b.length; c < d; c++)
                b[c].traverseVisible(a)
        }
    },
    traverseAncestors: function(a) {
        var b = this.parent;
        null !== b && (a(b),
        b.traverseAncestors(a))
    },
    updateMatrix: function() {
        this.matrix.compose(this.position, this.quaternion, this.scale);
        this.matrixWorldNeedsUpdate = !0
    },
    updateMatrixWorld: function(a) {
        !0 === this.matrixAutoUpdate && this.updateMatrix();
        if (!0 === this.matrixWorldNeedsUpdate || !0 === a)
            null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
            this.matrixWorldNeedsUpdate = !1,
            a = !0;
        for (var b = 0, c = this.children.length; b < c; b++)
            this.children[b].updateMatrixWorld(a)
    },
    toJSON: function(a) {
        function b(a) {
            var b = [], c;
            for (c in a) {
                var d = a[c];
                delete d.metadata;
                b.push(d)
            }
            return b
        }
        var c = void 0 === a
          , d = {};
        c && (a = {
            geometries: {},
            materials: {},
            textures: {},
            images: {}
        },
        d.metadata = {
            version: 4.4,
            type: "Object",
            generator: "Object3D.toJSON"
        });
        var e = {};
        e.uuid = this.uuid;
        e.type = this.type;
        "" !== this.name && (e.name = this.name);
        "{}" !== JSON.stringify(this.userData) && (e.userData = this.userData);
        !0 === this.castShadow && (e.castShadow = !0);
        !0 === this.receiveShadow && (e.receiveShadow = !0);
        !1 === this.visible && (e.visible = !1);
        e.matrix = this.matrix.toArray();
        void 0 !== this.geometry && (void 0 === a.geometries[this.geometry.uuid] && (a.geometries[this.geometry.uuid] = this.geometry.toJSON(a)),
        e.geometry = this.geometry.uuid);
        void 0 !== this.material && (void 0 === a.materials[this.material.uuid] && (a.materials[this.material.uuid] = this.material.toJSON(a)),
        e.material = this.material.uuid);
        if (0 < this.children.length) {
            e.children = [];
            for (var f = 0; f < this.children.length; f++)
                e.children.push(this.children[f].toJSON(a).object)
        }
        if (c) {
            var c = b(a.geometries)
              , f = b(a.materials)
              , g = b(a.textures);
            a = b(a.images);
            0 < c.length && (d.geometries = c);
            0 < f.length && (d.materials = f);
            0 < g.length && (d.textures = g);
            0 < a.length && (d.images = a)
        }
        d.object = e;
        return d
    },
    clone: function(a) {
        return (new this.constructor).copy(this, a)
    },
    copy: function(a, b) {
        void 0 === b && (b = !0);
        this.name = a.name;
        this.up.copy(a.up);
        this.position.copy(a.position);
        this.quaternion.copy(a.quaternion);
        this.scale.copy(a.scale);
        this.rotationAutoUpdate = a.rotationAutoUpdate;
        this.matrix.copy(a.matrix);
        this.matrixWorld.copy(a.matrixWorld);
        this.matrixAutoUpdate = a.matrixAutoUpdate;
        this.matrixWorldNeedsUpdate = a.matrixWorldNeedsUpdate;
        this.visible = a.visible;
        this.castShadow = a.castShadow;
        this.receiveShadow = a.receiveShadow;
        this.frustumCulled = a.frustumCulled;
        this.renderOrder = a.renderOrder;
        this.userData = JSON.parse(JSON.stringify(a.userData));
        if (!0 === b)
            for (var c = 0; c < a.children.length; c++)
                this.add(a.children[c].clone());
        return this
    }
};
THREE.EventDispatcher.prototype.apply(THREE.Object3D.prototype);
THREE.Object3DIdCount = 0;
THREE.Face3 = function(a, b, c, d, e, f) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.normal = d instanceof THREE.Vector3 ? d : new THREE.Vector3;
    this.vertexNormals = Array.isArray(d) ? d : [];
    this.color = e instanceof THREE.Color ? e : new THREE.Color;
    this.vertexColors = Array.isArray(e) ? e : [];
    this.materialIndex = void 0 !== f ? f : 0
}
;
THREE.Face3.prototype = {
    constructor: THREE.Face3,
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(a) {
        this.a = a.a;
        this.b = a.b;
        this.c = a.c;
        this.normal.copy(a.normal);
        this.color.copy(a.color);
        this.materialIndex = a.materialIndex;
        for (var b = 0, c = a.vertexNormals.length; b < c; b++)
            this.vertexNormals[b] = a.vertexNormals[b].clone();
        b = 0;
        for (c = a.vertexColors.length; b < c; b++)
            this.vertexColors[b] = a.vertexColors[b].clone();
        return this
    }
};
THREE.BufferAttribute = function(a, b) {
    this.uuid = THREE.Math.generateUUID();
    this.array = a;
    this.itemSize = b;
    this.dynamic = !1;
    this.updateRange = {
        offset: 0,
        count: -1
    };
    this.version = 0
}
;
THREE.BufferAttribute.prototype = {
    constructor: THREE.BufferAttribute,
    get count() {
        return this.array.length / this.itemSize
    },
    set needsUpdate(a) {
        !0 === a && this.version++
    },
    setDynamic: function(a) {
        this.dynamic = a;
        return this
    },
    copy: function(a) {
        this.array = new a.array.constructor(a.array);
        this.itemSize = a.itemSize;
        this.dynamic = a.dynamic;
        return this
    },
    copyAt: function(a, b, c) {
        a *= this.itemSize;
        c *= b.itemSize;
        for (var d = 0, e = this.itemSize; d < e; d++)
            this.array[a + d] = b.array[c + d];
        return this
    },
    copyArray: function(a) {
        this.array.set(a);
        return this
    },
    copyColorsArray: function(a) {
        for (var b = this.array, c = 0, d = 0, e = a.length; d < e; d++) {
            var f = a[d];
            void 0 === f && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", d),
            f = new THREE.Color);
            b[c++] = f.r;
            b[c++] = f.g;
            b[c++] = f.b
        }
        return this
    },
    copyIndicesArray: function(a) {
        for (var b = this.array, c = 0, d = 0, e = a.length; d < e; d++) {
            var f = a[d];
            b[c++] = f.a;
            b[c++] = f.b;
            b[c++] = f.c
        }
        return this
    },
    copyVector2sArray: function(a) {
        for (var b = this.array, c = 0, d = 0, e = a.length; d < e; d++) {
            var f = a[d];
            void 0 === f && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", d),
            f = new THREE.Vector2);
            b[c++] = f.x;
            b[c++] = f.y
        }
        return this
    },
    copyVector3sArray: function(a) {
        for (var b = this.array, c = 0, d = 0, e = a.length; d < e; d++) {
            var f = a[d];
            void 0 === f && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", d),
            f = new THREE.Vector3);
            b[c++] = f.x;
            b[c++] = f.y;
            b[c++] = f.z
        }
        return this
    },
    copyVector4sArray: function(a) {
        for (var b = this.array, c = 0, d = 0, e = a.length; d < e; d++) {
            var f = a[d];
            void 0 === f && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", d),
            f = new THREE.Vector4);
            b[c++] = f.x;
            b[c++] = f.y;
            b[c++] = f.z;
            b[c++] = f.w
        }
        return this
    },
    set: function(a, b) {
        void 0 === b && (b = 0);
        this.array.set(a, b);
        return this
    },
    getX: function(a) {
        return this.array[a * this.itemSize]
    },
    setX: function(a, b) {
        this.array[a * this.itemSize] = b;
        return this
    },
    getY: function(a) {
        return this.array[a * this.itemSize + 1]
    },
    setY: function(a, b) {
        this.array[a * this.itemSize + 1] = b;
        return this
    },
    getZ: function(a) {
        return this.array[a * this.itemSize + 2]
    },
    setZ: function(a, b) {
        this.array[a * this.itemSize + 2] = b;
        return this
    },
    getW: function(a) {
        return this.array[a * this.itemSize + 3]
    },
    setW: function(a, b) {
        this.array[a * this.itemSize + 3] = b;
        return this
    },
    setXY: function(a, b, c) {
        a *= this.itemSize;
        this.array[a + 0] = b;
        this.array[a + 1] = c;
        return this
    },
    setXYZ: function(a, b, c, d) {
        a *= this.itemSize;
        this.array[a + 0] = b;
        this.array[a + 1] = c;
        this.array[a + 2] = d;
        return this
    },
    setXYZW: function(a, b, c, d, e) {
        a *= this.itemSize;
        this.array[a + 0] = b;
        this.array[a + 1] = c;
        this.array[a + 2] = d;
        this.array[a + 3] = e;
        return this
    },
    clone: function() {
        return (new this.constructor).copy(this)
    }
};
THREE.Int8Attribute = function(a, b) {
    return new THREE.BufferAttribute(new Int8Array(a),b)
}
;
THREE.Uint8Attribute = function(a, b) {
    return new THREE.BufferAttribute(new Uint8Array(a),b)
}
;
THREE.Uint8ClampedAttribute = function(a, b) {
    return new THREE.BufferAttribute(new Uint8ClampedArray(a),b)
}
;
THREE.Int16Attribute = function(a, b) {
    return new THREE.BufferAttribute(new Int16Array(a),b)
}
;
THREE.Uint16Attribute = function(a, b) {
    return new THREE.BufferAttribute(new Uint16Array(a),b)
}
;
THREE.Int32Attribute = function(a, b) {
    return new THREE.BufferAttribute(new Int32Array(a),b)
}
;
THREE.Uint32Attribute = function(a, b) {
    return new THREE.BufferAttribute(new Uint32Array(a),b)
}
;
THREE.Float32Attribute = function(a, b) {
    return new THREE.BufferAttribute(new Float32Array(a),b)
}
;
THREE.Float64Attribute = function(a, b) {
    return new THREE.BufferAttribute(new Float64Array(a),b)
}
;
THREE.DynamicBufferAttribute = function(a, b) {
    console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead.");
    return (new THREE.BufferAttribute(a,b)).setDynamic(!0)
}
;
THREE.InstancedBufferAttribute = function(a, b, c) {
    THREE.BufferAttribute.call(this, a, b);
    this.meshPerAttribute = c || 1
}
;
THREE.InstancedBufferAttribute.prototype = Object.create(THREE.BufferAttribute.prototype);
THREE.InstancedBufferAttribute.prototype.constructor = THREE.InstancedBufferAttribute;
THREE.InstancedBufferAttribute.prototype.copy = function(a) {
    THREE.BufferAttribute.prototype.copy.call(this, a);
    this.meshPerAttribute = a.meshPerAttribute;
    return this
}
;
THREE.InterleavedBuffer = function(a, b) {
    this.uuid = THREE.Math.generateUUID();
    this.array = a;
    this.stride = b;
    this.dynamic = !1;
    this.updateRange = {
        offset: 0,
        count: -1
    };
    this.version = 0
}
;
THREE.InterleavedBuffer.prototype = {
    constructor: THREE.InterleavedBuffer,
    get length() {
        return this.array.length
    },
    get count() {
        return this.array.length / this.stride
    },
    set needsUpdate(a) {
        !0 === a && this.version++
    },
    setDynamic: function(a) {
        this.dynamic = a;
        return this
    },
    copy: function(a) {
        this.array = new a.array.constructor(a.array);
        this.stride = a.stride;
        this.dynamic = a.dynamic;
        return this
    },
    copyAt: function(a, b, c) {
        a *= this.stride;
        c *= b.stride;
        for (var d = 0, e = this.stride; d < e; d++)
            this.array[a + d] = b.array[c + d];
        return this
    },
    set: function(a, b) {
        void 0 === b && (b = 0);
        this.array.set(a, b);
        return this
    },
    clone: function() {
        return (new this.constructor).copy(this)
    }
};
THREE.InstancedInterleavedBuffer = function(a, b, c) {
    THREE.InterleavedBuffer.call(this, a, b);
    this.meshPerAttribute = c || 1
}
;
THREE.InstancedInterleavedBuffer.prototype = Object.create(THREE.InterleavedBuffer.prototype);
THREE.InstancedInterleavedBuffer.prototype.constructor = THREE.InstancedInterleavedBuffer;
THREE.InstancedInterleavedBuffer.prototype.copy = function(a) {
    THREE.InterleavedBuffer.prototype.copy.call(this, a);
    this.meshPerAttribute = a.meshPerAttribute;
    return this
}
;
THREE.InterleavedBufferAttribute = function(a, b, c) {
    this.uuid = THREE.Math.generateUUID();
    this.data = a;
    this.itemSize = b;
    this.offset = c
}
;
THREE.InterleavedBufferAttribute.prototype = {
    constructor: THREE.InterleavedBufferAttribute,
    get length() {
        console.warn("THREE.BufferAttribute: .length has been deprecated. Please use .count.");
        return this.array.length
    },
    get count() {
        return this.data.count
    },
    setX: function(a, b) {
        this.data.array[a * this.data.stride + this.offset] = b;
        return this
    },
    setY: function(a, b) {
        this.data.array[a * this.data.stride + this.offset + 1] = b;
        return this
    },
    setZ: function(a, b) {
        this.data.array[a * this.data.stride + this.offset + 2] = b;
        return this
    },
    setW: function(a, b) {
        this.data.array[a * this.data.stride + this.offset + 3] = b;
        return this
    },
    getX: function(a) {
        return this.data.array[a * this.data.stride + this.offset]
    },
    getY: function(a) {
        return this.data.array[a * this.data.stride + this.offset + 1]
    },
    getZ: function(a) {
        return this.data.array[a * this.data.stride + this.offset + 2]
    },
    getW: function(a) {
        return this.data.array[a * this.data.stride + this.offset + 3]
    },
    setXY: function(a, b, c) {
        a = a * this.data.stride + this.offset;
        this.data.array[a + 0] = b;
        this.data.array[a + 1] = c;
        return this
    },
    setXYZ: function(a, b, c, d) {
        a = a * this.data.stride + this.offset;
        this.data.array[a + 0] = b;
        this.data.array[a + 1] = c;
        this.data.array[a + 2] = d;
        return this
    },
    setXYZW: function(a, b, c, d, e) {
        a = a * this.data.stride + this.offset;
        this.data.array[a + 0] = b;
        this.data.array[a + 1] = c;
        this.data.array[a + 2] = d;
        this.data.array[a + 3] = e;
        return this
    }
};
THREE.Geometry = function() {
    Object.defineProperty(this, "id", {
        value: THREE.GeometryIdCount++
    });
    this.uuid = THREE.Math.generateUUID();
    this.name = "";
    this.type = "Geometry";
    this.vertices = [];
    this.colors = [];
    this.faces = [];
    this.faceVertexUvs = [[]];
    this.morphTargets = [];
    this.morphNormals = [];
    this.skinWeights = [];
    this.skinIndices = [];
    this.lineDistances = [];
    this.boundingSphere = this.boundingBox = null;
    this.groupsNeedUpdate = this.lineDistancesNeedUpdate = this.colorsNeedUpdate = this.normalsNeedUpdate = this.uvsNeedUpdate = this.elementsNeedUpdate = this.verticesNeedUpdate = !1
}
;
THREE.Geometry.prototype = {
    constructor: THREE.Geometry,
    applyMatrix: function(a) {
        for (var b = (new THREE.Matrix3).getNormalMatrix(a), c = 0, d = this.vertices.length; c < d; c++)
            this.vertices[c].applyMatrix4(a);
        c = 0;
        for (d = this.faces.length; c < d; c++) {
            a = this.faces[c];
            a.normal.applyMatrix3(b).normalize();
            for (var e = 0, f = a.vertexNormals.length; e < f; e++)
                a.vertexNormals[e].applyMatrix3(b).normalize()
        }
        null !== this.boundingBox && this.computeBoundingBox();
        null !== this.boundingSphere && this.computeBoundingSphere();
        this.normalsNeedUpdate = this.verticesNeedUpdate = !0;
        return this
    },
    rotateX: function() {
        var a;
        return function(b) {
            void 0 === a && (a = new THREE.Matrix4);
            a.makeRotationX(b);
            this.applyMatrix(a);
            return this
        }
    }(),
    rotateY: function() {
        var a;
        return function(b) {
            void 0 === a && (a = new THREE.Matrix4);
            a.makeRotationY(b);
            this.applyMatrix(a);
            return this
        }
    }(),
    rotateZ: function() {
        var a;
        return function(b) {
            void 0 === a && (a = new THREE.Matrix4);
            a.makeRotationZ(b);
            this.applyMatrix(a);
            return this
        }
    }(),
    translate: function() {
        var a;
        return function(b, c, d) {
            void 0 === a && (a = new THREE.Matrix4);
            a.makeTranslation(b, c, d);
            this.applyMatrix(a);
            return this
        }
    }(),
    scale: function() {
        var a;
        return function(b, c, d) {
            void 0 === a && (a = new THREE.Matrix4);
            a.makeScale(b, c, d);
            this.applyMatrix(a);
            return this
        }
    }(),
    lookAt: function() {
        var a;
        return function(b) {
            void 0 === a && (a = new THREE.Object3D);
            a.lookAt(b);
            a.updateMatrix();
            this.applyMatrix(a.matrix)
        }
    }(),
    fromBufferGeometry: function(a) {
        function b(a, b, d, e) {
            var f = void 0 !== g ? [p[a].clone(), p[b].clone(), p[d].clone()] : []
              , q = void 0 !== h ? [c.colors[a].clone(), c.colors[b].clone(), c.colors[d].clone()] : [];
            e = new THREE.Face3(a,b,d,f,q,e);
            c.faces.push(e);
            void 0 !== k && c.faceVertexUvs[0].push([n[a].clone(), n[b].clone(), n[d].clone()]);
            void 0 !== l && c.faceVertexUvs[1].push([m[a].clone(), m[b].clone(), m[d].clone()])
        }
        var c = this
          , d = null !== a.index ? a.index.array : void 0
          , e = a.attributes
          , f = e.position.array
          , g = void 0 !== e.normal ? e.normal.array : void 0
          , h = void 0 !== e.color ? e.color.array : void 0
          , k = void 0 !== e.uv ? e.uv.array : void 0
          , l = void 0 !== e.uv2 ? e.uv2.array : void 0;
        void 0 !== l && (this.faceVertexUvs[1] = []);
        for (var p = [], n = [], m = [], q = e = 0; e < f.length; e += 3,
        q += 2)
            c.vertices.push(new THREE.Vector3(f[e],f[e + 1],f[e + 2])),
            void 0 !== g && p.push(new THREE.Vector3(g[e],g[e + 1],g[e + 2])),
            void 0 !== h && c.colors.push(new THREE.Color(h[e],h[e + 1],h[e + 2])),
            void 0 !== k && n.push(new THREE.Vector2(k[q],k[q + 1])),
            void 0 !== l && m.push(new THREE.Vector2(l[q],l[q + 1]));
        if (void 0 !== d)
            if (f = a.groups,
            0 < f.length)
                for (e = 0; e < f.length; e++)
                    for (var u = f[e], v = u.start, t = u.count, q = v, v = v + t; q < v; q += 3)
                        b(d[q], d[q + 1], d[q + 2], u.materialIndex);
            else
                for (e = 0; e < d.length; e += 3)
                    b(d[e], d[e + 1], d[e + 2]);
        else
            for (e = 0; e < f.length / 3; e += 3)
                b(e, e + 1, e + 2);
        this.computeFaceNormals();
        null !== a.boundingBox && (this.boundingBox = a.boundingBox.clone());
        null !== a.boundingSphere && (this.boundingSphere = a.boundingSphere.clone());
        return this
    },
    center: function() {
        this.computeBoundingBox();
        var a = this.boundingBox.center().negate();
        this.translate(a.x, a.y, a.z);
        return a
    },
    normalize: function() {
        this.computeBoundingSphere();
        var a = this.boundingSphere.center
          , b = this.boundingSphere.radius
          , b = 0 === b ? 1 : 1 / b
          , c = new THREE.Matrix4;
        c.set(b, 0, 0, -b * a.x, 0, b, 0, -b * a.y, 0, 0, b, -b * a.z, 0, 0, 0, 1);
        this.applyMatrix(c);
        return this
    },
    computeFaceNormals: function() {
        for (var a = new THREE.Vector3, b = new THREE.Vector3, c = 0, d = this.faces.length; c < d; c++) {
            var e = this.faces[c]
              , f = this.vertices[e.a]
              , g = this.vertices[e.b];
            a.subVectors(this.vertices[e.c], g);
            b.subVectors(f, g);
            a.cross(b);
            a.normalize();
            e.normal.copy(a)
        }
    },
    computeVertexNormals: function(a) {
        void 0 === a && (a = !0);
        var b, c, d;
        d = Array(this.vertices.length);
        b = 0;
        for (c = this.vertices.length; b < c; b++)
            d[b] = new THREE.Vector3;
        if (a) {
            var e, f, g, h = new THREE.Vector3, k = new THREE.Vector3;
            a = 0;
            for (b = this.faces.length; a < b; a++)
                c = this.faces[a],
                e = this.vertices[c.a],
                f = this.vertices[c.b],
                g = this.vertices[c.c],
                h.subVectors(g, f),
                k.subVectors(e, f),
                h.cross(k),
                d[c.a].add(h),
                d[c.b].add(h),
                d[c.c].add(h)
        } else
            for (a = 0,
            b = this.faces.length; a < b; a++)
                c = this.faces[a],
                d[c.a].add(c.normal),
                d[c.b].add(c.normal),
                d[c.c].add(c.normal);
        b = 0;
        for (c = this.vertices.length; b < c; b++)
            d[b].normalize();
        a = 0;
        for (b = this.faces.length; a < b; a++)
            c = this.faces[a],
            e = c.vertexNormals,
            3 === e.length ? (e[0].copy(d[c.a]),
            e[1].copy(d[c.b]),
            e[2].copy(d[c.c])) : (e[0] = d[c.a].clone(),
            e[1] = d[c.b].clone(),
            e[2] = d[c.c].clone());
        0 < this.faces.length && (this.normalsNeedUpdate = !0)
    },
    computeMorphNormals: function() {
        var a, b, c, d, e;
        c = 0;
        for (d = this.faces.length; c < d; c++)
            for (e = this.faces[c],
            e.__originalFaceNormal ? e.__originalFaceNormal.copy(e.normal) : e.__originalFaceNormal = e.normal.clone(),
            e.__originalVertexNormals || (e.__originalVertexNormals = []),
            a = 0,
            b = e.vertexNormals.length; a < b; a++)
                e.__originalVertexNormals[a] ? e.__originalVertexNormals[a].copy(e.vertexNormals[a]) : e.__originalVertexNormals[a] = e.vertexNormals[a].clone();
        var f = new THREE.Geometry;
        f.faces = this.faces;
        a = 0;
        for (b = this.morphTargets.length; a < b; a++) {
            if (!this.morphNormals[a]) {
                this.morphNormals[a] = {};
                this.morphNormals[a].faceNormals = [];
                this.morphNormals[a].vertexNormals = [];
                e = this.morphNormals[a].faceNormals;
                var g = this.morphNormals[a].vertexNormals, h, k;
                c = 0;
                for (d = this.faces.length; c < d; c++)
                    h = new THREE.Vector3,
                    k = {
                        a: new THREE.Vector3,
                        b: new THREE.Vector3,
                        c: new THREE.Vector3
                    },
                    e.push(h),
                    g.push(k)
            }
            g = this.morphNormals[a];
            f.vertices = this.morphTargets[a].vertices;
            f.computeFaceNormals();
            f.computeVertexNormals();
            c = 0;
            for (d = this.faces.length; c < d; c++)
                e = this.faces[c],
                h = g.faceNormals[c],
                k = g.vertexNormals[c],
                h.copy(e.normal),
                k.a.copy(e.vertexNormals[0]),
                k.b.copy(e.vertexNormals[1]),
                k.c.copy(e.vertexNormals[2])
        }
        c = 0;
        for (d = this.faces.length; c < d; c++)
            e = this.faces[c],
            e.normal = e.__originalFaceNormal,
            e.vertexNormals = e.__originalVertexNormals
    },
    computeTangents: function() {
        console.warn("THREE.Geometry: .computeTangents() has been removed.")
    },
    computeLineDistances: function() {
        for (var a = 0, b = this.vertices, c = 0, d = b.length; c < d; c++)
            0 < c && (a += b[c].distanceTo(b[c - 1])),
            this.lineDistances[c] = a
    },
    computeBoundingBox: function() {
        null === this.boundingBox && (this.boundingBox = new THREE.Box3);
        this.boundingBox.setFromPoints(this.vertices)
    },
    computeBoundingSphere: function() {
        null === this.boundingSphere && (this.boundingSphere = new THREE.Sphere);
        this.boundingSphere.setFromPoints(this.vertices)
    },
    merge: function(a, b, c) {
        if (!1 === a instanceof THREE.Geometry)
            console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", a);
        else {
            var d, e = this.vertices.length, f = this.vertices, g = a.vertices, h = this.faces, k = a.faces, l = this.faceVertexUvs[0];
            a = a.faceVertexUvs[0];
            void 0 === c && (c = 0);
            void 0 !== b && (d = (new THREE.Matrix3).getNormalMatrix(b));
            for (var p = 0, n = g.length; p < n; p++) {
                var m = g[p].clone();
                void 0 !== b && m.applyMatrix4(b);
                f.push(m)
            }
            p = 0;
            for (n = k.length; p < n; p++) {
                var g = k[p], q, u = g.vertexNormals, v = g.vertexColors, m = new THREE.Face3(g.a + e,g.b + e,g.c + e);
                m.normal.copy(g.normal);
                void 0 !== d && m.normal.applyMatrix3(d).normalize();
                b = 0;
                for (f = u.length; b < f; b++)
                    q = u[b].clone(),
                    void 0 !== d && q.applyMatrix3(d).normalize(),
                    m.vertexNormals.push(q);
                m.color.copy(g.color);
                b = 0;
                for (f = v.length; b < f; b++)
                    q = v[b],
                    m.vertexColors.push(q.clone());
                m.materialIndex = g.materialIndex + c;
                h.push(m)
            }
            p = 0;
            for (n = a.length; p < n; p++)
                if (c = a[p],
                d = [],
                void 0 !== c) {
                    b = 0;
                    for (f = c.length; b < f; b++)
                        d.push(c[b].clone());
                    l.push(d)
                }
        }
    },
    mergeMesh: function(a) {
        !1 === a instanceof THREE.Mesh ? console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", a) : (a.matrixAutoUpdate && a.updateMatrix(),
        this.merge(a.geometry, a.matrix))
    },
    mergeVertices: function() {
        var a = {}, b = [], c = [], d, e = Math.pow(10, 4), f, g;
        f = 0;
        for (g = this.vertices.length; f < g; f++)
            d = this.vertices[f],
            d = Math.round(d.x * e) + "_" + Math.round(d.y * e) + "_" + Math.round(d.z * e),
            void 0 === a[d] ? (a[d] = f,
            b.push(this.vertices[f]),
            c[f] = b.length - 1) : c[f] = c[a[d]];
        a = [];
        f = 0;
        for (g = this.faces.length; f < g; f++)
            for (e = this.faces[f],
            e.a = c[e.a],
            e.b = c[e.b],
            e.c = c[e.c],
            e = [e.a, e.b, e.c],
            d = 0; 3 > d; d++)
                if (e[d] === e[(d + 1) % 3]) {
                    a.push(f);
                    break
                }
        for (f = a.length - 1; 0 <= f; f--)
            for (e = a[f],
            this.faces.splice(e, 1),
            c = 0,
            g = this.faceVertexUvs.length; c < g; c++)
                this.faceVertexUvs[c].splice(e, 1);
        f = this.vertices.length - b.length;
        this.vertices = b;
        return f
    },
    sortFacesByMaterialIndex: function() {
        for (var a = this.faces, b = a.length, c = 0; c < b; c++)
            a[c]._id = c;
        a.sort(function(a, b) {
            return a.materialIndex - b.materialIndex
        });
        var d = this.faceVertexUvs[0], e = this.faceVertexUvs[1], f, g;
        d && d.length === b && (f = []);
        e && e.length === b && (g = []);
        for (c = 0; c < b; c++) {
            var h = a[c]._id;
            f && f.push(d[h]);
            g && g.push(e[h])
        }
        f && (this.faceVertexUvs[0] = f);
        g && (this.faceVertexUvs[1] = g)
    },
    toJSON: function() {
        function a(a, b, c) {
            return c ? a | 1 << b : a & ~(1 << b)
        }
        function b(a) {
            var b = a.x.toString() + a.y.toString() + a.z.toString();
            if (void 0 !== l[b])
                return l[b];
            l[b] = k.length / 3;
            k.push(a.x, a.y, a.z);
            return l[b]
        }
        function c(a) {
            var b = a.r.toString() + a.g.toString() + a.b.toString();
            if (void 0 !== n[b])
                return n[b];
            n[b] = p.length;
            p.push(a.getHex());
            return n[b]
        }
        function d(a) {
            var b = a.x.toString() + a.y.toString();
            if (void 0 !== q[b])
                return q[b];
            q[b] = m.length / 2;
            m.push(a.x, a.y);
            return q[b]
        }
        var e = {
            metadata: {
                version: 4.4,
                type: "Geometry",
                generator: "Geometry.toJSON"
            }
        };
        e.uuid = this.uuid;
        e.type = this.type;
        "" !== this.name && (e.name = this.name);
        if (void 0 !== this.parameters) {
            var f = this.parameters, g;
            for (g in f)
                void 0 !== f[g] && (e[g] = f[g]);
            return e
        }
        f = [];
        for (g = 0; g < this.vertices.length; g++) {
            var h = this.vertices[g];
            f.push(h.x, h.y, h.z)
        }
        var h = []
          , k = []
          , l = {}
          , p = []
          , n = {}
          , m = []
          , q = {};
        for (g = 0; g < this.faces.length; g++) {
            var u = this.faces[g]
              , v = void 0 !== this.faceVertexUvs[0][g]
              , t = 0 < u.normal.length()
              , s = 0 < u.vertexNormals.length
              , w = 1 !== u.color.r || 1 !== u.color.g || 1 !== u.color.b
              , E = 0 < u.vertexColors.length
              , x = 0
              , x = a(x, 0, 0)
              , x = a(x, 1, !0)
              , x = a(x, 2, !1)
              , x = a(x, 3, v)
              , x = a(x, 4, t)
              , x = a(x, 5, s)
              , x = a(x, 6, w)
              , x = a(x, 7, E);
            h.push(x);
            h.push(u.a, u.b, u.c);
            h.push(u.materialIndex);
            v && (v = this.faceVertexUvs[0][g],
            h.push(d(v[0]), d(v[1]), d(v[2])));
            t && h.push(b(u.normal));
            s && (t = u.vertexNormals,
            h.push(b(t[0]), b(t[1]), b(t[2])));
            w && h.push(c(u.color));
            E && (u = u.vertexColors,
            h.push(c(u[0]), c(u[1]), c(u[2])))
        }
        e.data = {};
        e.data.vertices = f;
        e.data.normals = k;
        0 < p.length && (e.data.colors = p);
        0 < m.length && (e.data.uvs = [m]);
        e.data.faces = h;
        return e
    },
    clone: function() {
        return (new THREE.Geometry).copy(this)
    },
    copy: function(a) {
        this.vertices = [];
        this.faces = [];
        this.faceVertexUvs = [[]];
        for (var b = a.vertices, c = 0, d = b.length; c < d; c++)
            this.vertices.push(b[c].clone());
        b = a.faces;
        c = 0;
        for (d = b.length; c < d; c++)
            this.faces.push(b[c].clone());
        c = 0;
        for (d = a.faceVertexUvs.length; c < d; c++) {
            b = a.faceVertexUvs[c];
            void 0 === this.faceVertexUvs[c] && (this.faceVertexUvs[c] = []);
            for (var e = 0, f = b.length; e < f; e++) {
                for (var g = b[e], h = [], k = 0, l = g.length; k < l; k++)
                    h.push(g[k].clone());
                this.faceVertexUvs[c].push(h)
            }
        }
        return this
    },
    dispose: function() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
};
THREE.EventDispatcher.prototype.apply(THREE.Geometry.prototype);
THREE.GeometryIdCount = 0;
THREE.DirectGeometry = function() {
    Object.defineProperty(this, "id", {
        value: THREE.GeometryIdCount++
    });
    this.uuid = THREE.Math.generateUUID();
    this.name = "";
    this.type = "DirectGeometry";
    this.indices = [];
    this.vertices = [];
    this.normals = [];
    this.colors = [];
    this.uvs = [];
    this.uvs2 = [];
    this.groups = [];
    this.morphTargets = {};
    this.skinWeights = [];
    this.skinIndices = [];
    this.boundingSphere = this.boundingBox = null;
    this.groupsNeedUpdate = this.uvsNeedUpdate = this.colorsNeedUpdate = this.normalsNeedUpdate = this.verticesNeedUpdate = !1
}
;
THREE.DirectGeometry.prototype = {
    constructor: THREE.DirectGeometry,
    computeBoundingBox: THREE.Geometry.prototype.computeBoundingBox,
    computeBoundingSphere: THREE.Geometry.prototype.computeBoundingSphere,
    computeFaceNormals: function() {
        console.warn("THREE.DirectGeometry: computeFaceNormals() is not a method of this type of geometry.")
    },
    computeVertexNormals: function() {
        console.warn("THREE.DirectGeometry: computeVertexNormals() is not a method of this type of geometry.")
    },
    computeGroups: function(a) {
        var b, c = [], d;
        a = a.faces;
        for (var e = 0; e < a.length; e++) {
            var f = a[e];
            f.materialIndex !== d && (d = f.materialIndex,
            void 0 !== b && (b.count = 3 * e - b.start,
            c.push(b)),
            b = {
                start: 3 * e,
                materialIndex: d
            })
        }
        void 0 !== b && (b.count = 3 * e - b.start,
        c.push(b));
        this.groups = c
    },
    fromGeometry: function(a) {
        var b = a.faces, c = a.vertices, d = a.faceVertexUvs, e = d[0] && 0 < d[0].length, f = d[1] && 0 < d[1].length, g = a.morphTargets, h = g.length, k;
        if (0 < h) {
            k = [];
            for (var l = 0; l < h; l++)
                k[l] = [];
            this.morphTargets.position = k
        }
        var p = a.morphNormals, n = p.length, m;
        if (0 < n) {
            m = [];
            for (l = 0; l < n; l++)
                m[l] = [];
            this.morphTargets.normal = m
        }
        for (var q = a.skinIndices, u = a.skinWeights, v = q.length === c.length, t = u.length === c.length, l = 0; l < b.length; l++) {
            var s = b[l];
            this.vertices.push(c[s.a], c[s.b], c[s.c]);
            var w = s.vertexNormals;
            3 === w.length ? this.normals.push(w[0], w[1], w[2]) : (w = s.normal,
            this.normals.push(w, w, w));
            w = s.vertexColors;
            3 === w.length ? this.colors.push(w[0], w[1], w[2]) : (w = s.color,
            this.colors.push(w, w, w));
            !0 === e && (w = d[0][l],
            void 0 !== w ? this.uvs.push(w[0], w[1], w[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", l),
            this.uvs.push(new THREE.Vector2, new THREE.Vector2, new THREE.Vector2)));
            !0 === f && (w = d[1][l],
            void 0 !== w ? this.uvs2.push(w[0], w[1], w[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", l),
            this.uvs2.push(new THREE.Vector2, new THREE.Vector2, new THREE.Vector2)));
            for (w = 0; w < h; w++) {
                var E = g[w].vertices;
                k[w].push(E[s.a], E[s.b], E[s.c])
            }
            for (w = 0; w < n; w++)
                E = p[w].vertexNormals[l],
                m[w].push(E.a, E.b, E.c);
            v && this.skinIndices.push(q[s.a], q[s.b], q[s.c]);
            t && this.skinWeights.push(u[s.a], u[s.b], u[s.c])
        }
        this.computeGroups(a);
        this.verticesNeedUpdate = a.verticesNeedUpdate;
        this.normalsNeedUpdate = a.normalsNeedUpdate;
        this.colorsNeedUpdate = a.colorsNeedUpdate;
        this.uvsNeedUpdate = a.uvsNeedUpdate;
        this.groupsNeedUpdate = a.groupsNeedUpdate;
        return this
    },
    dispose: function() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
};
THREE.EventDispatcher.prototype.apply(THREE.DirectGeometry.prototype);
THREE.BufferGeometry = function() {
    Object.defineProperty(this, "id", {
        value: THREE.GeometryIdCount++
    });
    this.uuid = THREE.Math.generateUUID();
    this.name = "";
    this.type = "BufferGeometry";
    this.index = null;
    this.attributes = {};
    this.morphAttributes = {};
    this.groups = [];
    this.boundingSphere = this.boundingBox = null;
    this.drawRange = {
        start: 0,
        count: Infinity
    }
}
;
THREE.BufferGeometry.prototype = {
    constructor: THREE.BufferGeometry,
    getIndex: function() {
        return this.index
    },
    setIndex: function(a) {
        this.index = a
    },
    addAttribute: function(a, b, c) {
        if (!1 === b instanceof THREE.BufferAttribute && !1 === b instanceof THREE.InterleavedBufferAttribute)
            console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),
            this.addAttribute(a, new THREE.BufferAttribute(b,c));
        else if ("index" === a)
            console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),
            this.setIndex(b);
        else
            return this.attributes[a] = b,
            this
    },
    getAttribute: function(a) {
        return this.attributes[a]
    },
    removeAttribute: function(a) {
        delete this.attributes[a];
        return this
    },
    addGroup: function(a, b, c) {
        this.groups.push({
            start: a,
            count: b,
            materialIndex: void 0 !== c ? c : 0
        })
    },
    clearGroups: function() {
        this.groups = []
    },
    setDrawRange: function(a, b) {
        this.drawRange.start = a;
        this.drawRange.count = b
    },
    applyMatrix: function(a) {
        var b = this.attributes.position;
        void 0 !== b && (a.applyToVector3Array(b.array),
        b.needsUpdate = !0);
        b = this.attributes.normal;
        void 0 !== b && ((new THREE.Matrix3).getNormalMatrix(a).applyToVector3Array(b.array),
        b.needsUpdate = !0);
        null !== this.boundingBox && this.computeBoundingBox();
        null !== this.boundingSphere && this.computeBoundingSphere();
        return this
    },
    rotateX: function() {
        var a;
        return function(b) {
            void 0 === a && (a = new THREE.Matrix4);
            a.makeRotationX(b);
            this.applyMatrix(a);
            return this
        }
    }(),
    rotateY: function() {
        var a;
        return function(b) {
            void 0 === a && (a = new THREE.Matrix4);
            a.makeRotationY(b);
            this.applyMatrix(a);
            return this
        }
    }(),
    rotateZ: function() {
        var a;
        return function(b) {
            void 0 === a && (a = new THREE.Matrix4);
            a.makeRotationZ(b);
            this.applyMatrix(a);
            return this
        }
    }(),
    translate: function() {
        var a;
        return function(b, c, d) {
            void 0 === a && (a = new THREE.Matrix4);
            a.makeTranslation(b, c, d);
            this.applyMatrix(a);
            return this
        }
    }(),
    scale: function() {
        var a;
        return function(b, c, d) {
            void 0 === a && (a = new THREE.Matrix4);
            a.makeScale(b, c, d);
            this.applyMatrix(a);
            return this
        }
    }(),
    lookAt: function() {
        var a;
        return function(b) {
            void 0 === a && (a = new THREE.Object3D);
            a.lookAt(b);
            a.updateMatrix();
            this.applyMatrix(a.matrix)
        }
    }(),
    center: function() {
        this.computeBoundingBox();
        var a = this.boundingBox.center().negate();
        this.translate(a.x, a.y, a.z);
        return a
    },
    setFromObject: function(a) {
        var b = a.geometry;
        if (a instanceof THREE.Points || a instanceof THREE.Line) {
            a = new THREE.Float32Attribute(3 * b.vertices.length,3);
            var c = new THREE.Float32Attribute(3 * b.colors.length,3);
            this.addAttribute("position", a.copyVector3sArray(b.vertices));
            this.addAttribute("color", c.copyColorsArray(b.colors));
            b.lineDistances && b.lineDistances.length === b.vertices.length && (a = new THREE.Float32Attribute(b.lineDistances.length,1),
            this.addAttribute("lineDistance", a.copyArray(b.lineDistances)));
            null !== b.boundingSphere && (this.boundingSphere = b.boundingSphere.clone());
            null !== b.boundingBox && (this.boundingBox = b.boundingBox.clone())
        } else
            a instanceof THREE.Mesh && b instanceof THREE.Geometry && this.fromGeometry(b);
        return this
    },
    updateFromObject: function(a) {
        var b = a.geometry;
        if (a instanceof THREE.Mesh) {
            var c = b.__directGeometry;
            if (void 0 === c)
                return this.fromGeometry(b);
            c.verticesNeedUpdate = b.verticesNeedUpdate;
            c.normalsNeedUpdate = b.normalsNeedUpdate;
            c.colorsNeedUpdate = b.colorsNeedUpdate;
            c.uvsNeedUpdate = b.uvsNeedUpdate;
            c.groupsNeedUpdate = b.groupsNeedUpdate;
            b.verticesNeedUpdate = !1;
            b.normalsNeedUpdate = !1;
            b.colorsNeedUpdate = !1;
            b.uvsNeedUpdate = !1;
            b.groupsNeedUpdate = !1;
            b = c
        }
        !0 === b.verticesNeedUpdate && (c = this.attributes.position,
        void 0 !== c && (c.copyVector3sArray(b.vertices),
        c.needsUpdate = !0),
        b.verticesNeedUpdate = !1);
        !0 === b.normalsNeedUpdate && (c = this.attributes.normal,
        void 0 !== c && (c.copyVector3sArray(b.normals),
        c.needsUpdate = !0),
        b.normalsNeedUpdate = !1);
        !0 === b.colorsNeedUpdate && (c = this.attributes.color,
        void 0 !== c && (c.copyColorsArray(b.colors),
        c.needsUpdate = !0),
        b.colorsNeedUpdate = !1);
        b.uvsNeedUpdate && (c = this.attributes.uv,
        void 0 !== c && (c.copyVector2sArray(b.uvs),
        c.needsUpdate = !0),
        b.uvsNeedUpdate = !1);
        b.lineDistancesNeedUpdate && (c = this.attributes.lineDistance,
        void 0 !== c && (c.copyArray(b.lineDistances),
        c.needsUpdate = !0),
        b.lineDistancesNeedUpdate = !1);
        b.groupsNeedUpdate && (b.computeGroups(a.geometry),
        this.groups = b.groups,
        b.groupsNeedUpdate = !1);
        return this
    },
    fromGeometry: function(a) {
        a.__directGeometry = (new THREE.DirectGeometry).fromGeometry(a);
        return this.fromDirectGeometry(a.__directGeometry)
    },
    fromDirectGeometry: function(a) {
        var b = new Float32Array(3 * a.vertices.length);
        this.addAttribute("position", (new THREE.BufferAttribute(b,3)).copyVector3sArray(a.vertices));
        0 < a.normals.length && (b = new Float32Array(3 * a.normals.length),
        this.addAttribute("normal", (new THREE.BufferAttribute(b,3)).copyVector3sArray(a.normals)));
        0 < a.colors.length && (b = new Float32Array(3 * a.colors.length),
        this.addAttribute("color", (new THREE.BufferAttribute(b,3)).copyColorsArray(a.colors)));
        0 < a.uvs.length && (b = new Float32Array(2 * a.uvs.length),
        this.addAttribute("uv", (new THREE.BufferAttribute(b,2)).copyVector2sArray(a.uvs)));
        0 < a.uvs2.length && (b = new Float32Array(2 * a.uvs2.length),
        this.addAttribute("uv2", (new THREE.BufferAttribute(b,2)).copyVector2sArray(a.uvs2)));
        0 < a.indices.length && (b = new (65535 < a.vertices.length ? Uint32Array : Uint16Array)(3 * a.indices.length),
        this.setIndex((new THREE.BufferAttribute(b,1)).copyIndicesArray(a.indices)));
        this.groups = a.groups;
        for (var c in a.morphTargets) {
            for (var b = [], d = a.morphTargets[c], e = 0, f = d.length; e < f; e++) {
                var g = d[e]
                  , h = new THREE.Float32Attribute(3 * g.length,3);
                b.push(h.copyVector3sArray(g))
            }
            this.morphAttributes[c] = b
        }
        0 < a.skinIndices.length && (c = new THREE.Float32Attribute(4 * a.skinIndices.length,4),
        this.addAttribute("skinIndex", c.copyVector4sArray(a.skinIndices)));
        0 < a.skinWeights.length && (c = new THREE.Float32Attribute(4 * a.skinWeights.length,4),
        this.addAttribute("skinWeight", c.copyVector4sArray(a.skinWeights)));
        null !== a.boundingSphere && (this.boundingSphere = a.boundingSphere.clone());
        null !== a.boundingBox && (this.boundingBox = a.boundingBox.clone());
        return this
    },
    computeBoundingBox: function() {
        new THREE.Vector3;
        return function() {
            null === this.boundingBox && (this.boundingBox = new THREE.Box3);
            var a = this.attributes.position.array;
            a && this.boundingBox.setFromArray(a);
            if (void 0 === a || 0 === a.length)
                this.boundingBox.min.set(0, 0, 0),
                this.boundingBox.max.set(0, 0, 0);
            (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
        }
    }(),
    computeBoundingSphere: function() {
        var a = new THREE.Box3
          , b = new THREE.Vector3;
        return function() {
            null === this.boundingSphere && (this.boundingSphere = new THREE.Sphere);
            var c = this.attributes.position.array;
            if (c) {
                var d = this.boundingSphere.center;
                a.setFromArray(c);
                a.center(d);
                for (var e = 0, f = 0, g = c.length; f < g; f += 3)
                    b.fromArray(c, f),
                    e = Math.max(e, d.distanceToSquared(b));
                this.boundingSphere.radius = Math.sqrt(e);
                isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
            }
        }
    }(),
    computeFaceNormals: function() {},
    computeVertexNormals: function() {
        var a = this.index
          , b = this.attributes
          , c = this.groups;
        if (b.position) {
            var d = b.position.array;
            if (void 0 === b.normal)
                this.addAttribute("normal", new THREE.BufferAttribute(new Float32Array(d.length),3));
            else
                for (var e = b.normal.array, f = 0, g = e.length; f < g; f++)
                    e[f] = 0;
            var e = b.normal.array, h, k, l, p = new THREE.Vector3, n = new THREE.Vector3, m = new THREE.Vector3, q = new THREE.Vector3, u = new THREE.Vector3;
            if (a) {
                a = a.array;
                0 === c.length && this.addGroup(0, a.length);
                for (var v = 0, t = c.length; v < t; ++v)
                    for (f = c[v],
                    g = f.start,
                    h = f.count,
                    f = g,
                    g += h; f < g; f += 3)
                        h = 3 * a[f + 0],
                        k = 3 * a[f + 1],
                        l = 3 * a[f + 2],
                        p.fromArray(d, h),
                        n.fromArray(d, k),
                        m.fromArray(d, l),
                        q.subVectors(m, n),
                        u.subVectors(p, n),
                        q.cross(u),
                        e[h] += q.x,
                        e[h + 1] += q.y,
                        e[h + 2] += q.z,
                        e[k] += q.x,
                        e[k + 1] += q.y,
                        e[k + 2] += q.z,
                        e[l] += q.x,
                        e[l + 1] += q.y,
                        e[l + 2] += q.z
            } else
                for (f = 0,
                g = d.length; f < g; f += 9)
                    p.fromArray(d, f),
                    n.fromArray(d, f + 3),
                    m.fromArray(d, f + 6),
                    q.subVectors(m, n),
                    u.subVectors(p, n),
                    q.cross(u),
                    e[f] = q.x,
                    e[f + 1] = q.y,
                    e[f + 2] = q.z,
                    e[f + 3] = q.x,
                    e[f + 4] = q.y,
                    e[f + 5] = q.z,
                    e[f + 6] = q.x,
                    e[f + 7] = q.y,
                    e[f + 8] = q.z;
            this.normalizeNormals();
            b.normal.needsUpdate = !0
        }
    },
    merge: function(a, b) {
        if (!1 === a instanceof THREE.BufferGeometry)
            console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", a);
        else {
            void 0 === b && (b = 0);
            var c = this.attributes, d;
            for (d in c)
                if (void 0 !== a.attributes[d])
                    for (var e = c[d].array, f = a.attributes[d], g = f.array, h = 0, f = f.itemSize * b; h < g.length; h++,
                    f++)
                        e[f] = g[h];
            return this
        }
    },
    normalizeNormals: function() {
        for (var a = this.attributes.normal.array, b, c, d, e = 0, f = a.length; e < f; e += 3)
            b = a[e],
            c = a[e + 1],
            d = a[e + 2],
            b = 1 / Math.sqrt(b * b + c * c + d * d),
            a[e] *= b,
            a[e + 1] *= b,
            a[e + 2] *= b
    },
    toNonIndexed: function() {
        if (null === this.index)
            return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),
            this;
        var a = new THREE.BufferGeometry, b = this.index.array, c = this.attributes, d;
        for (d in c) {
            for (var e = c[d], f = e.array, e = e.itemSize, g = new f.constructor(b.length * e), h = 0, k = 0, l = 0, p = b.length; l < p; l++)
                for (var h = b[l] * e, n = 0; n < e; n++)
                    g[k++] = f[h++];
            a.addAttribute(d, new THREE.BufferAttribute(g,e))
        }
        return a
    },
    toJSON: function() {
        var a = {
            metadata: {
                version: 4.4,
                type: "BufferGeometry",
                generator: "BufferGeometry.toJSON"
            }
        };
        a.uuid = this.uuid;
        a.type = this.type;
        "" !== this.name && (a.name = this.name);
        if (void 0 !== this.parameters) {
            var b = this.parameters, c;
            for (c in b)
                void 0 !== b[c] && (a[c] = b[c]);
            return a
        }
        a.data = {
            attributes: {}
        };
        var d = this.index;
        null !== d && (b = Array.prototype.slice.call(d.array),
        a.data.index = {
            type: d.array.constructor.name,
            array: b
        });
        d = this.attributes;
        for (c in d) {
            var e = d[c]
              , b = Array.prototype.slice.call(e.array);
            a.data.attributes[c] = {
                itemSize: e.itemSize,
                type: e.array.constructor.name,
                array: b
            }
        }
        c = this.groups;
        0 < c.length && (a.data.groups = JSON.parse(JSON.stringify(c)));
        c = this.boundingSphere;
        null !== c && (a.data.boundingSphere = {
            center: c.center.toArray(),
            radius: c.radius
        });
        return a
    },
    clone: function() {
        return (new THREE.BufferGeometry).copy(this)
    },
    copy: function(a) {
        var b = a.index;
        null !== b && this.setIndex(b.clone());
        var b = a.attributes, c;
        for (c in b)
            this.addAttribute(c, b[c].clone());
        a = a.groups;
        c = 0;
        for (b = a.length; c < b; c++) {
            var d = a[c];
            this.addGroup(d.start, d.count)
        }
        return this
    },
    dispose: function() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
};
THREE.EventDispatcher.prototype.apply(THREE.BufferGeometry.prototype);
THREE.BufferGeometry.MaxIndex = 65535;
THREE.InstancedBufferGeometry = function() {
    THREE.BufferGeometry.call(this);
    this.type = "InstancedBufferGeometry";
    this.maxInstancedCount = void 0
}
;
THREE.InstancedBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype);
THREE.InstancedBufferGeometry.prototype.constructor = THREE.InstancedBufferGeometry;
THREE.InstancedBufferGeometry.prototype.addGroup = function(a, b, c) {
    this.groups.push({
        start: a,
        count: b,
        instances: c
    })
}
;
THREE.InstancedBufferGeometry.prototype.copy = function(a) {
    var b = a.index;
    null !== b && this.setIndex(b.clone());
    var b = a.attributes, c;
    for (c in b)
        this.addAttribute(c, b[c].clone());
    a = a.groups;
    c = 0;
    for (b = a.length; c < b; c++) {
        var d = a[c];
        this.addGroup(d.start, d.count, d.instances)
    }
    return this
}
;
THREE.EventDispatcher.prototype.apply(THREE.InstancedBufferGeometry.prototype);
THREE.Uniform = function(a, b) {
    this.type = a;
    this.value = b;
    this.dynamic = !1
}
;
THREE.Uniform.prototype = {
    constructor: THREE.Uniform,
    onUpdate: function(a) {
        this.dynamic = !0;
        this.onUpdateCallback = a;
        return this
    }
};
THREE.AnimationClip = function(a, b, c) {
    this.name = a || THREE.Math.generateUUID();
    this.tracks = c;
    this.duration = void 0 !== b ? b : -1;
    0 > this.duration && this.resetDuration();
    this.trim();
    this.optimize()
}
;
THREE.AnimationClip.prototype = {
    constructor: THREE.AnimationClip,
    resetDuration: function() {
        for (var a = 0, b = 0, c = this.tracks.length; b !== c; ++b)
            var d = this.tracks[b]
              , a = Math.max(a, d.times[d.times.length - 1]);
        this.duration = a
    },
    trim: function() {
        for (var a = 0; a < this.tracks.length; a++)
            this.tracks[a].trim(0, this.duration);
        return this
    },
    optimize: function() {
        for (var a = 0; a < this.tracks.length; a++)
            this.tracks[a].optimize();
        return this
    }
};
Object.assign(THREE.AnimationClip, {
    parse: function(a) {
        for (var b = [], c = a.tracks, d = 1 / (a.fps || 1), e = 0, f = c.length; e !== f; ++e)
            b.push(THREE.KeyframeTrack.parse(c[e]).scale(d));
        return new THREE.AnimationClip(a.name,a.duration,b)
    },
    toJSON: function(a) {
        var b = []
          , c = a.tracks;
        a = {
            name: a.name,
            duration: a.duration,
            tracks: b
        };
        for (var d = 0, e = c.length; d !== e; ++d)
            b.push(THREE.KeyframeTrack.toJSON(c[d]));
        return a
    },
    CreateFromMorphTargetSequence: function(a, b, c) {
        for (var d = b.length, e = [], f = 0; f < d; f++) {
            var g = []
              , h = [];
            g.push((f + d - 1) % d, f, (f + 1) % d);
            h.push(0, 1, 0);
            var k = THREE.AnimationUtils.getKeyframeOrder(g)
              , g = THREE.AnimationUtils.sortedArray(g, 1, k)
              , h = THREE.AnimationUtils.sortedArray(h, 1, k);
            0 === g[0] && (g.push(d),
            h.push(h[0]));
            e.push((new THREE.NumberKeyframeTrack(".morphTargetInfluences[" + b[f].name + "]",g,h)).scale(1 / c))
        }
        return new THREE.AnimationClip(a,-1,e)
    },
    findByName: function(a, b) {
        for (var c = 0; c < a.length; c++)
            if (a[c].name === b)
                return a[c];
        return null
    },
    CreateClipsFromMorphTargetSequences: function(a, b) {
        for (var c = {}, d = /^([\w-]*?)([\d]+)$/, e = 0, f = a.length; e < f; e++) {
            var g = a[e]
              , h = g.name.match(d);
            if (h && 1 < h.length) {
                var k = h[1];
                (h = c[k]) || (c[k] = h = []);
                h.push(g)
            }
        }
        d = [];
        for (k in c)
            d.push(THREE.AnimationClip.CreateFromMorphTargetSequence(k, c[k], b));
        return d
    },
    parseAnimation: function(a, b, c) {
        if (!a)
            return console.error("  no animation in JSONLoader data"),
            null;
        c = function(a, b, c, d, e) {
            if (0 !== c.length) {
                var f = []
                  , g = [];
                THREE.AnimationUtils.flattenJSON(c, f, g, d);
                0 !== f.length && e.push(new a(b,f,g))
            }
        }
        ;
        var d = []
          , e = a.name || "default"
          , f = a.length || -1
          , g = a.fps || 30;
        a = a.hierarchy || [];
        for (var h = 0; h < a.length; h++) {
            var k = a[h].keys;
            if (k && 0 != k.length)
                if (k[0].morphTargets) {
                    for (var f = {}, l = 0; l < k.length; l++)
                        if (k[l].morphTargets)
                            for (var p = 0; p < k[l].morphTargets.length; p++)
                                f[k[l].morphTargets[p]] = -1;
                    for (var n in f) {
                        for (var m = [], q = [], p = 0; p !== k[l].morphTargets.length; ++p) {
                            var u = k[l];
                            m.push(u.time);
                            q.push(u.morphTarget === n ? 1 : 0)
                        }
                        d.push(new THREE.NumberKeyframeTrack(".morphTargetInfluence[" + n + "]",m,q))
                    }
                    f = f.length * (g || 1)
                } else
                    l = ".bones[" + b[h].name + "]",
                    c(THREE.VectorKeyframeTrack, l + ".position", k, "pos", d),
                    c(THREE.QuaternionKeyframeTrack, l + ".quaternion", k, "rot", d),
                    c(THREE.VectorKeyframeTrack, l + ".scale", k, "scl", d)
        }
        return 0 === d.length ? null : new THREE.AnimationClip(e,f,d)
    }
});
THREE.AnimationMixer = function(a) {
    this._root = a;
    this._initMemoryManager();
    this.time = this._accuIndex = 0;
    this.timeScale = 1
}
;
THREE.AnimationMixer.prototype = {
    constructor: THREE.AnimationMixer,
    clipAction: function(a, b) {
        var c = (b || this._root).uuid, d = "string" === typeof a ? a : a.name, e = a !== d ? a : null, f = this._actionsByClip[d], g;
        if (void 0 !== f) {
            g = f.actionByRoot[c];
            if (void 0 !== g)
                return g;
            g = f.knownActions[0];
            e = g._clip;
            if (a !== d && a !== e)
                throw Error("Different clips with the same name detected!");
        }
        if (null === e)
            return null;
        f = new THREE.AnimationMixer._Action(this,e,b);
        this._bindAction(f, g);
        this._addInactiveAction(f, d, c);
        return f
    },
    existingAction: function(a, b) {
        var c = (b || this._root).uuid
          , d = this._actionsByClip["string" === typeof a ? a : a.name];
        return void 0 !== d ? d.actionByRoot[c] || null : null
    },
    stopAllAction: function() {
        for (var a = this._actions, b = this._nActiveActions, c = this._bindings, d = this._nActiveBindings, e = this._nActiveBindings = this._nActiveActions = 0; e !== b; ++e)
            a[e].reset();
        for (e = 0; e !== d; ++e)
            c[e].useCount = 0;
        return this
    },
    update: function(a) {
        a *= this.timeScale;
        for (var b = this._actions, c = this._nActiveActions, d = this.time += a, e = Math.sign(a), f = this._accuIndex ^= 1, g = 0; g !== c; ++g) {
            var h = b[g];
            h.enabled && h._update(d, a, e, f)
        }
        a = this._bindings;
        b = this._nActiveBindings;
        for (g = 0; g !== b; ++g)
            a[g].apply(f);
        return this
    },
    getRoot: function() {
        return this._root
    },
    uncacheClip: function(a) {
        var b = this._actions;
        a = a.name;
        var c = this._actionsByClip
          , d = c[a];
        if (void 0 !== d) {
            for (var d = d.knownActions, e = 0, f = d.length; e !== f; ++e) {
                var g = d[e];
                this._deactivateAction(g);
                var h = g._cacheIndex
                  , k = b[b.length - 1];
                g._cacheIndex = null;
                g._byClipCacheIndex = null;
                k._cacheIndex = h;
                b[h] = k;
                b.pop();
                this._removeInactiveBindingsForAction(g)
            }
            delete c[a]
        }
    },
    uncacheRoot: function(a) {
        a = a.uuid;
        var b = this._actionsByClip, c;
        for (c in b) {
            var d = b[c].actionByRoot[a];
            void 0 !== d && (this._deactivateAction(d),
            this._removeInactiveAction(d))
        }
        c = this._bindingsByRootAndName[a];
        if (void 0 !== c)
            for (var e in c)
                a = c[e],
                a.restoreOriginalState(),
                this._removeInactiveBinding(a)
    },
    uncacheAction: function(a, b) {
        var c = this.existingAction(a, b);
        null !== c && (this._deactivateAction(c),
        this._removeInactiveAction(c))
    }
};
THREE.EventDispatcher.prototype.apply(THREE.AnimationMixer.prototype);
THREE.AnimationMixer._Action = function(a, b, c) {
    this._mixer = a;
    this._clip = b;
    this._localRoot = c || null;
    a = b.tracks;
    b = a.length;
    c = Array(b);
    for (var d = {
        endingStart: THREE.ZeroCurvatureEnding,
        endingEnd: THREE.ZeroCurvatureEnding
    }, e = 0; e !== b; ++e) {
        var f = a[e].createInterpolant(null);
        c[e] = f;
        f.settings = d
    }
    this._interpolantSettings = d;
    this._interpolants = c;
    this._propertyBindings = Array(b);
    this._weightInterpolant = this._timeScaleInterpolant = this._byClipCacheIndex = this._cacheIndex = null;
    this.loop = THREE.LoopRepeat;
    this._loopCount = -1;
    this._startTime = null;
    this.time = 0;
    this._effectiveWeight = this.weight = this._effectiveTimeScale = this.timeScale = 1;
    this.repetitions = Infinity;
    this.paused = !1;
    this.enabled = !0;
    this.clampWhenFinished = !1;
    this.zeroSlopeAtEnd = this.zeroSlopeAtStart = !0
}
;
THREE.AnimationMixer._Action.prototype = {
    constructor: THREE.AnimationMixer._Action,
    play: function() {
        this._mixer._activateAction(this);
        return this
    },
    stop: function() {
        this._mixer._deactivateAction(this);
        return this.reset()
    },
    reset: function() {
        this.paused = !1;
        this.enabled = !0;
        this.time = 0;
        this._loopCount = -1;
        this._startTime = null;
        return this.stopFading().stopWarping()
    },
    isRunning: function() {
        return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this)
    },
    isScheduled: function() {
        return this._mixer._isActiveAction(this)
    },
    startAt: function(a) {
        this._startTime = a;
        return this
    },
    setLoop: function(a, b) {
        this.loop = a;
        this.repetitions = b;
        return this
    },
    setEffectiveWeight: function(a) {
        this.weight = a;
        this._effectiveWeight = this.enabled ? a : 0;
        return this.stopFading()
    },
    getEffectiveWeight: function() {
        return this._effectiveWeight
    },
    fadeIn: function(a) {
        return this._scheduleFading(a, 0, 1)
    },
    fadeOut: function(a) {
        return this._scheduleFading(a, 1, 0)
    },
    crossFadeFrom: function(a, b, c) {
        a.fadeOut(b);
        this.fadeIn(b);
        if (c) {
            c = this._clip.duration;
            var d = a._clip.duration
              , e = c / d;
            a.warp(1, d / c, b);
            this.warp(e, 1, b)
        }
        return this
    },
    crossFadeTo: function(a, b, c) {
        return a.crossFadeFrom(this, b, c)
    },
    stopFading: function() {
        var a = this._weightInterpolant;
        null !== a && (this._weightInterpolant = null,
        this._mixer._takeBackControlInterpolant(a));
        return this
    },
    setEffectiveTimeScale: function(a) {
        this.timeScale = a;
        this._effectiveTimeScale = this.paused ? 0 : a;
        return this.stopWarping()
    },
    getEffectiveTimeScale: function() {
        return this._effectiveTimeScale
    },
    setDuration: function(a) {
        this.timeScale = this._clip.duration / a;
        return this.stopWarping()
    },
    syncWith: function(a) {
        this.time = a.time;
        this.timeScale = a.timeScale;
        return this.stopWarping()
    },
    halt: function(a) {
        return this.warp(this._currentTimeScale, 0, a)
    },
    warp: function(a, b, c) {
        var d = this._mixer
          , e = d.time
          , f = this._timeScaleInterpolant
          , g = this.timeScale;
        null === f && (this._timeScaleInterpolant = f = d._lendControlInterpolant());
        d = f.parameterPositions;
        f = f.sampleValues;
        d[0] = e;
        d[1] = e + c;
        f[0] = a / g;
        f[1] = b / g;
        return this
    },
    stopWarping: function() {
        var a = this._timeScaleInterpolant;
        null !== a && (this._timeScaleInterpolant = null,
        this._mixer._takeBackControlInterpolant(a));
        return this
    },
    getMixer: function() {
        return this._mixer
    },
    getClip: function() {
        return this._clip
    },
    getRoot: function() {
        return this._localRoot || this._mixer._root
    },
    _update: function(a, b, c, d) {
        var e = this._startTime;
        if (null !== e) {
            b = (a - e) * c;
            if (0 > b || 0 === c)
                return;
            this._startTime = null;
            b *= c
        }
        b *= this._updateTimeScale(a);
        c = this._updateTime(b);
        a = this._updateWeight(a);
        if (0 < a) {
            b = this._interpolants;
            for (var e = this._propertyBindings, f = 0, g = b.length; f !== g; ++f)
                b[f].evaluate(c),
                e[f].accumulate(d, a)
        }
    },
    _updateWeight: function(a) {
        var b = 0;
        if (this.enabled) {
            var b = this.weight
              , c = this._weightInterpolant;
            if (null !== c) {
                var d = c.evaluate(a)[0]
                  , b = b * d;
                a > c.parameterPositions[1] && (this.stopFading(),
                0 === d && (this.enabled = !1))
            }
        }
        return this._effectiveWeight = b
    },
    _updateTimeScale: function(a) {
        var b = 0;
        if (!this.paused) {
            var b = this.timeScale
              , c = this._timeScaleInterpolant;
            if (null !== c) {
                var d = c.evaluate(a)[0]
                  , b = b * d;
                a > c.parameterPositions[1] && (this.stopWarping(),
                0 === b ? this.pause = !0 : this.timeScale = b)
            }
        }
        return this._effectiveTimeScale = b
    },
    _updateTime: function(a) {
        var b = this.time + a;
        if (0 === a)
            return b;
        var c = this._clip.duration
          , d = this.loop
          , e = this._loopCount
          , f = !1;
        switch (d) {
        case THREE.LoopOnce:
            -1 === e && (this.loopCount = 0,
            this._setEndings(!0, !0, !1));
            if (b >= c)
                b = c;
            else if (0 > b)
                b = 0;
            else
                break;
            this.clampWhenFinished ? this.pause = !0 : this.enabled = !1;
            this._mixer.dispatchEvent({
                type: "finished",
                action: this,
                direction: 0 > a ? -1 : 1
            });
            break;
        case THREE.LoopPingPong:
            f = !0;
        case THREE.LoopRepeat:
            -1 === e && (0 < a ? (e = 0,
            this._setEndings(!0, 0 === this.repetitions, f)) : this._setEndings(0 === this.repetitions, !0, f));
            if (b >= c || 0 > b) {
                var g = Math.floor(b / c)
                  , b = b - c * g
                  , e = e + Math.abs(g)
                  , h = this.repetitions - e;
                if (0 > h) {
                    this.clampWhenFinished ? this.paused = !0 : this.enabled = !1;
                    b = 0 < a ? c : 0;
                    this._mixer.dispatchEvent({
                        type: "finished",
                        action: this,
                        direction: 0 < a ? 1 : -1
                    });
                    break
                } else
                    0 === h ? (a = 0 > a,
                    this._setEndings(a, !a, f)) : this._setEndings(!1, !1, f);
                this._loopCount = e;
                this._mixer.dispatchEvent({
                    type: "loop",
                    action: this,
                    loopDelta: g
                })
            }
            if (d === THREE.LoopPingPong && 1 === (e & 1))
                return this.time = b,
                c - b
        }
        return this.time = b
    },
    _setEndings: function(a, b, c) {
        var d = this._interpolantSettings;
        c ? (d.endingStart = THREE.ZeroSlopeEnding,
        d.endingEnd = THREE.ZeroSlopeEnding) : (d.endingStart = a ? this.zeroSlopeAtStart ? THREE.ZeroSlopeEnding : THREE.ZeroCurvatureEnding : THREE.WrapAroundEnding,
        d.endingEnd = b ? this.zeroSlopeAtEnd ? THREE.ZeroSlopeEnding : THREE.ZeroCurvatureEnding : THREE.WrapAroundEnding)
    },
    _scheduleFading: function(a, b, c) {
        var d = this._mixer
          , e = d.time
          , f = this._weightInterpolant;
        null === f && (this._weightInterpolant = f = d._lendControlInterpolant());
        d = f.parameterPositions;
        f = f.sampleValues;
        d[0] = e;
        f[0] = b;
        d[1] = e + a;
        f[1] = c;
        return this
    }
};
Object.assign(THREE.AnimationMixer.prototype, {
    _bindAction: function(a, b) {
        var c = a._localRoot || this._root
          , d = a._clip.tracks
          , e = d.length
          , f = a._propertyBindings
          , g = a._interpolants
          , h = c.uuid
          , k = this._bindingsByRootAndName
          , l = k[h];
        void 0 === l && (l = {},
        k[h] = l);
        for (k = 0; k !== e; ++k) {
            var p = d[k]
              , n = p.name
              , m = l[n];
            if (void 0 === m) {
                m = f[k];
                if (void 0 !== m) {
                    null === m._cacheIndex && (++m.referenceCount,
                    this._addInactiveBinding(m, h, n));
                    continue
                }
                m = new THREE.PropertyMixer(THREE.PropertyBinding.create(c, n, b && b._propertyBindings[k].binding.parsedPath),p.ValueTypeName,p.getValueSize());
                ++m.referenceCount;
                this._addInactiveBinding(m, h, n)
            }
            f[k] = m;
            g[k].resultBuffer = m.buffer
        }
    },
    _activateAction: function(a) {
        if (!this._isActiveAction(a)) {
            if (null === a._cacheIndex) {
                var b = (a._localRoot || this._root).uuid
                  , c = a._clip.name
                  , d = this._actionsByClip[c];
                this._bindAction(a, d && d.knownActions[0]);
                this._addInactiveAction(a, c, b)
            }
            b = a._propertyBindings;
            c = 0;
            for (d = b.length; c !== d; ++c) {
                var e = b[c];
                0 === e.useCount++ && (this._lendBinding(e),
                e.saveOriginalState())
            }
            this._lendAction(a)
        }
    },
    _deactivateAction: function(a) {
        if (this._isActiveAction(a)) {
            for (var b = a._propertyBindings, c = 0, d = b.length; c !== d; ++c) {
                var e = b[c];
                0 === --e.useCount && (e.restoreOriginalState(),
                this._takeBackBinding(e))
            }
            this._takeBackAction(a)
        }
    },
    _initMemoryManager: function() {
        this._actions = [];
        this._nActiveActions = 0;
        this._actionsByClip = {};
        this._bindings = [];
        this._nActiveBindings = 0;
        this._bindingsByRootAndName = {};
        this._controlInterpolants = [];
        this._nActiveControlInterpolants = 0;
        var a = this;
        this.stats = {
            actions: {
                get total() {
                    return a._actions.length
                },
                get inUse() {
                    return a._nActiveActions
                }
            },
            bindings: {
                get total() {
                    return a._bindings.length
                },
                get inUse() {
                    return a._nActiveBindings
                }
            },
            controlInterpolants: {
                get total() {
                    return a._controlInterpolants.length
                },
                get inUse() {
                    return a._nActiveControlInterpolants
                }
            }
        }
    },
    _isActiveAction: function(a) {
        a = a._cacheIndex;
        return null !== a && a < this._nActiveActions
    },
    _addInactiveAction: function(a, b, c) {
        var d = this._actions
          , e = this._actionsByClip
          , f = e[b];
        void 0 === f ? (f = {
            knownActions: [a],
            actionByRoot: {}
        },
        a._byClipCacheIndex = 0,
        e[b] = f) : (b = f.knownActions,
        a._byClipCacheIndex = b.length,
        b.push(a));
        a._cacheIndex = d.length;
        d.push(a);
        f.actionByRoot[c] = a
    },
    _removeInactiveAction: function(a) {
        var b = this._actions
          , c = b[b.length - 1]
          , d = a._cacheIndex;
        c._cacheIndex = d;
        b[d] = c;
        b.pop();
        a._cacheIndex = null;
        var c = a._clip.name
          , d = this._actionsByClip
          , e = d[c]
          , f = e.knownActions
          , g = f[f.length - 1]
          , h = a._byClipCacheIndex;
        g._byClipCacheIndex = h;
        f[h] = g;
        f.pop();
        a._byClipCacheIndex = null;
        delete e.actionByRoot[(b._localRoot || this._root).uuid];
        0 === f.length && delete d[c];
        this._removeInactiveBindingsForAction(a)
    },
    _removeInactiveBindingsForAction: function(a) {
        a = a._propertyBindings;
        for (var b = 0, c = a.length; b !== c; ++b) {
            var d = a[b];
            0 === --d.referenceCount && this._removeInactiveBinding(d)
        }
    },
    _lendAction: function(a) {
        var b = this._actions
          , c = a._cacheIndex
          , d = this._nActiveActions++
          , e = b[d];
        a._cacheIndex = d;
        b[d] = a;
        e._cacheIndex = c;
        b[c] = e
    },
    _takeBackAction: function(a) {
        var b = this._actions
          , c = a._cacheIndex
          , d = --this._nActiveActions
          , e = b[d];
        a._cacheIndex = d;
        b[d] = a;
        e._cacheIndex = c;
        b[c] = e
    },
    _addInactiveBinding: function(a, b, c) {
        var d = this._bindingsByRootAndName
          , e = d[b]
          , f = this._bindings;
        void 0 === e && (e = {},
        d[b] = e);
        e[c] = a;
        a._cacheIndex = f.length;
        f.push(a)
    },
    _removeInactiveBinding: function(a) {
        var b = this._bindings
          , c = a.binding
          , d = c.rootNode.uuid
          , c = c.path
          , e = this._bindingsByRootAndName
          , f = e[d]
          , g = b[b.length - 1];
        a = a._cacheIndex;
        g._cacheIndex = a;
        b[a] = g;
        b.pop();
        delete f[c];
        a: {
            for (var h in f)
                break a;
            delete e[d]
        }
    },
    _lendBinding: function(a) {
        var b = this._bindings
          , c = a._cacheIndex
          , d = this._nActiveBindings++
          , e = b[d];
        a._cacheIndex = d;
        b[d] = a;
        e._cacheIndex = c;
        b[c] = e
    },
    _takeBackBinding: function(a) {
        var b = this._bindings
          , c = a._cacheIndex
          , d = --this._nActiveBindings
          , e = b[d];
        a._cacheIndex = d;
        b[d] = a;
        e._cacheIndex = c;
        b[c] = e
    },
    _lendControlInterpolant: function() {
        var a = this._controlInterpolants
          , b = this._nActiveControlInterpolants++
          , c = a[b];
        void 0 === c && (c = new THREE.LinearInterpolant(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),
        c.__cacheIndex = b,
        a[b] = c);
        return c
    },
    _takeBackControlInterpolant: function(a) {
        var b = this._controlInterpolants
          , c = a.__cacheIndex
          , d = --this._nActiveControlInterpolants
          , e = b[d];
        a.__cacheIndex = d;
        b[d] = a;
        e.__cacheIndex = c;
        b[c] = e
    },
    _controlInterpolantsResultBuffer: new Float32Array(1)
});
THREE.AnimationObjectGroup = function(a) {
    this.uuid = THREE.Math.generateUUID();
    this._objects = Array.prototype.slice.call(arguments);
    this.nCachedObjects_ = 0;
    var b = {};
    this._indicesByUUID = b;
    for (var c = 0, d = arguments.length; c !== d; ++c)
        b[arguments[c].uuid] = c;
    this._paths = [];
    this._parsedPaths = [];
    this._bindings = [];
    this._bindingsIndicesByPath = {};
    var e = this;
    this.stats = {
        objects: {
            get total() {
                return e._objects.length
            },
            get inUse() {
                return this.total - e.nCachedObjects_
            }
        },
        get bindingsPerObject() {
            return e._bindings.length
        }
    }
}
;
THREE.AnimationObjectGroup.prototype = {
    constructor: THREE.AnimationObjectGroup,
    add: function(a) {
        for (var b = this._objects, c = b.length, d = this.nCachedObjects_, e = this._indicesByUUID, f = this._paths, g = this._parsedPaths, h = this._bindings, k = h.length, l = 0, p = arguments.length; l !== p; ++l) {
            var n = arguments[l]
              , m = n.uuid
              , q = e[m];
            if (void 0 === q) {
                q = c++;
                e[m] = q;
                b.push(n);
                for (var m = 0, u = k; m !== u; ++m)
                    h[m].push(new THREE.PropertyBinding(n,f[m],g[m]))
            } else if (q < d) {
                var v = b[q]
                  , t = --d
                  , u = b[t];
                e[u.uuid] = q;
                b[q] = u;
                e[m] = t;
                b[t] = n;
                m = 0;
                for (u = k; m !== u; ++m) {
                    var s = h[m]
                      , w = s[q];
                    s[q] = s[t];
                    void 0 === w && (w = new THREE.PropertyBinding(n,f[m],g[m]));
                    s[t] = w
                }
            } else
                b[q] !== v && console.error("Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes...")
        }
        this.nCachedObjects_ = d
    },
    remove: function(a) {
        for (var b = this._objects, c = this.nCachedObjects_, d = this._indicesByUUID, e = this._bindings, f = e.length, g = 0, h = arguments.length; g !== h; ++g) {
            var k = arguments[g]
              , l = k.uuid
              , p = d[l];
            if (void 0 !== p && p >= c) {
                var n = c++
                  , m = b[n];
                d[m.uuid] = p;
                b[p] = m;
                d[l] = n;
                b[n] = k;
                k = 0;
                for (l = f; k !== l; ++k) {
                    var m = e[k]
                      , q = m[p];
                    m[p] = m[n];
                    m[n] = q
                }
            }
        }
        this.nCachedObjects_ = c
    },
    uncache: function(a) {
        for (var b = this._objects, c = b.length, d = this.nCachedObjects_, e = this._indicesByUUID, f = this._bindings, g = f.length, h = 0, k = arguments.length; h !== k; ++h) {
            var l = arguments[h].uuid
              , p = e[l];
            if (void 0 !== p)
                if (delete e[l],
                p < d) {
                    var l = --d
                      , n = b[l]
                      , m = --c
                      , q = b[m];
                    e[n.uuid] = p;
                    b[p] = n;
                    e[q.uuid] = l;
                    b[l] = q;
                    b.pop();
                    n = 0;
                    for (q = g; n !== q; ++n) {
                        var u = f[n]
                          , v = u[m];
                        u[p] = u[l];
                        u[l] = v;
                        u.pop()
                    }
                } else
                    for (m = --c,
                    q = b[m],
                    e[q.uuid] = p,
                    b[p] = q,
                    b.pop(),
                    n = 0,
                    q = g; n !== q; ++n)
                        u = f[n],
                        u[p] = u[m],
                        u.pop()
        }
        this.nCachedObjects_ = d
    },
    subscribe_: function(a, b) {
        var c = this._bindingsIndicesByPath
          , d = c[a]
          , e = this._bindings;
        if (void 0 !== d)
            return e[d];
        var f = this._paths
          , g = this._parsedPaths
          , h = this._objects
          , k = this.nCachedObjects_
          , l = Array(h.length)
          , d = e.length;
        c[a] = d;
        f.push(a);
        g.push(b);
        e.push(l);
        c = k;
        for (d = h.length; c !== d; ++c)
            l[c] = new THREE.PropertyBinding(h[c],a,b);
        return l
    },
    unsubscribe_: function(a) {
        var b = this._bindingsIndicesByPath
          , c = b[a];
        if (void 0 !== c) {
            var d = this._paths
              , e = this._parsedPaths
              , f = this._bindings
              , g = f.length - 1
              , h = f[g];
            b[a[g]] = c;
            f[c] = h;
            f.pop();
            e[c] = e[g];
            e.pop();
            d[c] = d[g];
            d.pop()
        }
    }
};
THREE.AnimationUtils = {
    arraySlice: function(a, b, c) {
        return THREE.AnimationUtils.isTypedArray(a) ? new a.constructor(a.subarray(b, c)) : a.slice(b, c)
    },
    convertArray: function(a, b, c) {
        return !a || !c && a.constructor === b ? a : "number" === typeof b.BYTES_PER_ELEMENT ? new b(a) : Array.prototype.slice.call(a)
    },
    isTypedArray: function(a) {
        return ArrayBuffer.isView(a) && !(a instanceof DataView)
    },
    getKeyframeOrder: function(a) {
        for (var b = a.length, c = Array(b), d = 0; d !== b; ++d)
            c[d] = d;
        c.sort(function(b, c) {
            return a[b] - a[c]
        });
        return c
    },
    sortedArray: function(a, b, c) {
        for (var d = a.length, e = new a.constructor(d), f = 0, g = 0; g !== d; ++f)
            for (var h = c[f] * b, k = 0; k !== b; ++k)
                e[g++] = a[h + k];
        return e
    },
    flattenJSON: function(a, b, c, d) {
        for (var e = 1, f = a[0]; void 0 !== f && void 0 === f[d]; )
            f = a[e++];
        if (void 0 !== f) {
            var g = f[d];
            if (void 0 !== g)
                if (Array.isArray(g)) {
                    do
                        g = f[d],
                        void 0 !== g && (b.push(f.time),
                        c.push.apply(c, g)),
                        f = a[e++];
                    while (void 0 !== f)
                } else if (void 0 !== g.toArray) {
                    do
                        g = f[d],
                        void 0 !== g && (b.push(f.time),
                        g.toArray(c, c.length)),
                        f = a[e++];
                    while (void 0 !== f)
                } else {
                    do
                        g = f[d],
                        void 0 !== g && (b.push(f.time),
                        c.push(g)),
                        f = a[e++];
                    while (void 0 !== f)
                }
        }
    }
};
THREE.KeyframeTrack = function(a, b, c, d) {
    if (void 0 === a)
        throw Error("track name is undefined");
    if (void 0 === b || 0 === b.length)
        throw Error("no keyframes in track named " + a);
    this.name = a;
    this.times = THREE.AnimationUtils.convertArray(b, this.TimeBufferType);
    this.values = THREE.AnimationUtils.convertArray(c, this.ValueBufferType);
    this.setInterpolation(d || this.DefaultInterpolation);
    this.validate();
    this.optimize()
}
;
THREE.KeyframeTrack.prototype = {
    constructor: THREE.KeyframeTrack,
    TimeBufferType: Float32Array,
    ValueBufferType: Float32Array,
    DefaultInterpolation: THREE.InterpolateLinear,
    InterpolantFactoryMethodDiscrete: function(a) {
        return new THREE.DiscreteInterpolant(this.times,this.values,this.getValueSize(),a)
    },
    InterpolantFactoryMethodLinear: function(a) {
        return new THREE.LinearInterpolant(this.times,this.values,this.getValueSize(),a)
    },
    InterpolantFactoryMethodSmooth: function(a) {
        return new THREE.CubicInterpolant(this.times,this.values,this.getValueSize(),a)
    },
    setInterpolation: function(a) {
        var b = void 0;
        switch (a) {
        case THREE.InterpolateDiscrete:
            b = this.InterpolantFactoryMethodDiscrete;
            break;
        case THREE.InterpolateLinear:
            b = this.InterpolantFactoryMethodLinear;
            break;
        case THREE.InterpolateSmooth:
            b = this.InterpolantFactoryMethodSmooth
        }
        if (void 0 === b) {
            b = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
            if (void 0 === this.createInterpolant)
                if (a !== this.DefaultInterpolation)
                    this.setInterpolation(this.DefaultInterpolation);
                else
                    throw Error(b);
            console.warn(b)
        } else
            this.createInterpolant = b
    },
    getInterpolation: function() {
        switch (this.createInterpolant) {
        case this.InterpolantFactoryMethodDiscrete:
            return THREE.InterpolateDiscrete;
        case this.InterpolantFactoryMethodLinear:
            return THREE.InterpolateLinear;
        case this.InterpolantFactoryMethodSmooth:
            return THREE.InterpolateSmooth
        }
    },
    getValueSize: function() {
        return this.values.length / this.times.length
    },
    shift: function(a) {
        if (0 !== a)
            for (var b = this.times, c = 0, d = b.length; c !== d; ++c)
                b[c] += a;
        return this
    },
    scale: function(a) {
        if (1 !== a)
            for (var b = this.times, c = 0, d = b.length; c !== d; ++c)
                b[c] *= a;
        return this
    },
    trim: function(a, b) {
        for (var c = this.times, d = c.length, e = 0, f = d - 1; e !== d && c[e] < a; )
            ++e;
        for (; -1 !== f && c[f] > b; )
            --f;
        ++f;
        if (0 !== e || f !== d)
            e >= f && (f = Math.max(f, 1),
            e = f - 1),
            d = this.getValueSize(),
            this.times = THREE.AnimationUtils.arraySlice(c, e, f),
            this.values = THREE.AnimationUtils.arraySlice(this.values, e * d, f * d);
        return this
    },
    validate: function() {
        var a = !0
          , b = this.getValueSize();
        0 !== b - Math.floor(b) && (console.error("invalid value size in track", this),
        a = !1);
        var c = this.times
          , b = this.values
          , d = c.length;
        0 === d && (console.error("track is empty", this),
        a = !1);
        for (var e = null, f = 0; f !== d; f++) {
            var g = c[f];
            if ("number" === typeof g && isNaN(g)) {
                console.error("time is not a valid number", this, f, g);
                a = !1;
                break
            }
            if (null !== e && e > g) {
                console.error("out of order keys", this, f, g, e);
                a = !1;
                break
            }
            e = g
        }
        if (void 0 !== b && THREE.AnimationUtils.isTypedArray(b))
            for (f = 0,
            c = b.length; f !== c; ++f)
                if (d = b[f],
                isNaN(d)) {
                    console.error("value is not a valid number", this, f, d);
                    a = !1;
                    break
                }
        return a
    },
    optimize: function() {
        for (var a = this.times, b = this.values, c = this.getValueSize(), d = 1, e = 1, f = a.length - 1; e <= f; ++e) {
            var g = !1
              , h = a[e];
            if (h !== a[e + 1] && (1 !== e || h !== h[0]))
                for (var k = e * c, l = k - c, p = k + c, h = 0; h !== c; ++h) {
                    var n = b[k + h];
                    if (n !== b[l + h] || n !== b[p + h]) {
                        g = !0;
                        break
                    }
                }
            if (g) {
                if (e !== d)
                    for (a[d] = a[e],
                    g = e * c,
                    k = d * c,
                    h = 0; h !== c; ++h)
                        b[k + h] = b[g + h];
                ++d
            }
        }
        d !== a.length && (this.times = THREE.AnimationUtils.arraySlice(a, 0, d),
        this.values = THREE.AnimationUtils.arraySlice(b, 0, d * c));
        return this
    }
};
Object.assign(THREE.KeyframeTrack, {
    parse: function(a) {
        if (void 0 === a.type)
            throw Error("track type undefined, can not parse");
        var b = THREE.KeyframeTrack._getTrackTypeForValueTypeName(a.type);
        if (void 0 === a.times) {
            console.warn("legacy JSON format detected, converting");
            var c = []
              , d = [];
            THREE.AnimationUtils.flattenJSON(a.keys, c, d, "value");
            a.times = c;
            a.values = d
        }
        return void 0 !== b.parse ? b.parse(a) : new b(a.name,a.times,a.values,a.interpolation)
    },
    toJSON: function(a) {
        var b = a.constructor;
        if (void 0 !== b.toJSON)
            b = b.toJSON(a);
        else {
            var b = {
                name: a.name,
                times: THREE.AnimationUtils.convertArray(a.times, Array),
                values: THREE.AnimationUtils.convertArray(a.values, Array)
            }
              , c = a.getInterpolation();
            c !== a.DefaultInterpolation && (b.interpolation = c)
        }
        b.type = a.ValueTypeName;
        return b
    },
    _getTrackTypeForValueTypeName: function(a) {
        switch (a.toLowerCase()) {
        case "scalar":
        case "double":
        case "float":
        case "number":
        case "integer":
            return THREE.NumberKeyframeTrack;
        case "vector":
        case "vector2":
        case "vector3":
        case "vector4":
            return THREE.VectorKeyframeTrack;
        case "color":
            return THREE.ColorKeyframeTrack;
        case "quaternion":
            return THREE.QuaternionKeyframeTrack;
        case "bool":
        case "boolean":
            return THREE.BooleanKeyframeTrack;
        case "string":
            return THREE.StringKeyframeTrack
        }
        throw Error("Unsupported typeName: " + a);
    }
});
THREE.PropertyBinding = function(a, b, c) {
    this.path = b;
    this.parsedPath = c || THREE.PropertyBinding.parseTrackName(b);
    this.node = THREE.PropertyBinding.findNode(a, this.parsedPath.nodeName) || a;
    this.rootNode = a
}
;
THREE.PropertyBinding.prototype = {
    constructor: THREE.PropertyBinding,
    getValue: function(a, b) {
        this.bind();
        this.getValue(a, b)
    },
    setValue: function(a, b) {
        this.bind();
        this.setValue(a, b)
    },
    bind: function() {
        var a = this.node
          , b = this.parsedPath
          , c = b.objectName
          , d = b.propertyName
          , e = b.propertyIndex;
        a || (this.node = a = THREE.PropertyBinding.findNode(this.rootNode, b.nodeName) || this.rootNode);
        this.getValue = this._getValue_unavailable;
        this.setValue = this._setValue_unavailable;
        if (a) {
            if (c) {
                var f = b.objectIndex;
                switch (c) {
                case "materials":
                    if (!a.material) {
                        console.error("  can not bind to material as node does not have a material", this);
                        return
                    }
                    if (!a.material.materials) {
                        console.error("  can not bind to material.materials as node.material does not have a materials array", this);
                        return
                    }
                    a = a.material.materials;
                    break;
                case "bones":
                    if (!a.skeleton) {
                        console.error("  can not bind to bones as node does not have a skeleton", this);
                        return
                    }
                    a = a.skeleton.bones;
                    for (c = 0; c < a.length; c++)
                        if (a[c].name === f) {
                            f = c;
                            break
                        }
                    break;
                default:
                    if (void 0 === a[c]) {
                        console.error("  can not bind to objectName of node, undefined", this);
                        return
                    }
                    a = a[c]
                }
                if (void 0 !== f) {
                    if (void 0 === a[f]) {
                        console.error("  trying to bind to objectIndex of objectName, but is undefined:", this, a);
                        return
                    }
                    a = a[f]
                }
            }
            if (f = a[d]) {
                b = this.Versioning.None;
                void 0 !== a.needsUpdate ? (b = this.Versioning.NeedsUpdate,
                this.targetObject = a) : void 0 !== a.matrixWorldNeedsUpdate && (b = this.Versioning.MatrixWorldNeedsUpdate,
                this.targetObject = a);
                c = this.BindingType.Direct;
                if (void 0 !== e) {
                    if ("morphTargetInfluences" === d) {
                        if (!a.geometry) {
                            console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry", this);
                            return
                        }
                        if (!a.geometry.morphTargets) {
                            console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry.morphTargets", this);
                            return
                        }
                        for (c = 0; c < this.node.geometry.morphTargets.length; c++)
                            if (a.geometry.morphTargets[c].name === e) {
                                e = c;
                                break
                            }
                    }
                    c = this.BindingType.ArrayElement;
                    this.resolvedProperty = f;
                    this.propertyIndex = e
                } else
                    void 0 !== f.fromArray && void 0 !== f.toArray ? (c = this.BindingType.HasFromToArray,
                    this.resolvedProperty = f) : void 0 !== f.length ? (c = this.BindingType.EntireArray,
                    this.resolvedProperty = f) : this.propertyName = d;
                this.getValue = this.GetterByBindingType[c];
                this.setValue = this.SetterByBindingTypeAndVersioning[c][b]
            } else
                console.error("  trying to update property for track: " + b.nodeName + "." + d + " but it wasn't found.", a)
        } else
            console.error("  trying to update node for track: " + this.path + " but it wasn't found.")
    },
    unbind: function() {
        this.node = null;
        this.getValue = this._getValue_unbound;
        this.setValue = this._setValue_unbound
    }
};
Object.assign(THREE.PropertyBinding.prototype, {
    _getValue_unavailable: function() {},
    _setValue_unavailable: function() {},
    _getValue_unbound: THREE.PropertyBinding.prototype.getValue,
    _setValue_unbound: THREE.PropertyBinding.prototype.setValue,
    BindingType: {
        Direct: 0,
        EntireArray: 1,
        ArrayElement: 2,
        HasFromToArray: 3
    },
    Versioning: {
        None: 0,
        NeedsUpdate: 1,
        MatrixWorldNeedsUpdate: 2
    },
    GetterByBindingType: [function(a, b) {
        a[b] = this.node[this.propertyName]
    }
    , function(a, b) {
        for (var c = this.resolvedProperty, d = 0, e = c.length; d !== e; ++d)
            a[b++] = c[d]
    }
    , function(a, b) {
        a[b] = this.resolvedProperty[this.propertyIndex]
    }
    , function(a, b) {
        this.resolvedProperty.toArray(a, b)
    }
    ],
    SetterByBindingTypeAndVersioning: [[function(a, b) {
        this.node[this.propertyName] = a[b]
    }
    , function(a, b) {
        this.node[this.propertyName] = a[b];
        this.targetObject.needsUpdate = !0
    }
    , function(a, b) {
        this.node[this.propertyName] = a[b];
        this.targetObject.matrixWorldNeedsUpdate = !0
    }
    ], [function(a, b) {
        for (var c = this.resolvedProperty, d = 0, e = c.length; d !== e; ++d)
            c[d] = a[b++]
    }
    , function(a, b) {
        for (var c = this.resolvedProperty, d = 0, e = c.length; d !== e; ++d)
            c[d] = a[b++];
        this.targetObject.needsUpdate = !0
    }
    , function(a, b) {
        for (var c = this.resolvedProperty, d = 0, e = c.length; d !== e; ++d)
            c[d] = a[b++];
        this.targetObject.matrixWorldNeedsUpdate = !0
    }
    ], [function(a, b) {
        this.resolvedProperty[this.propertyIndex] = a[b]
    }
    , function(a, b) {
        this.resolvedProperty[this.propertyIndex] = a[b];
        this.targetObject.needsUpdate = !0
    }
    , function(a, b) {
        this.resolvedProperty[this.propertyIndex] = a[b];
        this.targetObject.matrixWorldNeedsUpdate = !0
    }
    ], [function(a, b) {
        this.resolvedProperty.fromArray(a, b)
    }
    , function(a, b) {
        this.resolvedProperty.fromArray(a, b);
        this.targetObject.needsUpdate = !0
    }
    , function(a, b) {
        this.resolvedProperty.fromArray(a, b);
        this.targetObject.matrixWorldNeedsUpdate = !0
    }
    ]]
});
THREE.PropertyBinding.Composite = function(a, b, c) {
    c = c || THREE.PropertyBinding.parseTrackName(b);
    this._targetGroup = a;
    this._bindings = a.subscribe_(b, c)
}
;
THREE.PropertyBinding.Composite.prototype = {
    constructor: THREE.PropertyBinding.Composite,
    getValue: function(a, b) {
        this.bind();
        var c = this._bindings[this._targetGroup.nCachedObjects_];
        void 0 !== c && c.getValue(a, b)
    },
    setValue: function(a, b) {
        for (var c = this._bindings, d = this._targetGroup.nCachedObjects_, e = c.length; d !== e; ++d)
            c[d].setValue(a, b)
    },
    bind: function() {
        for (var a = this._bindings, b = this._targetGroup.nCachedObjects_, c = a.length; b !== c; ++b)
            a[b].bind()
    },
    unbind: function() {
        for (var a = this._bindings, b = this._targetGroup.nCachedObjects_, c = a.length; b !== c; ++b)
            a[b].unbind()
    }
};
THREE.PropertyBinding.create = function(a, b, c) {
    return a instanceof THREE.AnimationObjectGroup ? new THREE.PropertyBinding.Composite(a,b,c) : new THREE.PropertyBinding(a,b,c)
}
;
THREE.PropertyBinding.parseTrackName = function(a) {
    var b = /^(([\w]+\/)*)([\w-\d]+)?(\.([\w]+)(\[([\w\d\[\]\_.:\- ]+)\])?)?(\.([\w.]+)(\[([\w\d\[\]\_. ]+)\])?)$/
      , c = b.exec(a);
    if (!c)
        throw Error("cannot parse trackName at all: " + a);
    c.index === b.lastIndex && b.lastIndex++;
    b = {
        nodeName: c[3],
        objectName: c[5],
        objectIndex: c[7],
        propertyName: c[9],
        propertyIndex: c[11]
    };
    if (null === b.propertyName || 0 === b.propertyName.length)
        throw Error("can not parse propertyName from trackName: " + a);
    return b
}
;
THREE.PropertyBinding.findNode = function(a, b) {
    if (!b || "" === b || "root" === b || "." === b || -1 === b || b === a.name || b === a.uuid)
        return a;
    if (a.skeleton) {
        var c = function(a) {
            for (var c = 0; c < a.bones.length; c++) {
                var d = a.bones[c];
                if (d.name === b)
                    return d
            }
            return null
        }(a.skeleton);
        if (c)
            return c
    }
    if (a.children) {
        var d = function(a) {
            for (var c = 0; c < a.length; c++) {
                var g = a[c];
                if (g.name === b || g.uuid === b || (g = d(g.children)))
                    return g
            }
            return null
        };
        if (c = d(a.children))
            return c
    }
    return null
}
;
THREE.PropertyMixer = function(a, b, c) {
    this.binding = a;
    this.valueSize = c;
    a = Float64Array;
    switch (b) {
    case "quaternion":
        b = this._slerp;
        break;
    case "string":
    case "bool":
        a = Array;
        b = this._select;
        break;
    default:
        b = this._lerp
    }
    this.buffer = new a(4 * c);
    this._mixBufferRegion = b;
    this.referenceCount = this.useCount = this.cumulativeWeight = 0
}
;
THREE.PropertyMixer.prototype = {
    constructor: THREE.PropertyMixer,
    accumulate: function(a, b) {
        var c = this.buffer
          , d = this.valueSize
          , e = a * d + d
          , f = this.cumulativeWeight;
        if (0 === f) {
            for (f = 0; f !== d; ++f)
                c[e + f] = c[f];
            f = b
        } else
            f += b,
            this._mixBufferRegion(c, e, 0, b / f, d);
        this.cumulativeWeight = f
    },
    apply: function(a) {
        var b = this.valueSize
          , c = this.buffer;
        a = a * b + b;
        var d = this.cumulativeWeight
          , e = this.binding;
        this.cumulativeWeight = 0;
        1 > d && this._mixBufferRegion(c, a, 3 * b, 1 - d, b);
        for (var d = b, f = b + b; d !== f; ++d)
            if (c[d] !== c[d + b]) {
                e.setValue(c, a);
                break
            }
    },
    saveOriginalState: function() {
        var a = this.buffer
          , b = this.valueSize
          , c = 3 * b;
        this.binding.getValue(a, c);
        for (var d = b; d !== c; ++d)
            a[d] = a[c + d % b];
        this.cumulativeWeight = 0
    },
    restoreOriginalState: function() {
        this.binding.setValue(this.buffer, 3 * this.valueSize)
    },
    _select: function(a, b, c, d, e) {
        if (.5 <= d)
            for (d = 0; d !== e; ++d)
                a[b + d] = a[c + d]
    },
    _slerp: function(a, b, c, d, e) {
        THREE.Quaternion.slerpFlat(a, b, a, b, a, c, d)
    },
    _lerp: function(a, b, c, d, e) {
        for (var f = 1 - d, g = 0; g !== e; ++g) {
            var h = b + g;
            a[h] = a[h] * f + a[c + g] * d
        }
    }
};
THREE.BooleanKeyframeTrack = function(a, b, c) {
    THREE.KeyframeTrack.call(this, a, b, c)
}
;
THREE.BooleanKeyframeTrack.prototype = Object.assign(Object.create(THREE.KeyframeTrack.prototype), {
    constructor: THREE.BooleanKeyframeTrack,
    ValueTypeName: "bool",
    ValueBufferType: Array,
    DefaultInterpolation: THREE.IntepolateDiscrete,
    InterpolantFactoryMethodLinear: void 0,
    InterpolantFactoryMethodSmooth: void 0
});
THREE.NumberKeyframeTrack = function(a, b, c, d) {
    THREE.KeyframeTrack.call(this, a, b, c, d)
}
;
THREE.NumberKeyframeTrack.prototype = Object.assign(Object.create(THREE.KeyframeTrack.prototype), {
    constructor: THREE.NumberKeyframeTrack,
    ValueTypeName: "number"
});
THREE.QuaternionKeyframeTrack = function(a, b, c, d) {
    THREE.KeyframeTrack.call(this, a, b, c, d)
}
;
THREE.QuaternionKeyframeTrack.prototype = Object.assign(Object.create(THREE.KeyframeTrack.prototype), {
    constructor: THREE.QuaternionKeyframeTrack,
    ValueTypeName: "quaternion",
    DefaultInterpolation: THREE.InterpolateLinear,
    InterpolantFactoryMethodLinear: function(a) {
        return new THREE.QuaternionLinearInterpolant(this.times,this.values,this.getValueSize(),a)
    },
    InterpolantFactoryMethodSmooth: void 0
});
THREE.StringKeyframeTrack = function(a, b, c, d) {
    THREE.KeyframeTrack.call(this, a, b, c, d)
}
;
THREE.StringKeyframeTrack.prototype = Object.assign(Object.create(THREE.KeyframeTrack.prototype), {
    constructor: THREE.StringKeyframeTrack,
    ValueTypeName: "string",
    ValueBufferType: Array,
    DefaultInterpolation: THREE.IntepolateDiscrete,
    InterpolantFactoryMethodLinear: void 0,
    InterpolantFactoryMethodSmooth: void 0
});
THREE.VectorKeyframeTrack = function(a, b, c, d) {
    THREE.KeyframeTrack.call(this, a, b, c, d)
}
;
THREE.VectorKeyframeTrack.prototype = Object.assign(Object.create(THREE.KeyframeTrack.prototype), {
    constructor: THREE.VectorKeyframeTrack,
    ValueTypeName: "vector"
});
THREE.Audio = function(a) {
    THREE.Object3D.call(this);
    this.type = "Audio";
    this.context = a.context;
    this.source = this.context.createBufferSource();
    this.source.onended = this.onEnded.bind(this);
    this.gain = this.context.createGain();
    this.gain.connect(a.getInput());
    this.autoplay = !1;
    this.startTime = 0;
    this.playbackRate = 1;
    this.isPlaying = !1;
    this.hasPlaybackControl = !0;
    this.sourceType = "empty";
    this.filter = null
}
;
THREE.Audio.prototype = Object.create(THREE.Object3D.prototype);
THREE.Audio.prototype.constructor = THREE.Audio;
THREE.Audio.prototype.getOutput = function() {
    return this.gain
}
;
THREE.Audio.prototype.load = function(a) {
    var b = new THREE.AudioBuffer(this.context);
    b.load(a);
    this.setBuffer(b);
    return this
}
;
THREE.Audio.prototype.setNodeSource = function(a) {
    this.hasPlaybackControl = !1;
    this.sourceType = "audioNode";
    this.source = a;
    this.connect();
    return this
}
;
THREE.Audio.prototype.setBuffer = function(a) {
    var b = this;
    a.onReady(function(a) {
        b.source.buffer = a;
        b.sourceType = "buffer";
        b.autoplay && b.play()
    });
    return this
}
;
THREE.Audio.prototype.play = function() {
    if (!0 === this.isPlaying)
        console.warn("THREE.Audio: Audio is already playing.");
    else if (!1 === this.hasPlaybackControl)
        console.warn("THREE.Audio: this Audio has no playback control.");
    else {
        var a = this.context.createBufferSource();
        a.buffer = this.source.buffer;
        a.loop = this.source.loop;
        a.onended = this.source.onended;
        a.start(0, this.startTime);
        a.playbackRate.value = this.playbackRate;
        this.isPlaying = !0;
        this.source = a;
        this.connect()
    }
}
;
THREE.Audio.prototype.pause = function() {
    !1 === this.hasPlaybackControl ? console.warn("THREE.Audio: this Audio has no playback control.") : (this.source.stop(),
    this.startTime = this.context.currentTime)
}
;
THREE.Audio.prototype.stop = function() {
    !1 === this.hasPlaybackControl ? console.warn("THREE.Audio: this Audio has no playback control.") : (this.source.stop(),
    this.startTime = 0)
}
;
THREE.Audio.prototype.connect = function() {
    null !== this.filter ? (this.source.connect(this.filter),
    this.filter.connect(this.getOutput())) : this.source.connect(this.getOutput())
}
;
THREE.Audio.prototype.disconnect = function() {
    null !== this.filter ? (this.source.disconnect(this.filter),
    this.filter.disconnect(this.getOutput())) : this.source.disconnect(this.getOutput())
}
;
THREE.Audio.prototype.getFilter = function() {
    return this.filter
}
;
THREE.Audio.prototype.setFilter = function(a) {
    void 0 === a && (a = null);
    !0 === this.isPlaying ? (this.disconnect(),
    this.filter = a,
    this.connect()) : this.filter = a
}
;
THREE.Audio.prototype.setPlaybackRate = function(a) {
    !1 === this.hasPlaybackControl ? console.warn("THREE.Audio: this Audio has no playback control.") : (this.playbackRate = a,
    !0 === this.isPlaying && (this.source.playbackRate.value = this.playbackRate))
}
;
THREE.Audio.prototype.getPlaybackRate = function() {
    return this.playbackRate
}
;
THREE.Audio.prototype.onEnded = function() {
    this.isPlaying = !1
}
;
THREE.Audio.prototype.setLoop = function(a) {
    !1 === this.hasPlaybackControl ? console.warn("THREE.Audio: this Audio has no playback control.") : this.source.loop = a
}
;
THREE.Audio.prototype.getLoop = function() {
    return !1 === this.hasPlaybackControl ? (console.warn("THREE.Audio: this Audio has no playback control."),
    !1) : this.source.loop
}
;
THREE.Audio.prototype.setVolume = function(a) {
    this.gain.gain.value = a
}
;
THREE.Audio.prototype.getVolume = function() {
    return this.gain.gain.value
}
;
THREE.AudioAnalyser = function(a, b) {
    this.analyser = a.context.createAnalyser();
    this.analyser.fftSize = void 0 !== b ? b : 2048;
    this.data = new Uint8Array(this.analyser.frequencyBinCount);
    a.getOutput().connect(this.analyser)
}
;
THREE.AudioAnalyser.prototype = {
    constructor: THREE.AudioAnalyser,
    getData: function() {
        this.analyser.getByteFrequencyData(this.data);
        return this.data
    }
};
THREE.AudioBuffer = function(a) {
    this.context = a;
    this.ready = !1;
    this.readyCallbacks = []
}
;
THREE.AudioBuffer.prototype.load = function(a) {
    var b = this
      , c = new XMLHttpRequest;
    c.open("GET", a, !0);
    c.responseType = "arraybuffer";
    c.onload = function(a) {
        b.context.decodeAudioData(this.response, function(a) {
            b.buffer = a;
            b.ready = !0;
            for (a = 0; a < b.readyCallbacks.length; a++)
                b.readyCallbacks[a](b.buffer);
            b.readyCallbacks = []
        })
    }
    ;
    c.send();
    return this
}
;
THREE.AudioBuffer.prototype.onReady = function(a) {
    this.ready ? a(this.buffer) : this.readyCallbacks.push(a)
}
;
THREE.PositionalAudio = function(a) {
    THREE.Audio.call(this, a);
    this.panner = this.context.createPanner();
    this.panner.connect(this.gain)
}
;
THREE.PositionalAudio.prototype = Object.create(THREE.Audio.prototype);
THREE.PositionalAudio.prototype.constructor = THREE.PositionalAudio;
THREE.PositionalAudio.prototype.getOutput = function() {
    return this.panner
}
;
THREE.PositionalAudio.prototype.setRefDistance = function(a) {
    this.panner.refDistance = a
}
;
THREE.PositionalAudio.prototype.getRefDistance = function() {
    return this.panner.refDistance
}
;
THREE.PositionalAudio.prototype.setRolloffFactor = function(a) {
    this.panner.rolloffFactor = a
}
;
THREE.PositionalAudio.prototype.getRolloffFactor = function() {
    return this.panner.rolloffFactor
}
;
THREE.PositionalAudio.prototype.setDistanceModel = function(a) {
    this.panner.distanceModel = a
}
;
THREE.PositionalAudio.prototype.getDistanceModel = function() {
    return this.panner.distanceModel
}
;
THREE.PositionalAudio.prototype.setMaxDistance = function(a) {
    this.panner.maxDistance = a
}
;
THREE.PositionalAudio.prototype.getMaxDistance = function() {
    return this.panner.maxDistance
}
;
THREE.PositionalAudio.prototype.updateMatrixWorld = function() {
    var a = new THREE.Vector3;
    return function(b) {
        THREE.Object3D.prototype.updateMatrixWorld.call(this, b);
        a.setFromMatrixPosition(this.matrixWorld);
        this.panner.setPosition(a.x, a.y, a.z)
    }
}();
THREE.AudioListener = function() {
    THREE.Object3D.call(this);
    this.type = "AudioListener";
    this.context = new (window.AudioContext || window.webkitAudioContext);
    this.gain = this.context.createGain();
    this.gain.connect(this.context.destination);
    this.filter = null
}
;
THREE.AudioListener.prototype = Object.create(THREE.Object3D.prototype);
THREE.AudioListener.prototype.constructor = THREE.AudioListener;
THREE.AudioListener.prototype.getInput = function() {
    return this.gain
}
;
THREE.AudioListener.prototype.removeFilter = function() {
    null !== this.filter && (this.gain.disconnect(this.filter),
    this.filter.disconnect(this.context.destination),
    this.gain.connect(this.context.destination),
    this.filter = null)
}
;
THREE.AudioListener.prototype.setFilter = function(a) {
    null !== this.filter ? (this.gain.disconnect(this.filter),
    this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination);
    this.filter = a;
    this.gain.connect(this.filter);
    this.filter.connect(this.context.destination)
}
;
THREE.AudioListener.prototype.getFilter = function() {
    return this.filter
}
;
THREE.AudioListener.prototype.setMasterVolume = function(a) {
    this.gain.gain.value = a
}
;
THREE.AudioListener.prototype.getMasterVolume = function() {
    return this.gain.gain.value
}
;
THREE.AudioListener.prototype.updateMatrixWorld = function() {
    var a = new THREE.Vector3
      , b = new THREE.Quaternion
      , c = new THREE.Vector3
      , d = new THREE.Vector3;
    return function(e) {
        THREE.Object3D.prototype.updateMatrixWorld.call(this, e);
        e = this.context.listener;
        var f = this.up;
        this.matrixWorld.decompose(a, b, c);
        d.set(0, 0, -1).applyQuaternion(b);
        e.setPosition(a.x, a.y, a.z);
        e.setOrientation(d.x, d.y, d.z, f.x, f.y, f.z)
    }
}();
THREE.Camera = function() {
    THREE.Object3D.call(this);
    this.type = "Camera";
    this.matrixWorldInverse = new THREE.Matrix4;
    this.projectionMatrix = new THREE.Matrix4
}
;
THREE.Camera.prototype = Object.create(THREE.Object3D.prototype);
THREE.Camera.prototype.constructor = THREE.Camera;
THREE.Camera.prototype.getWorldDirection = function() {
    var a = new THREE.Quaternion;
    return function(b) {
        b = b || new THREE.Vector3;
        this.getWorldQuaternion(a);
        return b.set(0, 0, -1).applyQuaternion(a)
    }
}();
THREE.Camera.prototype.lookAt = function() {
    var a = new THREE.Matrix4;
    return function(b) {
        a.lookAt(this.position, b, this.up);
        this.quaternion.setFromRotationMatrix(a)
    }
}();
THREE.Camera.prototype.clone = function() {
    return (new this.constructor).copy(this)
}
;
THREE.Camera.prototype.copy = function(a) {
    THREE.Object3D.prototype.copy.call(this, a);
    this.matrixWorldInverse.copy(a.matrixWorldInverse);
    this.projectionMatrix.copy(a.projectionMatrix);
    return this
}
;
THREE.CubeCamera = function(a, b, c) {
    THREE.Object3D.call(this);
    this.type = "CubeCamera";
    var d = new THREE.PerspectiveCamera(90,1,a,b);
    d.up.set(0, -1, 0);
    d.lookAt(new THREE.Vector3(1,0,0));
    this.add(d);
    var e = new THREE.PerspectiveCamera(90,1,a,b);
    e.up.set(0, -1, 0);
    e.lookAt(new THREE.Vector3(-1,0,0));
    this.add(e);
    var f = new THREE.PerspectiveCamera(90,1,a,b);
    f.up.set(0, 0, 1);
    f.lookAt(new THREE.Vector3(0,1,0));
    this.add(f);
    var g = new THREE.PerspectiveCamera(90,1,a,b);
    g.up.set(0, 0, -1);
    g.lookAt(new THREE.Vector3(0,-1,0));
    this.add(g);
    var h = new THREE.PerspectiveCamera(90,1,a,b);
    h.up.set(0, -1, 0);
    h.lookAt(new THREE.Vector3(0,0,1));
    this.add(h);
    var k = new THREE.PerspectiveCamera(90,1,a,b);
    k.up.set(0, -1, 0);
    k.lookAt(new THREE.Vector3(0,0,-1));
    this.add(k);
    this.renderTarget = new THREE.WebGLRenderTargetCube(c,c,{
        format: THREE.RGBFormat,
        magFilter: THREE.LinearFilter,
        minFilter: THREE.LinearFilter
    });
    this.updateCubeMap = function(a, b) {
        null === this.parent && this.updateMatrixWorld();
        var c = this.renderTarget
          , m = c.texture.generateMipmaps;
        c.texture.generateMipmaps = !1;
        c.activeCubeFace = 0;
        a.render(b, d, c);
        c.activeCubeFace = 1;
        a.render(b, e, c);
        c.activeCubeFace = 2;
        a.render(b, f, c);
        c.activeCubeFace = 3;
        a.render(b, g, c);
        c.activeCubeFace = 4;
        a.render(b, h, c);
        c.texture.generateMipmaps = m;
        c.activeCubeFace = 5;
        a.render(b, k, c);
        a.setRenderTarget(null)
    }
}
;
THREE.CubeCamera.prototype = Object.create(THREE.Object3D.prototype);
THREE.CubeCamera.prototype.constructor = THREE.CubeCamera;
THREE.OrthographicCamera = function(a, b, c, d, e, f) {
    THREE.Camera.call(this);
    this.type = "OrthographicCamera";
    this.zoom = 1;
    this.left = a;
    this.right = b;
    this.top = c;
    this.bottom = d;
    this.near = void 0 !== e ? e : .1;
    this.far = void 0 !== f ? f : 2E3;
    this.updateProjectionMatrix()
}
;
THREE.OrthographicCamera.prototype = Object.create(THREE.Camera.prototype);
THREE.OrthographicCamera.prototype.constructor = THREE.OrthographicCamera;
THREE.OrthographicCamera.prototype.updateProjectionMatrix = function() {
    var a = (this.right - this.left) / (2 * this.zoom)
      , b = (this.top - this.bottom) / (2 * this.zoom)
      , c = (this.right + this.left) / 2
      , d = (this.top + this.bottom) / 2;
    this.projectionMatrix.makeOrthographic(c - a, c + a, d + b, d - b, this.near, this.far)
}
;
THREE.OrthographicCamera.prototype.copy = function(a) {
    THREE.Camera.prototype.copy.call(this, a);
    this.left = a.left;
    this.right = a.right;
    this.top = a.top;
    this.bottom = a.bottom;
    this.near = a.near;
    this.far = a.far;
    this.zoom = a.zoom;
    return this
}
;
THREE.OrthographicCamera.prototype.toJSON = function(a) {
    a = THREE.Object3D.prototype.toJSON.call(this, a);
    a.object.zoom = this.zoom;
    a.object.left = this.left;
    a.object.right = this.right;
    a.object.top = this.top;
    a.object.bottom = this.bottom;
    a.object.near = this.near;
    a.object.far = this.far;
    return a
}
;
THREE.PerspectiveCamera = function(a, b, c, d) {
    THREE.Camera.call(this);
    this.type = "PerspectiveCamera";
    this.focalLength = 10;
    this.zoom = 1;
    this.fov = void 0 !== a ? a : 50;
    this.aspect = void 0 !== b ? b : 1;
    this.near = void 0 !== c ? c : .1;
    this.far = void 0 !== d ? d : 2E3;
    this.updateProjectionMatrix()
}
;
THREE.PerspectiveCamera.prototype = Object.create(THREE.Camera.prototype);
THREE.PerspectiveCamera.prototype.constructor = THREE.PerspectiveCamera;
THREE.PerspectiveCamera.prototype.setLens = function(a, b) {
    void 0 === b && (b = 24);
    this.fov = 2 * THREE.Math.radToDeg(Math.atan(b / (2 * a)));
    this.updateProjectionMatrix()
}
;
THREE.PerspectiveCamera.prototype.setViewOffset = function(a, b, c, d, e, f) {
    this.fullWidth = a;
    this.fullHeight = b;
    this.x = c;
    this.y = d;
    this.width = e;
    this.height = f;
    this.updateProjectionMatrix()
}
;
THREE.PerspectiveCamera.prototype.updateProjectionMatrix = function() {
    var a = THREE.Math.radToDeg(2 * Math.atan(Math.tan(.5 * THREE.Math.degToRad(this.fov)) / this.zoom));
    if (this.fullWidth) {
        var b = this.fullWidth / this.fullHeight
          , a = Math.tan(THREE.Math.degToRad(.5 * a)) * this.near
          , c = -a
          , d = b * c
          , b = Math.abs(b * a - d)
          , c = Math.abs(a - c);
        this.projectionMatrix.makeFrustum(d + this.x * b / this.fullWidth, d + (this.x + this.width) * b / this.fullWidth, a - (this.y + this.height) * c / this.fullHeight, a - this.y * c / this.fullHeight, this.near, this.far)
    } else
        this.projectionMatrix.makePerspective(a, this.aspect, this.near, this.far)
}
;
THREE.PerspectiveCamera.prototype.copy = function(a) {
    THREE.Camera.prototype.copy.call(this, a);
    this.focalLength = a.focalLength;
    this.zoom = a.zoom;
    this.fov = a.fov;
    this.aspect = a.aspect;
    this.near = a.near;
    this.far = a.far;
    return this
}
;
THREE.PerspectiveCamera.prototype.toJSON = function(a) {
    a = THREE.Object3D.prototype.toJSON.call(this, a);
    a.object.focalLength = this.focalLength;
    a.object.zoom = this.zoom;
    a.object.fov = this.fov;
    a.object.aspect = this.aspect;
    a.object.near = this.near;
    a.object.far = this.far;
    return a
}
;
THREE.StereoCamera = function() {
    this.type = "StereoCamera";
    this.aspect = 1;
    this.cameraL = new THREE.PerspectiveCamera;
    this.cameraL.layers.enable(1);
    this.cameraL.matrixAutoUpdate = !1;
    this.cameraR = new THREE.PerspectiveCamera;
    this.cameraR.layers.enable(2);
    this.cameraR.matrixAutoUpdate = !1
}
;
THREE.StereoCamera.prototype = {
    constructor: THREE.StereoCamera,
    update: function() {
        var a, b, c, d, e, f = new THREE.Matrix4, g = new THREE.Matrix4;
        return function(h) {
            if (a !== h.focalLength || b !== h.fov || c !== h.aspect * this.aspect || d !== h.near || e !== h.far) {
                a = h.focalLength;
                b = h.fov;
                c = h.aspect * this.aspect;
                d = h.near;
                e = h.far;
                var k = h.projectionMatrix.clone(), l = .032 * d / a, p = d * Math.tan(THREE.Math.degToRad(.5 * b)), n, m;
                g.elements[12] = -.032;
                f.elements[12] = .032;
                n = -p * c + l;
                m = p * c + l;
                k.elements[0] = 2 * d / (m - n);
                k.elements[8] = (m + n) / (m - n);
                this.cameraL.projectionMatrix.copy(k);
                n = -p * c - l;
                m = p * c - l;
                k.elements[0] = 2 * d / (m - n);
                k.elements[8] = (m + n) / (m - n);
                this.cameraR.projectionMatrix.copy(k)
            }
            this.cameraL.matrixWorld.copy(h.matrixWorld).multiply(g);
            this.cameraR.matrixWorld.copy(h.matrixWorld).multiply(f)
        }
    }()
};
THREE.Light = function(a, b) {
    THREE.Object3D.call(this);
    this.type = "Light";
    this.color = new THREE.Color(a);
    this.intensity = void 0 !== b ? b : 1;
    this.receiveShadow = void 0
}
;
THREE.Light.prototype = Object.create(THREE.Object3D.prototype);
THREE.Light.prototype.constructor = THREE.Light;
THREE.Light.prototype.copy = function(a) {
    THREE.Object3D.prototype.copy.call(this, a);
    this.color.copy(a.color);
    this.intensity = a.intensity;
    return this
}
;
THREE.Light.prototype.toJSON = function(a) {
    a = THREE.Object3D.prototype.toJSON.call(this, a);
    a.object.color = this.color.getHex();
    a.object.intensity = this.intensity;
    void 0 !== this.groundColor && (a.object.groundColor = this.groundColor.getHex());
    void 0 !== this.distance && (a.object.distance = this.distance);
    void 0 !== this.angle && (a.object.angle = this.angle);
    void 0 !== this.decay && (a.object.decay = this.decay);
    void 0 !== this.penumbra && (a.object.penumbra = this.penumbra);
    return a
}
;
THREE.LightShadow = function(a) {
    this.camera = a;
    this.bias = 0;
    this.radius = 1;
    this.mapSize = new THREE.Vector2(512,512);
    this.map = null;
    this.matrix = new THREE.Matrix4
}
;
THREE.LightShadow.prototype = {
    constructor: THREE.LightShadow,
    copy: function(a) {
        this.camera = a.camera.clone();
        this.bias = a.bias;
        this.radius = a.radius;
        this.mapSize.copy(a.mapSize);
        return this
    },
    clone: function() {
        return (new this.constructor).copy(this)
    }
};
THREE.AmbientLight = function(a, b) {
    THREE.Light.call(this, a, b);
    this.type = "AmbientLight";
    this.castShadow = void 0
}
;
THREE.AmbientLight.prototype = Object.create(THREE.Light.prototype);
THREE.AmbientLight.prototype.constructor = THREE.AmbientLight;
THREE.DirectionalLight = function(a, b) {
    THREE.Light.call(this, a, b);
    this.type = "DirectionalLight";
    this.position.set(0, 1, 0);
    this.updateMatrix();
    this.target = new THREE.Object3D;
    this.shadow = new THREE.LightShadow(new THREE.OrthographicCamera(-5,5,5,-5,.5,500))
}
;
THREE.DirectionalLight.prototype = Object.create(THREE.Light.prototype);
THREE.DirectionalLight.prototype.constructor = THREE.DirectionalLight;
THREE.DirectionalLight.prototype.copy = function(a) {
    THREE.Light.prototype.copy.call(this, a);
    this.target = a.target.clone();
    this.shadow = a.shadow.clone();
    return this
}
;
THREE.HemisphereLight = function(a, b, c) {
    THREE.Light.call(this, a, c);
    this.type = "HemisphereLight";
    this.castShadow = void 0;
    this.position.set(0, 1, 0);
    this.updateMatrix();
    this.groundColor = new THREE.Color(b)
}
;
THREE.HemisphereLight.prototype = Object.create(THREE.Light.prototype);
THREE.HemisphereLight.prototype.constructor = THREE.HemisphereLight;
THREE.HemisphereLight.prototype.copy = function(a) {
    THREE.Light.prototype.copy.call(this, a);
    this.groundColor.copy(a.groundColor);
    return this
}
;
THREE.PointLight = function(a, b, c, d) {
    THREE.Light.call(this, a, b);
    this.type = "PointLight";
    this.distance = void 0 !== c ? c : 0;
    this.decay = void 0 !== d ? d : 1;
    this.shadow = new THREE.LightShadow(new THREE.PerspectiveCamera(90,1,.5,500))
}
;
THREE.PointLight.prototype = Object.create(THREE.Light.prototype);
THREE.PointLight.prototype.constructor = THREE.PointLight;
Object.defineProperty(THREE.PointLight.prototype, "power", {
    get: function() {
        return 4 * this.intensity * Math.PI
    },
    set: function(a) {
        this.intensity = a / (4 * Math.PI)
    }
});
THREE.PointLight.prototype.copy = function(a) {
    THREE.Light.prototype.copy.call(this, a);
    this.distance = a.distance;
    this.decay = a.decay;
    this.shadow = a.shadow.clone();
    return this
}
;
THREE.SpotLight = function(a, b, c, d, e, f) {
    THREE.Light.call(this, a, b);
    this.type = "SpotLight";
    this.position.set(0, 1, 0);
    this.updateMatrix();
    this.target = new THREE.Object3D;
    this.distance = void 0 !== c ? c : 0;
    this.angle = void 0 !== d ? d : Math.PI / 3;
    this.penumbra = void 0 !== e ? e : 0;
    this.decay = void 0 !== f ? f : 1;
    this.shadow = new THREE.LightShadow(new THREE.PerspectiveCamera(50,1,.5,500))
}
;
THREE.SpotLight.prototype = Object.create(THREE.Light.prototype);
THREE.SpotLight.prototype.constructor = THREE.SpotLight;
Object.defineProperty(THREE.SpotLight.prototype, "power", {
    get: function() {
        return this.intensity * Math.PI
    },
    set: function(a) {
        this.intensity = a / Math.PI
    }
});
THREE.SpotLight.prototype.copy = function(a) {
    THREE.Light.prototype.copy.call(this, a);
    this.distance = a.distance;
    this.angle = a.angle;
    this.penumbra = a.penumbra;
    this.decay = a.decay;
    this.target = a.target.clone();
    this.shadow = a.shadow.clone();
    return this
}
;
THREE.Cache = {
    enabled: !1,
    files: {},
    add: function(a, b) {
        !1 !== this.enabled && (this.files[a] = b)
    },
    get: function(a) {
        if (!1 !== this.enabled)
            return this.files[a]
    },
    remove: function(a) {
        delete this.files[a]
    },
    clear: function() {
        this.files = {}
    }
};
THREE.Loader = function() {
    this.onLoadStart = function() {}
    ;
    this.onLoadProgress = function() {}
    ;
    this.onLoadComplete = function() {}
}
;
THREE.Loader.prototype = {
    constructor: THREE.Loader,
    crossOrigin: void 0,
    extractUrlBase: function(a) {
        a = a.split("/");
        if (1 === a.length)
            return "./";
        a.pop();
        return a.join("/") + "/"
    },
    initMaterials: function(a, b, c) {
        for (var d = [], e = 0; e < a.length; ++e)
            d[e] = this.createMaterial(a[e], b, c);
        return d
    },
    createMaterial: function() {
        var a, b, c;
        return function(d, e, f) {
            function g(a, c, d, g, k) {
                a = e + a;
                var l = THREE.Loader.Handlers.get(a);
                null !== l ? a = l.load(a) : (b.setCrossOrigin(f),
                a = b.load(a));
                void 0 !== c && (a.repeat.fromArray(c),
                1 !== c[0] && (a.wrapS = THREE.RepeatWrapping),
                1 !== c[1] && (a.wrapT = THREE.RepeatWrapping));
                void 0 !== d && a.offset.fromArray(d);
                void 0 !== g && ("repeat" === g[0] && (a.wrapS = THREE.RepeatWrapping),
                "mirror" === g[0] && (a.wrapS = THREE.MirroredRepeatWrapping),
                "repeat" === g[1] && (a.wrapT = THREE.RepeatWrapping),
                "mirror" === g[1] && (a.wrapT = THREE.MirroredRepeatWrapping));
                void 0 !== k && (a.anisotropy = k);
                c = THREE.Math.generateUUID();
                h[c] = a;
                return c
            }
            void 0 === a && (a = new THREE.Color);
            void 0 === b && (b = new THREE.TextureLoader);
            void 0 === c && (c = new THREE.MaterialLoader);
            var h = {}, k = {
                uuid: THREE.Math.generateUUID(),
                type: "MeshLambertMaterial"
            }, l;
            for (l in d) {
                var p = d[l];
                switch (l) {
                case "DbgColor":
                case "DbgIndex":
                case "opticalDensity":
                case "illumination":
                    break;
                case "DbgName":
                    k.name = p;
                    break;
                case "blending":
                    k.blending = THREE[p];
                    break;
                case "colorAmbient":
                case "mapAmbient":
                    console.warn("THREE.Loader.createMaterial:", l, "is no longer supported.");
                    break;
                case "colorDiffuse":
                    k.color = a.fromArray(p).getHex();
                    break;
                case "colorSpecular":
                    k.specular = a.fromArray(p).getHex();
                    break;
                case "colorEmissive":
                    k.emissive = a.fromArray(p).getHex();
                    break;
                case "specularCoef":
                    k.shininess = p;
                    break;
                case "shading":
                    "basic" === p.toLowerCase() && (k.type = "MeshBasicMaterial");
                    "phong" === p.toLowerCase() && (k.type = "MeshPhongMaterial");
                    break;
                case "mapDiffuse":
                    k.map = g(p, d.mapDiffuseRepeat, d.mapDiffuseOffset, d.mapDiffuseWrap, d.mapDiffuseAnisotropy);
                    break;
                case "mapDiffuseRepeat":
                case "mapDiffuseOffset":
                case "mapDiffuseWrap":
                case "mapDiffuseAnisotropy":
                    break;
                case "mapLight":
                    k.lightMap = g(p, d.mapLightRepeat, d.mapLightOffset, d.mapLightWrap, d.mapLightAnisotropy);
                    break;
                case "mapLightRepeat":
                case "mapLightOffset":
                case "mapLightWrap":
                case "mapLightAnisotropy":
                    break;
                case "mapAO":
                    k.aoMap = g(p, d.mapAORepeat, d.mapAOOffset, d.mapAOWrap, d.mapAOAnisotropy);
                    break;
                case "mapAORepeat":
                case "mapAOOffset":
                case "mapAOWrap":
                case "mapAOAnisotropy":
                    break;
                case "mapBump":
                    k.bumpMap = g(p, d.mapBumpRepeat, d.mapBumpOffset, d.mapBumpWrap, d.mapBumpAnisotropy);
                    break;
                case "mapBumpScale":
                    k.bumpScale = p;
                    break;
                case "mapBumpRepeat":
                case "mapBumpOffset":
                case "mapBumpWrap":
                case "mapBumpAnisotropy":
                    break;
                case "mapNormal":
                    k.normalMap = g(p, d.mapNormalRepeat, d.mapNormalOffset, d.mapNormalWrap, d.mapNormalAnisotropy);
                    break;
                case "mapNormalFactor":
                    k.normalScale = [p, p];
                    break;
                case "mapNormalRepeat":
                case "mapNormalOffset":
                case "mapNormalWrap":
                case "mapNormalAnisotropy":
                    break;
                case "mapSpecular":
                    k.specularMap = g(p, d.mapSpecularRepeat, d.mapSpecularOffset, d.mapSpecularWrap, d.mapSpecularAnisotropy);
                    break;
                case "mapSpecularRepeat":
                case "mapSpecularOffset":
                case "mapSpecularWrap":
                case "mapSpecularAnisotropy":
                    break;
                case "mapAlpha":
                    k.alphaMap = g(p, d.mapAlphaRepeat, d.mapAlphaOffset, d.mapAlphaWrap, d.mapAlphaAnisotropy);
                    break;
                case "mapAlphaRepeat":
                case "mapAlphaOffset":
                case "mapAlphaWrap":
                case "mapAlphaAnisotropy":
                    break;
                case "flipSided":
                    k.side = THREE.BackSide;
                    break;
                case "doubleSided":
                    k.side = THREE.DoubleSide;
                    break;
                case "transparency":
                    console.warn("THREE.Loader.createMaterial: transparency has been renamed to opacity");
                    k.opacity = p;
                    break;
                case "depthTest":
                case "depthWrite":
                case "colorWrite":
                case "opacity":
                case "reflectivity":
                case "transparent":
                case "visible":
                case "wireframe":
                    k[l] = p;
                    break;
                case "vertexColors":
                    !0 === p && (k.vertexColors = THREE.VertexColors);
                    "face" === p && (k.vertexColors = THREE.FaceColors);
                    break;
                default:
                    console.error("THREE.Loader.createMaterial: Unsupported", l, p)
                }
            }
            "MeshBasicMaterial" === k.type && delete k.emissive;
            "MeshPhongMaterial" !== k.type && delete k.specular;
            1 > k.opacity && (k.transparent = !0);
            c.setTextures(h);
            return c.parse(k)
        }
    }()
};
THREE.Loader.Handlers = {
    handlers: [],
    add: function(a, b) {
        this.handlers.push(a, b)
    },
    get: function(a) {
        for (var b = this.handlers, c = 0, d = b.length; c < d; c += 2) {
            var e = b[c + 1];
            if (b[c].test(a))
                return e
        }
        return null
    }
};
THREE.XHRLoader = function(a) {
    this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager
}
;
THREE.XHRLoader.prototype = {
    constructor: THREE.XHRLoader,
    load: function(a, b, c, d) {
        void 0 !== this.path && (a = this.path + a);
        var e = this
          , f = THREE.Cache.get(a);
        if (void 0 !== f)
            return b && setTimeout(function() {
                b(f)
            }, 0),
            f;
        var g = new XMLHttpRequest;
        g.overrideMimeType("text/plain");
        g.open("GET", a, !0);
        g.addEventListener("load", function(c) {
            var f = c.target.response;
            THREE.Cache.add(a, f);
            200 === this.status ? (b && b(f),
            e.manager.itemEnd(a)) : 0 === this.status ? (console.warn("THREE.XHRLoader: HTTP Status 0 received."),
            b && b(f),
            e.manager.itemEnd(a)) : (d && d(c),
            e.manager.itemError(a))
        }, !1);
        void 0 !== c && g.addEventListener("progress", function(a) {
            c(a)
        }, !1);
        g.addEventListener("error", function(b) {
            d && d(b);
            e.manager.itemError(a)
        }, !1);
        void 0 !== this.responseType && (g.responseType = this.responseType);
        void 0 !== this.withCredentials && (g.withCredentials = this.withCredentials);
        g.send(null);
        e.manager.itemStart(a);
        return g
    },
    setPath: function(a) {
        this.path = a
    },
    setResponseType: function(a) {
        this.responseType = a
    },
    setWithCredentials: function(a) {
        this.withCredentials = a
    }
};
THREE.FontLoader = function(a) {
    this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager
}
;
THREE.FontLoader.prototype = {
    constructor: THREE.FontLoader,
    load: function(a, b, c, d) {
        (new THREE.XHRLoader(this.manager)).load(a, function(a) {
            b(new THREE.Font(JSON.parse(a.substring(65, a.length - 2))))
        }, c, d)
    }
};
THREE.ImageLoader = function(a) {
    this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager
}
;
THREE.ImageLoader.prototype = {
    constructor: THREE.ImageLoader,
    load: function(a, b, c, d) {
        void 0 !== this.path && (a = this.path + a);
        var e = this
          , f = THREE.Cache.get(a);
        if (void 0 !== f)
            return e.manager.itemStart(a),
            b ? setTimeout(function() {
                b(f);
                e.manager.itemEnd(a)
            }, 0) : e.manager.itemEnd(a),
            f;
        var g = document.createElement("img");
        g.addEventListener("load", function(c) {
            THREE.Cache.add(a, this);
            b && b(this);
            e.manager.itemEnd(a)
        }, !1);
        void 0 !== c && g.addEventListener("progress", function(a) {
            c(a)
        }, !1);
        g.addEventListener("error", function(b) {
            d && d(b);
            e.manager.itemError(a)
        }, !1);
        void 0 !== this.crossOrigin && (g.crossOrigin = this.crossOrigin);
        e.manager.itemStart(a);
        g.src = a;
        return g
    },
    setCrossOrigin: function(a) {
        this.crossOrigin = a
    },
    setPath: function(a) {
        this.path = a
    }
};
THREE.JSONLoader = function(a) {
    "boolean" === typeof a && (console.warn("THREE.JSONLoader: showStatus parameter has been removed from constructor."),
    a = void 0);
    this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager;
    this.withCredentials = !1
}
;
THREE.JSONLoader.prototype = {
    constructor: THREE.JSONLoader,
    get statusDomElement() {
        void 0 === this._statusDomElement && (this._statusDomElement = document.createElement("div"));
        console.warn("THREE.JSONLoader: .statusDomElement has been removed.");
        return this._statusDomElement
    },
    load: function(a, b, c, d) {
        var e = this
          , f = this.texturePath && "string" === typeof this.texturePath ? this.texturePath : THREE.Loader.prototype.extractUrlBase(a)
          , g = new THREE.XHRLoader(this.manager);
        g.setWithCredentials(this.withCredentials);
        g.load(a, function(c) {
            c = JSON.parse(c);
            var d = c.metadata;
            if (void 0 !== d && (d = d.type,
            void 0 !== d)) {
                if ("object" === d.toLowerCase()) {
                    console.error("THREE.JSONLoader: " + a + " should be loaded with THREE.ObjectLoader instead.");
                    return
                }
                if ("scene" === d.toLowerCase()) {
                    console.error("THREE.JSONLoader: " + a + " should be loaded with THREE.SceneLoader instead.");
                    return
                }
            }
            c = e.parse(c, f);
            b(c.geometry, c.materials)
        }, c, d)
    },
    setTexturePath: function(a) {
        this.texturePath = a
    },
    parse: function(a, b) {
        var c = new THREE.Geometry
          , d = void 0 !== a.scale ? 1 / a.scale : 1;
        (function(b) {
            var d, g, h, k, l, p, n, m, q, u, v, t, s, w = a.faces;
            p = a.vertices;
            var E = a.normals
              , x = a.colors
              , D = 0;
            if (void 0 !== a.uvs) {
                for (d = 0; d < a.uvs.length; d++)
                    a.uvs[d].length && D++;
                for (d = 0; d < D; d++)
                    c.faceVertexUvs[d] = []
            }
            k = 0;
            for (l = p.length; k < l; )
                d = new THREE.Vector3,
                d.x = p[k++] * b,
                d.y = p[k++] * b,
                d.z = p[k++] * b,
                c.vertices.push(d);
            k = 0;
            for (l = w.length; k < l; )
                if (b = w[k++],
                q = b & 1,
                h = b & 2,
                d = b & 8,
                n = b & 16,
                u = b & 32,
                p = b & 64,
                b &= 128,
                q) {
                    q = new THREE.Face3;
                    q.a = w[k];
                    q.b = w[k + 1];
                    q.c = w[k + 3];
                    v = new THREE.Face3;
                    v.a = w[k + 1];
                    v.b = w[k + 2];
                    v.c = w[k + 3];
                    k += 4;
                    h && (h = w[k++],
                    q.materialIndex = h,
                    v.materialIndex = h);
                    h = c.faces.length;
                    if (d)
                        for (d = 0; d < D; d++)
                            for (t = a.uvs[d],
                            c.faceVertexUvs[d][h] = [],
                            c.faceVertexUvs[d][h + 1] = [],
                            g = 0; 4 > g; g++)
                                m = w[k++],
                                s = t[2 * m],
                                m = t[2 * m + 1],
                                s = new THREE.Vector2(s,m),
                                2 !== g && c.faceVertexUvs[d][h].push(s),
                                0 !== g && c.faceVertexUvs[d][h + 1].push(s);
                    n && (n = 3 * w[k++],
                    q.normal.set(E[n++], E[n++], E[n]),
                    v.normal.copy(q.normal));
                    if (u)
                        for (d = 0; 4 > d; d++)
                            n = 3 * w[k++],
                            u = new THREE.Vector3(E[n++],E[n++],E[n]),
                            2 !== d && q.vertexNormals.push(u),
                            0 !== d && v.vertexNormals.push(u);
                    p && (p = w[k++],
                    p = x[p],
                    q.color.setHex(p),
                    v.color.setHex(p));
                    if (b)
                        for (d = 0; 4 > d; d++)
                            p = w[k++],
                            p = x[p],
                            2 !== d && q.vertexColors.push(new THREE.Color(p)),
                            0 !== d && v.vertexColors.push(new THREE.Color(p));
                    c.faces.push(q);
                    c.faces.push(v)
                } else {
                    q = new THREE.Face3;
                    q.a = w[k++];
                    q.b = w[k++];
                    q.c = w[k++];
                    h && (h = w[k++],
                    q.materialIndex = h);
                    h = c.faces.length;
                    if (d)
                        for (d = 0; d < D; d++)
                            for (t = a.uvs[d],
                            c.faceVertexUvs[d][h] = [],
                            g = 0; 3 > g; g++)
                                m = w[k++],
                                s = t[2 * m],
                                m = t[2 * m + 1],
                                s = new THREE.Vector2(s,m),
                                c.faceVertexUvs[d][h].push(s);
                    n && (n = 3 * w[k++],
                    q.normal.set(E[n++], E[n++], E[n]));
                    if (u)
                        for (d = 0; 3 > d; d++)
                            n = 3 * w[k++],
                            u = new THREE.Vector3(E[n++],E[n++],E[n]),
                            q.vertexNormals.push(u);
                    p && (p = w[k++],
                    q.color.setHex(x[p]));
                    if (b)
                        for (d = 0; 3 > d; d++)
                            p = w[k++],
                            q.vertexColors.push(new THREE.Color(x[p]));
                    c.faces.push(q)
                }
        }
        )(d);
        (function() {
            var b = void 0 !== a.influencesPerVertex ? a.influencesPerVertex : 2;
            if (a.skinWeights)
                for (var d = 0, g = a.skinWeights.length; d < g; d += b)
                    c.skinWeights.push(new THREE.Vector4(a.skinWeights[d],1 < b ? a.skinWeights[d + 1] : 0,2 < b ? a.skinWeights[d + 2] : 0,3 < b ? a.skinWeights[d + 3] : 0));
            if (a.skinIndices)
                for (d = 0,
                g = a.skinIndices.length; d < g; d += b)
                    c.skinIndices.push(new THREE.Vector4(a.skinIndices[d],1 < b ? a.skinIndices[d + 1] : 0,2 < b ? a.skinIndices[d + 2] : 0,3 < b ? a.skinIndices[d + 3] : 0));
            c.bones = a.bones;
            c.bones && 0 < c.bones.length && (c.skinWeights.length !== c.skinIndices.length || c.skinIndices.length !== c.vertices.length) && console.warn("When skinning, number of vertices (" + c.vertices.length + "), skinIndices (" + c.skinIndices.length + "), and skinWeights (" + c.skinWeights.length + ") should match.")
        }
        )();
        (function(b) {
            if (void 0 !== a.morphTargets)
                for (var d = 0, g = a.morphTargets.length; d < g; d++) {
                    c.morphTargets[d] = {};
                    c.morphTargets[d].name = a.morphTargets[d].name;
                    c.morphTargets[d].vertices = [];
                    for (var h = c.morphTargets[d].vertices, k = a.morphTargets[d].vertices, l = 0, p = k.length; l < p; l += 3) {
                        var n = new THREE.Vector3;
                        n.x = k[l] * b;
                        n.y = k[l + 1] * b;
                        n.z = k[l + 2] * b;
                        h.push(n)
                    }
                }
            if (void 0 !== a.morphColors && 0 < a.morphColors.length)
                for (console.warn('THREE.JSONLoader: "morphColors" no longer supported. Using them as face colors.'),
                b = c.faces,
                h = a.morphColors[0].colors,
                d = 0,
                g = b.length; d < g; d++)
                    b[d].color.fromArray(h, 3 * d)
        }
        )(d);
        (function() {
            var b = []
              , d = [];
            void 0 !== a.animation && d.push(a.animation);
            void 0 !== a.animations && (a.animations.length ? d = d.concat(a.animations) : d.push(a.animations));
            for (var g = 0; g < d.length; g++) {
                var h = THREE.AnimationClip.parseAnimation(d[g], c.bones);
                h && b.push(h)
            }
            c.morphTargets && (d = THREE.AnimationClip.CreateClipsFromMorphTargetSequences(c.morphTargets, 10),
            b = b.concat(d));
            0 < b.length && (c.animations = b)
        }
        )();
        c.computeFaceNormals();
        c.computeBoundingSphere();
        if (void 0 === a.materials || 0 === a.materials.length)
            return {
                geometry: c
            };
        d = THREE.Loader.prototype.initMaterials(a.materials, b, this.crossOrigin);
        return {
            geometry: c,
            materials: d
        }
    }
};
THREE.LoadingManager = function(a, b, c) {
    var d = this
      , e = !1
      , f = 0
      , g = 0;
    this.onStart = void 0;
    this.onLoad = a;
    this.onProgress = b;
    this.onError = c;
    this.itemStart = function(a) {
        g++;
        if (!1 === e && void 0 !== d.onStart)
            d.onStart(a, f, g);
        e = !0
    }
    ;
    this.itemEnd = function(a) {
        f++;
        if (void 0 !== d.onProgress)
            d.onProgress(a, f, g);
        if (f === g && (e = !1,
        void 0 !== d.onLoad))
            d.onLoad()
    }
    ;
    this.itemError = function(a) {
        if (void 0 !== d.onError)
            d.onError(a)
    }
}
;
THREE.DefaultLoadingManager = new THREE.LoadingManager;
THREE.BufferGeometryLoader = function(a) {
    this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager
}
;
THREE.BufferGeometryLoader.prototype = {
    constructor: THREE.BufferGeometryLoader,
    load: function(a, b, c, d) {
        var e = this;
        (new THREE.XHRLoader(e.manager)).load(a, function(a) {
            b(e.parse(JSON.parse(a)))
        }, c, d)
    },
    parse: function(a) {
        var b = new THREE.BufferGeometry
          , c = a.data.index
          , d = {
            Int8Array: Int8Array,
            Uint8Array: Uint8Array,
            Uint8ClampedArray: Uint8ClampedArray,
            Int16Array: Int16Array,
            Uint16Array: Uint16Array,
            Int32Array: Int32Array,
            Uint32Array: Uint32Array,
            Float32Array: Float32Array,
            Float64Array: Float64Array
        };
        void 0 !== c && (c = new d[c.type](c.array),
        b.setIndex(new THREE.BufferAttribute(c,1)));
        var e = a.data.attributes, f;
        for (f in e) {
            var g = e[f]
              , c = new d[g.type](g.array);
            b.addAttribute(f, new THREE.BufferAttribute(c,g.itemSize))
        }
        d = a.data.groups || a.data.drawcalls || a.data.offsets;
        if (void 0 !== d)
            for (f = 0,
            c = d.length; f !== c; ++f)
                e = d[f],
                b.addGroup(e.start, e.count, e.materialIndex);
        a = a.data.boundingSphere;
        void 0 !== a && (d = new THREE.Vector3,
        void 0 !== a.center && d.fromArray(a.center),
        b.boundingSphere = new THREE.Sphere(d,a.radius));
        return b
    }
};
THREE.MaterialLoader = function(a) {
    this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager;
    this.textures = {}
}
;
THREE.MaterialLoader.prototype = {
    constructor: THREE.MaterialLoader,
    load: function(a, b, c, d) {
        var e = this;
        (new THREE.XHRLoader(e.manager)).load(a, function(a) {
            b(e.parse(JSON.parse(a)))
        }, c, d)
    },
    setTextures: function(a) {
        this.textures = a
    },
    getTexture: function(a) {
        var b = this.textures;
        void 0 === b[a] && console.warn("THREE.MaterialLoader: Undefined texture", a);
        return b[a]
    },
    parse: function(a) {
        var b = new THREE[a.type];
        void 0 !== a.uuid && (b.uuid = a.uuid);
        void 0 !== a.name && (b.name = a.name);
        void 0 !== a.color && b.color.setHex(a.color);
        void 0 !== a.roughness && (b.roughness = a.roughness);
        void 0 !== a.metalness && (b.metalness = a.metalness);
        void 0 !== a.emissive && b.emissive.setHex(a.emissive);
        void 0 !== a.specular && b.specular.setHex(a.specular);
        void 0 !== a.shininess && (b.shininess = a.shininess);
        void 0 !== a.uniforms && (b.uniforms = a.uniforms);
        void 0 !== a.vertexShader && (b.vertexShader = a.vertexShader);
        void 0 !== a.fragmentShader && (b.fragmentShader = a.fragmentShader);
        void 0 !== a.vertexColors && (b.vertexColors = a.vertexColors);
        void 0 !== a.shading && (b.shading = a.shading);
        void 0 !== a.blending && (b.blending = a.blending);
        void 0 !== a.side && (b.side = a.side);
        void 0 !== a.opacity && (b.opacity = a.opacity);
        void 0 !== a.transparent && (b.transparent = a.transparent);
        void 0 !== a.alphaTest && (b.alphaTest = a.alphaTest);
        void 0 !== a.depthTest && (b.depthTest = a.depthTest);
        void 0 !== a.depthWrite && (b.depthWrite = a.depthWrite);
        void 0 !== a.colorWrite && (b.colorWrite = a.colorWrite);
        void 0 !== a.wireframe && (b.wireframe = a.wireframe);
        void 0 !== a.wireframeLinewidth && (b.wireframeLinewidth = a.wireframeLinewidth);
        void 0 !== a.size && (b.size = a.size);
        void 0 !== a.sizeAttenuation && (b.sizeAttenuation = a.sizeAttenuation);
        void 0 !== a.map && (b.map = this.getTexture(a.map));
        void 0 !== a.alphaMap && (b.alphaMap = this.getTexture(a.alphaMap),
        b.transparent = !0);
        void 0 !== a.bumpMap && (b.bumpMap = this.getTexture(a.bumpMap));
        void 0 !== a.bumpScale && (b.bumpScale = a.bumpScale);
        void 0 !== a.normalMap && (b.normalMap = this.getTexture(a.normalMap));
        if (void 0 !== a.normalScale) {
            var c = a.normalScale;
            !1 === Array.isArray(c) && (c = [c, c]);
            b.normalScale = (new THREE.Vector2).fromArray(c)
        }
        void 0 !== a.displacementMap && (b.displacementMap = this.getTexture(a.displacementMap));
        void 0 !== a.displacementScale && (b.displacementScale = a.displacementScale);
        void 0 !== a.displacementBias && (b.displacementBias = a.displacementBias);
        void 0 !== a.roughnessMap && (b.roughnessMap = this.getTexture(a.roughnessMap));
        void 0 !== a.metalnessMap && (b.metalnessMap = this.getTexture(a.metalnessMap));
        void 0 !== a.emissiveMap && (b.emissiveMap = this.getTexture(a.emissiveMap));
        void 0 !== a.emissiveIntensity && (b.emissiveIntensity = a.emissiveIntensity);
        void 0 !== a.specularMap && (b.specularMap = this.getTexture(a.specularMap));
        void 0 !== a.envMap && (b.envMap = this.getTexture(a.envMap),
        b.combine = THREE.MultiplyOperation);
        a.reflectivity && (b.reflectivity = a.reflectivity);
        void 0 !== a.lightMap && (b.lightMap = this.getTexture(a.lightMap));
        void 0 !== a.lightMapIntensity && (b.lightMapIntensity = a.lightMapIntensity);
        void 0 !== a.aoMap && (b.aoMap = this.getTexture(a.aoMap));
        void 0 !== a.aoMapIntensity && (b.aoMapIntensity = a.aoMapIntensity);
        if (void 0 !== a.materials)
            for (var c = 0, d = a.materials.length; c < d; c++)
                b.materials.push(this.parse(a.materials[c]));
        return b
    }
};
THREE.ObjectLoader = function(a) {
    this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager;
    this.texturePath = ""
}
;
THREE.ObjectLoader.prototype = {
    constructor: THREE.ObjectLoader,
    load: function(a, b, c, d) {
        "" === this.texturePath && (this.texturePath = a.substring(0, a.lastIndexOf("/") + 1));
        var e = this;
        (new THREE.XHRLoader(e.manager)).load(a, function(a) {
            e.parse(JSON.parse(a), b)
        }, c, d)
    },
    setTexturePath: function(a) {
        this.texturePath = a
    },
    setCrossOrigin: function(a) {
        this.crossOrigin = a
    },
    parse: function(a, b) {
        var c = this.parseGeometries(a.geometries)
          , d = this.parseImages(a.images, function() {
            void 0 !== b && b(e)
        })
          , d = this.parseTextures(a.textures, d)
          , d = this.parseMaterials(a.materials, d)
          , e = this.parseObject(a.object, c, d);
        a.animations && (e.animations = this.parseAnimations(a.animations));
        void 0 !== a.images && 0 !== a.images.length || void 0 === b || b(e);
        return e
    },
    parseGeometries: function(a) {
        var b = {};
        if (void 0 !== a)
            for (var c = new THREE.JSONLoader, d = new THREE.BufferGeometryLoader, e = 0, f = a.length; e < f; e++) {
                var g, h = a[e];
                switch (h.type) {
                case "PlaneGeometry":
                case "PlaneBufferGeometry":
                    g = new THREE[h.type](h.width,h.height,h.widthSegments,h.heightSegments);
                    break;
                case "BoxGeometry":
                case "BoxBufferGeometry":
                case "CubeGeometry":
                    g = new THREE[h.type](h.width,h.height,h.depth,h.widthSegments,h.heightSegments,h.depthSegments);
                    break;
                case "CircleGeometry":
                case "CircleBufferGeometry":
                    g = new THREE[h.type](h.radius,h.segments,h.thetaStart,h.thetaLength);
                    break;
                case "CylinderGeometry":
                case "CylinderBufferGeometry":
                    g = new THREE[h.type](h.radiusTop,h.radiusBottom,h.height,h.radialSegments,h.heightSegments,h.openEnded,h.thetaStart,h.thetaLength);
                    break;
                case "SphereGeometry":
                case "SphereBufferGeometry":
                    g = new THREE[h.type](h.radius,h.widthSegments,h.heightSegments,h.phiStart,h.phiLength,h.thetaStart,h.thetaLength);
                    break;
                case "DodecahedronGeometry":
                    g = new THREE.DodecahedronGeometry(h.radius,h.detail);
                    break;
                case "IcosahedronGeometry":
                    g = new THREE.IcosahedronGeometry(h.radius,h.detail);
                    break;
                case "OctahedronGeometry":
                    g = new THREE.OctahedronGeometry(h.radius,h.detail);
                    break;
                case "TetrahedronGeometry":
                    g = new THREE.TetrahedronGeometry(h.radius,h.detail);
                    break;
                case "RingGeometry":
                case "RingBufferGeometry":
                    g = new THREE[h.type](h.innerRadius,h.outerRadius,h.thetaSegments,h.phiSegments,h.thetaStart,h.thetaLength);
                    break;
                case "TorusGeometry":
                case "TorusBufferGeometry":
                    g = new THREE[h.type](h.radius,h.tube,h.radialSegments,h.tubularSegments,h.arc);
                    break;
                case "TorusKnotGeometry":
                case "TorusKnotBufferGeometry":
                    g = new THREE[h.type](h.radius,h.tube,h.tubularSegments,h.radialSegments,h.p,h.q);
                    break;
                case "LatheGeometry":
                    g = new THREE.LatheGeometry(h.points,h.segments,h.phiStart,h.phiLength);
                    break;
                case "BufferGeometry":
                    g = d.parse(h);
                    break;
                case "Geometry":
                    g = c.parse(h.data, this.texturePath).geometry;
                    break;
                default:
                    console.warn('THREE.ObjectLoader: Unsupported geometry type "' + h.type + '"');
                    continue
                }
                g.uuid = h.uuid;
                void 0 !== h.name && (g.name = h.name);
                b[h.uuid] = g
            }
        return b
    },
    parseMaterials: function(a, b) {
        var c = {};
        if (void 0 !== a) {
            var d = new THREE.MaterialLoader;
            d.setTextures(b);
            for (var e = 0, f = a.length; e < f; e++) {
                var g = d.parse(a[e]);
                c[g.uuid] = g
            }
        }
        return c
    },
    parseAnimations: function(a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var d = THREE.AnimationClip.parse(a[c]);
            b.push(d)
        }
        return b
    },
    parseImages: function(a, b) {
        function c(a) {
            d.manager.itemStart(a);
            return g.load(a, function() {
                d.manager.itemEnd(a)
            })
        }
        var d = this
          , e = {};
        if (void 0 !== a && 0 < a.length) {
            var f = new THREE.LoadingManager(b)
              , g = new THREE.ImageLoader(f);
            g.setCrossOrigin(this.crossOrigin);
            for (var f = 0, h = a.length; f < h; f++) {
                var k = a[f]
                  , l = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(k.url) ? k.url : d.texturePath + k.url;
                e[k.uuid] = c(l)
            }
        }
        return e
    },
    parseTextures: function(a, b) {
        function c(a) {
            if ("number" === typeof a)
                return a;
            console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", a);
            return THREE[a]
        }
        var d = {};
        if (void 0 !== a)
            for (var e = 0, f = a.length; e < f; e++) {
                var g = a[e];
                void 0 === g.image && console.warn('THREE.ObjectLoader: No "image" specified for', g.uuid);
                void 0 === b[g.image] && console.warn("THREE.ObjectLoader: Undefined image", g.image);
                var h = new THREE.Texture(b[g.image]);
                h.needsUpdate = !0;
                h.uuid = g.uuid;
                void 0 !== g.name && (h.name = g.name);
                void 0 !== g.mapping && (h.mapping = c(g.mapping));
                void 0 !== g.offset && (h.offset = new THREE.Vector2(g.offset[0],g.offset[1]));
                void 0 !== g.repeat && (h.repeat = new THREE.Vector2(g.repeat[0],g.repeat[1]));
                void 0 !== g.minFilter && (h.minFilter = c(g.minFilter));
                void 0 !== g.magFilter && (h.magFilter = c(g.magFilter));
                void 0 !== g.anisotropy && (h.anisotropy = g.anisotropy);
                Array.isArray(g.wrap) && (h.wrapS = c(g.wrap[0]),
                h.wrapT = c(g.wrap[1]));
                d[g.uuid] = h
            }
        return d
    },
    parseObject: function() {
        var a = new THREE.Matrix4;
        return function(b, c, d) {
            function e(a) {
                void 0 === c[a] && console.warn("THREE.ObjectLoader: Undefined geometry", a);
                return c[a]
            }
            function f(a) {
                if (void 0 !== a)
                    return void 0 === d[a] && console.warn("THREE.ObjectLoader: Undefined material", a),
                    d[a]
            }
            var g;
            switch (b.type) {
            case "Scene":
                g = new THREE.Scene;
                break;
            case "PerspectiveCamera":
                g = new THREE.PerspectiveCamera(b.fov,b.aspect,b.near,b.far);
                break;
            case "OrthographicCamera":
                g = new THREE.OrthographicCamera(b.left,b.right,b.top,b.bottom,b.near,b.far);
                break;
            case "AmbientLight":
                g = new THREE.AmbientLight(b.color,b.intensity);
                break;
            case "DirectionalLight":
                g = new THREE.DirectionalLight(b.color,b.intensity);
                break;
            case "PointLight":
                g = new THREE.PointLight(b.color,b.intensity,b.distance,b.decay);
                break;
            case "SpotLight":
                g = new THREE.SpotLight(b.color,b.intensity,b.distance,b.angle,b.penumbra,b.decay);
                break;
            case "HemisphereLight":
                g = new THREE.HemisphereLight(b.color,b.groundColor,b.intensity);
                break;
            case "Mesh":
                g = e(b.geometry);
                var h = f(b.material);
                g = g.bones && 0 < g.bones.length ? new THREE.SkinnedMesh(g,h) : new THREE.Mesh(g,h);
                break;
            case "LOD":
                g = new THREE.LOD;
                break;
            case "Line":
                g = new THREE.Line(e(b.geometry),f(b.material),b.mode);
                break;
            case "PointCloud":
            case "Points":
                g = new THREE.Points(e(b.geometry),f(b.material));
                break;
            case "Sprite":
                g = new THREE.Sprite(f(b.material));
                break;
            case "Group":
                g = new THREE.Group;
                break;
            default:
                g = new THREE.Object3D
            }
            g.uuid = b.uuid;
            void 0 !== b.name && (g.name = b.name);
            void 0 !== b.matrix ? (a.fromArray(b.matrix),
            a.decompose(g.position, g.quaternion, g.scale)) : (void 0 !== b.position && g.position.fromArray(b.position),
            void 0 !== b.rotation && g.rotation.fromArray(b.rotation),
            void 0 !== b.scale && g.scale.fromArray(b.scale));
            void 0 !== b.castShadow && (g.castShadow = b.castShadow);
            void 0 !== b.receiveShadow && (g.receiveShadow = b.receiveShadow);
            void 0 !== b.visible && (g.visible = b.visible);
            void 0 !== b.userData && (g.userData = b.userData);
            if (void 0 !== b.children)
                for (var k in b.children)
                    g.add(this.parseObject(b.children[k], c, d));
            if ("LOD" === b.type)
                for (b = b.levels,
                h = 0; h < b.length; h++) {
                    var l = b[h];
                    k = g.getObjectByProperty("uuid", l.object);
                    void 0 !== k && g.addLevel(k, l.distance)
                }
            return g
        }
    }()
};
THREE.TextureLoader = function(a) {
    this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager
}
;
THREE.TextureLoader.prototype = {
    constructor: THREE.TextureLoader,
    load: function(a, b, c, d) {
        var e = new THREE.Texture
          , f = new THREE.ImageLoader(this.manager);
        f.setCrossOrigin(this.crossOrigin);
        f.setPath(this.path);
        f.load(a, function(a) {
            e.image = a;
            e.needsUpdate = !0;
            void 0 !== b && b(e)
        }, c, d);
        return e
    },
    setCrossOrigin: function(a) {
        this.crossOrigin = a
    },
    setPath: function(a) {
        this.path = a
    }
};
THREE.CubeTextureLoader = function(a) {
    this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager
}
;
THREE.CubeTextureLoader.prototype = {
    constructor: THREE.CubeTextureLoader,
    load: function(a, b, c, d) {
        function e(c) {
            g.load(a[c], function(a) {
                f.images[c] = a;
                h++;
                6 === h && (f.needsUpdate = !0,
                b && b(f))
            }, void 0, d)
        }
        var f = new THREE.CubeTexture
          , g = new THREE.ImageLoader(this.manager);
        g.setCrossOrigin(this.crossOrigin);
        g.setPath(this.path);
        var h = 0;
        for (c = 0; c < a.length; ++c)
            e(c);
        return f
    },
    setCrossOrigin: function(a) {
        this.crossOrigin = a
    },
    setPath: function(a) {
        this.path = a
    }
};
THREE.DataTextureLoader = THREE.BinaryTextureLoader = function(a) {
    this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager;
    this._parser = null
}
;
THREE.BinaryTextureLoader.prototype = {
    constructor: THREE.BinaryTextureLoader,
    load: function(a, b, c, d) {
        var e = this
          , f = new THREE.DataTexture
          , g = new THREE.XHRLoader(this.manager);
        g.setResponseType("arraybuffer");
        g.load(a, function(a) {
            if (a = e._parser(a))
                void 0 !== a.image ? f.image = a.image : void 0 !== a.data && (f.image.width = a.width,
                f.image.height = a.height,
                f.image.data = a.data),
                f.wrapS = void 0 !== a.wrapS ? a.wrapS : THREE.ClampToEdgeWrapping,
                f.wrapT = void 0 !== a.wrapT ? a.wrapT : THREE.ClampToEdgeWrapping,
                f.magFilter = void 0 !== a.magFilter ? a.magFilter : THREE.LinearFilter,
                f.minFilter = void 0 !== a.minFilter ? a.minFilter : THREE.LinearMipMapLinearFilter,
                f.anisotropy = void 0 !== a.anisotropy ? a.anisotropy : 1,
                void 0 !== a.format && (f.format = a.format),
                void 0 !== a.type && (f.type = a.type),
                void 0 !== a.mipmaps && (f.mipmaps = a.mipmaps),
                1 === a.mipmapCount && (f.minFilter = THREE.LinearFilter),
                f.needsUpdate = !0,
                b && b(f, a)
        }, c, d);
        return f
    }
};
THREE.CompressedTextureLoader = function(a) {
    this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager;
    this._parser = null
}
;
THREE.CompressedTextureLoader.prototype = {
    constructor: THREE.CompressedTextureLoader,
    load: function(a, b, c, d) {
        function e(e) {
            k.load(a[e], function(a) {
                a = f._parser(a, !0);
                g[e] = {
                    width: a.width,
                    height: a.height,
                    format: a.format,
                    mipmaps: a.mipmaps
                };
                l += 1;
                6 === l && (1 === a.mipmapCount && (h.minFilter = THREE.LinearFilter),
                h.format = a.format,
                h.needsUpdate = !0,
                b && b(h))
            }, c, d)
        }
        var f = this
          , g = []
          , h = new THREE.CompressedTexture;
        h.image = g;
        var k = new THREE.XHRLoader(this.manager);
        k.setPath(this.path);
        k.setResponseType("arraybuffer");
        if (Array.isArray(a))
            for (var l = 0, p = 0, n = a.length; p < n; ++p)
                e(p);
        else
            k.load(a, function(a) {
                a = f._parser(a, !0);
                if (a.isCubemap)
                    for (var c = a.mipmaps.length / a.mipmapCount, d = 0; d < c; d++) {
                        g[d] = {
                            mipmaps: []
                        };
                        for (var e = 0; e < a.mipmapCount; e++)
                            g[d].mipmaps.push(a.mipmaps[d * a.mipmapCount + e]),
                            g[d].format = a.format,
                            g[d].width = a.width,
                            g[d].height = a.height
                    }
                else
                    h.image.width = a.width,
                    h.image.height = a.height,
                    h.mipmaps = a.mipmaps;
                1 === a.mipmapCount && (h.minFilter = THREE.LinearFilter);
                h.format = a.format;
                h.needsUpdate = !0;
                b && b(h)
            }, c, d);
        return h
    },
    setPath: function(a) {
        this.path = a
    }
};
THREE.Material = function() {
    Object.defineProperty(this, "id", {
        value: THREE.MaterialIdCount++
    });
    this.uuid = THREE.Math.generateUUID();
    this.name = "";
    this.type = "Material";
    this.side = THREE.FrontSide;
    this.opacity = 1;
    this.transparent = !1;
    this.blending = THREE.NormalBlending;
    this.blendSrc = THREE.SrcAlphaFactor;
    this.blendDst = THREE.OneMinusSrcAlphaFactor;
    this.blendEquation = THREE.AddEquation;
    this.blendEquationAlpha = this.blendDstAlpha = this.blendSrcAlpha = null;
    this.depthFunc = THREE.LessEqualDepth;
    this.colorWrite = this.depthWrite = this.depthTest = !0;
    this.precision = null;
    this.polygonOffset = !1;
    this.alphaTest = this.polygonOffsetUnits = this.polygonOffsetFactor = 0;
    this.premultipliedAlpha = !1;
    this.overdraw = 0;
    this._needsUpdate = this.visible = !0
}
;
THREE.Material.prototype = {
    constructor: THREE.Material,
    get needsUpdate() {
        return this._needsUpdate
    },
    set needsUpdate(a) {
        !0 === a && this.update();
        this._needsUpdate = a
    },
    setValues: function(a) {
        if (void 0 !== a)
            for (var b in a) {
                var c = a[b];
                if (void 0 === c)
                    console.warn("THREE.Material: '" + b + "' parameter is undefined.");
                else {
                    var d = this[b];
                    void 0 === d ? console.warn("THREE." + this.type + ": '" + b + "' is not a property of this material.") : d instanceof THREE.Color ? d.set(c) : d instanceof THREE.Vector3 && c instanceof THREE.Vector3 ? d.copy(c) : this[b] = "overdraw" === b ? Number(c) : c
                }
            }
    },
    toJSON: function(a) {
        function b(a) {
            var b = [], c;
            for (c in a) {
                var d = a[c];
                delete d.metadata;
                b.push(d)
            }
            return b
        }
        var c = void 0 === a;
        c && (a = {
            textures: {},
            images: {}
        });
        var d = {
            metadata: {
                version: 4.4,
                type: "Material",
                generator: "Material.toJSON"
            }
        };
        d.uuid = this.uuid;
        d.type = this.type;
        "" !== this.name && (d.name = this.name);
        this.color instanceof THREE.Color && (d.color = this.color.getHex());
        .5 !== this.roughness && (d.roughness = this.roughness);
        .5 !== this.metalness && (d.metalness = this.metalness);
        this.emissive instanceof THREE.Color && (d.emissive = this.emissive.getHex());
        this.specular instanceof THREE.Color && (d.specular = this.specular.getHex());
        void 0 !== this.shininess && (d.shininess = this.shininess);
        this.map instanceof THREE.Texture && (d.map = this.map.toJSON(a).uuid);
        this.alphaMap instanceof THREE.Texture && (d.alphaMap = this.alphaMap.toJSON(a).uuid);
        this.lightMap instanceof THREE.Texture && (d.lightMap = this.lightMap.toJSON(a).uuid);
        this.bumpMap instanceof THREE.Texture && (d.bumpMap = this.bumpMap.toJSON(a).uuid,
        d.bumpScale = this.bumpScale);
        this.normalMap instanceof THREE.Texture && (d.normalMap = this.normalMap.toJSON(a).uuid,
        d.normalScale = this.normalScale.toArray());
        this.displacementMap instanceof THREE.Texture && (d.displacementMap = this.displacementMap.toJSON(a).uuid,
        d.displacementScale = this.displacementScale,
        d.displacementBias = this.displacementBias);
        this.roughnessMap instanceof THREE.Texture && (d.roughnessMap = this.roughnessMap.toJSON(a).uuid);
        this.metalnessMap instanceof THREE.Texture && (d.metalnessMap = this.metalnessMap.toJSON(a).uuid);
        this.emissiveMap instanceof THREE.Texture && (d.emissiveMap = this.emissiveMap.toJSON(a).uuid);
        this.specularMap instanceof THREE.Texture && (d.specularMap = this.specularMap.toJSON(a).uuid);
        this.envMap instanceof THREE.Texture && (d.envMap = this.envMap.toJSON(a).uuid,
        d.reflectivity = this.reflectivity);
        void 0 !== this.size && (d.size = this.size);
        void 0 !== this.sizeAttenuation && (d.sizeAttenuation = this.sizeAttenuation);
        void 0 !== this.vertexColors && this.vertexColors !== THREE.NoColors && (d.vertexColors = this.vertexColors);
        void 0 !== this.shading && this.shading !== THREE.SmoothShading && (d.shading = this.shading);
        void 0 !== this.blending && this.blending !== THREE.NormalBlending && (d.blending = this.blending);
        void 0 !== this.side && this.side !== THREE.FrontSide && (d.side = this.side);
        1 > this.opacity && (d.opacity = this.opacity);
        !0 === this.transparent && (d.transparent = this.transparent);
        0 < this.alphaTest && (d.alphaTest = this.alphaTest);
        !0 === this.premultipliedAlpha && (d.premultipliedAlpha = this.premultipliedAlpha);
        !0 === this.wireframe && (d.wireframe = this.wireframe);
        1 < this.wireframeLinewidth && (d.wireframeLinewidth = this.wireframeLinewidth);
        c && (c = b(a.textures),
        a = b(a.images),
        0 < c.length && (d.textures = c),
        0 < a.length && (d.images = a));
        return d
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(a) {
        this.name = a.name;
        this.side = a.side;
        this.opacity = a.opacity;
        this.transparent = a.transparent;
        this.blending = a.blending;
        this.blendSrc = a.blendSrc;
        this.blendDst = a.blendDst;
        this.blendEquation = a.blendEquation;
        this.blendSrcAlpha = a.blendSrcAlpha;
        this.blendDstAlpha = a.blendDstAlpha;
        this.blendEquationAlpha = a.blendEquationAlpha;
        this.depthFunc = a.depthFunc;
        this.depthTest = a.depthTest;
        this.depthWrite = a.depthWrite;
        this.colorWrite = a.colorWrite;
        this.precision = a.precision;
        this.polygonOffset = a.polygonOffset;
        this.polygonOffsetFactor = a.polygonOffsetFactor;
        this.polygonOffsetUnits = a.polygonOffsetUnits;
        this.alphaTest = a.alphaTest;
        this.premultipliedAlpha = a.premultipliedAlpha;
        this.overdraw = a.overdraw;
        this.visible = a.visible;
        return this
    },
    update: function() {
        this.dispatchEvent({
            type: "update"
        })
    },
    dispose: function() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
};
THREE.EventDispatcher.prototype.apply(THREE.Material.prototype);
THREE.MaterialIdCount = 0;
THREE.LineBasicMaterial = function(a) {
    THREE.Material.call(this);
    this.type = "LineBasicMaterial";
    this.color = new THREE.Color(16777215);
    this.linewidth = 1;
    this.linejoin = this.linecap = "round";
    this.blending = THREE.NormalBlending;
    this.vertexColors = THREE.NoColors;
    this.fog = !0;
    this.setValues(a)
}
;
THREE.LineBasicMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.LineBasicMaterial.prototype.constructor = THREE.LineBasicMaterial;
THREE.LineBasicMaterial.prototype.copy = function(a) {
    THREE.Material.prototype.copy.call(this, a);
    this.color.copy(a.color);
    this.linewidth = a.linewidth;
    this.linecap = a.linecap;
    this.linejoin = a.linejoin;
    this.vertexColors = a.vertexColors;
    this.fog = a.fog;
    return this
}
;
THREE.LineDashedMaterial = function(a) {
    THREE.Material.call(this);
    this.type = "LineDashedMaterial";
    this.color = new THREE.Color(16777215);
    this.scale = this.linewidth = 1;
    this.dashSize = 3;
    this.gapSize = 1;
    this.blending = THREE.NormalBlending;
    this.vertexColors = THREE.NoColors;
    this.fog = !0;
    this.setValues(a)
}
;
THREE.LineDashedMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.LineDashedMaterial.prototype.constructor = THREE.LineDashedMaterial;
THREE.LineDashedMaterial.prototype.copy = function(a) {
    THREE.Material.prototype.copy.call(this, a);
    this.color.copy(a.color);
    this.linewidth = a.linewidth;
    this.scale = a.scale;
    this.dashSize = a.dashSize;
    this.gapSize = a.gapSize;
    this.vertexColors = a.vertexColors;
    this.fog = a.fog;
    return this
}
;
THREE.MeshBasicMaterial = function(a) {
    THREE.Material.call(this);
    this.type = "MeshBasicMaterial";
    this.color = new THREE.Color(16777215);
    this.aoMap = this.map = null;
    this.aoMapIntensity = 1;
    this.envMap = this.alphaMap = this.specularMap = null;
    this.combine = THREE.MultiplyOperation;
    this.reflectivity = 1;
    this.refractionRatio = .98;
    this.fog = !0;
    this.shading = THREE.SmoothShading;
    this.blending = THREE.NormalBlending;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.wireframeLinejoin = this.wireframeLinecap = "round";
    this.vertexColors = THREE.NoColors;
    this.morphTargets = this.skinning = !1;
    this.setValues(a)
}
;
THREE.MeshBasicMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshBasicMaterial.prototype.constructor = THREE.MeshBasicMaterial;
THREE.MeshBasicMaterial.prototype.copy = function(a) {
    THREE.Material.prototype.copy.call(this, a);
    this.color.copy(a.color);
    this.map = a.map;
    this.aoMap = a.aoMap;
    this.aoMapIntensity = a.aoMapIntensity;
    this.specularMap = a.specularMap;
    this.alphaMap = a.alphaMap;
    this.envMap = a.envMap;
    this.combine = a.combine;
    this.reflectivity = a.reflectivity;
    this.refractionRatio = a.refractionRatio;
    this.fog = a.fog;
    this.shading = a.shading;
    this.wireframe = a.wireframe;
    this.wireframeLinewidth = a.wireframeLinewidth;
    this.wireframeLinecap = a.wireframeLinecap;
    this.wireframeLinejoin = a.wireframeLinejoin;
    this.vertexColors = a.vertexColors;
    this.skinning = a.skinning;
    this.morphTargets = a.morphTargets;
    return this
}
;
THREE.MeshLambertMaterial = function(a) {
    THREE.Material.call(this);
    this.type = "MeshLambertMaterial";
    this.color = new THREE.Color(16777215);
    this.lightMap = this.map = null;
    this.lightMapIntensity = 1;
    this.aoMap = null;
    this.aoMapIntensity = 1;
    this.emissive = new THREE.Color(0);
    this.emissiveIntensity = 1;
    this.envMap = this.alphaMap = this.specularMap = this.emissiveMap = null;
    this.combine = THREE.MultiplyOperation;
    this.reflectivity = 1;
    this.refractionRatio = .98;
    this.fog = !0;
    this.blending = THREE.NormalBlending;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.wireframeLinejoin = this.wireframeLinecap = "round";
    this.vertexColors = THREE.NoColors;
    this.morphNormals = this.morphTargets = this.skinning = !1;
    this.setValues(a)
}
;
THREE.MeshLambertMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshLambertMaterial.prototype.constructor = THREE.MeshLambertMaterial;
THREE.MeshLambertMaterial.prototype.copy = function(a) {
    THREE.Material.prototype.copy.call(this, a);
    this.color.copy(a.color);
    this.map = a.map;
    this.lightMap = a.lightMap;
    this.lightMapIntensity = a.lightMapIntensity;
    this.aoMap = a.aoMap;
    this.aoMapIntensity = a.aoMapIntensity;
    this.emissive.copy(a.emissive);
    this.emissiveMap = a.emissiveMap;
    this.emissiveIntensity = a.emissiveIntensity;
    this.specularMap = a.specularMap;
    this.alphaMap = a.alphaMap;
    this.envMap = a.envMap;
    this.combine = a.combine;
    this.reflectivity = a.reflectivity;
    this.refractionRatio = a.refractionRatio;
    this.fog = a.fog;
    this.wireframe = a.wireframe;
    this.wireframeLinewidth = a.wireframeLinewidth;
    this.wireframeLinecap = a.wireframeLinecap;
    this.wireframeLinejoin = a.wireframeLinejoin;
    this.vertexColors = a.vertexColors;
    this.skinning = a.skinning;
    this.morphTargets = a.morphTargets;
    this.morphNormals = a.morphNormals;
    return this
}
;
THREE.MeshPhongMaterial = function(a) {
    THREE.Material.call(this);
    this.type = "MeshPhongMaterial";
    this.color = new THREE.Color(16777215);
    this.specular = new THREE.Color(1118481);
    this.shininess = 30;
    this.lightMap = this.map = null;
    this.lightMapIntensity = 1;
    this.aoMap = null;
    this.aoMapIntensity = 1;
    this.emissive = new THREE.Color(0);
    this.emissiveIntensity = 1;
    this.bumpMap = this.emissiveMap = null;
    this.bumpScale = 1;
    this.normalMap = null;
    this.normalScale = new THREE.Vector2(1,1);
    this.displacementMap = null;
    this.displacementScale = 1;
    this.displacementBias = 0;
    this.envMap = this.alphaMap = this.specularMap = null;
    this.combine = THREE.MultiplyOperation;
    this.reflectivity = 1;
    this.refractionRatio = .98;
    this.fog = !0;
    this.shading = THREE.SmoothShading;
    this.blending = THREE.NormalBlending;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.wireframeLinejoin = this.wireframeLinecap = "round";
    this.vertexColors = THREE.NoColors;
    this.morphNormals = this.morphTargets = this.skinning = !1;
    this.setValues(a)
}
;
THREE.MeshPhongMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshPhongMaterial.prototype.constructor = THREE.MeshPhongMaterial;
THREE.MeshPhongMaterial.prototype.copy = function(a) {
    THREE.Material.prototype.copy.call(this, a);
    this.color.copy(a.color);
    this.specular.copy(a.specular);
    this.shininess = a.shininess;
    this.map = a.map;
    this.lightMap = a.lightMap;
    this.lightMapIntensity = a.lightMapIntensity;
    this.aoMap = a.aoMap;
    this.aoMapIntensity = a.aoMapIntensity;
    this.emissive.copy(a.emissive);
    this.emissiveMap = a.emissiveMap;
    this.emissiveIntensity = a.emissiveIntensity;
    this.bumpMap = a.bumpMap;
    this.bumpScale = a.bumpScale;
    this.normalMap = a.normalMap;
    this.normalScale.copy(a.normalScale);
    this.displacementMap = a.displacementMap;
    this.displacementScale = a.displacementScale;
    this.displacementBias = a.displacementBias;
    this.specularMap = a.specularMap;
    this.alphaMap = a.alphaMap;
    this.envMap = a.envMap;
    this.combine = a.combine;
    this.reflectivity = a.reflectivity;
    this.refractionRatio = a.refractionRatio;
    this.fog = a.fog;
    this.shading = a.shading;
    this.wireframe = a.wireframe;
    this.wireframeLinewidth = a.wireframeLinewidth;
    this.wireframeLinecap = a.wireframeLinecap;
    this.wireframeLinejoin = a.wireframeLinejoin;
    this.vertexColors = a.vertexColors;
    this.skinning = a.skinning;
    this.morphTargets = a.morphTargets;
    this.morphNormals = a.morphNormals;
    return this
}
;
THREE.MeshStandardMaterial = function(a) {
    THREE.Material.call(this);
    this.type = "MeshStandardMaterial";
    this.color = new THREE.Color(16777215);
    this.metalness = this.roughness = .5;
    this.lightMap = this.map = null;
    this.lightMapIntensity = 1;
    this.aoMap = null;
    this.aoMapIntensity = 1;
    this.emissive = new THREE.Color(0);
    this.emissiveIntensity = 1;
    this.bumpMap = this.emissiveMap = null;
    this.bumpScale = 1;
    this.normalMap = null;
    this.normalScale = new THREE.Vector2(1,1);
    this.displacementMap = null;
    this.displacementScale = 1;
    this.displacementBias = 0;
    this.envMap = this.alphaMap = this.metalnessMap = this.roughnessMap = null;
    this.envMapIntensity = 1;
    this.refractionRatio = .98;
    this.fog = !0;
    this.shading = THREE.SmoothShading;
    this.blending = THREE.NormalBlending;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.wireframeLinejoin = this.wireframeLinecap = "round";
    this.vertexColors = THREE.NoColors;
    this.morphNormals = this.morphTargets = this.skinning = !1;
    this.setValues(a)
}
;
THREE.MeshStandardMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshStandardMaterial.prototype.constructor = THREE.MeshStandardMaterial;
THREE.MeshStandardMaterial.prototype.copy = function(a) {
    THREE.Material.prototype.copy.call(this, a);
    this.color.copy(a.color);
    this.roughness = a.roughness;
    this.metalness = a.metalness;
    this.map = a.map;
    this.lightMap = a.lightMap;
    this.lightMapIntensity = a.lightMapIntensity;
    this.aoMap = a.aoMap;
    this.aoMapIntensity = a.aoMapIntensity;
    this.emissive.copy(a.emissive);
    this.emissiveMap = a.emissiveMap;
    this.emissiveIntensity = a.emissiveIntensity;
    this.bumpMap = a.bumpMap;
    this.bumpScale = a.bumpScale;
    this.normalMap = a.normalMap;
    this.normalScale.copy(a.normalScale);
    this.displacementMap = a.displacementMap;
    this.displacementScale = a.displacementScale;
    this.displacementBias = a.displacementBias;
    this.roughnessMap = a.roughnessMap;
    this.metalnessMap = a.metalnessMap;
    this.alphaMap = a.alphaMap;
    this.envMap = a.envMap;
    this.envMapIntensity = a.envMapIntensity;
    this.refractionRatio = a.refractionRatio;
    this.fog = a.fog;
    this.shading = a.shading;
    this.wireframe = a.wireframe;
    this.wireframeLinewidth = a.wireframeLinewidth;
    this.wireframeLinecap = a.wireframeLinecap;
    this.wireframeLinejoin = a.wireframeLinejoin;
    this.vertexColors = a.vertexColors;
    this.skinning = a.skinning;
    this.morphTargets = a.morphTargets;
    this.morphNormals = a.morphNormals;
    return this
}
;
THREE.MeshDepthMaterial = function(a) {
    THREE.Material.call(this);
    this.type = "MeshDepthMaterial";
    this.wireframe = this.morphTargets = !1;
    this.wireframeLinewidth = 1;
    this.setValues(a)
}
;
THREE.MeshDepthMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshDepthMaterial.prototype.constructor = THREE.MeshDepthMaterial;
THREE.MeshDepthMaterial.prototype.copy = function(a) {
    THREE.Material.prototype.copy.call(this, a);
    this.wireframe = a.wireframe;
    this.wireframeLinewidth = a.wireframeLinewidth;
    return this
}
;
THREE.MeshNormalMaterial = function(a) {
    THREE.Material.call(this, a);
    this.type = "MeshNormalMaterial";
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.morphTargets = !1;
    this.setValues(a)
}
;
THREE.MeshNormalMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshNormalMaterial.prototype.constructor = THREE.MeshNormalMaterial;
THREE.MeshNormalMaterial.prototype.copy = function(a) {
    THREE.Material.prototype.copy.call(this, a);
    this.wireframe = a.wireframe;
    this.wireframeLinewidth = a.wireframeLinewidth;
    return this
}
;
THREE.MultiMaterial = function(a) {
    this.uuid = THREE.Math.generateUUID();
    this.type = "MultiMaterial";
    this.materials = a instanceof Array ? a : [];
    this.visible = !0
}
;
THREE.MultiMaterial.prototype = {
    constructor: THREE.MultiMaterial,
    toJSON: function(a) {
        for (var b = {
            metadata: {
                version: 4.2,
                type: "material",
                generator: "MaterialExporter"
            },
            uuid: this.uuid,
            type: this.type,
            materials: []
        }, c = this.materials, d = 0, e = c.length; d < e; d++) {
            var f = c[d].toJSON(a);
            delete f.metadata;
            b.materials.push(f)
        }
        b.visible = this.visible;
        return b
    },
    clone: function() {
        for (var a = new this.constructor, b = 0; b < this.materials.length; b++)
            a.materials.push(this.materials[b].clone());
        a.visible = this.visible;
        return a
    }
};
THREE.PointsMaterial = function(a) {
    THREE.Material.call(this);
    this.type = "PointsMaterial";
    this.color = new THREE.Color(16777215);
    this.map = null;
    this.size = 1;
    this.sizeAttenuation = !0;
    this.blending = THREE.NormalBlending;
    this.vertexColors = THREE.NoColors;
    this.fog = !0;
    this.setValues(a)
}
;
THREE.PointsMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.PointsMaterial.prototype.constructor = THREE.PointsMaterial;
THREE.PointsMaterial.prototype.copy = function(a) {
    THREE.Material.prototype.copy.call(this, a);
    this.color.copy(a.color);
    this.map = a.map;
    this.size = a.size;
    this.sizeAttenuation = a.sizeAttenuation;
    this.vertexColors = a.vertexColors;
    this.fog = a.fog;
    return this
}
;
THREE.ShaderMaterial = function(a) {
    THREE.Material.call(this);
    this.type = "ShaderMaterial";
    this.defines = {};
    this.uniforms = {};
    this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}";
    this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";
    this.shading = THREE.SmoothShading;
    this.linewidth = 1;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.lights = this.fog = !1;
    this.vertexColors = THREE.NoColors;
    this.morphNormals = this.morphTargets = this.skinning = !1;
    this.extensions = {
        derivatives: !1,
        fragDepth: !1,
        drawBuffers: !1,
        shaderTextureLOD: !1
    };
    this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv2: [0, 0]
    };
    this.index0AttributeName = void 0;
    void 0 !== a && (void 0 !== a.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),
    this.setValues(a))
}
;
THREE.ShaderMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.ShaderMaterial.prototype.constructor = THREE.ShaderMaterial;
THREE.ShaderMaterial.prototype.copy = function(a) {
    THREE.Material.prototype.copy.call(this, a);
    this.fragmentShader = a.fragmentShader;
    this.vertexShader = a.vertexShader;
    this.uniforms = THREE.UniformsUtils.clone(a.uniforms);
    this.defines = a.defines;
    this.shading = a.shading;
    this.wireframe = a.wireframe;
    this.wireframeLinewidth = a.wireframeLinewidth;
    this.fog = a.fog;
    this.lights = a.lights;
    this.vertexColors = a.vertexColors;
    this.skinning = a.skinning;
    this.morphTargets = a.morphTargets;
    this.morphNormals = a.morphNormals;
    this.extensions = a.extensions;
    return this
}
;
THREE.ShaderMaterial.prototype.toJSON = function(a) {
    a = THREE.Material.prototype.toJSON.call(this, a);
    a.uniforms = this.uniforms;
    a.vertexShader = this.vertexShader;
    a.fragmentShader = this.fragmentShader;
    return a
}
;
THREE.RawShaderMaterial = function(a) {
    THREE.ShaderMaterial.call(this, a);
    this.type = "RawShaderMaterial"
}
;
THREE.RawShaderMaterial.prototype = Object.create(THREE.ShaderMaterial.prototype);
THREE.RawShaderMaterial.prototype.constructor = THREE.RawShaderMaterial;
THREE.SpriteMaterial = function(a) {
    THREE.Material.call(this);
    this.type = "SpriteMaterial";
    this.color = new THREE.Color(16777215);
    this.map = null;
    this.rotation = 0;
    this.fog = !1;
    this.setValues(a)
}
;
THREE.SpriteMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.SpriteMaterial.prototype.constructor = THREE.SpriteMaterial;
THREE.SpriteMaterial.prototype.copy = function(a) {
    THREE.Material.prototype.copy.call(this, a);
    this.color.copy(a.color);
    this.map = a.map;
    this.rotation = a.rotation;
    this.fog = a.fog;
    return this
}
;
THREE.Texture = function(a, b, c, d, e, f, g, h, k) {
    Object.defineProperty(this, "id", {
        value: THREE.TextureIdCount++
    });
    this.uuid = THREE.Math.generateUUID();
    this.sourceFile = this.name = "";
    this.image = void 0 !== a ? a : THREE.Texture.DEFAULT_IMAGE;
    this.mipmaps = [];
    this.mapping = void 0 !== b ? b : THREE.Texture.DEFAULT_MAPPING;
    this.wrapS = void 0 !== c ? c : THREE.ClampToEdgeWrapping;
    this.wrapT = void 0 !== d ? d : THREE.ClampToEdgeWrapping;
    this.magFilter = void 0 !== e ? e : THREE.LinearFilter;
    this.minFilter = void 0 !== f ? f : THREE.LinearMipMapLinearFilter;
    this.anisotropy = void 0 !== k ? k : 1;
    this.format = void 0 !== g ? g : THREE.RGBAFormat;
    this.type = void 0 !== h ? h : THREE.UnsignedByteType;
    this.offset = new THREE.Vector2(0,0);
    this.repeat = new THREE.Vector2(1,1);
    this.generateMipmaps = !0;
    this.premultiplyAlpha = !1;
    this.flipY = !0;
    this.unpackAlignment = 4;
    this.encoding = THREE.LinearEncoding;
    this.version = 0;
    this.onUpdate = null
}
;
THREE.Texture.DEFAULT_IMAGE = void 0;
THREE.Texture.DEFAULT_MAPPING = THREE.UVMapping;
THREE.Texture.prototype = {
    constructor: THREE.Texture,
    set needsUpdate(a) {
        !0 === a && this.version++
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(a) {
        this.image = a.image;
        this.mipmaps = a.mipmaps.slice(0);
        this.mapping = a.mapping;
        this.wrapS = a.wrapS;
        this.wrapT = a.wrapT;
        this.magFilter = a.magFilter;
        this.minFilter = a.minFilter;
        this.anisotropy = a.anisotropy;
        this.format = a.format;
        this.type = a.type;
        this.offset.copy(a.offset);
        this.repeat.copy(a.repeat);
        this.generateMipmaps = a.generateMipmaps;
        this.premultiplyAlpha = a.premultiplyAlpha;
        this.flipY = a.flipY;
        this.unpackAlignment = a.unpackAlignment;
        this.encoding = a.encoding;
        return this
    },
    toJSON: function(a) {
        if (void 0 !== a.textures[this.uuid])
            return a.textures[this.uuid];
        var b = {
            metadata: {
                version: 4.4,
                type: "Texture",
                generator: "Texture.toJSON"
            },
            uuid: this.uuid,
            name: this.name,
            mapping: this.mapping,
            repeat: [this.repeat.x, this.repeat.y],
            offset: [this.offset.x, this.offset.y],
            wrap: [this.wrapS, this.wrapT],
            minFilter: this.minFilter,
            magFilter: this.magFilter,
            anisotropy: this.anisotropy
        };
        if (void 0 !== this.image) {
            var c = this.image;
            void 0 === c.uuid && (c.uuid = THREE.Math.generateUUID());
            if (void 0 === a.images[c.uuid]) {
                var d = a.images, e = c.uuid, f = c.uuid, g;
                void 0 !== c.toDataURL ? g = c : (g = document.createElement("canvas"),
                g.width = c.width,
                g.height = c.height,
                g.getContext("2d").drawImage(c, 0, 0, c.width, c.height));
                g = 2048 < g.width || 2048 < g.height ? g.toDataURL("image/jpeg", .6) : g.toDataURL("image/png");
                d[e] = {
                    uuid: f,
                    url: g
                }
            }
            b.image = c.uuid
        }
        return a.textures[this.uuid] = b
    },
    dispose: function() {
        this.dispatchEvent({
            type: "dispose"
        })
    },
    transformUv: function(a) {
        if (this.mapping === THREE.UVMapping) {
            a.multiply(this.repeat);
            a.add(this.offset);
            if (0 > a.x || 1 < a.x)
                switch (this.wrapS) {
                case THREE.RepeatWrapping:
                    a.x -= Math.floor(a.x);
                    break;
                case THREE.ClampToEdgeWrapping:
                    a.x = 0 > a.x ? 0 : 1;
                    break;
                case THREE.MirroredRepeatWrapping:
                    1 === Math.abs(Math.floor(a.x) % 2) ? a.x = Math.ceil(a.x) - a.x : a.x -= Math.floor(a.x)
                }
            if (0 > a.y || 1 < a.y)
                switch (this.wrapT) {
                case THREE.RepeatWrapping:
                    a.y -= Math.floor(a.y);
                    break;
                case THREE.ClampToEdgeWrapping:
                    a.y = 0 > a.y ? 0 : 1;
                    break;
                case THREE.MirroredRepeatWrapping:
                    1 === Math.abs(Math.floor(a.y) % 2) ? a.y = Math.ceil(a.y) - a.y : a.y -= Math.floor(a.y)
                }
            this.flipY && (a.y = 1 - a.y)
        }
    }
};
THREE.EventDispatcher.prototype.apply(THREE.Texture.prototype);
THREE.TextureIdCount = 0;
THREE.CanvasTexture = function(a, b, c, d, e, f, g, h, k) {
    THREE.Texture.call(this, a, b, c, d, e, f, g, h, k);
    this.needsUpdate = !0
}
;
THREE.CanvasTexture.prototype = Object.create(THREE.Texture.prototype);
THREE.CanvasTexture.prototype.constructor = THREE.CanvasTexture;
THREE.CubeTexture = function(a, b, c, d, e, f, g, h, k) {
    a = void 0 !== a ? a : [];
    b = void 0 !== b ? b : THREE.CubeReflectionMapping;
    THREE.Texture.call(this, a, b, c, d, e, f, g, h, k);
    this.flipY = !1
}
;
THREE.CubeTexture.prototype = Object.create(THREE.Texture.prototype);
THREE.CubeTexture.prototype.constructor = THREE.CubeTexture;
Object.defineProperty(THREE.CubeTexture.prototype, "images", {
    get: function() {
        return this.image
    },
    set: function(a) {
        this.image = a
    }
});
THREE.CompressedTexture = function(a, b, c, d, e, f, g, h, k, l, p) {
    THREE.Texture.call(this, null, f, g, h, k, l, d, e, p);
    this.image = {
        width: b,
        height: c
    };
    this.mipmaps = a;
    this.generateMipmaps = this.flipY = !1
}
;
THREE.CompressedTexture.prototype = Object.create(THREE.Texture.prototype);
THREE.CompressedTexture.prototype.constructor = THREE.CompressedTexture;
THREE.DataTexture = function(a, b, c, d, e, f, g, h, k, l, p) {
    THREE.Texture.call(this, null, f, g, h, k, l, d, e, p);
    this.image = {
        data: a,
        width: b,
        height: c
    };
    this.magFilter = void 0 !== k ? k : THREE.NearestFilter;
    this.minFilter = void 0 !== l ? l : THREE.NearestFilter;
    this.generateMipmaps = this.flipY = !1
}
;
THREE.DataTexture.prototype = Object.create(THREE.Texture.prototype);
THREE.DataTexture.prototype.constructor = THREE.DataTexture;
THREE.VideoTexture = function(a, b, c, d, e, f, g, h, k) {
    function l() {
        requestAnimationFrame(l);
        a.readyState === a.HAVE_ENOUGH_DATA && (p.needsUpdate = !0)
    }
    THREE.Texture.call(this, a, b, c, d, e, f, g, h, k);
    this.generateMipmaps = !1;
    var p = this;
    l()
}
;
THREE.VideoTexture.prototype = Object.create(THREE.Texture.prototype);
THREE.VideoTexture.prototype.constructor = THREE.VideoTexture;
THREE.Group = function() {
    THREE.Object3D.call(this);
    this.type = "Group"
}
;
THREE.Group.prototype = Object.create(THREE.Object3D.prototype);
THREE.Group.prototype.constructor = THREE.Group;
THREE.Points = function(a, b) {
    THREE.Object3D.call(this);
    this.type = "Points";
    this.geometry = void 0 !== a ? a : new THREE.Geometry;
    this.material = void 0 !== b ? b : new THREE.PointsMaterial({
        color: 16777215 * Math.random()
    })
}
;
THREE.Points.prototype = Object.create(THREE.Object3D.prototype);
THREE.Points.prototype.constructor = THREE.Points;
THREE.Points.prototype.raycast = function() {
    var a = new THREE.Matrix4
      , b = new THREE.Ray
      , c = new THREE.Sphere;
    return function(d, e) {
        function f(a, c) {
            var f = b.distanceSqToPoint(a);
            if (f < p) {
                var h = b.closestPointToPoint(a);
                h.applyMatrix4(k);
                var l = d.ray.origin.distanceTo(h);
                l < d.near || l > d.far || e.push({
                    distance: l,
                    distanceToRay: Math.sqrt(f),
                    point: h.clone(),
                    index: c,
                    face: null,
                    object: g
                })
            }
        }
        var g = this
          , h = this.geometry
          , k = this.matrixWorld
          , l = d.params.Points.threshold;
        null === h.boundingSphere && h.computeBoundingSphere();
        c.copy(h.boundingSphere);
        c.applyMatrix4(k);
        if (!1 !== d.ray.intersectsSphere(c)) {
            a.getInverse(k);
            b.copy(d.ray).applyMatrix4(a);
            var l = l / ((this.scale.x + this.scale.y + this.scale.z) / 3)
              , p = l * l
              , l = new THREE.Vector3;
            if (h instanceof THREE.BufferGeometry) {
                var n = h.index
                  , h = h.attributes.position.array;
                if (null !== n)
                    for (var m = n.array, n = 0, q = m.length; n < q; n++) {
                        var u = m[n];
                        l.fromArray(h, 3 * u);
                        f(l, u)
                    }
                else
                    for (n = 0,
                    m = h.length / 3; n < m; n++)
                        l.fromArray(h, 3 * n),
                        f(l, n)
            } else
                for (l = h.vertices,
                n = 0,
                m = l.length; n < m; n++)
                    f(l[n], n)
        }
    }
}();
THREE.Points.prototype.clone = function() {
    return (new this.constructor(this.geometry,this.material)).copy(this)
}
;
THREE.Line = function(a, b, c) {
    if (1 === c)
        return console.warn("THREE.Line: parameter THREE.LinePieces no longer supported. Created THREE.LineSegments instead."),
        new THREE.LineSegments(a,b);
    THREE.Object3D.call(this);
    this.type = "Line";
    this.geometry = void 0 !== a ? a : new THREE.Geometry;
    this.material = void 0 !== b ? b : new THREE.LineBasicMaterial({
        color: 16777215 * Math.random()
    })
}
;
THREE.Line.prototype = Object.create(THREE.Object3D.prototype);
THREE.Line.prototype.constructor = THREE.Line;
THREE.Line.prototype.raycast = function() {
    var a = new THREE.Matrix4
      , b = new THREE.Ray
      , c = new THREE.Sphere;
    return function(d, e) {
        var f = d.linePrecision
          , f = f * f
          , g = this.geometry
          , h = this.matrixWorld;
        null === g.boundingSphere && g.computeBoundingSphere();
        c.copy(g.boundingSphere);
        c.applyMatrix4(h);
        if (!1 !== d.ray.intersectsSphere(c)) {
            a.getInverse(h);
            b.copy(d.ray).applyMatrix4(a);
            var k = new THREE.Vector3
              , l = new THREE.Vector3
              , h = new THREE.Vector3
              , p = new THREE.Vector3
              , n = this instanceof THREE.LineSegments ? 2 : 1;
            if (g instanceof THREE.BufferGeometry) {
                var m = g.index
                  , q = g.attributes.position.array;
                if (null !== m)
                    for (var m = m.array, g = 0, u = m.length - 1; g < u; g += n) {
                        var v = m[g + 1];
                        k.fromArray(q, 3 * m[g]);
                        l.fromArray(q, 3 * v);
                        v = b.distanceSqToSegment(k, l, p, h);
                        v > f || (p.applyMatrix4(this.matrixWorld),
                        v = d.ray.origin.distanceTo(p),
                        v < d.near || v > d.far || e.push({
                            distance: v,
                            point: h.clone().applyMatrix4(this.matrixWorld),
                            index: g,
                            face: null,
                            faceIndex: null,
                            object: this
                        }))
                    }
                else
                    for (g = 0,
                    u = q.length / 3 - 1; g < u; g += n)
                        k.fromArray(q, 3 * g),
                        l.fromArray(q, 3 * g + 3),
                        v = b.distanceSqToSegment(k, l, p, h),
                        v > f || (p.applyMatrix4(this.matrixWorld),
                        v = d.ray.origin.distanceTo(p),
                        v < d.near || v > d.far || e.push({
                            distance: v,
                            point: h.clone().applyMatrix4(this.matrixWorld),
                            index: g,
                            face: null,
                            faceIndex: null,
                            object: this
                        }))
            } else if (g instanceof THREE.Geometry)
                for (k = g.vertices,
                l = k.length,
                g = 0; g < l - 1; g += n)
                    v = b.distanceSqToSegment(k[g], k[g + 1], p, h),
                    v > f || (p.applyMatrix4(this.matrixWorld),
                    v = d.ray.origin.distanceTo(p),
                    v < d.near || v > d.far || e.push({
                        distance: v,
                        point: h.clone().applyMatrix4(this.matrixWorld),
                        index: g,
                        face: null,
                        faceIndex: null,
                        object: this
                    }))
        }
    }
}();
THREE.Line.prototype.clone = function() {
    return (new this.constructor(this.geometry,this.material)).copy(this)
}
;
THREE.LineStrip = 0;
THREE.LinePieces = 1;
THREE.LineSegments = function(a, b) {
    THREE.Line.call(this, a, b);
    this.type = "LineSegments"
}
;
THREE.LineSegments.prototype = Object.create(THREE.Line.prototype);
THREE.LineSegments.prototype.constructor = THREE.LineSegments;
THREE.Mesh = function(a, b) {
    THREE.Object3D.call(this);
    this.type = "Mesh";
    this.geometry = void 0 !== a ? a : new THREE.Geometry;
    this.material = void 0 !== b ? b : new THREE.MeshBasicMaterial({
        color: 16777215 * Math.random()
    });
    this.drawMode = THREE.TrianglesDrawMode;
    this.updateMorphTargets()
}
;
THREE.Mesh.prototype = Object.create(THREE.Object3D.prototype);
THREE.Mesh.prototype.constructor = THREE.Mesh;
THREE.Mesh.prototype.setDrawMode = function(a) {
    this.drawMode = a
}
;
THREE.Mesh.prototype.updateMorphTargets = function() {
    if (void 0 !== this.geometry.morphTargets && 0 < this.geometry.morphTargets.length) {
        this.morphTargetBase = -1;
        this.morphTargetInfluences = [];
        this.morphTargetDictionary = {};
        for (var a = 0, b = this.geometry.morphTargets.length; a < b; a++)
            this.morphTargetInfluences.push(0),
            this.morphTargetDictionary[this.geometry.morphTargets[a].name] = a
    }
}
;
THREE.Mesh.prototype.getMorphTargetIndexByName = function(a) {
    if (void 0 !== this.morphTargetDictionary[a])
        return this.morphTargetDictionary[a];
    console.warn("THREE.Mesh.getMorphTargetIndexByName: morph target " + a + " does not exist. Returning 0.");
    return 0
}
;
THREE.Mesh.prototype.raycast = function() {
    function a(a, b, c, d, e, f, g) {
        THREE.Triangle.barycoordFromPoint(a, b, c, d, v);
        e.multiplyScalar(v.x);
        f.multiplyScalar(v.y);
        g.multiplyScalar(v.z);
        e.add(f).add(g);
        return e.clone()
    }
    function b(a, b, c, d, e, f, g) {
        var h = a.material;
        if (null === (h.side === THREE.BackSide ? c.intersectTriangle(f, e, d, !0, g) : c.intersectTriangle(d, e, f, h.side !== THREE.DoubleSide, g)))
            return null;
        s.copy(g);
        s.applyMatrix4(a.matrixWorld);
        c = b.ray.origin.distanceTo(s);
        return c < b.near || c > b.far ? null : {
            distance: c,
            point: s.clone(),
            object: a
        }
    }
    function c(c, d, e, f, l, p, n, s) {
        g.fromArray(f, 3 * p);
        h.fromArray(f, 3 * n);
        k.fromArray(f, 3 * s);
        if (c = b(c, d, e, g, h, k, t))
            l && (m.fromArray(l, 2 * p),
            q.fromArray(l, 2 * n),
            u.fromArray(l, 2 * s),
            c.uv = a(t, g, h, k, m, q, u)),
            c.face = new THREE.Face3(p,n,s,THREE.Triangle.normal(g, h, k)),
            c.faceIndex = p;
        return c
    }
    var d = new THREE.Matrix4
      , e = new THREE.Ray
      , f = new THREE.Sphere
      , g = new THREE.Vector3
      , h = new THREE.Vector3
      , k = new THREE.Vector3
      , l = new THREE.Vector3
      , p = new THREE.Vector3
      , n = new THREE.Vector3
      , m = new THREE.Vector2
      , q = new THREE.Vector2
      , u = new THREE.Vector2
      , v = new THREE.Vector3
      , t = new THREE.Vector3
      , s = new THREE.Vector3;
    return function(s, v) {
        var x = this.geometry
          , D = this.material
          , z = this.matrixWorld;
        if (void 0 !== D && (null === x.boundingSphere && x.computeBoundingSphere(),
        f.copy(x.boundingSphere),
        f.applyMatrix4(z),
        !1 !== s.ray.intersectsSphere(f) && (d.getInverse(z),
        e.copy(s.ray).applyMatrix4(d),
        null === x.boundingBox || !1 !== e.intersectsBox(x.boundingBox)))) {
            var y, B;
            if (x instanceof THREE.BufferGeometry) {
                var G, F, D = x.index, z = x.attributes, x = z.position.array;
                void 0 !== z.uv && (y = z.uv.array);
                if (null !== D)
                    for (var z = D.array, H = 0, L = z.length; H < L; H += 3) {
                        if (D = z[H],
                        G = z[H + 1],
                        F = z[H + 2],
                        B = c(this, s, e, x, y, D, G, F))
                            B.faceIndex = Math.floor(H / 3),
                            v.push(B)
                    }
                else
                    for (H = 0,
                    L = x.length; H < L; H += 9)
                        if (D = H / 3,
                        G = D + 1,
                        F = D + 2,
                        B = c(this, s, e, x, y, D, G, F))
                            B.index = D,
                            v.push(B)
            } else if (x instanceof THREE.Geometry) {
                var A, N, z = D instanceof THREE.MultiMaterial, H = !0 === z ? D.materials : null, L = x.vertices;
                G = x.faces;
                F = x.faceVertexUvs[0];
                0 < F.length && (y = F);
                for (var M = 0, I = G.length; M < I; M++) {
                    var O = G[M];
                    B = !0 === z ? H[O.materialIndex] : D;
                    if (void 0 !== B) {
                        F = L[O.a];
                        A = L[O.b];
                        N = L[O.c];
                        if (!0 === B.morphTargets) {
                            B = x.morphTargets;
                            var Q = this.morphTargetInfluences;
                            g.set(0, 0, 0);
                            h.set(0, 0, 0);
                            k.set(0, 0, 0);
                            for (var P = 0, T = B.length; P < T; P++) {
                                var J = Q[P];
                                if (0 !== J) {
                                    var C = B[P].vertices;
                                    g.addScaledVector(l.subVectors(C[O.a], F), J);
                                    h.addScaledVector(p.subVectors(C[O.b], A), J);
                                    k.addScaledVector(n.subVectors(C[O.c], N), J)
                                }
                            }
                            g.add(F);
                            h.add(A);
                            k.add(N);
                            F = g;
                            A = h;
                            N = k
                        }
                        if (B = b(this, s, e, F, A, N, t))
                            y && (Q = y[M],
                            m.copy(Q[0]),
                            q.copy(Q[1]),
                            u.copy(Q[2]),
                            B.uv = a(t, F, A, N, m, q, u)),
                            B.face = O,
                            B.faceIndex = M,
                            v.push(B)
                    }
                }
            }
        }
    }
}();
THREE.Mesh.prototype.clone = function() {
    return (new this.constructor(this.geometry,this.material)).copy(this)
}
;
THREE.Bone = function(a) {
    THREE.Object3D.call(this);
    this.type = "Bone";
    this.skin = a
}
;
THREE.Bone.prototype = Object.create(THREE.Object3D.prototype);
THREE.Bone.prototype.constructor = THREE.Bone;
THREE.Bone.prototype.copy = function(a) {
    THREE.Object3D.prototype.copy.call(this, a);
    this.skin = a.skin;
    return this
}
;
THREE.Skeleton = function(a, b, c) {
    this.useVertexTexture = void 0 !== c ? c : !0;
    this.identityMatrix = new THREE.Matrix4;
    a = a || [];
    this.bones = a.slice(0);
    this.useVertexTexture ? (a = Math.sqrt(4 * this.bones.length),
    a = THREE.Math.nextPowerOfTwo(Math.ceil(a)),
    this.boneTextureHeight = this.boneTextureWidth = a = Math.max(a, 4),
    this.boneMatrices = new Float32Array(this.boneTextureWidth * this.boneTextureHeight * 4),
    this.boneTexture = new THREE.DataTexture(this.boneMatrices,this.boneTextureWidth,this.boneTextureHeight,THREE.RGBAFormat,THREE.FloatType)) : this.boneMatrices = new Float32Array(16 * this.bones.length);
    if (void 0 === b)
        this.calculateInverses();
    else if (this.bones.length === b.length)
        this.boneInverses = b.slice(0);
    else
        for (console.warn("THREE.Skeleton bonInverses is the wrong length."),
        this.boneInverses = [],
        b = 0,
        a = this.bones.length; b < a; b++)
            this.boneInverses.push(new THREE.Matrix4)
}
;
THREE.Skeleton.prototype.calculateInverses = function() {
    this.boneInverses = [];
    for (var a = 0, b = this.bones.length; a < b; a++) {
        var c = new THREE.Matrix4;
        this.bones[a] && c.getInverse(this.bones[a].matrixWorld);
        this.boneInverses.push(c)
    }
}
;
THREE.Skeleton.prototype.pose = function() {
    for (var a, b = 0, c = this.bones.length; b < c; b++)
        (a = this.bones[b]) && a.matrixWorld.getInverse(this.boneInverses[b]);
    b = 0;
    for (c = this.bones.length; b < c; b++)
        if (a = this.bones[b])
            a.parent ? (a.matrix.getInverse(a.parent.matrixWorld),
            a.matrix.multiply(a.matrixWorld)) : a.matrix.copy(a.matrixWorld),
            a.matrix.decompose(a.position, a.quaternion, a.scale)
}
;
THREE.Skeleton.prototype.update = function() {
    var a = new THREE.Matrix4;
    return function() {
        for (var b = 0, c = this.bones.length; b < c; b++)
            a.multiplyMatrices(this.bones[b] ? this.bones[b].matrixWorld : this.identityMatrix, this.boneInverses[b]),
            a.flattenToArrayOffset(this.boneMatrices, 16 * b);
        this.useVertexTexture && (this.boneTexture.needsUpdate = !0)
    }
}();
THREE.Skeleton.prototype.clone = function() {
    return new THREE.Skeleton(this.bones,this.boneInverses,this.useVertexTexture)
}
;
THREE.SkinnedMesh = function(a, b, c) {
    THREE.Mesh.call(this, a, b);
    this.type = "SkinnedMesh";
    this.bindMode = "attached";
    this.bindMatrix = new THREE.Matrix4;
    this.bindMatrixInverse = new THREE.Matrix4;
    a = [];
    if (this.geometry && void 0 !== this.geometry.bones) {
        for (var d, e = 0, f = this.geometry.bones.length; e < f; ++e)
            d = this.geometry.bones[e],
            b = new THREE.Bone(this),
            a.push(b),
            b.name = d.name,
            b.position.fromArray(d.pos),
            b.quaternion.fromArray(d.rotq),
            void 0 !== d.scl && b.scale.fromArray(d.scl);
        e = 0;
        for (f = this.geometry.bones.length; e < f; ++e)
            d = this.geometry.bones[e],
            -1 !== d.parent && null !== d.parent ? a[d.parent].add(a[e]) : this.add(a[e])
    }
    this.normalizeSkinWeights();
    this.updateMatrixWorld(!0);
    this.bind(new THREE.Skeleton(a,void 0,c), this.matrixWorld)
}
;
THREE.SkinnedMesh.prototype = Object.create(THREE.Mesh.prototype);
THREE.SkinnedMesh.prototype.constructor = THREE.SkinnedMesh;
THREE.SkinnedMesh.prototype.bind = function(a, b) {
    this.skeleton = a;
    void 0 === b && (this.updateMatrixWorld(!0),
    this.skeleton.calculateInverses(),
    b = this.matrixWorld);
    this.bindMatrix.copy(b);
    this.bindMatrixInverse.getInverse(b)
}
;
THREE.SkinnedMesh.prototype.pose = function() {
    this.skeleton.pose()
}
;
THREE.SkinnedMesh.prototype.normalizeSkinWeights = function() {
    if (this.geometry instanceof THREE.Geometry)
        for (var a = 0; a < this.geometry.skinWeights.length; a++) {
            var b = this.geometry.skinWeights[a]
              , c = 1 / b.lengthManhattan();
            Infinity !== c ? b.multiplyScalar(c) : b.set(1, 0, 0, 0)
        }
    else if (this.geometry instanceof THREE.BufferGeometry)
        for (var b = new THREE.Vector4, d = this.geometry.attributes.skinWeight, a = 0; a < d.count; a++)
            b.x = d.getX(a),
            b.y = d.getY(a),
            b.z = d.getZ(a),
            b.w = d.getW(a),
            c = 1 / b.lengthManhattan(),
            Infinity !== c ? b.multiplyScalar(c) : b.set(1, 0, 0, 0),
            d.setXYZW(a, b.x, b.y, b.z, b.w)
}
;
THREE.SkinnedMesh.prototype.updateMatrixWorld = function(a) {
    THREE.Mesh.prototype.updateMatrixWorld.call(this, !0);
    "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh unrecognized bindMode: " + this.bindMode)
}
;
THREE.SkinnedMesh.prototype.clone = function() {
    return (new this.constructor(this.geometry,this.material,this.useVertexTexture)).copy(this)
}
;
THREE.LOD = function() {
    THREE.Object3D.call(this);
    this.type = "LOD";
    Object.defineProperties(this, {
        levels: {
            enumerable: !0,
            value: []
        },
        objects: {
            get: function() {
                console.warn("THREE.LOD: .objects has been renamed to .levels.");
                return this.levels
            }
        }
    })
}
;
THREE.LOD.prototype = Object.create(THREE.Object3D.prototype);
THREE.LOD.prototype.constructor = THREE.LOD;
THREE.LOD.prototype.addLevel = function(a, b) {
    void 0 === b && (b = 0);
    b = Math.abs(b);
    for (var c = this.levels, d = 0; d < c.length && !(b < c[d].distance); d++)
        ;
    c.splice(d, 0, {
        distance: b,
        object: a
    });
    this.add(a)
}
;
THREE.LOD.prototype.getObjectForDistance = function(a) {
    for (var b = this.levels, c = 1, d = b.length; c < d && !(a < b[c].distance); c++)
        ;
    return b[c - 1].object
}
;
THREE.LOD.prototype.raycast = function() {
    var a = new THREE.Vector3;
    return function(b, c) {
        a.setFromMatrixPosition(this.matrixWorld);
        var d = b.ray.origin.distanceTo(a);
        this.getObjectForDistance(d).raycast(b, c)
    }
}();
THREE.LOD.prototype.update = function() {
    var a = new THREE.Vector3
      , b = new THREE.Vector3;
    return function(c) {
        var d = this.levels;
        if (1 < d.length) {
            a.setFromMatrixPosition(c.matrixWorld);
            b.setFromMatrixPosition(this.matrixWorld);
            c = a.distanceTo(b);
            d[0].object.visible = !0;
            for (var e = 1, f = d.length; e < f; e++)
                if (c >= d[e].distance)
                    d[e - 1].object.visible = !1,
                    d[e].object.visible = !0;
                else
                    break;
            for (; e < f; e++)
                d[e].object.visible = !1
        }
    }
}();
THREE.LOD.prototype.copy = function(a) {
    THREE.Object3D.prototype.copy.call(this, a, !1);
    a = a.levels;
    for (var b = 0, c = a.length; b < c; b++) {
        var d = a[b];
        this.addLevel(d.object.clone(), d.distance)
    }
    return this
}
;
THREE.LOD.prototype.toJSON = function(a) {
    a = THREE.Object3D.prototype.toJSON.call(this, a);
    a.object.levels = [];
    for (var b = this.levels, c = 0, d = b.length; c < d; c++) {
        var e = b[c];
        a.object.levels.push({
            object: e.object.uuid,
            distance: e.distance
        })
    }
    return a
}
;
THREE.Sprite = function() {
    var a = new Uint16Array([0, 1, 2, 0, 2, 3])
      , b = new Float32Array([-.5, -.5, 0, .5, -.5, 0, .5, .5, 0, -.5, .5, 0])
      , c = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1])
      , d = new THREE.BufferGeometry;
    d.setIndex(new THREE.BufferAttribute(a,1));
    d.addAttribute("position", new THREE.BufferAttribute(b,3));
    d.addAttribute("uv", new THREE.BufferAttribute(c,2));
    return function(a) {
        THREE.Object3D.call(this);
        this.type = "Sprite";
        this.geometry = d;
        this.material = void 0 !== a ? a : new THREE.SpriteMaterial
    }
}();
THREE.Sprite.prototype = Object.create(THREE.Object3D.prototype);
THREE.Sprite.prototype.constructor = THREE.Sprite;
THREE.Sprite.prototype.raycast = function() {
    var a = new THREE.Vector3;
    return function(b, c) {
        a.setFromMatrixPosition(this.matrixWorld);
        var d = b.ray.distanceSqToPoint(a);
        d > this.scale.x * this.scale.y || c.push({
            distance: Math.sqrt(d),
            point: this.position,
            face: null,
            object: this
        })
    }
}();
THREE.Sprite.prototype.clone = function() {
    return (new this.constructor(this.material)).copy(this)
}
;
THREE.Particle = THREE.Sprite;
THREE.LensFlare = function(a, b, c, d, e) {
    THREE.Object3D.call(this);
    this.lensFlares = [];
    this.positionScreen = new THREE.Vector3;
    this.customUpdateCallback = void 0;
    void 0 !== a && this.add(a, b, c, d, e)
}
;
THREE.LensFlare.prototype = Object.create(THREE.Object3D.prototype);
THREE.LensFlare.prototype.constructor = THREE.LensFlare;
THREE.LensFlare.prototype.add = function(a, b, c, d, e, f) {
    void 0 === b && (b = -1);
    void 0 === c && (c = 0);
    void 0 === f && (f = 1);
    void 0 === e && (e = new THREE.Color(16777215));
    void 0 === d && (d = THREE.NormalBlending);
    c = Math.min(c, Math.max(0, c));
    this.lensFlares.push({
        texture: a,
        size: b,
        distance: c,
        x: 0,
        y: 0,
        z: 0,
        scale: 1,
        rotation: 0,
        opacity: f,
        color: e,
        blending: d
    })
}
;
THREE.LensFlare.prototype.updateLensFlares = function() {
    var a, b = this.lensFlares.length, c, d = 2 * -this.positionScreen.x, e = 2 * -this.positionScreen.y;
    for (a = 0; a < b; a++)
        c = this.lensFlares[a],
        c.x = this.positionScreen.x + d * c.distance,
        c.y = this.positionScreen.y + e * c.distance,
        c.wantedRotation = c.x * Math.PI * .25,
        c.rotation += .25 * (c.wantedRotation - c.rotation)
}
;
THREE.LensFlare.prototype.copy = function(a) {
    THREE.Object3D.prototype.copy.call(this, a);
    this.positionScreen.copy(a.positionScreen);
    this.customUpdateCallback = a.customUpdateCallback;
    for (var b = 0, c = a.lensFlares.length; b < c; b++)
        this.lensFlares.push(a.lensFlares[b]);
    return this
}
;
THREE.Scene = function() {
    THREE.Object3D.call(this);
    this.type = "Scene";
    this.overrideMaterial = this.fog = null;
    this.autoUpdate = !0
}
;
THREE.Scene.prototype = Object.create(THREE.Object3D.prototype);
THREE.Scene.prototype.constructor = THREE.Scene;
THREE.Scene.prototype.copy = function(a, b) {
    THREE.Object3D.prototype.copy.call(this, a, b);
    null !== a.fog && (this.fog = a.fog.clone());
    null !== a.overrideMaterial && (this.overrideMaterial = a.overrideMaterial.clone());
    this.autoUpdate = a.autoUpdate;
    this.matrixAutoUpdate = a.matrixAutoUpdate;
    return this
}
;
THREE.Fog = function(a, b, c) {
    this.name = "";
    this.color = new THREE.Color(a);
    this.near = void 0 !== b ? b : 1;
    this.far = void 0 !== c ? c : 1E3
}
;
THREE.Fog.prototype.clone = function() {
    return new THREE.Fog(this.color.getHex(),this.near,this.far)
}
;
THREE.FogExp2 = function(a, b) {
    this.name = "";
    this.color = new THREE.Color(a);
    this.density = void 0 !== b ? b : 2.5E-4
}
;
THREE.FogExp2.prototype.clone = function() {
    return new THREE.FogExp2(this.color.getHex(),this.density)
}
;
THREE.ShaderChunk = {};
THREE.ShaderChunk.alphamap_fragment = "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif\n";
THREE.ShaderChunk.alphamap_pars_fragment = "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif\n";
THREE.ShaderChunk.alphatest_fragment = "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif\n";
THREE.ShaderChunk.aomap_fragment = "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif\n";
THREE.ShaderChunk.aomap_pars_fragment = "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif";
THREE.ShaderChunk.begin_vertex = "\nvec3 transformed = vec3( position );\n";
THREE.ShaderChunk.beginnormal_vertex = "\nvec3 objectNormal = vec3( normal );\n";
THREE.ShaderChunk.bsdfs = "bool testLightInRange( const in float lightDistance, const in float cutoffDistance ) {\n\treturn any( bvec2( cutoffDistance == 0.0, lightDistance < cutoffDistance ) );\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\t\tif( decayExponent > 0.0 ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\t\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\t\tfloat maxDistanceCutoffFactor = pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\t\treturn distanceFalloff * maxDistanceCutoffFactor;\n#else\n\t\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n#endif\n\t\t}\n\t\treturn 1.0;\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_Smith( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n\treturn specularColor * AB.x + AB.y;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n";
THREE.ShaderChunk.bumpmap_pars_fragment = "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = dFdx( surf_pos );\n\t\tvec3 vSigmaY = dFdy( surf_pos );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif\n";
THREE.ShaderChunk.color_fragment = "#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif";
THREE.ShaderChunk.color_pars_fragment = "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif\n";
THREE.ShaderChunk.color_pars_vertex = "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif";
THREE.ShaderChunk.color_vertex = "#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif";
THREE.ShaderChunk.common = "#define PI 3.14159\n#define PI2 6.28318\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\n";
THREE.ShaderChunk.cube_uv_reflection_fragment = "#ifdef ENVMAP_TYPE_CUBE_UV\nconst float cubeUV_textureSize = 1024.0;\nint getFaceFromDirection(vec3 direction) {\n    vec3 absDirection = abs(direction);\n    int face = -1;\n    if( absDirection.x > absDirection.z ) {\n        if(absDirection.x > absDirection.y )\n            face = direction.x > 0.0 ? 0 : 3;\n        else\n            face = direction.y > 0.0 ? 1 : 4;\n    }\n    else {\n        if(absDirection.z > absDirection.y )\n            face = direction.z > 0.0 ? 2 : 5;\n        else\n            face = direction.y > 0.0 ? 1 : 4;\n    }\n    return face;\n}\nconst float cubeUV_maxLods1 = log2(cubeUV_textureSize*0.25) - 1.0;\nconst float cubeUV_rangeClamp = exp2((6.0 - 1.0) * 2.0);\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n    float scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n    float dxRoughness = dFdx(roughness);\n    float dyRoughness = dFdy(roughness);\n    vec3 dx = dFdx( vec * scale * dxRoughness );\n    vec3 dy = dFdy( vec * scale * dyRoughness );\n    float d = max( dot( dx, dx ), dot( dy, dy ) );\n    d = clamp(d, 1.0, cubeUV_rangeClamp);\n    float mipLevel = 0.5 * log2(d);\n    return vec2(floor(mipLevel), fract(mipLevel));\n}\nconst float cubeUV_maxLods2 = log2(cubeUV_textureSize*0.25) - 2.0;\nconst float cubeUV_rcpTextureSize = 1.0 / cubeUV_textureSize;\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n    mipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n    float a = 16.0 * cubeUV_rcpTextureSize;\n    vec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n    vec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n    float powScale = exp2_packed.x * exp2_packed.y;\n    float scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n    float mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n    bool bRes = mipLevel == 0.0;\n    scale =  bRes && (scale < a) ? a : scale;\n    vec3 r;\n    vec2 offset;\n    int face = getFaceFromDirection(direction);\n    float rcpPowScale = 1.0 / powScale;\n    if( face == 0) {\n        r = vec3(direction.x, -direction.z, direction.y);\n        offset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n        offset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;\n    }\n    else if( face == 1) {\n        r = vec3(direction.y, direction.x, direction.z);\n        offset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n        offset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;\n    }\n    else if( face == 2) {\n        r = vec3(direction.z, direction.x, direction.y);\n        offset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n        offset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;\n    }\n    else if( face == 3) {\n        r = vec3(direction.x, direction.z, direction.y);\n        offset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n        offset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;\n    }\n    else if( face == 4) {\n        r = vec3(direction.y, direction.x, -direction.z);\n        offset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n        offset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;\n    }\n    else {\n        r = vec3(direction.z, -direction.x, direction.y);\n        offset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n        offset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;\n    }\n    r = normalize(r);\n    float texelOffset = 0.5 * cubeUV_rcpTextureSize;\n    vec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n    vec2 base = offset + vec2( texelOffset );\n    return base + s * ( scale - 2.0 * texelOffset );\n}\nconst float cubeUV_maxLods3 = log2(cubeUV_textureSize*0.25) - 3.0;\nvec4 textureCubeUV(vec3 reflectedDirection, float roughness ) {\n    float roughnessVal = roughness* cubeUV_maxLods3;\n    float r1 = floor(roughnessVal);\n    float r2 = r1 + 1.0;\n    float t = fract(roughnessVal);\n    vec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n    float s = mipInfo.y;\n    float level0 = mipInfo.x;\n    float level1 = level0 + 1.0;\n    level1 = level1 > 5.0 ? 5.0 : level1;\n    level0 += min( floor( s + 0.5 ), 5.0 );\n    vec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n    vec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n    vec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n    vec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n    vec4 result = mix(color10, color20, t);\n    return vec4(result.rgb, 1.0);\n}\n#endif\n";
THREE.ShaderChunk.defaultnormal_vertex = "#ifdef FLIP_SIDED\n\tobjectNormal = -objectNormal;\n#endif\nvec3 transformedNormal = normalMatrix * objectNormal;\n";
THREE.ShaderChunk.displacementmap_vertex = "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normal * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif\n";
THREE.ShaderChunk.displacementmap_pars_vertex = "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif\n";
THREE.ShaderChunk.emissivemap_fragment = "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif\n";
THREE.ShaderChunk.emissivemap_pars_fragment = "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif\n";
THREE.ShaderChunk.encodings_pars_fragment = "\nvec4 LinearToLinear( in vec4 value ) {\n  return value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n  return vec4( pow( value.xyz, vec3( gammaFactor ) ), value.w );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n  return vec4( pow( value.xyz, vec3( 1.0 / gammaFactor ) ), value.w );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n  return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n  return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n  return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n  float maxComponent = max( max( value.r, value.g ), value.b );\n  float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n  return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n  return vec4( value.xyz * value.w * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n  float maxRGB = max( value.x, max( value.g, value.b ) );\n  float M      = clamp( maxRGB / maxRange, 0.0, 1.0 );\n  M            = ceil( M * 255.0 ) / 255.0;\n  return vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n    return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n    float maxRGB = max( value.x, max( value.g, value.b ) );\n    float D      = max( maxRange / maxRGB, 1.0 );\n    D            = min( floor( D ) / 255.0, 1.0 );\n    return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n  vec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n  Xp_Y_XYZp = max(Xp_Y_XYZp, vec3(1e-6, 1e-6, 1e-6));\n  vec4 vResult;\n  vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n  float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n  vResult.w = fract(Le);\n  vResult.z = (Le - (floor(vResult.w*255.0))/255.0)/255.0;\n  return vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n  float Le = value.z * 255.0 + value.w;\n  vec3 Xp_Y_XYZp;\n  Xp_Y_XYZp.y = exp2((Le - 127.0) / 2.0);\n  Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n  Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n  vec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n  return vec4( max(vRGB, 0.0), 1.0 );\n}\n";
THREE.ShaderChunk.encodings_fragment = "  gl_FragColor = linearToOutputTexel( gl_FragColor );\n";
THREE.ShaderChunk.envmap_fragment = "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tfloat flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#else\n\t\tfloat flipNormal = 1.0;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\tsampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n\t\tsampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\tvec3 reflectView = flipNormal * normalize((viewMatrix * vec4( reflectVec, 0.0 )).xyz + vec3(0.0,0.0,1.0));\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif\n";
THREE.ShaderChunk.envmap_pars_fragment = "#if defined( USE_ENVMAP ) || defined( STANDARD )\n\tuniform float reflectivity;\n\tuniform float envMapIntenstiy;\n#endif\n#ifdef USE_ENVMAP\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( STANDARD )\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif\n";
THREE.ShaderChunk.envmap_pars_vertex = "#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG ) && ! defined( STANDARD )\n\tvarying vec3 vReflect;\n\tuniform float refractionRatio;\n#endif\n";
THREE.ShaderChunk.envmap_vertex = "#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG ) && ! defined( STANDARD )\n\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t#ifdef ENVMAP_MODE_REFLECTION\n\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t#else\n\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t#endif\n#endif\n";
THREE.ShaderChunk.fog_fragment = "#ifdef USE_FOG\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\n\t#else\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\t#endif\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * depth * depth * LOG2 ) );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif\n";
THREE.ShaderChunk.fog_pars_fragment = "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif";
THREE.ShaderChunk.lightmap_fragment = "#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif\n";
THREE.ShaderChunk.lightmap_pars_fragment = "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif";
THREE.ShaderChunk.lights_lambert_vertex = "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tdirectLight = getPointDirectLightIrradiance( pointLights[ i ], geometry );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tdirectLight = getSpotDirectLightIrradiance( spotLights[ i ], geometry );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectLight = getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif\n";
THREE.ShaderChunk.lights_pars = "uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tIncidentLight getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry ) {\n\t\tIncidentLight directLight;\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t\treturn directLight;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tIncidentLight getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry ) {\n\t\tIncidentLight directLight;\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tif ( testLightInRange( lightDistance, pointLight.distance ) ) {\n\t\t\tdirectLight.color = pointLight.color;\n\t\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t\treturn directLight;\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tIncidentLight getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry ) {\n\t\tIncidentLight directLight;\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( all( bvec2( angleCos > spotLight.coneCos, testLightInRange( lightDistance, spotLight.distance ) ) ) ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t\treturn directLight;\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif\n#if defined( USE_ENVMAP ) && defined( STANDARD )\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tfloat flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#else\n\t\t\tfloat flipNormal = 1.0;\n\t\t#endif\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = flipNormal * vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = flipNormal * vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar - 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n\t\t#endif\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tfloat flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#else\n\t\t\tfloat flipNormal = 1.0;\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV(queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent));\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n\t\t\tsampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = flipNormal * normalize((viewMatrix * vec4( reflectVec, 0.0 )).xyz + vec3(0.0,0.0,1.0));\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t#endif\n\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif\n";
THREE.ShaderChunk.lights_phong_fragment = "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n";
THREE.ShaderChunk.lights_phong_pars_fragment = "#ifdef USE_ENVMAP\n\tvarying vec3 vWorldPosition;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)\n";
THREE.ShaderChunk.lights_phong_pars_vertex = "#ifdef USE_ENVMAP\n\tvarying vec3 vWorldPosition;\n#endif\n";
THREE.ShaderChunk.lights_phong_vertex = "#ifdef USE_ENVMAP\n\tvWorldPosition = worldPosition.xyz;\n#endif\n";
THREE.ShaderChunk.lights_standard_fragment = "StandardMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\nmaterial.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n";
THREE.ShaderChunk.lights_standard_pars_fragment = "struct StandardMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n};\nvoid RE_Direct_Standard( const in IncidentLight directLight, const in GeometricContext geometry, const in StandardMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n}\nvoid RE_IndirectDiffuse_Standard( const in vec3 irradiance, const in GeometricContext geometry, const in StandardMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Standard( const in vec3 radiance, const in GeometricContext geometry, const in StandardMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectSpecular += radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Standard\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Standard\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Standard\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}\n";
THREE.ShaderChunk.lights_template = "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tdirectLight = getPointDirectLightIrradiance( pointLight, geometry );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tdirectLight = getSpotDirectLightIrradiance( spotLight, geometry );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tdirectLight = getDirectionalDirectLightIrradiance( directionalLight, geometry );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t \tirradiance += getLightProbeIndirectIrradiance( geometry, 8 );\n\t#endif\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tvec3 radiance = getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), 8 );\n\tRE_IndirectSpecular( radiance, geometry, material, reflectedLight );\n#endif\n";
THREE.ShaderChunk.logdepthbuf_fragment = "#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n\tgl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n#endif";
THREE.ShaderChunk.logdepthbuf_pars_fragment = "#ifdef USE_LOGDEPTHBUF\n\tuniform float logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n#endif\n";
THREE.ShaderChunk.logdepthbuf_pars_vertex = "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n\tuniform float logDepthBufFC;\n#endif";
THREE.ShaderChunk.logdepthbuf_vertex = "#ifdef USE_LOGDEPTHBUF\n\tgl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t#else\n\t\tgl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n\t#endif\n#endif\n";
THREE.ShaderChunk.map_fragment = "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif\n";
THREE.ShaderChunk.map_pars_fragment = "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n";
THREE.ShaderChunk.map_particle_fragment = "#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) * offsetRepeat.zw + offsetRepeat.xy );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n";
THREE.ShaderChunk.map_particle_pars_fragment = "#ifdef USE_MAP\n\tuniform vec4 offsetRepeat;\n\tuniform sampler2D map;\n#endif\n";
THREE.ShaderChunk.metalnessmap_fragment = "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.r;\n#endif\n";
THREE.ShaderChunk.metalnessmap_pars_fragment = "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif";
THREE.ShaderChunk.morphnormal_vertex = "#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif\n";
THREE.ShaderChunk.morphtarget_pars_vertex = "#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif";
THREE.ShaderChunk.morphtarget_vertex = "#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif\n";
THREE.ShaderChunk.normal_fragment = "#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n\t#endif\n#endif\n#ifdef USE_NORMALMAP\n\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n";
THREE.ShaderChunk.normalmap_pars_fragment = "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 S = normalize( q0 * st1.t - q1 * st0.t );\n\t\tvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n\t\tvec3 N = normalize( surf_norm );\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif\n";
THREE.ShaderChunk.premultiplied_alpha_fragment = "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif\n";
THREE.ShaderChunk.project_vertex = "#ifdef USE_SKINNING\n\tvec4 mvPosition = modelViewMatrix * skinned;\n#else\n\tvec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\n#endif\ngl_Position = projectionMatrix * mvPosition;\n";
THREE.ShaderChunk.roughnessmap_fragment = "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.r;\n#endif\n";
THREE.ShaderChunk.roughnessmap_pars_fragment = "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif";
THREE.ShaderChunk.shadowmap_pars_fragment = "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n\tfloat unpackDepth( const in vec4 rgba_depth ) {\n\t\tconst vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\n\t\treturn dot( rgba_depth, bit_shift );\n\t}\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackDepth( texture2D( depths, uv ) ) );\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = floor( uv * size + 0.5 ) / size;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\treturn (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn 1.0;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\tfloat dp = ( length( lightToPosition ) - shadowBias ) / 1000.0;\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif\n";
THREE.ShaderChunk.shadowmap_pars_vertex = "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n#endif\n";
THREE.ShaderChunk.shadowmap_vertex = "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif\n";
THREE.ShaderChunk.shadowmask_pars_fragment = "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}\n";
THREE.ShaderChunk.skinbase_vertex = "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif";
THREE.ShaderChunk.skinning_pars_vertex = "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureWidth;\n\t\tuniform int boneTextureHeight;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureWidth ) );\n\t\t\tfloat y = floor( j / float( boneTextureWidth ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureWidth );\n\t\t\tfloat dy = 1.0 / float( boneTextureHeight );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneGlobalMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneGlobalMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif\n";
THREE.ShaderChunk.skinning_vertex = "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\tskinned  = bindMatrixInverse * skinned;\n#endif\n";
THREE.ShaderChunk.skinnormal_vertex = "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n#endif\n";
THREE.ShaderChunk.specularmap_fragment = "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif";
THREE.ShaderChunk.specularmap_pars_fragment = "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif";
THREE.ShaderChunk.tonemapping_fragment = "#if defined( TONE_MAPPING )\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif\n";
THREE.ShaderChunk.tonemapping_pars_fragment = "#define saturate(a) clamp( a, 0.0, 1.0 )\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n  return toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n  color *= toneMappingExposure;\n  return saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n  color *= toneMappingExposure;\n  return saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n  color *= toneMappingExposure;\n  color = max( vec3( 0.0 ), color - 0.004 );\n  return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\n";
THREE.ShaderChunk.uv2_pars_fragment = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif";
THREE.ShaderChunk.uv2_pars_vertex = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif";
THREE.ShaderChunk.uv2_vertex = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif";
THREE.ShaderChunk.uv_pars_fragment = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n#endif";
THREE.ShaderChunk.uv_pars_vertex = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n\tuniform vec4 offsetRepeat;\n#endif\n";
THREE.ShaderChunk.uv_vertex = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n#endif";
THREE.ShaderChunk.worldpos_vertex = "#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( STANDARD ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n\t#ifdef USE_SKINNING\n\t\tvec4 worldPosition = modelMatrix * skinned;\n\t#else\n\t\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n\t#endif\n#endif\n";
THREE.UniformsUtils = {
    merge: function(a) {
        for (var b = {}, c = 0; c < a.length; c++) {
            var d = this.clone(a[c]), e;
            for (e in d)
                b[e] = d[e]
        }
        return b
    },
    clone: function(a) {
        var b = {}, c;
        for (c in a) {
            b[c] = {};
            for (var d in a[c]) {
                var e = a[c][d];
                e instanceof THREE.Color || e instanceof THREE.Vector2 || e instanceof THREE.Vector3 || e instanceof THREE.Vector4 || e instanceof THREE.Matrix3 || e instanceof THREE.Matrix4 || e instanceof THREE.Texture ? b[c][d] = e.clone() : Array.isArray(e) ? b[c][d] = e.slice() : b[c][d] = e
            }
        }
        return b
    }
};
THREE.UniformsLib = {
    common: {
        diffuse: {
            type: "c",
            value: new THREE.Color(15658734)
        },
        opacity: {
            type: "f",
            value: 1
        },
        map: {
            type: "t",
            value: null
        },
        offsetRepeat: {
            type: "v4",
            value: new THREE.Vector4(0,0,1,1)
        },
        specularMap: {
            type: "t",
            value: null
        },
        alphaMap: {
            type: "t",
            value: null
        },
        envMap: {
            type: "t",
            value: null
        },
        flipEnvMap: {
            type: "f",
            value: -1
        },
        reflectivity: {
            type: "f",
            value: 1
        },
        refractionRatio: {
            type: "f",
            value: .98
        }
    },
    aomap: {
        aoMap: {
            type: "t",
            value: null
        },
        aoMapIntensity: {
            type: "f",
            value: 1
        }
    },
    lightmap: {
        lightMap: {
            type: "t",
            value: null
        },
        lightMapIntensity: {
            type: "f",
            value: 1
        }
    },
    emissivemap: {
        emissiveMap: {
            type: "t",
            value: null
        }
    },
    bumpmap: {
        bumpMap: {
            type: "t",
            value: null
        },
        bumpScale: {
            type: "f",
            value: 1
        }
    },
    normalmap: {
        normalMap: {
            type: "t",
            value: null
        },
        normalScale: {
            type: "v2",
            value: new THREE.Vector2(1,1)
        }
    },
    displacementmap: {
        displacementMap: {
            type: "t",
            value: null
        },
        displacementScale: {
            type: "f",
            value: 1
        },
        displacementBias: {
            type: "f",
            value: 0
        }
    },
    roughnessmap: {
        roughnessMap: {
            type: "t",
            value: null
        }
    },
    metalnessmap: {
        metalnessMap: {
            type: "t",
            value: null
        }
    },
    fog: {
        fogDensity: {
            type: "f",
            value: 2.5E-4
        },
        fogNear: {
            type: "f",
            value: 1
        },
        fogFar: {
            type: "f",
            value: 2E3
        },
        fogColor: {
            type: "c",
            value: new THREE.Color(16777215)
        }
    },
    lights: {
        ambientLightColor: {
            type: "fv",
            value: []
        },
        directionalLights: {
            type: "sa",
            value: [],
            properties: {
                direction: {
                    type: "v3"
                },
                color: {
                    type: "c"
                },
                shadow: {
                    type: "i"
                },
                shadowBias: {
                    type: "f"
                },
                shadowRadius: {
                    type: "f"
                },
                shadowMapSize: {
                    type: "v2"
                }
            }
        },
        directionalShadowMap: {
            type: "tv",
            value: []
        },
        directionalShadowMatrix: {
            type: "m4v",
            value: []
        },
        spotLights: {
            type: "sa",
            value: [],
            properties: {
                color: {
                    type: "c"
                },
                position: {
                    type: "v3"
                },
                direction: {
                    type: "v3"
                },
                distance: {
                    type: "f"
                },
                coneCos: {
                    type: "f"
                },
                penumbraCos: {
                    type: "f"
                },
                decay: {
                    type: "f"
                },
                shadow: {
                    type: "i"
                },
                shadowBias: {
                    type: "f"
                },
                shadowRadius: {
                    type: "f"
                },
                shadowMapSize: {
                    type: "v2"
                }
            }
        },
        spotShadowMap: {
            type: "tv",
            value: []
        },
        spotShadowMatrix: {
            type: "m4v",
            value: []
        },
        pointLights: {
            type: "sa",
            value: [],
            properties: {
                color: {
                    type: "c"
                },
                position: {
                    type: "v3"
                },
                decay: {
                    type: "f"
                },
                distance: {
                    type: "f"
                },
                shadow: {
                    type: "i"
                },
                shadowBias: {
                    type: "f"
                },
                shadowRadius: {
                    type: "f"
                },
                shadowMapSize: {
                    type: "v2"
                }
            }
        },
        pointShadowMap: {
            type: "tv",
            value: []
        },
        pointShadowMatrix: {
            type: "m4v",
            value: []
        },
        hemisphereLights: {
            type: "sa",
            value: [],
            properties: {
                direction: {
                    type: "v3"
                },
                skyColor: {
                    type: "c"
                },
                groundColor: {
                    type: "c"
                }
            }
        }
    },
    points: {
        diffuse: {
            type: "c",
            value: new THREE.Color(15658734)
        },
        opacity: {
            type: "f",
            value: 1
        },
        size: {
            type: "f",
            value: 1
        },
        scale: {
            type: "f",
            value: 1
        },
        map: {
            type: "t",
            value: null
        },
        offsetRepeat: {
            type: "v4",
            value: new THREE.Vector4(0,0,1,1)
        }
    }
};
THREE.ShaderChunk.cube_frag = "uniform samplerCube tCube;\nuniform float tFlip;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n\t#include <logdepthbuf_fragment>\n}\n";
THREE.ShaderChunk.cube_vert = "varying vec3 vWorldPosition;\n#include <common>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\t#include <logdepthbuf_vertex>\n}\n";
THREE.ShaderChunk.depth_frag = "uniform float mNear;\nuniform float mFar;\nuniform float opacity;\n#include <common>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\n\t#else\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\t#endif\n\tfloat color = 1.0 - smoothstep( mNear, mFar, depth );\n\tgl_FragColor = vec4( vec3( color ), opacity );\n}\n";
THREE.ShaderChunk.depth_vert = "#include <common>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n}\n";
THREE.ShaderChunk.depthRGBA_frag = "#include <common>\n#include <logdepthbuf_pars_fragment>\nvec4 pack_depth( const in float depth ) {\n\tconst vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );\n\tconst vec4 bit_mask = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );\n\tvec4 res = mod( depth * bit_shift * vec4( 255 ), vec4( 256 ) ) / vec4( 255 );\n\tres -= res.xxyz * bit_mask;\n\treturn res;\n}\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tgl_FragData[ 0 ] = pack_depth( gl_FragDepthEXT );\n\t#else\n\t\tgl_FragData[ 0 ] = pack_depth( gl_FragCoord.z );\n\t#endif\n}\n";
THREE.ShaderChunk.depthRGBA_vert = "#include <common>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\t#include <skinbase_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n}\n";
THREE.ShaderChunk.distanceRGBA_frag = "uniform vec3 lightPos;\nvarying vec4 vWorldPosition;\n#include <common>\nvec4 pack1K ( float depth ) {\n\tdepth /= 1000.0;\n\tconst vec4 bitSh = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );\n\tconst vec4 bitMsk = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );\n\tvec4 res = mod( depth * bitSh * vec4( 255 ), vec4( 256 ) ) / vec4( 255 );\n\tres -= res.xxyz * bitMsk;\n\treturn res;\n}\nfloat unpack1K ( vec4 color ) {\n\tconst vec4 bitSh = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\n\treturn dot( color, bitSh ) * 1000.0;\n}\nvoid main () {\n\tgl_FragColor = pack1K( length( vWorldPosition.xyz - lightPos.xyz ) );\n}\n";
THREE.ShaderChunk.distanceRGBA_vert = "varying vec4 vWorldPosition;\n#include <common>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\nvoid main() {\n\t#include <skinbase_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\tvWorldPosition = worldPosition;\n}\n";
THREE.ShaderChunk.equirect_frag = "uniform sampler2D tEquirect;\nuniform float tFlip;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\tvec3 direction = normalize( vWorldPosition );\n\tvec2 sampleUV;\n\tsampleUV.y = saturate( tFlip * direction.y * -0.5 + 0.5 );\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\t#include <logdepthbuf_fragment>\n}\n";
THREE.ShaderChunk.equirect_vert = "varying vec3 vWorldPosition;\n#include <common>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\t#include <logdepthbuf_vertex>\n}\n";
THREE.ShaderChunk.linedashed_frag = "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n";
THREE.ShaderChunk.linedashed_vert = "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n}\n";
THREE.ShaderChunk.meshbasic_frag = "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight;\n\treflectedLight.directDiffuse = vec3( 0.0 );\n\treflectedLight.directSpecular = vec3( 0.0 );\n\treflectedLight.indirectDiffuse = diffuseColor.rgb;\n\treflectedLight.indirectSpecular = vec3( 0.0 );\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n";
THREE.ShaderChunk.meshbasic_vert = "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n}\n";
THREE.ShaderChunk.meshlambert_frag = "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n";
THREE.ShaderChunk.meshlambert_vert = "#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n}\n";
THREE.ShaderChunk.meshphong_frag = "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n";
THREE.ShaderChunk.meshphong_vert = "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <lights_phong_pars_vertex>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_phong_vertex>\n\t#include <shadowmap_vertex>\n}\n";
THREE.ShaderChunk.meshstandard_frag = "#define STANDARD\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\nuniform float envMapIntensity;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <lights_pars>\n#include <lights_standard_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_standard_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n";
THREE.ShaderChunk.meshstandard_vert = "#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n}\n";
THREE.ShaderChunk.normal_frag = "uniform float opacity;\nvarying vec3 vNormal;\n#include <common>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );\n\t#include <logdepthbuf_fragment>\n}\n";
THREE.ShaderChunk.normal_vert = "varying vec3 vNormal;\n#include <common>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\tvNormal = normalize( normalMatrix * normal );\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n}\n";
THREE.ShaderChunk.points_frag = "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n";
THREE.ShaderChunk.points_vert = "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#ifdef USE_SIZEATTENUATION\n\t\tgl_PointSize = size * ( scale / - mvPosition.z );\n\t#else\n\t\tgl_PointSize = size;\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n}\n";
THREE.ShaderLib = {
    basic: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.aomap, THREE.UniformsLib.fog]),
        vertexShader: THREE.ShaderChunk.meshbasic_vert,
        fragmentShader: THREE.ShaderChunk.meshbasic_frag
    },
    lambert: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.aomap, THREE.UniformsLib.lightmap, THREE.UniformsLib.emissivemap, THREE.UniformsLib.fog, THREE.UniformsLib.lights, {
            emissive: {
                type: "c",
                value: new THREE.Color(0)
            }
        }]),
        vertexShader: THREE.ShaderChunk.meshlambert_vert,
        fragmentShader: THREE.ShaderChunk.meshlambert_frag
    },
    phong: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.aomap, THREE.UniformsLib.lightmap, THREE.UniformsLib.emissivemap, THREE.UniformsLib.bumpmap, THREE.UniformsLib.normalmap, THREE.UniformsLib.displacementmap, THREE.UniformsLib.fog, THREE.UniformsLib.lights, {
            emissive: {
                type: "c",
                value: new THREE.Color(0)
            },
            specular: {
                type: "c",
                value: new THREE.Color(1118481)
            },
            shininess: {
                type: "f",
                value: 30
            }
        }]),
        vertexShader: THREE.ShaderChunk.meshphong_vert,
        fragmentShader: THREE.ShaderChunk.meshphong_frag
    },
    standard: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.aomap, THREE.UniformsLib.lightmap, THREE.UniformsLib.emissivemap, THREE.UniformsLib.bumpmap, THREE.UniformsLib.normalmap, THREE.UniformsLib.displacementmap, THREE.UniformsLib.roughnessmap, THREE.UniformsLib.metalnessmap, THREE.UniformsLib.fog, THREE.UniformsLib.lights, {
            emissive: {
                type: "c",
                value: new THREE.Color(0)
            },
            roughness: {
                type: "f",
                value: .5
            },
            metalness: {
                type: "f",
                value: 0
            },
            envMapIntensity: {
                type: "f",
                value: 1
            }
        }]),
        vertexShader: THREE.ShaderChunk.meshstandard_vert,
        fragmentShader: THREE.ShaderChunk.meshstandard_frag
    },
    points: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.points, THREE.UniformsLib.fog]),
        vertexShader: THREE.ShaderChunk.points_vert,
        fragmentShader: THREE.ShaderChunk.points_frag
    },
    dashed: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.fog, {
            scale: {
                type: "f",
                value: 1
            },
            dashSize: {
                type: "f",
                value: 1
            },
            totalSize: {
                type: "f",
                value: 2
            }
        }]),
        vertexShader: THREE.ShaderChunk.linedashed_vert,
        fragmentShader: THREE.ShaderChunk.linedashed_frag
    },
    depth: {
        uniforms: {
            mNear: {
                type: "f",
                value: 1
            },
            mFar: {
                type: "f",
                value: 2E3
            },
            opacity: {
                type: "f",
                value: 1
            }
        },
        vertexShader: THREE.ShaderChunk.depth_vert,
        fragmentShader: THREE.ShaderChunk.depth_frag
    },
    normal: {
        uniforms: {
            opacity: {
                type: "f",
                value: 1
            }
        },
        vertexShader: THREE.ShaderChunk.normal_vert,
        fragmentShader: THREE.ShaderChunk.normal_frag
    },
    cube: {
        uniforms: {
            tCube: {
                type: "t",
                value: null
            },
            tFlip: {
                type: "f",
                value: -1
            }
        },
        vertexShader: THREE.ShaderChunk.cube_vert,
        fragmentShader: THREE.ShaderChunk.cube_frag
    },
    equirect: {
        uniforms: {
            tEquirect: {
                type: "t",
                value: null
            },
            tFlip: {
                type: "f",
                value: -1
            }
        },
        vertexShader: THREE.ShaderChunk.equirect_vert,
        fragmentShader: THREE.ShaderChunk.equirect_frag
    },
    depthRGBA: {
        uniforms: {},
        vertexShader: THREE.ShaderChunk.depthRGBA_vert,
        fragmentShader: THREE.ShaderChunk.depthRGBA_frag
    },
    distanceRGBA: {
        uniforms: {
            lightPos: {
                type: "v3",
                value: new THREE.Vector3(0,0,0)
            }
        },
        vertexShader: THREE.ShaderChunk.distanceRGBA_vert,
        fragmentShader: THREE.ShaderChunk.distanceRGBA_frag
    }
};
THREE.WebGLRenderer = function(a) {
    function b(a, b, c, d) {
        !0 === P && (a *= d,
        b *= d,
        c *= d);
        K.clearColor(a, b, c, d)
    }
    function c() {
        K.init();
        K.scissor(qa.copy(ya).multiplyScalar(aa));
        K.viewport(ka.copy(la).multiplyScalar(aa));
        b(ba.r, ba.g, ba.b, ga)
    }
    function d() {
        ma = ha = null;
        na = "";
        ra = -1;
        K.reset()
    }
    function e(a) {
        a.preventDefault();
        d();
        c();
        U.clear()
    }
    function f(a) {
        a = a.target;
        a.removeEventListener("dispose", f);
        a: {
            var b = U.get(a);
            if (a.image && b.__image__webglTextureCube)
                r.deleteTexture(b.__image__webglTextureCube);
            else {
                if (void 0 === b.__webglInit)
                    break a;
                r.deleteTexture(b.__webglTexture)
            }
            U.delete(a)
        }
        ia.textures--
    }
    function g(a) {
        a = a.target;
        a.removeEventListener("dispose", g);
        var b = U.get(a)
          , c = U.get(a.texture);
        if (a && void 0 !== c.__webglTexture) {
            r.deleteTexture(c.__webglTexture);
            if (a instanceof THREE.WebGLRenderTargetCube)
                for (c = 0; 6 > c; c++)
                    r.deleteFramebuffer(b.__webglFramebuffer[c]),
                    r.deleteRenderbuffer(b.__webglDepthbuffer[c]);
            else
                r.deleteFramebuffer(b.__webglFramebuffer),
                r.deleteRenderbuffer(b.__webglDepthbuffer);
            U.delete(a.texture);
            U.delete(a)
        }
        ia.textures--
    }
    function h(a) {
        a = a.target;
        a.removeEventListener("dispose", h);
        k(a);
        U.delete(a)
    }
    function k(a) {
        var b = U.get(a).program;
        a.program = void 0;
        void 0 !== b && oa.releaseProgram(b)
    }
    function l(a, b) {
        return Math.abs(b[0]) - Math.abs(a[0])
    }
    function p(a, b) {
        return a.object.renderOrder !== b.object.renderOrder ? a.object.renderOrder - b.object.renderOrder : a.material.id !== b.material.id ? a.material.id - b.material.id : a.z !== b.z ? a.z - b.z : a.id - b.id
    }
    function n(a, b) {
        return a.object.renderOrder !== b.object.renderOrder ? a.object.renderOrder - b.object.renderOrder : a.z !== b.z ? b.z - a.z : a.id - b.id
    }
    function m(a, b, c, d, e) {
        var f;
        c.transparent ? (d = S,
        f = ++Y) : (d = C,
        f = ++Z);
        f = d[f];
        void 0 !== f ? (f.id = a.id,
        f.object = a,
        f.geometry = b,
        f.material = c,
        f.z = W.z,
        f.group = e) : (f = {
            id: a.id,
            object: a,
            geometry: b,
            material: c,
            z: W.z,
            group: e
        },
        d.push(f))
    }
    function q(a, b) {
        if (!1 !== a.visible) {
            if (a.layers.test(b.layers))
                if (a instanceof THREE.Light)
                    J.push(a);
                else if (a instanceof THREE.Sprite)
                    !1 !== a.frustumCulled && !0 !== za.intersectsObject(a) || ja.push(a);
                else if (a instanceof THREE.LensFlare)
                    ea.push(a);
                else if (a instanceof THREE.ImmediateRenderObject)
                    !0 === X.sortObjects && (W.setFromMatrixPosition(a.matrixWorld),
                    W.applyProjection(sa)),
                    m(a, null, a.material, W.z, null);
                else if (a instanceof THREE.Mesh || a instanceof THREE.Line || a instanceof THREE.Points)
                    if (a instanceof THREE.SkinnedMesh && a.skeleton.update(),
                    !1 === a.frustumCulled || !0 === za.intersectsObject(a)) {
                        var c = a.material;
                        if (!0 === c.visible) {
                            !0 === X.sortObjects && (W.setFromMatrixPosition(a.matrixWorld),
                            W.applyProjection(sa));
                            var d = pa.update(a);
                            if (c instanceof THREE.MultiMaterial)
                                for (var e = d.groups, f = c.materials, c = 0, g = e.length; c < g; c++) {
                                    var h = e[c]
                                      , k = f[h.materialIndex];
                                    !0 === k.visible && m(a, d, k, W.z, h)
                                }
                            else
                                m(a, d, c, W.z, null)
                        }
                    }
            d = a.children;
            c = 0;
            for (g = d.length; c < g; c++)
                q(d[c], b)
        }
    }
    function u(a, b, c, d) {
        for (var e = 0, f = a.length; e < f; e++) {
            var g = a[e]
              , h = g.object
              , k = g.geometry
              , l = void 0 === d ? g.material : d
              , g = g.group;
            h.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse, h.matrixWorld);
            h.normalMatrix.getNormalMatrix(h.modelViewMatrix);
            if (h instanceof THREE.ImmediateRenderObject) {
                v(l);
                var m = t(b, c, l, h);
                na = "";
                h.render(function(a) {
                    X.renderBufferImmediate(a, m, l)
                })
            } else
                X.renderBufferDirect(b, c, k, l, h, g)
        }
    }
    function v(a) {
        a.side !== THREE.DoubleSide ? K.enable(r.CULL_FACE) : K.disable(r.CULL_FACE);
        K.setFlipSided(a.side === THREE.BackSide);
        !0 === a.transparent ? K.setBlending(a.blending, a.blendEquation, a.blendSrc, a.blendDst, a.blendEquationAlpha, a.blendSrcAlpha, a.blendDstAlpha, a.premultipliedAlpha) : K.setBlending(THREE.NoBlending);
        K.setDepthFunc(a.depthFunc);
        K.setDepthTest(a.depthTest);
        K.setDepthWrite(a.depthWrite);
        K.setColorWrite(a.colorWrite);
        K.setPolygonOffset(a.polygonOffset, a.polygonOffsetFactor, a.polygonOffsetUnits)
    }
    function t(a, b, c, d) {
        ta = 0;
        var e = U.get(c);
        void 0 === e.program && (c.needsUpdate = !0);
        void 0 !== e.lightsHash && e.lightsHash !== R.hash && (c.needsUpdate = !0);
        if (c.needsUpdate) {
            a: {
                var f = U.get(c)
                  , g = oa.getParameters(c, R, b, d)
                  , l = oa.getProgramCode(c, g)
                  , m = f.program
                  , p = !0;
                if (void 0 === m)
                    c.addEventListener("dispose", h);
                else if (m.code !== l)
                    k(c);
                else if (void 0 !== g.shaderID)
                    break a;
                else
                    p = !1;
                p && (g.shaderID ? (m = THREE.ShaderLib[g.shaderID],
                f.__webglShader = {
                    name: c.type,
                    uniforms: THREE.UniformsUtils.clone(m.uniforms),
                    vertexShader: m.vertexShader,
                    fragmentShader: m.fragmentShader
                }) : f.__webglShader = {
                    name: c.type,
                    uniforms: c.uniforms,
                    vertexShader: c.vertexShader,
                    fragmentShader: c.fragmentShader
                },
                c.__webglShader = f.__webglShader,
                m = oa.acquireProgram(c, g, l),
                f.program = m,
                c.program = m);
                g = m.getAttributes();
                if (c.morphTargets)
                    for (l = c.numSupportedMorphTargets = 0; l < X.maxMorphTargets; l++)
                        0 <= g["morphTarget" + l] && c.numSupportedMorphTargets++;
                if (c.morphNormals)
                    for (l = c.numSupportedMorphNormals = 0; l < X.maxMorphNormals; l++)
                        0 <= g["morphNormal" + l] && c.numSupportedMorphNormals++;
                f.uniformsList = [];
                var g = f.__webglShader.uniforms, l = f.program.getUniforms(), n;
                for (n in g)
                    (m = l[n]) && f.uniformsList.push([f.__webglShader.uniforms[n], m]);
                if (c instanceof THREE.MeshPhongMaterial || c instanceof THREE.MeshLambertMaterial || c instanceof THREE.MeshStandardMaterial || c.lights)
                    f.lightsHash = R.hash,
                    g.ambientLightColor.value = R.ambient,
                    g.directionalLights.value = R.directional,
                    g.spotLights.value = R.spot,
                    g.pointLights.value = R.point,
                    g.hemisphereLights.value = R.hemi,
                    g.directionalShadowMap.value = R.directionalShadowMap,
                    g.directionalShadowMatrix.value = R.directionalShadowMatrix,
                    g.spotShadowMap.value = R.spotShadowMap,
                    g.spotShadowMatrix.value = R.spotShadowMatrix,
                    g.pointShadowMap.value = R.pointShadowMap,
                    g.pointShadowMatrix.value = R.pointShadowMatrix;
                f.hasDynamicUniforms = !1;
                n = 0;
                for (g = f.uniformsList.length; n < g; n++)
                    if (!0 === f.uniformsList[n][0].dynamic) {
                        f.hasDynamicUniforms = !0;
                        break
                    }
            }
            c.needsUpdate = !1
        }
        m = l = p = !1;
        f = e.program;
        n = f.getUniforms();
        g = e.__webglShader.uniforms;
        f.id !== ha && (r.useProgram(f.program),
        ha = f.id,
        m = l = p = !0);
        c.id !== ra && (ra = c.id,
        l = !0);
        if (p || a !== ma)
            r.uniformMatrix4fv(n.projectionMatrix, !1, a.projectionMatrix.elements),
            da.logarithmicDepthBuffer && r.uniform1f(n.logDepthBufFC, 2 / (Math.log(a.far + 1) / Math.LN2)),
            a !== ma && (ma = a,
            m = l = !0),
            (c instanceof THREE.ShaderMaterial || c instanceof THREE.MeshPhongMaterial || c instanceof THREE.MeshStandardMaterial || c.envMap) && void 0 !== n.cameraPosition && (W.setFromMatrixPosition(a.matrixWorld),
            r.uniform3f(n.cameraPosition, W.x, W.y, W.z)),
            (c instanceof THREE.MeshPhongMaterial || c instanceof THREE.MeshLambertMaterial || c instanceof THREE.MeshBasicMaterial || c instanceof THREE.MeshStandardMaterial || c instanceof THREE.ShaderMaterial || c.skinning) && void 0 !== n.viewMatrix && r.uniformMatrix4fv(n.viewMatrix, !1, a.matrixWorldInverse.elements),
            void 0 !== n.toneMappingExposure && r.uniform1f(n.toneMappingExposure, X.toneMappingExposure),
            void 0 !== n.toneMappingWhitePoint && r.uniform1f(n.toneMappingWhitePoint, X.toneMappingWhitePoint);
        c.skinning && (d.bindMatrix && void 0 !== n.bindMatrix && r.uniformMatrix4fv(n.bindMatrix, !1, d.bindMatrix.elements),
        d.bindMatrixInverse && void 0 !== n.bindMatrixInverse && r.uniformMatrix4fv(n.bindMatrixInverse, !1, d.bindMatrixInverse.elements),
        da.floatVertexTextures && d.skeleton && d.skeleton.useVertexTexture ? (void 0 !== n.boneTexture && (p = s(),
        r.uniform1i(n.boneTexture, p),
        X.setTexture(d.skeleton.boneTexture, p)),
        void 0 !== n.boneTextureWidth && r.uniform1i(n.boneTextureWidth, d.skeleton.boneTextureWidth),
        void 0 !== n.boneTextureHeight && r.uniform1i(n.boneTextureHeight, d.skeleton.boneTextureHeight)) : d.skeleton && d.skeleton.boneMatrices && void 0 !== n.boneGlobalMatrices && r.uniformMatrix4fv(n.boneGlobalMatrices, !1, d.skeleton.boneMatrices));
        if (l) {
            if (c instanceof THREE.MeshPhongMaterial || c instanceof THREE.MeshLambertMaterial || c instanceof THREE.MeshStandardMaterial || c.lights)
                l = m,
                g.ambientLightColor.needsUpdate = l,
                g.directionalLights.needsUpdate = l,
                g.pointLights.needsUpdate = l,
                g.spotLights.needsUpdate = l,
                g.hemisphereLights.needsUpdate = l;
            b && c.fog && (g.fogColor.value = b.color,
            b instanceof THREE.Fog ? (g.fogNear.value = b.near,
            g.fogFar.value = b.far) : b instanceof THREE.FogExp2 && (g.fogDensity.value = b.density));
            if (c instanceof THREE.MeshBasicMaterial || c instanceof THREE.MeshLambertMaterial || c instanceof THREE.MeshPhongMaterial || c instanceof THREE.MeshStandardMaterial) {
                g.opacity.value = c.opacity;
                g.diffuse.value = c.color;
                c.emissive && g.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity);
                g.map.value = c.map;
                g.specularMap.value = c.specularMap;
                g.alphaMap.value = c.alphaMap;
                c.aoMap && (g.aoMap.value = c.aoMap,
                g.aoMapIntensity.value = c.aoMapIntensity);
                var q;
                c.map ? q = c.map : c.specularMap ? q = c.specularMap : c.displacementMap ? q = c.displacementMap : c.normalMap ? q = c.normalMap : c.bumpMap ? q = c.bumpMap : c.roughnessMap ? q = c.roughnessMap : c.metalnessMap ? q = c.metalnessMap : c.alphaMap ? q = c.alphaMap : c.emissiveMap && (q = c.emissiveMap);
                void 0 !== q && (q instanceof THREE.WebGLRenderTarget && (q = q.texture),
                b = q.offset,
                q = q.repeat,
                g.offsetRepeat.value.set(b.x, b.y, q.x, q.y));
                g.envMap.value = c.envMap;
                g.flipEnvMap.value = c.envMap instanceof THREE.WebGLRenderTargetCube ? 1 : -1;
                g.reflectivity.value = c.reflectivity;
                g.refractionRatio.value = c.refractionRatio
            }
            c instanceof THREE.LineBasicMaterial ? (g.diffuse.value = c.color,
            g.opacity.value = c.opacity) : c instanceof THREE.LineDashedMaterial ? (g.diffuse.value = c.color,
            g.opacity.value = c.opacity,
            g.dashSize.value = c.dashSize,
            g.totalSize.value = c.dashSize + c.gapSize,
            g.scale.value = c.scale) : c instanceof THREE.PointsMaterial ? (g.diffuse.value = c.color,
            g.opacity.value = c.opacity,
            g.size.value = c.size * aa,
            g.scale.value = A.clientHeight / 2,
            g.map.value = c.map,
            null !== c.map && (q = c.map.offset,
            c = c.map.repeat,
            g.offsetRepeat.value.set(q.x, q.y, c.x, c.y))) : c instanceof THREE.MeshLambertMaterial ? (c.lightMap && (g.lightMap.value = c.lightMap,
            g.lightMapIntensity.value = c.lightMapIntensity),
            c.emissiveMap && (g.emissiveMap.value = c.emissiveMap)) : c instanceof THREE.MeshPhongMaterial ? (g.specular.value = c.specular,
            g.shininess.value = Math.max(c.shininess, 1E-4),
            c.lightMap && (g.lightMap.value = c.lightMap,
            g.lightMapIntensity.value = c.lightMapIntensity),
            c.emissiveMap && (g.emissiveMap.value = c.emissiveMap),
            c.bumpMap && (g.bumpMap.value = c.bumpMap,
            g.bumpScale.value = c.bumpScale),
            c.normalMap && (g.normalMap.value = c.normalMap,
            g.normalScale.value.copy(c.normalScale)),
            c.displacementMap && (g.displacementMap.value = c.displacementMap,
            g.displacementScale.value = c.displacementScale,
            g.displacementBias.value = c.displacementBias)) : c instanceof THREE.MeshStandardMaterial ? (g.roughness.value = c.roughness,
            g.metalness.value = c.metalness,
            c.roughnessMap && (g.roughnessMap.value = c.roughnessMap),
            c.metalnessMap && (g.metalnessMap.value = c.metalnessMap),
            c.lightMap && (g.lightMap.value = c.lightMap,
            g.lightMapIntensity.value = c.lightMapIntensity),
            c.emissiveMap && (g.emissiveMap.value = c.emissiveMap),
            c.bumpMap && (g.bumpMap.value = c.bumpMap,
            g.bumpScale.value = c.bumpScale),
            c.normalMap && (g.normalMap.value = c.normalMap,
            g.normalScale.value.copy(c.normalScale)),
            c.displacementMap && (g.displacementMap.value = c.displacementMap,
            g.displacementScale.value = c.displacementScale,
            g.displacementBias.value = c.displacementBias),
            c.envMap && (g.envMapIntensity.value = c.envMapIntensity)) : c instanceof THREE.MeshDepthMaterial ? (g.mNear.value = a.near,
            g.mFar.value = a.far,
            g.opacity.value = c.opacity) : c instanceof THREE.MeshNormalMaterial && (g.opacity.value = c.opacity);
            E(e.uniformsList)
        }
        r.uniformMatrix4fv(n.modelViewMatrix, !1, d.modelViewMatrix.elements);
        n.normalMatrix && r.uniformMatrix3fv(n.normalMatrix, !1, d.normalMatrix.elements);
        void 0 !== n.modelMatrix && r.uniformMatrix4fv(n.modelMatrix, !1, d.matrixWorld.elements);
        if (!0 === e.hasDynamicUniforms) {
            e = e.uniformsList;
            c = [];
            q = 0;
            for (b = e.length; q < b; q++)
                n = e[q][0],
                g = n.onUpdateCallback,
                void 0 !== g && (g.bind(n)(d, a),
                c.push(e[q]));
            E(c)
        }
        return f
    }
    function s() {
        var a = ta;
        a >= da.maxTextures && console.warn("WebGLRenderer: trying to use " + a + " texture units while this GPU supports only " + da.maxTextures);
        ta += 1;
        return a
    }
    function w(a, b, c, d) {
        var e;
        if ("1i" === b)
            r.uniform1i(c, d);
        else if ("1f" === b)
            r.uniform1f(c, d);
        else if ("2f" === b)
            r.uniform2f(c, d[0], d[1]);
        else if ("3f" === b)
            r.uniform3f(c, d[0], d[1], d[2]);
        else if ("4f" === b)
            r.uniform4f(c, d[0], d[1], d[2], d[3]);
        else if ("1iv" === b)
            r.uniform1iv(c, d);
        else if ("3iv" === b)
            r.uniform3iv(c, d);
        else if ("1fv" === b)
            r.uniform1fv(c, d);
        else if ("2fv" === b)
            r.uniform2fv(c, d);
        else if ("3fv" === b)
            r.uniform3fv(c, d);
        else if ("4fv" === b)
            r.uniform4fv(c, d);
        else if ("Matrix2fv" === b)
            r.uniformMatrix2fv(c, !1, d);
        else if ("Matrix3fv" === b)
            r.uniformMatrix3fv(c, !1, d);
        else if ("Matrix4fv" === b)
            r.uniformMatrix4fv(c, !1, d);
        else if ("i" === b)
            r.uniform1i(c, d);
        else if ("f" === b)
            r.uniform1f(c, d);
        else if ("v2" === b)
            r.uniform2f(c, d.x, d.y);
        else if ("v3" === b)
            r.uniform3f(c, d.x, d.y, d.z);
        else if ("v4" === b)
            r.uniform4f(c, d.x, d.y, d.z, d.w);
        else if ("c" === b)
            r.uniform3f(c, d.r, d.g, d.b);
        else if ("s" === b) {
            a = a.properties;
            for (var g in a) {
                e = a[g];
                var f = c[g]
                  , h = d[g];
                w(e, e.type, f, h)
            }
        } else if ("sa" === b) {
            a = a.properties;
            b = 0;
            for (var k = d.length; b < k; b++)
                for (g in a)
                    e = a[g],
                    f = c[b][g],
                    h = d[b][g],
                    w(e, e.type, f, h)
        } else if ("iv1" === b)
            r.uniform1iv(c, d);
        else if ("iv" === b)
            r.uniform3iv(c, d);
        else if ("fv1" === b)
            r.uniform1fv(c, d);
        else if ("fv" === b)
            r.uniform3fv(c, d);
        else if ("v2v" === b) {
            void 0 === a._array && (a._array = new Float32Array(2 * d.length));
            e = b = 0;
            for (g = d.length; b < g; b++,
            e += 2)
                a._array[e + 0] = d[b].x,
                a._array[e + 1] = d[b].y;
            r.uniform2fv(c, a._array)
        } else if ("v3v" === b) {
            void 0 === a._array && (a._array = new Float32Array(3 * d.length));
            e = b = 0;
            for (g = d.length; b < g; b++,
            e += 3)
                a._array[e + 0] = d[b].x,
                a._array[e + 1] = d[b].y,
                a._array[e + 2] = d[b].z;
            r.uniform3fv(c, a._array)
        } else if ("v4v" === b) {
            void 0 === a._array && (a._array = new Float32Array(4 * d.length));
            e = b = 0;
            for (g = d.length; b < g; b++,
            e += 4)
                a._array[e + 0] = d[b].x,
                a._array[e + 1] = d[b].y,
                a._array[e + 2] = d[b].z,
                a._array[e + 3] = d[b].w;
            r.uniform4fv(c, a._array)
        } else if ("m2" === b)
            r.uniformMatrix2fv(c, !1, d.elements);
        else if ("m3" === b)
            r.uniformMatrix3fv(c, !1, d.elements);
        else if ("m3v" === b) {
            void 0 === a._array && (a._array = new Float32Array(9 * d.length));
            b = 0;
            for (g = d.length; b < g; b++)
                d[b].flattenToArrayOffset(a._array, 9 * b);
            r.uniformMatrix3fv(c, !1, a._array)
        } else if ("m4" === b)
            r.uniformMatrix4fv(c, !1, d.elements);
        else if ("m4v" === b) {
            void 0 === a._array && (a._array = new Float32Array(16 * d.length));
            b = 0;
            for (g = d.length; b < g; b++)
                d[b].flattenToArrayOffset(a._array, 16 * b);
            r.uniformMatrix4fv(c, !1, a._array)
        } else if ("t" === b)
            e = s(),
            r.uniform1i(c, e),
            d && (d instanceof THREE.CubeTexture || Array.isArray(d.image) && 6 === d.image.length ? y(d, e) : d instanceof THREE.WebGLRenderTargetCube ? B(d.texture, e) : d instanceof THREE.WebGLRenderTarget ? X.setTexture(d.texture, e) : X.setTexture(d, e));
        else if ("tv" === b) {
            void 0 === a._array && (a._array = []);
            b = 0;
            for (g = a.value.length; b < g; b++)
                a._array[b] = s();
            r.uniform1iv(c, a._array);
            b = 0;
            for (g = a.value.length; b < g; b++)
                d = a.value[b],
                e = a._array[b],
                d && (d instanceof THREE.CubeTexture || d.image instanceof Array && 6 === d.image.length ? y(d, e) : d instanceof THREE.WebGLRenderTarget ? X.setTexture(d.texture, e) : d instanceof THREE.WebGLRenderTargetCube ? B(d.texture, e) : X.setTexture(d, e))
        } else
            console.warn("THREE.WebGLRenderer: Unknown uniform type: " + b)
    }
    function E(a) {
        for (var b = 0, c = a.length; b < c; b++) {
            var d = a[b][0];
            !1 !== d.needsUpdate && w(d, d.type, a[b][1], d.value)
        }
    }
    function x(a, b, c) {
        c ? (r.texParameteri(a, r.TEXTURE_WRAP_S, L(b.wrapS)),
        r.texParameteri(a, r.TEXTURE_WRAP_T, L(b.wrapT)),
        r.texParameteri(a, r.TEXTURE_MAG_FILTER, L(b.magFilter)),
        r.texParameteri(a, r.TEXTURE_MIN_FILTER, L(b.minFilter))) : (r.texParameteri(a, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE),
        r.texParameteri(a, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE),
        b.wrapS === THREE.ClampToEdgeWrapping && b.wrapT === THREE.ClampToEdgeWrapping || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.", b),
        r.texParameteri(a, r.TEXTURE_MAG_FILTER, H(b.magFilter)),
        r.texParameteri(a, r.TEXTURE_MIN_FILTER, H(b.minFilter)),
        b.minFilter !== THREE.NearestFilter && b.minFilter !== THREE.LinearFilter && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.", b));
        !(c = V.get("EXT_texture_filter_anisotropic")) || b.type === THREE.FloatType && null === V.get("OES_texture_float_linear") || b.type === THREE.HalfFloatType && null === V.get("OES_texture_half_float_linear") || !(1 < b.anisotropy || U.get(b).__currentAnisotropy) || (r.texParameterf(a, c.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(b.anisotropy, X.getMaxAnisotropy())),
        U.get(b).__currentAnisotropy = b.anisotropy)
    }
    function D(a, b) {
        if (a.width > b || a.height > b) {
            var c = b / Math.max(a.width, a.height)
              , d = document.createElement("canvas");
            d.width = Math.floor(a.width * c);
            d.height = Math.floor(a.height * c);
            d.getContext("2d").drawImage(a, 0, 0, a.width, a.height, 0, 0, d.width, d.height);
            console.warn("THREE.WebGLRenderer: image is too big (" + a.width + "x" + a.height + "). Resized to " + d.width + "x" + d.height, a);
            return d
        }
        return a
    }
    function z(a) {
        return THREE.Math.isPowerOfTwo(a.width) && THREE.Math.isPowerOfTwo(a.height)
    }
    function y(a, b) {
        var c = U.get(a);
        if (6 === a.image.length)
            if (0 < a.version && c.__version !== a.version) {
                c.__image__webglTextureCube || (a.addEventListener("dispose", f),
                c.__image__webglTextureCube = r.createTexture(),
                ia.textures++);
                K.activeTexture(r.TEXTURE0 + b);
                K.bindTexture(r.TEXTURE_CUBE_MAP, c.__image__webglTextureCube);
                r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, a.flipY);
                for (var d = a instanceof THREE.CompressedTexture, e = a.image[0]instanceof THREE.DataTexture, g = [], h = 0; 6 > h; h++)
                    g[h] = !X.autoScaleCubemaps || d || e ? e ? a.image[h].image : a.image[h] : D(a.image[h], da.maxCubemapSize);
                var k = z(g[0])
                  , l = L(a.format)
                  , m = L(a.type);
                x(r.TEXTURE_CUBE_MAP, a, k);
                for (h = 0; 6 > h; h++)
                    if (d)
                        for (var n, p = g[h].mipmaps, q = 0, s = p.length; q < s; q++)
                            n = p[q],
                            a.format !== THREE.RGBAFormat && a.format !== THREE.RGBFormat ? -1 < K.getCompressedTextureFormats().indexOf(l) ? K.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + h, q, l, n.width, n.height, 0, n.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setCubeTexture()") : K.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + h, q, l, n.width, n.height, 0, l, m, n.data);
                    else
                        e ? K.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + h, 0, l, g[h].width, g[h].height, 0, l, m, g[h].data) : K.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + h, 0, l, l, m, g[h]);
                a.generateMipmaps && k && r.generateMipmap(r.TEXTURE_CUBE_MAP);
                c.__version = a.version;
                if (a.onUpdate)
                    a.onUpdate(a)
            } else
                K.activeTexture(r.TEXTURE0 + b),
                K.bindTexture(r.TEXTURE_CUBE_MAP, c.__image__webglTextureCube)
    }
    function B(a, b) {
        K.activeTexture(r.TEXTURE0 + b);
        K.bindTexture(r.TEXTURE_CUBE_MAP, U.get(a).__webglTexture)
    }
    function G(a, b, c, d) {
        var e = L(b.texture.format)
          , g = L(b.texture.type);
        K.texImage2D(d, 0, e, b.width, b.height, 0, e, g, null);
        r.bindFramebuffer(r.FRAMEBUFFER, a);
        r.framebufferTexture2D(r.FRAMEBUFFER, c, d, U.get(b.texture).__webglTexture, 0);
        r.bindFramebuffer(r.FRAMEBUFFER, null)
    }
    function F(a, b) {
        r.bindRenderbuffer(r.RENDERBUFFER, a);
        b.depthBuffer && !b.stencilBuffer ? (r.renderbufferStorage(r.RENDERBUFFER, r.DEPTH_COMPONENT16, b.width, b.height),
        r.framebufferRenderbuffer(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.RENDERBUFFER, a)) : b.depthBuffer && b.stencilBuffer ? (r.renderbufferStorage(r.RENDERBUFFER, r.DEPTH_STENCIL, b.width, b.height),
        r.framebufferRenderbuffer(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.RENDERBUFFER, a)) : r.renderbufferStorage(r.RENDERBUFFER, r.RGBA4, b.width, b.height);
        r.bindRenderbuffer(r.RENDERBUFFER, null)
    }
    function H(a) {
        return a === THREE.NearestFilter || a === THREE.NearestMipMapNearestFilter || a === THREE.NearestMipMapLinearFilter ? r.NEAREST : r.LINEAR
    }
    function L(a) {
        var b;
        if (a === THREE.RepeatWrapping)
            return r.REPEAT;
        if (a === THREE.ClampToEdgeWrapping)
            return r.CLAMP_TO_EDGE;
        if (a === THREE.MirroredRepeatWrapping)
            return r.MIRRORED_REPEAT;
        if (a === THREE.NearestFilter)
            return r.NEAREST;
        if (a === THREE.NearestMipMapNearestFilter)
            return r.NEAREST_MIPMAP_NEAREST;
        if (a === THREE.NearestMipMapLinearFilter)
            return r.NEAREST_MIPMAP_LINEAR;
        if (a === THREE.LinearFilter)
            return r.LINEAR;
        if (a === THREE.LinearMipMapNearestFilter)
            return r.LINEAR_MIPMAP_NEAREST;
        if (a === THREE.LinearMipMapLinearFilter)
            return r.LINEAR_MIPMAP_LINEAR;
        if (a === THREE.UnsignedByteType)
            return r.UNSIGNED_BYTE;
        if (a === THREE.UnsignedShort4444Type)
            return r.UNSIGNED_SHORT_4_4_4_4;
        if (a === THREE.UnsignedShort5551Type)
            return r.UNSIGNED_SHORT_5_5_5_1;
        if (a === THREE.UnsignedShort565Type)
            return r.UNSIGNED_SHORT_5_6_5;
        if (a === THREE.ByteType)
            return r.BYTE;
        if (a === THREE.ShortType)
            return r.SHORT;
        if (a === THREE.UnsignedShortType)
            return r.UNSIGNED_SHORT;
        if (a === THREE.IntType)
            return r.INT;
        if (a === THREE.UnsignedIntType)
            return r.UNSIGNED_INT;
        if (a === THREE.FloatType)
            return r.FLOAT;
        b = V.get("OES_texture_half_float");
        if (null !== b && a === THREE.HalfFloatType)
            return b.HALF_FLOAT_OES;
        if (a === THREE.AlphaFormat)
            return r.ALPHA;
        if (a === THREE.RGBFormat)
            return r.RGB;
        if (a === THREE.RGBAFormat)
            return r.RGBA;
        if (a === THREE.LuminanceFormat)
            return r.LUMINANCE;
        if (a === THREE.LuminanceAlphaFormat)
            return r.LUMINANCE_ALPHA;
        if (a === THREE.AddEquation)
            return r.FUNC_ADD;
        if (a === THREE.SubtractEquation)
            return r.FUNC_SUBTRACT;
        if (a === THREE.ReverseSubtractEquation)
            return r.FUNC_REVERSE_SUBTRACT;
        if (a === THREE.ZeroFactor)
            return r.ZERO;
        if (a === THREE.OneFactor)
            return r.ONE;
        if (a === THREE.SrcColorFactor)
            return r.SRC_COLOR;
        if (a === THREE.OneMinusSrcColorFactor)
            return r.ONE_MINUS_SRC_COLOR;
        if (a === THREE.SrcAlphaFactor)
            return r.SRC_ALPHA;
        if (a === THREE.OneMinusSrcAlphaFactor)
            return r.ONE_MINUS_SRC_ALPHA;
        if (a === THREE.DstAlphaFactor)
            return r.DST_ALPHA;
        if (a === THREE.OneMinusDstAlphaFactor)
            return r.ONE_MINUS_DST_ALPHA;
        if (a === THREE.DstColorFactor)
            return r.DST_COLOR;
        if (a === THREE.OneMinusDstColorFactor)
            return r.ONE_MINUS_DST_COLOR;
        if (a === THREE.SrcAlphaSaturateFactor)
            return r.SRC_ALPHA_SATURATE;
        b = V.get("WEBGL_compressed_texture_s3tc");
        if (null !== b) {
            if (a === THREE.RGB_S3TC_DXT1_Format)
                return b.COMPRESSED_RGB_S3TC_DXT1_EXT;
            if (a === THREE.RGBA_S3TC_DXT1_Format)
                return b.COMPRESSED_RGBA_S3TC_DXT1_EXT;
            if (a === THREE.RGBA_S3TC_DXT3_Format)
                return b.COMPRESSED_RGBA_S3TC_DXT3_EXT;
            if (a === THREE.RGBA_S3TC_DXT5_Format)
                return b.COMPRESSED_RGBA_S3TC_DXT5_EXT
        }
        b = V.get("WEBGL_compressed_texture_pvrtc");
        if (null !== b) {
            if (a === THREE.RGB_PVRTC_4BPPV1_Format)
                return b.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
            if (a === THREE.RGB_PVRTC_2BPPV1_Format)
                return b.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
            if (a === THREE.RGBA_PVRTC_4BPPV1_Format)
                return b.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
            if (a === THREE.RGBA_PVRTC_2BPPV1_Format)
                return b.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
        }
        b = V.get("WEBGL_compressed_texture_etc1");
        if (null !== b && a === THREE.RGB_ETC1_Format)
            return b.COMPRESSED_RGB_ETC1_WEBGL;
        b = V.get("EXT_blend_minmax");
        if (null !== b) {
            if (a === THREE.MinEquation)
                return b.MIN_EXT;
            if (a === THREE.MaxEquation)
                return b.MAX_EXT
        }
        return 0
    }
    // console.log("THREE.WebGLRenderer", THREE.REVISION);
    a = a || {};
    var A = void 0 !== a.canvas ? a.canvas : document.createElement("canvas")
      , N = void 0 !== a.context ? a.context : null
      , M = void 0 !== a.alpha ? a.alpha : !1
      , I = void 0 !== a.depth ? a.depth : !0
      , O = void 0 !== a.stencil ? a.stencil : !0
      , Q = void 0 !== a.antialias ? a.antialias : !1
      , P = void 0 !== a.premultipliedAlpha ? a.premultipliedAlpha : !0
      , T = void 0 !== a.preserveDrawingBuffer ? a.preserveDrawingBuffer : !1
      , J = []
      , C = []
      , Z = -1
      , S = []
      , Y = -1
      , $ = new Float32Array(8)
      , ja = []
      , ea = [];
    this.domElement = A;
    this.context = null;
    this.sortObjects = this.autoClearStencil = this.autoClearDepth = this.autoClearColor = this.autoClear = !0;
    this.gammaFactor = 2;
    this.physicallyCorrectLights = this.gammaOutput = this.gammaInput = !1;
    this.toneMapping = THREE.LinearToneMapping;
    this.toneMappingWhitePoint = this.toneMappingExposure = 1;
    this.maxMorphTargets = 8;
    this.maxMorphNormals = 4;
    this.autoScaleCubemaps = !0;
    var X = this
      , ha = null
      , ca = null
      , ua = null
      , ra = -1
      , na = ""
      , ma = null
      , qa = new THREE.Vector4
      , Aa = null
      , ka = new THREE.Vector4
      , ta = 0
      , ba = new THREE.Color(0)
      , ga = 0
      , va = A.width
      , wa = A.height
      , aa = 1
      , ya = new THREE.Vector4(0,0,va,wa)
      , Ba = !1
      , la = new THREE.Vector4(0,0,va,wa)
      , za = new THREE.Frustum
      , sa = new THREE.Matrix4
      , W = new THREE.Vector3
      , R = {
        hash: "",
        ambient: [0, 0, 0],
        directional: [],
        directionalShadowMap: [],
        directionalShadowMatrix: [],
        spot: [],
        spotShadowMap: [],
        spotShadowMatrix: [],
        point: [],
        pointShadowMap: [],
        pointShadowMatrix: [],
        hemi: [],
        shadows: [],
        shadowsPointLight: 0
    }
      , ia = {
        geometries: 0,
        textures: 0
    }
      , fa = {
        calls: 0,
        vertices: 0,
        faces: 0,
        points: 0
    };
    this.info = {
        render: fa,
        memory: ia,
        programs: null
    };
    var r;
    try {
        M = {
            alpha: M,
            depth: I,
            stencil: O,
            antialias: Q,
            premultipliedAlpha: P,
            preserveDrawingBuffer: T
        };
        r = N || A.getContext("webgl", M) || A.getContext("experimental-webgl", M);
        if (null === r) {
            if (null !== A.getContext("webgl"))
                throw "Error creating WebGL context with your selected attributes.";
            throw "Error creating WebGL context.";
        }
        void 0 === r.getShaderPrecisionFormat && (r.getShaderPrecisionFormat = function() {
            return {
                rangeMin: 1,
                rangeMax: 1,
                precision: 1
            }
        }
        );
        A.addEventListener("webglcontextlost", e, !1)
    } catch (Da) {
        console.error("THREE.WebGLRenderer: " + Da)
    }
    var V = new THREE.WebGLExtensions(r);
    V.get("OES_texture_float");
    V.get("OES_texture_float_linear");
    V.get("OES_texture_half_float");
    V.get("OES_texture_half_float_linear");
    V.get("OES_standard_derivatives");
    V.get("ANGLE_instanced_arrays");
    V.get("OES_element_index_uint") && (THREE.BufferGeometry.MaxIndex = 4294967296);
    var da = new THREE.WebGLCapabilities(r,V,a)
      , K = new THREE.WebGLState(r,V,L)
      , U = new THREE.WebGLProperties
      , pa = new THREE.WebGLObjects(r,U,this.info)
      , oa = new THREE.WebGLPrograms(this,da)
      , xa = new THREE.WebGLLights;
    this.info.programs = oa.programs;
    var Ea = new THREE.WebGLBufferRenderer(r,V,fa)
      , Fa = new THREE.WebGLIndexedBufferRenderer(r,V,fa);
    c();
    this.context = r;
    this.capabilities = da;
    this.extensions = V;
    this.properties = U;
    this.state = K;
    var Ca = new THREE.WebGLShadowMap(this,R,pa);
    this.shadowMap = Ca;
    var Ga = new THREE.SpritePlugin(this,ja)
      , Ha = new THREE.LensFlarePlugin(this,ea);
    this.getContext = function() {
        return r
    }
    ;
    this.getContextAttributes = function() {
        return r.getContextAttributes()
    }
    ;
    this.forceContextLoss = function() {
        V.get("WEBGL_lose_context").loseContext()
    }
    ;
    this.getMaxAnisotropy = function() {
        var a;
        return function() {
            if (void 0 !== a)
                return a;
            var b = V.get("EXT_texture_filter_anisotropic");
            return a = null !== b ? r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
        }
    }();
    this.getPrecision = function() {
        return da.precision
    }
    ;
    this.getPixelRatio = function() {
        return aa
    }
    ;
    this.setPixelRatio = function(a) {
        void 0 !== a && (aa = a,
        this.setSize(la.z, la.w, !1))
    }
    ;
    this.getSize = function() {
        return {
            width: va,
            height: wa
        }
    }
    ;
    this.setSize = function(a, b, c) {
        va = a;
        wa = b;
        A.width = a * aa;
        A.height = b * aa;
        !1 !== c && (A.style.width = a + "px",
        A.style.height = b + "px");
        this.setViewport(0, 0, a, b)
    }
    ;
    this.setViewport = function(a, b, c, d) {
        K.viewport(la.set(a, b, c, d))
    }
    ;
    this.setScissor = function(a, b, c, d) {
        K.scissor(ya.set(a, b, c, d))
    }
    ;
    this.setScissorTest = function(a) {
        K.setScissorTest(Ba = a)
    }
    ;
    this.getClearColor = function() {
        return ba
    }
    ;
    this.setClearColor = function(a, c) {
        ba.set(a);
        ga = void 0 !== c ? c : 1;
        b(ba.r, ba.g, ba.b, ga)
    }
    ;
    this.getClearAlpha = function() {
        return ga
    }
    ;
    this.setClearAlpha = function(a) {
        ga = a;
        b(ba.r, ba.g, ba.b, ga)
    }
    ;
    this.clear = function(a, b, c) {
        var d = 0;
        if (void 0 === a || a)
            d |= r.COLOR_BUFFER_BIT;
        if (void 0 === b || b)
            d |= r.DEPTH_BUFFER_BIT;
        if (void 0 === c || c)
            d |= r.STENCIL_BUFFER_BIT;
        r.clear(d)
    }
    ;
    this.clearColor = function() {
        this.clear(!0, !1, !1)
    }
    ;
    this.clearDepth = function() {
        this.clear(!1, !0, !1)
    }
    ;
    this.clearStencil = function() {
        this.clear(!1, !1, !0)
    }
    ;
    this.clearTarget = function(a, b, c, d) {
        this.setRenderTarget(a);
        this.clear(b, c, d)
    }
    ;
    this.resetGLState = d;
    this.dispose = function() {
        A.removeEventListener("webglcontextlost", e, !1)
    }
    ;
    this.renderBufferImmediate = function(a, b, c) {
        K.initAttributes();
        var d = U.get(a);
        a.hasPositions && !d.position && (d.position = r.createBuffer());
        a.hasNormals && !d.normal && (d.normal = r.createBuffer());
        a.hasUvs && !d.uv && (d.uv = r.createBuffer());
        a.hasColors && !d.color && (d.color = r.createBuffer());
        b = b.getAttributes();
        a.hasPositions && (r.bindBuffer(r.ARRAY_BUFFER, d.position),
        r.bufferData(r.ARRAY_BUFFER, a.positionArray, r.DYNAMIC_DRAW),
        K.enableAttribute(b.position),
        r.vertexAttribPointer(b.position, 3, r.FLOAT, !1, 0, 0));
        if (a.hasNormals) {
            r.bindBuffer(r.ARRAY_BUFFER, d.normal);
            if ("MeshPhongMaterial" !== c.type && "MeshStandardMaterial" !== c.type && c.shading === THREE.FlatShading)
                for (var e = 0, g = 3 * a.count; e < g; e += 9) {
                    var f = a.normalArray
                      , h = (f[e + 0] + f[e + 3] + f[e + 6]) / 3
                      , k = (f[e + 1] + f[e + 4] + f[e + 7]) / 3
                      , l = (f[e + 2] + f[e + 5] + f[e + 8]) / 3;
                    f[e + 0] = h;
                    f[e + 1] = k;
                    f[e + 2] = l;
                    f[e + 3] = h;
                    f[e + 4] = k;
                    f[e + 5] = l;
                    f[e + 6] = h;
                    f[e + 7] = k;
                    f[e + 8] = l
                }
            r.bufferData(r.ARRAY_BUFFER, a.normalArray, r.DYNAMIC_DRAW);
            K.enableAttribute(b.normal);
            r.vertexAttribPointer(b.normal, 3, r.FLOAT, !1, 0, 0)
        }
        a.hasUvs && c.map && (r.bindBuffer(r.ARRAY_BUFFER, d.uv),
        r.bufferData(r.ARRAY_BUFFER, a.uvArray, r.DYNAMIC_DRAW),
        K.enableAttribute(b.uv),
        r.vertexAttribPointer(b.uv, 2, r.FLOAT, !1, 0, 0));
        a.hasColors && c.vertexColors !== THREE.NoColors && (r.bindBuffer(r.ARRAY_BUFFER, d.color),
        r.bufferData(r.ARRAY_BUFFER, a.colorArray, r.DYNAMIC_DRAW),
        K.enableAttribute(b.color),
        r.vertexAttribPointer(b.color, 3, r.FLOAT, !1, 0, 0));
        K.disableUnusedAttributes();
        r.drawArrays(r.TRIANGLES, 0, a.count);
        a.count = 0
    }
    ;
    this.renderBufferDirect = function(a, b, c, d, e, g) {
        v(d);
        var f = t(a, b, d, e)
          , h = !1;
        a = c.id + "_" + f.id + "_" + d.wireframe;
        a !== na && (na = a,
        h = !0);
        b = e.morphTargetInfluences;
        if (void 0 !== b) {
            a = [];
            for (var k = 0, h = b.length; k < h; k++) {
                var m = b[k];
                a.push([m, k])
            }
            a.sort(l);
            8 < a.length && (a.length = 8);
            for (var n = c.morphAttributes, k = 0, h = a.length; k < h; k++)
                m = a[k],
                $[k] = m[0],
                0 !== m[0] ? (b = m[1],
                !0 === d.morphTargets && n.position && c.addAttribute("morphTarget" + k, n.position[b]),
                !0 === d.morphNormals && n.normal && c.addAttribute("morphNormal" + k, n.normal[b])) : (!0 === d.morphTargets && c.removeAttribute("morphTarget" + k),
                !0 === d.morphNormals && c.removeAttribute("morphNormal" + k));
            a = f.getUniforms();
            null !== a.morphTargetInfluences && r.uniform1fv(a.morphTargetInfluences, $);
            h = !0
        }
        b = c.index;
        k = c.attributes.position;
        !0 === d.wireframe && (b = pa.getWireframeAttribute(c));
        null !== b ? (a = Fa,
        a.setIndex(b)) : a = Ea;
        if (h) {
            a: {
                var h = void 0, p;
                if (c instanceof THREE.InstancedBufferGeometry && (p = V.get("ANGLE_instanced_arrays"),
                null === p)) {
                    console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
                    break a
                }
                void 0 === h && (h = 0);
                K.initAttributes();
                var m = c.attributes, f = f.getAttributes(), n = d.defaultAttributeValues, q;
                for (q in f) {
                    var s = f[q];
                    if (0 <= s) {
                        var u = m[q];
                        if (void 0 !== u) {
                            var x = u.itemSize
                              , w = pa.getAttributeBuffer(u);
                            if (u instanceof THREE.InterleavedBufferAttribute) {
                                var E = u.data
                                  , z = E.stride
                                  , u = u.offset;
                                E instanceof THREE.InstancedInterleavedBuffer ? (K.enableAttributeAndDivisor(s, E.meshPerAttribute, p),
                                void 0 === c.maxInstancedCount && (c.maxInstancedCount = E.meshPerAttribute * E.count)) : K.enableAttribute(s);
                                r.bindBuffer(r.ARRAY_BUFFER, w);
                                r.vertexAttribPointer(s, x, r.FLOAT, !1, z * E.array.BYTES_PER_ELEMENT, (h * z + u) * E.array.BYTES_PER_ELEMENT)
                            } else
                                u instanceof THREE.InstancedBufferAttribute ? (K.enableAttributeAndDivisor(s, u.meshPerAttribute, p),
                                void 0 === c.maxInstancedCount && (c.maxInstancedCount = u.meshPerAttribute * u.count)) : K.enableAttribute(s),
                                r.bindBuffer(r.ARRAY_BUFFER, w),
                                r.vertexAttribPointer(s, x, r.FLOAT, !1, 0, h * x * 4)
                        } else if (void 0 !== n && (x = n[q],
                        void 0 !== x))
                            switch (x.length) {
                            case 2:
                                r.vertexAttrib2fv(s, x);
                                break;
                            case 3:
                                r.vertexAttrib3fv(s, x);
                                break;
                            case 4:
                                r.vertexAttrib4fv(s, x);
                                break;
                            default:
                                r.vertexAttrib1fv(s, x)
                            }
                    }
                }
                K.disableUnusedAttributes()
            }
            null !== b && r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, pa.getAttributeBuffer(b))
        }
        p = Infinity;
        null !== b ? p = b.count : void 0 !== k && (p = k.count);
        q = c.drawRange.start;
        b = c.drawRange.count;
        k = null !== g ? g.start : 0;
        h = null !== g ? g.count : Infinity;
        g = Math.max(0, q, k);
        p = Math.min(0 + p, q + b, k + h) - 1;
        p = Math.max(0, p - g + 1);
        if (e instanceof THREE.Mesh)
            if (!0 === d.wireframe)
                K.setLineWidth(d.wireframeLinewidth * (null === ca ? aa : 1)),
                a.setMode(r.LINES);
            else
                switch (e.drawMode) {
                case THREE.TrianglesDrawMode:
                    a.setMode(r.TRIANGLES);
                    break;
                case THREE.TriangleStripDrawMode:
                    a.setMode(r.TRIANGLE_STRIP);
                    break;
                case THREE.TriangleFanDrawMode:
                    a.setMode(r.TRIANGLE_FAN)
                }
        else
            e instanceof THREE.Line ? (d = d.linewidth,
            void 0 === d && (d = 1),
            K.setLineWidth(d * (null === ca ? aa : 1)),
            e instanceof THREE.LineSegments ? a.setMode(r.LINES) : a.setMode(r.LINE_STRIP)) : e instanceof THREE.Points && a.setMode(r.POINTS);
        c instanceof THREE.InstancedBufferGeometry ? 0 < c.maxInstancedCount && a.renderInstances(c, g, p) : a.render(g, p)
    }
    ;
    this.render = function(a, b, c, d) {
        if (!1 === b instanceof THREE.Camera)
            console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        else {
            var e = a.fog;
            na = "";
            ra = -1;
            ma = null;
            !0 === a.autoUpdate && a.updateMatrixWorld();
            null === b.parent && b.updateMatrixWorld();
            b.matrixWorldInverse.getInverse(b.matrixWorld);
            sa.multiplyMatrices(b.projectionMatrix, b.matrixWorldInverse);
            za.setFromMatrix(sa);
            J.length = 0;
            Y = Z = -1;
            ja.length = 0;
            ea.length = 0;
            q(a, b);
            C.length = Z + 1;
            S.length = Y + 1;
            !0 === X.sortObjects && (C.sort(p),
            S.sort(n));
            var g = J, f, h, k, l = 0, m = 0, s = 0, t, v, x, w = b.matrixWorldInverse, $ = 0, E = 0, y = 0, D = 0, B = 0;
            f = R.shadowsPointLight = 0;
            for (h = g.length; f < h; f++)
                if (k = g[f],
                t = k.color,
                v = k.intensity,
                x = k.distance,
                k instanceof THREE.AmbientLight)
                    l += t.r * v,
                    m += t.g * v,
                    s += t.b * v;
                else if (k instanceof THREE.DirectionalLight) {
                    var A = xa.get(k);
                    A.color.copy(k.color).multiplyScalar(k.intensity);
                    A.direction.setFromMatrixPosition(k.matrixWorld);
                    W.setFromMatrixPosition(k.target.matrixWorld);
                    A.direction.sub(W);
                    A.direction.transformDirection(w);
                    if (A.shadow = k.castShadow)
                        A.shadowBias = k.shadow.bias,
                        A.shadowRadius = k.shadow.radius,
                        A.shadowMapSize = k.shadow.mapSize,
                        R.shadows[B++] = k;
                    R.directionalShadowMap[$] = k.shadow.map;
                    R.directionalShadowMatrix[$] = k.shadow.matrix;
                    R.directional[$++] = A
                } else if (k instanceof THREE.SpotLight) {
                    A = xa.get(k);
                    A.position.setFromMatrixPosition(k.matrixWorld);
                    A.position.applyMatrix4(w);
                    A.color.copy(t).multiplyScalar(v);
                    A.distance = x;
                    A.direction.setFromMatrixPosition(k.matrixWorld);
                    W.setFromMatrixPosition(k.target.matrixWorld);
                    A.direction.sub(W);
                    A.direction.transformDirection(w);
                    A.coneCos = Math.cos(k.angle);
                    A.penumbraCos = Math.cos(k.angle * (1 - k.penumbra));
                    A.decay = 0 === k.distance ? 0 : k.decay;
                    if (A.shadow = k.castShadow)
                        A.shadowBias = k.shadow.bias,
                        A.shadowRadius = k.shadow.radius,
                        A.shadowMapSize = k.shadow.mapSize,
                        R.shadows[B++] = k;
                    R.spotShadowMap[y] = k.shadow.map;
                    R.spotShadowMatrix[y] = k.shadow.matrix;
                    R.spot[y++] = A
                } else if (k instanceof THREE.PointLight) {
                    A = xa.get(k);
                    A.position.setFromMatrixPosition(k.matrixWorld);
                    A.position.applyMatrix4(w);
                    A.color.copy(k.color).multiplyScalar(k.intensity);
                    A.distance = k.distance;
                    A.decay = 0 === k.distance ? 0 : k.decay;
                    if (A.shadow = k.castShadow)
                        A.shadowBias = k.shadow.bias,
                        A.shadowRadius = k.shadow.radius,
                        A.shadowMapSize = k.shadow.mapSize,
                        R.shadows[B++] = k;
                    R.pointShadowMap[E] = k.shadow.map;
                    void 0 === R.pointShadowMatrix[E] && (R.pointShadowMatrix[E] = new THREE.Matrix4);
                    W.setFromMatrixPosition(k.matrixWorld).negate();
                    R.pointShadowMatrix[E].identity().setPosition(W);
                    R.point[E++] = A
                } else
                    k instanceof THREE.HemisphereLight && (A = xa.get(k),
                    A.direction.setFromMatrixPosition(k.matrixWorld),
                    A.direction.transformDirection(w),
                    A.direction.normalize(),
                    A.skyColor.copy(k.color).multiplyScalar(v),
                    A.groundColor.copy(k.groundColor).multiplyScalar(v),
                    R.hemi[D++] = A);
            R.ambient[0] = l;
            R.ambient[1] = m;
            R.ambient[2] = s;
            R.directional.length = $;
            R.spot.length = y;
            R.point.length = E;
            R.hemi.length = D;
            R.shadows.length = B;
            R.hash = $ + "," + E + "," + y + "," + D + "," + B;
            Ca.render(a, b);
            fa.calls = 0;
            fa.vertices = 0;
            fa.faces = 0;
            fa.points = 0;
            void 0 === c && (c = null);
            this.setRenderTarget(c);
            (this.autoClear || d) && this.clear(this.autoClearColor, this.autoClearDepth, this.autoClearStencil);
            a.overrideMaterial ? (d = a.overrideMaterial,
            u(C, b, e, d),
            u(S, b, e, d)) : (K.setBlending(THREE.NoBlending),
            u(C, b, e),
            u(S, b, e));
            Ga.render(a, b);
            Ha.render(a, b, ka);
            c && (a = c.texture,
            a.generateMipmaps && z(c) && a.minFilter !== THREE.NearestFilter && a.minFilter !== THREE.LinearFilter && (a = c instanceof THREE.WebGLRenderTargetCube ? r.TEXTURE_CUBE_MAP : r.TEXTURE_2D,
            c = U.get(c.texture).__webglTexture,
            K.bindTexture(a, c),
            r.generateMipmap(a),
            K.bindTexture(a, null)));
            K.setDepthTest(!0);
            K.setDepthWrite(!0);
            K.setColorWrite(!0)
        }
    }
    ;
    this.setFaceCulling = function(a, b) {
        a === THREE.CullFaceNone ? K.disable(r.CULL_FACE) : (b === THREE.FrontFaceDirectionCW ? r.frontFace(r.CW) : r.frontFace(r.CCW),
        a === THREE.CullFaceBack ? r.cullFace(r.BACK) : a === THREE.CullFaceFront ? r.cullFace(r.FRONT) : r.cullFace(r.FRONT_AND_BACK),
        K.enable(r.CULL_FACE))
    }
    ;
    this.setTexture = function(a, b) {
        var c = U.get(a);
        if (0 < a.version && c.__version !== a.version) {
            var d = a.image;
            if (void 0 === d)
                console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined", a);
            else if (!1 === d.complete)
                console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete", a);
            else {
                void 0 === c.__webglInit && (c.__webglInit = !0,
                a.addEventListener("dispose", f),
                c.__webglTexture = r.createTexture(),
                ia.textures++);
                K.activeTexture(r.TEXTURE0 + b);
                K.bindTexture(r.TEXTURE_2D, c.__webglTexture);
                r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, a.flipY);
                r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, a.premultiplyAlpha);
                r.pixelStorei(r.UNPACK_ALIGNMENT, a.unpackAlignment);
                var e = D(a.image, da.maxTextureSize);
                if ((a.wrapS !== THREE.ClampToEdgeWrapping || a.wrapT !== THREE.ClampToEdgeWrapping || a.minFilter !== THREE.NearestFilter && a.minFilter !== THREE.LinearFilter) && !1 === z(e))
                    if (d = e,
                    d instanceof HTMLImageElement || d instanceof HTMLCanvasElement) {
                        var g = document.createElement("canvas");
                        g.width = THREE.Math.nearestPowerOfTwo(d.width);
                        g.height = THREE.Math.nearestPowerOfTwo(d.height);
                        g.getContext("2d").drawImage(d, 0, 0, g.width, g.height);
                        console.warn("THREE.WebGLRenderer: image is not power of two (" + d.width + "x" + d.height + "). Resized to " + g.width + "x" + g.height, d);
                        e = g
                    } else
                        e = d;
                var d = z(e)
                  , g = L(a.format)
                  , h = L(a.type);
                x(r.TEXTURE_2D, a, d);
                var k = a.mipmaps;
                if (a instanceof THREE.DataTexture)
                    if (0 < k.length && d) {
                        for (var l = 0, m = k.length; l < m; l++)
                            e = k[l],
                            K.texImage2D(r.TEXTURE_2D, l, g, e.width, e.height, 0, g, h, e.data);
                        a.generateMipmaps = !1
                    } else
                        K.texImage2D(r.TEXTURE_2D, 0, g, e.width, e.height, 0, g, h, e.data);
                else if (a instanceof THREE.CompressedTexture)
                    for (l = 0,
                    m = k.length; l < m; l++)
                        e = k[l],
                        a.format !== THREE.RGBAFormat && a.format !== THREE.RGBFormat ? -1 < K.getCompressedTextureFormats().indexOf(g) ? K.compressedTexImage2D(r.TEXTURE_2D, l, g, e.width, e.height, 0, e.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : K.texImage2D(r.TEXTURE_2D, l, g, e.width, e.height, 0, g, h, e.data);
                else if (0 < k.length && d) {
                    l = 0;
                    for (m = k.length; l < m; l++)
                        e = k[l],
                        K.texImage2D(r.TEXTURE_2D, l, g, g, h, e);
                    a.generateMipmaps = !1
                } else
                    K.texImage2D(r.TEXTURE_2D, 0, g, g, h, e);
                a.generateMipmaps && d && r.generateMipmap(r.TEXTURE_2D);
                c.__version = a.version;
                if (a.onUpdate)
                    a.onUpdate(a)
            }
        } else
            K.activeTexture(r.TEXTURE0 + b),
            K.bindTexture(r.TEXTURE_2D, c.__webglTexture)
    }
    ;
    this.getCurrentRenderTarget = function() {
        return ca
    }
    ;
    this.setRenderTarget = function(a) {
        if ((ca = a) && void 0 === U.get(a).__webglFramebuffer) {
            var b = U.get(a)
              , c = U.get(a.texture);
            a.addEventListener("dispose", g);
            c.__webglTexture = r.createTexture();
            ia.textures++;
            var d = a instanceof THREE.WebGLRenderTargetCube
              , e = THREE.Math.isPowerOfTwo(a.width) && THREE.Math.isPowerOfTwo(a.height);
            if (d) {
                b.__webglFramebuffer = [];
                for (var f = 0; 6 > f; f++)
                    b.__webglFramebuffer[f] = r.createFramebuffer()
            } else
                b.__webglFramebuffer = r.createFramebuffer();
            if (d) {
                K.bindTexture(r.TEXTURE_CUBE_MAP, c.__webglTexture);
                x(r.TEXTURE_CUBE_MAP, a.texture, e);
                for (f = 0; 6 > f; f++)
                    G(b.__webglFramebuffer[f], a, r.COLOR_ATTACHMENT0, r.TEXTURE_CUBE_MAP_POSITIVE_X + f);
                a.texture.generateMipmaps && e && r.generateMipmap(r.TEXTURE_CUBE_MAP);
                K.bindTexture(r.TEXTURE_CUBE_MAP, null)
            } else
                K.bindTexture(r.TEXTURE_2D, c.__webglTexture),
                x(r.TEXTURE_2D, a.texture, e),
                G(b.__webglFramebuffer, a, r.COLOR_ATTACHMENT0, r.TEXTURE_2D),
                a.texture.generateMipmaps && e && r.generateMipmap(r.TEXTURE_2D),
                K.bindTexture(r.TEXTURE_2D, null);
            if (a.depthBuffer) {
                b = U.get(a);
                if (a instanceof THREE.WebGLRenderTargetCube)
                    for (b.__webglDepthbuffer = [],
                    c = 0; 6 > c; c++)
                        r.bindFramebuffer(r.FRAMEBUFFER, b.__webglFramebuffer[c]),
                        b.__webglDepthbuffer[c] = r.createRenderbuffer(),
                        F(b.__webglDepthbuffer[c], a);
                else
                    r.bindFramebuffer(r.FRAMEBUFFER, b.__webglFramebuffer),
                    b.__webglDepthbuffer = r.createRenderbuffer(),
                    F(b.__webglDepthbuffer, a);
                r.bindFramebuffer(r.FRAMEBUFFER, null)
            }
        }
        b = a instanceof THREE.WebGLRenderTargetCube;
        a ? (c = U.get(a),
        c = b ? c.__webglFramebuffer[a.activeCubeFace] : c.__webglFramebuffer,
        qa.copy(a.scissor),
        Aa = a.scissorTest,
        ka.copy(a.viewport)) : (c = null,
        qa.copy(ya).multiplyScalar(aa),
        Aa = Ba,
        ka.copy(la).multiplyScalar(aa));
        ua !== c && (r.bindFramebuffer(r.FRAMEBUFFER, c),
        ua = c);
        K.scissor(qa);
        K.setScissorTest(Aa);
        K.viewport(ka);
        b && (b = U.get(a.texture),
        r.framebufferTexture2D(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_CUBE_MAP_POSITIVE_X + a.activeCubeFace, b.__webglTexture, a.activeMipMapLevel))
    }
    ;
    this.readRenderTargetPixels = function(a, b, c, d, e, g) {
        if (!1 === a instanceof THREE.WebGLRenderTarget)
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        else {
            var f = U.get(a).__webglFramebuffer;
            if (f) {
                var h = !1;
                f !== ua && (r.bindFramebuffer(r.FRAMEBUFFER, f),
                h = !0);
                try {
                    var k = a.texture;
                    k.format !== THREE.RGBAFormat && L(k.format) !== r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT) ? console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.") : k.type === THREE.UnsignedByteType || L(k.type) === r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE) || k.type === THREE.FloatType && V.get("WEBGL_color_buffer_float") || k.type === THREE.HalfFloatType && V.get("EXT_color_buffer_half_float") ? r.checkFramebufferStatus(r.FRAMEBUFFER) === r.FRAMEBUFFER_COMPLETE ? r.readPixels(b, c, d, e, L(k.format), L(k.type), g) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.") : console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.")
                } finally {
                    h && r.bindFramebuffer(r.FRAMEBUFFER, ua)
                }
            }
        }
    }
}
;
THREE.WebGLRenderTarget = function(a, b, c) {
    this.uuid = THREE.Math.generateUUID();
    this.width = a;
    this.height = b;
    this.scissor = new THREE.Vector4(0,0,a,b);
    this.scissorTest = !1;
    this.viewport = new THREE.Vector4(0,0,a,b);
    c = c || {};
    void 0 === c.minFilter && (c.minFilter = THREE.LinearFilter);
    this.texture = new THREE.Texture(void 0,void 0,c.wrapS,c.wrapT,c.magFilter,c.minFilter,c.format,c.type,c.anisotropy);
    this.depthBuffer = void 0 !== c.depthBuffer ? c.depthBuffer : !0;
    this.stencilBuffer = void 0 !== c.stencilBuffer ? c.stencilBuffer : !0
}
;
THREE.WebGLRenderTarget.prototype = {
    constructor: THREE.WebGLRenderTarget,
    setSize: function(a, b) {
        if (this.width !== a || this.height !== b)
            this.width = a,
            this.height = b,
            this.dispose();
        this.viewport.set(0, 0, a, b);
        this.scissor.set(0, 0, a, b)
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(a) {
        this.width = a.width;
        this.height = a.height;
        this.viewport.copy(a.viewport);
        this.texture = a.texture.clone();
        this.depthBuffer = a.depthBuffer;
        this.stencilBuffer = a.stencilBuffer;
        return this
    },
    dispose: function() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
};
THREE.EventDispatcher.prototype.apply(THREE.WebGLRenderTarget.prototype);
THREE.WebGLRenderTargetCube = function(a, b, c) {
    THREE.WebGLRenderTarget.call(this, a, b, c);
    this.activeMipMapLevel = this.activeCubeFace = 0
}
;
THREE.WebGLRenderTargetCube.prototype = Object.create(THREE.WebGLRenderTarget.prototype);
THREE.WebGLRenderTargetCube.prototype.constructor = THREE.WebGLRenderTargetCube;
THREE.WebGLBufferRenderer = function(a, b, c) {
    var d;
    this.setMode = function(a) {
        d = a
    }
    ;
    this.render = function(b, f) {
        a.drawArrays(d, b, f);
        c.calls++;
        c.vertices += f;
        d === a.TRIANGLES && (c.faces += f / 3)
    }
    ;
    this.renderInstances = function(e) {
        var f = b.get("ANGLE_instanced_arrays");
        if (null === f)
            console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
        else {
            var g = e.attributes.position
              , h = 0
              , h = g instanceof THREE.InterleavedBufferAttribute ? g.data.count : g.count;
            f.drawArraysInstancedANGLE(d, 0, h, e.maxInstancedCount);
            c.calls++;
            c.vertices += h * e.maxInstancedCount;
            d === a.TRIANGLES && (c.faces += e.maxInstancedCount * h / 3)
        }
    }
}
;
THREE.WebGLIndexedBufferRenderer = function(a, b, c) {
    var d, e, f;
    this.setMode = function(a) {
        d = a
    }
    ;
    this.setIndex = function(c) {
        c.array instanceof Uint32Array && b.get("OES_element_index_uint") ? (e = a.UNSIGNED_INT,
        f = 4) : (e = a.UNSIGNED_SHORT,
        f = 2)
    }
    ;
    this.render = function(b, h) {
        a.drawElements(d, h, e, b * f);
        c.calls++;
        c.vertices += h;
        d === a.TRIANGLES && (c.faces += h / 3)
    }
    ;
    this.renderInstances = function(g, h, k) {
        var l = b.get("ANGLE_instanced_arrays");
        null === l ? console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.") : (l.drawElementsInstancedANGLE(d, k, e, h * f, g.maxInstancedCount),
        c.calls++,
        c.vertices += k * g.maxInstancedCount,
        d === a.TRIANGLES && (c.faces += g.maxInstancedCount * k / 3))
    }
}
;
THREE.WebGLExtensions = function(a) {
    var b = {};
    this.get = function(c) {
        if (void 0 !== b[c])
            return b[c];
        var d;
        switch (c) {
        case "EXT_texture_filter_anisotropic":
            d = a.getExtension("EXT_texture_filter_anisotropic") || a.getExtension("MOZ_EXT_texture_filter_anisotropic") || a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
            break;
        case "WEBGL_compressed_texture_s3tc":
            d = a.getExtension("WEBGL_compressed_texture_s3tc") || a.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
            break;
        case "WEBGL_compressed_texture_pvrtc":
            d = a.getExtension("WEBGL_compressed_texture_pvrtc") || a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
            break;
        case "WEBGL_compressed_texture_etc1":
            d = a.getExtension("WEBGL_compressed_texture_etc1");
            break;
        default:
            d = a.getExtension(c)
        }
        null === d && console.warn("THREE.WebGLRenderer: " + c + " extension not supported.");
        return b[c] = d
    }
}
;
THREE.WebGLCapabilities = function(a, b, c) {
    function d(b) {
        if ("highp" === b) {
            if (0 < a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT).precision && 0 < a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT).precision)
                return "highp";
            b = "mediump"
        }
        return "mediump" === b && 0 < a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT).precision && 0 < a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT).precision ? "mediump" : "lowp"
    }
    this.getMaxPrecision = d;
    this.precision = void 0 !== c.precision ? c.precision : "highp";
    this.logarithmicDepthBuffer = void 0 !== c.logarithmicDepthBuffer ? c.logarithmicDepthBuffer : !1;
    this.maxTextures = a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS);
    this.maxVertexTextures = a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS);
    this.maxTextureSize = a.getParameter(a.MAX_TEXTURE_SIZE);
    this.maxCubemapSize = a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE);
    this.maxAttributes = a.getParameter(a.MAX_VERTEX_ATTRIBS);
    this.maxVertexUniforms = a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS);
    this.maxVaryings = a.getParameter(a.MAX_VARYING_VECTORS);
    this.maxFragmentUniforms = a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS);
    this.vertexTextures = 0 < this.maxVertexTextures;
    this.floatFragmentTextures = !!b.get("OES_texture_float");
    this.floatVertexTextures = this.vertexTextures && this.floatFragmentTextures;
    c = d(this.precision);
    c !== this.precision && (console.warn("THREE.WebGLRenderer:", this.precision, "not supported, using", c, "instead."),
    this.precision = c);
    this.logarithmicDepthBuffer && (this.logarithmicDepthBuffer = !!b.get("EXT_frag_depth"))
}
;
THREE.WebGLGeometries = function(a, b, c) {
    function d(a) {
        var h = a.target;
        a = f[h.id];
        null !== a.index && e(a.index);
        var k = a.attributes, l;
        for (l in k)
            e(k[l]);
        h.removeEventListener("dispose", d);
        delete f[h.id];
        l = b.get(h);
        l.wireframe && e(l.wireframe);
        b.delete(h);
        h = b.get(a);
        h.wireframe && e(h.wireframe);
        b.delete(a);
        c.memory.geometries--
    }
    function e(c) {
        var d;
        d = c instanceof THREE.InterleavedBufferAttribute ? b.get(c.data).__webglBuffer : b.get(c).__webglBuffer;
        void 0 !== d && (a.deleteBuffer(d),
        c instanceof THREE.InterleavedBufferAttribute ? b.delete(c.data) : b.delete(c))
    }
    var f = {};
    this.get = function(a) {
        var b = a.geometry;
        if (void 0 !== f[b.id])
            return f[b.id];
        b.addEventListener("dispose", d);
        var e;
        b instanceof THREE.BufferGeometry ? e = b : b instanceof THREE.Geometry && (void 0 === b._bufferGeometry && (b._bufferGeometry = (new THREE.BufferGeometry).setFromObject(a)),
        e = b._bufferGeometry);
        f[b.id] = e;
        c.memory.geometries++;
        return e
    }
}
;
THREE.WebGLLights = function() {
    var a = {};
    this.get = function(b) {
        if (void 0 !== a[b.id])
            return a[b.id];
        var c;
        switch (b.type) {
        case "DirectionalLight":
            c = {
                direction: new THREE.Vector3,
                color: new THREE.Color,
                shadow: !1,
                shadowBias: 0,
                shadowRadius: 1,
                shadowMapSize: new THREE.Vector2
            };
            break;
        case "SpotLight":
            c = {
                position: new THREE.Vector3,
                direction: new THREE.Vector3,
                color: new THREE.Color,
                distance: 0,
                coneCos: 0,
                penumbraCos: 0,
                decay: 0,
                shadow: !1,
                shadowBias: 0,
                shadowRadius: 1,
                shadowMapSize: new THREE.Vector2
            };
            break;
        case "PointLight":
            c = {
                position: new THREE.Vector3,
                color: new THREE.Color,
                distance: 0,
                decay: 0,
                shadow: !1,
                shadowBias: 0,
                shadowRadius: 1,
                shadowMapSize: new THREE.Vector2
            };
            break;
        case "HemisphereLight":
            c = {
                direction: new THREE.Vector3,
                skyColor: new THREE.Color,
                groundColor: new THREE.Color
            }
        }
        return a[b.id] = c
    }
}
;
THREE.WebGLObjects = function(a, b, c) {
    function d(c, d) {
        var e = c instanceof THREE.InterleavedBufferAttribute ? c.data : c
          , f = b.get(e);
        void 0 === f.__webglBuffer ? (f.__webglBuffer = a.createBuffer(),
        a.bindBuffer(d, f.__webglBuffer),
        a.bufferData(d, e.array, e.dynamic ? a.DYNAMIC_DRAW : a.STATIC_DRAW),
        f.version = e.version) : f.version !== e.version && (a.bindBuffer(d, f.__webglBuffer),
        !1 === e.dynamic || -1 === e.updateRange.count ? a.bufferSubData(d, 0, e.array) : 0 === e.updateRange.count ? console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually.") : (a.bufferSubData(d, e.updateRange.offset * e.array.BYTES_PER_ELEMENT, e.array.subarray(e.updateRange.offset, e.updateRange.offset + e.updateRange.count)),
        e.updateRange.count = 0),
        f.version = e.version)
    }
    function e(a, b, c) {
        if (b > c) {
            var d = b;
            b = c;
            c = d
        }
        d = a[b];
        return void 0 === d ? (a[b] = [c],
        !0) : -1 === d.indexOf(c) ? (d.push(c),
        !0) : !1
    }
    var f = new THREE.WebGLGeometries(a,b,c);
    this.getAttributeBuffer = function(a) {
        return a instanceof THREE.InterleavedBufferAttribute ? b.get(a.data).__webglBuffer : b.get(a).__webglBuffer
    }
    ;
    this.getWireframeAttribute = function(c) {
        var f = b.get(c);
        if (void 0 !== f.wireframe)
            return f.wireframe;
        var k = []
          , l = c.index
          , p = c.attributes;
        c = p.position;
        if (null !== l)
            for (var p = {}, l = l.array, n = 0, m = l.length; n < m; n += 3) {
                var q = l[n + 0]
                  , u = l[n + 1]
                  , v = l[n + 2];
                e(p, q, u) && k.push(q, u);
                e(p, u, v) && k.push(u, v);
                e(p, v, q) && k.push(v, q)
            }
        else
            for (l = p.position.array,
            n = 0,
            m = l.length / 3 - 1; n < m; n += 3)
                q = n + 0,
                u = n + 1,
                v = n + 2,
                k.push(q, u, u, v, v, q);
        k = new THREE.BufferAttribute(new (65535 < c.count ? Uint32Array : Uint16Array)(k),1);
        d(k, a.ELEMENT_ARRAY_BUFFER);
        return f.wireframe = k
    }
    ;
    this.update = function(b) {
        var c = f.get(b);
        b.geometry instanceof THREE.Geometry && c.updateFromObject(b);
        b = c.index;
        var e = c.attributes;
        null !== b && d(b, a.ELEMENT_ARRAY_BUFFER);
        for (var l in e)
            d(e[l], a.ARRAY_BUFFER);
        b = c.morphAttributes;
        for (l in b)
            for (var e = b[l], p = 0, n = e.length; p < n; p++)
                d(e[p], a.ARRAY_BUFFER);
        return c
    }
}
;
THREE.WebGLProgram = function() {
    function a(a) {
        switch (a) {
        case THREE.LinearEncoding:
            return ["Linear", "( value )"];
        case THREE.sRGBEncoding:
            return ["sRGB", "( value )"];
        case THREE.RGBEEncoding:
            return ["RGBE", "( value )"];
        case THREE.RGBM7Encoding:
            return ["RGBM", "( value, 7.0 )"];
        case THREE.RGBM16Encoding:
            return ["RGBM", "( value, 16.0 )"];
        case THREE.RGBDEncoding:
            return ["RGBD", "( value, 256.0 )"];
        case THREE.GammaEncoding:
            return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
        default:
            throw Error("unsupported encoding: " + a);
        }
    }
    function b(b, c) {
        var d = a(c);
        return "vec4 " + b + "( vec4 value ) { return " + d[0] + "ToLinear" + d[1] + "; }"
    }
    function c(b, c) {
        var d = a(c);
        return "vec4 " + b + "( vec4 value ) { return LinearTo" + d[0] + d[1] + "; }"
    }
    function d(a, b) {
        var c;
        switch (b) {
        case THREE.LinearToneMapping:
            c = "Linear";
            break;
        case THREE.ReinhardToneMapping:
            c = "Reinhard";
            break;
        case THREE.Uncharted2ToneMapping:
            c = "Uncharted2";
            break;
        case THREE.CineonToneMapping:
            c = "OptimizedCineon";
            break;
        default:
            throw Error("unsupported toneMapping: " + b);
        }
        return "vec3 " + a + "( vec3 color ) { return " + c + "ToneMapping( color ); }"
    }
    function e(a, b, c) {
        a = a || {};
        return [a.derivatives || b.envMapCubeUV || b.bumpMap || b.normalMap || b.flatShading ? "#extension GL_OES_standard_derivatives : enable" : "", (a.fragDepth || b.logarithmicDepthBuffer) && c.get("EXT_frag_depth") ? "#extension GL_EXT_frag_depth : enable" : "", a.drawBuffers && c.get("WEBGL_draw_buffers") ? "#extension GL_EXT_draw_buffers : require" : "", (a.shaderTextureLOD || b.envMap) && c.get("EXT_shader_texture_lod") ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(g).join("\n")
    }
    function f(a) {
        var b = [], c;
        for (c in a) {
            var d = a[c];
            !1 !== d && b.push("#define " + c + " " + d)
        }
        return b.join("\n")
    }
    function g(a) {
        return "" !== a
    }
    function h(a, b) {
        return a.replace(/NUM_DIR_LIGHTS/g, b.numDirLights).replace(/NUM_SPOT_LIGHTS/g, b.numSpotLights).replace(/NUM_POINT_LIGHTS/g, b.numPointLights).replace(/NUM_HEMI_LIGHTS/g, b.numHemiLights)
    }
    function k(a) {
        return a.replace(/#include +<([\w\d.]+)>/g, function(a, b) {
            var c = THREE.ShaderChunk[b];
            if (void 0 === c)
                throw Error("Can not resolve #include <" + b + ">");
            return k(c)
        })
    }
    function l(a) {
        return a.replace(/for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g, function(a, b, c, d) {
            a = "";
            for (b = parseInt(b); b < parseInt(c); b++)
                a += d.replace(/\[ i \]/g, "[ " + b + " ]");
            return a
        })
    }
    var p = 0
      , n = /^([\w\d_]+)\.([\w\d_]+)$/
      , m = /^([\w\d_]+)\[(\d+)\]\.([\w\d_]+)$/
      , q = /^([\w\d_]+)\[0\]$/;
    return function(a, v, t, s) {
        var w = a.context
          , E = t.extensions
          , x = t.defines
          , D = t.__webglShader.vertexShader
          , z = t.__webglShader.fragmentShader
          , y = "SHADOWMAP_TYPE_BASIC";
        s.shadowMapType === THREE.PCFShadowMap ? y = "SHADOWMAP_TYPE_PCF" : s.shadowMapType === THREE.PCFSoftShadowMap && (y = "SHADOWMAP_TYPE_PCF_SOFT");
        var B = "ENVMAP_TYPE_CUBE"
          , G = "ENVMAP_MODE_REFLECTION"
          , F = "ENVMAP_BLENDING_MULTIPLY";
        if (s.envMap) {
            switch (t.envMap.mapping) {
            case THREE.CubeReflectionMapping:
            case THREE.CubeRefractionMapping:
                B = "ENVMAP_TYPE_CUBE";
                break;
            case THREE.CubeUVReflectionMapping:
            case THREE.CubeUVRefractionMapping:
                B = "ENVMAP_TYPE_CUBE_UV";
                break;
            case THREE.EquirectangularReflectionMapping:
            case THREE.EquirectangularRefractionMapping:
                B = "ENVMAP_TYPE_EQUIREC";
                break;
            case THREE.SphericalReflectionMapping:
                B = "ENVMAP_TYPE_SPHERE"
            }
            switch (t.envMap.mapping) {
            case THREE.CubeRefractionMapping:
            case THREE.EquirectangularRefractionMapping:
                G = "ENVMAP_MODE_REFRACTION"
            }
            switch (t.combine) {
            case THREE.MultiplyOperation:
                F = "ENVMAP_BLENDING_MULTIPLY";
                break;
            case THREE.MixOperation:
                F = "ENVMAP_BLENDING_MIX";
                break;
            case THREE.AddOperation:
                F = "ENVMAP_BLENDING_ADD"
            }
        }
        var H = 0 < a.gammaFactor ? a.gammaFactor : 1
          , E = e(E, s, a.extensions)
          , L = f(x)
          , A = w.createProgram();
        t instanceof THREE.RawShaderMaterial ? a = x = "" : (x = ["precision " + s.precision + " float;", "precision " + s.precision + " int;", "#define SHADER_NAME " + t.__webglShader.name, L, s.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + H, "#define MAX_BONES " + s.maxBones, s.map ? "#define USE_MAP" : "", s.envMap ? "#define USE_ENVMAP" : "", s.envMap ? "#define " + G : "", s.lightMap ? "#define USE_LIGHTMAP" : "", s.aoMap ? "#define USE_AOMAP" : "", s.emissiveMap ? "#define USE_EMISSIVEMAP" : "", s.bumpMap ? "#define USE_BUMPMAP" : "", s.normalMap ? "#define USE_NORMALMAP" : "", s.displacementMap && s.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", s.specularMap ? "#define USE_SPECULARMAP" : "", s.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", s.metalnessMap ? "#define USE_METALNESSMAP" : "", s.alphaMap ? "#define USE_ALPHAMAP" : "", s.vertexColors ? "#define USE_COLOR" : "", s.flatShading ? "#define FLAT_SHADED" : "", s.skinning ? "#define USE_SKINNING" : "", s.useVertexTexture ? "#define BONE_TEXTURE" : "", s.morphTargets ? "#define USE_MORPHTARGETS" : "", s.morphNormals && !1 === s.flatShading ? "#define USE_MORPHNORMALS" : "", s.doubleSided ? "#define DOUBLE_SIDED" : "", s.flipSided ? "#define FLIP_SIDED" : "", s.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", s.shadowMapEnabled ? "#define " + y : "", 0 < s.pointLightShadows ? "#define POINT_LIGHT_SHADOWS" : "", s.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", s.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", s.logarithmicDepthBuffer && a.extensions.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_COLOR", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(g).join("\n"),
        a = [E, "precision " + s.precision + " float;", "precision " + s.precision + " int;", "#define SHADER_NAME " + t.__webglShader.name, L, s.alphaTest ? "#define ALPHATEST " + s.alphaTest : "", "#define GAMMA_FACTOR " + H, s.useFog && s.fog ? "#define USE_FOG" : "", s.useFog && s.fogExp ? "#define FOG_EXP2" : "", s.map ? "#define USE_MAP" : "", s.envMap ? "#define USE_ENVMAP" : "", s.envMap ? "#define " + B : "", s.envMap ? "#define " + G : "", s.envMap ? "#define " + F : "", s.lightMap ? "#define USE_LIGHTMAP" : "", s.aoMap ? "#define USE_AOMAP" : "", s.emissiveMap ? "#define USE_EMISSIVEMAP" : "", s.bumpMap ? "#define USE_BUMPMAP" : "", s.normalMap ? "#define USE_NORMALMAP" : "", s.specularMap ? "#define USE_SPECULARMAP" : "", s.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", s.metalnessMap ? "#define USE_METALNESSMAP" : "", s.alphaMap ? "#define USE_ALPHAMAP" : "", s.vertexColors ? "#define USE_COLOR" : "", s.flatShading ? "#define FLAT_SHADED" : "", s.doubleSided ? "#define DOUBLE_SIDED" : "", s.flipSided ? "#define FLIP_SIDED" : "", s.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", s.shadowMapEnabled ? "#define " + y : "", 0 < s.pointLightShadows ? "#define POINT_LIGHT_SHADOWS" : "", s.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", s.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", s.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", s.logarithmicDepthBuffer && a.extensions.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", s.envMap && a.extensions.get("EXT_shader_texture_lod") ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", s.toneMapping !== THREE.NoToneMapping ? "#define TONE_MAPPING" : "", s.toneMapping !== THREE.NoToneMapping ? THREE.ShaderChunk.tonemapping_pars_fragment : "", s.toneMapping !== THREE.NoToneMapping ? d("toneMapping", s.toneMapping) : "", s.outputEncoding || s.mapEncoding || s.envMapEncoding || s.emissiveMapEncoding ? THREE.ShaderChunk.encodings_pars_fragment : "", s.mapEncoding ? b("mapTexelToLinear", s.mapEncoding) : "", s.envMapEncoding ? b("envMapTexelToLinear", s.envMapEncoding) : "", s.emissiveMapEncoding ? b("emissiveMapTexelToLinear", s.emissiveMapEncoding) : "", s.outputEncoding ? c("linearToOutputTexel", s.outputEncoding) : "", "\n"].filter(g).join("\n"));
        D = k(D, s);
        D = h(D, s);
        z = k(z, s);
        z = h(z, s);
        !1 === t instanceof THREE.ShaderMaterial && (D = l(D),
        z = l(z));
        z = a + z;
        D = THREE.WebGLShader(w, w.VERTEX_SHADER, x + D);
        z = THREE.WebGLShader(w, w.FRAGMENT_SHADER, z);
        w.attachShader(A, D);
        w.attachShader(A, z);
        void 0 !== t.index0AttributeName ? w.bindAttribLocation(A, 0, t.index0AttributeName) : !0 === s.morphTargets && w.bindAttribLocation(A, 0, "position");
        w.linkProgram(A);
        s = w.getProgramInfoLog(A);
        y = w.getShaderInfoLog(D);
        B = w.getShaderInfoLog(z);
        F = G = !0;
        if (!1 === w.getProgramParameter(A, w.LINK_STATUS))
            G = !1,
            console.error("THREE.WebGLProgram: shader error: ", w.getError(), "gl.VALIDATE_STATUS", w.getProgramParameter(A, w.VALIDATE_STATUS), "gl.getProgramInfoLog", s, y, B);
        else if ("" !== s)
            console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", s);
        else if ("" === y || "" === B)
            F = !1;
        F && (this.diagnostics = {
            runnable: G,
            material: t,
            programLog: s,
            vertexShader: {
                log: y,
                prefix: x
            },
            fragmentShader: {
                log: B,
                prefix: a
            }
        });
        w.deleteShader(D);
        w.deleteShader(z);
        var N;
        this.getUniforms = function() {
            if (void 0 === N) {
                for (var a = {}, b = w.getProgramParameter(A, w.ACTIVE_UNIFORMS), c = 0; c < b; c++) {
                    var d = w.getActiveUniform(A, c).name
                      , e = w.getUniformLocation(A, d)
                      , g = n.exec(d);
                    if (g) {
                        var d = g[1]
                          , g = g[2]
                          , f = a[d];
                        f || (f = a[d] = {});
                        f[g] = e
                    } else if (g = m.exec(d)) {
                        var f = g[1]
                          , d = g[2]
                          , g = g[3]
                          , h = a[f];
                        h || (h = a[f] = []);
                        (f = h[d]) || (f = h[d] = {});
                        f[g] = e
                    } else
                        (g = q.exec(d)) ? (f = g[1],
                        a[f] = e) : a[d] = e
                }
                N = a
            }
            return N
        }
        ;
        var M;
        this.getAttributes = function() {
            if (void 0 === M) {
                for (var a = {}, b = w.getProgramParameter(A, w.ACTIVE_ATTRIBUTES), c = 0; c < b; c++) {
                    var d = w.getActiveAttrib(A, c).name;
                    a[d] = w.getAttribLocation(A, d)
                }
                M = a
            }
            return M
        }
        ;
        this.destroy = function() {
            w.deleteProgram(A);
            this.program = void 0
        }
        ;
        Object.defineProperties(this, {
            uniforms: {
                get: function() {
                    console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms().");
                    return this.getUniforms()
                }
            },
            attributes: {
                get: function() {
                    console.warn("THREE.WebGLProgram: .attributes is now .getAttributes().");
                    return this.getAttributes()
                }
            }
        });
        this.id = p++;
        this.code = v;
        this.usedTimes = 1;
        this.program = A;
        this.vertexShader = D;
        this.fragmentShader = z;
        return this
    }
}();
THREE.WebGLPrograms = function(a, b) {
    function c(a, b) {
        var c;
        a ? a instanceof THREE.Texture ? c = a.encoding : a instanceof THREE.WebGLRenderTarget && (c = a.texture.encoding) : c = THREE.LinearEncoding;
        c === THREE.LinearEncoding && b && (c = THREE.GammaEncoding);
        return c
    }
    var d = []
      , e = {
        MeshDepthMaterial: "depth",
        MeshNormalMaterial: "normal",
        MeshBasicMaterial: "basic",
        MeshLambertMaterial: "lambert",
        MeshPhongMaterial: "phong",
        MeshStandardMaterial: "standard",
        LineBasicMaterial: "basic",
        LineDashedMaterial: "dashed",
        PointsMaterial: "points"
    }
      , f = "precision supportsVertexTextures map mapEncoding envMap envMapMode envMapEncoding lightMap aoMap emissiveMap emissiveMapEncoding bumpMap normalMap displacementMap specularMap roughnessMap metalnessMap alphaMap combine vertexColors fog useFog fogExp flatShading sizeAttenuation logarithmicDepthBuffer skinning maxBones useVertexTexture morphTargets morphNormals maxMorphTargets maxMorphNormals premultipliedAlpha numDirLights numPointLights numSpotLights numHemiLights shadowMapEnabled pointLightShadows toneMapping physicallyCorrectLights shadowMapType alphaTest doubleSided flipSided".split(" ");
    this.getParameters = function(d, f, k, l) {
        var p = e[d.type], n;
        b.floatVertexTextures && l && l.skeleton && l.skeleton.useVertexTexture ? n = 1024 : (n = Math.floor((b.maxVertexUniforms - 20) / 4),
        void 0 !== l && l instanceof THREE.SkinnedMesh && (n = Math.min(l.skeleton.bones.length, n),
        n < l.skeleton.bones.length && console.warn("WebGLRenderer: too many bones - " + l.skeleton.bones.length + ", this GPU supports just " + n + " (try OpenGL instead of ANGLE)")));
        var m = a.getPrecision();
        null !== d.precision && (m = b.getMaxPrecision(d.precision),
        m !== d.precision && console.warn("THREE.WebGLProgram.getParameters:", d.precision, "not supported, using", m, "instead."));
        return {
            shaderID: p,
            precision: m,
            supportsVertexTextures: b.vertexTextures,
            outputEncoding: c(a.getCurrentRenderTarget(), a.gammaOutput),
            map: !!d.map,
            mapEncoding: c(d.map, a.gammaInput),
            envMap: !!d.envMap,
            envMapMode: d.envMap && d.envMap.mapping,
            envMapEncoding: c(d.envMap, a.gammaInput),
            envMapCubeUV: !!d.envMap && (d.envMap.mapping === THREE.CubeUVReflectionMapping || d.envMap.mapping === THREE.CubeUVRefractionMapping),
            lightMap: !!d.lightMap,
            aoMap: !!d.aoMap,
            emissiveMap: !!d.emissiveMap,
            emissiveMapEncoding: c(d.emissiveMap, a.gammaInput),
            bumpMap: !!d.bumpMap,
            normalMap: !!d.normalMap,
            displacementMap: !!d.displacementMap,
            roughnessMap: !!d.roughnessMap,
            metalnessMap: !!d.metalnessMap,
            specularMap: !!d.specularMap,
            alphaMap: !!d.alphaMap,
            combine: d.combine,
            vertexColors: d.vertexColors,
            fog: k,
            useFog: d.fog,
            fogExp: k instanceof THREE.FogExp2,
            flatShading: d.shading === THREE.FlatShading,
            sizeAttenuation: d.sizeAttenuation,
            logarithmicDepthBuffer: b.logarithmicDepthBuffer,
            skinning: d.skinning,
            maxBones: n,
            useVertexTexture: b.floatVertexTextures && l && l.skeleton && l.skeleton.useVertexTexture,
            morphTargets: d.morphTargets,
            morphNormals: d.morphNormals,
            maxMorphTargets: a.maxMorphTargets,
            maxMorphNormals: a.maxMorphNormals,
            numDirLights: f.directional.length,
            numPointLights: f.point.length,
            numSpotLights: f.spot.length,
            numHemiLights: f.hemi.length,
            pointLightShadows: f.shadowsPointLight,
            shadowMapEnabled: a.shadowMap.enabled && l.receiveShadow && 0 < f.shadows.length,
            shadowMapType: a.shadowMap.type,
            toneMapping: a.toneMapping,
            physicallyCorrectLights: a.physicallyCorrectLights,
            premultipliedAlpha: d.premultipliedAlpha,
            alphaTest: d.alphaTest,
            doubleSided: d.side === THREE.DoubleSide,
            flipSided: d.side === THREE.BackSide
        }
    }
    ;
    this.getProgramCode = function(a, b) {
        var c = [];
        b.shaderID ? c.push(b.shaderID) : (c.push(a.fragmentShader),
        c.push(a.vertexShader));
        if (void 0 !== a.defines)
            for (var d in a.defines)
                c.push(d),
                c.push(a.defines[d]);
        for (d = 0; d < f.length; d++) {
            var e = f[d];
            c.push(e);
            c.push(b[e])
        }
        return c.join()
    }
    ;
    this.acquireProgram = function(b, c, e) {
        for (var f, p = 0, n = d.length; p < n; p++) {
            var m = d[p];
            if (m.code === e) {
                f = m;
                ++f.usedTimes;
                break
            }
        }
        void 0 === f && (f = new THREE.WebGLProgram(a,e,b,c),
        d.push(f));
        return f
    }
    ;
    this.releaseProgram = function(a) {
        if (0 === --a.usedTimes) {
            var b = d.indexOf(a);
            d[b] = d[d.length - 1];
            d.pop();
            a.destroy()
        }
    }
    ;
    this.programs = d
}
;
THREE.WebGLProperties = function() {
    var a = {};
    this.get = function(b) {
        b = b.uuid;
        var c = a[b];
        void 0 === c && (c = {},
        a[b] = c);
        return c
    }
    ;
    this.delete = function(b) {
        delete a[b.uuid]
    }
    ;
    this.clear = function() {
        a = {}
    }
}
;
THREE.WebGLShader = function() {
    function a(a) {
        a = a.split("\n");
        for (var c = 0; c < a.length; c++)
            a[c] = c + 1 + ": " + a[c];
        return a.join("\n")
    }
    return function(b, c, d) {
        var e = b.createShader(c);
        b.shaderSource(e, d);
        b.compileShader(e);
        !1 === b.getShaderParameter(e, b.COMPILE_STATUS) && console.error("THREE.WebGLShader: Shader couldn't compile.");
        "" !== b.getShaderInfoLog(e) && console.warn("THREE.WebGLShader: gl.getShaderInfoLog()", c === b.VERTEX_SHADER ? "vertex" : "fragment", b.getShaderInfoLog(e), a(d));
        return e
    }
}();
THREE.WebGLShadowMap = function(a, b, c) {
    function d(a, b, c, d) {
        var e = a.geometry
          , f = null
          , f = q
          , g = a.customDepthMaterial;
        c && (f = u,
        g = a.customDistanceMaterial);
        g ? f = g : (a = a instanceof THREE.SkinnedMesh && b.skinning,
        g = 0,
        void 0 !== e.morphTargets && 0 < e.morphTargets.length && b.morphTargets && (g |= 1),
        a && (g |= 2),
        f = f[g]);
        f.visible = b.visible;
        f.wireframe = b.wireframe;
        f.wireframeLinewidth = b.wireframeLinewidth;
        c && void 0 !== f.uniforms.lightPos && f.uniforms.lightPos.value.copy(d);
        return f
    }
    function e(a, b, c) {
        if (!1 !== a.visible) {
            a.layers.test(b.layers) && (a instanceof THREE.Mesh || a instanceof THREE.Line || a instanceof THREE.Points) && a.castShadow && (!1 === a.frustumCulled || !0 === h.intersectsObject(a)) && !0 === a.material.visible && (a.modelViewMatrix.multiplyMatrices(c.matrixWorldInverse, a.matrixWorld),
            m.push(a));
            a = a.children;
            for (var d = 0, f = a.length; d < f; d++)
                e(a[d], b, c)
        }
    }
    for (var f = a.context, g = a.state, h = new THREE.Frustum, k = new THREE.Matrix4, l = new THREE.Vector2, p = new THREE.Vector3, n = new THREE.Vector3, m = [], q = Array(4), u = Array(4), v = [new THREE.Vector3(1,0,0), new THREE.Vector3(-1,0,0), new THREE.Vector3(0,0,1), new THREE.Vector3(0,0,-1), new THREE.Vector3(0,1,0), new THREE.Vector3(0,-1,0)], t = [new THREE.Vector3(0,1,0), new THREE.Vector3(0,1,0), new THREE.Vector3(0,1,0), new THREE.Vector3(0,1,0), new THREE.Vector3(0,0,1), new THREE.Vector3(0,0,-1)], s = [new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4], w = THREE.ShaderLib.depthRGBA, E = THREE.UniformsUtils.clone(w.uniforms), x = THREE.ShaderLib.distanceRGBA, D = THREE.UniformsUtils.clone(x.uniforms), z = 0; 4 !== z; ++z) {
        var y = 0 !== (z & 1)
          , B = 0 !== (z & 2)
          , G = new THREE.ShaderMaterial({
            uniforms: E,
            vertexShader: w.vertexShader,
            fragmentShader: w.fragmentShader,
            morphTargets: y,
            skinning: B
        });
        q[z] = G;
        y = new THREE.ShaderMaterial({
            defines: {
                USE_SHADOWMAP: ""
            },
            uniforms: D,
            vertexShader: x.vertexShader,
            fragmentShader: x.fragmentShader,
            morphTargets: y,
            skinning: B
        });
        u[z] = y
    }
    var F = this;
    this.enabled = !1;
    this.autoUpdate = !0;
    this.needsUpdate = !1;
    this.type = THREE.PCFShadowMap;
    this.cullFace = THREE.CullFaceFront;
    this.render = function(q, u) {
        var x, w, E = b.shadows;
        if (0 !== E.length && !1 !== F.enabled && (!1 !== F.autoUpdate || !1 !== F.needsUpdate)) {
            g.clearColor(1, 1, 1, 1);
            g.disable(f.BLEND);
            g.enable(f.CULL_FACE);
            f.frontFace(f.CCW);
            f.cullFace(F.cullFace === THREE.CullFaceFront ? f.FRONT : f.BACK);
            g.setDepthTest(!0);
            g.setScissorTest(!1);
            for (var z = 0, y = E.length; z < y; z++) {
                var D = E[z]
                  , B = D.shadow
                  , G = B.camera;
                l.copy(B.mapSize);
                if (D instanceof THREE.PointLight) {
                    x = 6;
                    w = !0;
                    var J = l.x
                      , C = l.y;
                    s[0].set(2 * J, C, J, C);
                    s[1].set(0, C, J, C);
                    s[2].set(3 * J, C, J, C);
                    s[3].set(J, C, J, C);
                    s[4].set(3 * J, 0, J, C);
                    s[5].set(J, 0, J, C);
                    l.x *= 4;
                    l.y *= 2
                } else
                    x = 1,
                    w = !1;
                null === B.map && (B.map = new THREE.WebGLRenderTarget(l.x,l.y,{
                    minFilter: THREE.NearestFilter,
                    magFilter: THREE.NearestFilter,
                    format: THREE.RGBAFormat
                }),
                D instanceof THREE.SpotLight && (G.aspect = l.x / l.y),
                G.updateProjectionMatrix());
                J = B.map;
                B = B.matrix;
                n.setFromMatrixPosition(D.matrixWorld);
                G.position.copy(n);
                a.setRenderTarget(J);
                a.clear();
                for (J = 0; J < x; J++) {
                    w ? (p.copy(G.position),
                    p.add(v[J]),
                    G.up.copy(t[J]),
                    G.lookAt(p),
                    g.viewport(s[J])) : (p.setFromMatrixPosition(D.target.matrixWorld),
                    G.lookAt(p));
                    G.updateMatrixWorld();
                    G.matrixWorldInverse.getInverse(G.matrixWorld);
                    B.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1);
                    B.multiply(G.projectionMatrix);
                    B.multiply(G.matrixWorldInverse);
                    k.multiplyMatrices(G.projectionMatrix, G.matrixWorldInverse);
                    h.setFromMatrix(k);
                    m.length = 0;
                    e(q, u, G);
                    for (var C = 0, Z = m.length; C < Z; C++) {
                        var S = m[C]
                          , Y = c.update(S)
                          , $ = S.material;
                        if ($ instanceof THREE.MultiMaterial)
                            for (var ja = Y.groups, $ = $.materials, ea = 0, X = ja.length; ea < X; ea++) {
                                var ha = ja[ea]
                                  , ca = $[ha.materialIndex];
                                !0 === ca.visible && (ca = d(S, ca, w, n),
                                a.renderBufferDirect(G, null, Y, ca, S, ha))
                            }
                        else
                            ca = d(S, $, w, n),
                            a.renderBufferDirect(G, null, Y, ca, S, null)
                    }
                }
            }
            x = a.getClearColor();
            w = a.getClearAlpha();
            a.setClearColor(x, w);
            g.enable(f.BLEND);
            F.cullFace === THREE.CullFaceFront && f.cullFace(f.BACK);
            F.needsUpdate = !1
        }
    }
}
;
THREE.WebGLState = function(a, b, c) {
    var d = this
      , e = new THREE.Vector4
      , f = new Uint8Array(16)
      , g = new Uint8Array(16)
      , h = new Uint8Array(16)
      , k = {}
      , l = null
      , p = null
      , n = null
      , m = null
      , q = null
      , u = null
      , v = null
      , t = null
      , s = !1
      , w = null
      , E = null
      , x = null
      , D = null
      , z = null
      , y = null
      , B = null
      , G = null
      , F = null
      , H = null
      , L = null
      , A = null
      , N = null
      , M = null
      , I = null
      , O = a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS)
      , Q = void 0
      , P = {}
      , T = new THREE.Vector4
      , J = null
      , C = null
      , Z = new THREE.Vector4
      , S = new THREE.Vector4
      , Y = a.createTexture();
    a.bindTexture(a.TEXTURE_2D, Y);
    a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR);
    a.texImage2D(a.TEXTURE_2D, 0, a.RGB, 1, 1, 0, a.RGB, a.UNSIGNED_BYTE, new Uint8Array(3));
    this.init = function() {
        this.clearColor(0, 0, 0, 1);
        this.clearDepth(1);
        this.clearStencil(0);
        this.enable(a.DEPTH_TEST);
        a.depthFunc(a.LEQUAL);
        a.frontFace(a.CCW);
        a.cullFace(a.BACK);
        this.enable(a.CULL_FACE);
        this.enable(a.BLEND);
        a.blendEquation(a.FUNC_ADD);
        a.blendFunc(a.SRC_ALPHA, a.ONE_MINUS_SRC_ALPHA)
    }
    ;
    this.initAttributes = function() {
        for (var a = 0, b = f.length; a < b; a++)
            f[a] = 0
    }
    ;
    this.enableAttribute = function(c) {
        f[c] = 1;
        0 === g[c] && (a.enableVertexAttribArray(c),
        g[c] = 1);
        0 !== h[c] && (b.get("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(c, 0),
        h[c] = 0)
    }
    ;
    this.enableAttributeAndDivisor = function(b, c, d) {
        f[b] = 1;
        0 === g[b] && (a.enableVertexAttribArray(b),
        g[b] = 1);
        h[b] !== c && (d.vertexAttribDivisorANGLE(b, c),
        h[b] = c)
    }
    ;
    this.disableUnusedAttributes = function() {
        for (var b = 0, c = g.length; b < c; b++)
            g[b] !== f[b] && (a.disableVertexAttribArray(b),
            g[b] = 0)
    }
    ;
    this.enable = function(b) {
        !0 !== k[b] && (a.enable(b),
        k[b] = !0)
    }
    ;
    this.disable = function(b) {
        !1 !== k[b] && (a.disable(b),
        k[b] = !1)
    }
    ;
    this.getCompressedTextureFormats = function() {
        if (null === l && (l = [],
        b.get("WEBGL_compressed_texture_pvrtc") || b.get("WEBGL_compressed_texture_s3tc") || b.get("WEBGL_compressed_texture_etc1")))
            for (var c = a.getParameter(a.COMPRESSED_TEXTURE_FORMATS), d = 0; d < c.length; d++)
                l.push(c[d]);
        return l
    }
    ;
    this.setBlending = function(b, d, e, f, g, h, k, l) {
        b === THREE.NoBlending ? this.disable(a.BLEND) : this.enable(a.BLEND);
        if (b !== p || l !== s)
            b === THREE.AdditiveBlending ? l ? (a.blendEquationSeparate(a.FUNC_ADD, a.FUNC_ADD),
            a.blendFuncSeparate(a.ONE, a.ONE, a.ONE, a.ONE)) : (a.blendEquation(a.FUNC_ADD),
            a.blendFunc(a.SRC_ALPHA, a.ONE)) : b === THREE.SubtractiveBlending ? l ? (a.blendEquationSeparate(a.FUNC_ADD, a.FUNC_ADD),
            a.blendFuncSeparate(a.ZERO, a.ZERO, a.ONE_MINUS_SRC_COLOR, a.ONE_MINUS_SRC_ALPHA)) : (a.blendEquation(a.FUNC_ADD),
            a.blendFunc(a.ZERO, a.ONE_MINUS_SRC_COLOR)) : b === THREE.MultiplyBlending ? l ? (a.blendEquationSeparate(a.FUNC_ADD, a.FUNC_ADD),
            a.blendFuncSeparate(a.ZERO, a.ZERO, a.SRC_COLOR, a.SRC_ALPHA)) : (a.blendEquation(a.FUNC_ADD),
            a.blendFunc(a.ZERO, a.SRC_COLOR)) : l ? (a.blendEquationSeparate(a.FUNC_ADD, a.FUNC_ADD),
            a.blendFuncSeparate(a.ONE, a.ONE_MINUS_SRC_ALPHA, a.ONE, a.ONE_MINUS_SRC_ALPHA)) : (a.blendEquationSeparate(a.FUNC_ADD, a.FUNC_ADD),
            a.blendFuncSeparate(a.SRC_ALPHA, a.ONE_MINUS_SRC_ALPHA, a.ONE, a.ONE_MINUS_SRC_ALPHA)),
            p = b,
            s = l;
        if (b === THREE.CustomBlending) {
            g = g || d;
            h = h || e;
            k = k || f;
            if (d !== n || g !== u)
                a.blendEquationSeparate(c(d), c(g)),
                n = d,
                u = g;
            if (e !== m || f !== q || h !== v || k !== t)
                a.blendFuncSeparate(c(e), c(f), c(h), c(k)),
                m = e,
                q = f,
                v = h,
                t = k
        } else
            t = v = u = q = m = n = null
    }
    ;
    this.setDepthFunc = function(b) {
        if (w !== b) {
            if (b)
                switch (b) {
                case THREE.NeverDepth:
                    a.depthFunc(a.NEVER);
                    break;
                case THREE.AlwaysDepth:
                    a.depthFunc(a.ALWAYS);
                    break;
                case THREE.LessDepth:
                    a.depthFunc(a.LESS);
                    break;
                case THREE.LessEqualDepth:
                    a.depthFunc(a.LEQUAL);
                    break;
                case THREE.EqualDepth:
                    a.depthFunc(a.EQUAL);
                    break;
                case THREE.GreaterEqualDepth:
                    a.depthFunc(a.GEQUAL);
                    break;
                case THREE.GreaterDepth:
                    a.depthFunc(a.GREATER);
                    break;
                case THREE.NotEqualDepth:
                    a.depthFunc(a.NOTEQUAL);
                    break;
                default:
                    a.depthFunc(a.LEQUAL)
                }
            else
                a.depthFunc(a.LEQUAL);
            w = b
        }
    }
    ;
    this.setDepthTest = function(b) {
        b ? this.enable(a.DEPTH_TEST) : this.disable(a.DEPTH_TEST)
    }
    ;
    this.setDepthWrite = function(b) {
        E !== b && (a.depthMask(b),
        E = b)
    }
    ;
    this.setColorWrite = function(b) {
        x !== b && (a.colorMask(b, b, b, b),
        x = b)
    }
    ;
    this.setStencilFunc = function(b, c, d) {
        if (z !== b || y !== c || B !== d)
            a.stencilFunc(b, c, d),
            z = b,
            y = c,
            B = d
    }
    ;
    this.setStencilOp = function(b, c, d) {
        if (G !== b || F !== c || H !== d)
            a.stencilOp(b, c, d),
            G = b,
            F = c,
            H = d
    }
    ;
    this.setStencilTest = function(b) {
        b ? this.enable(a.STENCIL_TEST) : this.disable(a.STENCIL_TEST)
    }
    ;
    this.setStencilWrite = function(b) {
        D !== b && (a.stencilMask(b),
        D = b)
    }
    ;
    this.setFlipSided = function(b) {
        L !== b && (b ? a.frontFace(a.CW) : a.frontFace(a.CCW),
        L = b)
    }
    ;
    this.setLineWidth = function(b) {
        b !== A && (a.lineWidth(b),
        A = b)
    }
    ;
    this.setPolygonOffset = function(b, c, d) {
        b ? this.enable(a.POLYGON_OFFSET_FILL) : this.disable(a.POLYGON_OFFSET_FILL);
        !b || N === c && M === d || (a.polygonOffset(c, d),
        N = c,
        M = d)
    }
    ;
    this.getScissorTest = function() {
        return I
    }
    ;
    this.setScissorTest = function(b) {
        (I = b) ? this.enable(a.SCISSOR_TEST) : this.disable(a.SCISSOR_TEST)
    }
    ;
    this.activeTexture = function(b) {
        void 0 === b && (b = a.TEXTURE0 + O - 1);
        Q !== b && (a.activeTexture(b),
        Q = b)
    }
    ;
    this.bindTexture = function(b, c) {
        void 0 === Q && d.activeTexture();
        var e = P[Q];
        void 0 === e && (e = {
            type: void 0,
            texture: void 0
        },
        P[Q] = e);
        if (e.type !== b || e.texture !== c)
            a.bindTexture(b, c || Y),
            e.type = b,
            e.texture = c
    }
    ;
    this.compressedTexImage2D = function() {
        try {
            a.compressedTexImage2D.apply(a, arguments)
        } catch (b) {
            console.error(b)
        }
    }
    ;
    this.texImage2D = function() {
        try {
            a.texImage2D.apply(a, arguments)
        } catch (b) {
            console.error(b)
        }
    }
    ;
    this.clearColor = function(b, c, d, f) {
        e.set(b, c, d, f);
        !1 === T.equals(e) && (a.clearColor(b, c, d, f),
        T.copy(e))
    }
    ;
    this.clearDepth = function(b) {
        J !== b && (a.clearDepth(b),
        J = b)
    }
    ;
    this.clearStencil = function(b) {
        C !== b && (a.clearStencil(b),
        C = b)
    }
    ;
    this.scissor = function(b) {
        !1 === Z.equals(b) && (a.scissor(b.x, b.y, b.z, b.w),
        Z.copy(b))
    }
    ;
    this.viewport = function(b) {
        !1 === S.equals(b) && (a.viewport(b.x, b.y, b.z, b.w),
        S.copy(b))
    }
    ;
    this.reset = function() {
        for (var b = 0; b < g.length; b++)
            1 === g[b] && (a.disableVertexAttribArray(b),
            g[b] = 0);
        k = {};
        l = null;
        Q = void 0;
        P = {};
        L = D = E = x = p = null
    }
}
;
THREE.LensFlarePlugin = function(a, b) {
    var c, d, e, f, g, h, k, l, p, n, m = a.context, q = a.state, u, v, t, s, w, E;
    this.render = function(x, D, z) {
        if (0 !== b.length) {
            x = new THREE.Vector3;
            var y = z.w / z.z
              , B = .5 * z.z
              , G = .5 * z.w
              , F = 16 / z.w
              , H = new THREE.Vector2(F * y,F)
              , L = new THREE.Vector3(1,1,0)
              , A = new THREE.Vector2(1,1);
            if (void 0 === t) {
                var F = new Float32Array([-1, -1, 0, 0, 1, -1, 1, 0, 1, 1, 1, 1, -1, 1, 0, 1])
                  , N = new Uint16Array([0, 1, 2, 0, 2, 3]);
                u = m.createBuffer();
                v = m.createBuffer();
                m.bindBuffer(m.ARRAY_BUFFER, u);
                m.bufferData(m.ARRAY_BUFFER, F, m.STATIC_DRAW);
                m.bindBuffer(m.ELEMENT_ARRAY_BUFFER, v);
                m.bufferData(m.ELEMENT_ARRAY_BUFFER, N, m.STATIC_DRAW);
                w = m.createTexture();
                E = m.createTexture();
                q.bindTexture(m.TEXTURE_2D, w);
                m.texImage2D(m.TEXTURE_2D, 0, m.RGB, 16, 16, 0, m.RGB, m.UNSIGNED_BYTE, null);
                m.texParameteri(m.TEXTURE_2D, m.TEXTURE_WRAP_S, m.CLAMP_TO_EDGE);
                m.texParameteri(m.TEXTURE_2D, m.TEXTURE_WRAP_T, m.CLAMP_TO_EDGE);
                m.texParameteri(m.TEXTURE_2D, m.TEXTURE_MAG_FILTER, m.NEAREST);
                m.texParameteri(m.TEXTURE_2D, m.TEXTURE_MIN_FILTER, m.NEAREST);
                q.bindTexture(m.TEXTURE_2D, E);
                m.texImage2D(m.TEXTURE_2D, 0, m.RGBA, 16, 16, 0, m.RGBA, m.UNSIGNED_BYTE, null);
                m.texParameteri(m.TEXTURE_2D, m.TEXTURE_WRAP_S, m.CLAMP_TO_EDGE);
                m.texParameteri(m.TEXTURE_2D, m.TEXTURE_WRAP_T, m.CLAMP_TO_EDGE);
                m.texParameteri(m.TEXTURE_2D, m.TEXTURE_MAG_FILTER, m.NEAREST);
                m.texParameteri(m.TEXTURE_2D, m.TEXTURE_MIN_FILTER, m.NEAREST);
                var F = (s = 0 < m.getParameter(m.MAX_VERTEX_TEXTURE_IMAGE_UNITS)) ? {
                    vertexShader: "uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform sampler2D occlusionMap;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif ( renderType == 2 ) {\nvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );\nvVisibility =        visibility.r / 9.0;\nvVisibility *= 1.0 - visibility.g / 9.0;\nvVisibility *=       visibility.b / 9.0;\nvVisibility *= 1.0 - visibility.a / 9.0;\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
                    fragmentShader: "uniform lowp int renderType;\nuniform sampler2D map;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nif ( renderType == 0 ) {\ngl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );\n} else if ( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * vVisibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"
                } : {
                    vertexShader: "uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif ( renderType == 2 ) {\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
                    fragmentShader: "precision mediump float;\nuniform lowp int renderType;\nuniform sampler2D map;\nuniform sampler2D occlusionMap;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvoid main() {\nif ( renderType == 0 ) {\ngl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );\n} else if ( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nfloat visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) ).a;\nvisibility = ( 1.0 - visibility / 4.0 );\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * visibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"
                }
                  , N = m.createProgram()
                  , M = m.createShader(m.FRAGMENT_SHADER)
                  , I = m.createShader(m.VERTEX_SHADER)
                  , O = "precision " + a.getPrecision() + " float;\n";
                m.shaderSource(M, O + F.fragmentShader);
                m.shaderSource(I, O + F.vertexShader);
                m.compileShader(M);
                m.compileShader(I);
                m.attachShader(N, M);
                m.attachShader(N, I);
                m.linkProgram(N);
                t = N;
                p = m.getAttribLocation(t, "position");
                n = m.getAttribLocation(t, "uv");
                c = m.getUniformLocation(t, "renderType");
                d = m.getUniformLocation(t, "map");
                e = m.getUniformLocation(t, "occlusionMap");
                f = m.getUniformLocation(t, "opacity");
                g = m.getUniformLocation(t, "color");
                h = m.getUniformLocation(t, "scale");
                k = m.getUniformLocation(t, "rotation");
                l = m.getUniformLocation(t, "screenPosition")
            }
            m.useProgram(t);
            q.initAttributes();
            q.enableAttribute(p);
            q.enableAttribute(n);
            q.disableUnusedAttributes();
            m.uniform1i(e, 0);
            m.uniform1i(d, 1);
            m.bindBuffer(m.ARRAY_BUFFER, u);
            m.vertexAttribPointer(p, 2, m.FLOAT, !1, 16, 0);
            m.vertexAttribPointer(n, 2, m.FLOAT, !1, 16, 8);
            m.bindBuffer(m.ELEMENT_ARRAY_BUFFER, v);
            q.disable(m.CULL_FACE);
            q.setDepthWrite(!1);
            N = 0;
            for (M = b.length; N < M; N++)
                if (F = 16 / z.w,
                H.set(F * y, F),
                I = b[N],
                x.set(I.matrixWorld.elements[12], I.matrixWorld.elements[13], I.matrixWorld.elements[14]),
                x.applyMatrix4(D.matrixWorldInverse),
                x.applyProjection(D.projectionMatrix),
                L.copy(x),
                A.x = L.x * B + B,
                A.y = L.y * G + G,
                s || 0 < A.x && A.x < z.z && 0 < A.y && A.y < z.w) {
                    q.activeTexture(m.TEXTURE0);
                    q.bindTexture(m.TEXTURE_2D, null);
                    q.activeTexture(m.TEXTURE1);
                    q.bindTexture(m.TEXTURE_2D, w);
                    m.copyTexImage2D(m.TEXTURE_2D, 0, m.RGB, z.x + A.x - 8, z.y + A.y - 8, 16, 16, 0);
                    m.uniform1i(c, 0);
                    m.uniform2f(h, H.x, H.y);
                    m.uniform3f(l, L.x, L.y, L.z);
                    q.disable(m.BLEND);
                    q.enable(m.DEPTH_TEST);
                    m.drawElements(m.TRIANGLES, 6, m.UNSIGNED_SHORT, 0);
                    q.activeTexture(m.TEXTURE0);
                    q.bindTexture(m.TEXTURE_2D, E);
                    m.copyTexImage2D(m.TEXTURE_2D, 0, m.RGBA, z.x + A.x - 8, z.y + A.y - 8, 16, 16, 0);
                    m.uniform1i(c, 1);
                    q.disable(m.DEPTH_TEST);
                    q.activeTexture(m.TEXTURE1);
                    q.bindTexture(m.TEXTURE_2D, w);
                    m.drawElements(m.TRIANGLES, 6, m.UNSIGNED_SHORT, 0);
                    I.positionScreen.copy(L);
                    I.customUpdateCallback ? I.customUpdateCallback(I) : I.updateLensFlares();
                    m.uniform1i(c, 2);
                    q.enable(m.BLEND);
                    for (var O = 0, Q = I.lensFlares.length; O < Q; O++) {
                        var P = I.lensFlares[O];
                        .001 < P.opacity && .001 < P.scale && (L.x = P.x,
                        L.y = P.y,
                        L.z = P.z,
                        F = P.size * P.scale / z.w,
                        H.x = F * y,
                        H.y = F,
                        m.uniform3f(l, L.x, L.y, L.z),
                        m.uniform2f(h, H.x, H.y),
                        m.uniform1f(k, P.rotation),
                        m.uniform1f(f, P.opacity),
                        m.uniform3f(g, P.color.r, P.color.g, P.color.b),
                        q.setBlending(P.blending, P.blendEquation, P.blendSrc, P.blendDst),
                        a.setTexture(P.texture, 1),
                        m.drawElements(m.TRIANGLES, 6, m.UNSIGNED_SHORT, 0))
                    }
                }
            q.enable(m.CULL_FACE);
            q.enable(m.DEPTH_TEST);
            q.setDepthWrite(!0);
            a.resetGLState()
        }
    }
}
;
THREE.SpritePlugin = function(a, b) {
    var c, d, e, f, g, h, k, l, p, n, m, q, u, v, t, s, w;
    function E(a, b) {
        return a.renderOrder !== b.renderOrder ? a.renderOrder - b.renderOrder : a.z !== b.z ? b.z - a.z : b.id - a.id
    }
    var x = a.context, D = a.state, z, y, B, G, F = new THREE.Vector3, H = new THREE.Quaternion, L = new THREE.Vector3;
    this.render = function(A, N) {
        if (0 !== b.length) {
            if (void 0 === B) {
                var M = new Float32Array([-.5, -.5, 0, 0, .5, -.5, 1, 0, .5, .5, 1, 1, -.5, .5, 0, 1])
                  , I = new Uint16Array([0, 1, 2, 0, 2, 3]);
                z = x.createBuffer();
                y = x.createBuffer();
                x.bindBuffer(x.ARRAY_BUFFER, z);
                x.bufferData(x.ARRAY_BUFFER, M, x.STATIC_DRAW);
                x.bindBuffer(x.ELEMENT_ARRAY_BUFFER, y);
                x.bufferData(x.ELEMENT_ARRAY_BUFFER, I, x.STATIC_DRAW);
                var M = x.createProgram()
                  , I = x.createShader(x.VERTEX_SHADER)
                  , O = x.createShader(x.FRAGMENT_SHADER);
                x.shaderSource(I, ["precision " + a.getPrecision() + " float;", "uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 scale;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uvOffset + uv * uvScale;\nvec2 alignedPosition = position * scale;\nvec2 rotatedPosition;\nrotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\nrotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\nvec4 finalPosition;\nfinalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\nfinalPosition.xy += rotatedPosition;\nfinalPosition = projectionMatrix * finalPosition;\ngl_Position = finalPosition;\n}"].join("\n"));
                x.shaderSource(O, ["precision " + a.getPrecision() + " float;", "uniform vec3 color;\nuniform sampler2D map;\nuniform float opacity;\nuniform int fogType;\nuniform vec3 fogColor;\nuniform float fogDensity;\nuniform float fogNear;\nuniform float fogFar;\nuniform float alphaTest;\nvarying vec2 vUV;\nvoid main() {\nvec4 texture = texture2D( map, vUV );\nif ( texture.a < alphaTest ) discard;\ngl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\nif ( fogType > 0 ) {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat fogFactor = 0.0;\nif ( fogType == 1 ) {\nfogFactor = smoothstep( fogNear, fogFar, depth );\n} else {\nconst float LOG2 = 1.442695;\nfogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n}\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}\n}"].join("\n"));
                x.compileShader(I);
                x.compileShader(O);
                x.attachShader(M, I);
                x.attachShader(M, O);
                x.linkProgram(M);
                B = M;
                s = x.getAttribLocation(B, "position");
                w = x.getAttribLocation(B, "uv");
                c = x.getUniformLocation(B, "uvOffset");
                d = x.getUniformLocation(B, "uvScale");
                e = x.getUniformLocation(B, "rotation");
                f = x.getUniformLocation(B, "scale");
                g = x.getUniformLocation(B, "color");
                h = x.getUniformLocation(B, "map");
                k = x.getUniformLocation(B, "opacity");
                l = x.getUniformLocation(B, "modelViewMatrix");
                p = x.getUniformLocation(B, "projectionMatrix");
                n = x.getUniformLocation(B, "fogType");
                m = x.getUniformLocation(B, "fogDensity");
                q = x.getUniformLocation(B, "fogNear");
                u = x.getUniformLocation(B, "fogFar");
                v = x.getUniformLocation(B, "fogColor");
                t = x.getUniformLocation(B, "alphaTest");
                M = document.createElement("canvas");
                M.width = 8;
                M.height = 8;
                I = M.getContext("2d");
                I.fillStyle = "white";
                I.fillRect(0, 0, 8, 8);
                G = new THREE.Texture(M);
                G.needsUpdate = !0
            }
            x.useProgram(B);
            D.initAttributes();
            D.enableAttribute(s);
            D.enableAttribute(w);
            D.disableUnusedAttributes();
            D.disable(x.CULL_FACE);
            D.enable(x.BLEND);
            x.bindBuffer(x.ARRAY_BUFFER, z);
            x.vertexAttribPointer(s, 2, x.FLOAT, !1, 16, 0);
            x.vertexAttribPointer(w, 2, x.FLOAT, !1, 16, 8);
            x.bindBuffer(x.ELEMENT_ARRAY_BUFFER, y);
            x.uniformMatrix4fv(p, !1, N.projectionMatrix.elements);
            D.activeTexture(x.TEXTURE0);
            x.uniform1i(h, 0);
            I = M = 0;
            (O = A.fog) ? (x.uniform3f(v, O.color.r, O.color.g, O.color.b),
            O instanceof THREE.Fog ? (x.uniform1f(q, O.near),
            x.uniform1f(u, O.far),
            x.uniform1i(n, 1),
            I = M = 1) : O instanceof THREE.FogExp2 && (x.uniform1f(m, O.density),
            x.uniform1i(n, 2),
            I = M = 2)) : (x.uniform1i(n, 0),
            I = M = 0);
            for (var O = 0, Q = b.length; O < Q; O++) {
                var P = b[O];
                P.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse, P.matrixWorld);
                P.z = -P.modelViewMatrix.elements[14]
            }
            b.sort(E);
            for (var T = [], O = 0, Q = b.length; O < Q; O++) {
                var P = b[O]
                  , J = P.material;
                x.uniform1f(t, J.alphaTest);
                x.uniformMatrix4fv(l, !1, P.modelViewMatrix.elements);
                P.matrixWorld.decompose(F, H, L);
                T[0] = L.x;
                T[1] = L.y;
                P = 0;
                A.fog && J.fog && (P = I);
                M !== P && (x.uniform1i(n, P),
                M = P);
                null !== J.map ? (x.uniform2f(c, J.map.offset.x, J.map.offset.y),
                x.uniform2f(d, J.map.repeat.x, J.map.repeat.y)) : (x.uniform2f(c, 0, 0),
                x.uniform2f(d, 1, 1));
                x.uniform1f(k, J.opacity);
                x.uniform3f(g, J.color.r, J.color.g, J.color.b);
                x.uniform1f(e, J.rotation);
                x.uniform2fv(f, T);
                D.setBlending(J.blending, J.blendEquation, J.blendSrc, J.blendDst);
                D.setDepthTest(J.depthTest);
                D.setDepthWrite(J.depthWrite);
                J.map && J.map.image && J.map.image.width ? a.setTexture(J.map, 0) : a.setTexture(G, 0);
                x.drawElements(x.TRIANGLES, 6, x.UNSIGNED_SHORT, 0)
            }
            D.enable(x.CULL_FACE);
            a.resetGLState()
        }
    }
}
;
Object.defineProperties(THREE.Box2.prototype, {
    empty: {
        value: function() {
            console.warn("THREE.Box2: .empty() has been renamed to .isEmpty().");
            return this.isEmpty()
        }
    },
    isIntersectionBox: {
        value: function(a) {
            console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox().");
            return this.intersectsBox(a)
        }
    }
});
Object.defineProperties(THREE.Box3.prototype, {
    empty: {
        value: function() {
            console.warn("THREE.Box3: .empty() has been renamed to .isEmpty().");
            return this.isEmpty()
        }
    },
    isIntersectionBox: {
        value: function(a) {
            console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox().");
            return this.intersectsBox(a)
        }
    },
    isIntersectionSphere: {
        value: function(a) {
            console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere().");
            return this.intersectsSphere(a)
        }
    }
});
Object.defineProperties(THREE.Matrix3.prototype, {
    multiplyVector3: {
        value: function(a) {
            console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.");
            return a.applyMatrix3(this)
        }
    },
    multiplyVector3Array: {
        value: function(a) {
            console.warn("THREE.Matrix3: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead.");
            return this.applyToVector3Array(a)
        }
    }
});
Object.defineProperties(THREE.Matrix4.prototype, {
    extractPosition: {
        value: function(a) {
            console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition().");
            return this.copyPosition(a)
        }
    },
    setRotationFromQuaternion: {
        value: function(a) {
            console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().");
            return this.makeRotationFromQuaternion(a)
        }
    },
    multiplyVector3: {
        value: function(a) {
            console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead.");
            return a.applyProjection(this)
        }
    },
    multiplyVector4: {
        value: function(a) {
            console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.");
            return a.applyMatrix4(this)
        }
    },
    multiplyVector3Array: {
        value: function(a) {
            console.warn("THREE.Matrix4: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead.");
            return this.applyToVector3Array(a)
        }
    },
    rotateAxis: {
        value: function(a) {
            console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.");
            a.transformDirection(this)
        }
    },
    crossVector: {
        value: function(a) {
            console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.");
            return a.applyMatrix4(this)
        }
    },
    translate: {
        value: function(a) {
            console.error("THREE.Matrix4: .translate() has been removed.")
        }
    },
    rotateX: {
        value: function(a) {
            console.error("THREE.Matrix4: .rotateX() has been removed.")
        }
    },
    rotateY: {
        value: function(a) {
            console.error("THREE.Matrix4: .rotateY() has been removed.")
        }
    },
    rotateZ: {
        value: function(a) {
            console.error("THREE.Matrix4: .rotateZ() has been removed.")
        }
    },
    rotateByAxis: {
        value: function(a, b) {
            console.error("THREE.Matrix4: .rotateByAxis() has been removed.")
        }
    }
});
Object.defineProperties(THREE.Plane.prototype, {
    isIntersectionLine: {
        value: function(a) {
            console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine().");
            return this.intersectsLine(a)
        }
    }
});
Object.defineProperties(THREE.Quaternion.prototype, {
    multiplyVector3: {
        value: function(a) {
            console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.");
            return a.applyQuaternion(this)
        }
    }
});
Object.defineProperties(THREE.Ray.prototype, {
    isIntersectionBox: {
        value: function(a) {
            console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox().");
            return this.intersectsBox(a)
        }
    },
    isIntersectionPlane: {
        value: function(a) {
            console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane().");
            return this.intersectsPlane(a)
        }
    },
    isIntersectionSphere: {
        value: function(a) {
            console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere().");
            return this.intersectsSphere(a)
        }
    }
});
Object.defineProperties(THREE.Vector3.prototype, {
    setEulerFromRotationMatrix: {
        value: function() {
            console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
        }
    },
    setEulerFromQuaternion: {
        value: function() {
            console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
        }
    },
    getPositionFromMatrix: {
        value: function(a) {
            console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().");
            return this.setFromMatrixPosition(a)
        }
    },
    getScaleFromMatrix: {
        value: function(a) {
            console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().");
            return this.setFromMatrixScale(a)
        }
    },
    getColumnFromMatrix: {
        value: function(a, b) {
            console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().");
            return this.setFromMatrixColumn(a, b)
        }
    }
});
THREE.Face4 = function(a, b, c, d, e, f, g) {
    console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead.");
    return new THREE.Face3(a,b,c,e,f,g)
}
;
THREE.Vertex = function(a, b, c) {
    console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead.");
    return new THREE.Vector3(a,b,c)
}
;
Object.defineProperties(THREE.Object3D.prototype, {
    eulerOrder: {
        get: function() {
            console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");
            return this.rotation.order
        },
        set: function(a) {
            console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");
            this.rotation.order = a
        }
    },
    getChildByName: {
        value: function(a) {
            console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName().");
            return this.getObjectByName(a)
        }
    },
    renderDepth: {
        set: function(a) {
            console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")
        }
    },
    translate: {
        value: function(a, b) {
            console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.");
            return this.translateOnAxis(b, a)
        }
    },
    useQuaternion: {
        get: function() {
            console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
        },
        set: function(a) {
            console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
        }
    }
});
Object.defineProperties(THREE, {
    PointCloud: {
        value: function(a, b) {
            console.warn("THREE.PointCloud has been renamed to THREE.Points.");
            return new THREE.Points(a,b)
        }
    },
    ParticleSystem: {
        value: function(a, b) {
            console.warn("THREE.ParticleSystem has been renamed to THREE.Points.");
            return new THREE.Points(a,b)
        }
    }
});
Object.defineProperties(THREE.Light.prototype, {
    onlyShadow: {
        set: function(a) {
            console.warn("THREE.Light: .onlyShadow has been removed.")
        }
    },
    shadowCameraFov: {
        set: function(a) {
            console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov.");
            this.shadow.camera.fov = a
        }
    },
    shadowCameraLeft: {
        set: function(a) {
            console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left.");
            this.shadow.camera.left = a
        }
    },
    shadowCameraRight: {
        set: function(a) {
            console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right.");
            this.shadow.camera.right = a
        }
    },
    shadowCameraTop: {
        set: function(a) {
            console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top.");
            this.shadow.camera.top = a
        }
    },
    shadowCameraBottom: {
        set: function(a) {
            console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom.");
            this.shadow.camera.bottom = a
        }
    },
    shadowCameraNear: {
        set: function(a) {
            console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near.");
            this.shadow.camera.near = a
        }
    },
    shadowCameraFar: {
        set: function(a) {
            console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far.");
            this.shadow.camera.far = a
        }
    },
    shadowCameraVisible: {
        set: function(a) {
            console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")
        }
    },
    shadowBias: {
        set: function(a) {
            console.warn("THREE.Light: .shadowBias is now .shadow.bias.");
            this.shadow.bias = a
        }
    },
    shadowDarkness: {
        set: function(a) {
            console.warn("THREE.Light: .shadowDarkness has been removed.")
        }
    },
    shadowMapWidth: {
        set: function(a) {
            console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width.");
            this.shadow.mapSize.width = a
        }
    },
    shadowMapHeight: {
        set: function(a) {
            console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height.");
            this.shadow.mapSize.height = a
        }
    }
});
Object.defineProperties(THREE.BufferAttribute.prototype, {
    length: {
        get: function() {
            console.warn("THREE.BufferAttribute: .length has been deprecated. Please use .count.");
            return this.array.length
        }
    }
});
Object.defineProperties(THREE.BufferGeometry.prototype, {
    drawcalls: {
        get: function() {
            console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups.");
            return this.groups
        }
    },
    offsets: {
        get: function() {
            console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups.");
            return this.groups
        }
    },
    addIndex: {
        value: function(a) {
            console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex().");
            this.setIndex(a)
        }
    },
    addDrawCall: {
        value: function(a, b, c) {
            void 0 !== c && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset.");
            console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup().");
            this.addGroup(a, b)
        }
    },
    clearDrawCalls: {
        value: function() {
            console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups().");
            this.clearGroups()
        }
    },
    computeTangents: {
        value: function() {
            console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")
        }
    },
    computeOffsets: {
        value: function() {
            console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")
        }
    }
});
Object.defineProperties(THREE.Material.prototype, {
    wrapAround: {
        get: function() {
            console.warn("THREE." + this.type + ": .wrapAround has been removed.")
        },
        set: function(a) {
            console.warn("THREE." + this.type + ": .wrapAround has been removed.")
        }
    },
    wrapRGB: {
        get: function() {
            console.warn("THREE." + this.type + ": .wrapRGB has been removed.");
            return new THREE.Color
        }
    }
});
Object.defineProperties(THREE, {
    PointCloudMaterial: {
        value: function(a) {
            console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial.");
            return new THREE.PointsMaterial(a)
        }
    },
    ParticleBasicMaterial: {
        value: function(a) {
            console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial.");
            return new THREE.PointsMaterial(a)
        }
    },
    ParticleSystemMaterial: {
        value: function(a) {
            console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial.");
            return new THREE.PointsMaterial(a)
        }
    }
});
Object.defineProperties(THREE.MeshPhongMaterial.prototype, {
    metal: {
        get: function() {
            console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead.");
            return !1
        },
        set: function(a) {
            console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")
        }
    }
});
Object.defineProperties(THREE.ShaderMaterial.prototype, {
    derivatives: {
        get: function() {
            console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives.");
            return this.extensions.derivatives
        },
        set: function(a) {
            console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives.");
            this.extensions.derivatives = a
        }
    }
});
Object.defineProperties(THREE.WebGLRenderer.prototype, {
    supportsFloatTextures: {
        value: function() {
            console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' ).");
            return this.extensions.get("OES_texture_float")
        }
    },
    supportsHalfFloatTextures: {
        value: function() {
            console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' ).");
            return this.extensions.get("OES_texture_half_float")
        }
    },
    supportsStandardDerivatives: {
        value: function() {
            console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' ).");
            return this.extensions.get("OES_standard_derivatives")
        }
    },
    supportsCompressedTextureS3TC: {
        value: function() {
            console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' ).");
            return this.extensions.get("WEBGL_compressed_texture_s3tc")
        }
    },
    supportsCompressedTexturePVRTC: {
        value: function() {
            console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' ).");
            return this.extensions.get("WEBGL_compressed_texture_pvrtc")
        }
    },
    supportsBlendMinMax: {
        value: function() {
            console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' ).");
            return this.extensions.get("EXT_blend_minmax")
        }
    },
    supportsVertexTextures: {
        value: function() {
            return this.capabilities.vertexTextures
        }
    },
    supportsInstancedArrays: {
        value: function() {
            console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' ).");
            return this.extensions.get("ANGLE_instanced_arrays")
        }
    },
    enableScissorTest: {
        value: function(a) {
            console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest().");
            this.setScissorTest(a)
        }
    },
    initMaterial: {
        value: function() {
            console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
        }
    },
    addPrePlugin: {
        value: function() {
            console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
        }
    },
    addPostPlugin: {
        value: function() {
            console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
        }
    },
    updateShadowMap: {
        value: function() {
            console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
        }
    },
    shadowMapEnabled: {
        get: function() {
            return this.shadowMap.enabled
        },
        set: function(a) {
            console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled.");
            this.shadowMap.enabled = a
        }
    },
    shadowMapType: {
        get: function() {
            return this.shadowMap.type
        },
        set: function(a) {
            console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type.");
            this.shadowMap.type = a
        }
    },
    shadowMapCullFace: {
        get: function() {
            return this.shadowMap.cullFace
        },
        set: function(a) {
            console.warn("THREE.WebGLRenderer: .shadowMapCullFace is now .shadowMap.cullFace.");
            this.shadowMap.cullFace = a
        }
    }
});
Object.defineProperties(THREE.WebGLRenderTarget.prototype, {
    wrapS: {
        get: function() {
            console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");
            return this.texture.wrapS
        },
        set: function(a) {
            console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");
            this.texture.wrapS = a
        }
    },
    wrapT: {
        get: function() {
            console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");
            return this.texture.wrapT
        },
        set: function(a) {
            console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");
            this.texture.wrapT = a
        }
    },
    magFilter: {
        get: function() {
            console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.");
            return this.texture.magFilter
        },
        set: function(a) {
            console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.");
            this.texture.magFilter = a
        }
    },
    minFilter: {
        get: function() {
            console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.");
            return this.texture.minFilter
        },
        set: function(a) {
            console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.");
            this.texture.minFilter = a
        }
    },
    anisotropy: {
        get: function() {
            console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.");
            return this.texture.anisotropy
        },
        set: function(a) {
            console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.");
            this.texture.anisotropy = a
        }
    },
    offset: {
        get: function() {
            console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset.");
            return this.texture.offset
        },
        set: function(a) {
            console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset.");
            this.texture.offset = a
        }
    },
    repeat: {
        get: function() {
            console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat.");
            return this.texture.repeat
        },
        set: function(a) {
            console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat.");
            this.texture.repeat = a
        }
    },
    format: {
        get: function() {
            console.warn("THREE.WebGLRenderTarget: .format is now .texture.format.");
            return this.texture.format
        },
        set: function(a) {
            console.warn("THREE.WebGLRenderTarget: .format is now .texture.format.");
            this.texture.format = a
        }
    },
    type: {
        get: function() {
            console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");
            return this.texture.type
        },
        set: function(a) {
            console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");
            this.texture.type = a
        }
    },
    generateMipmaps: {
        get: function() {
            console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.");
            return this.texture.generateMipmaps
        },
        set: function(a) {
            console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.");
            this.texture.generateMipmaps = a
        }
    }
});
THREE.GeometryUtils = {
    merge: function(a, b, c) {
        console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");
        var d;
        b instanceof THREE.Mesh && (b.matrixAutoUpdate && b.updateMatrix(),
        d = b.matrix,
        b = b.geometry);
        a.merge(b, d, c)
    },
    center: function(a) {
        console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead.");
        return a.center()
    }
};
THREE.ImageUtils = {
    crossOrigin: void 0,
    loadTexture: function(a, b, c, d) {
        console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
        var e = new THREE.TextureLoader;
        e.setCrossOrigin(this.crossOrigin);
        a = e.load(a, c, void 0, d);
        b && (a.mapping = b);
        return a
    },
    loadTextureCube: function(a, b, c, d) {
        console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
        var e = new THREE.CubeTextureLoader;
        e.setCrossOrigin(this.crossOrigin);
        a = e.load(a, c, void 0, d);
        b && (a.mapping = b);
        return a
    },
    loadCompressedTexture: function() {
        console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
    },
    loadCompressedTextureCube: function() {
        console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
    }
};
THREE.Projector = function() {
    console.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js.");
    this.projectVector = function(a, b) {
        console.warn("THREE.Projector: .projectVector() is now vector.project().");
        a.project(b)
    }
    ;
    this.unprojectVector = function(a, b) {
        console.warn("THREE.Projector: .unprojectVector() is now vector.unproject().");
        a.unproject(b)
    }
    ;
    this.pickingRay = function(a, b) {
        console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")
    }
}
;
THREE.CanvasRenderer = function() {
    console.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js");
    this.domElement = document.createElement("canvas");
    this.clear = function() {}
    ;
    this.render = function() {}
    ;
    this.setClearColor = function() {}
    ;
    this.setSize = function() {}
}
;
THREE.MeshFaceMaterial = THREE.MultiMaterial;
THREE.CurveUtils = {
    tangentQuadraticBezier: function(a, b, c, d) {
        return 2 * (1 - a) * (c - b) + 2 * a * (d - c)
    },
    tangentCubicBezier: function(a, b, c, d, e) {
        return -3 * b * (1 - a) * (1 - a) + 3 * c * (1 - a) * (1 - a) - 6 * a * c * (1 - a) + 6 * a * d * (1 - a) - 3 * a * a * d + 3 * a * a * e
    },
    tangentSpline: function(a, b, c, d, e) {
        return 6 * a * a - 6 * a + (3 * a * a - 4 * a + 1) + (-6 * a * a + 6 * a) + (3 * a * a - 2 * a)
    },
    interpolate: function(a, b, c, d, e) {
        a = .5 * (c - a);
        d = .5 * (d - b);
        var f = e * e;
        return (2 * b - 2 * c + a + d) * e * f + (-3 * b + 3 * c - 2 * a - d) * f + a * e + b
    }
};
THREE.SceneUtils = {
    createMultiMaterialObject: function(a, b) {
        for (var c = new THREE.Group, d = 0, e = b.length; d < e; d++)
            c.add(new THREE.Mesh(a,b[d]));
        return c
    },
    detach: function(a, b, c) {
        a.applyMatrix(b.matrixWorld);
        b.remove(a);
        c.add(a)
    },
    attach: function(a, b, c) {
        var d = new THREE.Matrix4;
        d.getInverse(c.matrixWorld);
        a.applyMatrix(d);
        b.remove(a);
        c.add(a)
    }
};
THREE.ShapeUtils = {
    area: function(a) {
        for (var b = a.length, c = 0, d = b - 1, e = 0; e < b; d = e++)
            c += a[d].x * a[e].y - a[e].x * a[d].y;
        return .5 * c
    },
    triangulate: function() {
        return function(a, b) {
            var c = a.length;
            if (3 > c)
                return null;
            var d = [], e = [], f = [], g, h, k;
            if (0 < THREE.ShapeUtils.area(a))
                for (h = 0; h < c; h++)
                    e[h] = h;
            else
                for (h = 0; h < c; h++)
                    e[h] = c - 1 - h;
            var l = 2 * c;
            for (h = c - 1; 2 < c; ) {
                if (0 >= l--) {
                    console.warn("THREE.ShapeUtils: Unable to triangulate polygon! in triangulate()");
                    break
                }
                g = h;
                c <= g && (g = 0);
                h = g + 1;
                c <= h && (h = 0);
                k = h + 1;
                c <= k && (k = 0);
                var p;
                a: {
                    var n = p = void 0
                      , m = void 0
                      , q = void 0
                      , u = void 0
                      , v = void 0
                      , t = void 0
                      , s = void 0
                      , w = void 0
                      , n = a[e[g]].x
                      , m = a[e[g]].y
                      , q = a[e[h]].x
                      , u = a[e[h]].y
                      , v = a[e[k]].x
                      , t = a[e[k]].y;
                    if (Number.EPSILON > (q - n) * (t - m) - (u - m) * (v - n))
                        p = !1;
                    else {
                        var E = void 0
                          , x = void 0
                          , D = void 0
                          , z = void 0
                          , y = void 0
                          , B = void 0
                          , G = void 0
                          , F = void 0
                          , H = void 0
                          , L = void 0
                          , H = F = G = w = s = void 0
                          , E = v - q
                          , x = t - u
                          , D = n - v
                          , z = m - t
                          , y = q - n
                          , B = u - m;
                        for (p = 0; p < c; p++)
                            if (s = a[e[p]].x,
                            w = a[e[p]].y,
                            !(s === n && w === m || s === q && w === u || s === v && w === t) && (G = s - n,
                            F = w - m,
                            H = s - q,
                            L = w - u,
                            s -= v,
                            w -= t,
                            H = E * L - x * H,
                            G = y * F - B * G,
                            F = D * w - z * s,
                            H >= -Number.EPSILON && F >= -Number.EPSILON && G >= -Number.EPSILON)) {
                                p = !1;
                                break a
                            }
                        p = !0
                    }
                }
                if (p) {
                    d.push([a[e[g]], a[e[h]], a[e[k]]]);
                    f.push([e[g], e[h], e[k]]);
                    g = h;
                    for (k = h + 1; k < c; g++,
                    k++)
                        e[g] = e[k];
                    c--;
                    l = 2 * c
                }
            }
            return b ? f : d
        }
    }(),
    triangulateShape: function(a, b) {
        function c(a, b, c) {
            return a.x !== b.x ? a.x < b.x ? a.x <= c.x && c.x <= b.x : b.x <= c.x && c.x <= a.x : a.y < b.y ? a.y <= c.y && c.y <= b.y : b.y <= c.y && c.y <= a.y
        }
        function d(a, b, d, e, f) {
            var g = b.x - a.x
              , h = b.y - a.y
              , k = e.x - d.x
              , l = e.y - d.y
              , n = a.x - d.x
              , p = a.y - d.y
              , y = h * k - g * l
              , B = h * n - g * p;
            if (Math.abs(y) > Number.EPSILON) {
                if (0 < y) {
                    if (0 > B || B > y)
                        return [];
                    k = l * n - k * p;
                    if (0 > k || k > y)
                        return []
                } else {
                    if (0 < B || B < y)
                        return [];
                    k = l * n - k * p;
                    if (0 < k || k < y)
                        return []
                }
                if (0 === k)
                    return !f || 0 !== B && B !== y ? [a] : [];
                if (k === y)
                    return !f || 0 !== B && B !== y ? [b] : [];
                if (0 === B)
                    return [d];
                if (B === y)
                    return [e];
                f = k / y;
                return [{
                    x: a.x + f * g,
                    y: a.y + f * h
                }]
            }
            if (0 !== B || l * n !== k * p)
                return [];
            h = 0 === g && 0 === h;
            k = 0 === k && 0 === l;
            if (h && k)
                return a.x !== d.x || a.y !== d.y ? [] : [a];
            if (h)
                return c(d, e, a) ? [a] : [];
            if (k)
                return c(a, b, d) ? [d] : [];
            0 !== g ? (a.x < b.x ? (g = a,
            k = a.x,
            h = b,
            a = b.x) : (g = b,
            k = b.x,
            h = a,
            a = a.x),
            d.x < e.x ? (b = d,
            y = d.x,
            l = e,
            d = e.x) : (b = e,
            y = e.x,
            l = d,
            d = d.x)) : (a.y < b.y ? (g = a,
            k = a.y,
            h = b,
            a = b.y) : (g = b,
            k = b.y,
            h = a,
            a = a.y),
            d.y < e.y ? (b = d,
            y = d.y,
            l = e,
            d = e.y) : (b = e,
            y = e.y,
            l = d,
            d = d.y));
            return k <= y ? a < y ? [] : a === y ? f ? [] : [b] : a <= d ? [b, h] : [b, l] : k > d ? [] : k === d ? f ? [] : [g] : a <= d ? [g, h] : [g, l]
        }
        function e(a, b, c, d) {
            var e = b.x - a.x
              , f = b.y - a.y;
            b = c.x - a.x;
            c = c.y - a.y;
            var g = d.x - a.x;
            d = d.y - a.y;
            a = e * c - f * b;
            e = e * d - f * g;
            return Math.abs(a) > Number.EPSILON ? (b = g * c - d * b,
            0 < a ? 0 <= e && 0 <= b : 0 <= e || 0 <= b) : 0 < e
        }
        var f, g, h, k, l, p = {};
        h = a.concat();
        f = 0;
        for (g = b.length; f < g; f++)
            Array.prototype.push.apply(h, b[f]);
        f = 0;
        for (g = h.length; f < g; f++)
            l = h[f].x + ":" + h[f].y,
            void 0 !== p[l] && console.warn("THREE.Shape: Duplicate point", l),
            p[l] = f;
        f = function(a, b) {
            function c(a, b) {
                var d = h.length - 1
                  , f = a - 1;
                0 > f && (f = d);
                var g = a + 1;
                g > d && (g = 0);
                d = e(h[a], h[f], h[g], k[b]);
                if (!d)
                    return !1;
                d = k.length - 1;
                f = b - 1;
                0 > f && (f = d);
                g = b + 1;
                g > d && (g = 0);
                return (d = e(k[b], k[f], k[g], h[a])) ? !0 : !1
            }
            function f(a, b) {
                var c, e;
                for (c = 0; c < h.length; c++)
                    if (e = c + 1,
                    e %= h.length,
                    e = d(a, b, h[c], h[e], !0),
                    0 < e.length)
                        return !0;
                return !1
            }
            function g(a, c) {
                var e, f, h, k;
                for (e = 0; e < l.length; e++)
                    for (f = b[l[e]],
                    h = 0; h < f.length; h++)
                        if (k = h + 1,
                        k %= f.length,
                        k = d(a, c, f[h], f[k], !0),
                        0 < k.length)
                            return !0;
                return !1
            }
            var h = a.concat(), k, l = [], n, p, z, y, B, G = [], F, H, L, A = 0;
            for (n = b.length; A < n; A++)
                l.push(A);
            F = 0;
            for (var N = 2 * l.length; 0 < l.length; ) {
                N--;
                if (0 > N) {
                    console.log("Infinite Loop! Holes left:" + l.length + ", Probably Hole outside Shape!");
                    break
                }
                for (p = F; p < h.length; p++) {
                    z = h[p];
                    n = -1;
                    for (A = 0; A < l.length; A++)
                        if (y = l[A],
                        B = z.x + ":" + z.y + ":" + y,
                        void 0 === G[B]) {
                            k = b[y];
                            for (H = 0; H < k.length; H++)
                                if (y = k[H],
                                c(p, H) && !f(z, y) && !g(z, y)) {
                                    n = H;
                                    l.splice(A, 1);
                                    F = h.slice(0, p + 1);
                                    y = h.slice(p);
                                    H = k.slice(n);
                                    L = k.slice(0, n + 1);
                                    h = F.concat(H).concat(L).concat(y);
                                    F = p;
                                    break
                                }
                            if (0 <= n)
                                break;
                            G[B] = !0
                        }
                    if (0 <= n)
                        break
                }
            }
            return h
        }(a, b);
        var n = THREE.ShapeUtils.triangulate(f, !1);
        f = 0;
        for (g = n.length; f < g; f++)
            for (k = n[f],
            h = 0; 3 > h; h++)
                l = k[h].x + ":" + k[h].y,
                l = p[l],
                void 0 !== l && (k[h] = l);
        return n.concat()
    },
    isClockWise: function(a) {
        return 0 > THREE.ShapeUtils.area(a)
    },
    b2: function() {
        return function(a, b, c, d) {
            var e = 1 - a;
            return e * e * b + 2 * (1 - a) * a * c + a * a * d
        }
    }(),
    b3: function() {
        return function(a, b, c, d, e) {
            var f = 1 - a
              , g = 1 - a;
            return f * f * f * b + 3 * g * g * a * c + 3 * (1 - a) * a * a * d + a * a * a * e
        }
    }()
};
THREE.Curve = function() {}
;
THREE.Curve.prototype = {
    constructor: THREE.Curve,
    getPoint: function(a) {
        console.warn("THREE.Curve: Warning, getPoint() not implemented!");
        return null
    },
    getPointAt: function(a) {
        a = this.getUtoTmapping(a);
        return this.getPoint(a)
    },
    getPoints: function(a) {
        a || (a = 5);
        var b, c = [];
        for (b = 0; b <= a; b++)
            c.push(this.getPoint(b / a));
        return c
    },
    getSpacedPoints: function(a) {
        a || (a = 5);
        var b, c = [];
        for (b = 0; b <= a; b++)
            c.push(this.getPointAt(b / a));
        return c
    },
    getLength: function() {
        var a = this.getLengths();
        return a[a.length - 1]
    },
    getLengths: function(a) {
        a || (a = this.__arcLengthDivisions ? this.__arcLengthDivisions : 200);
        if (this.cacheArcLengths && this.cacheArcLengths.length === a + 1 && !this.needsUpdate)
            return this.cacheArcLengths;
        this.needsUpdate = !1;
        var b = [], c, d = this.getPoint(0), e, f = 0;
        b.push(0);
        for (e = 1; e <= a; e++)
            c = this.getPoint(e / a),
            f += c.distanceTo(d),
            b.push(f),
            d = c;
        return this.cacheArcLengths = b
    },
    updateArcLengths: function() {
        this.needsUpdate = !0;
        this.getLengths()
    },
    getUtoTmapping: function(a, b) {
        var c = this.getLengths(), d = 0, e = c.length, f;
        f = b ? b : a * c[e - 1];
        for (var g = 0, h = e - 1, k; g <= h; )
            if (d = Math.floor(g + (h - g) / 2),
            k = c[d] - f,
            0 > k)
                g = d + 1;
            else if (0 < k)
                h = d - 1;
            else {
                h = d;
                break
            }
        d = h;
        if (c[d] === f)
            return d / (e - 1);
        g = c[d];
        return c = (d + (f - g) / (c[d + 1] - g)) / (e - 1)
    },
    getTangent: function(a) {
        var b = a - 1E-4;
        a += 1E-4;
        0 > b && (b = 0);
        1 < a && (a = 1);
        b = this.getPoint(b);
        return this.getPoint(a).clone().sub(b).normalize()
    },
    getTangentAt: function(a) {
        a = this.getUtoTmapping(a);
        return this.getTangent(a)
    }
};
THREE.Curve.create = function(a, b) {
    a.prototype = Object.create(THREE.Curve.prototype);
    a.prototype.constructor = a;
    a.prototype.getPoint = b;
    return a
}
;
THREE.CurvePath = function() {
    this.curves = [];
    this.autoClose = !1
}
;
THREE.CurvePath.prototype = Object.create(THREE.Curve.prototype);
THREE.CurvePath.prototype.constructor = THREE.CurvePath;
THREE.CurvePath.prototype.add = function(a) {
    this.curves.push(a)
}
;
THREE.CurvePath.prototype.closePath = function() {
    var a = this.curves[0].getPoint(0)
      , b = this.curves[this.curves.length - 1].getPoint(1);
    a.equals(b) || this.curves.push(new THREE.LineCurve(b,a))
}
;
THREE.CurvePath.prototype.getPoint = function(a) {
    for (var b = a * this.getLength(), c = this.getCurveLengths(), d = 0; d < c.length; ) {
        if (c[d] >= b)
            return a = this.curves[d],
            b = 1 - (c[d] - b) / a.getLength(),
            a.getPointAt(b);
        d++
    }
    return null
}
;
THREE.CurvePath.prototype.getLength = function() {
    var a = this.getCurveLengths();
    return a[a.length - 1]
}
;
THREE.CurvePath.prototype.getCurveLengths = function() {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
        return this.cacheLengths;
    for (var a = [], b = 0, c = 0, d = this.curves.length; c < d; c++)
        b += this.curves[c].getLength(),
        a.push(b);
    return this.cacheLengths = a
}
;
THREE.CurvePath.prototype.createPointsGeometry = function(a) {
    a = this.getPoints(a);
    return this.createGeometry(a)
}
;
THREE.CurvePath.prototype.createSpacedPointsGeometry = function(a) {
    a = this.getSpacedPoints(a);
    return this.createGeometry(a)
}
;
THREE.CurvePath.prototype.createGeometry = function(a) {
    for (var b = new THREE.Geometry, c = 0, d = a.length; c < d; c++) {
        var e = a[c];
        b.vertices.push(new THREE.Vector3(e.x,e.y,e.z || 0))
    }
    return b
}
;
THREE.Font = function(a) {
    this.data = a
}
;
THREE.Font.prototype = {
    constructor: THREE.Font,
    generateShapes: function(a, b, c) {
        void 0 === b && (b = 100);
        void 0 === c && (c = 4);
        var d = this.data;
        a = String(a).split("");
        var e = b / d.resolution
          , f = 0;
        b = [];
        for (var g = 0; g < a.length; g++) {
            var h;
            h = e;
            var k = f
              , l = d.glyphs[a[g]] || d.glyphs["?"];
            if (l) {
                var p = new THREE.Path
                  , n = []
                  , m = THREE.ShapeUtils.b2
                  , q = THREE.ShapeUtils.b3
                  , u = void 0
                  , v = void 0
                  , t = v = u = void 0
                  , s = void 0
                  , w = void 0
                  , E = void 0
                  , x = void 0
                  , D = void 0
                  , s = void 0;
                if (l.o)
                    for (var z = l._cachedOutline || (l._cachedOutline = l.o.split(" ")), y = 0, B = z.length; y < B; )
                        switch (z[y++]) {
                        case "m":
                            u = z[y++] * h + k;
                            v = z[y++] * h;
                            p.moveTo(u, v);
                            break;
                        case "l":
                            u = z[y++] * h + k;
                            v = z[y++] * h;
                            p.lineTo(u, v);
                            break;
                        case "q":
                            u = z[y++] * h + k;
                            v = z[y++] * h;
                            w = z[y++] * h + k;
                            E = z[y++] * h;
                            p.quadraticCurveTo(w, E, u, v);
                            if (s = n[n.length - 1])
                                for (var t = s.x, s = s.y, G = 1; G <= c; G++) {
                                    var F = G / c;
                                    m(F, t, w, u);
                                    m(F, s, E, v)
                                }
                            break;
                        case "b":
                            if (u = z[y++] * h + k,
                            v = z[y++] * h,
                            w = z[y++] * h + k,
                            E = z[y++] * h,
                            x = z[y++] * h + k,
                            D = z[y++] * h,
                            p.bezierCurveTo(w, E, x, D, u, v),
                            s = n[n.length - 1])
                                for (t = s.x,
                                s = s.y,
                                G = 1; G <= c; G++)
                                    F = G / c,
                                    q(F, t, w, x, u),
                                    q(F, s, E, D, v)
                        }
                h = {
                    offset: l.ha * h,
                    path: p
                }
            } else
                h = void 0;
            f += h.offset;
            b.push(h.path)
        }
        c = [];
        d = 0;
        for (a = b.length; d < a; d++)
            Array.prototype.push.apply(c, b[d].toShapes());
        return c
    }
};
THREE.Path = function(a) {
    THREE.CurvePath.call(this);
    this.actions = [];
    a && this.fromPoints(a)
}
;
THREE.Path.prototype = Object.create(THREE.CurvePath.prototype);
THREE.Path.prototype.constructor = THREE.Path;
THREE.Path.prototype.fromPoints = function(a) {
    this.moveTo(a[0].x, a[0].y);
    for (var b = 1, c = a.length; b < c; b++)
        this.lineTo(a[b].x, a[b].y)
}
;
THREE.Path.prototype.moveTo = function(a, b) {
    this.actions.push({
        action: "moveTo",
        args: [a, b]
    })
}
;
THREE.Path.prototype.lineTo = function(a, b) {
    var c = this.actions[this.actions.length - 1].args
      , c = new THREE.LineCurve(new THREE.Vector2(c[c.length - 2],c[c.length - 1]),new THREE.Vector2(a,b));
    this.curves.push(c);
    this.actions.push({
        action: "lineTo",
        args: [a, b]
    })
}
;
THREE.Path.prototype.quadraticCurveTo = function(a, b, c, d) {
    var e = this.actions[this.actions.length - 1].args
      , e = new THREE.QuadraticBezierCurve(new THREE.Vector2(e[e.length - 2],e[e.length - 1]),new THREE.Vector2(a,b),new THREE.Vector2(c,d));
    this.curves.push(e);
    this.actions.push({
        action: "quadraticCurveTo",
        args: [a, b, c, d]
    })
}
;
THREE.Path.prototype.bezierCurveTo = function(a, b, c, d, e, f) {
    var g = this.actions[this.actions.length - 1].args
      , g = new THREE.CubicBezierCurve(new THREE.Vector2(g[g.length - 2],g[g.length - 1]),new THREE.Vector2(a,b),new THREE.Vector2(c,d),new THREE.Vector2(e,f));
    this.curves.push(g);
    this.actions.push({
        action: "bezierCurveTo",
        args: [a, b, c, d, e, f]
    })
}
;
THREE.Path.prototype.splineThru = function(a) {
    var b = Array.prototype.slice.call(arguments)
      , c = this.actions[this.actions.length - 1].args
      , c = [new THREE.Vector2(c[c.length - 2],c[c.length - 1])];
    Array.prototype.push.apply(c, a);
    c = new THREE.SplineCurve(c);
    this.curves.push(c);
    this.actions.push({
        action: "splineThru",
        args: b
    })
}
;
THREE.Path.prototype.arc = function(a, b, c, d, e, f) {
    var g = this.actions[this.actions.length - 1].args;
    this.absarc(a + g[g.length - 2], b + g[g.length - 1], c, d, e, f)
}
;
THREE.Path.prototype.absarc = function(a, b, c, d, e, f) {
    this.absellipse(a, b, c, c, d, e, f)
}
;
THREE.Path.prototype.ellipse = function(a, b, c, d, e, f, g, h) {
    var k = this.actions[this.actions.length - 1].args;
    this.absellipse(a + k[k.length - 2], b + k[k.length - 1], c, d, e, f, g, h)
}
;
THREE.Path.prototype.absellipse = function(a, b, c, d, e, f, g, h) {
    var k = [a, b, c, d, e, f, g, h || 0];
    a = new THREE.EllipseCurve(a,b,c,d,e,f,g,h);
    this.curves.push(a);
    a = a.getPoint(1);
    k.push(a.x);
    k.push(a.y);
    this.actions.push({
        action: "ellipse",
        args: k
    })
}
;
THREE.Path.prototype.getSpacedPoints = function(a) {
    a || (a = 40);
    for (var b = [], c = 0; c < a; c++)
        b.push(this.getPoint(c / a));
    this.autoClose && b.push(b[0]);
    return b
}
;
THREE.Path.prototype.getPoints = function(a) {
    a = a || 12;
    for (var b = THREE.ShapeUtils.b2, c = THREE.ShapeUtils.b3, d = [], e, f, g, h, k, l, p, n, m, q, u = 0, v = this.actions.length; u < v; u++) {
        m = this.actions[u];
        var t = m.args;
        switch (m.action) {
        case "moveTo":
            d.push(new THREE.Vector2(t[0],t[1]));
            break;
        case "lineTo":
            d.push(new THREE.Vector2(t[0],t[1]));
            break;
        case "quadraticCurveTo":
            e = t[2];
            f = t[3];
            k = t[0];
            l = t[1];
            0 < d.length ? (m = d[d.length - 1],
            p = m.x,
            n = m.y) : (m = this.actions[u - 1].args,
            p = m[m.length - 2],
            n = m[m.length - 1]);
            for (t = 1; t <= a; t++)
                q = t / a,
                m = b(q, p, k, e),
                q = b(q, n, l, f),
                d.push(new THREE.Vector2(m,q));
            break;
        case "bezierCurveTo":
            e = t[4];
            f = t[5];
            k = t[0];
            l = t[1];
            g = t[2];
            h = t[3];
            0 < d.length ? (m = d[d.length - 1],
            p = m.x,
            n = m.y) : (m = this.actions[u - 1].args,
            p = m[m.length - 2],
            n = m[m.length - 1]);
            for (t = 1; t <= a; t++)
                q = t / a,
                m = c(q, p, k, g, e),
                q = c(q, n, l, h, f),
                d.push(new THREE.Vector2(m,q));
            break;
        case "splineThru":
            m = this.actions[u - 1].args;
            q = [new THREE.Vector2(m[m.length - 2],m[m.length - 1])];
            m = a * t[0].length;
            q = q.concat(t[0]);
            q = new THREE.SplineCurve(q);
            for (t = 1; t <= m; t++)
                d.push(q.getPointAt(t / m));
            break;
        case "arc":
            e = t[0];
            f = t[1];
            l = t[2];
            g = t[3];
            m = t[4];
            k = !!t[5];
            p = m - g;
            n = 2 * a;
            for (t = 1; t <= n; t++)
                q = t / n,
                k || (q = 1 - q),
                q = g + q * p,
                m = e + l * Math.cos(q),
                q = f + l * Math.sin(q),
                d.push(new THREE.Vector2(m,q));
            break;
        case "ellipse":
            e = t[0];
            f = t[1];
            l = t[2];
            h = t[3];
            g = t[4];
            m = t[5];
            k = !!t[6];
            var s = t[7];
            p = m - g;
            n = 2 * a;
            var w, E;
            0 !== s && (w = Math.cos(s),
            E = Math.sin(s));
            for (t = 1; t <= n; t++) {
                q = t / n;
                k || (q = 1 - q);
                q = g + q * p;
                m = e + l * Math.cos(q);
                q = f + h * Math.sin(q);
                if (0 !== s) {
                    var x = m;
                    m = (x - e) * w - (q - f) * E + e;
                    q = (x - e) * E + (q - f) * w + f
                }
                d.push(new THREE.Vector2(m,q))
            }
        }
    }
    a = d[d.length - 1];
    Math.abs(a.x - d[0].x) < Number.EPSILON && Math.abs(a.y - d[0].y) < Number.EPSILON && d.splice(d.length - 1, 1);
    this.autoClose && d.push(d[0]);
    return d
}
;
THREE.Path.prototype.toShapes = function(a, b) {
    function c(a) {
        for (var b = [], c = 0, d = a.length; c < d; c++) {
            var e = a[c]
              , f = new THREE.Shape;
            f.actions = e.actions;
            f.curves = e.curves;
            b.push(f)
        }
        return b
    }
    function d(a, b) {
        for (var c = b.length, d = !1, e = c - 1, f = 0; f < c; e = f++) {
            var g = b[e]
              , h = b[f]
              , k = h.x - g.x
              , l = h.y - g.y;
            if (Math.abs(l) > Number.EPSILON) {
                if (0 > l && (g = b[f],
                k = -k,
                h = b[e],
                l = -l),
                !(a.y < g.y || a.y > h.y))
                    if (a.y === g.y) {
                        if (a.x === g.x)
                            return !0
                    } else {
                        e = l * (a.x - g.x) - k * (a.y - g.y);
                        if (0 === e)
                            return !0;
                        0 > e || (d = !d)
                    }
            } else if (a.y === g.y && (h.x <= a.x && a.x <= g.x || g.x <= a.x && a.x <= h.x))
                return !0
        }
        return d
    }
    var e = THREE.ShapeUtils.isClockWise
      , f = function(a) {
        for (var b = [], c = new THREE.Path, d = 0, e = a.length; d < e; d++) {
            var f = a[d]
              , g = f.args
              , f = f.action;
            "moveTo" === f && 0 !== c.actions.length && (b.push(c),
            c = new THREE.Path);
            c[f].apply(c, g)
        }
        0 !== c.actions.length && b.push(c);
        return b
    }(this.actions);
    if (0 === f.length)
        return [];
    if (!0 === b)
        return c(f);
    var g, h, k, l = [];
    if (1 === f.length)
        return h = f[0],
        k = new THREE.Shape,
        k.actions = h.actions,
        k.curves = h.curves,
        l.push(k),
        l;
    var p = !e(f[0].getPoints())
      , p = a ? !p : p;
    k = [];
    var n = [], m = [], q = 0, u;
    n[q] = void 0;
    m[q] = [];
    for (var v = 0, t = f.length; v < t; v++)
        h = f[v],
        u = h.getPoints(),
        g = e(u),
        (g = a ? !g : g) ? (!p && n[q] && q++,
        n[q] = {
            s: new THREE.Shape,
            p: u
        },
        n[q].s.actions = h.actions,
        n[q].s.curves = h.curves,
        p && q++,
        m[q] = []) : m[q].push({
            h: h,
            p: u[0]
        });
    if (!n[0])
        return c(f);
    if (1 < n.length) {
        v = !1;
        h = [];
        e = 0;
        for (f = n.length; e < f; e++)
            k[e] = [];
        e = 0;
        for (f = n.length; e < f; e++)
            for (g = m[e],
            p = 0; p < g.length; p++) {
                q = g[p];
                u = !0;
                for (t = 0; t < n.length; t++)
                    d(q.p, n[t].p) && (e !== t && h.push({
                        froms: e,
                        tos: t,
                        hole: p
                    }),
                    u ? (u = !1,
                    k[t].push(q)) : v = !0);
                u && k[e].push(q)
            }
        0 < h.length && (v || (m = k))
    }
    v = 0;
    for (e = n.length; v < e; v++)
        for (k = n[v].s,
        l.push(k),
        h = m[v],
        f = 0,
        g = h.length; f < g; f++)
            k.holes.push(h[f].h);
    return l
}
;
THREE.Shape = function() {
    THREE.Path.apply(this, arguments);
    this.holes = []
}
;
THREE.Shape.prototype = Object.create(THREE.Path.prototype);
THREE.Shape.prototype.constructor = THREE.Shape;
THREE.Shape.prototype.extrude = function(a) {
    return new THREE.ExtrudeGeometry(this,a)
}
;
THREE.Shape.prototype.makeGeometry = function(a) {
    return new THREE.ShapeGeometry(this,a)
}
;
THREE.Shape.prototype.getPointsHoles = function(a) {
    for (var b = [], c = 0, d = this.holes.length; c < d; c++)
        b[c] = this.holes[c].getPoints(a);
    return b
}
;
THREE.Shape.prototype.extractAllPoints = function(a) {
    return {
        shape: this.getPoints(a),
        holes: this.getPointsHoles(a)
    }
}
;
THREE.Shape.prototype.extractPoints = function(a) {
    return this.extractAllPoints(a)
}
;
THREE.LineCurve = function(a, b) {
    this.v1 = a;
    this.v2 = b
}
;
THREE.LineCurve.prototype = Object.create(THREE.Curve.prototype);
THREE.LineCurve.prototype.constructor = THREE.LineCurve;
THREE.LineCurve.prototype.getPoint = function(a) {
    var b = this.v2.clone().sub(this.v1);
    b.multiplyScalar(a).add(this.v1);
    return b
}
;
THREE.LineCurve.prototype.getPointAt = function(a) {
    return this.getPoint(a)
}
;
THREE.LineCurve.prototype.getTangent = function(a) {
    return this.v2.clone().sub(this.v1).normalize()
}
;
THREE.QuadraticBezierCurve = function(a, b, c) {
    this.v0 = a;
    this.v1 = b;
    this.v2 = c
}
;
THREE.QuadraticBezierCurve.prototype = Object.create(THREE.Curve.prototype);
THREE.QuadraticBezierCurve.prototype.constructor = THREE.QuadraticBezierCurve;
THREE.QuadraticBezierCurve.prototype.getPoint = function(a) {
    var b = THREE.ShapeUtils.b2;
    return new THREE.Vector2(b(a, this.v0.x, this.v1.x, this.v2.x),b(a, this.v0.y, this.v1.y, this.v2.y))
}
;
THREE.QuadraticBezierCurve.prototype.getTangent = function(a) {
    var b = THREE.CurveUtils.tangentQuadraticBezier;
    return (new THREE.Vector2(b(a, this.v0.x, this.v1.x, this.v2.x),b(a, this.v0.y, this.v1.y, this.v2.y))).normalize()
}
;
THREE.CubicBezierCurve = function(a, b, c, d) {
    this.v0 = a;
    this.v1 = b;
    this.v2 = c;
    this.v3 = d
}
;
THREE.CubicBezierCurve.prototype = Object.create(THREE.Curve.prototype);
THREE.CubicBezierCurve.prototype.constructor = THREE.CubicBezierCurve;
THREE.CubicBezierCurve.prototype.getPoint = function(a) {
    var b = THREE.ShapeUtils.b3;
    return new THREE.Vector2(b(a, this.v0.x, this.v1.x, this.v2.x, this.v3.x),b(a, this.v0.y, this.v1.y, this.v2.y, this.v3.y))
}
;
THREE.CubicBezierCurve.prototype.getTangent = function(a) {
    var b = THREE.CurveUtils.tangentCubicBezier;
    return (new THREE.Vector2(b(a, this.v0.x, this.v1.x, this.v2.x, this.v3.x),b(a, this.v0.y, this.v1.y, this.v2.y, this.v3.y))).normalize()
}
;
THREE.SplineCurve = function(a) {
    this.points = void 0 == a ? [] : a
}
;
THREE.SplineCurve.prototype = Object.create(THREE.Curve.prototype);
THREE.SplineCurve.prototype.constructor = THREE.SplineCurve;
THREE.SplineCurve.prototype.getPoint = function(a) {
    var b = this.points;
    a *= b.length - 1;
    var c = Math.floor(a);
    a -= c;
    var d = b[0 === c ? c : c - 1]
      , e = b[c]
      , f = b[c > b.length - 2 ? b.length - 1 : c + 1]
      , b = b[c > b.length - 3 ? b.length - 1 : c + 2]
      , c = THREE.CurveUtils.interpolate;
    return new THREE.Vector2(c(d.x, e.x, f.x, b.x, a),c(d.y, e.y, f.y, b.y, a))
}
;
THREE.EllipseCurve = function(a, b, c, d, e, f, g, h) {
    this.aX = a;
    this.aY = b;
    this.xRadius = c;
    this.yRadius = d;
    this.aStartAngle = e;
    this.aEndAngle = f;
    this.aClockwise = g;
    this.aRotation = h || 0
}
;
THREE.EllipseCurve.prototype = Object.create(THREE.Curve.prototype);
THREE.EllipseCurve.prototype.constructor = THREE.EllipseCurve;
THREE.EllipseCurve.prototype.getPoint = function(a) {
    var b = this.aEndAngle - this.aStartAngle;
    0 > b && (b += 2 * Math.PI);
    b > 2 * Math.PI && (b -= 2 * Math.PI);
    b = !0 === this.aClockwise ? this.aEndAngle + (1 - a) * (2 * Math.PI - b) : this.aStartAngle + a * b;
    a = this.aX + this.xRadius * Math.cos(b);
    var c = this.aY + this.yRadius * Math.sin(b);
    if (0 !== this.aRotation) {
        var b = Math.cos(this.aRotation)
          , d = Math.sin(this.aRotation)
          , e = a;
        a = (e - this.aX) * b - (c - this.aY) * d + this.aX;
        c = (e - this.aX) * d + (c - this.aY) * b + this.aY
    }
    return new THREE.Vector2(a,c)
}
;
THREE.ArcCurve = function(a, b, c, d, e, f) {
    THREE.EllipseCurve.call(this, a, b, c, c, d, e, f)
}
;
THREE.ArcCurve.prototype = Object.create(THREE.EllipseCurve.prototype);
THREE.ArcCurve.prototype.constructor = THREE.ArcCurve;
THREE.LineCurve3 = THREE.Curve.create(function(a, b) {
    this.v1 = a;
    this.v2 = b
}, function(a) {
    var b = new THREE.Vector3;
    b.subVectors(this.v2, this.v1);
    b.multiplyScalar(a);
    b.add(this.v1);
    return b
});
THREE.QuadraticBezierCurve3 = THREE.Curve.create(function(a, b, c) {
    this.v0 = a;
    this.v1 = b;
    this.v2 = c
}, function(a) {
    var b = THREE.ShapeUtils.b2;
    return new THREE.Vector3(b(a, this.v0.x, this.v1.x, this.v2.x),b(a, this.v0.y, this.v1.y, this.v2.y),b(a, this.v0.z, this.v1.z, this.v2.z))
});
THREE.CubicBezierCurve3 = THREE.Curve.create(function(a, b, c, d) {
    this.v0 = a;
    this.v1 = b;
    this.v2 = c;
    this.v3 = d
}, function(a) {
    var b = THREE.ShapeUtils.b3;
    return new THREE.Vector3(b(a, this.v0.x, this.v1.x, this.v2.x, this.v3.x),b(a, this.v0.y, this.v1.y, this.v2.y, this.v3.y),b(a, this.v0.z, this.v1.z, this.v2.z, this.v3.z))
});
THREE.SplineCurve3 = THREE.Curve.create(function(a) {
    console.warn("THREE.SplineCurve3 will be deprecated. Please use THREE.CatmullRomCurve3");
    this.points = void 0 == a ? [] : a
}, function(a) {
    var b = this.points;
    a *= b.length - 1;
    var c = Math.floor(a);
    a -= c;
    var d = b[0 == c ? c : c - 1]
      , e = b[c]
      , f = b[c > b.length - 2 ? b.length - 1 : c + 1]
      , b = b[c > b.length - 3 ? b.length - 1 : c + 2]
      , c = THREE.CurveUtils.interpolate;
    return new THREE.Vector3(c(d.x, e.x, f.x, b.x, a),c(d.y, e.y, f.y, b.y, a),c(d.z, e.z, f.z, b.z, a))
});
THREE.CatmullRomCurve3 = function() {
    function a() {}
    var b = new THREE.Vector3
      , c = new a
      , d = new a
      , e = new a;
    a.prototype.init = function(a, b, c, d) {
        this.c0 = a;
        this.c1 = c;
        this.c2 = -3 * a + 3 * b - 2 * c - d;
        this.c3 = 2 * a - 2 * b + c + d
    }
    ;
    a.prototype.initNonuniformCatmullRom = function(a, b, c, d, e, p, n) {
        a = ((b - a) / e - (c - a) / (e + p) + (c - b) / p) * p;
        d = ((c - b) / p - (d - b) / (p + n) + (d - c) / n) * p;
        this.init(b, c, a, d)
    }
    ;
    a.prototype.initCatmullRom = function(a, b, c, d, e) {
        this.init(b, c, e * (c - a), e * (d - b))
    }
    ;
    a.prototype.calc = function(a) {
        var b = a * a;
        return this.c0 + this.c1 * a + this.c2 * b + this.c3 * b * a
    }
    ;
    return THREE.Curve.create(function(a) {
        this.points = a || [];
        this.closed = !1
    }, function(a) {
        var g = this.points, h, k;
        k = g.length;
        2 > k && console.log("duh, you need at least 2 points");
        a *= k - (this.closed ? 0 : 1);
        h = Math.floor(a);
        a -= h;
        this.closed ? h += 0 < h ? 0 : (Math.floor(Math.abs(h) / g.length) + 1) * g.length : 0 === a && h === k - 1 && (h = k - 2,
        a = 1);
        var l, p, n;
        this.closed || 0 < h ? l = g[(h - 1) % k] : (b.subVectors(g[0], g[1]).add(g[0]),
        l = b);
        p = g[h % k];
        n = g[(h + 1) % k];
        this.closed || h + 2 < k ? g = g[(h + 2) % k] : (b.subVectors(g[k - 1], g[k - 2]).add(g[k - 1]),
        g = b);
        if (void 0 === this.type || "centripetal" === this.type || "chordal" === this.type) {
            var m = "chordal" === this.type ? .5 : .25;
            k = Math.pow(l.distanceToSquared(p), m);
            h = Math.pow(p.distanceToSquared(n), m);
            m = Math.pow(n.distanceToSquared(g), m);
            1E-4 > h && (h = 1);
            1E-4 > k && (k = h);
            1E-4 > m && (m = h);
            c.initNonuniformCatmullRom(l.x, p.x, n.x, g.x, k, h, m);
            d.initNonuniformCatmullRom(l.y, p.y, n.y, g.y, k, h, m);
            e.initNonuniformCatmullRom(l.z, p.z, n.z, g.z, k, h, m)
        } else
            "catmullrom" === this.type && (k = void 0 !== this.tension ? this.tension : .5,
            c.initCatmullRom(l.x, p.x, n.x, g.x, k),
            d.initCatmullRom(l.y, p.y, n.y, g.y, k),
            e.initCatmullRom(l.z, p.z, n.z, g.z, k));
        return new THREE.Vector3(c.calc(a),d.calc(a),e.calc(a))
    })
}();
THREE.ClosedSplineCurve3 = function(a) {
    console.warn("THREE.ClosedSplineCurve3 has been deprecated. Please use THREE.CatmullRomCurve3.");
    THREE.CatmullRomCurve3.call(this, a);
    this.type = "catmullrom";
    this.closed = !0
}
;
THREE.ClosedSplineCurve3.prototype = Object.create(THREE.CatmullRomCurve3.prototype);
THREE.BoxGeometry = function(a, b, c, d, e, f) {
    THREE.Geometry.call(this);
    this.type = "BoxGeometry";
    this.parameters = {
        width: a,
        height: b,
        depth: c,
        widthSegments: d,
        heightSegments: e,
        depthSegments: f
    };
    this.fromBufferGeometry(new THREE.BoxBufferGeometry(a,b,c,d,e,f));
    this.mergeVertices()
}
;
THREE.BoxGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.BoxGeometry.prototype.constructor = THREE.BoxGeometry;
THREE.CubeGeometry = THREE.BoxGeometry;
THREE.BoxBufferGeometry = function(a, b, c, d, e, f) {
    function g(a, b, c, d, e, f, g, k, l, L, A) {
        var N = f / l
          , M = g / L
          , I = f / 2
          , O = g / 2
          , Q = k / 2;
        g = l + 1;
        for (var P = L + 1, T = f = 0, J = new THREE.Vector3, C = 0; C < P; C++)
            for (var Z = C * M - O, S = 0; S < g; S++)
                J[a] = (S * N - I) * d,
                J[b] = Z * e,
                J[c] = Q,
                n[u] = J.x,
                n[u + 1] = J.y,
                n[u + 2] = J.z,
                J[a] = 0,
                J[b] = 0,
                J[c] = 0 < k ? 1 : -1,
                m[u] = J.x,
                m[u + 1] = J.y,
                m[u + 2] = J.z,
                q[v] = S / l,
                q[v + 1] = 1 - C / L,
                u += 3,
                v += 2,
                f += 1;
        for (C = 0; C < L; C++)
            for (S = 0; S < l; S++)
                a = s + S + g * (C + 1),
                b = s + (S + 1) + g * (C + 1),
                c = s + (S + 1) + g * C,
                p[t] = s + S + g * C,
                p[t + 1] = a,
                p[t + 2] = c,
                p[t + 3] = a,
                p[t + 4] = b,
                p[t + 5] = c,
                t += 6,
                T += 6;
        h.addGroup(w, T, A);
        w += T;
        s += f
    }
    THREE.BufferGeometry.call(this);
    this.type = "BoxBufferGeometry";
    this.parameters = {
        width: a,
        height: b,
        depth: c,
        widthSegments: d,
        heightSegments: e,
        depthSegments: f
    };
    var h = this;
    d = Math.floor(d) || 1;
    e = Math.floor(e) || 1;
    f = Math.floor(f) || 1;
    var k = function(a, b, c) {
        a = 0 + a * b * 2 + a * c * 2;
        a += c * b * 2;
        return 4 * a
    }(d, e, f)
      , l = k / 4 * 6
      , p = new (65535 < l ? Uint32Array : Uint16Array)(l)
      , n = new Float32Array(3 * k)
      , m = new Float32Array(3 * k)
      , q = new Float32Array(2 * k)
      , u = 0
      , v = 0
      , t = 0
      , s = 0
      , w = 0;
    g("z", "y", "x", -1, -1, c, b, a, f, e, 0);
    g("z", "y", "x", 1, -1, c, b, -a, f, e, 1);
    g("x", "z", "y", 1, 1, a, c, b, d, f, 2);
    g("x", "z", "y", 1, -1, a, c, -b, d, f, 3);
    g("x", "y", "z", 1, -1, a, b, c, d, e, 4);
    g("x", "y", "z", -1, -1, a, b, -c, d, e, 5);
    this.setIndex(new THREE.BufferAttribute(p,1));
    this.addAttribute("position", new THREE.BufferAttribute(n,3));
    this.addAttribute("normal", new THREE.BufferAttribute(m,3));
    this.addAttribute("uv", new THREE.BufferAttribute(q,2))
}
;
THREE.BoxBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype);
THREE.BoxBufferGeometry.prototype.constructor = THREE.BoxBufferGeometry;
THREE.CircleGeometry = function(a, b, c, d) {
    THREE.Geometry.call(this);
    this.type = "CircleGeometry";
    this.parameters = {
        radius: a,
        segments: b,
        thetaStart: c,
        thetaLength: d
    };
    this.fromBufferGeometry(new THREE.CircleBufferGeometry(a,b,c,d))
}
;
THREE.CircleGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.CircleGeometry.prototype.constructor = THREE.CircleGeometry;
THREE.CircleBufferGeometry = function(a, b, c, d) {
    THREE.BufferGeometry.call(this);
    this.type = "CircleBufferGeometry";
    this.parameters = {
        radius: a,
        segments: b,
        thetaStart: c,
        thetaLength: d
    };
    a = a || 50;
    b = void 0 !== b ? Math.max(3, b) : 8;
    c = void 0 !== c ? c : 0;
    d = void 0 !== d ? d : 2 * Math.PI;
    var e = b + 2
      , f = new Float32Array(3 * e)
      , g = new Float32Array(3 * e)
      , e = new Float32Array(2 * e);
    g[2] = 1;
    e[0] = .5;
    e[1] = .5;
    for (var h = 0, k = 3, l = 2; h <= b; h++,
    k += 3,
    l += 2) {
        var p = c + h / b * d;
        f[k] = a * Math.cos(p);
        f[k + 1] = a * Math.sin(p);
        g[k + 2] = 1;
        e[l] = (f[k] / a + 1) / 2;
        e[l + 1] = (f[k + 1] / a + 1) / 2
    }
    c = [];
    for (k = 1; k <= b; k++)
        c.push(k, k + 1, 0);
    this.setIndex(new THREE.BufferAttribute(new Uint16Array(c),1));
    this.addAttribute("position", new THREE.BufferAttribute(f,3));
    this.addAttribute("normal", new THREE.BufferAttribute(g,3));
    this.addAttribute("uv", new THREE.BufferAttribute(e,2));
    this.boundingSphere = new THREE.Sphere(new THREE.Vector3,a)
}
;
THREE.CircleBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype);
THREE.CircleBufferGeometry.prototype.constructor = THREE.CircleBufferGeometry;
THREE.CylinderBufferGeometry = function(a, b, c, d, e, f, g, h) {
    function k(c) {
        var e, f, k;
        k = new THREE.Vector2;
        var l = new THREE.Vector3
          , p = !0 === c ? a : b
          , s = !0 === c ? 1 : -1;
        f = v;
        for (e = 1; e <= d; e++)
            m.setXYZ(v, 0, w * s, 0),
            q.setXYZ(v, 0, s, 0),
            !0 === c ? (k.x = e / d,
            k.y = 0) : (k.x = (e - 1) / d,
            k.y = 1),
            u.setXY(v, k.x, k.y),
            v++;
        k = v;
        for (e = 0; e <= d; e++) {
            var F = e / d;
            l.x = p * Math.sin(F * h + g);
            l.y = w * s;
            l.z = p * Math.cos(F * h + g);
            m.setXYZ(v, l.x, l.y, l.z);
            q.setXYZ(v, 0, s, 0);
            u.setXY(v, F, !0 === c ? 1 : 0);
            v++
        }
        for (e = 0; e < d; e++)
            l = f + e,
            p = k + e,
            !0 === c ? (n.setX(t, p),
            t++,
            n.setX(t, p + 1)) : (n.setX(t, p + 1),
            t++,
            n.setX(t, p)),
            t++,
            n.setX(t, l),
            t++
    }
    THREE.BufferGeometry.call(this);
    this.type = "CylinderBufferGeometry";
    this.parameters = {
        radiusTop: a,
        radiusBottom: b,
        height: c,
        radialSegments: d,
        heightSegments: e,
        openEnded: f,
        thetaStart: g,
        thetaLength: h
    };
    a = void 0 !== a ? a : 20;
    b = void 0 !== b ? b : 20;
    c = void 0 !== c ? c : 100;
    d = Math.floor(d) || 8;
    e = Math.floor(e) || 1;
    f = void 0 !== f ? f : !1;
    g = void 0 !== g ? g : 0;
    h = void 0 !== h ? h : 2 * Math.PI;
    var l = function() {
        var a = (d + 1) * (e + 1);
        !1 === f && (a += 2 * (d + 1) + 2 * d);
        return a
    }()
      , p = function() {
        var a = d * e * 6;
        !1 === f && (a += 6 * d);
        return a
    }()
      , n = new THREE.BufferAttribute(new (65535 < p ? Uint32Array : Uint16Array)(p),1)
      , m = new THREE.BufferAttribute(new Float32Array(3 * l),3)
      , q = new THREE.BufferAttribute(new Float32Array(3 * l),3)
      , u = new THREE.BufferAttribute(new Float32Array(2 * l),2)
      , v = 0
      , t = 0
      , s = []
      , w = c / 2;
    (function() {
        var f, k, l = new THREE.Vector3, p = new THREE.Vector3, y = (b - a) / c;
        for (k = 0; k <= e; k++) {
            var B = []
              , G = k / e
              , F = G * (b - a) + a;
            for (f = 0; f <= d; f++) {
                var H = f / d;
                p.x = F * Math.sin(H * h + g);
                p.y = -G * c + w;
                p.z = F * Math.cos(H * h + g);
                m.setXYZ(v, p.x, p.y, p.z);
                l.copy(p);
                if (0 === a && 0 === k || 0 === b && k === e)
                    l.x = Math.sin(H * h + g),
                    l.z = Math.cos(H * h + g);
                l.setY(Math.sqrt(l.x * l.x + l.z * l.z) * y).normalize();
                q.setXYZ(v, l.x, l.y, l.z);
                u.setXY(v, H, 1 - G);
                B.push(v);
                v++
            }
            s.push(B)
        }
        for (f = 0; f < d; f++)
            for (k = 0; k < e; k++)
                l = s[k + 1][f],
                p = s[k + 1][f + 1],
                y = s[k][f + 1],
                n.setX(t, s[k][f]),
                t++,
                n.setX(t, l),
                t++,
                n.setX(t, y),
                t++,
                n.setX(t, l),
                t++,
                n.setX(t, p),
                t++,
                n.setX(t, y),
                t++
    }
    )();
    !1 === f && (0 < a && k(!0),
    0 < b && k(!1));
    this.setIndex(n);
    this.addAttribute("position", m);
    this.addAttribute("normal", q);
    this.addAttribute("uv", u)
}
;
THREE.CylinderBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype);
THREE.CylinderBufferGeometry.prototype.constructor = THREE.CylinderBufferGeometry;
THREE.CylinderGeometry = function(a, b, c, d, e, f, g, h) {
    THREE.Geometry.call(this);
    this.type = "CylinderGeometry";
    this.parameters = {
        radiusTop: a,
        radiusBottom: b,
        height: c,
        radialSegments: d,
        heightSegments: e,
        openEnded: f,
        thetaStart: g,
        thetaLength: h
    };
    this.fromBufferGeometry(new THREE.CylinderBufferGeometry(a,b,c,d,e,f,g,h));
    this.mergeVertices()
}
;
THREE.CylinderGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.CylinderGeometry.prototype.constructor = THREE.CylinderGeometry;
THREE.EdgesGeometry = function(a, b) {
    function c(a, b) {
        return a - b
    }
    THREE.BufferGeometry.call(this);
    var d = Math.cos(THREE.Math.degToRad(void 0 !== b ? b : 1)), e = [0, 0], f = {}, g = ["a", "b", "c"], h;
    a instanceof THREE.BufferGeometry ? (h = new THREE.Geometry,
    h.fromBufferGeometry(a)) : h = a.clone();
    h.mergeVertices();
    h.computeFaceNormals();
    var k = h.vertices;
    h = h.faces;
    for (var l = 0, p = h.length; l < p; l++)
        for (var n = h[l], m = 0; 3 > m; m++) {
            e[0] = n[g[m]];
            e[1] = n[g[(m + 1) % 3]];
            e.sort(c);
            var q = e.toString();
            void 0 === f[q] ? f[q] = {
                vert1: e[0],
                vert2: e[1],
                face1: l,
                face2: void 0
            } : f[q].face2 = l
        }
    e = [];
    for (q in f)
        if (g = f[q],
        void 0 === g.face2 || h[g.face1].normal.dot(h[g.face2].normal) <= d)
            l = k[g.vert1],
            e.push(l.x),
            e.push(l.y),
            e.push(l.z),
            l = k[g.vert2],
            e.push(l.x),
            e.push(l.y),
            e.push(l.z);
    this.addAttribute("position", new THREE.BufferAttribute(new Float32Array(e),3))
}
;
THREE.EdgesGeometry.prototype = Object.create(THREE.BufferGeometry.prototype);
THREE.EdgesGeometry.prototype.constructor = THREE.EdgesGeometry;
THREE.ExtrudeGeometry = function(a, b) {
    "undefined" !== typeof a && (THREE.Geometry.call(this),
    this.type = "ExtrudeGeometry",
    a = Array.isArray(a) ? a : [a],
    this.addShapeList(a, b),
    this.computeFaceNormals())
}
;
THREE.ExtrudeGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.ExtrudeGeometry.prototype.constructor = THREE.ExtrudeGeometry;
THREE.ExtrudeGeometry.prototype.addShapeList = function(a, b) {
    for (var c = a.length, d = 0; d < c; d++)
        this.addShape(a[d], b)
}
;
THREE.ExtrudeGeometry.prototype.addShape = function(a, b) {
    function c(a, b, c) {
        b || console.error("THREE.ExtrudeGeometry: vec does not exist");
        return b.clone().multiplyScalar(c).add(a)
    }
    function d(a, b, c) {
        var d = 1
          , d = a.x - b.x
          , e = a.y - b.y
          , f = c.x - a.x
          , g = c.y - a.y
          , h = d * d + e * e;
        if (Math.abs(d * g - e * f) > Number.EPSILON) {
            var k = Math.sqrt(h)
              , l = Math.sqrt(f * f + g * g)
              , h = b.x - e / k;
            b = b.y + d / k;
            f = ((c.x - g / l - h) * g - (c.y + f / l - b) * f) / (d * g - e * f);
            c = h + d * f - a.x;
            a = b + e * f - a.y;
            d = c * c + a * a;
            if (2 >= d)
                return new THREE.Vector2(c,a);
            d = Math.sqrt(d / 2)
        } else
            a = !1,
            d > Number.EPSILON ? f > Number.EPSILON && (a = !0) : d < -Number.EPSILON ? f < -Number.EPSILON && (a = !0) : Math.sign(e) === Math.sign(g) && (a = !0),
            a ? (c = -e,
            a = d,
            d = Math.sqrt(h)) : (c = d,
            a = e,
            d = Math.sqrt(h / 2));
        return new THREE.Vector2(c / d,a / d)
    }
    function e(a, b) {
        var c, d;
        for (C = a.length; 0 <= --C; ) {
            c = C;
            d = C - 1;
            0 > d && (d = a.length - 1);
            for (var e = 0, f = q + 2 * p, e = 0; e < f; e++) {
                var g = P * e
                  , h = P * (e + 1)
                  , k = b + c + g
                  , g = b + d + g
                  , l = b + d + h
                  , h = b + c + h
                  , k = k + F
                  , g = g + F
                  , l = l + F
                  , h = h + F;
                G.faces.push(new THREE.Face3(k,g,h,null,null,1));
                G.faces.push(new THREE.Face3(g,l,h,null,null,1));
                k = s.generateSideWallUV(G, k, g, l, h);
                G.faceVertexUvs[0].push([k[0], k[1], k[3]]);
                G.faceVertexUvs[0].push([k[1], k[2], k[3]])
            }
        }
    }
    function f(a, b, c) {
        G.vertices.push(new THREE.Vector3(a,b,c))
    }
    function g(a, b, c) {
        a += F;
        b += F;
        c += F;
        G.faces.push(new THREE.Face3(a,b,c,null,null,0));
        a = s.generateTopUV(G, a, b, c);
        G.faceVertexUvs[0].push(a)
    }
    var h = void 0 !== b.amount ? b.amount : 100, k = void 0 !== b.bevelThickness ? b.bevelThickness : 6, l = void 0 !== b.bevelSize ? b.bevelSize : k - 2, p = void 0 !== b.bevelSegments ? b.bevelSegments : 3, n = void 0 !== b.bevelEnabled ? b.bevelEnabled : !0, m = void 0 !== b.curveSegments ? b.curveSegments : 12, q = void 0 !== b.steps ? b.steps : 1, u = b.extrudePath, v, t = !1, s = void 0 !== b.UVGenerator ? b.UVGenerator : THREE.ExtrudeGeometry.WorldUVGenerator, w, E, x, D;
    u && (v = u.getSpacedPoints(q),
    t = !0,
    n = !1,
    w = void 0 !== b.frames ? b.frames : new THREE.TubeGeometry.FrenetFrames(u,q,!1),
    E = new THREE.Vector3,
    x = new THREE.Vector3,
    D = new THREE.Vector3);
    n || (l = k = p = 0);
    var z, y, B, G = this, F = this.vertices.length, u = a.extractPoints(m), m = u.shape, H = u.holes;
    if (u = !THREE.ShapeUtils.isClockWise(m)) {
        m = m.reverse();
        y = 0;
        for (B = H.length; y < B; y++)
            z = H[y],
            THREE.ShapeUtils.isClockWise(z) && (H[y] = z.reverse());
        u = !1
    }
    var L = THREE.ShapeUtils.triangulateShape(m, H)
      , A = m;
    y = 0;
    for (B = H.length; y < B; y++)
        z = H[y],
        m = m.concat(z);
    var N, M, I, O, Q, P = m.length, T, J = L.length, u = [], C = 0;
    I = A.length;
    N = I - 1;
    for (M = C + 1; C < I; C++,
    N++,
    M++)
        N === I && (N = 0),
        M === I && (M = 0),
        u[C] = d(A[C], A[N], A[M]);
    var Z = [], S, Y = u.concat();
    y = 0;
    for (B = H.length; y < B; y++) {
        z = H[y];
        S = [];
        C = 0;
        I = z.length;
        N = I - 1;
        for (M = C + 1; C < I; C++,
        N++,
        M++)
            N === I && (N = 0),
            M === I && (M = 0),
            S[C] = d(z[C], z[N], z[M]);
        Z.push(S);
        Y = Y.concat(S)
    }
    for (N = 0; N < p; N++) {
        I = N / p;
        O = k * (1 - I);
        M = l * Math.sin(I * Math.PI / 2);
        C = 0;
        for (I = A.length; C < I; C++)
            Q = c(A[C], u[C], M),
            f(Q.x, Q.y, -O);
        y = 0;
        for (B = H.length; y < B; y++)
            for (z = H[y],
            S = Z[y],
            C = 0,
            I = z.length; C < I; C++)
                Q = c(z[C], S[C], M),
                f(Q.x, Q.y, -O)
    }
    M = l;
    for (C = 0; C < P; C++)
        Q = n ? c(m[C], Y[C], M) : m[C],
        t ? (x.copy(w.normals[0]).multiplyScalar(Q.x),
        E.copy(w.binormals[0]).multiplyScalar(Q.y),
        D.copy(v[0]).add(x).add(E),
        f(D.x, D.y, D.z)) : f(Q.x, Q.y, 0);
    for (I = 1; I <= q; I++)
        for (C = 0; C < P; C++)
            Q = n ? c(m[C], Y[C], M) : m[C],
            t ? (x.copy(w.normals[I]).multiplyScalar(Q.x),
            E.copy(w.binormals[I]).multiplyScalar(Q.y),
            D.copy(v[I]).add(x).add(E),
            f(D.x, D.y, D.z)) : f(Q.x, Q.y, h / q * I);
    for (N = p - 1; 0 <= N; N--) {
        I = N / p;
        O = k * (1 - I);
        M = l * Math.sin(I * Math.PI / 2);
        C = 0;
        for (I = A.length; C < I; C++)
            Q = c(A[C], u[C], M),
            f(Q.x, Q.y, h + O);
        y = 0;
        for (B = H.length; y < B; y++)
            for (z = H[y],
            S = Z[y],
            C = 0,
            I = z.length; C < I; C++)
                Q = c(z[C], S[C], M),
                t ? f(Q.x, Q.y + v[q - 1].y, v[q - 1].x + O) : f(Q.x, Q.y, h + O)
    }
    (function() {
        if (n) {
            var a;
            a = 0 * P;
            for (C = 0; C < J; C++)
                T = L[C],
                g(T[2] + a, T[1] + a, T[0] + a);
            a = q + 2 * p;
            a *= P;
            for (C = 0; C < J; C++)
                T = L[C],
                g(T[0] + a, T[1] + a, T[2] + a)
        } else {
            for (C = 0; C < J; C++)
                T = L[C],
                g(T[2], T[1], T[0]);
            for (C = 0; C < J; C++)
                T = L[C],
                g(T[0] + P * q, T[1] + P * q, T[2] + P * q)
        }
    }
    )();
    (function() {
        var a = 0;
        e(A, a);
        a += A.length;
        y = 0;
        for (B = H.length; y < B; y++)
            z = H[y],
            e(z, a),
            a += z.length
    }
    )()
}
;
THREE.ExtrudeGeometry.WorldUVGenerator = {
    generateTopUV: function(a, b, c, d) {
        a = a.vertices;
        b = a[b];
        c = a[c];
        d = a[d];
        return [new THREE.Vector2(b.x,b.y), new THREE.Vector2(c.x,c.y), new THREE.Vector2(d.x,d.y)]
    },
    generateSideWallUV: function(a, b, c, d, e) {
        a = a.vertices;
        b = a[b];
        c = a[c];
        d = a[d];
        e = a[e];
        return .01 > Math.abs(b.y - c.y) ? [new THREE.Vector2(b.x,1 - b.z), new THREE.Vector2(c.x,1 - c.z), new THREE.Vector2(d.x,1 - d.z), new THREE.Vector2(e.x,1 - e.z)] : [new THREE.Vector2(b.y,1 - b.z), new THREE.Vector2(c.y,1 - c.z), new THREE.Vector2(d.y,1 - d.z), new THREE.Vector2(e.y,1 - e.z)]
    }
};
THREE.ShapeGeometry = function(a, b) {
    THREE.Geometry.call(this);
    this.type = "ShapeGeometry";
    !1 === Array.isArray(a) && (a = [a]);
    this.addShapeList(a, b);
    this.computeFaceNormals()
}
;
THREE.ShapeGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.ShapeGeometry.prototype.constructor = THREE.ShapeGeometry;
THREE.ShapeGeometry.prototype.addShapeList = function(a, b) {
    for (var c = 0, d = a.length; c < d; c++)
        this.addShape(a[c], b);
    return this
}
;
THREE.ShapeGeometry.prototype.addShape = function(a, b) {
    void 0 === b && (b = {});
    var c = b.material, d = void 0 === b.UVGenerator ? THREE.ExtrudeGeometry.WorldUVGenerator : b.UVGenerator, e, f, g, h = this.vertices.length;
    e = a.extractPoints(void 0 !== b.curveSegments ? b.curveSegments : 12);
    var k = e.shape
      , l = e.holes;
    if (!THREE.ShapeUtils.isClockWise(k))
        for (k = k.reverse(),
        e = 0,
        f = l.length; e < f; e++)
            g = l[e],
            THREE.ShapeUtils.isClockWise(g) && (l[e] = g.reverse());
    var p = THREE.ShapeUtils.triangulateShape(k, l);
    e = 0;
    for (f = l.length; e < f; e++)
        g = l[e],
        k = k.concat(g);
    l = k.length;
    f = p.length;
    for (e = 0; e < l; e++)
        g = k[e],
        this.vertices.push(new THREE.Vector3(g.x,g.y,0));
    for (e = 0; e < f; e++)
        l = p[e],
        k = l[0] + h,
        g = l[1] + h,
        l = l[2] + h,
        this.faces.push(new THREE.Face3(k,g,l,null,null,c)),
        this.faceVertexUvs[0].push(d.generateTopUV(this, k, g, l))
}
;
THREE.LatheBufferGeometry = function(a, b, c, d) {
    THREE.BufferGeometry.call(this);
    this.type = "LatheBufferGeometry";
    this.parameters = {
        points: a,
        segments: b,
        phiStart: c,
        phiLength: d
    };
    b = Math.floor(b) || 12;
    c = c || 0;
    d = d || 2 * Math.PI;
    d = THREE.Math.clamp(d, 0, 2 * Math.PI);
    for (var e = (b + 1) * a.length, f = b * a.length * 6, g = new THREE.BufferAttribute(new (65535 < f ? Uint32Array : Uint16Array)(f),1), h = new THREE.BufferAttribute(new Float32Array(3 * e),3), k = new THREE.BufferAttribute(new Float32Array(2 * e),2), l = 0, p = 0, n = 1 / b, m = new THREE.Vector3, q = new THREE.Vector2, e = 0; e <= b; e++)
        for (var f = c + e * n * d, u = Math.sin(f), v = Math.cos(f), f = 0; f <= a.length - 1; f++)
            m.x = a[f].x * u,
            m.y = a[f].y,
            m.z = a[f].x * v,
            h.setXYZ(l, m.x, m.y, m.z),
            q.x = e / b,
            q.y = f / (a.length - 1),
            k.setXY(l, q.x, q.y),
            l++;
    for (e = 0; e < b; e++)
        for (f = 0; f < a.length - 1; f++)
            c = f + e * a.length,
            l = c + a.length,
            n = c + a.length + 1,
            m = c + 1,
            g.setX(p, c),
            p++,
            g.setX(p, l),
            p++,
            g.setX(p, m),
            p++,
            g.setX(p, l),
            p++,
            g.setX(p, n),
            p++,
            g.setX(p, m),
            p++;
    this.setIndex(g);
    this.addAttribute("position", h);
    this.addAttribute("uv", k);
    this.computeVertexNormals();
    if (d === 2 * Math.PI)
        for (d = this.attributes.normal.array,
        g = new THREE.Vector3,
        h = new THREE.Vector3,
        k = new THREE.Vector3,
        c = b * a.length * 3,
        f = e = 0; e < a.length; e++,
        f += 3)
            g.x = d[f + 0],
            g.y = d[f + 1],
            g.z = d[f + 2],
            h.x = d[c + f + 0],
            h.y = d[c + f + 1],
            h.z = d[c + f + 2],
            k.addVectors(g, h).normalize(),
            d[f + 0] = d[c + f + 0] = k.x,
            d[f + 1] = d[c + f + 1] = k.y,
            d[f + 2] = d[c + f + 2] = k.z
}
;
THREE.LatheBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype);
THREE.LatheBufferGeometry.prototype.constructor = THREE.LatheBufferGeometry;
THREE.LatheGeometry = function(a, b, c, d) {
    THREE.Geometry.call(this);
    this.type = "LatheGeometry";
    this.parameters = {
        points: a,
        segments: b,
        phiStart: c,
        phiLength: d
    };
    this.fromBufferGeometry(new THREE.LatheBufferGeometry(a,b,c,d));
    this.mergeVertices()
}
;
THREE.LatheGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.LatheGeometry.prototype.constructor = THREE.LatheGeometry;
THREE.PlaneGeometry = function(a, b, c, d) {
    THREE.Geometry.call(this);
    this.type = "PlaneGeometry";
    this.parameters = {
        width: a,
        height: b,
        widthSegments: c,
        heightSegments: d
    };
    this.fromBufferGeometry(new THREE.PlaneBufferGeometry(a,b,c,d))
}
;
THREE.PlaneGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.PlaneGeometry.prototype.constructor = THREE.PlaneGeometry;
THREE.PlaneBufferGeometry = function(a, b, c, d) {
    THREE.BufferGeometry.call(this);
    this.type = "PlaneBufferGeometry";
    this.parameters = {
        width: a,
        height: b,
        widthSegments: c,
        heightSegments: d
    };
    var e = a / 2
      , f = b / 2;
    c = Math.floor(c) || 1;
    d = Math.floor(d) || 1;
    var g = c + 1
      , h = d + 1
      , k = a / c
      , l = b / d;
    b = new Float32Array(g * h * 3);
    a = new Float32Array(g * h * 3);
    for (var p = new Float32Array(g * h * 2), n = 0, m = 0, q = 0; q < h; q++)
        for (var u = q * l - f, v = 0; v < g; v++)
            b[n] = v * k - e,
            b[n + 1] = -u,
            a[n + 2] = 1,
            p[m] = v / c,
            p[m + 1] = 1 - q / d,
            n += 3,
            m += 2;
    n = 0;
    e = new (65535 < b.length / 3 ? Uint32Array : Uint16Array)(c * d * 6);
    for (q = 0; q < d; q++)
        for (v = 0; v < c; v++)
            f = v + g * (q + 1),
            h = v + 1 + g * (q + 1),
            k = v + 1 + g * q,
            e[n] = v + g * q,
            e[n + 1] = f,
            e[n + 2] = k,
            e[n + 3] = f,
            e[n + 4] = h,
            e[n + 5] = k,
            n += 6;
    this.setIndex(new THREE.BufferAttribute(e,1));
    this.addAttribute("position", new THREE.BufferAttribute(b,3));
    this.addAttribute("normal", new THREE.BufferAttribute(a,3));
    this.addAttribute("uv", new THREE.BufferAttribute(p,2))
}
;
THREE.PlaneBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype);
THREE.PlaneBufferGeometry.prototype.constructor = THREE.PlaneBufferGeometry;
THREE.RingBufferGeometry = function(a, b, c, d, e, f) {
    THREE.BufferGeometry.call(this);
    this.type = "RingBufferGeometry";
    this.parameters = {
        innerRadius: a,
        outerRadius: b,
        thetaSegments: c,
        phiSegments: d,
        thetaStart: e,
        thetaLength: f
    };
    a = a || 20;
    b = b || 50;
    e = void 0 !== e ? e : 0;
    f = void 0 !== f ? f : 2 * Math.PI;
    c = void 0 !== c ? Math.max(3, c) : 8;
    d = void 0 !== d ? Math.max(1, d) : 1;
    var g = (c + 1) * (d + 1), h = c * d * 6, h = new THREE.BufferAttribute(new (65535 < h ? Uint32Array : Uint16Array)(h),1), k = new THREE.BufferAttribute(new Float32Array(3 * g),3), l = new THREE.BufferAttribute(new Float32Array(3 * g),3), g = new THREE.BufferAttribute(new Float32Array(2 * g),2), p = 0, n = 0, m, q = a, u = (b - a) / d, v = new THREE.Vector3, t = new THREE.Vector2, s;
    for (a = 0; a <= d; a++) {
        for (s = 0; s <= c; s++)
            m = e + s / c * f,
            v.x = q * Math.cos(m),
            v.y = q * Math.sin(m),
            k.setXYZ(p, v.x, v.y, v.z),
            l.setXYZ(p, 0, 0, 1),
            t.x = (v.x / b + 1) / 2,
            t.y = (v.y / b + 1) / 2,
            g.setXY(p, t.x, t.y),
            p++;
        q += u
    }
    for (a = 0; a < d; a++)
        for (b = a * (c + 1),
        s = 0; s < c; s++)
            e = m = s + b,
            f = m + c + 1,
            p = m + c + 2,
            m += 1,
            h.setX(n, e),
            n++,
            h.setX(n, f),
            n++,
            h.setX(n, p),
            n++,
            h.setX(n, e),
            n++,
            h.setX(n, p),
            n++,
            h.setX(n, m),
            n++;
    this.setIndex(h);
    this.addAttribute("position", k);
    this.addAttribute("normal", l);
    this.addAttribute("uv", g)
}
;
THREE.RingBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype);
THREE.RingBufferGeometry.prototype.constructor = THREE.RingBufferGeometry;
THREE.RingGeometry = function(a, b, c, d, e, f) {
    THREE.Geometry.call(this);
    this.type = "RingGeometry";
    this.parameters = {
        innerRadius: a,
        outerRadius: b,
        thetaSegments: c,
        phiSegments: d,
        thetaStart: e,
        thetaLength: f
    };
    this.fromBufferGeometry(new THREE.RingBufferGeometry(a,b,c,d,e,f))
}
;
THREE.RingGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.RingGeometry.prototype.constructor = THREE.RingGeometry;
THREE.SphereGeometry = function(a, b, c, d, e, f, g) {
    THREE.Geometry.call(this);
    this.type = "SphereGeometry";
    this.parameters = {
        radius: a,
        widthSegments: b,
        heightSegments: c,
        phiStart: d,
        phiLength: e,
        thetaStart: f,
        thetaLength: g
    };
    this.fromBufferGeometry(new THREE.SphereBufferGeometry(a,b,c,d,e,f,g))
}
;
THREE.SphereGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.SphereGeometry.prototype.constructor = THREE.SphereGeometry;
THREE.SphereBufferGeometry = function(a, b, c, d, e, f, g) {
    THREE.BufferGeometry.call(this);
    this.type = "SphereBufferGeometry";
    this.parameters = {
        radius: a,
        widthSegments: b,
        heightSegments: c,
        phiStart: d,
        phiLength: e,
        thetaStart: f,
        thetaLength: g
    };
    a = a || 50;
    b = Math.max(3, Math.floor(b) || 8);
    c = Math.max(2, Math.floor(c) || 6);
    d = void 0 !== d ? d : 0;
    e = void 0 !== e ? e : 2 * Math.PI;
    f = void 0 !== f ? f : 0;
    g = void 0 !== g ? g : Math.PI;
    for (var h = f + g, k = (b + 1) * (c + 1), l = new THREE.BufferAttribute(new Float32Array(3 * k),3), p = new THREE.BufferAttribute(new Float32Array(3 * k),3), k = new THREE.BufferAttribute(new Float32Array(2 * k),2), n = 0, m = [], q = new THREE.Vector3, u = 0; u <= c; u++) {
        for (var v = [], t = u / c, s = 0; s <= b; s++) {
            var w = s / b
              , E = -a * Math.cos(d + w * e) * Math.sin(f + t * g)
              , x = a * Math.cos(f + t * g)
              , D = a * Math.sin(d + w * e) * Math.sin(f + t * g);
            q.set(E, x, D).normalize();
            l.setXYZ(n, E, x, D);
            p.setXYZ(n, q.x, q.y, q.z);
            k.setXY(n, w, 1 - t);
            v.push(n);
            n++
        }
        m.push(v)
    }
    d = [];
    for (u = 0; u < c; u++)
        for (s = 0; s < b; s++)
            e = m[u][s + 1],
            g = m[u][s],
            n = m[u + 1][s],
            q = m[u + 1][s + 1],
            (0 !== u || 0 < f) && d.push(e, g, q),
            (u !== c - 1 || h < Math.PI) && d.push(g, n, q);
    this.setIndex(new (65535 < l.count ? THREE.Uint32Attribute : THREE.Uint16Attribute)(d,1));
    this.addAttribute("position", l);
    this.addAttribute("normal", p);
    this.addAttribute("uv", k);
    this.boundingSphere = new THREE.Sphere(new THREE.Vector3,a)
}
;
THREE.SphereBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype);
THREE.SphereBufferGeometry.prototype.constructor = THREE.SphereBufferGeometry;
THREE.TextGeometry = function(a, b) {
    b = b || {};
    var c = b.font;
    if (!1 === c instanceof THREE.Font)
        return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),
        new THREE.Geometry;
    c = c.generateShapes(a, b.size, b.curveSegments);
    b.amount = void 0 !== b.height ? b.height : 50;
    void 0 === b.bevelThickness && (b.bevelThickness = 10);
    void 0 === b.bevelSize && (b.bevelSize = 8);
    void 0 === b.bevelEnabled && (b.bevelEnabled = !1);
    THREE.ExtrudeGeometry.call(this, c, b);
    this.type = "TextGeometry"
}
;
THREE.TextGeometry.prototype = Object.create(THREE.ExtrudeGeometry.prototype);
THREE.TextGeometry.prototype.constructor = THREE.TextGeometry;
THREE.TorusBufferGeometry = function(a, b, c, d, e) {
    THREE.BufferGeometry.call(this);
    this.type = "TorusBufferGeometry";
    this.parameters = {
        radius: a,
        tube: b,
        radialSegments: c,
        tubularSegments: d,
        arc: e
    };
    a = a || 100;
    b = b || 40;
    c = Math.floor(c) || 8;
    d = Math.floor(d) || 6;
    e = e || 2 * Math.PI;
    var f = (c + 1) * (d + 1), g = c * d * 6, g = new (65535 < g ? Uint32Array : Uint16Array)(g), h = new Float32Array(3 * f), k = new Float32Array(3 * f), f = new Float32Array(2 * f), l = 0, p = 0, n = 0, m = new THREE.Vector3, q = new THREE.Vector3, u = new THREE.Vector3, v, t;
    for (v = 0; v <= c; v++)
        for (t = 0; t <= d; t++) {
            var s = t / d * e
              , w = v / c * Math.PI * 2;
            q.x = (a + b * Math.cos(w)) * Math.cos(s);
            q.y = (a + b * Math.cos(w)) * Math.sin(s);
            q.z = b * Math.sin(w);
            h[l] = q.x;
            h[l + 1] = q.y;
            h[l + 2] = q.z;
            m.x = a * Math.cos(s);
            m.y = a * Math.sin(s);
            u.subVectors(q, m).normalize();
            k[l] = u.x;
            k[l + 1] = u.y;
            k[l + 2] = u.z;
            f[p] = t / d;
            f[p + 1] = v / c;
            l += 3;
            p += 2
        }
    for (v = 1; v <= c; v++)
        for (t = 1; t <= d; t++)
            a = (d + 1) * (v - 1) + t - 1,
            b = (d + 1) * (v - 1) + t,
            e = (d + 1) * v + t,
            g[n] = (d + 1) * v + t - 1,
            g[n + 1] = a,
            g[n + 2] = e,
            g[n + 3] = a,
            g[n + 4] = b,
            g[n + 5] = e,
            n += 6;
    this.setIndex(new THREE.BufferAttribute(g,1));
    this.addAttribute("position", new THREE.BufferAttribute(h,3));
    this.addAttribute("normal", new THREE.BufferAttribute(k,3));
    this.addAttribute("uv", new THREE.BufferAttribute(f,2))
}
;
THREE.TorusBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype);
THREE.TorusBufferGeometry.prototype.constructor = THREE.TorusBufferGeometry;
THREE.TorusGeometry = function(a, b, c, d, e) {
    THREE.Geometry.call(this);
    this.type = "TorusGeometry";
    this.parameters = {
        radius: a,
        tube: b,
        radialSegments: c,
        tubularSegments: d,
        arc: e
    };
    this.fromBufferGeometry(new THREE.TorusBufferGeometry(a,b,c,d,e))
}
;
THREE.TorusGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.TorusGeometry.prototype.constructor = THREE.TorusGeometry;
THREE.TorusKnotBufferGeometry = function(a, b, c, d, e, f) {
    function g(a, b, c, d, e) {
        var f = Math.cos(a)
          , g = Math.sin(a);
        a *= c / b;
        b = Math.cos(a);
        e.x = d * (2 + b) * .5 * f;
        e.y = d * (2 + b) * g * .5;
        e.z = d * Math.sin(a) * .5
    }
    THREE.BufferGeometry.call(this);
    this.type = "TorusKnotBufferGeometry";
    this.parameters = {
        radius: a,
        tube: b,
        tubularSegments: c,
        radialSegments: d,
        p: e,
        q: f
    };
    a = a || 100;
    b = b || 40;
    c = Math.floor(c) || 64;
    d = Math.floor(d) || 8;
    e = e || 2;
    f = f || 3;
    var h = (d + 1) * (c + 1), k = d * c * 6, k = new THREE.BufferAttribute(new (65535 < k ? Uint32Array : Uint16Array)(k),1), l = new THREE.BufferAttribute(new Float32Array(3 * h),3), p = new THREE.BufferAttribute(new Float32Array(3 * h),3), h = new THREE.BufferAttribute(new Float32Array(2 * h),2), n, m, q = 0, u = 0, v = new THREE.Vector3, t = new THREE.Vector3, s = new THREE.Vector2, w = new THREE.Vector3, E = new THREE.Vector3, x = new THREE.Vector3, D = new THREE.Vector3, z = new THREE.Vector3;
    for (n = 0; n <= c; ++n)
        for (m = n / c * e * Math.PI * 2,
        g(m, e, f, a, w),
        g(m + .01, e, f, a, E),
        D.subVectors(E, w),
        z.addVectors(E, w),
        x.crossVectors(D, z),
        z.crossVectors(x, D),
        x.normalize(),
        z.normalize(),
        m = 0; m <= d; ++m) {
            var y = m / d * Math.PI * 2
              , B = -b * Math.cos(y)
              , y = b * Math.sin(y);
            v.x = w.x + (B * z.x + y * x.x);
            v.y = w.y + (B * z.y + y * x.y);
            v.z = w.z + (B * z.z + y * x.z);
            l.setXYZ(q, v.x, v.y, v.z);
            t.subVectors(v, w).normalize();
            p.setXYZ(q, t.x, t.y, t.z);
            s.x = n / c;
            s.y = m / d;
            h.setXY(q, s.x, s.y);
            q++
        }
    for (m = 1; m <= c; m++)
        for (n = 1; n <= d; n++)
            a = (d + 1) * m + (n - 1),
            b = (d + 1) * m + n,
            e = (d + 1) * (m - 1) + n,
            k.setX(u, (d + 1) * (m - 1) + (n - 1)),
            u++,
            k.setX(u, a),
            u++,
            k.setX(u, e),
            u++,
            k.setX(u, a),
            u++,
            k.setX(u, b),
            u++,
            k.setX(u, e),
            u++;
    this.setIndex(k);
    this.addAttribute("position", l);
    this.addAttribute("normal", p);
    this.addAttribute("uv", h)
}
;
THREE.TorusKnotBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype);
THREE.TorusKnotBufferGeometry.prototype.constructor = THREE.TorusKnotBufferGeometry;
THREE.TorusKnotGeometry = function(a, b, c, d, e, f, g) {
    THREE.Geometry.call(this);
    this.type = "TorusKnotGeometry";
    this.parameters = {
        radius: a,
        tube: b,
        tubularSegments: c,
        radialSegments: d,
        p: e,
        q: f
    };
    void 0 !== g && console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead.");
    this.fromBufferGeometry(new THREE.TorusKnotBufferGeometry(a,b,c,d,e,f));
    this.mergeVertices()
}
;
THREE.TorusKnotGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.TorusKnotGeometry.prototype.constructor = THREE.TorusKnotGeometry;
THREE.TubeGeometry = function(a, b, c, d, e, f) {
    THREE.Geometry.call(this);
    this.type = "TubeGeometry";
    this.parameters = {
        path: a,
        segments: b,
        radius: c,
        radialSegments: d,
        closed: e,
        taper: f
    };
    b = b || 64;
    c = c || 1;
    d = d || 8;
    e = e || !1;
    f = f || THREE.TubeGeometry.NoTaper;
    var g = [], h, k, l = b + 1, p, n, m, q, u, v = new THREE.Vector3, t, s, w;
    t = new THREE.TubeGeometry.FrenetFrames(a,b,e);
    s = t.normals;
    w = t.binormals;
    this.tangents = t.tangents;
    this.normals = s;
    this.binormals = w;
    for (t = 0; t < l; t++)
        for (g[t] = [],
        p = t / (l - 1),
        u = a.getPointAt(p),
        h = s[t],
        k = w[t],
        m = c * f(p),
        p = 0; p < d; p++)
            n = p / d * 2 * Math.PI,
            q = -m * Math.cos(n),
            n = m * Math.sin(n),
            v.copy(u),
            v.x += q * h.x + n * k.x,
            v.y += q * h.y + n * k.y,
            v.z += q * h.z + n * k.z,
            g[t][p] = this.vertices.push(new THREE.Vector3(v.x,v.y,v.z)) - 1;
    for (t = 0; t < b; t++)
        for (p = 0; p < d; p++)
            f = e ? (t + 1) % b : t + 1,
            l = (p + 1) % d,
            a = g[t][p],
            c = g[f][p],
            f = g[f][l],
            l = g[t][l],
            v = new THREE.Vector2(t / b,p / d),
            s = new THREE.Vector2((t + 1) / b,p / d),
            w = new THREE.Vector2((t + 1) / b,(p + 1) / d),
            h = new THREE.Vector2(t / b,(p + 1) / d),
            this.faces.push(new THREE.Face3(a,c,l)),
            this.faceVertexUvs[0].push([v, s, h]),
            this.faces.push(new THREE.Face3(c,f,l)),
            this.faceVertexUvs[0].push([s.clone(), w, h.clone()]);
    this.computeFaceNormals();
    this.computeVertexNormals()
}
;
THREE.TubeGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.TubeGeometry.prototype.constructor = THREE.TubeGeometry;
THREE.TubeGeometry.NoTaper = function(a) {
    return 1
}
;
THREE.TubeGeometry.SinusoidalTaper = function(a) {
    return Math.sin(Math.PI * a)
}
;
THREE.TubeGeometry.FrenetFrames = function(a, b, c) {
    var d = new THREE.Vector3
      , e = []
      , f = []
      , g = []
      , h = new THREE.Vector3
      , k = new THREE.Matrix4;
    b += 1;
    var l, p, n;
    this.tangents = e;
    this.normals = f;
    this.binormals = g;
    for (l = 0; l < b; l++)
        p = l / (b - 1),
        e[l] = a.getTangentAt(p),
        e[l].normalize();
    f[0] = new THREE.Vector3;
    g[0] = new THREE.Vector3;
    a = Number.MAX_VALUE;
    l = Math.abs(e[0].x);
    p = Math.abs(e[0].y);
    n = Math.abs(e[0].z);
    l <= a && (a = l,
    d.set(1, 0, 0));
    p <= a && (a = p,
    d.set(0, 1, 0));
    n <= a && d.set(0, 0, 1);
    h.crossVectors(e[0], d).normalize();
    f[0].crossVectors(e[0], h);
    g[0].crossVectors(e[0], f[0]);
    for (l = 1; l < b; l++)
        f[l] = f[l - 1].clone(),
        g[l] = g[l - 1].clone(),
        h.crossVectors(e[l - 1], e[l]),
        h.length() > Number.EPSILON && (h.normalize(),
        d = Math.acos(THREE.Math.clamp(e[l - 1].dot(e[l]), -1, 1)),
        f[l].applyMatrix4(k.makeRotationAxis(h, d))),
        g[l].crossVectors(e[l], f[l]);
    if (c)
        for (d = Math.acos(THREE.Math.clamp(f[0].dot(f[b - 1]), -1, 1)),
        d /= b - 1,
        0 < e[0].dot(h.crossVectors(f[0], f[b - 1])) && (d = -d),
        l = 1; l < b; l++)
            f[l].applyMatrix4(k.makeRotationAxis(e[l], d * l)),
            g[l].crossVectors(e[l], f[l])
}
;
THREE.PolyhedronGeometry = function(a, b, c, d) {
    function e(a) {
        var b = a.normalize().clone();
        b.index = k.vertices.push(b) - 1;
        var c = Math.atan2(a.z, -a.x) / 2 / Math.PI + .5;
        a = Math.atan2(-a.y, Math.sqrt(a.x * a.x + a.z * a.z)) / Math.PI + .5;
        b.uv = new THREE.Vector2(c,1 - a);
        return b
    }
    function f(a, b, c, d) {
        d = new THREE.Face3(a.index,b.index,c.index,[a.clone(), b.clone(), c.clone()],void 0,d);
        k.faces.push(d);
        t.copy(a).add(b).add(c).divideScalar(3);
        d = Math.atan2(t.z, -t.x);
        k.faceVertexUvs[0].push([h(a.uv, a, d), h(b.uv, b, d), h(c.uv, c, d)])
    }
    function g(a, b) {
        for (var c = Math.pow(2, b), d = e(k.vertices[a.a]), g = e(k.vertices[a.b]), h = e(k.vertices[a.c]), l = [], m = a.materialIndex, n = 0; n <= c; n++) {
            l[n] = [];
            for (var p = e(d.clone().lerp(h, n / c)), q = e(g.clone().lerp(h, n / c)), t = c - n, u = 0; u <= t; u++)
                l[n][u] = 0 === u && n === c ? p : e(p.clone().lerp(q, u / t))
        }
        for (n = 0; n < c; n++)
            for (u = 0; u < 2 * (c - n) - 1; u++)
                d = Math.floor(u / 2),
                0 === u % 2 ? f(l[n][d + 1], l[n + 1][d], l[n][d], m) : f(l[n][d + 1], l[n + 1][d + 1], l[n + 1][d], m)
    }
    function h(a, b, c) {
        0 > c && 1 === a.x && (a = new THREE.Vector2(a.x - 1,a.y));
        0 === b.x && 0 === b.z && (a = new THREE.Vector2(c / 2 / Math.PI + .5,a.y));
        return a.clone()
    }
    THREE.Geometry.call(this);
    this.type = "PolyhedronGeometry";
    this.parameters = {
        vertices: a,
        indices: b,
        radius: c,
        detail: d
    };
    c = c || 1;
    d = d || 0;
    for (var k = this, l = 0, p = a.length; l < p; l += 3)
        e(new THREE.Vector3(a[l],a[l + 1],a[l + 2]));
    a = this.vertices;
    for (var n = [], m = l = 0, p = b.length; l < p; l += 3,
    m++) {
        var q = a[b[l]]
          , u = a[b[l + 1]]
          , v = a[b[l + 2]];
        n[m] = new THREE.Face3(q.index,u.index,v.index,[q.clone(), u.clone(), v.clone()],void 0,m)
    }
    for (var t = new THREE.Vector3, l = 0, p = n.length; l < p; l++)
        g(n[l], d);
    l = 0;
    for (p = this.faceVertexUvs[0].length; l < p; l++)
        b = this.faceVertexUvs[0][l],
        d = b[0].x,
        a = b[1].x,
        n = b[2].x,
        m = Math.max(d, a, n),
        q = Math.min(d, a, n),
        .9 < m && .1 > q && (.2 > d && (b[0].x += 1),
        .2 > a && (b[1].x += 1),
        .2 > n && (b[2].x += 1));
    l = 0;
    for (p = this.vertices.length; l < p; l++)
        this.vertices[l].multiplyScalar(c);
    this.mergeVertices();
    this.computeFaceNormals();
    this.boundingSphere = new THREE.Sphere(new THREE.Vector3,c)
}
;
THREE.PolyhedronGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.PolyhedronGeometry.prototype.constructor = THREE.PolyhedronGeometry;
THREE.DodecahedronGeometry = function(a, b) {
    var c = (1 + Math.sqrt(5)) / 2
      , d = 1 / c;
    THREE.PolyhedronGeometry.call(this, [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -d, -c, 0, -d, c, 0, d, -c, 0, d, c, -d, -c, 0, -d, c, 0, d, -c, 0, d, c, 0, -c, 0, -d, c, 0, -d, -c, 0, d, c, 0, d], [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], a, b);
    this.type = "DodecahedronGeometry";
    this.parameters = {
        radius: a,
        detail: b
    }
}
;
THREE.DodecahedronGeometry.prototype = Object.create(THREE.PolyhedronGeometry.prototype);
THREE.DodecahedronGeometry.prototype.constructor = THREE.DodecahedronGeometry;
THREE.IcosahedronGeometry = function(a, b) {
    var c = (1 + Math.sqrt(5)) / 2;
    THREE.PolyhedronGeometry.call(this, [-1, c, 0, 1, c, 0, -1, -c, 0, 1, -c, 0, 0, -1, c, 0, 1, c, 0, -1, -c, 0, 1, -c, c, 0, -1, c, 0, 1, -c, 0, -1, -c, 0, 1], [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], a, b);
    this.type = "IcosahedronGeometry";
    this.parameters = {
        radius: a,
        detail: b
    }
}
;
THREE.IcosahedronGeometry.prototype = Object.create(THREE.PolyhedronGeometry.prototype);
THREE.IcosahedronGeometry.prototype.constructor = THREE.IcosahedronGeometry;
THREE.OctahedronGeometry = function(a, b) {
    THREE.PolyhedronGeometry.call(this, [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], a, b);
    this.type = "OctahedronGeometry";
    this.parameters = {
        radius: a,
        detail: b
    }
}
;
THREE.OctahedronGeometry.prototype = Object.create(THREE.PolyhedronGeometry.prototype);
THREE.OctahedronGeometry.prototype.constructor = THREE.OctahedronGeometry;
THREE.TetrahedronGeometry = function(a, b) {
    THREE.PolyhedronGeometry.call(this, [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], a, b);
    this.type = "TetrahedronGeometry";
    this.parameters = {
        radius: a,
        detail: b
    }
}
;
THREE.TetrahedronGeometry.prototype = Object.create(THREE.PolyhedronGeometry.prototype);
THREE.TetrahedronGeometry.prototype.constructor = THREE.TetrahedronGeometry;
THREE.ParametricGeometry = function(a, b, c) {
    THREE.Geometry.call(this);
    this.type = "ParametricGeometry";
    this.parameters = {
        func: a,
        slices: b,
        stacks: c
    };
    var d = this.vertices, e = this.faces, f = this.faceVertexUvs[0], g, h, k, l, p = b + 1;
    for (g = 0; g <= c; g++)
        for (l = g / c,
        h = 0; h <= b; h++)
            k = h / b,
            k = a(k, l),
            d.push(k);
    var n, m, q, u;
    for (g = 0; g < c; g++)
        for (h = 0; h < b; h++)
            a = g * p + h,
            d = g * p + h + 1,
            l = (g + 1) * p + h + 1,
            k = (g + 1) * p + h,
            n = new THREE.Vector2(h / b,g / c),
            m = new THREE.Vector2((h + 1) / b,g / c),
            q = new THREE.Vector2((h + 1) / b,(g + 1) / c),
            u = new THREE.Vector2(h / b,(g + 1) / c),
            e.push(new THREE.Face3(a,d,k)),
            f.push([n, m, u]),
            e.push(new THREE.Face3(d,l,k)),
            f.push([m.clone(), q, u.clone()]);
    this.computeFaceNormals();
    this.computeVertexNormals()
}
;
THREE.ParametricGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.ParametricGeometry.prototype.constructor = THREE.ParametricGeometry;
THREE.WireframeGeometry = function(a) {
    function b(a, b) {
        return a - b
    }
    THREE.BufferGeometry.call(this);
    var c = [0, 0]
      , d = {}
      , e = ["a", "b", "c"];
    if (a instanceof THREE.Geometry) {
        var f = a.vertices
          , g = a.faces
          , h = 0
          , k = new Uint32Array(6 * g.length);
        a = 0;
        for (var l = g.length; a < l; a++)
            for (var p = g[a], n = 0; 3 > n; n++) {
                c[0] = p[e[n]];
                c[1] = p[e[(n + 1) % 3]];
                c.sort(b);
                var m = c.toString();
                void 0 === d[m] && (k[2 * h] = c[0],
                k[2 * h + 1] = c[1],
                d[m] = !0,
                h++)
            }
        c = new Float32Array(6 * h);
        a = 0;
        for (l = h; a < l; a++)
            for (n = 0; 2 > n; n++)
                d = f[k[2 * a + n]],
                h = 6 * a + 3 * n,
                c[h + 0] = d.x,
                c[h + 1] = d.y,
                c[h + 2] = d.z;
        this.addAttribute("position", new THREE.BufferAttribute(c,3))
    } else if (a instanceof THREE.BufferGeometry) {
        if (null !== a.index) {
            l = a.index.array;
            f = a.attributes.position;
            e = a.groups;
            h = 0;
            0 === e.length && a.addGroup(0, l.length);
            k = new Uint32Array(2 * l.length);
            g = 0;
            for (p = e.length; g < p; ++g) {
                a = e[g];
                n = a.start;
                m = a.count;
                a = n;
                for (var q = n + m; a < q; a += 3)
                    for (n = 0; 3 > n; n++)
                        c[0] = l[a + n],
                        c[1] = l[a + (n + 1) % 3],
                        c.sort(b),
                        m = c.toString(),
                        void 0 === d[m] && (k[2 * h] = c[0],
                        k[2 * h + 1] = c[1],
                        d[m] = !0,
                        h++)
            }
            c = new Float32Array(6 * h);
            a = 0;
            for (l = h; a < l; a++)
                for (n = 0; 2 > n; n++)
                    h = 6 * a + 3 * n,
                    d = k[2 * a + n],
                    c[h + 0] = f.getX(d),
                    c[h + 1] = f.getY(d),
                    c[h + 2] = f.getZ(d)
        } else
            for (f = a.attributes.position.array,
            h = f.length / 3,
            k = h / 3,
            c = new Float32Array(6 * h),
            a = 0,
            l = k; a < l; a++)
                for (n = 0; 3 > n; n++)
                    h = 18 * a + 6 * n,
                    k = 9 * a + 3 * n,
                    c[h + 0] = f[k],
                    c[h + 1] = f[k + 1],
                    c[h + 2] = f[k + 2],
                    d = 9 * a + (n + 1) % 3 * 3,
                    c[h + 3] = f[d],
                    c[h + 4] = f[d + 1],
                    c[h + 5] = f[d + 2];
        this.addAttribute("position", new THREE.BufferAttribute(c,3))
    }
}
;
THREE.WireframeGeometry.prototype = Object.create(THREE.BufferGeometry.prototype);
THREE.WireframeGeometry.prototype.constructor = THREE.WireframeGeometry;
THREE.AxisHelper = function(a) {
    a = a || 1;
    var b = new Float32Array([0, 0, 0, a, 0, 0, 0, 0, 0, 0, a, 0, 0, 0, 0, 0, 0, a])
      , c = new Float32Array([1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1]);
    a = new THREE.BufferGeometry;
    a.addAttribute("position", new THREE.BufferAttribute(b,3));
    a.addAttribute("color", new THREE.BufferAttribute(c,3));
    b = new THREE.LineBasicMaterial({
        vertexColors: THREE.VertexColors
    });
    THREE.LineSegments.call(this, a, b)
}
;
THREE.AxisHelper.prototype = Object.create(THREE.LineSegments.prototype);
THREE.AxisHelper.prototype.constructor = THREE.AxisHelper;
THREE.ArrowHelper = function() {
    var a = new THREE.Geometry;
    a.vertices.push(new THREE.Vector3(0,0,0), new THREE.Vector3(0,1,0));
    var b = new THREE.CylinderGeometry(0,.5,1,5,1);
    b.translate(0, -.5, 0);
    return function(c, d, e, f, g, h) {
        THREE.Object3D.call(this);
        void 0 === f && (f = 16776960);
        void 0 === e && (e = 1);
        void 0 === g && (g = .2 * e);
        void 0 === h && (h = .2 * g);
        this.position.copy(d);
        this.line = new THREE.Line(a,new THREE.LineBasicMaterial({
            color: f
        }));
        this.line.matrixAutoUpdate = !1;
        this.add(this.line);
        this.cone = new THREE.Mesh(b,new THREE.MeshBasicMaterial({
            color: f
        }));
        this.cone.matrixAutoUpdate = !1;
        this.add(this.cone);
        this.setDirection(c);
        this.setLength(e, g, h)
    }
}();
THREE.ArrowHelper.prototype = Object.create(THREE.Object3D.prototype);
THREE.ArrowHelper.prototype.constructor = THREE.ArrowHelper;
THREE.ArrowHelper.prototype.setDirection = function() {
    var a = new THREE.Vector3, b;
    return function(c) {
        .99999 < c.y ? this.quaternion.set(0, 0, 0, 1) : -.99999 > c.y ? this.quaternion.set(1, 0, 0, 0) : (a.set(c.z, 0, -c.x).normalize(),
        b = Math.acos(c.y),
        this.quaternion.setFromAxisAngle(a, b))
    }
}();
THREE.ArrowHelper.prototype.setLength = function(a, b, c) {
    void 0 === b && (b = .2 * a);
    void 0 === c && (c = .2 * b);
    this.line.scale.set(1, Math.max(0, a - b), 1);
    this.line.updateMatrix();
    this.cone.scale.set(c, b, c);
    this.cone.position.y = a;
    this.cone.updateMatrix()
}
;
THREE.ArrowHelper.prototype.setColor = function(a) {
    this.line.material.color.set(a);
    this.cone.material.color.set(a)
}
;
THREE.BoxHelper = function(a) {
    var b = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7])
      , c = new Float32Array(24)
      , d = new THREE.BufferGeometry;
    d.setIndex(new THREE.BufferAttribute(b,1));
    d.addAttribute("position", new THREE.BufferAttribute(c,3));
    THREE.LineSegments.call(this, d, new THREE.LineBasicMaterial({
        color: 16776960
    }));
    void 0 !== a && this.update(a)
}
;
THREE.BoxHelper.prototype = Object.create(THREE.LineSegments.prototype);
THREE.BoxHelper.prototype.constructor = THREE.BoxHelper;
THREE.BoxHelper.prototype.update = function() {
    var a = new THREE.Box3;
    return function(b) {
        a.setFromObject(b);
        if (!a.isEmpty()) {
            b = a.min;
            var c = a.max
              , d = this.geometry.attributes.position
              , e = d.array;
            e[0] = c.x;
            e[1] = c.y;
            e[2] = c.z;
            e[3] = b.x;
            e[4] = c.y;
            e[5] = c.z;
            e[6] = b.x;
            e[7] = b.y;
            e[8] = c.z;
            e[9] = c.x;
            e[10] = b.y;
            e[11] = c.z;
            e[12] = c.x;
            e[13] = c.y;
            e[14] = b.z;
            e[15] = b.x;
            e[16] = c.y;
            e[17] = b.z;
            e[18] = b.x;
            e[19] = b.y;
            e[20] = b.z;
            e[21] = c.x;
            e[22] = b.y;
            e[23] = b.z;
            d.needsUpdate = !0;
            this.geometry.computeBoundingSphere()
        }
    }
}();
THREE.BoundingBoxHelper = function(a, b) {
    var c = void 0 !== b ? b : 8947848;
    this.object = a;
    this.box = new THREE.Box3;
    THREE.Mesh.call(this, new THREE.BoxGeometry(1,1,1), new THREE.MeshBasicMaterial({
        color: c,
        wireframe: !0
    }))
}
;
THREE.BoundingBoxHelper.prototype = Object.create(THREE.Mesh.prototype);
THREE.BoundingBoxHelper.prototype.constructor = THREE.BoundingBoxHelper;
THREE.BoundingBoxHelper.prototype.update = function() {
    this.box.setFromObject(this.object);
    this.box.size(this.scale);
    this.box.center(this.position)
}
;
THREE.CameraHelper = function(a) {
    function b(a, b, d) {
        c(a, d);
        c(b, d)
    }
    function c(a, b) {
        d.vertices.push(new THREE.Vector3);
        d.colors.push(new THREE.Color(b));
        void 0 === f[a] && (f[a] = []);
        f[a].push(d.vertices.length - 1)
    }
    var d = new THREE.Geometry
      , e = new THREE.LineBasicMaterial({
        color: 16777215,
        vertexColors: THREE.FaceColors
    })
      , f = {};
    b("n1", "n2", 16755200);
    b("n2", "n4", 16755200);
    b("n4", "n3", 16755200);
    b("n3", "n1", 16755200);
    b("f1", "f2", 16755200);
    b("f2", "f4", 16755200);
    b("f4", "f3", 16755200);
    b("f3", "f1", 16755200);
    b("n1", "f1", 16755200);
    b("n2", "f2", 16755200);
    b("n3", "f3", 16755200);
    b("n4", "f4", 16755200);
    b("p", "n1", 16711680);
    b("p", "n2", 16711680);
    b("p", "n3", 16711680);
    b("p", "n4", 16711680);
    b("u1", "u2", 43775);
    b("u2", "u3", 43775);
    b("u3", "u1", 43775);
    b("c", "t", 16777215);
    b("p", "c", 3355443);
    b("cn1", "cn2", 3355443);
    b("cn3", "cn4", 3355443);
    b("cf1", "cf2", 3355443);
    b("cf3", "cf4", 3355443);
    THREE.LineSegments.call(this, d, e);
    this.camera = a;
    this.camera.updateProjectionMatrix();
    this.matrix = a.matrixWorld;
    this.matrixAutoUpdate = !1;
    this.pointMap = f;
    this.update()
}
;
THREE.CameraHelper.prototype = Object.create(THREE.LineSegments.prototype);
THREE.CameraHelper.prototype.constructor = THREE.CameraHelper;
THREE.CameraHelper.prototype.update = function() {
    function a(a, g, h, k) {
        d.set(g, h, k).unproject(e);
        a = c[a];
        if (void 0 !== a)
            for (g = 0,
            h = a.length; g < h; g++)
                b.vertices[a[g]].copy(d)
    }
    var b, c, d = new THREE.Vector3, e = new THREE.Camera;
    return function() {
        b = this.geometry;
        c = this.pointMap;
        e.projectionMatrix.copy(this.camera.projectionMatrix);
        a("c", 0, 0, -1);
        a("t", 0, 0, 1);
        a("n1", -1, -1, -1);
        a("n2", 1, -1, -1);
        a("n3", -1, 1, -1);
        a("n4", 1, 1, -1);
        a("f1", -1, -1, 1);
        a("f2", 1, -1, 1);
        a("f3", -1, 1, 1);
        a("f4", 1, 1, 1);
        a("u1", .7, 1.1, -1);
        a("u2", -.7, 1.1, -1);
        a("u3", 0, 2, -1);
        a("cf1", -1, 0, 1);
        a("cf2", 1, 0, 1);
        a("cf3", 0, -1, 1);
        a("cf4", 0, 1, 1);
        a("cn1", -1, 0, -1);
        a("cn2", 1, 0, -1);
        a("cn3", 0, -1, -1);
        a("cn4", 0, 1, -1);
        b.verticesNeedUpdate = !0
    }
}();
THREE.DirectionalLightHelper = function(a, b) {
    THREE.Object3D.call(this);
    this.light = a;
    this.light.updateMatrixWorld();
    this.matrix = a.matrixWorld;
    this.matrixAutoUpdate = !1;
    b = b || 1;
    var c = new THREE.Geometry;
    c.vertices.push(new THREE.Vector3(-b,b,0), new THREE.Vector3(b,b,0), new THREE.Vector3(b,-b,0), new THREE.Vector3(-b,-b,0), new THREE.Vector3(-b,b,0));
    var d = new THREE.LineBasicMaterial({
        fog: !1
    });
    d.color.copy(this.light.color).multiplyScalar(this.light.intensity);
    this.lightPlane = new THREE.Line(c,d);
    this.add(this.lightPlane);
    c = new THREE.Geometry;
    c.vertices.push(new THREE.Vector3, new THREE.Vector3);
    d = new THREE.LineBasicMaterial({
        fog: !1
    });
    d.color.copy(this.light.color).multiplyScalar(this.light.intensity);
    this.targetLine = new THREE.Line(c,d);
    this.add(this.targetLine);
    this.update()
}
;
THREE.DirectionalLightHelper.prototype = Object.create(THREE.Object3D.prototype);
THREE.DirectionalLightHelper.prototype.constructor = THREE.DirectionalLightHelper;
THREE.DirectionalLightHelper.prototype.dispose = function() {
    this.lightPlane.geometry.dispose();
    this.lightPlane.material.dispose();
    this.targetLine.geometry.dispose();
    this.targetLine.material.dispose()
}
;
THREE.DirectionalLightHelper.prototype.update = function() {
    var a = new THREE.Vector3
      , b = new THREE.Vector3
      , c = new THREE.Vector3;
    return function() {
        a.setFromMatrixPosition(this.light.matrixWorld);
        b.setFromMatrixPosition(this.light.target.matrixWorld);
        c.subVectors(b, a);
        this.lightPlane.lookAt(c);
        this.lightPlane.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);
        this.targetLine.geometry.vertices[1].copy(c);
        this.targetLine.geometry.verticesNeedUpdate = !0;
        this.targetLine.material.color.copy(this.lightPlane.material.color)
    }
}();
THREE.EdgesHelper = function(a, b, c) {
    b = void 0 !== b ? b : 16777215;
    THREE.LineSegments.call(this, new THREE.EdgesGeometry(a.geometry,c), new THREE.LineBasicMaterial({
        color: b
    }));
    this.matrix = a.matrixWorld;
    this.matrixAutoUpdate = !1
}
;
THREE.EdgesHelper.prototype = Object.create(THREE.LineSegments.prototype);
THREE.EdgesHelper.prototype.constructor = THREE.EdgesHelper;
THREE.FaceNormalsHelper = function(a, b, c, d) {
    this.object = a;
    this.size = void 0 !== b ? b : 1;
    a = void 0 !== c ? c : 16776960;
    d = void 0 !== d ? d : 1;
    b = 0;
    c = this.object.geometry;
    c instanceof THREE.Geometry ? b = c.faces.length : console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");
    c = new THREE.BufferGeometry;
    b = new THREE.Float32Attribute(6 * b,3);
    c.addAttribute("position", b);
    THREE.LineSegments.call(this, c, new THREE.LineBasicMaterial({
        color: a,
        linewidth: d
    }));
    this.matrixAutoUpdate = !1;
    this.update()
}
;
THREE.FaceNormalsHelper.prototype = Object.create(THREE.LineSegments.prototype);
THREE.FaceNormalsHelper.prototype.constructor = THREE.FaceNormalsHelper;
THREE.FaceNormalsHelper.prototype.update = function() {
    var a = new THREE.Vector3
      , b = new THREE.Vector3
      , c = new THREE.Matrix3;
    return function() {
        this.object.updateMatrixWorld(!0);
        c.getNormalMatrix(this.object.matrixWorld);
        for (var d = this.object.matrixWorld, e = this.geometry.attributes.position, f = this.object.geometry, g = f.vertices, f = f.faces, h = 0, k = 0, l = f.length; k < l; k++) {
            var p = f[k]
              , n = p.normal;
            a.copy(g[p.a]).add(g[p.b]).add(g[p.c]).divideScalar(3).applyMatrix4(d);
            b.copy(n).applyMatrix3(c).normalize().multiplyScalar(this.size).add(a);
            e.setXYZ(h, a.x, a.y, a.z);
            h += 1;
            e.setXYZ(h, b.x, b.y, b.z);
            h += 1
        }
        e.needsUpdate = !0;
        return this
    }
}();
THREE.GridHelper = function(a, b) {
    var c = new THREE.Geometry
      , d = new THREE.LineBasicMaterial({
        vertexColors: THREE.VertexColors
    });
    this.color1 = new THREE.Color(4473924);
    this.color2 = new THREE.Color(8947848);
    for (var e = -a; e <= a; e += b) {
        c.vertices.push(new THREE.Vector3(-a,0,e), new THREE.Vector3(a,0,e), new THREE.Vector3(e,0,-a), new THREE.Vector3(e,0,a));
        var f = 0 === e ? this.color1 : this.color2;
        c.colors.push(f, f, f, f)
    }
    THREE.LineSegments.call(this, c, d)
}
;
THREE.GridHelper.prototype = Object.create(THREE.LineSegments.prototype);
THREE.GridHelper.prototype.constructor = THREE.GridHelper;
THREE.GridHelper.prototype.setColors = function(a, b) {
    this.color1.set(a);
    this.color2.set(b);
    this.geometry.colorsNeedUpdate = !0
}
;
THREE.HemisphereLightHelper = function(a, b) {
    THREE.Object3D.call(this);
    this.light = a;
    this.light.updateMatrixWorld();
    this.matrix = a.matrixWorld;
    this.matrixAutoUpdate = !1;
    this.colors = [new THREE.Color, new THREE.Color];
    var c = new THREE.SphereGeometry(b,4,2);
    c.rotateX(-Math.PI / 2);
    for (var d = 0; 8 > d; d++)
        c.faces[d].color = this.colors[4 > d ? 0 : 1];
    d = new THREE.MeshBasicMaterial({
        vertexColors: THREE.FaceColors,
        wireframe: !0
    });
    this.lightSphere = new THREE.Mesh(c,d);
    this.add(this.lightSphere);
    this.update()
}
;
THREE.HemisphereLightHelper.prototype = Object.create(THREE.Object3D.prototype);
THREE.HemisphereLightHelper.prototype.constructor = THREE.HemisphereLightHelper;
THREE.HemisphereLightHelper.prototype.dispose = function() {
    this.lightSphere.geometry.dispose();
    this.lightSphere.material.dispose()
}
;
THREE.HemisphereLightHelper.prototype.update = function() {
    var a = new THREE.Vector3;
    return function() {
        this.colors[0].copy(this.light.color).multiplyScalar(this.light.intensity);
        this.colors[1].copy(this.light.groundColor).multiplyScalar(this.light.intensity);
        this.lightSphere.lookAt(a.setFromMatrixPosition(this.light.matrixWorld).negate());
        this.lightSphere.geometry.colorsNeedUpdate = !0
    }
}();
THREE.PointLightHelper = function(a, b) {
    this.light = a;
    this.light.updateMatrixWorld();
    var c = new THREE.SphereGeometry(b,4,2)
      , d = new THREE.MeshBasicMaterial({
        wireframe: !0,
        fog: !1
    });
    d.color.copy(this.light.color).multiplyScalar(this.light.intensity);
    THREE.Mesh.call(this, c, d);
    this.matrix = this.light.matrixWorld;
    this.matrixAutoUpdate = !1
}
;
THREE.PointLightHelper.prototype = Object.create(THREE.Mesh.prototype);
THREE.PointLightHelper.prototype.constructor = THREE.PointLightHelper;
THREE.PointLightHelper.prototype.dispose = function() {
    this.geometry.dispose();
    this.material.dispose()
}
;
THREE.PointLightHelper.prototype.update = function() {
    this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
}
;
THREE.SkeletonHelper = function(a) {
    this.bones = this.getBoneList(a);
    for (var b = new THREE.Geometry, c = 0; c < this.bones.length; c++)
        this.bones[c].parent instanceof THREE.Bone && (b.vertices.push(new THREE.Vector3),
        b.vertices.push(new THREE.Vector3),
        b.colors.push(new THREE.Color(0,0,1)),
        b.colors.push(new THREE.Color(0,1,0)));
    b.dynamic = !0;
    c = new THREE.LineBasicMaterial({
        vertexColors: THREE.VertexColors,
        depthTest: !1,
        depthWrite: !1,
        transparent: !0
    });
    THREE.LineSegments.call(this, b, c);
    this.root = a;
    this.matrix = a.matrixWorld;
    this.matrixAutoUpdate = !1;
    this.update()
}
;
THREE.SkeletonHelper.prototype = Object.create(THREE.LineSegments.prototype);
THREE.SkeletonHelper.prototype.constructor = THREE.SkeletonHelper;
THREE.SkeletonHelper.prototype.getBoneList = function(a) {
    var b = [];
    a instanceof THREE.Bone && b.push(a);
    for (var c = 0; c < a.children.length; c++)
        b.push.apply(b, this.getBoneList(a.children[c]));
    return b
}
;
THREE.SkeletonHelper.prototype.update = function() {
    for (var a = this.geometry, b = (new THREE.Matrix4).getInverse(this.root.matrixWorld), c = new THREE.Matrix4, d = 0, e = 0; e < this.bones.length; e++) {
        var f = this.bones[e];
        f.parent instanceof THREE.Bone && (c.multiplyMatrices(b, f.matrixWorld),
        a.vertices[d].setFromMatrixPosition(c),
        c.multiplyMatrices(b, f.parent.matrixWorld),
        a.vertices[d + 1].setFromMatrixPosition(c),
        d += 2)
    }
    a.verticesNeedUpdate = !0;
    a.computeBoundingSphere()
}
;
THREE.SpotLightHelper = function(a) {
    THREE.Object3D.call(this);
    this.light = a;
    this.light.updateMatrixWorld();
    this.matrix = a.matrixWorld;
    this.matrixAutoUpdate = !1;
    a = new THREE.CylinderGeometry(0,1,1,8,1,!0);
    a.translate(0, -.5, 0);
    a.rotateX(-Math.PI / 2);
    var b = new THREE.MeshBasicMaterial({
        wireframe: !0,
        fog: !1
    });
    this.cone = new THREE.Mesh(a,b);
    this.add(this.cone);
    this.update()
}
;
THREE.SpotLightHelper.prototype = Object.create(THREE.Object3D.prototype);
THREE.SpotLightHelper.prototype.constructor = THREE.SpotLightHelper;
THREE.SpotLightHelper.prototype.dispose = function() {
    this.cone.geometry.dispose();
    this.cone.material.dispose()
}
;
THREE.SpotLightHelper.prototype.update = function() {
    var a = new THREE.Vector3
      , b = new THREE.Vector3;
    return function() {
        var c = this.light.distance ? this.light.distance : 1E4
          , d = c * Math.tan(this.light.angle);
        this.cone.scale.set(d, d, c);
        a.setFromMatrixPosition(this.light.matrixWorld);
        b.setFromMatrixPosition(this.light.target.matrixWorld);
        this.cone.lookAt(b.sub(a));
        this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
    }
}();
THREE.VertexNormalsHelper = function(a, b, c, d) {
    this.object = a;
    this.size = void 0 !== b ? b : 1;
    a = void 0 !== c ? c : 16711680;
    d = void 0 !== d ? d : 1;
    b = 0;
    c = this.object.geometry;
    c instanceof THREE.Geometry ? b = 3 * c.faces.length : c instanceof THREE.BufferGeometry && (b = c.attributes.normal.count);
    c = new THREE.BufferGeometry;
    b = new THREE.Float32Attribute(6 * b,3);
    c.addAttribute("position", b);
    THREE.LineSegments.call(this, c, new THREE.LineBasicMaterial({
        color: a,
        linewidth: d
    }));
    this.matrixAutoUpdate = !1;
    this.update()
}
;
THREE.VertexNormalsHelper.prototype = Object.create(THREE.LineSegments.prototype);
THREE.VertexNormalsHelper.prototype.constructor = THREE.VertexNormalsHelper;
THREE.VertexNormalsHelper.prototype.update = function() {
    var a = new THREE.Vector3
      , b = new THREE.Vector3
      , c = new THREE.Matrix3;
    return function() {
        var d = ["a", "b", "c"];
        this.object.updateMatrixWorld(!0);
        c.getNormalMatrix(this.object.matrixWorld);
        var e = this.object.matrixWorld
          , f = this.geometry.attributes.position
          , g = this.object.geometry;
        if (g instanceof THREE.Geometry)
            for (var h = g.vertices, k = g.faces, l = g = 0, p = k.length; l < p; l++)
                for (var n = k[l], m = 0, q = n.vertexNormals.length; m < q; m++) {
                    var u = n.vertexNormals[m];
                    a.copy(h[n[d[m]]]).applyMatrix4(e);
                    b.copy(u).applyMatrix3(c).normalize().multiplyScalar(this.size).add(a);
                    f.setXYZ(g, a.x, a.y, a.z);
                    g += 1;
                    f.setXYZ(g, b.x, b.y, b.z);
                    g += 1
                }
        else if (g instanceof THREE.BufferGeometry)
            for (d = g.attributes.position,
            h = g.attributes.normal,
            m = g = 0,
            q = d.count; m < q; m++)
                a.set(d.getX(m), d.getY(m), d.getZ(m)).applyMatrix4(e),
                b.set(h.getX(m), h.getY(m), h.getZ(m)),
                b.applyMatrix3(c).normalize().multiplyScalar(this.size).add(a),
                f.setXYZ(g, a.x, a.y, a.z),
                g += 1,
                f.setXYZ(g, b.x, b.y, b.z),
                g += 1;
        f.needsUpdate = !0;
        return this
    }
}();
THREE.WireframeHelper = function(a, b) {
    var c = void 0 !== b ? b : 16777215;
    THREE.LineSegments.call(this, new THREE.WireframeGeometry(a.geometry), new THREE.LineBasicMaterial({
        color: c
    }));
    this.matrix = a.matrixWorld;
    this.matrixAutoUpdate = !1
}
;
THREE.WireframeHelper.prototype = Object.create(THREE.LineSegments.prototype);
THREE.WireframeHelper.prototype.constructor = THREE.WireframeHelper;
THREE.ImmediateRenderObject = function(a) {
    THREE.Object3D.call(this);
    this.material = a;
    this.render = function(a) {}
}
;
THREE.ImmediateRenderObject.prototype = Object.create(THREE.Object3D.prototype);
THREE.ImmediateRenderObject.prototype.constructor = THREE.ImmediateRenderObject;
THREE.MorphBlendMesh = function(a, b) {
    THREE.Mesh.call(this, a, b);
    this.animationsMap = {};
    this.animationsList = [];
    var c = this.geometry.morphTargets.length;
    this.createAnimation("__default", 0, c - 1, c / 1);
    this.setAnimationWeight("__default", 1)
}
;
THREE.MorphBlendMesh.prototype = Object.create(THREE.Mesh.prototype);
THREE.MorphBlendMesh.prototype.constructor = THREE.MorphBlendMesh;
THREE.MorphBlendMesh.prototype.createAnimation = function(a, b, c, d) {
    b = {
        start: b,
        end: c,
        length: c - b + 1,
        fps: d,
        duration: (c - b) / d,
        lastFrame: 0,
        currentFrame: 0,
        active: !1,
        time: 0,
        direction: 1,
        weight: 1,
        directionBackwards: !1,
        mirroredLoop: !1
    };
    this.animationsMap[a] = b;
    this.animationsList.push(b)
}
;
THREE.MorphBlendMesh.prototype.autoCreateAnimations = function(a) {
    for (var b = /([a-z]+)_?(\d+)/i, c, d = {}, e = this.geometry, f = 0, g = e.morphTargets.length; f < g; f++) {
        var h = e.morphTargets[f].name.match(b);
        if (h && 1 < h.length) {
            var k = h[1];
            d[k] || (d[k] = {
                start: Infinity,
                end: -Infinity
            });
            h = d[k];
            f < h.start && (h.start = f);
            f > h.end && (h.end = f);
            c || (c = k)
        }
    }
    for (k in d)
        h = d[k],
        this.createAnimation(k, h.start, h.end, a);
    this.firstAnimation = c
}
;
THREE.MorphBlendMesh.prototype.setAnimationDirectionForward = function(a) {
    if (a = this.animationsMap[a])
        a.direction = 1,
        a.directionBackwards = !1
}
;
THREE.MorphBlendMesh.prototype.setAnimationDirectionBackward = function(a) {
    if (a = this.animationsMap[a])
        a.direction = -1,
        a.directionBackwards = !0
}
;
THREE.MorphBlendMesh.prototype.setAnimationFPS = function(a, b) {
    var c = this.animationsMap[a];
    c && (c.fps = b,
    c.duration = (c.end - c.start) / c.fps)
}
;
THREE.MorphBlendMesh.prototype.setAnimationDuration = function(a, b) {
    var c = this.animationsMap[a];
    c && (c.duration = b,
    c.fps = (c.end - c.start) / c.duration)
}
;
THREE.MorphBlendMesh.prototype.setAnimationWeight = function(a, b) {
    var c = this.animationsMap[a];
    c && (c.weight = b)
}
;
THREE.MorphBlendMesh.prototype.setAnimationTime = function(a, b) {
    var c = this.animationsMap[a];
    c && (c.time = b)
}
;
THREE.MorphBlendMesh.prototype.getAnimationTime = function(a) {
    var b = 0;
    if (a = this.animationsMap[a])
        b = a.time;
    return b
}
;
THREE.MorphBlendMesh.prototype.getAnimationDuration = function(a) {
    var b = -1;
    if (a = this.animationsMap[a])
        b = a.duration;
    return b
}
;
THREE.MorphBlendMesh.prototype.playAnimation = function(a) {
    var b = this.animationsMap[a];
    b ? (b.time = 0,
    b.active = !0) : console.warn("THREE.MorphBlendMesh: animation[" + a + "] undefined in .playAnimation()")
}
;
THREE.MorphBlendMesh.prototype.stopAnimation = function(a) {
    if (a = this.animationsMap[a])
        a.active = !1
}
;
THREE.MorphBlendMesh.prototype.update = function(a) {
    for (var b = 0, c = this.animationsList.length; b < c; b++) {
        var d = this.animationsList[b];
        if (d.active) {
            var e = d.duration / d.length;
            d.time += d.direction * a;
            if (d.mirroredLoop) {
                if (d.time > d.duration || 0 > d.time)
                    d.direction *= -1,
                    d.time > d.duration && (d.time = d.duration,
                    d.directionBackwards = !0),
                    0 > d.time && (d.time = 0,
                    d.directionBackwards = !1)
            } else
                d.time %= d.duration,
                0 > d.time && (d.time += d.duration);
            var f = d.start + THREE.Math.clamp(Math.floor(d.time / e), 0, d.length - 1)
              , g = d.weight;
            f !== d.currentFrame && (this.morphTargetInfluences[d.lastFrame] = 0,
            this.morphTargetInfluences[d.currentFrame] = 1 * g,
            this.morphTargetInfluences[f] = 0,
            d.lastFrame = d.currentFrame,
            d.currentFrame = f);
            e = d.time % e / e;
            d.directionBackwards && (e = 1 - e);
            d.currentFrame !== d.lastFrame ? (this.morphTargetInfluences[d.currentFrame] = e * g,
            this.morphTargetInfluences[d.lastFrame] = (1 - e) * g) : this.morphTargetInfluences[d.currentFrame] = g
        }
    }
}
;

export {THREE};
