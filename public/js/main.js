(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// This object contains the state of the app
/* harmony default export */ __webpack_exports__["default"] = ({
  isDev: false,
  dpr: 1,
  obj: {
    globalScale: 0.2,
    // 一级场景所需物品
    group_road_1: {
      path: '/3d/one/group_road_1/group_road_1',
      level: 'one'
    },
    group_shop_1: {
      path: '/3d/one/group_shop_1/group_shop_1',
      level: 'one'
    },
    group_parking_1: {
      path: '/3d/one/group_parking_1/group_parking_1',
      level: 'one'
    },
    group_charging_pile_1: {
      path: '/3d/one/group_charging_pile_1/group_charging_pile_1',
      level: 'one'
    },
    group_build_out_1: {
      path: '/3d/one/group_build_out_1/group_build_out_1',
      level: 'one',
      childName: 'building'
    },
    group_villa_1: {
      path: '/3d/one/group_villa_1/group_villa_1',
      level: 'one'
    },
    group_camera_1: {
      path: '/3d/one/group_camera_1/group_camera_1',
      level: 'one'
    },
    group_round_camera_1: {
      path: '/3d/one/group_round_camera_1/group_round_camera_1',
      level: 'one'
    },
    group_barrier_gate_obj: {
      path: '/3d/one/group_barrier_gate_obj/barrier_gate_obj_1',
      level: 'one'
    },
    group_barrier_gate_fbx: {
      path: '/3d/one/group_barrier_gate_fbx/barrier_gate_fbx_1.FBX',
      level: 'one'
    },
    group_sign_1: {
      path: '/3d/one/group_sign_1/group_sign_1',
      level: 'one'
    },
    RFID_1: {
      path: '/3d/one/RFID_1/RFID_1',
      level: 'one'
    },
    water_obj: {
      path: '/3d/one/water_obj/water_obj',
      level: 'one'
    },
    // 二级场景所需物品
    building: {
      path: '/3d/two/building_in/building_in',
      childName: 'floor',
      level: 'two',
      scale: 0.5
    },
    // 三级场景所需物品
    floor: {
      path: '/3d/three/floor/single_floor',
      level: 'three',
      scale: 2
    },
    // 不含材质的物品模型
    stl2: {
      path: '/3d/main.STL'
    }
  },
  fog: {
    color: 0xffffff,
    near: 0.0008
  },
  camera: {
    fov: 40,
    near: 0.1,
    far: 1000,
    aspect: 1,
    posX: 0,
    posY: 100,
    posZ: 500
  },
  controls: {
    autoRotate: false,
    autoRotateSpeed: -0.5,
    rotateSpeed: 0.5,
    zoomSpeed: 0.8,
    minDistance: 10,
    maxDistance: 600,
    minPolarAngle: Math.PI / 5,
    maxPolarAngle: Math.PI / 2,
    minAzimuthAngle: -Infinity,
    maxAzimuthAngle: Infinity,
    enableDamping: true,
    dampingFactor: 0.5,
    enableZoom: true,
    target: {
      x: 0,
      y: 0,
      z: 0
    }
  },
  ambientLight: {
    enabled: true,
    color: 0x412e2e
  },
  spotLight: {
    enabled: true,
    helperEnabled: false,
    color: 0xffffff,
    indensity: 2,
    position: {
      x: 0,
      y: 400,
      z: -400
    },
    angle: 104.05,
    penumbra: 0.05,
    decay: 2,
    distance: 100000000
  }
});

/***/ }),

/***/ "./src/core/BaseThree.js":
/*!*******************************!*\
  !*** ./src/core/BaseThree.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseThree; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tween.js */ "./node_modules/tween.js/src/Tween.js");
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tween_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderer */ "./src/core/renderer.js");
/* harmony import */ var _camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./camera */ "./src/core/camera.js");
/* harmony import */ var _light__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./light */ "./src/core/light.js");
/* harmony import */ var _orbitControls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orbitControls */ "./src/core/orbitControls.js");
/* harmony import */ var _sky__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sky */ "./src/core/sky.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./router */ "./src/core/router.js");
/* harmony import */ var _loaders_fbx_fbx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../loaders/fbx/fbx */ "./src/loaders/fbx/fbx.js");
/* harmony import */ var _loaders_stl_stl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../loaders/stl/stl */ "./src/loaders/stl/stl.js");
/* harmony import */ var _loaders_obj_obj__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../loaders/obj/obj */ "./src/loaders/obj/obj.js");
/* harmony import */ var _utils_datGUI__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/datGUI */ "./src/utils/datGUI.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../config */ "./src/config.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



 // 初始化渲染器(paint、shadow、resize、dpr)

 // 初始化相机(init、resize、position change)

 // 给场景添加光源(环境光、方向光、点光、半球光)






 // 辅助工具类

 // 全局配置


var canShowObjName = ['building', // 普通建筑物
'villa', // 别墅
'floor_common', // 楼层
'room', //房间
'parking', // 停车场
'barrier_gate_out', // 出口道闸
'barrier_gate_in', // 入口道闸
'charging_pile', // 充电桩
'camera', // 摄像头
'access_control_machine' // 门禁
];
var canLoadChildName = ['building', // 普通建筑物
'floor' // 楼层
];
 true && (_config__WEBPACK_IMPORTED_MODULE_12__["default"].isDev = true);

var BaseThree =
/*#__PURE__*/
function () {
  function BaseThree(container) {
    _classCallCheck(this, BaseThree);

    this.container = container;
    this.initRouter();
    this.initScene();
    this.initLight();
    this.initRenderer();
    this.initCamera();
    this.initSky(); // this.initSTL()

    this.initControl();
    this.initRaycaster();
    _config__WEBPACK_IMPORTED_MODULE_12__["default"].isDev && this.initAxis();
    _config__WEBPACK_IMPORTED_MODULE_12__["default"].isDev && (this.stats = new Stats());
    this.clock = new three__WEBPACK_IMPORTED_MODULE_0__["Clock"]();
    this.render();
    window.__HMF__ = {}; // 缓存已加载的物体
  }

  _createClass(BaseThree, [{
    key: "initAxis",
    value: function initAxis() {
      //轴辅助 （每一个轴的长度）
      var object = new three__WEBPACK_IMPORTED_MODULE_0__["AxesHelper"](300);
      object.position.set(0, 0, 0);
      this.scene.add(object);
    }
  }, {
    key: "initRouter",
    value: function initRouter() {
      this.router = new _router__WEBPACK_IMPORTED_MODULE_7__["default"]();
    }
  }, {
    key: "initScene",
    value: function initScene() {
      this.scene = new three__WEBPACK_IMPORTED_MODULE_0__["Scene"]();
      this.scene.fog = new three__WEBPACK_IMPORTED_MODULE_0__["FogExp2"](_config__WEBPACK_IMPORTED_MODULE_12__["default"].fog.color, _config__WEBPACK_IMPORTED_MODULE_12__["default"].fog.near);
    }
  }, {
    key: "initSky",
    value: function initSky() {
      // Add Sky
      var sky = new _sky__WEBPACK_IMPORTED_MODULE_6__["Sky"]();
      sky.scale.setScalar(450000);
      this.scene.add(sky); // Add Sun Helper

      var sunSphere;
      sunSphere = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](new three__WEBPACK_IMPORTED_MODULE_0__["SphereBufferGeometry"](20000, 16, 8), new three__WEBPACK_IMPORTED_MODULE_0__["MeshBasicMaterial"]({
        color: 0xffffff
      }));
      sunSphere.position.y = -700000;
      sunSphere.visible = false;
      this.scene.add(sunSphere); /// GUI

      var effectController = {
        turbidity: 10,
        rayleigh: 2,
        mieCoefficient: 0.005,
        mieDirectionalG: 0.8,
        luminance: 1,
        inclination: 0.49,
        // elevation / inclination
        azimuth: 0.25,
        // Facing front,
        sun: !true
      };
      var distance = 400000;
      var that = this;

      function guiChanged() {
        var uniforms = sky.material.uniforms;
        uniforms['turbidity'].value = effectController.turbidity;
        uniforms['rayleigh'].value = effectController.rayleigh;
        uniforms['luminance'].value = effectController.luminance;
        uniforms['mieCoefficient'].value = effectController.mieCoefficient;
        uniforms['mieDirectionalG'].value = effectController.mieDirectionalG;
        var theta = Math.PI * (effectController.inclination - 0.5);
        var phi = 2 * Math.PI * (effectController.azimuth - 0.5);
        sunSphere.position.x = distance * Math.cos(phi);
        sunSphere.position.y = distance * Math.sin(phi) * Math.sin(theta);
        sunSphere.position.z = distance * Math.sin(phi) * Math.cos(theta);
        sunSphere.visible = effectController.sun;
        uniforms['sunPosition'].value.copy(sunSphere.position);
        that.renderer.render(that.scene, that.camera.threeCamera);
      }

      guiChanged();
    }
  }, {
    key: "initSTL",
    value: function initSTL() {
      var path = _config__WEBPACK_IMPORTED_MODULE_12__["default"].obj.stl2.path;
      this.stl = new _loaders_stl_stl__WEBPACK_IMPORTED_MODULE_9__["default"](this.scene);
      this.stl.load(path).then(function (obj) {
        return console.log('object', obj);
      });
    }
  }, {
    key: "initControl",
    value: function initControl() {
      var orbitControls = new _orbitControls__WEBPACK_IMPORTED_MODULE_5__["default"](three__WEBPACK_IMPORTED_MODULE_0__);
      this.threeControls = new orbitControls(this.camera.threeCamera, this.container);
      this.threeControls.target.set(_config__WEBPACK_IMPORTED_MODULE_12__["default"].controls.target.x, _config__WEBPACK_IMPORTED_MODULE_12__["default"].controls.target.y, _config__WEBPACK_IMPORTED_MODULE_12__["default"].controls.target.z);
      this.threeControls.autoRotate = _config__WEBPACK_IMPORTED_MODULE_12__["default"].controls.autoRotate;
      this.threeControls.autoRotateSpeed = _config__WEBPACK_IMPORTED_MODULE_12__["default"].controls.autoRotateSpeed;
      this.threeControls.rotateSpeed = _config__WEBPACK_IMPORTED_MODULE_12__["default"].controls.rotateSpeed;
      this.threeControls.zoomSpeed = _config__WEBPACK_IMPORTED_MODULE_12__["default"].controls.zoomSpeed;
      this.threeControls.minDistance = _config__WEBPACK_IMPORTED_MODULE_12__["default"].controls.minDistance;
      this.threeControls.maxDistance = _config__WEBPACK_IMPORTED_MODULE_12__["default"].controls.maxDistance;
      this.threeControls.minPolarAngle = _config__WEBPACK_IMPORTED_MODULE_12__["default"].controls.minPolarAngle;
      this.threeControls.maxPolarAngle = _config__WEBPACK_IMPORTED_MODULE_12__["default"].controls.maxPolarAngle;
      this.threeControls.enableDamping = _config__WEBPACK_IMPORTED_MODULE_12__["default"].controls.enableDamping;
      this.threeControls.enableZoom = _config__WEBPACK_IMPORTED_MODULE_12__["default"].controls.enableZoom;
      this.threeControls.dampingFactor = _config__WEBPACK_IMPORTED_MODULE_12__["default"].controls.dampingFactor;
    }
  }, {
    key: "initCamera",
    value: function initCamera() {
      this.camera = new _camera__WEBPACK_IMPORTED_MODULE_3__["default"](this.renderer.threeRenderer);
    }
  }, {
    key: "initRenderer",
    value: function initRenderer() {
      this.renderer = new _renderer__WEBPACK_IMPORTED_MODULE_2__["default"](this.scene, this.container);
    }
  }, {
    key: "initLight",
    value: function initLight() {
      var _this = this;

      this.light = new _light__WEBPACK_IMPORTED_MODULE_4__["default"](this.scene);
      var lights = ['ambient', 'spot'];
      lights.forEach(function (light) {
        return _this.light.place(light);
      });
    }
  }, {
    key: "initRaycaster",
    value: function initRaycaster() {
      this.raycaster = new three__WEBPACK_IMPORTED_MODULE_0__["Raycaster"]();
    }
  }, {
    key: "loadObj",
    value: function loadObj(config) {
      var path = config.path,
          scale = config.scale,
          level = config.level;
      return new _loaders_obj_obj__WEBPACK_IMPORTED_MODULE_10__["default"](this).load(path, scale, level);
    }
  }, {
    key: "loadFbx",
    value: function loadFbx(config) {
      var path = config.path;
      return new _loaders_fbx_fbx__WEBPACK_IMPORTED_MODULE_8__["default"](this).load(path);
    }
  }, {
    key: "hideOrShowAllObj",
    value: function hideOrShowAllObj(show, level) {
      this.scene.traverse(function (child) {
        if (child.type === 'Group') {
          if (show) {
            child.visible = child.userData.level === level;
          } else {
            child.visible = false;
          }
        }
      });
    }
  }, {
    key: "togglerLoading",
    value: function togglerLoading() {
      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        show: false
      };

      if (obj.show) {
        this.container.querySelector('#loading').style.display = 'block';
      } else {
        this.container.querySelector('#loading').style.display = 'none';
      }
    }
  }, {
    key: "showMessage",
    value: function showMessage() {
      layer.open({
        content: "1\u3001\u5355\u51FB\u9009\u4E2D\u7269\u4F53;<br>\n      2\u3001\u53CC\u51FB\u52A0\u8F7D\u7269\u4F53\u8FDB\u5165\u4E0B\u4E00\u7EA7;<br>\n      3\u3001\u9F20\u6807\u6EDA\u8F6E\u70B9\u51FB\u8FD4\u56DE\u4E0A\u4E00\u7EA7;",
        title: '交互说明',
        offset: 'rt',
        id: 1,
        anim: 5,
        shade: 0
      });
    }
  }, {
    key: "showObjByLevel",
    value: function showObjByLevel(level) {
      this.hideOrShowAllObj(false);
      this.hideOrShowAllObj(true, level);
    }
  }, {
    key: "getFirstIntersectObj",
    value: function getFirstIntersectObj(event) {
      if (!event) {
        return;
      } //通过鼠标点击的位置计算出raycaster所需要的点的位置，以屏幕中心为原点，值的范围为-1到1.


      var mouse = new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"]();
      mouse.x = event.clientX / window.innerWidth * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1; // 通过鼠标点的位置和当前相机的矩阵计算出raycaster

      this.raycaster.setFromCamera(mouse, this.camera.threeCamera); // 获取raycaster直线和所有模型相交的数组集合

      return this.raycaster.intersectObjects(this.scene.children, true)[0];
    }
  }, {
    key: "canShowInfoPanel",
    value: function canShowInfoPanel(name) {
      return canShowObjName.some(function (item) {
        return name.startsWith(item);
      });
    }
  }, {
    key: "canLoadChild",
    value: function canLoadChild(name) {
      return canLoadChildName.some(function (item) {
        return name.startsWith(item);
      });
    }
  }, {
    key: "initGUI",
    value: function initGUI(obj) {
      new _utils_datGUI__WEBPACK_IMPORTED_MODULE_11__["default"](this, obj); // 初始化GUI参数控制面板

      document.body.appendChild(this.stats.domElement); // 初始化性能监控面板
    } //设置模型的每个部位都可以投影

  }, {
    key: "setCastShadowAndReceiveShadow",
    value: function setCastShadowAndReceiveShadow(obj) {
      obj.traverse(function (child) {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
    }
  }, {
    key: "getLocalPosition",
    value: function getLocalPosition(point) {
      //获取到窗口的一半高度和一半宽度
      var halfWidth = window.innerWidth / 2;
      var halfHeight = window.innerHeight / 2;
      var vector1 = point.project(this.camera.threeCamera);
      return [vector1.x * halfWidth + halfWidth, -vector1.y * halfHeight + halfHeight];
    }
  }, {
    key: "modifyEnviroment",
    value: function modifyEnviroment(_ref) {
      var cameraPosition = _ref.cameraPosition,
          ambientLightColor = _ref.ambientLightColor,
          _ref$reset = _ref.reset,
          reset = _ref$reset === void 0 ? false : _ref$reset;

      if (reset) {
        this.camera.threeCamera.position.set(_config__WEBPACK_IMPORTED_MODULE_12__["default"].camera.posX, _config__WEBPACK_IMPORTED_MODULE_12__["default"].camera.posY, _config__WEBPACK_IMPORTED_MODULE_12__["default"].camera.posZ);
        this.light.ambientLight.color.set(_config__WEBPACK_IMPORTED_MODULE_12__["default"].ambientLight.color);
      } else {
        var _this$camera$threeCam;

        (_this$camera$threeCam = this.camera.threeCamera.position).set.apply(_this$camera$threeCam, _toConsumableArray(cameraPosition));

        this.light.ambientLight.color.set(ambientLightColor);
      }
    }
  }, {
    key: "positionAnimate",
    value: function positionAnimate(obj, targetPosition, i) {
      new tween_js__WEBPACK_IMPORTED_MODULE_1___default.a.Tween(obj.position).to({
        x: targetPosition[0],
        y: targetPosition[1],
        z: targetPosition[2]
      }, 2000).easing(tween_js__WEBPACK_IMPORTED_MODULE_1___default.a.Easing.Quadratic.Out).delay(200 * i + 1500).start();
    }
  }, {
    key: "scaleAnimate",
    value: function scaleAnimate(obj, targetScale, i) {
      new tween_js__WEBPACK_IMPORTED_MODULE_1___default.a.Tween(obj.scale).to({
        x: targetScale[0],
        y: targetScale[1],
        z: targetScale[2]
      }, 2000).easing(tween_js__WEBPACK_IMPORTED_MODULE_1___default.a.Easing.Quadratic.Out).delay(200 * i).start();
    }
  }, {
    key: "render",
    value: function render() {
      var time = this.clock.getDelta();

      for (var key in window.__HMF__) {
        if (window.__HMF__.hasOwnProperty(key)) {
          var element = window.__HMF__[key];
          element.instance && element.instance.update(time);
        }
      }

      tween_js__WEBPACK_IMPORTED_MODULE_1___default.a.update();
      _config__WEBPACK_IMPORTED_MODULE_12__["default"].isDev && this.threeControls.update();
      _config__WEBPACK_IMPORTED_MODULE_12__["default"].isDev && this.stats.update();
      this.renderer.render(this.scene, this.camera.threeCamera);
      requestAnimationFrame(this.render.bind(this));
    }
  }]);

  return BaseThree;
}();



/***/ }),

/***/ "./src/core/camera.js":
/*!****************************!*\
  !*** ./src/core/camera.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Camera; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/config.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


 // Class that creates and updates the main camera

var Camera =
/*#__PURE__*/
function () {
  function Camera(renderer) {
    var _this = this;

    _classCallCheck(this, Camera);

    var width = renderer.domElement.width;
    var height = renderer.domElement.height; // Create and position a Perspective Camera

    this.threeCamera = new three__WEBPACK_IMPORTED_MODULE_0__["PerspectiveCamera"](_config__WEBPACK_IMPORTED_MODULE_1__["default"].camera.fov, width / height, _config__WEBPACK_IMPORTED_MODULE_1__["default"].camera.near, _config__WEBPACK_IMPORTED_MODULE_1__["default"].camera.far);
    this.threeCamera.position.set(_config__WEBPACK_IMPORTED_MODULE_1__["default"].camera.posX, _config__WEBPACK_IMPORTED_MODULE_1__["default"].camera.posY, _config__WEBPACK_IMPORTED_MODULE_1__["default"].camera.posZ); // Initial sizing

    this.updateSize(renderer); // Listeners

    window.addEventListener('resize', function () {
      return _this.updateSize(renderer);
    }, false);
  }

  _createClass(Camera, [{
    key: "updateSize",
    value: function updateSize(renderer) {
      // Update camera aspect ratio with window aspect ratio
      this.threeCamera.aspect = renderer.domElement.width / renderer.domElement.height; // Always call updateProjectionMatrix on camera change

      this.threeCamera.updateProjectionMatrix();
    }
  }]);

  return Camera;
}();



/***/ }),

/***/ "./src/core/light.js":
/*!***************************!*\
  !*** ./src/core/light.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Light; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/config.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


 // Sets up and places all lights in scene

var Light =
/*#__PURE__*/
function () {
  function Light(scene) {
    _classCallCheck(this, Light);

    this.scene = scene;
    this.init();
  }

  _createClass(Light, [{
    key: "init",
    value: function init() {
      // Ambient
      this.ambientLight = new three__WEBPACK_IMPORTED_MODULE_0__["AmbientLight"](_config__WEBPACK_IMPORTED_MODULE_1__["default"].ambientLight.color);
      this.ambientLight.visible = _config__WEBPACK_IMPORTED_MODULE_1__["default"].ambientLight.enabled; // SpotLight

      var _Config$spotLight = _config__WEBPACK_IMPORTED_MODULE_1__["default"].spotLight,
          color = _Config$spotLight.color,
          indensity = _Config$spotLight.indensity,
          _Config$spotLight$pos = _Config$spotLight.position,
          x = _Config$spotLight$pos.x,
          y = _Config$spotLight$pos.y,
          z = _Config$spotLight$pos.z,
          angle = _Config$spotLight.angle,
          distance = _Config$spotLight.distance,
          enabled = _Config$spotLight.enabled,
          helperEnabled = _Config$spotLight.helperEnabled,
          penumbra = _Config$spotLight.penumbra;
      this.spotLight = new three__WEBPACK_IMPORTED_MODULE_0__["SpotLight"](color, indensity);
      this.spotLight.position.set(x, y, z);
      this.spotLight.angle = angle;
      this.spotLight.penumbra = penumbra;
      this.spotLight.decay = 2;
      this.spotLight.distance = distance;
      this.spotLight.castShadow = enabled;
      this.spotLightHelper = new three__WEBPACK_IMPORTED_MODULE_0__["SpotLightHelper"](this.spotLight);
      this.spotLightHelper.visible = helperEnabled;
    }
  }, {
    key: "place",
    value: function place(lightName) {
      switch (lightName) {
        case 'ambient':
          this.scene.add(this.ambientLight);
          break;

        case 'spot':
          this.scene.add(this.spotLight);
          this.scene.add(this.spotLightHelper);
          break;
      }
    }
  }]);

  return Light;
}();



/***/ }),

