import BaseThree from './core/BaseThree'
import Detector from './utils/detector'
import { Modal } from 'ant-design-vue'
import emitter from './core/event-emitter'
// 全局配置
import Config from './config'

export default class Main extends BaseThree {
  constructor(container) {
    super(container)
    this.initEvent()
    this.showWelComeMessage()
    this.loadAllObjs()
    this.timer = null // 区分单击和双击事件的关键
    if (!Detector.webgl) {
      alert('您的浏览器不支持 WebGL,请使用最新版本的 Chrome 浏览器')
    }
    Config.dpr = window.devicePixelRatio
  }

  showWelComeMessage() {
    if (window.localStorage.getItem('neverShowWelcomeMessage') !== 'true') {
      Modal.info({
        title: '交互说明',
        content: '1、单击选中物体;\n\r2、双击加载物体进入下一级;\n\r3、鼠标滚轮点击返回上一级;',
        maskClosable: true,
        okText: '知道了',
        centered: true,
        onOk: () => {
          window.localStorage.setItem('neverShowWelcomeMessage', true)
        }
      })
    }
  }

  showObjInfo(event) {
    const targetObj = this.getFirstIntersectObj(event)
    if (
      targetObj &&
      (this.canShowInfoPanel(targetObj.object.name) || this.canShowInfoPanel(targetObj.object.parent.name))
    ) {
      if (this.timer) {
        return
      } else {
        this.timer = setTimeout(() => {
          emitter.emit('show-building', targetObj.object.parent.name ? targetObj.object.parent : targetObj.object)
          this.timer = null
        }, 200)
      }
    }
  }

  enterObj(event) {
    clearTimeout(this.timer)
    this.timer = null
    emitter.emit('hide-all-infoPanel')
    const targetObj = this.getFirstIntersectObj(event)
    const targetObjName = targetObj && targetObj.object.parent.userData.childName
    if (targetObj && this.canLoadChild(targetObjName)) {
      this.hideOrShowAllObj(false)
      // 已加载过
      if (window.__HMF__[targetObjName]) {
        window.__HMF__[targetObjName].visible = true
        const parentRoute = this.router.getLastChild()
        if (parentRoute) {
          this.router.push({
            current: Config.obj[targetObjName].level,
            parent: parentRoute.current
          })
        }
      } else {
        // 首次加载
        this.loadObj(Config.obj[targetObjName]).then(obj => {
          obj.userData.childName = Config.obj[targetObjName].childName
          obj.userData.level = Config.obj[targetObjName].level
          this.modifyEnviroment({
            cameraPosition: [150, 150, 500],
            ambientLightColor: 0xe6e6e6
          })
          const parentRoute = this.router.getLastChild()
          if (parentRoute) {
            this.router.push({
              current: Config.obj[targetObjName].level,
              parent: parentRoute.current
            })
          }
        })
      }
    }
  }

  initEvent() {
    window.addEventListener('dblclick', this.enterObj.bind(this), false) // 双击进入选中物体
    window.addEventListener('click', this.showObjInfo.bind(this), false) // 单击选中物体
    window.addEventListener(
      'mouseup',
      event => {
        if (event.which === 2) {
          // 中击事件,即点击鼠标滚轮
          const popRoute = this.router.pop()
          popRoute && this.showObjByLevel(popRoute.parent)
          emitter.emit('hide-all-infoPanel')
          popRoute.parent === 'one' &&
            this.modifyEnviroment({
              reset: true
            })
        }
      },
      false
    )
  }

