import { FBXLoader } from './FBXLoader.js'
import Config from '../../config'
import * as THREE from 'three'

export default class FBX {
  constructor(app) {
    this.self = app
    this.loader = new FBXLoader()
  }
  load(path, level) {
    return new Promise(res => {
      this.loader.load(path, obj => {
        obj.scale.set(Config.obj.globalScale, Config.obj.globalScale, Config.obj.globalScale)
        obj.userData.level = level
        this.self.setCastShadowAndReceiveShadow(obj)
        this.mixer = obj.mixer = new THREE.AnimationMixer(obj)
        this.mixer.clipAction(obj.animations[0]).play()
        this.self.scene.add(obj)
        window.__HMF__[path] = obj
        window.__HMF__[path].instance = this
        res(obj)
      })
    })
  }
  update(time) {
    this.mixer && this.mixer.update(time)
  }
}