/***/ "./src/core/orbitControls.js":
/*!***********************************!*\
  !*** ./src/core/orbitControls.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (THREE) {
  var MOUSE = THREE.MOUSE;
  if (!MOUSE) MOUSE = {
    LEFT: 0,
    MIDDLE: 1,
    RIGHT: 2
    /**
     * @author qiao / https://github.com/qiao
     * @author mrdoob / http://mrdoob.com
     * @author alteredq / http://alteredqualia.com/
     * @author WestLangley / http://github.com/WestLangley
     * @author erich666 / http://erichaines.com
     */

    /*global THREE, console */

  };

  function OrbitConstraint(object) {
    this.object = object; // "target" sets the location of focus, where the object orbits around
    // and where it pans with respect to.

    this.target = new THREE.Vector3(); // Limits to how far you can dolly in and out ( PerspectiveCamera only )

    this.minDistance = 0;
    this.maxDistance = Infinity; // Limits to how far you can zoom in and out ( OrthographicCamera only )

    this.minZoom = 0;
    this.maxZoom = Infinity; // How far you can orbit vertically, upper and lower limits.
    // Range is 0 to Math.PI radians.

    this.minPolarAngle = 0; // radians

    this.maxPolarAngle = Math.PI; // radians
    // How far you can orbit horizontally, upper and lower limits.
    // If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].

    this.minAzimuthAngle = -Infinity; // radians

    this.maxAzimuthAngle = Infinity; // radians
    // Set to true to enable damping (inertia)
    // If damping is enabled, you must call controls.update() in your animation loop

    this.enableDamping = false;
    this.dampingFactor = 0.25; ////////////
    // internals

    var scope = this;
    var EPS = 0.000001; // Current position in spherical coordinate system.

    var theta;
    var phi; // Pending changes

    var phiDelta = 0;
    var thetaDelta = 0;
    var scale = 1;
    var panOffset = new THREE.Vector3();
    var zoomChanged = false; // API

    this.getPolarAngle = function () {
      return phi;
    };

    this.getAzimuthalAngle = function () {
      return theta;
    };

    this.rotateLeft = function (angle) {
      thetaDelta -= angle;
    };

    this.rotateUp = function (angle) {
      phiDelta -= angle;
    }; // pass in distance in world space to move left


    this.panLeft = function () {
      var v = new THREE.Vector3();
      return function panLeft(distance) {
        var te = this.object.matrix.elements; // get X column of matrix

        v.set(te[0], te[1], te[2]);
        v.multiplyScalar(-distance);
        panOffset.add(v);
      };
    }(); // pass in distance in world space to move up


    this.panUp = function () {
      var v = new THREE.Vector3();
      return function panUp(distance) {
        var te = this.object.matrix.elements; // get Y column of matrix

        v.set(te[4], te[5], te[6]);
        v.multiplyScalar(distance);
        panOffset.add(v);
      };
    }(); // pass in x,y of change desired in pixel space,
    // right and down are positive


    this.pan = function (deltaX, deltaY, screenWidth, screenHeight) {
      if (scope.object instanceof THREE.PerspectiveCamera) {
        // perspective
        var position = scope.object.position;
        var offset = position.clone().sub(scope.target);
        var targetDistance = offset.length(); // half of the fov is center to top of screen

        targetDistance *= Math.tan(scope.object.fov / 2 * Math.PI / 180.0); // we actually don't use screenWidth, since perspective camera is fixed to screen height

        scope.panLeft(2 * deltaX * targetDistance / screenHeight);
        scope.panUp(2 * deltaY * targetDistance / screenHeight);
      } else if (scope.object instanceof THREE.OrthographicCamera) {
        // orthographic
        scope.panLeft(deltaX * (scope.object.right - scope.object.left) / screenWidth);
        scope.panUp(deltaY * (scope.object.top - scope.object.bottom) / screenHeight);
      } else {
        // camera neither orthographic or perspective
        console.warn('WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.');
      }
    };

    this.dollyIn = function (dollyScale) {
      if (scope.object instanceof THREE.PerspectiveCamera) {
        scale /= dollyScale;
      } else if (scope.object instanceof THREE.OrthographicCamera) {
        scope.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom * dollyScale));
        scope.object.updateProjectionMatrix();
        zoomChanged = true;
      } else {
        console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.');
      }
    };

    this.dollyOut = function (dollyScale) {
      if (scope.object instanceof THREE.PerspectiveCamera) {
        scale *= dollyScale;
      } else if (scope.object instanceof THREE.OrthographicCamera) {
        scope.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / dollyScale));
        scope.object.updateProjectionMatrix();
        zoomChanged = true;
      } else {
        console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.');
      }
    };

    this.update = function () {
      var offset = new THREE.Vector3(); // so camera.up is the orbit axis

      var quat = new THREE.Quaternion().setFromUnitVectors(object.up, new THREE.Vector3(0, 1, 0));
      var quatInverse = quat.clone().inverse();
      var lastPosition = new THREE.Vector3();
      var lastQuaternion = new THREE.Quaternion();
      return function () {
        var position = this.object.position;
        offset.copy(position).sub(this.target); // rotate offset to "y-axis-is-up" space

        offset.applyQuaternion(quat); // angle from z-axis around y-axis

        theta = Math.atan2(offset.x, offset.z); // angle from y-axis

        phi = Math.atan2(Math.sqrt(offset.x * offset.x + offset.z * offset.z), offset.y);
        theta += thetaDelta;
        phi += phiDelta; // restrict theta to be between desired limits

        theta = Math.max(this.minAzimuthAngle, Math.min(this.maxAzimuthAngle, theta)); // restrict phi to be between desired limits

        phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, phi)); // restrict phi to be betwee EPS and PI-EPS

        phi = Math.max(EPS, Math.min(Math.PI - EPS, phi));
        var radius = offset.length() * scale; // restrict radius to be between desired limits

        radius = Math.max(this.minDistance, Math.min(this.maxDistance, radius)); // move target to panned location

        this.target.add(panOffset);
        offset.x = radius * Math.sin(phi) * Math.sin(theta);
        offset.y = radius * Math.cos(phi);
        offset.z = radius * Math.sin(phi) * Math.cos(theta); // rotate offset back to "camera-up-vector-is-up" space

        offset.applyQuaternion(quatInverse);
        position.copy(this.target).add(offset);
        this.object.lookAt(this.target);

        if (this.enableDamping === true) {
          thetaDelta *= 1 - this.dampingFactor;
          phiDelta *= 1 - this.dampingFactor;
        } else {
          thetaDelta = 0;
          phiDelta = 0;
        }

        scale = 1;
        panOffset.set(0, 0, 0); // update condition is:
        // min(camera displacement, camera rotation in radians)^2 > EPS
        // using small-angle approximation cos(x/2) = 1 - x^2 / 8

        if (zoomChanged || lastPosition.distanceToSquared(this.object.position) > EPS || 8 * (1 - lastQuaternion.dot(this.object.quaternion)) > EPS) {
          lastPosition.copy(this.object.position);
          lastQuaternion.copy(this.object.quaternion);
          zoomChanged = false;
          return true;
        }

        return false;
      };
    }();
  } // This set of controls performs orbiting, dollying (zooming), and panning. It maintains
  // the "up" direction as +Y, unlike the TrackballControls. Touch on tablet and phones is
  // supported.
  //
  //    Orbit - left mouse / touch: one finger move
  //    Zoom - middle mouse, or mousewheel / touch: two finger spread or squish
  //    Pan - right mouse, or arrow keys / touch: three finter swipe


  function OrbitControls(object, domElement) {
    var constraint = new OrbitConstraint(object);
    this.domElement = domElement !== undefined ? domElement : document; // API

    Object.defineProperty(this, 'constraint', {
      get: function get() {
        return constraint;
      }
    });

    this.getPolarAngle = function () {
      return constraint.getPolarAngle();
    };

    this.getAzimuthalAngle = function () {
      return constraint.getAzimuthalAngle();
    }; // Set to false to disable this control


    this.enabled = true; // center is old, deprecated; use "target" instead

    this.center = this.target; // This option actually enables dollying in and out; left as "zoom" for
    // backwards compatibility.
    // Set to false to disable zooming

    this.enableZoom = true;
    this.zoomSpeed = 1.0; // Set to false to disable rotating

    this.enableRotate = true;
    this.rotateSpeed = 1.0; // Set to false to disable panning

    this.enablePan = true;
    this.keyPanSpeed = 7.0; // pixels moved per arrow key push
    // Set to true to automatically rotate around the target
    // If auto-rotate is enabled, you must call controls.update() in your animation loop

    this.autoRotate = false;
    this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60
    // Set to false to disable use of the keys

    this.enableKeys = true; // The four arrow keys

    this.keys = {
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      BOTTOM: 40 // Mouse buttons

    };
    this.mouseButtons = {
      ORBIT: THREE.MOUSE.LEFT,
      ZOOM: THREE.MOUSE.MIDDLE,
      PAN: THREE.MOUSE.RIGHT ////////////
      // internals

    };
    var scope = this;
    var rotateStart = new THREE.Vector2();
    var rotateEnd = new THREE.Vector2();
    var rotateDelta = new THREE.Vector2();
    var panStart = new THREE.Vector2();
    var panEnd = new THREE.Vector2();
    var panDelta = new THREE.Vector2();
    var dollyStart = new THREE.Vector2();
    var dollyEnd = new THREE.Vector2();
    var dollyDelta = new THREE.Vector2();
    var STATE = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_DOLLY: 4,
      TOUCH_PAN: 5
    };
    var state = STATE.NONE; // for reset

    this.target0 = this.target.clone();
    this.position0 = this.object.position.clone();
    this.zoom0 = this.object.zoom; // events

    var changeEvent = {
      type: 'change'
    };
    var startEvent = {
      type: 'start'
    };
    var endEvent = {
      type: 'end' // pass in x,y of change desired in pixel space,
      // right and down are positive

    };

    function pan(deltaX, deltaY) {
      var element = scope.domElement === document ? scope.domElement.body : scope.domElement;
      constraint.pan(deltaX, deltaY, element.clientWidth, element.clientHeight);
    }

    this.update = function () {
      if (this.autoRotate && state === STATE.NONE) {
        constraint.rotateLeft(getAutoRotationAngle());
      }

      if (constraint.update() === true) {
        this.dispatchEvent(changeEvent);
      }
    };

    this.reset = function () {
      state = STATE.NONE;
      this.target.copy(this.target0);
      this.object.position.copy(this.position0);
      this.object.zoom = this.zoom0;
      this.object.updateProjectionMatrix();
      this.dispatchEvent(changeEvent);
      this.update();
    };

    function getAutoRotationAngle() {
      return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;
    }

    function getZoomScale() {
      return Math.pow(0.95, scope.zoomSpeed);
    }

    function onMouseDown(event) {
      if (scope.enabled === false) return;
      event.preventDefault();

      if (event.button === scope.mouseButtons.ORBIT) {
        if (scope.enableRotate === false) return;
        state = STATE.ROTATE;
        rotateStart.set(event.clientX, event.clientY);
      } else if (event.button === scope.mouseButtons.ZOOM) {
        if (scope.enableZoom === false) return;
        state = STATE.DOLLY;
        dollyStart.set(event.clientX, event.clientY);
      } else if (event.button === scope.mouseButtons.PAN) {
        if (scope.enablePan === false) return;
        state = STATE.PAN;
        panStart.set(event.clientX, event.clientY);
      }

      if (state !== STATE.NONE) {
        document.addEventListener('mousemove', onMouseMove, false);
        document.addEventListener('mouseup', onMouseUp, false);
        scope.dispatchEvent(startEvent);
      }
    }

    function onMouseMove(event) {
      if (scope.enabled === false) return;
      event.preventDefault();
      var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

      if (state === STATE.ROTATE) {
        if (scope.enableRotate === false) return;
        rotateEnd.set(event.clientX, event.clientY);
        rotateDelta.subVectors(rotateEnd, rotateStart); // rotating across whole screen goes 360 degrees around

        constraint.rotateLeft(2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed); // rotating up and down along whole screen attempts to go 360, but limited to 180

        constraint.rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed);
        rotateStart.copy(rotateEnd);
      } else if (state === STATE.DOLLY) {
        if (scope.enableZoom === false) return;
        dollyEnd.set(event.clientX, event.clientY);
        dollyDelta.subVectors(dollyEnd, dollyStart);

        if (dollyDelta.y > 0) {
          constraint.dollyIn(getZoomScale());
        } else if (dollyDelta.y < 0) {
          constraint.dollyOut(getZoomScale());
        }

        dollyStart.copy(dollyEnd);
      } else if (state === STATE.PAN) {
        if (scope.enablePan === false) return;
        panEnd.set(event.clientX, event.clientY);
        panDelta.subVectors(panEnd, panStart);
        pan(panDelta.x, panDelta.y);
        panStart.copy(panEnd);
      }

      if (state !== STATE.NONE) scope.update();
    }

    function onMouseUp()
    /* event */
    {
      if (scope.enabled === false) return;
      document.removeEventListener('mousemove', onMouseMove, false);
      document.removeEventListener('mouseup', onMouseUp, false);
      scope.dispatchEvent(endEvent);
      state = STATE.NONE;
    }

    function onMouseWheel(event) {
      if (scope.enabled === false || scope.enableZoom === false || state !== STATE.NONE) return;
      event.preventDefault();
      event.stopPropagation();
      var delta = 0;

      if (event.wheelDelta !== undefined) {
        // WebKit / Opera / Explorer 9
        delta = event.wheelDelta;
      } else if (event.detail !== undefined) {
        // Firefox
        delta = -event.detail;
      }

      if (delta > 0) {
        constraint.dollyOut(getZoomScale());
      } else if (delta < 0) {
        constraint.dollyIn(getZoomScale());
      }

      scope.update();
      scope.dispatchEvent(startEvent);
      scope.dispatchEvent(endEvent);
    }

    function onKeyDown(event) {
      if (scope.enabled === false || scope.enableKeys === false || scope.enablePan === false) return;

      switch (event.keyCode) {
        case scope.keys.UP:
          pan(0, scope.keyPanSpeed);
          scope.update();
          break;

        case scope.keys.BOTTOM:
          pan(0, -scope.keyPanSpeed);
          scope.update();
          break;

        case scope.keys.LEFT:
          pan(scope.keyPanSpeed, 0);
          scope.update();
          break;

        case scope.keys.RIGHT:
          pan(-scope.keyPanSpeed, 0);
          scope.update();
          break;
      }
    }

    function touchstart(event) {
      if (scope.enabled === false) return;

      switch (event.touches.length) {
        case 1:
          // one-fingered touch: rotate
          if (scope.enableRotate === false) return;
          state = STATE.TOUCH_ROTATE;
          rotateStart.set(event.touches[0].pageX, event.touches[0].pageY);
          break;

        case 2:
          // two-fingered touch: dolly
          if (scope.enableZoom === false) return;
          state = STATE.TOUCH_DOLLY;
          var dx = event.touches[0].pageX - event.touches[1].pageX;
          var dy = event.touches[0].pageY - event.touches[1].pageY;
          var distance = Math.sqrt(dx * dx + dy * dy);
          dollyStart.set(0, distance);
          break;

        case 3:
          // three-fingered touch: pan
          if (scope.enablePan === false) return;
          state = STATE.TOUCH_PAN;
          panStart.set(event.touches[0].pageX, event.touches[0].pageY);
          break;

        default:
          state = STATE.NONE;
      }

      if (state !== STATE.NONE) scope.dispatchEvent(startEvent);
    }

    function touchmove(event) {
      if (scope.enabled === false) return;
      event.preventDefault();
      event.stopPropagation();
      var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

      switch (event.touches.length) {
        case 1:
          // one-fingered touch: rotate
          if (scope.enableRotate === false) return;
          if (state !== STATE.TOUCH_ROTATE) return;
          rotateEnd.set(event.touches[0].pageX, event.touches[0].pageY);
          rotateDelta.subVectors(rotateEnd, rotateStart); // rotating across whole screen goes 360 degrees around

          constraint.rotateLeft(2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed); // rotating up and down along whole screen attempts to go 360, but limited to 180

          constraint.rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed);
          rotateStart.copy(rotateEnd);
          scope.update();
          break;

        case 2:
          // two-fingered touch: dolly
          if (scope.enableZoom === false) return;
          if (state !== STATE.TOUCH_DOLLY) return;
          var dx = event.touches[0].pageX - event.touches[1].pageX;
          var dy = event.touches[0].pageY - event.touches[1].pageY;
          var distance = Math.sqrt(dx * dx + dy * dy);
          dollyEnd.set(0, distance);
          dollyDelta.subVectors(dollyEnd, dollyStart);

          if (dollyDelta.y > 0) {
            constraint.dollyOut(getZoomScale());
          } else if (dollyDelta.y < 0) {
            constraint.dollyIn(getZoomScale());
          }

          dollyStart.copy(dollyEnd);
          scope.update();
          break;

        case 3:
          // three-fingered touch: pan
          if (scope.enablePan === false) return;
          if (state !== STATE.TOUCH_PAN) return;
          panEnd.set(event.touches[0].pageX, event.touches[0].pageY);
          panDelta.subVectors(panEnd, panStart);
          pan(panDelta.x, panDelta.y);
          panStart.copy(panEnd);
          scope.update();
          break;

        default:
          state = STATE.NONE;
      }
    }

    function touchend()
    /* event */
    {
      if (scope.enabled === false) return;
      scope.dispatchEvent(endEvent);
      state = STATE.NONE;
    }

    function contextmenu(event) {
      event.preventDefault();
    }

    this.dispose = function () {
      this.domElement.removeEventListener('contextmenu', contextmenu, false);
      this.domElement.removeEventListener('mousedown', onMouseDown, false);
      this.domElement.removeEventListener('mousewheel', onMouseWheel, false);
      this.domElement.removeEventListener('MozMousePixelScroll', onMouseWheel, false); // firefox

      this.domElement.removeEventListener('touchstart', touchstart, false);
      this.domElement.removeEventListener('touchend', touchend, false);
      this.domElement.removeEventListener('touchmove', touchmove, false);
      document.removeEventListener('mousemove', onMouseMove, false);
      document.removeEventListener('mouseup', onMouseUp, false);
      window.removeEventListener('keydown', onKeyDown, false);
    };

    this.domElement.addEventListener('contextmenu', contextmenu, false);
    this.domElement.addEventListener('mousedown', onMouseDown, false);
    this.domElement.addEventListener('mousewheel', onMouseWheel, false);
    this.domElement.addEventListener('MozMousePixelScroll', onMouseWheel, false); // firefox

    this.domElement.addEventListener('touchstart', touchstart, false);
    this.domElement.addEventListener('touchend', touchend, false);
    this.domElement.addEventListener('touchmove', touchmove, false);
    window.addEventListener('keydown', onKeyDown, false); // force an update at start

    this.update();
  }

  OrbitControls.prototype = Object.create(THREE.EventDispatcher.prototype);
  OrbitControls.prototype.constructor = OrbitControls;
  Object.defineProperties(OrbitControls.prototype, {
    object: {
      get: function get() {
        return this.constraint.object;
      }
    },
    target: {
      get: function get() {
        return this.constraint.target;
      },
      set: function set(value) {
        console.warn('THREE.OrbitControls: target is now immutable. Use target.set() instead.');
        this.constraint.target.copy(value);
      }
    },
    minDistance: {
      get: function get() {
        return this.constraint.minDistance;
      },
      set: function set(value) {
        this.constraint.minDistance = value;
      }
    },
    maxDistance: {
      get: function get() {
        return this.constraint.maxDistance;
      },
      set: function set(value) {
        this.constraint.maxDistance = value;
      }
    },
    minZoom: {
      get: function get() {
        return this.constraint.minZoom;
      },
      set: function set(value) {
        this.constraint.minZoom = value;
      }
    },
    maxZoom: {
      get: function get() {
        return this.constraint.maxZoom;
      },
      set: function set(value) {
        this.constraint.maxZoom = value;
      }
    },
    minPolarAngle: {
      get: function get() {
        return this.constraint.minPolarAngle;
      },
      set: function set(value) {
        this.constraint.minPolarAngle = value;
      }
    },
    maxPolarAngle: {
      get: function get() {
        return this.constraint.maxPolarAngle;
      },
      set: function set(value) {
        this.constraint.maxPolarAngle = value;
      }
    },
    minAzimuthAngle: {
      get: function get() {
        return this.constraint.minAzimuthAngle;
      },
      set: function set(value) {
        this.constraint.minAzimuthAngle = value;
      }
    },
    maxAzimuthAngle: {
      get: function get() {
        return this.constraint.maxAzimuthAngle;
      },
      set: function set(value) {
        this.constraint.maxAzimuthAngle = value;
      }
    },
    enableDamping: {
      get: function get() {
        return this.constraint.enableDamping;
      },
      set: function set(value) {
        this.constraint.enableDamping = value;
      }
    },
    dampingFactor: {
      get: function get() {
        return this.constraint.dampingFactor;
      },
      set: function set(value) {
        this.constraint.dampingFactor = value;
      }
    },
    // backward compatibility
    noZoom: {
      get: function get() {
        console.warn('THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.');
        return !this.enableZoom;
      },
      set: function set(value) {
        console.warn('THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.');
        this.enableZoom = !value;
      }
    },
    noRotate: {
      get: function get() {
        console.warn('THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.');
        return !this.enableRotate;
      },
      set: function set(value) {
        console.warn('THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.');
        this.enableRotate = !value;
      }
    },
    noPan: {
      get: function get() {
        console.warn('THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead.');
        return !this.enablePan;
      },
      set: function set(value) {
        console.warn('THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead.');
        this.enablePan = !value;
      }
    },
    noKeys: {
      get: function get() {
        console.warn('THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.');
        return !this.enableKeys;
      },
      set: function set(value) {
        console.warn('THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.');
        this.enableKeys = !value;
      }
    },
    staticMoving: {
      get: function get() {
        console.warn('THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.');
        return !this.constraint.enableDamping;
      },
      set: function set(value) {
        console.warn('THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.');
        this.constraint.enableDamping = !value;
      }
    },
    dynamicDampingFactor: {
      get: function get() {
        console.warn('THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.');
        return this.constraint.dampingFactor;
      },
      set: function set(value) {
        console.warn('THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.');
        this.constraint.dampingFactor = value;
      }
    }
  });
  return OrbitControls;
});

/***/ }),

/***/ "./src/core/renderer.js":
/*!******************************!*\
  !*** ./src/core/renderer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Renderer; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/config.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


 // Main webGL renderer class

var Renderer =
/*#__PURE__*/
function () {
  function Renderer(scene, container) {
    var _this = this;

    _classCallCheck(this, Renderer);

    // Properties
    this.scene = scene;
    this.container = container; // Create WebGL renderer and set its antialias

    this.threeRenderer = new three__WEBPACK_IMPORTED_MODULE_0__["WebGLRenderer"]({
      antialias: true
    }); // Set clear color to fog to enable fog or to hex color for no fog

    this.threeRenderer.setClearColor(scene.fog.color);
    this.threeRenderer.setPixelRatio(window.devicePixelRatio); // For retina
    // Appends canvas

    container.appendChild(this.threeRenderer.domElement); // Shadow map options

    this.threeRenderer.shadowMap.enabled = true;
    this.threeRenderer.shadowMap.type = three__WEBPACK_IMPORTED_MODULE_0__["PCFSoftShadowMap"]; // Get anisotropy for textures

    _config__WEBPACK_IMPORTED_MODULE_1__["default"].maxAnisotropy = this.threeRenderer.getMaxAnisotropy(); // Initial size update set to canvas container

    this.updateSize(); // Listeners

    document.addEventListener('DOMContentLoaded', function () {
      return _this.updateSize();
    }, false);
    window.addEventListener('resize', function () {
      return _this.updateSize();
    }, false);
  }

  _createClass(Renderer, [{
    key: "updateSize",
    value: function updateSize() {
      this.threeRenderer.setSize(this.container.offsetWidth, this.container.offsetHeight);
    }
  }, {
    key: "render",
    value: function render(scene, camera) {
      // Renders scene to canvas target
      this.threeRenderer.render(scene, camera);
    }
  }]);

  return Renderer;
}();



/***/ }),

/***/ "./src/core/router.js":
/*!****************************!*\
  !*** ./src/core/router.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Router; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Router =
/*#__PURE__*/
function () {
  function Router() {
    var route = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      current: 'one',
      parent: null
    };

    _classCallCheck(this, Router);

    this.stack = [route];
  }

  _createClass(Router, [{
    key: "getLastChild",
    value: function getLastChild() {
      return this.stack[this.stack.length - 1];
    }
  }, {
    key: "push",
    value: function push(route) {
      var isRepeated = this.stack.some(function (item) {
        return item.current === route.current;
      });

      if (!isRepeated) {
        this.stack.push(route);
      }
    }
  }, {
    key: "pop",
    value: function pop() {
      if (this.stack.length <= 1) {
        return;
      }

      return this.stack.pop();
    }
  }]);

  return Router;
}();



/***/ }),

/***/ "./src/core/sky.js":
/*!*************************!*\
  !*** ./src/core/sky.js ***!
  \*************************/
/*! exports provided: Sky */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sky", function() { return Sky; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/**
 * @author zz85 / https://github.com/zz85
 *
 * Based on "A Practical Analytic Model for Daylight"
 * aka The Preetham Model, the de facto standard analytic skydome model
 * http://www.cs.utah.edu/~shirley/papers/sunsky/sunsky.pdf
 *
 * First implemented by Simon Wallner
 * http://www.simonwallner.at/projects/atmospheric-scattering
 *
 * Improved by Martin Upitis
 * http://blenderartists.org/forum/showthread.php?245954-preethams-sky-impementation-HDR
 *
 * Three.js integration by zz85 http://twitter.com/blurspline
 */


var Sky = function Sky() {
  var shader = Sky.SkyShader;
  var material = new three__WEBPACK_IMPORTED_MODULE_0__["ShaderMaterial"]({
    fragmentShader: shader.fragmentShader,
    vertexShader: shader.vertexShader,
    uniforms: three__WEBPACK_IMPORTED_MODULE_0__["UniformsUtils"].clone(shader.uniforms),
    side: three__WEBPACK_IMPORTED_MODULE_0__["BackSide"]
  });
  three__WEBPACK_IMPORTED_MODULE_0__["Mesh"].call(this, new three__WEBPACK_IMPORTED_MODULE_0__["BoxBufferGeometry"](1, 1, 1), material);
};

Sky.prototype = Object.create(three__WEBPACK_IMPORTED_MODULE_0__["Mesh"].prototype);
Sky.SkyShader = {
  uniforms: {
    luminance: {
      value: 1
    },
    turbidity: {
      value: 2
    },
    rayleigh: {
      value: 1
    },
    mieCoefficient: {
      value: 0.005
    },
    mieDirectionalG: {
      value: 0.8
    },
    sunPosition: {
      value: new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"]()
    }
  },
  vertexShader: ['uniform vec3 sunPosition;', 'uniform float rayleigh;', 'uniform float turbidity;', 'uniform float mieCoefficient;', 'varying vec3 vWorldPosition;', 'varying vec3 vSunDirection;', 'varying float vSunfade;', 'varying vec3 vBetaR;', 'varying vec3 vBetaM;', 'varying float vSunE;', 'const vec3 up = vec3( 0.0, 1.0, 0.0 );', // constants for atmospheric scattering
  'const float e = 2.71828182845904523536028747135266249775724709369995957;', 'const float pi = 3.141592653589793238462643383279502884197169;', // wavelength of used primaries, according to preetham
  'const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );', // this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
  // (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
  'const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );', // mie stuff
  // K coefficient for the primaries
  'const float v = 4.0;', 'const vec3 K = vec3( 0.686, 0.678, 0.666 );', // MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
  'const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );', // earth shadow hack
  // cutoffAngle = pi / 1.95;
  'const float cutoffAngle = 1.6110731556870734;', 'const float steepness = 1.5;', 'const float EE = 1000.0;', 'float sunIntensity( float zenithAngleCos ) {', '	zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );', '	return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );', '}', 'vec3 totalMie( float T ) {', '	float c = ( 0.2 * T ) * 10E-18;', '	return 0.434 * c * MieConst;', '}', 'void main() {', '	vec4 worldPosition = modelMatrix * vec4( position, 1.0 );', '	vWorldPosition = worldPosition.xyz;', '	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );', '	gl_Position.z = gl_Position.w;', // set z to camera.far
  '	vSunDirection = normalize( sunPosition );', '	vSunE = sunIntensity( dot( vSunDirection, up ) );', '	vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );', '	float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );', // extinction (absorbtion + out scattering)
  // rayleigh coefficients
  '	vBetaR = totalRayleigh * rayleighCoefficient;', // mie coefficients
  '	vBetaM = totalMie( turbidity ) * mieCoefficient;', '}'].join('\n'),
  fragmentShader: ['varying vec3 vWorldPosition;', 'varying vec3 vSunDirection;', 'varying float vSunfade;', 'varying vec3 vBetaR;', 'varying vec3 vBetaM;', 'varying float vSunE;', 'uniform float luminance;', 'uniform float mieDirectionalG;', 'const vec3 cameraPos = vec3( 0.0, 0.0, 0.0 );', // constants for atmospheric scattering
  'const float pi = 3.141592653589793238462643383279502884197169;', 'const float n = 1.0003;', // refractive index of air
  'const float N = 2.545E25;', // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)
  // optical length at zenith for molecules
  'const float rayleighZenithLength = 8.4E3;', 'const float mieZenithLength = 1.25E3;', 'const vec3 up = vec3( 0.0, 1.0, 0.0 );', // 66 arc seconds -> degrees, and the cosine of that
  'const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;', // 3.0 / ( 16.0 * pi )
  'const float THREE_OVER_SIXTEENPI = 0.05968310365946075;', // 1.0 / ( 4.0 * pi )
  'const float ONE_OVER_FOURPI = 0.07957747154594767;', 'float rayleighPhase( float cosTheta ) {', '	return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );', '}', 'float hgPhase( float cosTheta, float g ) {', '	float g2 = pow( g, 2.0 );', '	float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );', '	return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );', '}', // Filmic ToneMapping http://filmicgames.com/archives/75
  'const float A = 0.15;', 'const float B = 0.50;', 'const float C = 0.10;', 'const float D = 0.20;', 'const float E = 0.02;', 'const float F = 0.30;', 'const float whiteScale = 1.0748724675633854;', // 1.0 / Uncharted2Tonemap(1000.0)
  'vec3 Uncharted2Tonemap( vec3 x ) {', '	return ( ( x * ( A * x + C * B ) + D * E ) / ( x * ( A * x + B ) + D * F ) ) - E / F;', '}', 'void main() {', // optical length
  // cutoff angle at 90 to avoid singularity in next formula.
  '	float zenithAngle = acos( max( 0.0, dot( up, normalize( vWorldPosition - cameraPos ) ) ) );', '	float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );', '	float sR = rayleighZenithLength * inverse;', '	float sM = mieZenithLength * inverse;', // combined extinction factor
  '	vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );', // in scattering
  '	float cosTheta = dot( normalize( vWorldPosition - cameraPos ), vSunDirection );', '	float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );', '	vec3 betaRTheta = vBetaR * rPhase;', '	float mPhase = hgPhase( cosTheta, mieDirectionalG );', '	vec3 betaMTheta = vBetaM * mPhase;', '	vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );', '	Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );', // nightsky
  '	vec3 direction = normalize( vWorldPosition - cameraPos );', '	float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]', '	float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]', '	vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );', '	vec3 L0 = vec3( 0.1 ) * Fex;', // composition + solar disc
  '	float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );', '	L0 += ( vSunE * 19000.0 * Fex ) * sundisk;', '	vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );', '	vec3 curr = Uncharted2Tonemap( ( log2( 2.0 / pow( luminance, 4.0 ) ) ) * texColor );', '	vec3 color = curr * whiteScale;', '	vec3 retColor = pow( color, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );', '	gl_FragColor = vec4( retColor, 1.0 );', '}'].join('\n')
};


/***/ }),

/***/ "./src/loaders/fbx/FBXLoader.js":
/*!**************************************!*\
  !*** ./src/loaders/fbx/FBXLoader.js ***!
  \**************************************/
/*! exports provided: FBXLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FBXLoader", function() { return FBXLoader; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _inflate_module_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inflate.module.min.js */ "./src/loaders/fbx/inflate.module.min.js");
/* harmony import */ var _TGALoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TGALoader.js */ "./src/loaders/fbx/TGALoader.js");
/* harmony import */ var _NURBSCurve_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NURBSCurve.js */ "./src/loaders/fbx/NURBSCurve.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * @author Kyle-Larson https://github.com/Kyle-Larson
 * @author Takahiro https://github.com/takahirox
 * @author Lewy Blue https://github.com/looeee
 *
 * Loader loads FBX file and generates Group representing FBX scene.
 * Requires FBX file to be >= 7.0 and in ASCII or >= 6400 in Binary format
 * Versions lower than this may load but will probably have errors
 *
 * Needs Support:
 *  Morph normals / blend shape normals
 *
 * FBX format references:
 * 	https://wiki.blender.org/index.php/User:Mont29/Foundation/FBX_File_Structure
 * 	http://help.autodesk.com/view/FBX/2017/ENU/?guid=__cpp_ref_index_html (C++ SDK reference)
 *
 * 	Binary format specification:
 *		https://code.blender.org/2013/08/fbx-binary-file-format-specification/
 */





