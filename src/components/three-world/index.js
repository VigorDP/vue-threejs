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
          emitter.emit('show-building', targetObj.object)
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
      if (window.__HMF__[Config.obj[targetObjName].path]) {
        window.__HMF__[Config.obj[targetObjName].path].visible = true
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
    // iframe 通信用的 message 事件，由 postMessage 触发
    window.addEventListener('message', function(e) {
      if (e.origin === 'http://localhost:4300') {
        console.log(e.data)
      }
    })
  }

  loadAllObjs() {
    // this.initGUI()

    // 1、加载布局
    this.loadObj(Config.obj.layout).then(async obj => {
      obj.position.set(0, 0, 0)
      this.camera.threeCamera.lookAt(1, 0, 0)
      // house1 测试
      const obj2 = await this.loadObj(Config.obj.house1)
      obj2.position.set(0, -400, 0)
      const position = [9, 0, -90]
      this.positionAnimate(obj2, position, 0)
      obj2.name = `building_manage`

      // // 2、加载物业服务中心
      // const obj2 = await this.loadObj(Config.obj.group_building_manage)
      // obj2.position.set(0, -400, 0)
      // const position = [9, 0, -90]
      // this.positionAnimate(obj2, position, 0)
      // obj2.name = `building_manage`
      // 3、加载建筑-红色矮
      const obj3 = await this.loadObj(Config.obj.group_building_relic)
      obj3.position.set(0, -400, 0)
      const position3 = [13, 0, -40]
      this.positionAnimate(obj3, position3, 0)
      obj3.name = `building_relic`
      // 4、加载建筑 - 白色高1(最右边)
      const obj4 = await this.loadObj(Config.obj.group_high_building_num7)
      obj4.position.set(78, -400, -40)
      const position4 = [78, 0, -40]
      this.positionAnimate(obj4, position4, 0)
      obj4.name = `building_high_1`
      // 5、加载建筑-白色高2
      const obj5 = await this.loadObj(Config.obj.group_high_building_num8)
      obj5.position.set(40, -400, 50)
      const position5 = [40, 0, 50]
      this.positionAnimate(obj5, position5, 0)
      obj5.name = `building_high_2`
      // 6、加载建筑-红色高1
      const obj6 = await this.loadObj(Config.obj.group_low_building1)
      obj6.position.set(-180, -400, 50)
      const position7 = [-180, 0, 50]
      this.positionAnimate(obj6, position7, 0)
      obj6.name = `building_low_1`
      // 左下角建筑物群
      for (let index = 1; index < 3; index++) {
        const cloneObj = obj6.clone()
        cloneObj.name = `building_low_${index + 1}`
        cloneObj.position.set(-180, -400, 50 - index * 70)
        const position8 = [-180, 0, 50 - index * 70]
        this.positionAnimate(cloneObj, position8, index)
        this.scene.add(cloneObj)
      }
      // 7、加载建筑-红色高2
      const obj7 = await this.loadObj(Config.obj.group_low_building2)
      obj7.position.set(-80, -400, 50)
      const position9 = [-80, 0, 50]
      this.positionAnimate(obj7, position9, 0)
      obj7.name = `building_low_4`
      for (let index = 1; index < 3; index++) {
        const cloneObj = obj7.clone()
        cloneObj.name = `building_low_${index + 1 + 3}`
        cloneObj.position.set(-80, -400, 50 - index * 70)
        const position10 = [-80, 0, 50 - index * 70]
        this.positionAnimate(cloneObj, position10, index)
        this.scene.add(cloneObj)
      }
    })
  }
}
