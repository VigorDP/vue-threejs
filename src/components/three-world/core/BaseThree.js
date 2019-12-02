import * as THREE from 'three'
import TWEEN from 'tween.js'
import Renderer from './renderer' // 初始化渲染器(paint、shadow、resize、dpr)
import Camera from './camera' // 初始化相机(init、resize、position change)
import Light from './light' // 给场景添加光源(环境光、方向光、点光、半球光)
import OrbitControls from './orbitControls'
import { Sky } from './sky'
import Router from './router'
import FBX from '../loaders/fbx/fbx'
import STL from '../loaders/stl/stl'
import OBJ from '../loaders/obj/obj'

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass.js'

// 辅助工具类
import DatGUI from '../utils/datGUI'

// 全局配置
import Config from '../config'

const canShowObjName = [
  'building_manage', // 普通建筑物
  'building_relic', // 别墅
  'floor_common', // 楼层
  'room', //房间
  'building_high_', // 停车场
  'building_low_', // 出口道闸
  'barrier_gate_in', // 入口道闸
  'charging_pile', // 充电桩
  'camera', // 摄像头
  'access_control_machine' // 门禁
]

const canLoadChildName = [
  'building', // 普通建筑物
  'floor' // 楼层
]
process.env.VUE_APP_ENV === 'dev' && (Config.isDev = true)
export default class BaseThree {
  constructor(container) {
    this.container = container
    this.initRouter()
    this.initScene()
    this.initLight()
    this.initRenderer()
    this.initCamera()
    this.initSky()
    // this.initSTL()
    this.initControl()
    this.initRaycaster()
    this.useEffectComposer()
    Config.isDev && this.initAxis()
    Config.isDev && (this.stats = new Stats())
    this.clock = new THREE.Clock()
    this.render()
    window.__HMF__ = {} // 缓存已加载的物体
  }

  initAxis() {
    //轴辅助 （每一个轴的长度）
    var object = new THREE.AxesHelper(300)
    object.position.set(0, 0, 0)
    this.scene.add(object)
  }

  initRouter() {
    this.router = new Router()
  }

  initScene() {
    this.scene = new THREE.Scene()
    this.scene.fog = new THREE.FogExp2(Config.fog.color, Config.fog.near)
  }
  initSky() {
    // Add Sky
    const sky = new Sky()
    sky.scale.setScalar(450000)
    this.scene.add(sky)

    // Add Sun Helper
    let sunSphere
    sunSphere = new THREE.Mesh(
      new THREE.SphereBufferGeometry(20000, 16, 8),
      new THREE.MeshBasicMaterial({
        color: 0xffffff
      })
    )
    sunSphere.position.y = -700000
    sunSphere.visible = false
    this.scene.add(sunSphere)

    /// GUI
    var effectController = {
      turbidity: 10,
      rayleigh: 2,
      mieCoefficient: 0.005,
      mieDirectionalG: 0.8,
      luminance: 1,
      inclination: 0.49, // elevation / inclination
      azimuth: 0.25, // Facing front,
      sun: !true
    }

    var distance = 400000
    const that = this

    function guiChanged() {
      var uniforms = sky.material.uniforms
      uniforms['turbidity'].value = effectController.turbidity
      uniforms['rayleigh'].value = effectController.rayleigh
      uniforms['luminance'].value = effectController.luminance
      uniforms['mieCoefficient'].value = effectController.mieCoefficient
      uniforms['mieDirectionalG'].value = effectController.mieDirectionalG

      var theta = Math.PI * (effectController.inclination - 0.5)
      var phi = 2 * Math.PI * (effectController.azimuth - 0.5)

      sunSphere.position.x = distance * Math.cos(phi)
      sunSphere.position.y = distance * Math.sin(phi) * Math.sin(theta)
      sunSphere.position.z = distance * Math.sin(phi) * Math.cos(theta)

      sunSphere.visible = effectController.sun

      uniforms['sunPosition'].value.copy(sunSphere.position)

      that.renderer.render(that.scene, that.camera.threeCamera)
    }

    guiChanged()
  }

  initSTL() {
    const path = Config.obj.stl2.path
    this.stl = new STL(this.scene)
    this.stl.load(path).then(obj => console.log('object', obj))
  }

  initControl() {
    const orbitControls = new OrbitControls(THREE)
    this.threeControls = new orbitControls(this.camera.threeCamera, this.container)
    this.threeControls.target.set(Config.controls.target.x, Config.controls.target.y, Config.controls.target.z)
    this.threeControls.autoRotate = Config.controls.autoRotate
    this.threeControls.autoRotateSpeed = Config.controls.autoRotateSpeed
    this.threeControls.rotateSpeed = Config.controls.rotateSpeed
    this.threeControls.zoomSpeed = Config.controls.zoomSpeed
    this.threeControls.minDistance = Config.controls.minDistance
    this.threeControls.maxDistance = Config.controls.maxDistance
    this.threeControls.minPolarAngle = Config.controls.minPolarAngle
    this.threeControls.maxPolarAngle = Config.controls.maxPolarAngle
    this.threeControls.enableDamping = Config.controls.enableDamping
    this.threeControls.enableZoom = Config.controls.enableZoom
    this.threeControls.dampingFactor = Config.controls.dampingFactor
  }