var FBXLoader = function () {
  var fbxTree;
  var connections;
  var sceneGraph;

  function FBXLoader(manager) {
    this.manager = manager !== undefined ? manager : three__WEBPACK_IMPORTED_MODULE_0__["DefaultLoadingManager"];
  }

  FBXLoader.prototype = {
    constructor: FBXLoader,
    crossOrigin: 'anonymous',
    load: function load(url, onLoad, onProgress, onError) {
      var self = this;
      var path = self.path === undefined ? three__WEBPACK_IMPORTED_MODULE_0__["LoaderUtils"].extractUrlBase(url) : self.path;
      var loader = new three__WEBPACK_IMPORTED_MODULE_0__["FileLoader"](this.manager);
      loader.setPath(self.path);
      loader.setResponseType('arraybuffer');
      loader.load(url, function (buffer) {
        try {
          onLoad(self.parse(buffer, path));
        } catch (error) {
          setTimeout(function () {
            if (onError) onError(error);
            self.manager.itemError(url);
          }, 0);
        }
      }, onProgress, onError);
    },
    setPath: function setPath(value) {
      this.path = value;
      return this;
    },
    setResourcePath: function setResourcePath(value) {
      this.resourcePath = value;
      return this;
    },
    setCrossOrigin: function setCrossOrigin(value) {
      this.crossOrigin = value;
      return this;
    },
    parse: function parse(FBXBuffer, path) {
      if (isFbxFormatBinary(FBXBuffer)) {
        fbxTree = new BinaryParser().parse(FBXBuffer);
      } else {
        var FBXText = convertArrayBufferToString(FBXBuffer);

        if (!isFbxFormatASCII(FBXText)) {
          throw new Error('THREE.FBXLoader: Unknown format.');
        }

        if (getFbxVersion(FBXText) < 7000) {
          throw new Error('THREE.FBXLoader: FBX version not supported, FileVersion: ' + getFbxVersion(FBXText));
        }

        fbxTree = new TextParser().parse(FBXText);
      } // console.log( fbxTree );


      var textureLoader = new three__WEBPACK_IMPORTED_MODULE_0__["TextureLoader"](this.manager).setPath(this.resourcePath || path).setCrossOrigin(this.crossOrigin);
      return new FBXTreeParser(textureLoader).parse(fbxTree);
    } // Parse the FBXTree object returned by the BinaryParser or TextParser and return a Group

  };

  function FBXTreeParser(textureLoader) {
    this.textureLoader = textureLoader;
  }

  FBXTreeParser.prototype = {
    constructor: FBXTreeParser,
    parse: function parse() {
      connections = this.parseConnections();
      var images = this.parseImages();
      var textures = this.parseTextures(images);
      var materials = this.parseMaterials(textures);
      var deformers = this.parseDeformers();
      var geometryMap = new GeometryParser().parse(deformers);
      this.parseScene(deformers, geometryMap, materials);
      return sceneGraph;
    },
    // Parses FBXTree.Connections which holds parent-child connections between objects (e.g. material -> texture, model->geometry )
    // and details the connection type
    parseConnections: function parseConnections() {
      var connectionMap = new Map();

      if ('Connections' in fbxTree) {
        var rawConnections = fbxTree.Connections.connections;
        rawConnections.forEach(function (rawConnection) {
          var fromID = rawConnection[0];
          var toID = rawConnection[1];
          var relationship = rawConnection[2];

          if (!connectionMap.has(fromID)) {
            connectionMap.set(fromID, {
              parents: [],
              children: []
            });
          }

          var parentRelationship = {
            ID: toID,
            relationship: relationship
          };
          connectionMap.get(fromID).parents.push(parentRelationship);

          if (!connectionMap.has(toID)) {
            connectionMap.set(toID, {
              parents: [],
              children: []
            });
          }

          var childRelationship = {
            ID: fromID,
            relationship: relationship
          };
          connectionMap.get(toID).children.push(childRelationship);
        });
      }

      return connectionMap;
    },
    // Parse FBXTree.Objects.Video for embedded image data
    // These images are connected to textures in FBXTree.Objects.Textures
    // via FBXTree.Connections.
    parseImages: function parseImages() {
      var images = {};
      var blobs = {};

      if ('Video' in fbxTree.Objects) {
        var videoNodes = fbxTree.Objects.Video;

        for (var nodeID in videoNodes) {
          var videoNode = videoNodes[nodeID];
          var id = parseInt(nodeID);
          images[id] = videoNode.RelativeFilename || videoNode.Filename; // raw image data is in videoNode.Content

          if ('Content' in videoNode) {
            var arrayBufferContent = videoNode.Content instanceof ArrayBuffer && videoNode.Content.byteLength > 0;
            var base64Content = typeof videoNode.Content === 'string' && videoNode.Content !== '';

            if (arrayBufferContent || base64Content) {
              var image = this.parseImage(videoNodes[nodeID]);
              blobs[videoNode.RelativeFilename || videoNode.Filename] = image;
            }
          }
        }
      }

      for (var id in images) {
        var filename = images[id];
        if (blobs[filename] !== undefined) images[id] = blobs[filename];else images[id] = images[id].split('\\').pop();
      }

      return images;
    },
    // Parse embedded image data in FBXTree.Video.Content
    parseImage: function parseImage(videoNode) {
      var content = videoNode.Content;
      var fileName = videoNode.RelativeFilename || videoNode.Filename;
      var extension = fileName.slice(fileName.lastIndexOf('.') + 1).toLowerCase();
      var type;

      switch (extension) {
        case 'bmp':
          type = 'image/bmp';
          break;

        case 'jpg':
        case 'jpeg':
          type = 'image/jpeg';
          break;

        case 'png':
          type = 'image/png';
          break;

        case 'tif':
          type = 'image/tiff';
          break;

        case 'tga':
          if (typeof _TGALoader_js__WEBPACK_IMPORTED_MODULE_2__["TGALoader"] !== 'function') {
            console.warn('FBXLoader: TGALoader is required to load TGA textures');
            return;
          } else {
            if (three__WEBPACK_IMPORTED_MODULE_0__["Loader"].Handlers.get('.tga') === null) {
              var tgaLoader = new _TGALoader_js__WEBPACK_IMPORTED_MODULE_2__["TGALoader"]();
              tgaLoader.setPath(this.textureLoader.path);
              three__WEBPACK_IMPORTED_MODULE_0__["Loader"].Handlers.add(/\.tga$/i, tgaLoader);
            }

            type = 'image/tga';
            break;
          }

        default:
          console.warn('FBXLoader: Image type "' + extension + '" is not supported.');
          return;
      }

      if (typeof content === 'string') {
        // ASCII format
        return 'data:' + type + ';base64,' + content;
      } else {
        // Binary Format
        var array = new Uint8Array(content);
        return window.URL.createObjectURL(new Blob([array], {
          type: type
        }));
      }
    },
    // Parse nodes in FBXTree.Objects.Texture
    // These contain details such as UV scaling, cropping, rotation etc and are connected
    // to images in FBXTree.Objects.Video
    parseTextures: function parseTextures(images) {
      var textureMap = new Map();

      if ('Texture' in fbxTree.Objects) {
        var textureNodes = fbxTree.Objects.Texture;

        for (var nodeID in textureNodes) {
          var texture = this.parseTexture(textureNodes[nodeID], images);
          textureMap.set(parseInt(nodeID), texture);
        }
      }

      return textureMap;
    },
    // Parse individual node in FBXTree.Objects.Texture
    parseTexture: function parseTexture(textureNode, images) {
      var texture = this.loadTexture(textureNode, images);
      texture.ID = textureNode.id;
      texture.name = textureNode.attrName;
      var wrapModeU = textureNode.WrapModeU;
      var wrapModeV = textureNode.WrapModeV;
      var valueU = wrapModeU !== undefined ? wrapModeU.value : 0;
      var valueV = wrapModeV !== undefined ? wrapModeV.value : 0; // http://download.autodesk.com/us/fbx/SDKdocs/FBX_SDK_Help/files/fbxsdkref/class_k_fbx_texture.html#889640e63e2e681259ea81061b85143a
      // 0: repeat(default), 1: clamp

      texture.wrapS = valueU === 0 ? three__WEBPACK_IMPORTED_MODULE_0__["RepeatWrapping"] : three__WEBPACK_IMPORTED_MODULE_0__["ClampToEdgeWrapping"];
      texture.wrapT = valueV === 0 ? three__WEBPACK_IMPORTED_MODULE_0__["RepeatWrapping"] : three__WEBPACK_IMPORTED_MODULE_0__["ClampToEdgeWrapping"];

      if ('Scaling' in textureNode) {
        var values = textureNode.Scaling.value;
        texture.repeat.x = values[0];
        texture.repeat.y = values[1];
      }

      return texture;
    },
    // load a texture specified as a blob or data URI, or via an external URL using TextureLoader
    loadTexture: function loadTexture(textureNode, images) {
      var fileName;
      var currentPath = this.textureLoader.path;
      var children = connections.get(textureNode.id).children;

      if (children !== undefined && children.length > 0 && images[children[0].ID] !== undefined) {
        fileName = images[children[0].ID];

        if (fileName.indexOf('blob:') === 0 || fileName.indexOf('data:') === 0) {
          this.textureLoader.setPath(undefined);
        }
      }

      var texture;
      var extension = textureNode.FileName.slice(-3).toLowerCase();

      if (extension === 'tga') {
        var loader = three__WEBPACK_IMPORTED_MODULE_0__["Loader"].Handlers.get('.tga');

        if (loader === null) {
          console.warn('FBXLoader: TGALoader not found, creating empty placeholder texture for', fileName);
          texture = new three__WEBPACK_IMPORTED_MODULE_0__["Texture"]();
        } else {
          texture = loader.load(fileName);
        }
      } else if (extension === 'psd') {
        console.warn('FBXLoader: PSD textures are not supported, creating empty placeholder texture for', fileName);
        texture = new three__WEBPACK_IMPORTED_MODULE_0__["Texture"]();
      } else {
        texture = this.textureLoader.load(fileName);
      }

      this.textureLoader.setPath(currentPath);
      return texture;
    },
    // Parse nodes in FBXTree.Objects.Material
    parseMaterials: function parseMaterials(textureMap) {
      var materialMap = new Map();

      if ('Material' in fbxTree.Objects) {
        var materialNodes = fbxTree.Objects.Material;

        for (var nodeID in materialNodes) {
          var material = this.parseMaterial(materialNodes[nodeID], textureMap);
          if (material !== null) materialMap.set(parseInt(nodeID), material);
        }
      }

      return materialMap;
    },
    // Parse single node in FBXTree.Objects.Material
    // Materials are connected to texture maps in FBXTree.Objects.Textures
    // FBX format currently only supports Lambert and Phong shading models
    parseMaterial: function parseMaterial(materialNode, textureMap) {
      var ID = materialNode.id;
      var name = materialNode.attrName;
      var type = materialNode.ShadingModel; // Case where FBX wraps shading model in property object.

      if (_typeof(type) === 'object') {
        type = type.value;
      } // Ignore unused materials which don't have any connections.


      if (!connections.has(ID)) return null;
      var parameters = this.parseParameters(materialNode, textureMap, ID);
      var material;

      switch (type.toLowerCase()) {
        case 'phong':
          material = new three__WEBPACK_IMPORTED_MODULE_0__["MeshPhongMaterial"]();
          break;

        case 'lambert':
          material = new three__WEBPACK_IMPORTED_MODULE_0__["MeshLambertMaterial"]();
          break;

        default:
          console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.', type);
          material = new three__WEBPACK_IMPORTED_MODULE_0__["MeshPhongMaterial"]();
          break;
      }

      material.setValues(parameters);
      material.name = name;
      return material;
    },
    // Parse FBX material and return parameters suitable for a three.js material
    // Also parse the texture map and return any textures associated with the material
    parseParameters: function parseParameters(materialNode, textureMap, ID) {
      var parameters = {};

      if (materialNode.BumpFactor) {
        parameters.bumpScale = materialNode.BumpFactor.value;
      }

      if (materialNode.Diffuse) {
        parameters.color = new three__WEBPACK_IMPORTED_MODULE_0__["Color"]().fromArray(materialNode.Diffuse.value);
      } else if (materialNode.DiffuseColor && materialNode.DiffuseColor.type === 'Color') {
        // The blender exporter exports diffuse here instead of in materialNode.Diffuse
        parameters.color = new three__WEBPACK_IMPORTED_MODULE_0__["Color"]().fromArray(materialNode.DiffuseColor.value);
      }

      if (materialNode.DisplacementFactor) {
        parameters.displacementScale = materialNode.DisplacementFactor.value;
      }

      if (materialNode.Emissive) {
        parameters.emissive = new three__WEBPACK_IMPORTED_MODULE_0__["Color"]().fromArray(materialNode.Emissive.value);
      } else if (materialNode.EmissiveColor && materialNode.EmissiveColor.type === 'Color') {
        // The blender exporter exports emissive color here instead of in materialNode.Emissive
        parameters.emissive = new three__WEBPACK_IMPORTED_MODULE_0__["Color"]().fromArray(materialNode.EmissiveColor.value);
      }

      if (materialNode.EmissiveFactor) {
        parameters.emissiveIntensity = parseFloat(materialNode.EmissiveFactor.value);
      }

      if (materialNode.Opacity) {
        parameters.opacity = parseFloat(materialNode.Opacity.value);
      }

      if (parameters.opacity < 1.0) {
        parameters.transparent = true;
      }

      if (materialNode.ReflectionFactor) {
        parameters.reflectivity = materialNode.ReflectionFactor.value;
      }

      if (materialNode.Shininess) {
        parameters.shininess = materialNode.Shininess.value;
      }

      if (materialNode.Specular) {
        parameters.specular = new three__WEBPACK_IMPORTED_MODULE_0__["Color"]().fromArray(materialNode.Specular.value);
      } else if (materialNode.SpecularColor && materialNode.SpecularColor.type === 'Color') {
        // The blender exporter exports specular color here instead of in materialNode.Specular
        parameters.specular = new three__WEBPACK_IMPORTED_MODULE_0__["Color"]().fromArray(materialNode.SpecularColor.value);
      }

      var self = this;
      connections.get(ID).children.forEach(function (child) {
        var type = child.relationship;

        switch (type) {
          case 'Bump':
            parameters.bumpMap = self.getTexture(textureMap, child.ID);
            break;

          case 'Maya|TEX_ao_map':
            parameters.aoMap = self.getTexture(textureMap, child.ID);
            break;

          case 'DiffuseColor':
          case 'Maya|TEX_color_map':
            parameters.map = self.getTexture(textureMap, child.ID);
            break;

          case 'DisplacementColor':
            parameters.displacementMap = self.getTexture(textureMap, child.ID);
            break;

          case 'EmissiveColor':
            parameters.emissiveMap = self.getTexture(textureMap, child.ID);
            break;

          case 'NormalMap':
          case 'Maya|TEX_normal_map':
            parameters.normalMap = self.getTexture(textureMap, child.ID);
            break;

          case 'ReflectionColor':
            parameters.envMap = self.getTexture(textureMap, child.ID);
            parameters.envMap.mapping = three__WEBPACK_IMPORTED_MODULE_0__["EquirectangularReflectionMapping"];
            break;

          case 'SpecularColor':
            parameters.specularMap = self.getTexture(textureMap, child.ID);
            break;

          case 'TransparentColor':
            parameters.alphaMap = self.getTexture(textureMap, child.ID);
            parameters.transparent = true;
            break;

          case 'AmbientColor':
          case 'ShininessExponent': // AKA glossiness map

          case 'SpecularFactor': // AKA specularLevel

          case 'VectorDisplacementColor': // NOTE: Seems to be a copy of DisplacementColor

          default:
            console.warn('THREE.FBXLoader: %s map is not supported in three.js, skipping texture.', type);
            break;
        }
      });
      return parameters;
    },
    // get a texture from the textureMap for use by a material.
    getTexture: function getTexture(textureMap, id) {
      // if the texture is a layered texture, just use the first layer and issue a warning
      if ('LayeredTexture' in fbxTree.Objects && id in fbxTree.Objects.LayeredTexture) {
        console.warn('THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer.');
        id = connections.get(id).children[0].ID;
      }

      return textureMap.get(id);
    },
    // Parse nodes in FBXTree.Objects.Deformer
    // Deformer node can contain skinning or Vertex Cache animation data, however only skinning is supported here
    // Generates map of Skeleton-like objects for use later when generating and binding skeletons.
    parseDeformers: function parseDeformers() {
      var skeletons = {};
      var morphTargets = {};

      if ('Deformer' in fbxTree.Objects) {
        var DeformerNodes = fbxTree.Objects.Deformer;

        for (var nodeID in DeformerNodes) {
          var deformerNode = DeformerNodes[nodeID];
          var relationships = connections.get(parseInt(nodeID));

          if (deformerNode.attrType === 'Skin') {
            var skeleton = this.parseSkeleton(relationships, DeformerNodes);
            skeleton.ID = nodeID;
            if (relationships.parents.length > 1) console.warn('THREE.FBXLoader: skeleton attached to more than one geometry is not supported.');
            skeleton.geometryID = relationships.parents[0].ID;
            skeletons[nodeID] = skeleton;
          } else if (deformerNode.attrType === 'BlendShape') {
            var morphTarget = {
              id: nodeID
            };
            morphTarget.rawTargets = this.parseMorphTargets(relationships, DeformerNodes);
            morphTarget.id = nodeID;
            if (relationships.parents.length > 1) console.warn('THREE.FBXLoader: morph target attached to more than one geometry is not supported.');
            morphTargets[nodeID] = morphTarget;
          }
        }
      }

      return {
        skeletons: skeletons,
        morphTargets: morphTargets
      };
    },
    // Parse single nodes in FBXTree.Objects.Deformer
    // The top level skeleton node has type 'Skin' and sub nodes have type 'Cluster'
    // Each skin node represents a skeleton and each cluster node represents a bone
    parseSkeleton: function parseSkeleton(relationships, deformerNodes) {
      var rawBones = [];
      relationships.children.forEach(function (child) {
        var boneNode = deformerNodes[child.ID];
        if (boneNode.attrType !== 'Cluster') return;
        var rawBone = {
          ID: child.ID,
          indices: [],
          weights: [],
          transformLink: new three__WEBPACK_IMPORTED_MODULE_0__["Matrix4"]().fromArray(boneNode.TransformLink.a) // transform: new Matrix4().fromArray( boneNode.Transform.a ),
          // linkMode: boneNode.Mode,

        };

        if ('Indexes' in boneNode) {
          rawBone.indices = boneNode.Indexes.a;
          rawBone.weights = boneNode.Weights.a;
        }

        rawBones.push(rawBone);
      });
      return {
        rawBones: rawBones,
        bones: []
      };
    },
    // The top level morph deformer node has type "BlendShape" and sub nodes have type "BlendShapeChannel"
    parseMorphTargets: function parseMorphTargets(relationships, deformerNodes) {
      var rawMorphTargets = [];

      for (var i = 0; i < relationships.children.length; i++) {
        var child = relationships.children[i];
        var morphTargetNode = deformerNodes[child.ID];
        var rawMorphTarget = {
          name: morphTargetNode.attrName,
          initialWeight: morphTargetNode.DeformPercent,
          id: morphTargetNode.id,
          fullWeights: morphTargetNode.FullWeights.a
        };
        if (morphTargetNode.attrType !== 'BlendShapeChannel') return;
        rawMorphTarget.geoID = connections.get(parseInt(child.ID)).children.filter(function (child) {
          return child.relationship === undefined;
        })[0].ID;
        rawMorphTargets.push(rawMorphTarget);
      }

      return rawMorphTargets;
    },
    // create the main Group() to be returned by the loader
    parseScene: function parseScene(deformers, geometryMap, materialMap) {
      sceneGraph = new three__WEBPACK_IMPORTED_MODULE_0__["Group"]();
      var modelMap = this.parseModels(deformers.skeletons, geometryMap, materialMap);
      var modelNodes = fbxTree.Objects.Model;
      var self = this;
      modelMap.forEach(function (model) {
        var modelNode = modelNodes[model.ID];
        self.setLookAtProperties(model, modelNode);
        var parentConnections = connections.get(model.ID).parents;
        parentConnections.forEach(function (connection) {
          var parent = modelMap.get(connection.ID);
          if (parent !== undefined) parent.add(model);
        });

        if (model.parent === null) {
          sceneGraph.add(model);
        }
      });
      this.bindSkeleton(deformers.skeletons, geometryMap, modelMap);
      this.createAmbientLight();
      this.setupMorphMaterials();
      sceneGraph.traverse(function (node) {
        if (node.userData.transformData) {
          if (node.parent) node.userData.transformData.parentMatrixWorld = node.parent.matrix;
          var transform = generateTransform(node.userData.transformData);
          node.applyMatrix(transform);
        }
      });
      var animations = new AnimationParser().parse(); // if all the models where already combined in a single group, just return that

      if (sceneGraph.children.length === 1 && sceneGraph.children[0].isGroup) {
        sceneGraph.children[0].animations = animations;
        sceneGraph = sceneGraph.children[0];
      }

      sceneGraph.animations = animations;
    },
    // parse nodes in FBXTree.Objects.Model
    parseModels: function parseModels(skeletons, geometryMap, materialMap) {
      var modelMap = new Map();
      var modelNodes = fbxTree.Objects.Model;

      for (var nodeID in modelNodes) {
        var id = parseInt(nodeID);
        var node = modelNodes[nodeID];
        var relationships = connections.get(id);
        var model = this.buildSkeleton(relationships, skeletons, id, node.attrName);

        if (!model) {
          switch (node.attrType) {
            case 'Camera':
              model = this.createCamera(relationships);
              break;

            case 'Light':
              model = this.createLight(relationships);
              break;

            case 'Mesh':
              model = this.createMesh(relationships, geometryMap, materialMap);
              break;

            case 'NurbsCurve':
              model = this.createCurve(relationships, geometryMap);
              break;

            case 'LimbNode':
            case 'Root':
              model = new three__WEBPACK_IMPORTED_MODULE_0__["Bone"]();
              break;

            case 'Null':
            default:
              model = new three__WEBPACK_IMPORTED_MODULE_0__["Group"]();
              break;
          }

          model.name = three__WEBPACK_IMPORTED_MODULE_0__["PropertyBinding"].sanitizeNodeName(node.attrName);
          model.ID = id;
        }

        this.getTransformData(model, node);
        modelMap.set(id, model);
      }

      return modelMap;
    },
    buildSkeleton: function buildSkeleton(relationships, skeletons, id, name) {
      var bone = null;
      relationships.parents.forEach(function (parent) {
        for (var ID in skeletons) {
          var skeleton = skeletons[ID];
          skeleton.rawBones.forEach(function (rawBone, i) {
            if (rawBone.ID === parent.ID) {
              var subBone = bone;
              bone = new three__WEBPACK_IMPORTED_MODULE_0__["Bone"]();
              bone.matrixWorld.copy(rawBone.transformLink); // set name and id here - otherwise in cases where "subBone" is created it will not have a name / id

              bone.name = three__WEBPACK_IMPORTED_MODULE_0__["PropertyBinding"].sanitizeNodeName(name);
              bone.ID = id;
              skeleton.bones[i] = bone; // In cases where a bone is shared between multiple meshes
              // duplicate the bone here and and it as a child of the first bone

              if (subBone !== null) {
                bone.add(subBone);
              }
            }
          });
        }
      });
      return bone;
    },
    // create a PerspectiveCamera or OrthographicCamera
    createCamera: function createCamera(relationships) {
      var model;
      var cameraAttribute;
      relationships.children.forEach(function (child) {
        var attr = fbxTree.Objects.NodeAttribute[child.ID];

        if (attr !== undefined) {
          cameraAttribute = attr;
        }
      });

      if (cameraAttribute === undefined) {
        model = new three__WEBPACK_IMPORTED_MODULE_0__["Object3D"]();
      } else {
        var type = 0;

        if (cameraAttribute.CameraProjectionType !== undefined && cameraAttribute.CameraProjectionType.value === 1) {
          type = 1;
        }

        var nearClippingPlane = 1;

        if (cameraAttribute.NearPlane !== undefined) {
          nearClippingPlane = cameraAttribute.NearPlane.value / 1000;
        }

        var farClippingPlane = 1000;

        if (cameraAttribute.FarPlane !== undefined) {
          farClippingPlane = cameraAttribute.FarPlane.value / 1000;
        }

        var width = window.innerWidth;
        var height = window.innerHeight;

        if (cameraAttribute.AspectWidth !== undefined && cameraAttribute.AspectHeight !== undefined) {
          width = cameraAttribute.AspectWidth.value;
          height = cameraAttribute.AspectHeight.value;
        }

        var aspect = width / height;
        var fov = 45;

        if (cameraAttribute.FieldOfView !== undefined) {
          fov = cameraAttribute.FieldOfView.value;
        }

        var focalLength = cameraAttribute.FocalLength ? cameraAttribute.FocalLength.value : null;

        switch (type) {
          case 0:
            // Perspective
            model = new three__WEBPACK_IMPORTED_MODULE_0__["PerspectiveCamera"](fov, aspect, nearClippingPlane, farClippingPlane);
            if (focalLength !== null) model.setFocalLength(focalLength);
            break;

          case 1:
            // Orthographic
            model = new three__WEBPACK_IMPORTED_MODULE_0__["OrthographicCamera"](-width / 2, width / 2, height / 2, -height / 2, nearClippingPlane, farClippingPlane);
            break;

          default:
            console.warn('THREE.FBXLoader: Unknown camera type ' + type + '.');
            model = new three__WEBPACK_IMPORTED_MODULE_0__["Object3D"]();
            break;
        }
      }

      return model;
    },
    // Create a DirectionalLight, PointLight or SpotLight
    createLight: function createLight(relationships) {
      var model;
      var lightAttribute;
      relationships.children.forEach(function (child) {
        var attr = fbxTree.Objects.NodeAttribute[child.ID];

        if (attr !== undefined) {
          lightAttribute = attr;
        }
      });

      if (lightAttribute === undefined) {
        model = new three__WEBPACK_IMPORTED_MODULE_0__["Object3D"]();
      } else {
        var type; // LightType can be undefined for Point lights

        if (lightAttribute.LightType === undefined) {
          type = 0;
        } else {
          type = lightAttribute.LightType.value;
        }

        var color = 0xffffff;

        if (lightAttribute.Color !== undefined) {
          color = new three__WEBPACK_IMPORTED_MODULE_0__["Color"]().fromArray(lightAttribute.Color.value);
        }

        var intensity = lightAttribute.Intensity === undefined ? 1 : lightAttribute.Intensity.value / 100; // light disabled

        if (lightAttribute.CastLightOnObject !== undefined && lightAttribute.CastLightOnObject.value === 0) {
          intensity = 0;
        }

        var distance = 0;

        if (lightAttribute.FarAttenuationEnd !== undefined) {
          if (lightAttribute.EnableFarAttenuation !== undefined && lightAttribute.EnableFarAttenuation.value === 0) {
            distance = 0;
          } else {
            distance = lightAttribute.FarAttenuationEnd.value;
          }
        } // TODO: could this be calculated linearly from FarAttenuationStart to FarAttenuationEnd?


        var decay = 1;

        switch (type) {
          case 0:
            // Point
            model = new three__WEBPACK_IMPORTED_MODULE_0__["PointLight"](color, intensity, distance, decay);
            break;

          case 1:
            // Directional
            model = new three__WEBPACK_IMPORTED_MODULE_0__["DirectionalLight"](color, intensity);
            break;

          case 2:
            // Spot
            var angle = Math.PI / 3;

            if (lightAttribute.InnerAngle !== undefined) {
              angle = three__WEBPACK_IMPORTED_MODULE_0__["Math"].degToRad(lightAttribute.InnerAngle.value);
            }

            var penumbra = 0;

            if (lightAttribute.OuterAngle !== undefined) {
              // TODO: this is not correct - FBX calculates outer and inner angle in degrees
              // with OuterAngle > InnerAngle && OuterAngle <= Math.PI
              // while three.js uses a penumbra between (0, 1) to attenuate the inner angle
              penumbra = three__WEBPACK_IMPORTED_MODULE_0__["Math"].degToRad(lightAttribute.OuterAngle.value);
              penumbra = Math.max(penumbra, 1);
            }

            model = new three__WEBPACK_IMPORTED_MODULE_0__["SpotLight"](color, intensity, distance, angle, penumbra, decay);
            break;

          default:
            console.warn('THREE.FBXLoader: Unknown light type ' + lightAttribute.LightType.value + ', defaulting to a PointLight.');
            model = new three__WEBPACK_IMPORTED_MODULE_0__["PointLight"](color, intensity);
            break;
        }

        if (lightAttribute.CastShadows !== undefined && lightAttribute.CastShadows.value === 1) {
          model.castShadow = true;
        }
      }

      return model;
    },
    createMesh: function createMesh(relationships, geometryMap, materialMap) {
      var model;
      var geometry = null;
      var material = null;
      var materials = []; // get geometry and materials(s) from connections

      relationships.children.forEach(function (child) {
        if (geometryMap.has(child.ID)) {
          geometry = geometryMap.get(child.ID);
        }

        if (materialMap.has(child.ID)) {
          materials.push(materialMap.get(child.ID));
        }
      });

      if (materials.length > 1) {
        material = materials;
      } else if (materials.length > 0) {
        material = materials[0];
      } else {
        material = new three__WEBPACK_IMPORTED_MODULE_0__["MeshPhongMaterial"]({
          color: 0xcccccc
        });
        materials.push(material);
      }

      if ('color' in geometry.attributes) {
        materials.forEach(function (material) {
          material.vertexColors = three__WEBPACK_IMPORTED_MODULE_0__["VertexColors"];
        });
      }

      if (geometry.FBX_Deformer) {
        materials.forEach(function (material) {
          material.skinning = true;
        });
        model = new three__WEBPACK_IMPORTED_MODULE_0__["SkinnedMesh"](geometry, material);
        model.normalizeSkinWeights();
      } else {
        model = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](geometry, material);
      }

      return model;
    },
    createCurve: function createCurve(relationships, geometryMap) {
      var geometry = relationships.children.reduce(function (geo, child) {
        if (geometryMap.has(child.ID)) geo = geometryMap.get(child.ID);
        return geo;
      }, null); // FBX does not list materials for Nurbs lines, so we'll just put our own in here.

      var material = new three__WEBPACK_IMPORTED_MODULE_0__["LineBasicMaterial"]({
        color: 0x3300ff,
        linewidth: 1
      });
      return new three__WEBPACK_IMPORTED_MODULE_0__["Line"](geometry, material);
    },
    // parse the model node for transform data
    getTransformData: function getTransformData(model, modelNode) {
      var transformData = {};
      if ('InheritType' in modelNode) transformData.inheritType = parseInt(modelNode.InheritType.value);
      if ('RotationOrder' in modelNode) transformData.eulerOrder = getEulerOrder(modelNode.RotationOrder.value);else transformData.eulerOrder = 'ZYX';
      if ('Lcl_Translation' in modelNode) transformData.translation = modelNode.Lcl_Translation.value;
      if ('PreRotation' in modelNode) transformData.preRotation = modelNode.PreRotation.value;
      if ('Lcl_Rotation' in modelNode) transformData.rotation = modelNode.Lcl_Rotation.value;
      if ('PostRotation' in modelNode) transformData.postRotation = modelNode.PostRotation.value;
      if ('Lcl_Scaling' in modelNode) transformData.scale = modelNode.Lcl_Scaling.value;
      if ('ScalingOffset' in modelNode) transformData.scalingOffset = modelNode.ScalingOffset.value;
      if ('ScalingPivot' in modelNode) transformData.scalingPivot = modelNode.ScalingPivot.value;
      if ('RotationOffset' in modelNode) transformData.rotationOffset = modelNode.RotationOffset.value;
      if ('RotationPivot' in modelNode) transformData.rotationPivot = modelNode.RotationPivot.value;
      model.userData.transformData = transformData;
    },
    setLookAtProperties: function setLookAtProperties(model, modelNode) {
      if ('LookAtProperty' in modelNode) {
        var children = connections.get(model.ID).children;
        children.forEach(function (child) {
          if (child.relationship === 'LookAtProperty') {
            var lookAtTarget = fbxTree.Objects.Model[child.ID];

            if ('Lcl_Translation' in lookAtTarget) {
              var pos = lookAtTarget.Lcl_Translation.value; // DirectionalLight, SpotLight

              if (model.target !== undefined) {
                model.target.position.fromArray(pos);
                sceneGraph.add(model.target);
              } else {
                // Cameras and other Object3Ds
                model.lookAt(new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"]().fromArray(pos));
              }
            }
          }
        });
      }
    },
    bindSkeleton: function bindSkeleton(skeletons, geometryMap, modelMap) {
      var bindMatrices = this.parsePoseNodes();

      for (var ID in skeletons) {
        var skeleton = skeletons[ID];
        var parents = connections.get(parseInt(skeleton.ID)).parents;
        parents.forEach(function (parent) {
          if (geometryMap.has(parent.ID)) {
            var geoID = parent.ID;
            var geoRelationships = connections.get(geoID);
            geoRelationships.parents.forEach(function (geoConnParent) {
              if (modelMap.has(geoConnParent.ID)) {
                var model = modelMap.get(geoConnParent.ID);
                model.bind(new three__WEBPACK_IMPORTED_MODULE_0__["Skeleton"](skeleton.bones), bindMatrices[geoConnParent.ID]);
              }
            });
          }
        });
      }
    },
    parsePoseNodes: function parsePoseNodes() {
      var bindMatrices = {};

      if ('Pose' in fbxTree.Objects) {
        var BindPoseNode = fbxTree.Objects.Pose;

        for (var nodeID in BindPoseNode) {
          if (BindPoseNode[nodeID].attrType === 'BindPose') {
            var poseNodes = BindPoseNode[nodeID].PoseNode;

            if (Array.isArray(poseNodes)) {
              poseNodes.forEach(function (poseNode) {
                bindMatrices[poseNode.Node] = new three__WEBPACK_IMPORTED_MODULE_0__["Matrix4"]().fromArray(poseNode.Matrix.a);
              });
            } else {
              bindMatrices[poseNodes.Node] = new three__WEBPACK_IMPORTED_MODULE_0__["Matrix4"]().fromArray(poseNodes.Matrix.a);
            }
          }
        }
      }

      return bindMatrices;
    },
    // Parse ambient color in FBXTree.GlobalSettings - if it's not set to black (default), create an ambient light
    createAmbientLight: function createAmbientLight() {
      if ('GlobalSettings' in fbxTree && 'AmbientColor' in fbxTree.GlobalSettings) {
        var ambientColor = fbxTree.GlobalSettings.AmbientColor.value;
        var r = ambientColor[0];
        var g = ambientColor[1];
        var b = ambientColor[2];

        if (r !== 0 || g !== 0 || b !== 0) {
          var color = new three__WEBPACK_IMPORTED_MODULE_0__["Color"](r, g, b);
          sceneGraph.add(new three__WEBPACK_IMPORTED_MODULE_0__["AmbientLight"](color, 1));
        }
      }
    },
    setupMorphMaterials: function setupMorphMaterials() {
      var self = this;
      sceneGraph.traverse(function (child) {
        if (child.isMesh) {
          if (child.geometry.morphAttributes.position && child.geometry.morphAttributes.position.length) {
            if (Array.isArray(child.material)) {
              child.material.forEach(function (material, i) {
                self.setupMorphMaterial(child, material, i);
              });
            } else {
              self.setupMorphMaterial(child, child.material);
            }
          }
        }
      });
    },
    setupMorphMaterial: function setupMorphMaterial(child, material, index) {
      var uuid = child.uuid;
      var matUuid = material.uuid; // if a geometry has morph targets, it cannot share the material with other geometries

      var sharedMat = false;
      sceneGraph.traverse(function (node) {
        if (node.isMesh) {
          if (Array.isArray(node.material)) {
            node.material.forEach(function (mat) {
              if (mat.uuid === matUuid && node.uuid !== uuid) sharedMat = true;
            });
          } else if (node.material.uuid === matUuid && node.uuid !== uuid) sharedMat = true;
        }
      });

      if (sharedMat === true) {
        var clonedMat = material.clone();
        clonedMat.morphTargets = true;
        if (index === undefined) child.material = clonedMat;else child.material[index] = clonedMat;
      } else material.morphTargets = true;
    } // parse Geometry data from FBXTree and return map of BufferGeometries

  };

  function GeometryParser() {}

  GeometryParser.prototype = {
    constructor: GeometryParser,
    // Parse nodes in FBXTree.Objects.Geometry
    parse: function parse(deformers) {
      var geometryMap = new Map();

      if ('Geometry' in fbxTree.Objects) {
        var geoNodes = fbxTree.Objects.Geometry;

        for (var nodeID in geoNodes) {
          var relationships = connections.get(parseInt(nodeID));
          var geo = this.parseGeometry(relationships, geoNodes[nodeID], deformers);
          geometryMap.set(parseInt(nodeID), geo);
        }
      }

      return geometryMap;
    },
    // Parse single node in FBXTree.Objects.Geometry
    parseGeometry: function parseGeometry(relationships, geoNode, deformers) {
      switch (geoNode.attrType) {
        case 'Mesh':
          return this.parseMeshGeometry(relationships, geoNode, deformers);
          break;

        case 'NurbsCurve':
          return this.parseNurbsGeometry(geoNode);
          break;
      }
    },
    // Parse single node mesh geometry in FBXTree.Objects.Geometry
    parseMeshGeometry: function parseMeshGeometry(relationships, geoNode, deformers) {
      var skeletons = deformers.skeletons;
      var morphTargets = deformers.morphTargets;
      var modelNodes = relationships.parents.map(function (parent) {
        return fbxTree.Objects.Model[parent.ID];
      }); // don't create geometry if it is not associated with any models

      if (modelNodes.length === 0) return;
      var skeleton = relationships.children.reduce(function (skeleton, child) {
        if (skeletons[child.ID] !== undefined) skeleton = skeletons[child.ID];
        return skeleton;
      }, null);
      var morphTarget = relationships.children.reduce(function (morphTarget, child) {
        if (morphTargets[child.ID] !== undefined) morphTarget = morphTargets[child.ID];
        return morphTarget;
      }, null); // Assume one model and get the preRotation from that
      // if there is more than one model associated with the geometry this may cause problems

      var modelNode = modelNodes[0];
      var transformData = {};
      if ('RotationOrder' in modelNode) transformData.eulerOrder = getEulerOrder(modelNode.RotationOrder.value);
      if ('InheritType' in modelNode) transformData.inheritType = parseInt(modelNode.InheritType.value);
      if ('GeometricTranslation' in modelNode) transformData.translation = modelNode.GeometricTranslation.value;
      if ('GeometricRotation' in modelNode) transformData.rotation = modelNode.GeometricRotation.value;
      if ('GeometricScaling' in modelNode) transformData.scale = modelNode.GeometricScaling.value;
      var transform = generateTransform(transformData);
      return this.genGeometry(geoNode, skeleton, morphTarget, transform);
    },
    // Generate a BufferGeometry from a node in FBXTree.Objects.Geometry
    genGeometry: function genGeometry(geoNode, skeleton, morphTarget, preTransform) {
      var geo = new three__WEBPACK_IMPORTED_MODULE_0__["BufferGeometry"]();
      if (geoNode.attrName) geo.name = geoNode.attrName;
      var geoInfo = this.parseGeoNode(geoNode, skeleton);
      var buffers = this.genBuffers(geoInfo);
      var positionAttribute = new three__WEBPACK_IMPORTED_MODULE_0__["Float32BufferAttribute"](buffers.vertex, 3);
      preTransform.applyToBufferAttribute(positionAttribute);
      geo.addAttribute('position', positionAttribute);

      if (buffers.colors.length > 0) {
        geo.addAttribute('color', new three__WEBPACK_IMPORTED_MODULE_0__["Float32BufferAttribute"](buffers.colors, 3));
      }

      if (skeleton) {
        geo.addAttribute('skinIndex', new three__WEBPACK_IMPORTED_MODULE_0__["Uint16BufferAttribute"](buffers.weightsIndices, 4));
        geo.addAttribute('skinWeight', new three__WEBPACK_IMPORTED_MODULE_0__["Float32BufferAttribute"](buffers.vertexWeights, 4)); // used later to bind the skeleton to the model

        geo.FBX_Deformer = skeleton;
      }

      if (buffers.normal.length > 0) {
        var normalAttribute = new three__WEBPACK_IMPORTED_MODULE_0__["Float32BufferAttribute"](buffers.normal, 3);
        var normalMatrix = new three__WEBPACK_IMPORTED_MODULE_0__["Matrix3"]().getNormalMatrix(preTransform);
        normalMatrix.applyToBufferAttribute(normalAttribute);
        geo.addAttribute('normal', normalAttribute);
      }

      buffers.uvs.forEach(function (uvBuffer, i) {
        // subsequent uv buffers are called 'uv1', 'uv2', ...
        var name = 'uv' + (i + 1).toString(); // the first uv buffer is just called 'uv'

        if (i === 0) {
          name = 'uv';
        }

        geo.addAttribute(name, new three__WEBPACK_IMPORTED_MODULE_0__["Float32BufferAttribute"](buffers.uvs[i], 2));
      });

      if (geoInfo.material && geoInfo.material.mappingType !== 'AllSame') {
        // Convert the material indices of each vertex into rendering groups on the geometry.
        var prevMaterialIndex = buffers.materialIndex[0];
        var startIndex = 0;
        buffers.materialIndex.forEach(function (currentIndex, i) {
          if (currentIndex !== prevMaterialIndex) {
            geo.addGroup(startIndex, i - startIndex, prevMaterialIndex);
            prevMaterialIndex = currentIndex;
            startIndex = i;
          }
        }); // the loop above doesn't add the last group, do that here.

        if (geo.groups.length > 0) {
          var lastGroup = geo.groups[geo.groups.length - 1];
          var lastIndex = lastGroup.start + lastGroup.count;

          if (lastIndex !== buffers.materialIndex.length) {
            geo.addGroup(lastIndex, buffers.materialIndex.length - lastIndex, prevMaterialIndex);
          }
        } // case where there are multiple materials but the whole geometry is only
        // using one of them


        if (geo.groups.length === 0) {
          geo.addGroup(0, buffers.materialIndex.length, buffers.materialIndex[0]);
        }
      }

      this.addMorphTargets(geo, geoNode, morphTarget, preTransform);
      return geo;
    },
    parseGeoNode: function parseGeoNode(geoNode, skeleton) {
      var geoInfo = {};
      geoInfo.vertexPositions = geoNode.Vertices !== undefined ? geoNode.Vertices.a : [];
      geoInfo.vertexIndices = geoNode.PolygonVertexIndex !== undefined ? geoNode.PolygonVertexIndex.a : [];

      if (geoNode.LayerElementColor) {
        geoInfo.color = this.parseVertexColors(geoNode.LayerElementColor[0]);
      }

      if (geoNode.LayerElementMaterial) {
        geoInfo.material = this.parseMaterialIndices(geoNode.LayerElementMaterial[0]);
      }

      if (geoNode.LayerElementNormal) {
        geoInfo.normal = this.parseNormals(geoNode.LayerElementNormal[0]);
      }

      if (geoNode.LayerElementUV) {
        geoInfo.uv = [];
        var i = 0;

        while (geoNode.LayerElementUV[i]) {
          geoInfo.uv.push(this.parseUVs(geoNode.LayerElementUV[i]));
          i++;
        }
      }

      geoInfo.weightTable = {};

      if (skeleton !== null) {
        geoInfo.skeleton = skeleton;
        skeleton.rawBones.forEach(function (rawBone, i) {
          // loop over the bone's vertex indices and weights
          rawBone.indices.forEach(function (index, j) {
            if (geoInfo.weightTable[index] === undefined) geoInfo.weightTable[index] = [];
            geoInfo.weightTable[index].push({
              id: i,
              weight: rawBone.weights[j]
            });
          });
        });
      }

      return geoInfo;
    },
    genBuffers: function genBuffers(geoInfo) {
      var buffers = {
        vertex: [],
        normal: [],
        colors: [],
        uvs: [],
        materialIndex: [],
        vertexWeights: [],
        weightsIndices: []
      };
      var polygonIndex = 0;
      var faceLength = 0;
      var displayedWeightsWarning = false; // these will hold data for a single face

      var facePositionIndexes = [];
      var faceNormals = [];
      var faceColors = [];
      var faceUVs = [];
      var faceWeights = [];
      var faceWeightIndices = [];
      var self = this;
      geoInfo.vertexIndices.forEach(function (vertexIndex, polygonVertexIndex) {
        var endOfFace = false; // Face index and vertex index arrays are combined in a single array
        // A cube with quad faces looks like this:
        // PolygonVertexIndex: *24 {
        //  a: 0, 1, 3, -3, 2, 3, 5, -5, 4, 5, 7, -7, 6, 7, 1, -1, 1, 7, 5, -4, 6, 0, 2, -5
        //  }
        // Negative numbers mark the end of a face - first face here is 0, 1, 3, -3
        // to find index of last vertex bit shift the index: ^ - 1

        if (vertexIndex < 0) {
          vertexIndex = vertexIndex ^ -1; // equivalent to ( x * -1 ) - 1

          endOfFace = true;
        }

        var weightIndices = [];
        var weights = [];
        facePositionIndexes.push(vertexIndex * 3, vertexIndex * 3 + 1, vertexIndex * 3 + 2);

        if (geoInfo.color) {
          var data = getData(polygonVertexIndex, polygonIndex, vertexIndex, geoInfo.color);
          faceColors.push(data[0], data[1], data[2]);
        }

        if (geoInfo.skeleton) {
          if (geoInfo.weightTable[vertexIndex] !== undefined) {
            geoInfo.weightTable[vertexIndex].forEach(function (wt) {
              weights.push(wt.weight);
              weightIndices.push(wt.id);
            });
          }

          if (weights.length > 4) {
            if (!displayedWeightsWarning) {
              console.warn('THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights.');
              displayedWeightsWarning = true;
            }

            var wIndex = [0, 0, 0, 0];
            var Weight = [0, 0, 0, 0];
            weights.forEach(function (weight, weightIndex) {
              var currentWeight = weight;
              var currentIndex = weightIndices[weightIndex];
              Weight.forEach(function (comparedWeight, comparedWeightIndex, comparedWeightArray) {
                if (currentWeight > comparedWeight) {
                  comparedWeightArray[comparedWeightIndex] = currentWeight;
                  currentWeight = comparedWeight;
                  var tmp = wIndex[comparedWeightIndex];
                  wIndex[comparedWeightIndex] = currentIndex;
                  currentIndex = tmp;
                }
              });
            });
            weightIndices = wIndex;
            weights = Weight;
          } // if the weight array is shorter than 4 pad with 0s


          while (weights.length < 4) {
            weights.push(0);
            weightIndices.push(0);
          }

          for (var i = 0; i < 4; ++i) {
            faceWeights.push(weights[i]);
            faceWeightIndices.push(weightIndices[i]);
          }
        }

        if (geoInfo.normal) {
          var data = getData(polygonVertexIndex, polygonIndex, vertexIndex, geoInfo.normal);
          faceNormals.push(data[0], data[1], data[2]);
        }

        if (geoInfo.material && geoInfo.material.mappingType !== 'AllSame') {
          var materialIndex = getData(polygonVertexIndex, polygonIndex, vertexIndex, geoInfo.material)[0];
        }

        if (geoInfo.uv) {
          geoInfo.uv.forEach(function (uv, i) {
            var data = getData(polygonVertexIndex, polygonIndex, vertexIndex, uv);

            if (faceUVs[i] === undefined) {
              faceUVs[i] = [];
            }

            faceUVs[i].push(data[0]);
            faceUVs[i].push(data[1]);
          });
        }

        faceLength++;

        if (endOfFace) {
          self.genFace(buffers, geoInfo, facePositionIndexes, materialIndex, faceNormals, faceColors, faceUVs, faceWeights, faceWeightIndices, faceLength);
          polygonIndex++;
          faceLength = 0; // reset arrays for the next face

          facePositionIndexes = [];
          faceNormals = [];
          faceColors = [];
          faceUVs = [];
          faceWeights = [];
          faceWeightIndices = [];
        }
      });
      return buffers;
    },
    // Generate data for a single face in a geometry. If the face is a quad then split it into 2 tris
    genFace: function genFace(buffers, geoInfo, facePositionIndexes, materialIndex, faceNormals, faceColors, faceUVs, faceWeights, faceWeightIndices, faceLength) {
      for (var i = 2; i < faceLength; i++) {
        buffers.vertex.push(geoInfo.vertexPositions[facePositionIndexes[0]]);
        buffers.vertex.push(geoInfo.vertexPositions[facePositionIndexes[1]]);
        buffers.vertex.push(geoInfo.vertexPositions[facePositionIndexes[2]]);
        buffers.vertex.push(geoInfo.vertexPositions[facePositionIndexes[(i - 1) * 3]]);
        buffers.vertex.push(geoInfo.vertexPositions[facePositionIndexes[(i - 1) * 3 + 1]]);
        buffers.vertex.push(geoInfo.vertexPositions[facePositionIndexes[(i - 1) * 3 + 2]]);
        buffers.vertex.push(geoInfo.vertexPositions[facePositionIndexes[i * 3]]);
        buffers.vertex.push(geoInfo.vertexPositions[facePositionIndexes[i * 3 + 1]]);
        buffers.vertex.push(geoInfo.vertexPositions[facePositionIndexes[i * 3 + 2]]);

        if (geoInfo.skeleton) {
          buffers.vertexWeights.push(faceWeights[0]);
          buffers.vertexWeights.push(faceWeights[1]);
          buffers.vertexWeights.push(faceWeights[2]);
          buffers.vertexWeights.push(faceWeights[3]);
          buffers.vertexWeights.push(faceWeights[(i - 1) * 4]);
          buffers.vertexWeights.push(faceWeights[(i - 1) * 4 + 1]);
          buffers.vertexWeights.push(faceWeights[(i - 1) * 4 + 2]);
          buffers.vertexWeights.push(faceWeights[(i - 1) * 4 + 3]);
          buffers.vertexWeights.push(faceWeights[i * 4]);
          buffers.vertexWeights.push(faceWeights[i * 4 + 1]);
          buffers.vertexWeights.push(faceWeights[i * 4 + 2]);
          buffers.vertexWeights.push(faceWeights[i * 4 + 3]);
          buffers.weightsIndices.push(faceWeightIndices[0]);
          buffers.weightsIndices.push(faceWeightIndices[1]);
          buffers.weightsIndices.push(faceWeightIndices[2]);
          buffers.weightsIndices.push(faceWeightIndices[3]);
          buffers.weightsIndices.push(faceWeightIndices[(i - 1) * 4]);
          buffers.weightsIndices.push(faceWeightIndices[(i - 1) * 4 + 1]);
          buffers.weightsIndices.push(faceWeightIndices[(i - 1) * 4 + 2]);
          buffers.weightsIndices.push(faceWeightIndices[(i - 1) * 4 + 3]);
          buffers.weightsIndices.push(faceWeightIndices[i * 4]);
          buffers.weightsIndices.push(faceWeightIndices[i * 4 + 1]);
          buffers.weightsIndices.push(faceWeightIndices[i * 4 + 2]);
          buffers.weightsIndices.push(faceWeightIndices[i * 4 + 3]);
        }

        if (geoInfo.color) {
          buffers.colors.push(faceColors[0]);
          buffers.colors.push(faceColors[1]);
          buffers.colors.push(faceColors[2]);
          buffers.colors.push(faceColors[(i - 1) * 3]);
          buffers.colors.push(faceColors[(i - 1) * 3 + 1]);
          buffers.colors.push(faceColors[(i - 1) * 3 + 2]);
          buffers.colors.push(faceColors[i * 3]);
          buffers.colors.push(faceColors[i * 3 + 1]);
          buffers.colors.push(faceColors[i * 3 + 2]);
        }

        if (geoInfo.material && geoInfo.material.mappingType !== 'AllSame') {
          buffers.materialIndex.push(materialIndex);
          buffers.materialIndex.push(materialIndex);
          buffers.materialIndex.push(materialIndex);
        }

        if (geoInfo.normal) {
          buffers.normal.push(faceNormals[0]);
          buffers.normal.push(faceNormals[1]);
          buffers.normal.push(faceNormals[2]);
          buffers.normal.push(faceNormals[(i - 1) * 3]);
          buffers.normal.push(faceNormals[(i - 1) * 3 + 1]);
          buffers.normal.push(faceNormals[(i - 1) * 3 + 2]);
          buffers.normal.push(faceNormals[i * 3]);
          buffers.normal.push(faceNormals[i * 3 + 1]);
          buffers.normal.push(faceNormals[i * 3 + 2]);
        }

        if (geoInfo.uv) {
          geoInfo.uv.forEach(function (uv, j) {
            if (buffers.uvs[j] === undefined) buffers.uvs[j] = [];
            buffers.uvs[j].push(faceUVs[j][0]);
            buffers.uvs[j].push(faceUVs[j][1]);
            buffers.uvs[j].push(faceUVs[j][(i - 1) * 2]);
            buffers.uvs[j].push(faceUVs[j][(i - 1) * 2 + 1]);
            buffers.uvs[j].push(faceUVs[j][i * 2]);
            buffers.uvs[j].push(faceUVs[j][i * 2 + 1]);
          });
        }
      }
    },
    addMorphTargets: function addMorphTargets(parentGeo, parentGeoNode, morphTarget, preTransform) {
      if (morphTarget === null) return;
      parentGeo.morphAttributes.position = []; // parentGeo.morphAttributes.normal = []; // not implemented

      var self = this;
      morphTarget.rawTargets.forEach(function (rawTarget) {
        var morphGeoNode = fbxTree.Objects.Geometry[rawTarget.geoID];

        if (morphGeoNode !== undefined) {
          self.genMorphGeometry(parentGeo, parentGeoNode, morphGeoNode, preTransform, rawTarget.name);
        }
      });
    },
    // a morph geometry node is similar to a standard  node, and the node is also contained
    // in FBXTree.Objects.Geometry, however it can only have attributes for position, normal
    // and a special attribute Index defining which vertices of the original geometry are affected
    // Normal and position attributes only have data for the vertices that are affected by the morph
    genMorphGeometry: function genMorphGeometry(parentGeo, parentGeoNode, morphGeoNode, preTransform, name) {
      var morphGeo = new three__WEBPACK_IMPORTED_MODULE_0__["BufferGeometry"]();
      if (morphGeoNode.attrName) morphGeo.name = morphGeoNode.attrName;
      var vertexIndices = parentGeoNode.PolygonVertexIndex !== undefined ? parentGeoNode.PolygonVertexIndex.a : []; // make a copy of the parent's vertex positions

      var vertexPositions = parentGeoNode.Vertices !== undefined ? parentGeoNode.Vertices.a.slice() : [];
      var morphPositions = morphGeoNode.Vertices !== undefined ? morphGeoNode.Vertices.a : [];
      var indices = morphGeoNode.Indexes !== undefined ? morphGeoNode.Indexes.a : [];

      for (var i = 0; i < indices.length; i++) {
        var morphIndex = indices[i] * 3; // FBX format uses blend shapes rather than morph targets. This can be converted
        // by additively combining the blend shape positions with the original geometry's positions

        vertexPositions[morphIndex] += morphPositions[i * 3];
        vertexPositions[morphIndex + 1] += morphPositions[i * 3 + 1];
        vertexPositions[morphIndex + 2] += morphPositions[i * 3 + 2];
      } // TODO: add morph normal support


      var morphGeoInfo = {
        vertexIndices: vertexIndices,
        vertexPositions: vertexPositions
      };
      var morphBuffers = this.genBuffers(morphGeoInfo);
      var positionAttribute = new three__WEBPACK_IMPORTED_MODULE_0__["Float32BufferAttribute"](morphBuffers.vertex, 3);
      positionAttribute.name = name || morphGeoNode.attrName;
      preTransform.applyToBufferAttribute(positionAttribute);
      parentGeo.morphAttributes.position.push(positionAttribute);
    },
    // Parse normal from FBXTree.Objects.Geometry.LayerElementNormal if it exists
    parseNormals: function parseNormals(NormalNode) {
      var mappingType = NormalNode.MappingInformationType;
      var referenceType = NormalNode.ReferenceInformationType;
      var buffer = NormalNode.Normals.a;
      var indexBuffer = [];

      if (referenceType === 'IndexToDirect') {
        if ('NormalIndex' in NormalNode) {
          indexBuffer = NormalNode.NormalIndex.a;
        } else if ('NormalsIndex' in NormalNode) {
          indexBuffer = NormalNode.NormalsIndex.a;
        }
      }

      return {
        dataSize: 3,
        buffer: buffer,
        indices: indexBuffer,
        mappingType: mappingType,
        referenceType: referenceType
      };
    },
    // Parse UVs from FBXTree.Objects.Geometry.LayerElementUV if it exists
    parseUVs: function parseUVs(UVNode) {
      var mappingType = UVNode.MappingInformationType;
      var referenceType = UVNode.ReferenceInformationType;
      var buffer = UVNode.UV.a;
      var indexBuffer = [];

      if (referenceType === 'IndexToDirect') {
        indexBuffer = UVNode.UVIndex.a;
      }

      return {
        dataSize: 2,
        buffer: buffer,
        indices: indexBuffer,
        mappingType: mappingType,
        referenceType: referenceType
      };
    },
    // Parse Vertex Colors from FBXTree.Objects.Geometry.LayerElementColor if it exists
    parseVertexColors: function parseVertexColors(ColorNode) {
      var mappingType = ColorNode.MappingInformationType;
      var referenceType = ColorNode.ReferenceInformationType;
      var buffer = ColorNode.Colors.a;
      var indexBuffer = [];

      if (referenceType === 'IndexToDirect') {
        indexBuffer = ColorNode.ColorIndex.a;
      }

      return {
        dataSize: 4,
        buffer: buffer,
        indices: indexBuffer,
        mappingType: mappingType,
        referenceType: referenceType
      };
    },
    // Parse mapping and material data in FBXTree.Objects.Geometry.LayerElementMaterial if it exists
    parseMaterialIndices: function parseMaterialIndices(MaterialNode) {
      var mappingType = MaterialNode.MappingInformationType;
      var referenceType = MaterialNode.ReferenceInformationType;

      if (mappingType === 'NoMappingInformation') {
        return {
          dataSize: 1,
          buffer: [0],
          indices: [0],
          mappingType: 'AllSame',
          referenceType: referenceType
        };
      }

      var materialIndexBuffer = MaterialNode.Materials.a; // Since materials are stored as indices, there's a bit of a mismatch between FBX and what
      // we expect.So we create an intermediate buffer that points to the index in the buffer,
      // for conforming with the other functions we've written for other data.

      var materialIndices = [];

      for (var i = 0; i < materialIndexBuffer.length; ++i) {
        materialIndices.push(i);
      }

      return {
        dataSize: 1,
        buffer: materialIndexBuffer,
        indices: materialIndices,
        mappingType: mappingType,
        referenceType: referenceType
      };
    },
    // Generate a NurbGeometry from a node in FBXTree.Objects.Geometry
    parseNurbsGeometry: function parseNurbsGeometry(geoNode) {
      if (_NURBSCurve_js__WEBPACK_IMPORTED_MODULE_3__["NURBSCurve"] === undefined) {
        console.error('THREE.FBXLoader: The loader relies on NURBSCurve for any nurbs present in the model. Nurbs will show up as empty geometry.');
        return new three__WEBPACK_IMPORTED_MODULE_0__["BufferGeometry"]();
      }

      var order = parseInt(geoNode.Order);

      if (isNaN(order)) {
        console.error('THREE.FBXLoader: Invalid Order %s given for geometry ID: %s', geoNode.Order, geoNode.id);
        return new three__WEBPACK_IMPORTED_MODULE_0__["BufferGeometry"]();
      }

      var degree = order - 1;
      var knots = geoNode.KnotVector.a;
      var controlPoints = [];
      var pointsValues = geoNode.Points.a;

      for (var i = 0, l = pointsValues.length; i < l; i += 4) {
        controlPoints.push(new three__WEBPACK_IMPORTED_MODULE_0__["Vector4"]().fromArray(pointsValues, i));
      }

      var startKnot, endKnot;

      if (geoNode.Form === 'Closed') {
        controlPoints.push(controlPoints[0]);
      } else if (geoNode.Form === 'Periodic') {
        startKnot = degree;
        endKnot = knots.length - 1 - startKnot;

        for (var i = 0; i < degree; ++i) {
          controlPoints.push(controlPoints[i]);
        }
      }

      var curve = new _NURBSCurve_js__WEBPACK_IMPORTED_MODULE_3__["NURBSCurve"](degree, knots, controlPoints, startKnot, endKnot);
      var vertices = curve.getPoints(controlPoints.length * 7);
      var positions = new Float32Array(vertices.length * 3);
      vertices.forEach(function (vertex, i) {
        vertex.toArray(positions, i * 3);
      });
      var geometry = new three__WEBPACK_IMPORTED_MODULE_0__["BufferGeometry"]();
      geometry.addAttribute('position', new three__WEBPACK_IMPORTED_MODULE_0__["BufferAttribute"](positions, 3));
      return geometry;
    } // parse animation data from FBXTree

  };

  function AnimationParser() {}

  AnimationParser.prototype = {
    constructor: AnimationParser,
    // take raw animation clips and turn them into three.js animation clips
    parse: function parse() {
      var animationClips = [];
      var rawClips = this.parseClips();

      if (rawClips !== undefined) {
        for (var key in rawClips) {
          var rawClip = rawClips[key];
          var clip = this.addClip(rawClip);
          animationClips.push(clip);
        }
      }

      return animationClips;
    },
    parseClips: function parseClips() {
      // since the actual transformation data is stored in FBXTree.Objects.AnimationCurve,
      // if this is undefined we can safely assume there are no animations
      if (fbxTree.Objects.AnimationCurve === undefined) return undefined;
      var curveNodesMap = this.parseAnimationCurveNodes();
      this.parseAnimationCurves(curveNodesMap);
      var layersMap = this.parseAnimationLayers(curveNodesMap);
      var rawClips = this.parseAnimStacks(layersMap);
      return rawClips;
    },
    // parse nodes in FBXTree.Objects.AnimationCurveNode
    // each AnimationCurveNode holds data for an animation transform for a model (e.g. left arm rotation )
    // and is referenced by an AnimationLayer
    parseAnimationCurveNodes: function parseAnimationCurveNodes() {
      var rawCurveNodes = fbxTree.Objects.AnimationCurveNode;
      var curveNodesMap = new Map();

      for (var nodeID in rawCurveNodes) {
        var rawCurveNode = rawCurveNodes[nodeID];

        if (rawCurveNode.attrName.match(/S|R|T|DeformPercent/) !== null) {
          var curveNode = {
            id: rawCurveNode.id,
            attr: rawCurveNode.attrName,
            curves: {}
          };
          curveNodesMap.set(curveNode.id, curveNode);
        }
      }

      return curveNodesMap;
    },
    // parse nodes in FBXTree.Objects.AnimationCurve and connect them up to
    // previously parsed AnimationCurveNodes. Each AnimationCurve holds data for a single animated
    // axis ( e.g. times and values of x rotation)
    parseAnimationCurves: function parseAnimationCurves(curveNodesMap) {
      var rawCurves = fbxTree.Objects.AnimationCurve; // TODO: Many values are identical up to roundoff error, but won't be optimised
      // e.g. position times: [0, 0.4, 0. 8]
      // position values: [7.23538335023477e-7, 93.67518615722656, -0.9982695579528809, 7.23538335023477e-7, 93.67518615722656, -0.9982695579528809, 7.235384487103147e-7, 93.67520904541016, -0.9982695579528809]
      // clearly, this should be optimised to
      // times: [0], positions [7.23538335023477e-7, 93.67518615722656, -0.9982695579528809]
      // this shows up in nearly every FBX file, and generally time array is length > 100

      for (var nodeID in rawCurves) {
        var animationCurve = {
          id: rawCurves[nodeID].id,
          times: rawCurves[nodeID].KeyTime.a.map(convertFBXTimeToSeconds),
          values: rawCurves[nodeID].KeyValueFloat.a
        };
        var relationships = connections.get(animationCurve.id);

        if (relationships !== undefined) {
          var animationCurveID = relationships.parents[0].ID;
          var animationCurveRelationship = relationships.parents[0].relationship;

          if (animationCurveRelationship.match(/X/)) {
            curveNodesMap.get(animationCurveID).curves['x'] = animationCurve;
          } else if (animationCurveRelationship.match(/Y/)) {
            curveNodesMap.get(animationCurveID).curves['y'] = animationCurve;
          } else if (animationCurveRelationship.match(/Z/)) {
            curveNodesMap.get(animationCurveID).curves['z'] = animationCurve;
          } else if (animationCurveRelationship.match(/d|DeformPercent/) && curveNodesMap.has(animationCurveID)) {
            curveNodesMap.get(animationCurveID).curves['morph'] = animationCurve;
          }
        }
      }
    },
    // parse nodes in FBXTree.Objects.AnimationLayer. Each layers holds references
    // to various AnimationCurveNodes and is referenced by an AnimationStack node
    // note: theoretically a stack can have multiple layers, however in practice there always seems to be one per stack
    parseAnimationLayers: function parseAnimationLayers(curveNodesMap) {
      var rawLayers = fbxTree.Objects.AnimationLayer;
      var layersMap = new Map();

      for (var nodeID in rawLayers) {
        var layerCurveNodes = [];
        var connection = connections.get(parseInt(nodeID));

        if (connection !== undefined) {
          // all the animationCurveNodes used in the layer
          var children = connection.children;
          children.forEach(function (child, i) {
            if (curveNodesMap.has(child.ID)) {
              var curveNode = curveNodesMap.get(child.ID); // check that the curves are defined for at least one axis, otherwise ignore the curveNode

              if (curveNode.curves.x !== undefined || curveNode.curves.y !== undefined || curveNode.curves.z !== undefined) {
                if (layerCurveNodes[i] === undefined) {
                  var modelID = connections.get(child.ID).parents.filter(function (parent) {
                    return parent.relationship !== undefined;
                  })[0].ID;

                  if (modelID !== undefined) {
                    var rawModel = fbxTree.Objects.Model[modelID.toString()];
                    var node = {
                      modelName: three__WEBPACK_IMPORTED_MODULE_0__["PropertyBinding"].sanitizeNodeName(rawModel.attrName),
                      ID: rawModel.id,
                      initialPosition: [0, 0, 0],
                      initialRotation: [0, 0, 0],
                      initialScale: [1, 1, 1]
                    };
                    sceneGraph.traverse(function (child) {
                      if (child.ID === rawModel.id) {
                        node.transform = child.matrix;
                        if (child.userData.transformData) node.eulerOrder = child.userData.transformData.eulerOrder;
                      }
                    });
                    if (!node.transform) node.transform = new three__WEBPACK_IMPORTED_MODULE_0__["Matrix4"](); // if the animated model is pre rotated, we'll have to apply the pre rotations to every
                    // animation value as well

                    if ('PreRotation' in rawModel) node.preRotation = rawModel.PreRotation.value;
                    if ('PostRotation' in rawModel) node.postRotation = rawModel.PostRotation.value;
                    layerCurveNodes[i] = node;
                  }
                }

                if (layerCurveNodes[i]) layerCurveNodes[i][curveNode.attr] = curveNode;
              } else if (curveNode.curves.morph !== undefined) {
                if (layerCurveNodes[i] === undefined) {
                  var deformerID = connections.get(child.ID).parents.filter(function (parent) {
                    return parent.relationship !== undefined;
                  })[0].ID;
                  var morpherID = connections.get(deformerID).parents[0].ID;
                  var geoID = connections.get(morpherID).parents[0].ID; // assuming geometry is not used in more than one model

                  var modelID = connections.get(geoID).parents[0].ID;
                  var rawModel = fbxTree.Objects.Model[modelID];
                  var node = {
                    modelName: three__WEBPACK_IMPORTED_MODULE_0__["PropertyBinding"].sanitizeNodeName(rawModel.attrName),
                    morphName: fbxTree.Objects.Deformer[deformerID].attrName
                  };
                  layerCurveNodes[i] = node;
                }

                layerCurveNodes[i][curveNode.attr] = curveNode;
              }
            }
          });
          layersMap.set(parseInt(nodeID), layerCurveNodes);
        }
      }

      return layersMap;
    },
    // parse nodes in FBXTree.Objects.AnimationStack. These are the top level node in the animation
    // hierarchy. Each Stack node will be used to create a AnimationClip
    parseAnimStacks: function parseAnimStacks(layersMap) {
      var rawStacks = fbxTree.Objects.AnimationStack; // connect the stacks (clips) up to the layers

      var rawClips = {};

      for (var nodeID in rawStacks) {
        var children = connections.get(parseInt(nodeID)).children;

        if (children.length > 1) {
          // it seems like stacks will always be associated with a single layer. But just in case there are files
          // where there are multiple layers per stack, we'll display a warning
          console.warn('THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.');
        }

        var layer = layersMap.get(children[0].ID);
        rawClips[nodeID] = {
          name: rawStacks[nodeID].attrName,
          layer: layer
        };
      }

      return rawClips;
    },
    addClip: function addClip(rawClip) {
      var tracks = [];
      var self = this;
      rawClip.layer.forEach(function (rawTracks) {
        tracks = tracks.concat(self.generateTracks(rawTracks));
      });
      return new three__WEBPACK_IMPORTED_MODULE_0__["AnimationClip"](rawClip.name, -1, tracks);
    },
    generateTracks: function generateTracks(rawTracks) {
      var tracks = [];
      var initialPosition = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();
      var initialRotation = new three__WEBPACK_IMPORTED_MODULE_0__["Quaternion"]();
      var initialScale = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();
      if (rawTracks.transform) rawTracks.transform.decompose(initialPosition, initialRotation, initialScale);
      initialPosition = initialPosition.toArray();
      initialRotation = new three__WEBPACK_IMPORTED_MODULE_0__["Euler"]().setFromQuaternion(initialRotation, rawTracks.eulerOrder).toArray();
      initialScale = initialScale.toArray();

      if (rawTracks.T !== undefined && Object.keys(rawTracks.T.curves).length > 0) {
        var positionTrack = this.generateVectorTrack(rawTracks.modelName, rawTracks.T.curves, initialPosition, 'position');
        if (positionTrack !== undefined) tracks.push(positionTrack);
      }

      if (rawTracks.R !== undefined && Object.keys(rawTracks.R.curves).length > 0) {
        var rotationTrack = this.generateRotationTrack(rawTracks.modelName, rawTracks.R.curves, initialRotation, rawTracks.preRotation, rawTracks.postRotation, rawTracks.eulerOrder);
        if (rotationTrack !== undefined) tracks.push(rotationTrack);
      }

      if (rawTracks.S !== undefined && Object.keys(rawTracks.S.curves).length > 0) {
        var scaleTrack = this.generateVectorTrack(rawTracks.modelName, rawTracks.S.curves, initialScale, 'scale');
        if (scaleTrack !== undefined) tracks.push(scaleTrack);
      }

      if (rawTracks.DeformPercent !== undefined) {
        var morphTrack = this.generateMorphTrack(rawTracks);
        if (morphTrack !== undefined) tracks.push(morphTrack);
      }

      return tracks;
    },
    generateVectorTrack: function generateVectorTrack(modelName, curves, initialValue, type) {
      var times = this.getTimesForAllAxes(curves);
      var values = this.getKeyframeTrackValues(times, curves, initialValue);
      return new three__WEBPACK_IMPORTED_MODULE_0__["VectorKeyframeTrack"](modelName + '.' + type, times, values);
    },
    generateRotationTrack: function generateRotationTrack(modelName, curves, initialValue, preRotation, postRotation, eulerOrder) {
      if (curves.x !== undefined) {
        this.interpolateRotations(curves.x);
        curves.x.values = curves.x.values.map(three__WEBPACK_IMPORTED_MODULE_0__["Math"].degToRad);
      }

      if (curves.y !== undefined) {
        this.interpolateRotations(curves.y);
        curves.y.values = curves.y.values.map(three__WEBPACK_IMPORTED_MODULE_0__["Math"].degToRad);
      }

      if (curves.z !== undefined) {
        this.interpolateRotations(curves.z);
        curves.z.values = curves.z.values.map(three__WEBPACK_IMPORTED_MODULE_0__["Math"].degToRad);
      }

      var times = this.getTimesForAllAxes(curves);
      var values = this.getKeyframeTrackValues(times, curves, initialValue);

      if (preRotation !== undefined) {
        preRotation = preRotation.map(three__WEBPACK_IMPORTED_MODULE_0__["Math"].degToRad);
        preRotation.push(eulerOrder);
        preRotation = new three__WEBPACK_IMPORTED_MODULE_0__["Euler"]().fromArray(preRotation);
        preRotation = new three__WEBPACK_IMPORTED_MODULE_0__["Quaternion"]().setFromEuler(preRotation);
      }

      if (postRotation !== undefined) {
        postRotation = postRotation.map(three__WEBPACK_IMPORTED_MODULE_0__["Math"].degToRad);
        postRotation.push(eulerOrder);
        postRotation = new three__WEBPACK_IMPORTED_MODULE_0__["Euler"]().fromArray(postRotation);
        postRotation = new three__WEBPACK_IMPORTED_MODULE_0__["Quaternion"]().setFromEuler(postRotation).inverse();
      }

      var quaternion = new three__WEBPACK_IMPORTED_MODULE_0__["Quaternion"]();
      var euler = new three__WEBPACK_IMPORTED_MODULE_0__["Euler"]();
      var quaternionValues = [];

      for (var i = 0; i < values.length; i += 3) {
        euler.set(values[i], values[i + 1], values[i + 2], eulerOrder);
        quaternion.setFromEuler(euler);
        if (preRotation !== undefined) quaternion.premultiply(preRotation);
        if (postRotation !== undefined) quaternion.multiply(postRotation);
        quaternion.toArray(quaternionValues, i / 3 * 4);
      }

      return new three__WEBPACK_IMPORTED_MODULE_0__["QuaternionKeyframeTrack"](modelName + '.quaternion', times, quaternionValues);
    },
    generateMorphTrack: function generateMorphTrack(rawTracks) {
      var curves = rawTracks.DeformPercent.curves.morph;
      var values = curves.values.map(function (val) {
        return val / 100;
      });
      var morphNum = sceneGraph.getObjectByName(rawTracks.modelName).morphTargetDictionary[rawTracks.morphName];
      return new three__WEBPACK_IMPORTED_MODULE_0__["NumberKeyframeTrack"](rawTracks.modelName + '.morphTargetInfluences[' + morphNum + ']', curves.times, values);
    },
    // For all animated objects, times are defined separately for each axis
    // Here we'll combine the times into one sorted array without duplicates
    getTimesForAllAxes: function getTimesForAllAxes(curves) {
      var times = []; // first join together the times for each axis, if defined

      if (curves.x !== undefined) times = times.concat(curves.x.times);
      if (curves.y !== undefined) times = times.concat(curves.y.times);
      if (curves.z !== undefined) times = times.concat(curves.z.times); // then sort them and remove duplicates

      times = times.sort(function (a, b) {
        return a - b;
      }).filter(function (elem, index, array) {
        return array.indexOf(elem) == index;
      });
      return times;
    },
    getKeyframeTrackValues: function getKeyframeTrackValues(times, curves, initialValue) {
      var prevValue = initialValue;
      var values = [];
      var xIndex = -1;
      var yIndex = -1;
      var zIndex = -1;
      times.forEach(function (time) {
        if (curves.x) xIndex = curves.x.times.indexOf(time);
        if (curves.y) yIndex = curves.y.times.indexOf(time);
        if (curves.z) zIndex = curves.z.times.indexOf(time); // if there is an x value defined for this frame, use that

        if (xIndex !== -1) {
          var xValue = curves.x.values[xIndex];
          values.push(xValue);
          prevValue[0] = xValue;
        } else {
          // otherwise use the x value from the previous frame
          values.push(prevValue[0]);
        }

        if (yIndex !== -1) {
          var yValue = curves.y.values[yIndex];
          values.push(yValue);
          prevValue[1] = yValue;
        } else {
          values.push(prevValue[1]);
        }

        if (zIndex !== -1) {
          var zValue = curves.z.values[zIndex];
          values.push(zValue);
          prevValue[2] = zValue;
        } else {
          values.push(prevValue[2]);
        }
      });
      return values;
    },
    // Rotations are defined as Euler angles which can have values  of any size
    // These will be converted to quaternions which don't support values greater than
    // PI, so we'll interpolate large rotations
    interpolateRotations: function interpolateRotations(curve) {
      for (var i = 1; i < curve.values.length; i++) {
        var initialValue = curve.values[i - 1];
        var valuesSpan = curve.values[i] - initialValue;
        var absoluteSpan = Math.abs(valuesSpan);

        if (absoluteSpan >= 180) {
          var numSubIntervals = absoluteSpan / 180;
          var step = valuesSpan / numSubIntervals;
          var nextValue = initialValue + step;
          var initialTime = curve.times[i - 1];
          var timeSpan = curve.times[i] - initialTime;
          var interval = timeSpan / numSubIntervals;
          var nextTime = initialTime + interval;
          var interpolatedTimes = [];
          var interpolatedValues = [];

          while (nextTime < curve.times[i]) {
            interpolatedTimes.push(nextTime);
            nextTime += interval;
            interpolatedValues.push(nextValue);
            nextValue += step;
          }

          curve.times = inject(curve.times, i, interpolatedTimes);
          curve.values = inject(curve.values, i, interpolatedValues);
        }
      }
    } // parse an FBX file in ASCII format

  };

  function TextParser() {}

  TextParser.prototype = {
    constructor: TextParser,
    getPrevNode: function getPrevNode() {
      return this.nodeStack[this.currentIndent - 2];
    },
    getCurrentNode: function getCurrentNode() {
      return this.nodeStack[this.currentIndent - 1];
    },
    getCurrentProp: function getCurrentProp() {
      return this.currentProp;
    },
    pushStack: function pushStack(node) {
      this.nodeStack.push(node);
      this.currentIndent += 1;
    },
    popStack: function popStack() {
      this.nodeStack.pop();
      this.currentIndent -= 1;
    },
    setCurrentProp: function setCurrentProp(val, name) {
      this.currentProp = val;
      this.currentPropName = name;
    },
    parse: function parse(text) {
      this.currentIndent = 0;
      this.allNodes = new FBXTree();
      this.nodeStack = [];
      this.currentProp = [];
      this.currentPropName = '';
      var self = this;
      var split = text.split(/[\r\n]+/);
      split.forEach(function (line, i) {
        var matchComment = line.match(/^[\s\t]*;/);
        var matchEmpty = line.match(/^[\s\t]*$/);
        if (matchComment || matchEmpty) return;
        var matchBeginning = line.match('^\\t{' + self.currentIndent + '}(\\w+):(.*){', '');
        var matchProperty = line.match('^\\t{' + self.currentIndent + '}(\\w+):[\\s\\t\\r\\n](.*)');
        var matchEnd = line.match('^\\t{' + (self.currentIndent - 1) + '}}');

        if (matchBeginning) {
          self.parseNodeBegin(line, matchBeginning);
        } else if (matchProperty) {
          self.parseNodeProperty(line, matchProperty, split[++i]);
        } else if (matchEnd) {
          self.popStack();
        } else if (line.match(/^[^\s\t}]/)) {
          // large arrays are split over multiple lines terminated with a ',' character
          // if this is encountered the line needs to be joined to the previous line
          self.parseNodePropertyContinued(line);
        }
      });
      return this.allNodes;
    },
    parseNodeBegin: function parseNodeBegin(line, property) {
      var nodeName = property[1].trim().replace(/^"/, '').replace(/"$/, '');
      var nodeAttrs = property[2].split(',').map(function (attr) {
        return attr.trim().replace(/^"/, '').replace(/"$/, '');
      });
      var node = {
        name: nodeName
      };
      var attrs = this.parseNodeAttr(nodeAttrs);
      var currentNode = this.getCurrentNode(); // a top node

      if (this.currentIndent === 0) {
        this.allNodes.add(nodeName, node);
      } else {
        // a subnode
        // if the subnode already exists, append it
        if (nodeName in currentNode) {
          // special case Pose needs PoseNodes as an array
          if (nodeName === 'PoseNode') {
            currentNode.PoseNode.push(node);
          } else if (currentNode[nodeName].id !== undefined) {
            currentNode[nodeName] = {};
            currentNode[nodeName][currentNode[nodeName].id] = currentNode[nodeName];
          }

          if (attrs.id !== '') currentNode[nodeName][attrs.id] = node;
        } else if (typeof attrs.id === 'number') {
          currentNode[nodeName] = {};
          currentNode[nodeName][attrs.id] = node;
        } else if (nodeName !== 'Properties70') {
          if (nodeName === 'PoseNode') currentNode[nodeName] = [node];else currentNode[nodeName] = node;
        }
      }

      if (typeof attrs.id === 'number') node.id = attrs.id;
      if (attrs.name !== '') node.attrName = attrs.name;
      if (attrs.type !== '') node.attrType = attrs.type;
      this.pushStack(node);
    },
    parseNodeAttr: function parseNodeAttr(attrs) {
      var id = attrs[0];

      if (attrs[0] !== '') {
        id = parseInt(attrs[0]);

        if (isNaN(id)) {
          id = attrs[0];
        }
      }

      var name = '',
          type = '';

      if (attrs.length > 1) {
        name = attrs[1].replace(/^(\w+)::/, '');
        type = attrs[2];
      }

      return {
        id: id,
        name: name,
        type: type
      };
    },
    parseNodeProperty: function parseNodeProperty(line, property, contentLine) {
      var propName = property[1].replace(/^"/, '').replace(/"$/, '').trim();
      var propValue = property[2].replace(/^"/, '').replace(/"$/, '').trim(); // for special case: base64 image data follows "Content: ," line
      //	Content: ,
      //	 "/9j/4RDaRXhpZgAATU0A..."

      if (propName === 'Content' && propValue === ',') {
        propValue = contentLine.replace(/"/g, '').replace(/,$/, '').trim();
      }

      var currentNode = this.getCurrentNode();
      var parentName = currentNode.name;

      if (parentName === 'Properties70') {
        this.parseNodeSpecialProperty(line, propName, propValue);
        return;
      } // Connections


      if (propName === 'C') {
        var connProps = propValue.split(',').slice(1);
        var from = parseInt(connProps[0]);
        var to = parseInt(connProps[1]);
        var rest = propValue.split(',').slice(3);
        rest = rest.map(function (elem) {
          return elem.trim().replace(/^"/, '');
        });
        propName = 'connections';
        propValue = [from, to];
        append(propValue, rest);

        if (currentNode[propName] === undefined) {
          currentNode[propName] = [];
        }
      } // Node


      if (propName === 'Node') currentNode.id = propValue; // connections

      if (propName in currentNode && Array.isArray(currentNode[propName])) {
        currentNode[propName].push(propValue);
      } else {
        if (propName !== 'a') currentNode[propName] = propValue;else currentNode.a = propValue;
      }

      this.setCurrentProp(currentNode, propName); // convert string to array, unless it ends in ',' in which case more will be added to it

      if (propName === 'a' && propValue.slice(-1) !== ',') {
        currentNode.a = parseNumberArray(propValue);
      }
    },
    parseNodePropertyContinued: function parseNodePropertyContinued(line) {
      var currentNode = this.getCurrentNode();
      currentNode.a += line; // if the line doesn't end in ',' we have reached the end of the property value
      // so convert the string to an array

      if (line.slice(-1) !== ',') {
        currentNode.a = parseNumberArray(currentNode.a);
      }
    },
    // parse "Property70"
    parseNodeSpecialProperty: function parseNodeSpecialProperty(line, propName, propValue) {
      // split this
      // P: "Lcl Scaling", "Lcl Scaling", "", "A",1,1,1
      // into array like below
      // ["Lcl Scaling", "Lcl Scaling", "", "A", "1,1,1" ]
      var props = propValue.split('",').map(function (prop) {
        return prop.trim().replace(/^\"/, '').replace(/\s/, '_');
      });
      var innerPropName = props[0];
      var innerPropType1 = props[1];
      var innerPropType2 = props[2];
      var innerPropFlag = props[3];
      var innerPropValue = props[4]; // cast values where needed, otherwise leave as strings

      switch (innerPropType1) {
        case 'int':
        case 'enum':
        case 'bool':
        case 'ULongLong':
        case 'double':
        case 'Number':
        case 'FieldOfView':
          innerPropValue = parseFloat(innerPropValue);
          break;

        case 'Color':
        case 'ColorRGB':
        case 'Vector3D':
        case 'Lcl_Translation':
        case 'Lcl_Rotation':
        case 'Lcl_Scaling':
          innerPropValue = parseNumberArray(innerPropValue);
          break;
      } // CAUTION: these props must append to parent's parent


      this.getPrevNode()[innerPropName] = {
        type: innerPropType1,
        type2: innerPropType2,
        flag: innerPropFlag,
        value: innerPropValue
      };
      this.setCurrentProp(this.getPrevNode(), innerPropName);
    } // Parse an FBX file in Binary format

  };

  function BinaryParser() {}

  BinaryParser.prototype = {
    constructor: BinaryParser,
    parse: function parse(buffer) {
      var reader = new BinaryReader(buffer);
      reader.skip(23); // skip magic 23 bytes

      var version = reader.getUint32();
      console.log('THREE.FBXLoader: FBX binary version: ' + version);
      var allNodes = new FBXTree();

      while (!this.endOfContent(reader)) {
        var node = this.parseNode(reader, version);
        if (node !== null) allNodes.add(node.name, node);
      }

      return allNodes;
    },
    // Check if reader has reached the end of content.
    endOfContent: function endOfContent(reader) {
      // footer size: 160bytes + 16-byte alignment padding
      // - 16bytes: magic
      // - padding til 16-byte alignment (at least 1byte?)
      //	(seems like some exporters embed fixed 15 or 16bytes?)
      // - 4bytes: magic
      // - 4bytes: version
      // - 120bytes: zero
      // - 16bytes: magic
      if (reader.size() % 16 === 0) {
        return (reader.getOffset() + 160 + 16 & ~0xf) >= reader.size();
      } else {
        return reader.getOffset() + 160 + 16 >= reader.size();
      }
    },
    // recursively parse nodes until the end of the file is reached
    parseNode: function parseNode(reader, version) {
      var node = {}; // The first three data sizes depends on version.

      var endOffset = version >= 7500 ? reader.getUint64() : reader.getUint32();
      var numProperties = version >= 7500 ? reader.getUint64() : reader.getUint32(); // note: do not remove this even if you get a linter warning as it moves the buffer forward

      var propertyListLen = version >= 7500 ? reader.getUint64() : reader.getUint32();
      var nameLen = reader.getUint8();
      var name = reader.getString(nameLen); // Regards this node as NULL-record if endOffset is zero

      if (endOffset === 0) return null;
      var propertyList = [];

      for (var i = 0; i < numProperties; i++) {
        propertyList.push(this.parseProperty(reader));
      } // Regards the first three elements in propertyList as id, attrName, and attrType


      var id = propertyList.length > 0 ? propertyList[0] : '';
      var attrName = propertyList.length > 1 ? propertyList[1] : '';
      var attrType = propertyList.length > 2 ? propertyList[2] : ''; // check if this node represents just a single property
      // like (name, 0) set or (name2, [0, 1, 2]) set of {name: 0, name2: [0, 1, 2]}

      node.singleProperty = numProperties === 1 && reader.getOffset() === endOffset ? true : false;

      while (endOffset > reader.getOffset()) {
        var subNode = this.parseNode(reader, version);
        if (subNode !== null) this.parseSubNode(name, node, subNode);
      }

      node.propertyList = propertyList; // raw property list used by parent

      if (typeof id === 'number') node.id = id;
      if (attrName !== '') node.attrName = attrName;
      if (attrType !== '') node.attrType = attrType;
      if (name !== '') node.name = name;
      return node;
    },
    parseSubNode: function parseSubNode(name, node, subNode) {
      // special case: child node is single property
      if (subNode.singleProperty === true) {
        var value = subNode.propertyList[0];

        if (Array.isArray(value)) {
          node[subNode.name] = subNode;
          subNode.a = value;
        } else {
          node[subNode.name] = value;
        }
      } else if (name === 'Connections' && subNode.name === 'C') {
        var array = [];
        subNode.propertyList.forEach(function (property, i) {
          // first Connection is FBX type (OO, OP, etc.). We'll discard these
          if (i !== 0) array.push(property);
        });

        if (node.connections === undefined) {
          node.connections = [];
        }

        node.connections.push(array);
      } else if (subNode.name === 'Properties70') {
        var keys = Object.keys(subNode);
        keys.forEach(function (key) {
          node[key] = subNode[key];
        });
      } else if (name === 'Properties70' && subNode.name === 'P') {
        var innerPropName = subNode.propertyList[0];
        var innerPropType1 = subNode.propertyList[1];
        var innerPropType2 = subNode.propertyList[2];
        var innerPropFlag = subNode.propertyList[3];
        var innerPropValue;
        if (innerPropName.indexOf('Lcl ') === 0) innerPropName = innerPropName.replace('Lcl ', 'Lcl_');
        if (innerPropType1.indexOf('Lcl ') === 0) innerPropType1 = innerPropType1.replace('Lcl ', 'Lcl_');

        if (innerPropType1 === 'Color' || innerPropType1 === 'ColorRGB' || innerPropType1 === 'Vector' || innerPropType1 === 'Vector3D' || innerPropType1.indexOf('Lcl_') === 0) {
          innerPropValue = [subNode.propertyList[4], subNode.propertyList[5], subNode.propertyList[6]];
        } else {
          innerPropValue = subNode.propertyList[4];
        } // this will be copied to parent, see above


        node[innerPropName] = {
          type: innerPropType1,
          type2: innerPropType2,
          flag: innerPropFlag,
          value: innerPropValue
        };
      } else if (node[subNode.name] === undefined) {
        if (typeof subNode.id === 'number') {
          node[subNode.name] = {};
          node[subNode.name][subNode.id] = subNode;
        } else {
          node[subNode.name] = subNode;
        }
      } else {
        if (subNode.name === 'PoseNode') {
          if (!Array.isArray(node[subNode.name])) {
            node[subNode.name] = [node[subNode.name]];
          }

          node[subNode.name].push(subNode);
        } else if (node[subNode.name][subNode.id] === undefined) {
          node[subNode.name][subNode.id] = subNode;
        }
      }
    },
    parseProperty: function parseProperty(reader) {
      var type = reader.getString(1);

      switch (type) {
        case 'C':
          return reader.getBoolean();

        case 'D':
          return reader.getFloat64();

        case 'F':
          return reader.getFloat32();

        case 'I':
          return reader.getInt32();

        case 'L':
          return reader.getInt64();

        case 'R':
          var length = reader.getUint32();
          return reader.getArrayBuffer(length);

        case 'S':
          var length = reader.getUint32();
          return reader.getString(length);

        case 'Y':
          return reader.getInt16();

        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'i':
        case 'l':
          var arrayLength = reader.getUint32();
          var encoding = reader.getUint32(); // 0: non-compressed, 1: compressed

          var compressedLength = reader.getUint32();

          if (encoding === 0) {
            switch (type) {
              case 'b':
              case 'c':
                return reader.getBooleanArray(arrayLength);

              case 'd':
                return reader.getFloat64Array(arrayLength);

              case 'f':
                return reader.getFloat32Array(arrayLength);

              case 'i':
                return reader.getInt32Array(arrayLength);

              case 'l':
                return reader.getInt64Array(arrayLength);
            }
          }

          if (typeof _inflate_module_min_js__WEBPACK_IMPORTED_MODULE_1__["Zlib"] === 'undefined') {
            console.error('THREE.FBXLoader: External library Inflate.min.js required, obtain or import from https://github.com/imaya/zlib.js');
          }

          var inflate = new _inflate_module_min_js__WEBPACK_IMPORTED_MODULE_1__["Zlib"].Inflate(new Uint8Array(reader.getArrayBuffer(compressedLength))); // eslint-disable-line no-undef

          var reader2 = new BinaryReader(inflate.decompress().buffer);

          switch (type) {
            case 'b':
            case 'c':
              return reader2.getBooleanArray(arrayLength);

            case 'd':
              return reader2.getFloat64Array(arrayLength);

            case 'f':
              return reader2.getFloat32Array(arrayLength);

            case 'i':
              return reader2.getInt32Array(arrayLength);

            case 'l':
              return reader2.getInt64Array(arrayLength);
          }

        default:
          throw new Error('THREE.FBXLoader: Unknown property type ' + type);
      }
    }
  };

  function BinaryReader(buffer, littleEndian) {
    this.dv = new DataView(buffer);
    this.offset = 0;
    this.littleEndian = littleEndian !== undefined ? littleEndian : true;
  }

  BinaryReader.prototype = {
    constructor: BinaryReader,
    getOffset: function getOffset() {
      return this.offset;
    },
    size: function size() {
      return this.dv.buffer.byteLength;
    },
    skip: function skip(length) {
      this.offset += length;
    },
    // seems like true/false representation depends on exporter.
    // true: 1 or 'Y'(=0x59), false: 0 or 'T'(=0x54)
    // then sees LSB.
    getBoolean: function getBoolean() {
      return (this.getUint8() & 1) === 1;
    },
    getBooleanArray: function getBooleanArray(size) {
      var a = [];

      for (var i = 0; i < size; i++) {
        a.push(this.getBoolean());
      }

      return a;
    },
    getUint8: function getUint8() {
      var value = this.dv.getUint8(this.offset);
      this.offset += 1;
      return value;
    },
    getInt16: function getInt16() {
      var value = this.dv.getInt16(this.offset, this.littleEndian);
      this.offset += 2;
      return value;
    },
    getInt32: function getInt32() {
      var value = this.dv.getInt32(this.offset, this.littleEndian);
      this.offset += 4;
      return value;
    },
    getInt32Array: function getInt32Array(size) {
      var a = [];

      for (var i = 0; i < size; i++) {
        a.push(this.getInt32());
      }

      return a;
    },
    getUint32: function getUint32() {
      var value = this.dv.getUint32(this.offset, this.littleEndian);
      this.offset += 4;
      return value;
    },
    // JavaScript doesn't support 64-bit integer so calculate this here
    // 1 << 32 will return 1 so using multiply operation instead here.
    // There's a possibility that this method returns wrong value if the value
    // is out of the range between Number.MAX_SAFE_INTEGER and Number.MIN_SAFE_INTEGER.
    // TODO: safely handle 64-bit integer
    getInt64: function getInt64() {
      var low, high;

      if (this.littleEndian) {
        low = this.getUint32();
        high = this.getUint32();
      } else {
        high = this.getUint32();
        low = this.getUint32();
      } // calculate negative value


      if (high & 0x80000000) {
        high = ~high & 0xffffffff;
        low = ~low & 0xffffffff;
        if (low === 0xffffffff) high = high + 1 & 0xffffffff;
        low = low + 1 & 0xffffffff;
        return -(high * 0x100000000 + low);
      }

      return high * 0x100000000 + low;
    },
    getInt64Array: function getInt64Array(size) {
      var a = [];

      for (var i = 0; i < size; i++) {
        a.push(this.getInt64());
      }

      return a;
    },
    // Note: see getInt64() comment
    getUint64: function getUint64() {
      var low, high;

      if (this.littleEndian) {
        low = this.getUint32();
        high = this.getUint32();
      } else {
        high = this.getUint32();
        low = this.getUint32();
      }

      return high * 0x100000000 + low;
    },
    getFloat32: function getFloat32() {
      var value = this.dv.getFloat32(this.offset, this.littleEndian);
      this.offset += 4;
      return value;
    },
    getFloat32Array: function getFloat32Array(size) {
      var a = [];

      for (var i = 0; i < size; i++) {
        a.push(this.getFloat32());
      }

      return a;
    },
    getFloat64: function getFloat64() {
      var value = this.dv.getFloat64(this.offset, this.littleEndian);
      this.offset += 8;
      return value;
    },
    getFloat64Array: function getFloat64Array(size) {
      var a = [];

      for (var i = 0; i < size; i++) {
        a.push(this.getFloat64());
      }

      return a;
    },
    getArrayBuffer: function getArrayBuffer(size) {
      var value = this.dv.buffer.slice(this.offset, this.offset + size);
      this.offset += size;
      return value;
    },
    getString: function getString(size) {
      // note: safari 9 doesn't support Uint8Array.indexOf; create intermediate array instead
      var a = [];

      for (var i = 0; i < size; i++) {
        a[i] = this.getUint8();
      }

      var nullByte = a.indexOf(0);
      if (nullByte >= 0) a = a.slice(0, nullByte);
      return three__WEBPACK_IMPORTED_MODULE_0__["LoaderUtils"].decodeText(new Uint8Array(a));
    } // FBXTree holds a representation of the FBX data, returned by the TextParser ( FBX ASCII format)
    // and BinaryParser( FBX Binary format)

  };

  function FBXTree() {}

  FBXTree.prototype = {
    constructor: FBXTree,
    add: function add(key, val) {
      this[key] = val;
    } // ************** UTILITY FUNCTIONS **************

  };

  function isFbxFormatBinary(buffer) {
    var CORRECT = 'Kaydara FBX Binary  \0';
    return buffer.byteLength >= CORRECT.length && CORRECT === convertArrayBufferToString(buffer, 0, CORRECT.length);
  }

  function isFbxFormatASCII(text) {
    var CORRECT = ['K', 'a', 'y', 'd', 'a', 'r', 'a', '\\', 'F', 'B', 'X', '\\', 'B', 'i', 'n', 'a', 'r', 'y', '\\', '\\'];
    var cursor = 0;

    function read(offset) {
      var result = text[offset - 1];
      text = text.slice(cursor + offset);
      cursor++;
      return result;
    }

    for (var i = 0; i < CORRECT.length; ++i) {
      var num = read(1);

      if (num === CORRECT[i]) {
        return false;
      }
    }

    return true;
  }

  function getFbxVersion(text) {
    var versionRegExp = /FBXVersion: (\d+)/;
    var match = text.match(versionRegExp);

    if (match) {
      var version = parseInt(match[1]);
      return version;
    }

    throw new Error('THREE.FBXLoader: Cannot find the version number for the file given.');
  } // Converts FBX ticks into real time seconds.


  function convertFBXTimeToSeconds(time) {
    return time / 46186158000;
  }

  var dataArray = []; // extracts the data from the correct position in the FBX array based on indexing type

  function getData(polygonVertexIndex, polygonIndex, vertexIndex, infoObject) {
    var index;

    switch (infoObject.mappingType) {
      case 'ByPolygonVertex':
        index = polygonVertexIndex;
        break;

      case 'ByPolygon':
        index = polygonIndex;
        break;

      case 'ByVertice':
        index = vertexIndex;
        break;

      case 'AllSame':
        index = infoObject.indices[0];
        break;

      default:
        console.warn('THREE.FBXLoader: unknown attribute mapping type ' + infoObject.mappingType);
    }

    if (infoObject.referenceType === 'IndexToDirect') index = infoObject.indices[index];
    var from = index * infoObject.dataSize;
    var to = from + infoObject.dataSize;
    return slice(dataArray, infoObject.buffer, from, to);
  }

  var tempEuler = new three__WEBPACK_IMPORTED_MODULE_0__["Euler"]();
  var tempVec = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](); // generate transformation from FBX transform data
  // ref: https://help.autodesk.com/view/FBX/2017/ENU/?guid=__files_GUID_10CDD63C_79C1_4F2D_BB28_AD2BE65A02ED_htm
  // ref: http://docs.autodesk.com/FBX/2014/ENU/FBX-SDK-Documentation/index.html?url=cpp_ref/_transformations_2main_8cxx-example.html,topicNumber=cpp_ref__transformations_2main_8cxx_example_htmlfc10a1e1-b18d-4e72-9dc0-70d0f1959f5e

  function generateTransform(transformData) {
    var lTranslationM = new three__WEBPACK_IMPORTED_MODULE_0__["Matrix4"]();
    var lPreRotationM = new three__WEBPACK_IMPORTED_MODULE_0__["Matrix4"]();
    var lRotationM = new three__WEBPACK_IMPORTED_MODULE_0__["Matrix4"]();
    var lPostRotationM = new three__WEBPACK_IMPORTED_MODULE_0__["Matrix4"]();
    var lScalingM = new three__WEBPACK_IMPORTED_MODULE_0__["Matrix4"]();
    var lScalingPivotM = new three__WEBPACK_IMPORTED_MODULE_0__["Matrix4"]();
    var lScalingOffsetM = new three__WEBPACK_IMPORTED_MODULE_0__["Matrix4"]();
    var lRotationOffsetM = new three__WEBPACK_IMPORTED_MODULE_0__["Matrix4"]();
    var lRotationPivotM = new three__WEBPACK_IMPORTED_MODULE_0__["Matrix4"]();
    var lParentGX = new three__WEBPACK_IMPORTED_MODULE_0__["Matrix4"]();
    var lGlobalT = new three__WEBPACK_IMPORTED_MODULE_0__["Matrix4"]();
    var inheritType = transformData.inheritType ? transformData.inheritType : 0;
    if (transformData.translation) lTranslationM.setPosition(tempVec.fromArray(transformData.translation));

    if (transformData.preRotation) {
      var array = transformData.preRotation.map(three__WEBPACK_IMPORTED_MODULE_0__["Math"].degToRad);
      array.push(transformData.eulerOrder);
      lPreRotationM.makeRotationFromEuler(tempEuler.fromArray(array));
    }

    if (transformData.rotation) {
      var array = transformData.rotation.map(three__WEBPACK_IMPORTED_MODULE_0__["Math"].degToRad);
      array.push(transformData.eulerOrder);
      lRotationM.makeRotationFromEuler(tempEuler.fromArray(array));
    }

    if (transformData.postRotation) {
      var array = transformData.postRotation.map(three__WEBPACK_IMPORTED_MODULE_0__["Math"].degToRad);
      array.push(transformData.eulerOrder);
      lPostRotationM.makeRotationFromEuler(tempEuler.fromArray(array));
    }

    if (transformData.scale) lScalingM.scale(tempVec.fromArray(transformData.scale)); // Pivots and offsets

    if (transformData.scalingOffset) lScalingOffsetM.setPosition(tempVec.fromArray(transformData.scalingOffset));
    if (transformData.scalingPivot) lScalingPivotM.setPosition(tempVec.fromArray(transformData.scalingPivot));
    if (transformData.rotationOffset) lRotationOffsetM.setPosition(tempVec.fromArray(transformData.rotationOffset));
    if (transformData.rotationPivot) lRotationPivotM.setPosition(tempVec.fromArray(transformData.rotationPivot)); // parent transform

    if (transformData.parentMatrixWorld) lParentGX = transformData.parentMatrixWorld; // Global Rotation

    var lLRM = lPreRotationM.multiply(lRotationM).multiply(lPostRotationM);
    var lParentGRM = new three__WEBPACK_IMPORTED_MODULE_0__["Matrix4"]();
    lParentGX.extractRotation(lParentGRM); // Global Shear*Scaling

    var lParentTM = new three__WEBPACK_IMPORTED_MODULE_0__["Matrix4"]();
    var lLSM;
    var lParentGSM;
    var lParentGRSM;
    lParentTM.copyPosition(lParentGX);
    lParentGRSM = lParentTM.getInverse(lParentTM).multiply(lParentGX);
    lParentGSM = lParentGRM.getInverse(lParentGRM).multiply(lParentGRSM);
    lLSM = lScalingM;
    var lGlobalRS;

    if (inheritType === 0) {
      lGlobalRS = lParentGRM.multiply(lLRM).multiply(lParentGSM).multiply(lLSM);
    } else if (inheritType === 1) {
      lGlobalRS = lParentGRM.multiply(lParentGSM).multiply(lLRM).multiply(lLSM);
    } else {
      var lParentLSM = new three__WEBPACK_IMPORTED_MODULE_0__["Matrix4"]().copy(lScalingM);
      var lParentGSM_noLocal = lParentGSM.multiply(lParentLSM.getInverse(lParentLSM));
      lGlobalRS = lParentGRM.multiply(lLRM).multiply(lParentGSM_noLocal).multiply(lLSM);
    } // Calculate the local transform matrix


    var lTransform = lTranslationM.multiply(lRotationOffsetM).multiply(lRotationPivotM).multiply(lPreRotationM).multiply(lRotationM).multiply(lPostRotationM).multiply(lRotationPivotM.getInverse(lRotationPivotM)).multiply(lScalingOffsetM).multiply(lScalingPivotM).multiply(lScalingM).multiply(lScalingPivotM.getInverse(lScalingPivotM));
    var lLocalTWithAllPivotAndOffsetInfo = new three__WEBPACK_IMPORTED_MODULE_0__["Matrix4"]().copyPosition(lTransform);
    var lGlobalTranslation = lParentGX.multiply(lLocalTWithAllPivotAndOffsetInfo);
    lGlobalT.copyPosition(lGlobalTranslation);
    lTransform = lGlobalT.multiply(lGlobalRS);
    return lTransform;
  } // Returns the three.js intrinsic Euler order corresponding to FBX extrinsic Euler order
  // ref: http://help.autodesk.com/view/FBX/2017/ENU/?guid=__cpp_ref_class_fbx_euler_html


  function getEulerOrder(order) {
    order = order || 0;
    var enums = ['ZYX', // -> XYZ extrinsic
    'YZX', // -> XZY extrinsic
    'XZY', // -> YZX extrinsic
    'ZXY', // -> YXZ extrinsic
    'YXZ', // -> ZXY extrinsic
    'XYZ' // -> ZYX extrinsic
    //'SphericXYZ', // not possible to support
    ];

    if (order === 6) {
      console.warn('THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect.');
      return enums[0];
    }

    return enums[order];
  } // Parses comma separated list of numbers and returns them an array.
  // Used internally by the TextParser


  function parseNumberArray(value) {
    var array = value.split(',').map(function (val) {
      return parseFloat(val);
    });
    return array;
  }

  function convertArrayBufferToString(buffer, from, to) {
    if (from === undefined) from = 0;
    if (to === undefined) to = buffer.byteLength;
    return three__WEBPACK_IMPORTED_MODULE_0__["LoaderUtils"].decodeText(new Uint8Array(buffer, from, to));
  }

  function append(a, b) {
    for (var i = 0, j = a.length, l = b.length; i < l; i++, j++) {
      a[j] = b[i];
    }
  }

  function slice(a, b, from, to) {
    for (var i = from, j = 0; i < to; i++, j++) {
      a[j] = b[i];
    }

    return a;
  } // inject array a2 into array a1 at index


  function inject(a1, index, a2) {
    return a1.slice(0, index).concat(a2).concat(a1.slice(index));
  }

  return FBXLoader;
}();



/***/ }),

