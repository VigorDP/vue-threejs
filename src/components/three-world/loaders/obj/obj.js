import { MTLLoader, OBJLoader } from 'three-obj-mtl-loader'
import Config from '../../config'

export default class OBJ {
  constructor(app) {
    this.self = app
    this.objLoader = new OBJLoader() //obj加载器
    this.mtlLoader = new MTLLoader() //材质文件加载器
  }
  load(path, scale, level, childName) {
    this.mtlLoader.setTexturePath(path.substring(0, path.lastIndexOf('/') + 1))
    return new Promise(res => {
      this.mtlLoader.load(`${path}.mtl`, materials => {
        this.objLoader.setMaterials(materials)
        this.objLoader.load(
          `${path}.obj`,
          obj => {
            this.self.scene.add(obj)
            obj.scale.set(
              scale || Config.obj.globalScale,
              scale || Config.obj.globalScale,
              scale || Config.obj.globalScale
            )
            obj.userData.childName = childName
            obj.userData.level = level
            this.self.setCastShadowAndReceiveShadow(obj)
            window.__HMF__[path] = obj
            res(obj)
          },
          xhr => {
            if (xhr.lengthComputable) {
              var percentComplete = (xhr.loaded / xhr.total) * 100
              // console.log('loading...', percentComplete.toFixed(1))
            }
          }
        )
      })
    })
  }
}