  initCamera() {
    this.camera = new Camera(this.renderer.threeRenderer)
  }
  initRenderer() {
    this.renderer = new Renderer(this.scene, this.container)
  }
  initLight() {
    this.light = new Light(this.scene)
    const lights = ['ambient', 'spot']
    lights.forEach(light => this.light.place(light))
  }
  initRaycaster() {
    this.raycaster = new THREE.Raycaster()
  }
  loadObj(config) {
    const { path, scale, level, childName } = config
    return new OBJ(this).load(path, scale, level, childName)
  }
  loadFbx(config) {
    const { path, level } = config
    return new FBX(this).load(path, level)
  }
  hideOrShowAllObj(show, level) {
    this.scene.traverse(child => {
      if (child.type === 'Group') {
        if (show) {
          child.visible = child.userData.level === level
        } else {
          child.visible = false
        }
      }
    })
  }

  showObjByLevel(level) {
    this.hideOrShowAllObj(false)
    this.hideOrShowAllObj(true, level)
  }
  getFirstIntersectObj(event) {
    if (!event) {
      return
    }
    //通过鼠标点击的位置计算出raycaster所需要的点的位置，以屏幕中心为原点，值的范围为-1到1.
    const mouse = new THREE.Vector2()
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
    // 通过鼠标点的位置和当前相机的矩阵计算出raycaster
    this.raycaster.setFromCamera(mouse, this.camera.threeCamera)
    // 获取raycaster直线和所有模型相交的数组集合
    const obj = this.raycaster.intersectObjects(this.scene.children, true)[0]
    if (obj.object.name === 'roof') {
      this.outlinePass.selectedObjects = [obj.object.parent]
    } else {
      this.outlinePass.selectedObjects = [obj.object]
    }
    console.log('obj', obj)
    return obj
  }
  canShowInfoPanel(name) {
    return canShowObjName.some(item => name.startsWith(item))
  }
  canLoadChild(name = '') {
    return canLoadChildName.some(item => name.startsWith(item))
  }
  initGUI(obj) {
    new DatGUI(this, obj) // 初始化GUI参数控制面板
    document.body.appendChild(this.stats.domElement) // 初始化性能监控面板
  }
  //设置模型的每个部位都可以投影
  setCastShadowAndReceiveShadow(obj) {
    obj.traverse(function(child) {
      if (child.isMesh) {
        child.castShadow = true
        child.receiveShadow = true
      }
    })
  }
  getLocalPosition(point) {
    //获取到窗口的一半高度和一半宽度
    const halfWidth = window.innerWidth / 2
    const halfHeight = window.innerHeight / 2
    const vector1 = point.project(this.camera.threeCamera)
    return [vector1.x * halfWidth + halfWidth, -vector1.y * halfHeight + halfHeight]
  }
  modifyEnviroment({ cameraPosition, ambientLightColor, reset = false }) {
    if (reset) {
      this.camera.threeCamera.position.set(Config.camera.posX, Config.camera.posY, Config.camera.posZ)
      this.light.ambientLight.color.set(Config.ambientLight.color)
    } else {
      this.camera.threeCamera.position.set(...cameraPosition)
      this.light.ambientLight.color.set(ambientLightColor)
    }
  }
  positionAnimate(obj, targetPosition, i) {
    new TWEEN.Tween(obj.position)
      .to(
        {
          x: targetPosition[0],
          y: targetPosition[1],
          z: targetPosition[2]
        },
        2000
      )
      .easing(TWEEN.Easing.Quadratic.Out)
      .delay(200 * i + 1500)
      .start()
  }
  scaleAnimate(obj, targetScale, i) {
    new TWEEN.Tween(obj.scale)
      .to(
        {
          x: targetScale[0],
          y: targetScale[1],
          z: targetScale[2]
        },
        2000
      )
      .easing(TWEEN.Easing.Quadratic.Out)
      .delay(200 * i)
      .start()
  }
  useEffectComposer() {
    var composer = new EffectComposer(this.renderer.threeRenderer)
    this.composer = composer
    var renderPass = new RenderPass(this.scene, this.camera.threeCamera)
    composer.addPass(renderPass)

    var outlinePass = new OutlinePass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      this.scene,
      this.camera.threeCamera
    )
    outlinePass.visibleEdgeColor.set('#b8d2eb')
    outlinePass.hiddenEdgeColor.set('#ebd4cd')
    outlinePass.edgeStrength = 5
    outlinePass.edgeGlow = 1
    outlinePass.edgeThickness = 3
    outlinePass.pulsePeriod = 0
    this.outlinePass = outlinePass
    composer.addPass(outlinePass)
  }
  render() {
    var time = this.clock.getDelta()
    for (const key in window.__HMF__) {
      if (window.__HMF__.hasOwnProperty(key)) {
        const element = window.__HMF__[key]
        element.instance && element.instance.update(time)
      }
    }
    TWEEN.update()
    Config.isDev && this.threeControls.update()
    Config.isDev && this.stats.update()
    this.renderer.render(this.scene, this.camera.threeCamera)
    this.composer.render()
    requestAnimationFrame(this.render.bind(this))
  }
}