/***/ "./src/loaders/fbx/NURBSCurve.js":
/*!***************************************!*\
  !*** ./src/loaders/fbx/NURBSCurve.js ***!
  \***************************************/
/*! exports provided: NURBSCurve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NURBSCurve", function() { return NURBSCurve; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _NURBSUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NURBSUtils.js */ "./src/loaders/fbx/NURBSUtils.js");
/**
 * @author renej
 * NURBS curve object
 *
 * Derives from Curve, overriding getPoint and getTangent.
 *
 * Implementation is based on (x, y [, z=0 [, w=1]]) control points with w=weight.
 *
 **/


/**************************************************************
 *	NURBS curve
 **************************************************************/

var NURBSCurve = function NURBSCurve(degree, knots
/* array of reals */
, controlPoints
/* array of Vector(2|3|4) */
, startKnot
/* index in knots */
, endKnot
/* index in knots */
) {
  three__WEBPACK_IMPORTED_MODULE_0__["Curve"].call(this);
  this.degree = degree;
  this.knots = knots;
  this.controlPoints = []; // Used by periodic NURBS to remove hidden spans

  this.startKnot = startKnot || 0;
  this.endKnot = endKnot || this.knots.length - 1;

  for (var i = 0; i < controlPoints.length; ++i) {
    // ensure Vector4 for control points
    var point = controlPoints[i];
    this.controlPoints[i] = new three__WEBPACK_IMPORTED_MODULE_0__["Vector4"](point.x, point.y, point.z, point.w);
  }
};

