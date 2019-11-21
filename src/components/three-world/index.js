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
  }

  loadAllObjs() {
    // 1、加载布局
    this.loadObj(Config.obj.layout).then(obj => {
      obj.position.set(0, -400, 0)
      const position = [13, 0, 0]
      this.positionAnimate(obj, position, 0)
    })
    // 2、加载物业服务中心
    this.loadObj(Config.obj.group_building_manage).then(obj => {
      const position = [9, 0, -90]
      this.positionAnimate(obj, position, 0)
      obj.name = `building_manage`
    })
    // 3、加载建筑-红色矮
    this.loadObj(Config.obj.group_building_relic).then(obj => {
      obj.position.set(0, -400, 0)
      const position = [13, 0, -40]
      this.positionAnimate(obj, position, 0)
      obj.name = `building_relic`
    })
    // 4、加载建筑 - 白色高1(最右边)
    this.loadObj(Config.obj.group_high_building_num7).then(obj => {
      obj.position.set(78, -400, -40)
      const position = [78, 0, -40]
      this.positionAnimate(obj, position, 0)
      obj.name = `building_high_1`
    })
    // 5、加载建筑-白色高2
    this.loadObj(Config.obj.group_high_building_num8).then(obj => {
      obj.position.set(40, -400, 50)
      const position = [40, 0, 50]
      this.positionAnimate(obj, position, 0)
      obj.name = `building_high_2`
    })
    // 6、加载建筑-红色高1
    this.loadObj(Config.obj.group_low_building1).then(obj => {
      obj.position.set(-180, -400, 50)
      const position = [-180, 0, 50]
      this.positionAnimate(obj, position, 0)
      obj.name = `building_low_1`

      // 左下角建筑物群
      for (let index = 1; index < 3; index++) {
        const cloneObj = obj.clone()
        cloneObj.name = `building_low_${index + 1}`
        cloneObj.position.set(-180, -400, 50 - index * 70)
        const position = [-180, 0, 50 - index * 70]
        this.positionAnimate(cloneObj, position, index)
        this.scene.add(cloneObj)
      }
    })
    // 7、加载建筑-红色高2
    this.loadObj(Config.obj.group_low_building2).then(obj => {
      obj.position.set(-80, -400, 50)
      const position = [-80, 0, 50]
      this.positionAnimate(obj, position, 0)
      obj.name = `building_low_4`
      for (let index = 1; index < 3; index++) {
        const cloneObj = obj.clone()
        cloneObj.name = `building_low_${index + 1 + 3}`
        cloneObj.position.set(-80, -400, 50 - index * 70)
        const position = [-80, 0, 50 - index * 70]
        this.positionAnimate(cloneObj, position, index)
        this.scene.add(cloneObj)
      }
    })
  }
}
