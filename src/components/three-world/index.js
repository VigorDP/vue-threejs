import BaseThree from './core/BaseThree'
import Detector from './utils/detector'
import { Modal } from 'ant-design-vue'
import emitter from '../../common/event-emitter'
// 全局配置
import Config from './config'

export default class Main extends BaseThree {
  constructor(container) {
    super(container)
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
    console.log('object', targetObj.object.name)
    if (
      targetObj &&
      (this.canShowInfoPanel(targetObj.object.name) || this.canShowInfoPanel(targetObj.object.parent.name))
    ) {
      if (this.timer) {
        return
      } else {
        this.timer = setTimeout(() => {
          const position = this.getLocalPosition(targetObj.point)
          emitter.emit('show-building', targetObj.object, position)
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
          obj.visible = true
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
    window.addEventListener('mousemove', this.showObjInfo.bind(this), false) // 单击选中物体
    window.addEventListener(
      'mouseup',
      event => {
        if (event.which === 2) {
          // 中击事件,即点击鼠标滚轮
          const popRoute = this.router.pop()
          popRoute && this.showObjByLevel(popRoute.parent)
          emitter.emit('hide-all-infoPanel')
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

    emitter.on('target', args => {
      this.goTo(args)
    })
  }

  loadAllObjs() {
    // this.initGUI()

    // 1、加载布局
    this.loadObj(Config.obj.layout).then(async obj => {
      obj.position.set(0, 0, 0)
      // house1 测试
      const obj2 = await this.loadObj(Config.obj.house1)
      obj2.position.set(9, 0, -90)
      // const position = [9, 0, -90]
      // this.positionAnimate(obj2, position, 0)
      obj2.name = `building_manage`

      // 2、加载物业服务中心
      // const obj2 = await this.loadObj(Config.obj.group_building_manage)
      // obj2.position.set(0, -400, 0)
      // const position = [9, 0, -90]
      // this.positionAnimate(obj2, position, 0)
      // obj2.name = `building_manage`
      // 3、加载建筑-红色矮
      const obj3 = await this.loadObj(Config.obj.group_building_relic)
      obj3.position.set(13, 0, -40)
      // const position3 = [13, 0, -40]
      // this.positionAnimate(obj3, position3, 0)
      obj3.name = `building_relic`
      // // 4、加载建筑 - 白色高1(最右边)
      const obj4 = await this.loadObj(Config.obj.group_high_building_num7)
      obj4.position.set(78, -0, -40)
      // const position4 = [78, 0, -40]
      // this.positionAnimate(obj4, position4, 0)
      obj4.name = `building_high_1`
      // 5、加载建筑-白色高2
      const obj5 = await this.loadObj(Config.obj.group_high_building_num8)
      obj5.position.set(40, -0, 50)
      // const position5 = [40, 0, 50]
      // this.positionAnimate(obj5, position5, 0)
      obj5.name = `building_high_2`
      // 6、加载建筑-红色高1
      const obj6 = await this.loadObj(Config.obj.group_low_building1)
      obj6.position.set(-180, -0, 50)
      // const position7 = [-180, 0, 50]
      // this.positionAnimate(obj6, position7, 0)
      obj6.name = `building_low_1`
      // 左下角建筑物群
      for (let index = 1; index < 3; index++) {
        const cloneObj = obj6.clone()
        cloneObj.name = `building_low_${index + 1}`
        cloneObj.position.set(-180, -0, 50 - index * 70)
        // const position8 = [-180, 0, 50 - index * 70]
        // this.positionAnimate(cloneObj, position8, index)
        this.scene.add(cloneObj)
      }
      // 7、加载建筑-红色高2
      const obj7 = await this.loadObj(Config.obj.group_low_building2)
      obj7.position.set(-80, -0, 50)
      // const position9 = [-80, 0, 50]
      // this.positionAnimate(obj7, position9, 0)
      obj7.name = `building_low_4`
      for (let index = 1; index < 3; index++) {
        const cloneObj = obj7.clone()
        cloneObj.name = `building_low_${index + 1 + 3}`
        cloneObj.position.set(-80, -0, 50 - index * 70)
        // const position10 = [-80, 0, 50 - index * 70]
        // this.positionAnimate(cloneObj, position10, index)
        this.scene.add(cloneObj)
      }

      // 8、加载建筑-红色高2
      const obj8 = await this.loadObj(Config.obj.barrier2)
      obj8.position.set(80, -0, -100)
      obj8.name = `barrier`

      // 9、加载停车场
      const obj9 = await this.loadObj(Config.obj.camera)
      obj9.position.set(80, -0, -140)
      obj9.name = `barrier`

      // 初始化事件
      this.initEvent()
    })
  }

  goTo(args) {
    const { to, position } = args
    const origin = this.threeControls.target
    requestAnimationFrame(animate.bind(this))
    var x = origin.x

    function animate() {
      x += 10
      if (x >= position[0]) return
      this.threeControls.target.set(x, 0, 0)
      console.log('target', this.threeControls.target)

      requestAnimationFrame(animate.bind(this))
    }
  }
}