NURBSCurve.prototype = Object.create(three__WEBPACK_IMPORTED_MODULE_0__["Curve"].prototype);
NURBSCurve.prototype.constructor = NURBSCurve;

NURBSCurve.prototype.getPoint = function (t) {
  var u = this.knots[this.startKnot] + t * (this.knots[this.endKnot] - this.knots[this.startKnot]); // linear mapping t->u
  // following results in (wx, wy, wz, w) homogeneous point

  var hpoint = _NURBSUtils_js__WEBPACK_IMPORTED_MODULE_1__["NURBSUtils"].calcBSplinePoint(this.degree, this.knots, this.controlPoints, u);

  if (hpoint.w != 1.0) {
    // project to 3D space: (wx, wy, wz, w) -> (x, y, z, 1)
    hpoint.divideScalar(hpoint.w);
  }

  return new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](hpoint.x, hpoint.y, hpoint.z);
};

NURBSCurve.prototype.getTangent = function (t) {
  var u = this.knots[0] + t * (this.knots[this.knots.length - 1] - this.knots[0]);
  var ders = _NURBSUtils_js__WEBPACK_IMPORTED_MODULE_1__["NURBSUtils"].calcNURBSDerivatives(this.degree, this.knots, this.controlPoints, u, 1);
  var tangent = ders[1].clone();
  tangent.normalize();
  return tangent;
};



