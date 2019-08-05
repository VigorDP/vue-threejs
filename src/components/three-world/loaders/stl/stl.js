import { STLLoader } from './STLLoader.js'
import Config from '../../config.js'
import * as THREE from 'three'

export default class STL {
  constructor(app) {
    this.self = app
    this.loader = new STLLoader()
  }
  load(path) {
    return new Promise(res => {
      this.loader.load(path, obj => {
        var material = new THREE.MeshPhongMaterial({
          color: 0xff5533,
          specular: 0x111111,
          shininess: 200
        })
        var mesh = new THREE.Mesh(obj, material)

        mesh.position.set(0, 0, 0)
        mesh.rotation.set(-Math.PI / 2, 0, 0)
        mesh.scale.set(Config.obj.globalScale, Config.obj.globalScale, Config.obj.globalScale)
        this.self.setCastShadowAndReceiveShadow(obj)
        mesh.castShadow = true
        mesh.receiveShadow = true
        this.self.scene.add(mesh)
        res(mesh)
      })
    })
  }
}