  loadAllObjs() {
    // 1、加载主建筑 - building(普通住房)
    this.loadObj(Config.obj.group_build_out_1).then(obj => {
      obj.position.set(-138, -400, 148.5)
      const position = [-138, 0, 148.5]
      this.positionAnimate(obj, position, 0)
      obj.name = `building_1`
      obj.userData.childName = Config.obj.group_build_out_1.childName

      // 左下角建筑物群
      for (let index = 1; index < 4; index++) {
        const cloneObj = obj.clone()
        cloneObj.name = `building_${index + 1}`
        cloneObj.position.set(-138 + index * 40, -400, 148.5)
        const position = [-138 + index * 40, 0, 148.5]
        this.positionAnimate(cloneObj, position, index)
        this.scene.add(cloneObj)
      }
      for (let index = 4; index < 9; index++) {
        const cloneObj = obj.clone()
        cloneObj.name = `building_${index + 1}`
        cloneObj.position.set(-218 + (index - 3) * 40, 0, 108.5)

        cloneObj.position.set(-218 + (index - 3) * 40, -400, 108.5)
        const position = [-218 + (index - 3) * 40, 0, 108.5]
        this.positionAnimate(cloneObj, position, index)
        this.scene.add(cloneObj)
      }

      // 右上角建筑物群
      for (let index = 9; index < 14; index++) {
        const cloneObj = obj.clone()
        cloneObj.name = `building_${index + 1}`
        cloneObj.position.set((index - 9) * 42, -400, 0)
        const position = [(index - 9) * 42, 0, 0]
        this.positionAnimate(cloneObj, position, index)
        this.scene.add(cloneObj)
      }
      for (let index = 14; index < 18; index++) {
        const cloneObj = obj.clone()
        cloneObj.name = `building_${index + 1}`
        cloneObj.position.set((index - 14) * 42, -400, -55)
        const position = [(index - 14) * 42, 0, -55]
        this.positionAnimate(cloneObj, position, index)
        this.scene.add(cloneObj)
      }
      for (let index = 18; index < 21; index++) {
        const cloneObj = obj.clone()
        cloneObj.name = `building_${index + 1}`

        cloneObj.position.set((index - 18) * 42 + 42, -400, -110)
        const position = [(index - 18) * 42 + 42, 0, -110]
        this.positionAnimate(cloneObj, position, index)
        this.scene.add(cloneObj)
      }
      for (let index = 21; index < 27; index++) {
        const cloneObj = obj.clone()
        cloneObj.name = `building_${index + 1}`
        cloneObj.position.set((index - 21) * 31 - 30, -400, -156)
        const position = [(index - 21) * 31 - 30, 0, -156]
        this.positionAnimate(cloneObj, position, index)
        this.scene.add(cloneObj)
      }
    })
    // 2、加载地面
    this.loadObj(Config.obj.group_road_1).then(obj => {
      Config.isDev && this.initGUI(obj)
      this.setCastShadowAndReceiveShadow(obj)
    })
    // 3、加载主建筑 - vally(别墅)
    this.loadObj(Config.obj.group_villa_1).then(obj => {
      obj.name = 'villa_1'
      obj.position.set(87, 1400, 105)
      const position = [87, 0, 105]
      this.positionAnimate(obj, position, 0)
      // 右下角建筑物群
      for (let index = 1; index < 3; index++) {
        const cloneObj = obj.clone()
        cloneObj.name = `villa_${index + 1}`
        obj.position.set(85 + index * 30, 1400, 105)
        const position = [85 + index * 30, 0, 105]
        this.positionAnimate(cloneObj, position, index)
        this.scene.add(cloneObj)
      }
      for (let index = 3; index < 5; index++) {
        const cloneObj = obj.clone()
        cloneObj.name = `villa_${index + 1}`
        cloneObj.rotation.set(0, -Math.PI / 2, 0)
        obj.position.set(104.5 + (index - 3) * 35.5, 1400, 70)
        const position = [104.5 + (index - 3) * 35.5, 0, 70]
        this.positionAnimate(cloneObj, position, index)
        this.scene.add(cloneObj)
      }
    })
    // 4、加载周边商铺
    this.loadObj(Config.obj.group_shop_1).then(obj => {
      obj.scale.set(100, 100, 100)
      const scale = [Config.obj.globalScale, Config.obj.globalScale, Config.obj.globalScale]
      this.scaleAnimate(obj, scale, 1)
    })
    // 5、加载停车仪
    this.loadObj(Config.obj.group_parking_1).then(obj => {
      obj.position.set(181.5, 0, -161)
    })
    // 6、加载车辆出入门禁-正方向门禁,有动画"
    this.loadFbx(Config.obj.group_barrier_gate_fbx).then(obj => {
      obj.name = 'barrier_gate'
      obj.children[1].name = 'barrier_gate_out_1'
      obj.children[4].name = 'barrier_gate_in_1'
      obj.position.set(24, 5, 188)
    })
    // 7、加载车辆出入门禁-正方向门禁，无动画
    this.loadObj(Config.obj.group_barrier_gate_obj).then(obj => {
      // 右边
      obj.children[3].name = 'barrier_gate_out_2'
      obj.children[4].name = 'barrier_gate_in_2'

      obj.position.set(216, 0, -40)
      obj.rotation.set(0, Math.PI / 2, 0)
      // 左上
      const cloneObj = obj.clone()
      cloneObj.children[3].name = 'barrier_gate_out_3'
      cloneObj.children[4].name = 'barrier_gate_in_3'
      cloneObj.position.set(-60, 0, -120)
      cloneObj.rotation.set(0, -Math.PI / 2, 0)
      this.scene.add(cloneObj)
      // 左下
      const cloneObj2 = obj.clone()
      cloneObj2.children[3].name = 'barrier_gate_out_5'
      cloneObj2.children[4].name = 'barrier_gate_in_5'
      cloneObj2.position.set(-208, 0, 66)
      cloneObj2.scale.set(0.22, 0.22, 0.22)
      cloneObj2.rotation.set(0, -Math.PI / 2, 0)
      this.scene.add(cloneObj2)
    })
    // 8、加载充电桩
    this.loadObj(Config.obj.group_charging_pile_1).then(obj => {
      obj.position.set(192, 0, -80)
      for (let index = 1; index < 19; index++) {
        const cloneObj = obj.clone()
        cloneObj.name = `charging_pile_${index + 1}`
        cloneObj.position.set(192, 0, -80 - index * 3)
        this.scene.add(cloneObj)
      }
    })
    // 9、加载水池
    this.loadObj(Config.obj.water_obj).then(obj => {
      obj.position.set(-160, 0, 10)
    })
  }
}