/***/ }),

/***/ "./src/loaders/fbx/NURBSUtils.js":
/*!***************************************!*\
  !*** ./src/loaders/fbx/NURBSUtils.js ***!
  \***************************************/
/*! exports provided: NURBSUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NURBSUtils", function() { return NURBSUtils; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/**
 * @author renej
 * NURBS utils
 *
 * See NURBSCurve and NURBSSurface.
 *
 **/

/**************************************************************
 *	NURBS Utils
 **************************************************************/

var NURBSUtils = {
  /*
  Finds knot vector span.
   p : degree
  u : parametric value
  U : knot vector
   returns the span
  */
  findSpan: function findSpan(p, u, U) {
    var n = U.length - p - 1;

    if (u >= U[n]) {
      return n - 1;
    }

    if (u <= U[p]) {
      return p;
    }

    var low = p;
    var high = n;
    var mid = Math.floor((low + high) / 2);

    while (u < U[mid] || u >= U[mid + 1]) {
      if (u < U[mid]) {
        high = mid;
      } else {
        low = mid;
      }

      mid = Math.floor((low + high) / 2);
    }

    return mid;
  },

  /*
  Calculate basis functions. See The NURBS Book, page 70, algorithm A2.2
   span : span in which u lies
  u    : parametric point
  p    : degree
  U    : knot vector
   returns array[p+1] with basis functions values.
  */
  calcBasisFunctions: function calcBasisFunctions(span, u, p, U) {
    var N = [];
    var left = [];
    var right = [];
    N[0] = 1.0;

    for (var j = 1; j <= p; ++j) {
      left[j] = u - U[span + 1 - j];
      right[j] = U[span + j] - u;
      var saved = 0.0;

      for (var r = 0; r < j; ++r) {
        var rv = right[r + 1];
        var lv = left[j - r];
        var temp = N[r] / (rv + lv);
        N[r] = saved + rv * temp;
        saved = lv * temp;
      }

      N[j] = saved;
    }

    return N;
  },

  /*
  Calculate B-Spline curve points. See The NURBS Book, page 82, algorithm A3.1.
   p : degree of B-Spline
  U : knot vector
  P : control points (x, y, z, w)
  u : parametric point
   returns point for given u
  */
  calcBSplinePoint: function calcBSplinePoint(p, U, P, u) {
    var span = this.findSpan(p, u, U);
    var N = this.calcBasisFunctions(span, u, p, U);
    var C = new three__WEBPACK_IMPORTED_MODULE_0__["Vector4"](0, 0, 0, 0);

    for (var j = 0; j <= p; ++j) {
      var point = P[span - p + j];
      var Nj = N[j];
      var wNj = point.w * Nj;
      C.x += point.x * wNj;
      C.y += point.y * wNj;
      C.z += point.z * wNj;
      C.w += point.w * Nj;
    }

    return C;
  },

  /*
  Calculate basis functions derivatives. See The NURBS Book, page 72, algorithm A2.3.
   span : span in which u lies
  u    : parametric point
  p    : degree
  n    : number of derivatives to calculate
  U    : knot vector
   returns array[n+1][p+1] with basis functions derivatives
  */
  calcBasisFunctionDerivatives: function calcBasisFunctionDerivatives(span, u, p, n, U) {
    var zeroArr = [];

    for (var i = 0; i <= p; ++i) {
      zeroArr[i] = 0.0;
    }

    var ders = [];

    for (var i = 0; i <= n; ++i) {
      ders[i] = zeroArr.slice(0);
    }

    var ndu = [];

    for (var i = 0; i <= p; ++i) {
      ndu[i] = zeroArr.slice(0);
    }

    ndu[0][0] = 1.0;
    var left = zeroArr.slice(0);
    var right = zeroArr.slice(0);

    for (var j = 1; j <= p; ++j) {
      left[j] = u - U[span + 1 - j];
      right[j] = U[span + j] - u;
      var saved = 0.0;

      for (var r = 0; r < j; ++r) {
        var rv = right[r + 1];
        var lv = left[j - r];
        ndu[j][r] = rv + lv;
        var temp = ndu[r][j - 1] / ndu[j][r];
        ndu[r][j] = saved + rv * temp;
        saved = lv * temp;
      }

      ndu[j][j] = saved;
    }

    for (var j = 0; j <= p; ++j) {
      ders[0][j] = ndu[j][p];
    }

    for (var r = 0; r <= p; ++r) {
      var s1 = 0;
      var s2 = 1;
      var a = [];

      for (var i = 0; i <= p; ++i) {
        a[i] = zeroArr.slice(0);
      }

      a[0][0] = 1.0;

      for (var k = 1; k <= n; ++k) {
        var d = 0.0;
        var rk = r - k;
        var pk = p - k;

        if (r >= k) {
          a[s2][0] = a[s1][0] / ndu[pk + 1][rk];
          d = a[s2][0] * ndu[rk][pk];
        }

        var j1 = rk >= -1 ? 1 : -rk;
        var j2 = r - 1 <= pk ? k - 1 : p - r;

        for (var j = j1; j <= j2; ++j) {
          a[s2][j] = (a[s1][j] - a[s1][j - 1]) / ndu[pk + 1][rk + j];
          d += a[s2][j] * ndu[rk + j][pk];
        }

        if (r <= pk) {
          a[s2][k] = -a[s1][k - 1] / ndu[pk + 1][r];
          d += a[s2][k] * ndu[r][pk];
        }

        ders[k][r] = d;
        var j = s1;
        s1 = s2;
        s2 = j;
      }
    }

    var r = p;

    for (var k = 1; k <= n; ++k) {
      for (var j = 0; j <= p; ++j) {
        ders[k][j] *= r;
      }

      r *= p - k;
    }

    return ders;
  },

  /*
  	Calculate derivatives of a B-Spline. See The NURBS Book, page 93, algorithm A3.2.
   	p  : degree
  	U  : knot vector
  	P  : control points
  	u  : Parametric points
  	nd : number of derivatives
   	returns array[d+1] with derivatives
  	*/
  calcBSplineDerivatives: function calcBSplineDerivatives(p, U, P, u, nd) {
    var du = nd < p ? nd : p;
    var CK = [];
    var span = this.findSpan(p, u, U);
    var nders = this.calcBasisFunctionDerivatives(span, u, p, du, U);
    var Pw = [];

    for (var i = 0; i < P.length; ++i) {
      var point = P[i].clone();
      var w = point.w;
      point.x *= w;
      point.y *= w;
      point.z *= w;
      Pw[i] = point;
    }

    for (var k = 0; k <= du; ++k) {
      var point = Pw[span - p].clone().multiplyScalar(nders[k][0]);

      for (var j = 1; j <= p; ++j) {
        point.add(Pw[span - p + j].clone().multiplyScalar(nders[k][j]));
      }

      CK[k] = point;
    }

    for (var k = du + 1; k <= nd + 1; ++k) {
      CK[k] = new three__WEBPACK_IMPORTED_MODULE_0__["Vector4"](0, 0, 0);
    }

    return CK;
  },

  /*
  Calculate "K over I"
   returns k!/(i!(k-i)!)
  */
  calcKoverI: function calcKoverI(k, i) {
    var nom = 1;

    for (var j = 2; j <= k; ++j) {
      nom *= j;
    }

    var denom = 1;

    for (var j = 2; j <= i; ++j) {
      denom *= j;
    }

    for (var j = 2; j <= k - i; ++j) {
      denom *= j;
    }

    return nom / denom;
  },

  /*
  Calculate derivatives (0-nd) of rational curve. See The NURBS Book, page 127, algorithm A4.2.
   Pders : result of function calcBSplineDerivatives
   returns array with derivatives for rational curve.
  */
  calcRationalCurveDerivatives: function calcRationalCurveDerivatives(Pders) {
    var nd = Pders.length;
    var Aders = [];
    var wders = [];

    for (var i = 0; i < nd; ++i) {
      var point = Pders[i];
      Aders[i] = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](point.x, point.y, point.z);
      wders[i] = point.w;
    }

    var CK = [];

    for (var k = 0; k < nd; ++k) {
      var v = Aders[k].clone();

      for (var i = 1; i <= k; ++i) {
        v.sub(CK[k - i].clone().multiplyScalar(this.calcKoverI(k, i) * wders[i]));
      }

      CK[k] = v.divideScalar(wders[0]);
    }

    return CK;
  },

  /*
  Calculate NURBS curve derivatives. See The NURBS Book, page 127, algorithm A4.2.
   p  : degree
  U  : knot vector
  P  : control points in homogeneous space
  u  : parametric points
  nd : number of derivatives
   returns array with derivatives.
  */
  calcNURBSDerivatives: function calcNURBSDerivatives(p, U, P, u, nd) {
    var Pders = this.calcBSplineDerivatives(p, U, P, u, nd);
    return this.calcRationalCurveDerivatives(Pders);
  },

  /*
  Calculate rational B-Spline surface point. See The NURBS Book, page 134, algorithm A4.3.
   p1, p2 : degrees of B-Spline surface
  U1, U2 : knot vectors
  P      : control points (x, y, z, w)
  u, v   : parametric values
   returns point for given (u, v)
  */
  calcSurfacePoint: function calcSurfacePoint(p, q, U, V, P, u, v, target) {
    var uspan = this.findSpan(p, u, U);
    var vspan = this.findSpan(q, v, V);
    var Nu = this.calcBasisFunctions(uspan, u, p, U);
    var Nv = this.calcBasisFunctions(vspan, v, q, V);
    var temp = [];

    for (var l = 0; l <= q; ++l) {
      temp[l] = new three__WEBPACK_IMPORTED_MODULE_0__["Vector4"](0, 0, 0, 0);

      for (var k = 0; k <= p; ++k) {
        var point = P[uspan - p + k][vspan - q + l].clone();
        var w = point.w;
        point.x *= w;
        point.y *= w;
        point.z *= w;
        temp[l].add(point.multiplyScalar(Nu[k]));
      }
    }

    var Sw = new three__WEBPACK_IMPORTED_MODULE_0__["Vector4"](0, 0, 0, 0);

    for (var l = 0; l <= q; ++l) {
      Sw.add(temp[l].multiplyScalar(Nv[l]));
    }

    Sw.divideScalar(Sw.w);
    target.set(Sw.x, Sw.y, Sw.z);
  }
};


/***/ }),

/***/ "./src/loaders/fbx/TGALoader.js":
/*!**************************************!*\
  !*** ./src/loaders/fbx/TGALoader.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/*
 * @author Daosheng Mu / https://github.com/DaoshengMu/
 * @author mrdoob / http://mrdoob.com/
 * @author takahirox / https://github.com/takahirox/
 */


three__WEBPACK_IMPORTED_MODULE_0__["TGALoader"] = function (manager) {
  this.manager = manager !== undefined ? manager : three__WEBPACK_IMPORTED_MODULE_0__["DefaultLoadingManager"];
};

three__WEBPACK_IMPORTED_MODULE_0__["TGALoader"].prototype = {
  constructor: three__WEBPACK_IMPORTED_MODULE_0__["TGALoader"],
  load: function load(url, onLoad, onProgress, onError) {
    var scope = this;
    var texture = new three__WEBPACK_IMPORTED_MODULE_0__["Texture"]();
    var loader = new three__WEBPACK_IMPORTED_MODULE_0__["FileLoader"](this.manager);
    loader.setResponseType('arraybuffer');
    loader.setPath(this.path);
    loader.load(url, function (buffer) {
      texture.image = scope.parse(buffer);
      texture.needsUpdate = true;

      if (onLoad !== undefined) {
        onLoad(texture);
      }
    }, onProgress, onError);
    return texture;
  },
  parse: function parse(buffer) {
    // reference from vthibault, https://github.com/vthibault/roBrowser/blob/master/src/Loaders/Targa.js
    function tgaCheckHeader(header) {
      switch (header.image_type) {
        // check indexed type
        case TGA_TYPE_INDEXED:
        case TGA_TYPE_RLE_INDEXED:
          if (header.colormap_length > 256 || header.colormap_size !== 24 || header.colormap_type !== 1) {
            console.error('THREE.TGALoader: Invalid type colormap data for indexed type.');
          }

          break;
        // check colormap type

        case TGA_TYPE_RGB:
        case TGA_TYPE_GREY:
        case TGA_TYPE_RLE_RGB:
        case TGA_TYPE_RLE_GREY:
          if (header.colormap_type) {
            console.error('THREE.TGALoader: Invalid type colormap data for colormap type.');
          }

          break;
        // What the need of a file without data ?

        case TGA_TYPE_NO_DATA:
          console.error('THREE.TGALoader: No data.');
        // Invalid type ?

        default:
          console.error('THREE.TGALoader: Invalid type "%s".', header.image_type);
      } // check image width and height


      if (header.width <= 0 || header.height <= 0) {
        console.error('THREE.TGALoader: Invalid image size.');
      } // check image pixel size


      if (header.pixel_size !== 8 && header.pixel_size !== 16 && header.pixel_size !== 24 && header.pixel_size !== 32) {
        console.error('THREE.TGALoader: Invalid pixel size "%s".', header.pixel_size);
      }
    } // parse tga image buffer


    function tgaParse(use_rle, use_pal, header, offset, data) {
      var pixel_data, pixel_size, pixel_total, palettes;
      pixel_size = header.pixel_size >> 3;
      pixel_total = header.width * header.height * pixel_size; // read palettes

      if (use_pal) {
        palettes = data.subarray(offset, offset += header.colormap_length * (header.colormap_size >> 3));
      } // read RLE


      if (use_rle) {
        pixel_data = new Uint8Array(pixel_total);
        var c, count, i;
        var shift = 0;
        var pixels = new Uint8Array(pixel_size);

        while (shift < pixel_total) {
          c = data[offset++];
          count = (c & 0x7f) + 1; // RLE pixels

          if (c & 0x80) {
            // bind pixel tmp array
            for (i = 0; i < pixel_size; ++i) {
              pixels[i] = data[offset++];
            } // copy pixel array


            for (i = 0; i < count; ++i) {
              pixel_data.set(pixels, shift + i * pixel_size);
            }

            shift += pixel_size * count;
          } else {
            // raw pixels
            count *= pixel_size;

            for (i = 0; i < count; ++i) {
              pixel_data[shift + i] = data[offset++];
            }

            shift += count;
          }
        }
      } else {
        // raw pixels
        pixel_data = data.subarray(offset, offset += use_pal ? header.width * header.height : pixel_total);
      }

      return {
        pixel_data: pixel_data,
        palettes: palettes
      };
    }

    function tgaGetImageData8bits(imageData, y_start, y_step, y_end, x_start, x_step, x_end, image, palettes) {
      var colormap = palettes;
      var color,
          i = 0,
          x,
          y;
      var width = header.width;

      for (y = y_start; y !== y_end; y += y_step) {
        for (x = x_start; x !== x_end; x += x_step, i++) {
          color = image[i];
          imageData[(x + width * y) * 4 + 3] = 255;
          imageData[(x + width * y) * 4 + 2] = colormap[color * 3 + 0];
          imageData[(x + width * y) * 4 + 1] = colormap[color * 3 + 1];
          imageData[(x + width * y) * 4 + 0] = colormap[color * 3 + 2];
        }
      }

      return imageData;
    }

    function tgaGetImageData16bits(imageData, y_start, y_step, y_end, x_start, x_step, x_end, image) {
      var color,
          i = 0,
          x,
          y;
      var width = header.width;

      for (y = y_start; y !== y_end; y += y_step) {
        for (x = x_start; x !== x_end; x += x_step, i += 2) {
          color = image[i + 0] + (image[i + 1] << 8); // Inversed ?

          imageData[(x + width * y) * 4 + 0] = (color & 0x7c00) >> 7;
          imageData[(x + width * y) * 4 + 1] = (color & 0x03e0) >> 2;
          imageData[(x + width * y) * 4 + 2] = (color & 0x001f) >> 3;
          imageData[(x + width * y) * 4 + 3] = color & 0x8000 ? 0 : 255;
        }
      }

      return imageData;
    }

    function tgaGetImageData24bits(imageData, y_start, y_step, y_end, x_start, x_step, x_end, image) {
      var i = 0,
          x,
          y;
      var width = header.width;

      for (y = y_start; y !== y_end; y += y_step) {
        for (x = x_start; x !== x_end; x += x_step, i += 3) {
          imageData[(x + width * y) * 4 + 3] = 255;
          imageData[(x + width * y) * 4 + 2] = image[i + 0];
          imageData[(x + width * y) * 4 + 1] = image[i + 1];
          imageData[(x + width * y) * 4 + 0] = image[i + 2];
        }
      }

      return imageData;
    }

    function tgaGetImageData32bits(imageData, y_start, y_step, y_end, x_start, x_step, x_end, image) {
      var i = 0,
          x,
          y;
      var width = header.width;

      for (y = y_start; y !== y_end; y += y_step) {
        for (x = x_start; x !== x_end; x += x_step, i += 4) {
          imageData[(x + width * y) * 4 + 2] = image[i + 0];
          imageData[(x + width * y) * 4 + 1] = image[i + 1];
          imageData[(x + width * y) * 4 + 0] = image[i + 2];
          imageData[(x + width * y) * 4 + 3] = image[i + 3];
        }
      }

      return imageData;
    }

    function tgaGetImageDataGrey8bits(imageData, y_start, y_step, y_end, x_start, x_step, x_end, image) {
      var color,
          i = 0,
          x,
          y;
      var width = header.width;

      for (y = y_start; y !== y_end; y += y_step) {
        for (x = x_start; x !== x_end; x += x_step, i++) {
          color = image[i];
          imageData[(x + width * y) * 4 + 0] = color;
          imageData[(x + width * y) * 4 + 1] = color;
          imageData[(x + width * y) * 4 + 2] = color;
          imageData[(x + width * y) * 4 + 3] = 255;
        }
      }

      return imageData;
    }

    function tgaGetImageDataGrey16bits(imageData, y_start, y_step, y_end, x_start, x_step, x_end, image) {
      var i = 0,
          x,
          y;
      var width = header.width;

      for (y = y_start; y !== y_end; y += y_step) {
        for (x = x_start; x !== x_end; x += x_step, i += 2) {
          imageData[(x + width * y) * 4 + 0] = image[i + 0];
          imageData[(x + width * y) * 4 + 1] = image[i + 0];
          imageData[(x + width * y) * 4 + 2] = image[i + 0];
          imageData[(x + width * y) * 4 + 3] = image[i + 1];
        }
      }

      return imageData;
    }

    function getTgaRGBA(data, width, height, image, palette) {
      var x_start, y_start, x_step, y_step, x_end, y_end;

      switch ((header.flags & TGA_ORIGIN_MASK) >> TGA_ORIGIN_SHIFT) {
        default:
        case TGA_ORIGIN_UL:
          x_start = 0;
          x_step = 1;
          x_end = width;
          y_start = 0;
          y_step = 1;
          y_end = height;
          break;

        case TGA_ORIGIN_BL:
          x_start = 0;
          x_step = 1;
          x_end = width;
          y_start = height - 1;
          y_step = -1;
          y_end = -1;
          break;

        case TGA_ORIGIN_UR:
          x_start = width - 1;
          x_step = -1;
          x_end = -1;
          y_start = 0;
          y_step = 1;
          y_end = height;
          break;

        case TGA_ORIGIN_BR:
          x_start = width - 1;
          x_step = -1;
          x_end = -1;
          y_start = height - 1;
          y_step = -1;
          y_end = -1;
          break;
      }

      if (use_grey) {
        switch (header.pixel_size) {
          case 8:
            tgaGetImageDataGrey8bits(data, y_start, y_step, y_end, x_start, x_step, x_end, image);
            break;

          case 16:
            tgaGetImageDataGrey16bits(data, y_start, y_step, y_end, x_start, x_step, x_end, image);
            break;

          default:
            console.error('THREE.TGALoader: Format not supported.');
            break;
        }
      } else {
        switch (header.pixel_size) {
          case 8:
            tgaGetImageData8bits(data, y_start, y_step, y_end, x_start, x_step, x_end, image, palette);
            break;

          case 16:
            tgaGetImageData16bits(data, y_start, y_step, y_end, x_start, x_step, x_end, image);
            break;

          case 24:
            tgaGetImageData24bits(data, y_start, y_step, y_end, x_start, x_step, x_end, image);
            break;

          case 32:
            tgaGetImageData32bits(data, y_start, y_step, y_end, x_start, x_step, x_end, image);
            break;

          default:
            console.error('THREE.TGALoader: Format not supported.');
            break;
        }
      } // Load image data according to specific method
      // var func = 'tgaGetImageData' + (use_grey ? 'Grey' : '') + (header.pixel_size) + 'bits';
      // func(data, y_start, y_step, y_end, x_start, x_step, x_end, width, image, palette );


      return data;
    } // TGA constants


    var TGA_TYPE_NO_DATA = 0,
        TGA_TYPE_INDEXED = 1,
        TGA_TYPE_RGB = 2,
        TGA_TYPE_GREY = 3,
        TGA_TYPE_RLE_INDEXED = 9,
        TGA_TYPE_RLE_RGB = 10,
        TGA_TYPE_RLE_GREY = 11,
        TGA_ORIGIN_MASK = 0x30,
        TGA_ORIGIN_SHIFT = 0x04,
        TGA_ORIGIN_BL = 0x00,
        TGA_ORIGIN_BR = 0x01,
        TGA_ORIGIN_UL = 0x02,
        TGA_ORIGIN_UR = 0x03;
    if (buffer.length < 19) console.error('THREE.TGALoader: Not enough data to contain header.');
    var content = new Uint8Array(buffer),
        offset = 0,
        header = {
      id_length: content[offset++],
      colormap_type: content[offset++],
      image_type: content[offset++],
      colormap_index: content[offset++] | content[offset++] << 8,
      colormap_length: content[offset++] | content[offset++] << 8,
      colormap_size: content[offset++],
      origin: [content[offset++] | content[offset++] << 8, content[offset++] | content[offset++] << 8],
      width: content[offset++] | content[offset++] << 8,
      height: content[offset++] | content[offset++] << 8,
      pixel_size: content[offset++],
      flags: content[offset++] // check tga if it is valid format

    };
    tgaCheckHeader(header);

    if (header.id_length + offset > buffer.length) {
      console.error('THREE.TGALoader: No data.');
    } // skip the needn't data


    offset += header.id_length; // get targa information about RLE compression and palette

    var use_rle = false,
        use_pal = false,
        use_grey = false;

    switch (header.image_type) {
      case TGA_TYPE_RLE_INDEXED:
        use_rle = true;
        use_pal = true;
        break;

      case TGA_TYPE_INDEXED:
        use_pal = true;
        break;

      case TGA_TYPE_RLE_RGB:
        use_rle = true;
        break;

      case TGA_TYPE_RGB:
        break;

      case TGA_TYPE_RLE_GREY:
        use_rle = true;
        use_grey = true;
        break;

      case TGA_TYPE_GREY:
        use_grey = true;
        break;
    } //


    var useOffscreen = typeof OffscreenCanvas !== 'undefined';
    var canvas = useOffscreen ? new OffscreenCanvas(header.width, header.height) : document.createElement('canvas');
    canvas.width = header.width;
    canvas.height = header.height;
    var context = canvas.getContext('2d');
    var imageData = context.createImageData(header.width, header.height);
    var result = tgaParse(use_rle, use_pal, header, offset, content);
    var rgbaData = getTgaRGBA(imageData.data, header.width, header.height, result.pixel_data, result.palettes);
    context.putImageData(imageData, 0, 0);
    return useOffscreen ? canvas.transferToImageBitmap() : canvas;
  },
  setPath: function setPath(value) {
    this.path = value;
    return this;
  }
};

/***/ }),

/***/ "./src/loaders/fbx/fbx.js":
/*!********************************!*\
  !*** ./src/loaders/fbx/fbx.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FBX; });
/* harmony import */ var _FBXLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FBXLoader.js */ "./src/loaders/fbx/FBXLoader.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./src/config.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var FBX =
/*#__PURE__*/
function () {
  function FBX(app) {
    _classCallCheck(this, FBX);

    this.self = app;
    this.loader = new _FBXLoader_js__WEBPACK_IMPORTED_MODULE_0__["FBXLoader"]();
  }

  _createClass(FBX, [{
    key: "load",
    value: function load(path) {
      var _this = this;

      return new Promise(function (res) {
        _this.loader.load(path, function (obj) {
          obj.scale.set(_config__WEBPACK_IMPORTED_MODULE_1__["default"].obj.globalScale, _config__WEBPACK_IMPORTED_MODULE_1__["default"].obj.globalScale, _config__WEBPACK_IMPORTED_MODULE_1__["default"].obj.globalScale);

          _this.self.setCastShadowAndReceiveShadow(obj);

          _this.mixer = obj.mixer = new three__WEBPACK_IMPORTED_MODULE_2__["AnimationMixer"](obj);

          _this.mixer.clipAction(obj.animations[0]).play();

          _this.self.scene.add(obj);

          window.__HMF__[path] = obj;
          window.__HMF__[path].instance = _this;
          res(obj);
        });
      });
    }
  }, {
    key: "update",
    value: function update(time) {
      this.mixer && this.mixer.update(time);
    }
  }]);

  return FBX;
}();



/***/ }),

/***/ "./src/loaders/fbx/inflate.module.min.js":
/*!***********************************************!*\
  !*** ./src/loaders/fbx/inflate.module.min.js ***!
  \***********************************************/
/*! exports provided: Zlib */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Zlib", function() { return Zlib; });
/** @license zlib.js 2012 - imaya [ https://github.com/imaya/zlib.js ] The MIT License */
var mod = {},
    l = void 0,
    aa = mod;

function r(c, d) {
  var a = c.split("."),
      b = aa;
  !(a[0] in b) && b.execScript && b.execScript("var " + a[0]);

  for (var e; a.length && (e = a.shift());) {
    !a.length && d !== l ? b[e] = d : b = b[e] ? b[e] : b[e] = {};
  }
}

;
var t = "undefined" !== typeof Uint8Array && "undefined" !== typeof Uint16Array && "undefined" !== typeof Uint32Array && "undefined" !== typeof DataView;

function v(c) {
  var d = c.length,
      a = 0,
      b = Number.POSITIVE_INFINITY,
      e,
      f,
      g,
      h,
      k,
      m,
      n,
      p,
      s,
      x;

  for (p = 0; p < d; ++p) {
    c[p] > a && (a = c[p]), c[p] < b && (b = c[p]);
  }

  e = 1 << a;
  f = new (t ? Uint32Array : Array)(e);
  g = 1;
  h = 0;

  for (k = 2; g <= a;) {
    for (p = 0; p < d; ++p) {
      if (c[p] === g) {
        m = 0;
        n = h;

        for (s = 0; s < g; ++s) {
          m = m << 1 | n & 1, n >>= 1;
        }

        x = g << 16 | p;

        for (s = m; s < e; s += k) {
          f[s] = x;
        }

        ++h;
      }
    }

    ++g;
    h <<= 1;
    k <<= 1;
  }

  return [f, a, b];
}

;

function w(c, d) {
  this.g = [];
  this.h = 32768;
  this.d = this.f = this.a = this.l = 0;
  this.input = t ? new Uint8Array(c) : c;
  this.m = !1;
  this.i = y;
  this.r = !1;
  if (d || !(d = {})) d.index && (this.a = d.index), d.bufferSize && (this.h = d.bufferSize), d.bufferType && (this.i = d.bufferType), d.resize && (this.r = d.resize);

  switch (this.i) {
    case A:
      this.b = 32768;
      this.c = new (t ? Uint8Array : Array)(32768 + this.h + 258);
      break;

    case y:
      this.b = 0;
      this.c = new (t ? Uint8Array : Array)(this.h);
      this.e = this.z;
      this.n = this.v;
      this.j = this.w;
      break;

    default:
      throw Error("invalid inflate mode");
  }
}

var A = 0,
    y = 1,
    B = {
  t: A,
  s: y
};

w.prototype.k = function () {
  for (; !this.m;) {
    var c = C(this, 3);
    c & 1 && (this.m = !0);
    c >>>= 1;

    switch (c) {
      case 0:
        var d = this.input,
            a = this.a,
            b = this.c,
            e = this.b,
            f = d.length,
            g = l,
            h = l,
            k = b.length,
            m = l;
        this.d = this.f = 0;
        if (a + 1 >= f) throw Error("invalid uncompressed block header: LEN");
        g = d[a++] | d[a++] << 8;
        if (a + 1 >= f) throw Error("invalid uncompressed block header: NLEN");
        h = d[a++] | d[a++] << 8;
        if (g === ~h) throw Error("invalid uncompressed block header: length verify");
        if (a + g > d.length) throw Error("input buffer is broken");

        switch (this.i) {
          case A:
            for (; e + g > b.length;) {
              m = k - e;
              g -= m;
              if (t) b.set(d.subarray(a, a + m), e), e += m, a += m;else for (; m--;) {
                b[e++] = d[a++];
              }
              this.b = e;
              b = this.e();
              e = this.b;
            }

            break;

          case y:
            for (; e + g > b.length;) {
              b = this.e({
                p: 2
              });
            }

            break;

          default:
            throw Error("invalid inflate mode");
        }

        if (t) b.set(d.subarray(a, a + g), e), e += g, a += g;else for (; g--;) {
          b[e++] = d[a++];
        }
        this.a = a;
        this.b = e;
        this.c = b;
        break;

      case 1:
        this.j(ba, ca);
        break;

      case 2:
        for (var n = C(this, 5) + 257, p = C(this, 5) + 1, s = C(this, 4) + 4, x = new (t ? Uint8Array : Array)(D.length), S = l, T = l, U = l, u = l, M = l, F = l, z = l, q = l, V = l, q = 0; q < s; ++q) {
          x[D[q]] = C(this, 3);
        }

        if (!t) {
          q = s;

          for (s = x.length; q < s; ++q) {
            x[D[q]] = 0;
          }
        }

        S = v(x);
        u = new (t ? Uint8Array : Array)(n + p);
        q = 0;

        for (V = n + p; q < V;) {
          switch (M = E(this, S), M) {
            case 16:
              for (z = 3 + C(this, 2); z--;) {
                u[q++] = F;
              }

              break;

            case 17:
              for (z = 3 + C(this, 3); z--;) {
                u[q++] = 0;
              }

              F = 0;
              break;

            case 18:
              for (z = 11 + C(this, 7); z--;) {
                u[q++] = 0;
              }

              F = 0;
              break;

            default:
              F = u[q++] = M;
          }
        }

        T = t ? v(u.subarray(0, n)) : v(u.slice(0, n));
        U = t ? v(u.subarray(n)) : v(u.slice(n));
        this.j(T, U);
        break;

      default:
        throw Error("unknown BTYPE: " + c);
    }
  }

  return this.n();
};

var G = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
    D = t ? new Uint16Array(G) : G,
    H = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258],
    I = t ? new Uint16Array(H) : H,
    J = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0],
    K = t ? new Uint8Array(J) : J,
    L = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577],
    da = t ? new Uint16Array(L) : L,
    ea = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
    N = t ? new Uint8Array(ea) : ea,
    O = new (t ? Uint8Array : Array)(288),
    P,
    fa;
P = 0;

for (fa = O.length; P < fa; ++P) {
  O[P] = 143 >= P ? 8 : 255 >= P ? 9 : 279 >= P ? 7 : 8;
}

var ba = v(O),
    Q = new (t ? Uint8Array : Array)(30),
    R,
    ga;
R = 0;

for (ga = Q.length; R < ga; ++R) {
  Q[R] = 5;
}

var ca = v(Q);

function C(c, d) {
  for (var a = c.f, b = c.d, e = c.input, f = c.a, g = e.length, h; b < d;) {
    if (f >= g) throw Error("input buffer is broken");
    a |= e[f++] << b;
    b += 8;
  }

  h = a & (1 << d) - 1;
  c.f = a >>> d;
  c.d = b - d;
  c.a = f;
  return h;
}

function E(c, d) {
  for (var a = c.f, b = c.d, e = c.input, f = c.a, g = e.length, h = d[0], k = d[1], m, n; b < k && !(f >= g);) {
    a |= e[f++] << b, b += 8;
  }

  m = h[a & (1 << k) - 1];
  n = m >>> 16;
  if (n > b) throw Error("invalid code length: " + n);
  c.f = a >> n;
  c.d = b - n;
  c.a = f;
  return m & 65535;
}

w.prototype.j = function (c, d) {
  var a = this.c,
      b = this.b;
  this.o = c;

  for (var e = a.length - 258, f, g, h, k; 256 !== (f = E(this, c));) {
    if (256 > f) b >= e && (this.b = b, a = this.e(), b = this.b), a[b++] = f;else {
      g = f - 257;
      k = I[g];
      0 < K[g] && (k += C(this, K[g]));
      f = E(this, d);
      h = da[f];
      0 < N[f] && (h += C(this, N[f]));
      b >= e && (this.b = b, a = this.e(), b = this.b);

      for (; k--;) {
        a[b] = a[b++ - h];
      }
    }
  }

  for (; 8 <= this.d;) {
    this.d -= 8, this.a--;
  }

  this.b = b;
};

w.prototype.w = function (c, d) {
  var a = this.c,
      b = this.b;
  this.o = c;

  for (var e = a.length, f, g, h, k; 256 !== (f = E(this, c));) {
    if (256 > f) b >= e && (a = this.e(), e = a.length), a[b++] = f;else {
      g = f - 257;
      k = I[g];
      0 < K[g] && (k += C(this, K[g]));
      f = E(this, d);
      h = da[f];
      0 < N[f] && (h += C(this, N[f]));
      b + k > e && (a = this.e(), e = a.length);

      for (; k--;) {
        a[b] = a[b++ - h];
      }
    }
  }

  for (; 8 <= this.d;) {
    this.d -= 8, this.a--;
  }

  this.b = b;
};

w.prototype.e = function () {
  var c = new (t ? Uint8Array : Array)(this.b - 32768),
      d = this.b - 32768,
      a,
      b,
      e = this.c;
  if (t) c.set(e.subarray(32768, c.length));else {
    a = 0;

    for (b = c.length; a < b; ++a) {
      c[a] = e[a + 32768];
    }
  }
  this.g.push(c);
  this.l += c.length;
  if (t) e.set(e.subarray(d, d + 32768));else for (a = 0; 32768 > a; ++a) {
    e[a] = e[d + a];
  }
  this.b = 32768;
  return e;
};

w.prototype.z = function (c) {
  var d,
      a = this.input.length / this.a + 1 | 0,
      b,
      e,
      f,
      g = this.input,
      h = this.c;
  c && ("number" === typeof c.p && (a = c.p), "number" === typeof c.u && (a += c.u));
  2 > a ? (b = (g.length - this.a) / this.o[2], f = 258 * (b / 2) | 0, e = f < h.length ? h.length + f : h.length << 1) : e = h.length * a;
  t ? (d = new Uint8Array(e), d.set(h)) : d = h;
  return this.c = d;
};

w.prototype.n = function () {
  var c = 0,
      d = this.c,
      a = this.g,
      b,
      e = new (t ? Uint8Array : Array)(this.l + (this.b - 32768)),
      f,
      g,
      h,
      k;
  if (0 === a.length) return t ? this.c.subarray(32768, this.b) : this.c.slice(32768, this.b);
  f = 0;

  for (g = a.length; f < g; ++f) {
    b = a[f];
    h = 0;

    for (k = b.length; h < k; ++h) {
      e[c++] = b[h];
    }
  }

  f = 32768;

  for (g = this.b; f < g; ++f) {
    e[c++] = d[f];
  }

  this.g = [];
  return this.buffer = e;
};

w.prototype.v = function () {
  var c,
      d = this.b;
  t ? this.r ? (c = new Uint8Array(d), c.set(this.c.subarray(0, d))) : c = this.c.subarray(0, d) : (this.c.length > d && (this.c.length = d), c = this.c);
  return this.buffer = c;
};

function W(c, d) {
  var a, b;
  this.input = c;
  this.a = 0;
  if (d || !(d = {})) d.index && (this.a = d.index), d.verify && (this.A = d.verify);
  a = c[this.a++];
  b = c[this.a++];

  switch (a & 15) {
    case ha:
      this.method = ha;
      break;

    default:
      throw Error("unsupported compression method");
  }

  if (0 !== ((a << 8) + b) % 31) throw Error("invalid fcheck flag:" + ((a << 8) + b) % 31);
  if (b & 32) throw Error("fdict flag is not supported");
  this.q = new w(c, {
    index: this.a,
    bufferSize: d.bufferSize,
    bufferType: d.bufferType,
    resize: d.resize
  });
}

W.prototype.k = function () {
  var c = this.input,
      d,
      a;
  d = this.q.k();
  this.a = this.q.a;

  if (this.A) {
    a = (c[this.a++] << 24 | c[this.a++] << 16 | c[this.a++] << 8 | c[this.a++]) >>> 0;
    var b = d;

    if ("string" === typeof b) {
      var e = b.split(""),
          f,
          g;
      f = 0;

      for (g = e.length; f < g; f++) {
        e[f] = (e[f].charCodeAt(0) & 255) >>> 0;
      }

      b = e;
    }

    for (var h = 1, k = 0, m = b.length, n, p = 0; 0 < m;) {
      n = 1024 < m ? 1024 : m;
      m -= n;

      do {
        h += b[p++], k += h;
      } while (--n);

      h %= 65521;
      k %= 65521;
    }

    if (a !== (k << 16 | h) >>> 0) throw Error("invalid adler-32 checksum");
  }

  return d;
};

var ha = 8;
r("Zlib.Inflate", W);
r("Zlib.Inflate.prototype.decompress", W.prototype.k);
var X = {
  ADAPTIVE: B.s,
  BLOCK: B.t
},
    Y,
    Z,
    $,
    ia;
if (Object.keys) Y = Object.keys(X);else for (Z in Y = [], $ = 0, X) {
  Y[$++] = Z;
}
$ = 0;

for (ia = Y.length; $ < ia; ++$) {
  Z = Y[$], r("Zlib.Inflate.BufferType." + Z, X[Z]);
}

var Zlib = mod.Zlib;


/***/ }),

/***/ "./src/loaders/obj/obj.js":
/*!********************************!*\
  !*** ./src/loaders/obj/obj.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OBJ; });
/* harmony import */ var three_obj_mtl_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three-obj-mtl-loader */ "./node_modules/three-obj-mtl-loader/index.js");
/* harmony import */ var three_obj_mtl_loader__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three_obj_mtl_loader__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./src/config.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var OBJ =
/*#__PURE__*/
function () {
  function OBJ(app) {
    _classCallCheck(this, OBJ);

    this.self = app;
    this.objLoader = new three_obj_mtl_loader__WEBPACK_IMPORTED_MODULE_0__["OBJLoader"](); //obj加载器

    this.mtlLoader = new three_obj_mtl_loader__WEBPACK_IMPORTED_MODULE_0__["MTLLoader"](); //材质文件加载器
  }

  _createClass(OBJ, [{
    key: "load",
    value: function load(path, scale, level) {
      var _this = this;

      this.mtlLoader.setTexturePath(path.substring(0, path.lastIndexOf('/') + 1));
      return new Promise(function (res) {
        _this.mtlLoader.load("".concat(path, ".mtl"), function (materials) {
          _this.objLoader.setMaterials(materials);

          _this.objLoader.load("".concat(path, ".obj"), function (obj) {
            _this.self.scene.add(obj);

            obj.scale.set(scale || _config__WEBPACK_IMPORTED_MODULE_1__["default"].obj.globalScale, scale || _config__WEBPACK_IMPORTED_MODULE_1__["default"].obj.globalScale, scale || _config__WEBPACK_IMPORTED_MODULE_1__["default"].obj.globalScale);
            obj.userData.level = level;

            _this.self.setCastShadowAndReceiveShadow(obj);

            window.__HMF__[path] = obj;
            res(obj);
          }, function (xhr) {
            if (xhr.lengthComputable) {
              var percentComplete = xhr.loaded / xhr.total * 100;
              _this.self.container.querySelector('#loading').innerHTML = "Loading ".concat(percentComplete.toFixed(1));
            }
          });
        });
      });
    }
  }]);

  return OBJ;
}();



/***/ }),

/***/ "./src/loaders/stl/STLLoader.js":
/*!**************************************!*\
  !*** ./src/loaders/stl/STLLoader.js ***!
  \**************************************/
/*! exports provided: STLLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STLLoader", function() { return STLLoader; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/**
 * @author aleeper / http://adamleeper.com/
 * @author mrdoob / http://mrdoob.com/
 * @author gero3 / https://github.com/gero3
 * @author Mugen87 / https://github.com/Mugen87
 *
 * Description: A THREE loader for STL ASCII files, as created by Solidworks and other CAD programs.
 *
 * Supports both binary and ASCII encoded files, with automatic detection of type.
 *
 * The loader returns a non-indexed buffer geometry.
 *
 * Limitations:
 *  Binary decoding supports "Magics" color format (http://en.wikipedia.org/wiki/STL_(file_format)#Color_in_binary_STL).
 *  There is perhaps some question as to how valid it is to always assume little-endian-ness.
 *  ASCII decoding assumes file is UTF-8.
 *
 * Usage:
 *  var loader = new STLLoader();
 *  loader.load( './models/stl/slotted_disk.stl', function ( geometry ) {
 *    scene.add( new THREE.Mesh( geometry ) );
 *  });
 *
 * For binary STLs geometry might contain colors for vertices. To use it:
 *  // use the same code to load STL as above
 *  if (geometry.hasColors) {
 *    material = new THREE.MeshPhongMaterial({ opacity: geometry.alpha, vertexColors: THREE.VertexColors });
 *  } else { .... }
 *  var mesh = new THREE.Mesh( geometry, material );
 */


var STLLoader = function STLLoader(manager) {
  this.manager = manager !== undefined ? manager : three__WEBPACK_IMPORTED_MODULE_0__["DefaultLoadingManager"];
};

STLLoader.prototype = {
  constructor: STLLoader,
  load: function load(url, onLoad, onProgress, onError) {
    var scope = this;
    var loader = new three__WEBPACK_IMPORTED_MODULE_0__["FileLoader"](scope.manager);
    loader.setPath(scope.path);
    loader.setResponseType('arraybuffer');
    loader.load(url, function (text) {
      try {
        onLoad(scope.parse(text));
      } catch (exception) {
        if (onError) {
          onError(exception);
        }
      }
    }, onProgress, onError);
  },
  setPath: function setPath(value) {
    this.path = value;
    return this;
  },
  parse: function parse(data) {
    function isBinary(data) {
      var expect, face_size, n_faces, reader;
      reader = new DataView(data);
      face_size = 32 / 8 * 3 + 32 / 8 * 3 * 3 + 16 / 8;
      n_faces = reader.getUint32(80, true);
      expect = 80 + 32 / 8 + n_faces * face_size;

      if (expect === reader.byteLength) {
        return true;
      } // An ASCII STL data must begin with 'solid ' as the first six bytes.
      // However, ASCII STLs lacking the SPACE after the 'd' are known to be
      // plentiful.  So, check the first 5 bytes for 'solid'.
      // Several encodings, such as UTF-8, precede the text with up to 5 bytes:
      // https://en.wikipedia.org/wiki/Byte_order_mark#Byte_order_marks_by_encoding
      // Search for "solid" to start anywhere after those prefixes.
      // US-ASCII ordinal values for 's', 'o', 'l', 'i', 'd'


      var solid = [115, 111, 108, 105, 100];

      for (var off = 0; off < 5; off++) {
        // If "solid" text is matched to the current offset, declare it to be an ASCII STL.
        if (matchDataViewAt(solid, reader, off)) return false;
      } // Couldn't find "solid" text at the beginning; it is binary STL.


      return true;
    }

    function matchDataViewAt(query, reader, offset) {
      // Check if each byte in query matches the corresponding byte from the current offset
      for (var i = 0, il = query.length; i < il; i++) {
        if (query[i] !== reader.getUint8(offset + i, false)) return false;
      }

      return true;
    }

    function parseBinary(data) {
      var reader = new DataView(data);
      var faces = reader.getUint32(80, true);
      var r,
          g,
          b,
          hasColors = false,
          colors;
      var defaultR, defaultG, defaultB, alpha; // process STL header
      // check for default color in header ("COLOR=rgba" sequence).

      for (var index = 0; index < 80 - 10; index++) {
        if (reader.getUint32(index, false) == 0x434f4c4f
        /*COLO*/
        && reader.getUint8(index + 4) == 0x52
        /*'R'*/
        && reader.getUint8(index + 5) == 0x3d
        /*'='*/
        ) {
            hasColors = true;
            colors = [];
            defaultR = reader.getUint8(index + 6) / 255;
            defaultG = reader.getUint8(index + 7) / 255;
            defaultB = reader.getUint8(index + 8) / 255;
            alpha = reader.getUint8(index + 9) / 255;
          }
      }

      var dataOffset = 84;
      var faceLength = 12 * 4 + 2;
      var geometry = new three__WEBPACK_IMPORTED_MODULE_0__["BufferGeometry"]();
      var vertices = [];
      var normals = [];

      for (var face = 0; face < faces; face++) {
        var start = dataOffset + face * faceLength;
        var normalX = reader.getFloat32(start, true);
        var normalY = reader.getFloat32(start + 4, true);
        var normalZ = reader.getFloat32(start + 8, true);

        if (hasColors) {
          var packedColor = reader.getUint16(start + 48, true);

          if ((packedColor & 0x8000) === 0) {
            // facet has its own unique color
            r = (packedColor & 0x1f) / 31;
            g = (packedColor >> 5 & 0x1f) / 31;
            b = (packedColor >> 10 & 0x1f) / 31;
          } else {
            r = defaultR;
            g = defaultG;
            b = defaultB;
          }
        }

        for (var i = 1; i <= 3; i++) {
          var vertexstart = start + i * 12;
          vertices.push(reader.getFloat32(vertexstart, true));
          vertices.push(reader.getFloat32(vertexstart + 4, true));
          vertices.push(reader.getFloat32(vertexstart + 8, true));
          normals.push(normalX, normalY, normalZ);

          if (hasColors) {
            colors.push(r, g, b);
          }
        }
      }

      geometry.addAttribute('position', new three__WEBPACK_IMPORTED_MODULE_0__["BufferAttribute"](new Float32Array(vertices), 3));
      geometry.addAttribute('normal', new three__WEBPACK_IMPORTED_MODULE_0__["BufferAttribute"](new Float32Array(normals), 3));

      if (hasColors) {
        geometry.addAttribute('color', new three__WEBPACK_IMPORTED_MODULE_0__["BufferAttribute"](new Float32Array(colors), 3));
        geometry.hasColors = true;
        geometry.alpha = alpha;
      }

      return geometry;
    }

    function parseASCII(data) {
      var geometry = new three__WEBPACK_IMPORTED_MODULE_0__["BufferGeometry"]();
      var patternFace = /facet([\s\S]*?)endfacet/g;
      var faceCounter = 0;
      var patternFloat = /[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source;
      var patternVertex = new RegExp('vertex' + patternFloat + patternFloat + patternFloat, 'g');
      var patternNormal = new RegExp('normal' + patternFloat + patternFloat + patternFloat, 'g');
      var vertices = [];
      var normals = [];
      var normal = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();
      var result;

      while ((result = patternFace.exec(data)) !== null) {
        var vertexCountPerFace = 0;
        var normalCountPerFace = 0;
        var text = result[0];

        while ((result = patternNormal.exec(text)) !== null) {
          normal.x = parseFloat(result[1]);
          normal.y = parseFloat(result[2]);
          normal.z = parseFloat(result[3]);
          normalCountPerFace++;
        }

        while ((result = patternVertex.exec(text)) !== null) {
          vertices.push(parseFloat(result[1]), parseFloat(result[2]), parseFloat(result[3]));
          normals.push(normal.x, normal.y, normal.z);
          vertexCountPerFace++;
        } // every face have to own ONE valid normal


        if (normalCountPerFace !== 1) {
          console.error("THREE.STLLoader: Something isn't right with the normal of face number " + faceCounter);
        } // each face have to own THREE valid vertices


        if (vertexCountPerFace !== 3) {
          console.error("THREE.STLLoader: Something isn't right with the vertices of face number " + faceCounter);
        }

        faceCounter++;
      }

      geometry.addAttribute('position', new three__WEBPACK_IMPORTED_MODULE_0__["Float32BufferAttribute"](vertices, 3));
      geometry.addAttribute('normal', new three__WEBPACK_IMPORTED_MODULE_0__["Float32BufferAttribute"](normals, 3));
      return geometry;
    }

    function ensureString(buffer) {
      if (typeof buffer !== 'string') {
        return three__WEBPACK_IMPORTED_MODULE_0__["LoaderUtils"].decodeText(new Uint8Array(buffer));
      }

      return buffer;
    }

    function ensureBinary(buffer) {
      if (typeof buffer === 'string') {
        var array_buffer = new Uint8Array(buffer.length);

        for (var i = 0; i < buffer.length; i++) {
          array_buffer[i] = buffer.charCodeAt(i) & 0xff; // implicitly assumes little-endian
        }

        return array_buffer.buffer || array_buffer;
      } else {
        return buffer;
      }
    } // start


    var binData = ensureBinary(data);
    return isBinary(binData) ? parseBinary(binData) : parseASCII(ensureString(data));
  }
};


/***/ }),

/***/ "./src/loaders/stl/stl.js":
/*!********************************!*\
  !*** ./src/loaders/stl/stl.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return STL; });
/* harmony import */ var _STLLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./STLLoader.js */ "./src/loaders/stl/STLLoader.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config.js */ "./src/config.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var STL =
/*#__PURE__*/
function () {
  function STL(app) {
    _classCallCheck(this, STL);

    this.self = app;
    this.loader = new _STLLoader_js__WEBPACK_IMPORTED_MODULE_0__["STLLoader"]();
  }

  _createClass(STL, [{
    key: "load",
    value: function load(path) {
      var _this = this;

      return new Promise(function (res) {
        _this.loader.load(path, function (obj) {
          var material = new three__WEBPACK_IMPORTED_MODULE_2__["MeshPhongMaterial"]({
            color: 0xff5533,
            specular: 0x111111,
            shininess: 200
          });
          var mesh = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](obj, material);
          mesh.position.set(0, 0, 0);
          mesh.rotation.set(-Math.PI / 2, 0, 0);
          mesh.scale.set(_config_js__WEBPACK_IMPORTED_MODULE_1__["default"].obj.globalScale, _config_js__WEBPACK_IMPORTED_MODULE_1__["default"].obj.globalScale, _config_js__WEBPACK_IMPORTED_MODULE_1__["default"].obj.globalScale);

          _this.self.setCastShadowAndReceiveShadow(obj);

          mesh.castShadow = true;
          mesh.receiveShadow = true;

          _this.self.scene.add(mesh);

          res(mesh);
        });
      });
    }
  }]);

  return STL;
}();



/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_BaseThree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/BaseThree */ "./src/core/BaseThree.js");
/* harmony import */ var _utils_detector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/detector */ "./src/utils/detector.js");
/* harmony import */ var throttle_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! throttle-debounce */ "./node_modules/throttle-debounce/dist/index.esm.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/config.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



 // 全局配置



var Main =
/*#__PURE__*/
function (_BaseThree) {
  _inherits(Main, _BaseThree);

  function Main(container) {
    var _this;

    _classCallCheck(this, Main);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Main).call(this, container));

    _this.initEvent();

    _this.loadAllObjs();

    _this.timer = null; // 区分单击和双击事件的关键

    return _this;
  }

  _createClass(Main, [{
    key: "showObjInfo",
    value: function showObjInfo(event) {
      var _this2 = this;

      var targetObj = this.getFirstIntersectObj(event);

      if (targetObj && (this.canShowInfoPanel(targetObj.object.name) || this.canShowInfoPanel(targetObj.object.parent.name))) {
        if (this.timer) {
          return;
        } else {
          this.timer = setTimeout(function () {
            layer.open({
              content: "\u4F60\u9009\u4E2D\u4E86\uFF1A".concat(targetObj.object.parent.name || targetObj.object.name),
              title: '物品信息',
              offset: 'rt',
              // offset: position,
              // time: 1000, // 自动关闭
              anim: 1,
              // 不使用进入动画
              // isOutAnim: false, // 不使用关闭动画
              shade: 0,
              // 不使用遮罩
              end: function end() {
                return _this2.timer = null;
              }
            });
          }, 200);
        }
      }
    }
  }, {
    key: "enterObj",
    value: function enterObj(event) {
      var _this3 = this;

      clearTimeout(this.timer);
      this.timer = null;
      var targetObj = this.getFirstIntersectObj(event);
      var targetObjName = targetObj && targetObj.object.parent.userData.childName;

      if (targetObj && this.canLoadChild(targetObjName)) {
        this.hideOrShowAllObj(false); // 已加载过

        if (window.__HMF__[targetObjName]) {
          window.__HMF__[targetObjName].visible = true;
          var parentRoute = this.router.getLastChild();

          if (parentRoute) {
            this.router.push({
              current: _config__WEBPACK_IMPORTED_MODULE_3__["default"].obj[targetObjName].level,
              parent: parentRoute.current
            });
          }
        } else {
          // 首次加载
          this.togglerLoading({
            show: true
          });
          this.loadObj(_config__WEBPACK_IMPORTED_MODULE_3__["default"].obj[targetObjName]).then(function (obj) {
            _this3.togglerLoading();

            obj.userData.childName = _config__WEBPACK_IMPORTED_MODULE_3__["default"].obj[targetObjName].childName;
            obj.userData.level = _config__WEBPACK_IMPORTED_MODULE_3__["default"].obj[targetObjName].level;

            _this3.modifyEnviroment({
              cameraPosition: [150, 150, 500],
              ambientLightColor: 0xe6e6e6
            });

            var parentRoute = _this3.router.getLastChild();

            if (parentRoute) {
              _this3.router.push({
                current: _config__WEBPACK_IMPORTED_MODULE_3__["default"].obj[targetObjName].level,
                parent: parentRoute.current
              });
            }
          });
        }
      }
    }
  }, {
    key: "initEvent",
    value: function initEvent() {
      var _this4 = this;

      window.addEventListener('dblclick', this.enterObj.bind(this), false); // 双击进入选中物体

      window.addEventListener('click', this.showObjInfo.bind(this), false); // 单击选中物体

      window.addEventListener('mouseup', function (event) {
        if (event.which === 2) {
          // 中击事件,即点击鼠标滚轮
          var popRoute = _this4.router.pop();

          popRoute && _this4.showObjByLevel(popRoute.parent);
          popRoute.parent === 'one' && _this4.modifyEnviroment({
            reset: true
          });
        }
      }, false);
    }
  }, {
    key: "loadAllObjs",
    value: function loadAllObjs() {
      var _this5 = this;

      // 1、加载主建筑 - building(普通住房)
      this.loadObj(_config__WEBPACK_IMPORTED_MODULE_3__["default"].obj.group_build_out_1).then(function (obj) {
        obj.position.set(-138, -400, 148.5);
        var position = [-138, 0, 148.5];

        _this5.positionAnimate(obj, position, 0);

        obj.name = "building_1";
        obj.userData.childName = _config__WEBPACK_IMPORTED_MODULE_3__["default"].obj.group_build_out_1.childName; // 左下角建筑物群

        for (var index = 1; index < 4; index++) {
          var cloneObj = obj.clone();
          cloneObj.name = "building_".concat(index + 1);
          cloneObj.position.set(-138 + index * 40, -400, 148.5);
          var _position = [-138 + index * 40, 0, 148.5];

          _this5.positionAnimate(cloneObj, _position, index);

          _this5.scene.add(cloneObj);
        }

        for (var _index = 4; _index < 9; _index++) {
          var _cloneObj = obj.clone();

          _cloneObj.name = "building_".concat(_index + 1);

          _cloneObj.position.set(-218 + (_index - 3) * 40, 0, 108.5);

          _cloneObj.position.set(-218 + (_index - 3) * 40, -400, 108.5);

          var _position2 = [-218 + (_index - 3) * 40, 0, 108.5];

          _this5.positionAnimate(_cloneObj, _position2, _index);

          _this5.scene.add(_cloneObj);
        } // 右上角建筑物群


        for (var _index2 = 9; _index2 < 14; _index2++) {
          var _cloneObj2 = obj.clone();

          _cloneObj2.name = "building_".concat(_index2 + 1);

          _cloneObj2.position.set((_index2 - 9) * 42, -400, 0);

          var _position3 = [(_index2 - 9) * 42, 0, 0];

          _this5.positionAnimate(_cloneObj2, _position3, _index2);

          _this5.scene.add(_cloneObj2);
        }

        for (var _index3 = 14; _index3 < 18; _index3++) {
          var _cloneObj3 = obj.clone();

          _cloneObj3.name = "building_".concat(_index3 + 1);

          _cloneObj3.position.set((_index3 - 14) * 42, -400, -55);

          var _position4 = [(_index3 - 14) * 42, 0, -55];

          _this5.positionAnimate(_cloneObj3, _position4, _index3);

          _this5.scene.add(_cloneObj3);
        }

        for (var _index4 = 18; _index4 < 21; _index4++) {
          var _cloneObj4 = obj.clone();

          _cloneObj4.name = "building_".concat(_index4 + 1);

          _cloneObj4.position.set((_index4 - 18) * 42 + 42, -400, -110);

          var _position5 = [(_index4 - 18) * 42 + 42, 0, -110];

          _this5.positionAnimate(_cloneObj4, _position5, _index4);

          _this5.scene.add(_cloneObj4);
        }

        for (var _index5 = 21; _index5 < 27; _index5++) {
          var _cloneObj5 = obj.clone();

          _cloneObj5.name = "building_".concat(_index5 + 1);

          _cloneObj5.position.set((_index5 - 21) * 31 - 30, -400, -156);

          var _position6 = [(_index5 - 21) * 31 - 30, 0, -156];

          _this5.positionAnimate(_cloneObj5, _position6, _index5);

          _this5.scene.add(_cloneObj5);
        }
      }); // 2、加载地面

      this.loadObj(_config__WEBPACK_IMPORTED_MODULE_3__["default"].obj.group_road_1).then(function (obj) {
        _this5.showMessage();

        _this5.togglerLoading();

        _config__WEBPACK_IMPORTED_MODULE_3__["default"].isDev && _this5.initGUI(obj);

        _this5.setCastShadowAndReceiveShadow(obj);
      }); // 3、加载主建筑 - vally(别墅)

      this.loadObj(_config__WEBPACK_IMPORTED_MODULE_3__["default"].obj.group_villa_1).then(function (obj) {
        obj.name = 'villa_1';
        obj.position.set(87, 1400, 105);
        var position = [87, 0, 105];

        _this5.positionAnimate(obj, position, 0); // 右下角建筑物群


        for (var index = 1; index < 3; index++) {
          var cloneObj = obj.clone();
          cloneObj.name = "villa_".concat(index + 1);
          obj.position.set(85 + index * 30, 1400, 105);
          var _position7 = [85 + index * 30, 0, 105];

          _this5.positionAnimate(cloneObj, _position7, index);

          _this5.scene.add(cloneObj);
        }

        for (var _index6 = 3; _index6 < 5; _index6++) {
          var _cloneObj6 = obj.clone();

          _cloneObj6.name = "villa_".concat(_index6 + 1);

          _cloneObj6.rotation.set(0, -Math.PI / 2, 0);

          obj.position.set(104.5 + (_index6 - 3) * 35.5, 1400, 70);
          var _position8 = [104.5 + (_index6 - 3) * 35.5, 0, 70];

          _this5.positionAnimate(_cloneObj6, _position8, _index6);

          _this5.scene.add(_cloneObj6);
        }
      }); // 4、加载周边商铺

      this.loadObj(_config__WEBPACK_IMPORTED_MODULE_3__["default"].obj.group_shop_1).then(function (obj) {
        obj.scale.set(100, 100, 100);
        var scale = [_config__WEBPACK_IMPORTED_MODULE_3__["default"].obj.globalScale, _config__WEBPACK_IMPORTED_MODULE_3__["default"].obj.globalScale, _config__WEBPACK_IMPORTED_MODULE_3__["default"].obj.globalScale];

        _this5.scaleAnimate(obj, scale, 1);
      }); // 5、加载停车仪

      this.loadObj(_config__WEBPACK_IMPORTED_MODULE_3__["default"].obj.group_parking_1).then(function (obj) {
        obj.position.set(181.5, 0, -161);
      }); // 6、加载车辆出入门禁-正方向门禁,有动画"

      this.loadFbx(_config__WEBPACK_IMPORTED_MODULE_3__["default"].obj.group_barrier_gate_fbx).then(function (obj) {
        obj.name = '';
        obj.children[1].name = 'barrier_gate_out_1';
        obj.children[4].name = 'barrier_gate_in_1';
        obj.position.set(24, 5, 188);
      }); // 7、加载车辆出入门禁-正方向门禁，无动画

      this.loadObj(_config__WEBPACK_IMPORTED_MODULE_3__["default"].obj.group_barrier_gate_obj).then(function (obj) {
        // 右边
        obj.children[3].name = 'barrier_gate_out_2';
        obj.children[4].name = 'barrier_gate_in_2';
        obj.position.set(216, 0, -40);
        obj.rotation.set(0, Math.PI / 2, 0); // 左上

        var cloneObj = obj.clone();
        cloneObj.children[3].name = 'barrier_gate_out_3';
        cloneObj.children[4].name = 'barrier_gate_in_3';
        cloneObj.position.set(-60, 0, -120);
        cloneObj.rotation.set(0, -Math.PI / 2, 0);

        _this5.scene.add(cloneObj); // 左下


        var cloneObj2 = obj.clone();
        cloneObj2.children[3].name = 'barrier_gate_out_5';
        cloneObj2.children[4].name = 'barrier_gate_in_5';
        cloneObj2.position.set(-208, 0, 66);
        cloneObj2.scale.set(0.22, 0.22, 0.22);
        cloneObj2.rotation.set(0, -Math.PI / 2, 0);

        _this5.scene.add(cloneObj2);
      }); // 8、加载充电桩

      this.loadObj(_config__WEBPACK_IMPORTED_MODULE_3__["default"].obj.group_charging_pile_1).then(function (obj) {
        obj.position.set(192, 0, -80);

        for (var index = 1; index < 19; index++) {
          var cloneObj = obj.clone();
          cloneObj.name = "charging_pile_".concat(index + 1);
          cloneObj.position.set(192, 0, -80 - index * 3);

          _this5.scene.add(cloneObj);
        }
      }); // 9、加载水池

      this.loadObj(_config__WEBPACK_IMPORTED_MODULE_3__["default"].obj.water_obj).then(function (obj) {
        obj.position.set(-160, 0, 10);
      });
    }
  }]);

  return Main;
}(_core_BaseThree__WEBPACK_IMPORTED_MODULE_0__["default"]);

function init() {
  if (!_utils_detector__WEBPACK_IMPORTED_MODULE_1__["default"].webgl) {
    alert('您的浏览器不支持 WebGL,请使用最新版本的 Chrome 浏览器');
  } else {
    window.devicePixelRatio && (_config__WEBPACK_IMPORTED_MODULE_3__["default"].dpr = window.devicePixelRatio);
    new Main(document.getElementById('appContainer'));
  }
}

init();

/***/ }),

/***/ "./src/utils/datGUI.js":
/*!*****************************!*\
  !*** ./src/utils/datGUI.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DatGUI; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/config.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

 // Manages all dat.GUI interactions

var DatGUI = function DatGUI(main, mesh) {
  var _this = this;

  _classCallCheck(this, DatGUI);

  var gui = new dat.GUI();
  this.camera = main.camera.threeCamera;
  this.controls = main.threeControls;
  this.light = main.light;
  var build = main.scene.getObjectByName('building_1');
  mesh = build;
  /* Camera */

  var cameraFolder = gui.addFolder('Camera');
  var cameraFOVGui = cameraFolder.add(_config__WEBPACK_IMPORTED_MODULE_0__["default"].camera, 'fov', 0, 180).name('Camera FOV');
  cameraFOVGui.onChange(function (value) {
    _this.controls.enableRotate = false;
    _this.camera.fov = value;
  });
  cameraFOVGui.onFinishChange(function () {
    _this.camera.updateProjectionMatrix();

    _this.controls.enableRotate = true;
  });
  var cameraAspectGui = cameraFolder.add(_config__WEBPACK_IMPORTED_MODULE_0__["default"].camera, 'aspect', 0, 4).name('Camera Aspect');
  cameraAspectGui.onChange(function (value) {
    _this.controls.enableRotate = false;
    _this.camera.aspect = value;
  });
  cameraAspectGui.onFinishChange(function () {
    _this.camera.updateProjectionMatrix();

    _this.controls.enableRotate = true;
  });
  var cameraFogColorGui = cameraFolder.addColor(_config__WEBPACK_IMPORTED_MODULE_0__["default"].fog, 'color').name('Fog Color');
  cameraFogColorGui.onChange(function (value) {
    main.scene.fog.color.setHex(value);
  });
  var cameraFogNearGui = cameraFolder.add(_config__WEBPACK_IMPORTED_MODULE_0__["default"].fog, 'near', 0.0, 0.01).name('Fog Near');
  cameraFogNearGui.onChange(function (value) {
    _this.controls.enableRotate = false;
    main.scene.fog.density = value;
  });
  cameraFogNearGui.onFinishChange(function () {
    _this.controls.enableRotate = true;
  });
  /* Controls */

  var controlsFolder = gui.addFolder('Controls');
  controlsFolder.add(_config__WEBPACK_IMPORTED_MODULE_0__["default"].controls, 'autoRotate').name('Auto Rotate').onChange(function (value) {
    _this.controls.autoRotate = value;
  });
  var controlsAutoRotateSpeedGui = controlsFolder.add(_config__WEBPACK_IMPORTED_MODULE_0__["default"].controls, 'autoRotateSpeed', -1, 1).name('Rotation Speed');
  controlsAutoRotateSpeedGui.onChange(function (value) {
    _this.controls.enableRotate = false;
    _this.controls.autoRotateSpeed = value;
  });
  controlsAutoRotateSpeedGui.onFinishChange(function () {
    _this.controls.enableRotate = true;
  });
  /* Lights */
  // Ambient Light

  var ambientLightFolder = gui.addFolder('Ambient Light');
  ambientLightFolder.add(_config__WEBPACK_IMPORTED_MODULE_0__["default"].ambientLight, 'enabled').name('Enabled').onChange(function (value) {
    _this.light.ambientLight.visible = value;
  });
  ambientLightFolder.addColor(_config__WEBPACK_IMPORTED_MODULE_0__["default"].ambientLight, 'color').name('Color').onChange(function (value) {
    _this.light.ambientLight.color.setHex(value);
  });
  var spotLightFolder = gui.addFolder('Spot Light');
  spotLightFolder.add(_config__WEBPACK_IMPORTED_MODULE_0__["default"].spotLight, 'enabled').name('Enabled').onChange(function (value) {
    _this.light.spotLight.visible = value;
  });
  spotLightFolder.addColor(_config__WEBPACK_IMPORTED_MODULE_0__["default"].spotLight, 'color').name('Color').onChange(function (value) {
    _this.light.spotLight.color.setHex(value);
  });
  spotLightFolder.add(_config__WEBPACK_IMPORTED_MODULE_0__["default"].spotLight, 'distance').name('distance').onChange(function (value) {
    _this.light.spotLight.distance = value;
  });
  spotLightFolder.add(_config__WEBPACK_IMPORTED_MODULE_0__["default"].spotLight, 'angle', 0, 180).name('angle').onChange(function (value) {
    _this.light.spotLight.angle = value;
  });
  spotLightFolder.add(_config__WEBPACK_IMPORTED_MODULE_0__["default"].spotLight.position, 'x', -400, 400).name('position.x').onChange(function (value) {
    _this.light.spotLight.position.x = value;
  });
  spotLightFolder.add(_config__WEBPACK_IMPORTED_MODULE_0__["default"].spotLight.position, 'y', -400, 400).name('position.y').onChange(function (value) {
    _this.light.spotLight.position.y = value;
  });
  spotLightFolder.add(_config__WEBPACK_IMPORTED_MODULE_0__["default"].spotLight.position, 'z', -400, 400).name('position.z').onChange(function (value) {
    _this.light.spotLight.position.z = value;
  });
  spotLightFolder.add(_config__WEBPACK_IMPORTED_MODULE_0__["default"].spotLight, 'helperEnabled').name('helperEnabled').onChange(function (value) {
    _this.light.spotLightHelper.visible = true;
  });
};



/***/ }),

/***/ "./src/utils/detector.js":
/*!*******************************!*\
  !*** ./src/utils/detector.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @author alteredq / http://alteredqualia.com/
 * @author mr.doob / http://mrdoob.com/
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  webgl: function () {
    try {
      var canvas = document.createElement('canvas');
      return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    } catch (e) {
      return false;
    }
  }()
});

/***/ })

},[["./src/main.js","runtime","vendors"]]]);
//# sourceMappingURL=main.js.map