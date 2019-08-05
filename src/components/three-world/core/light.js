import * as THREE from 'three'

import Config from '../config'

// Sets up and places all lights in scene
export default class Light {
  constructor(scene) {
    this.scene = scene
    this.init()
  }

  init() {
    // Ambient
    this.ambientLight = new THREE.AmbientLight(Config.ambientLight.color)
    this.ambientLight.visible = Config.ambientLight.enabled

    // SpotLight
    const {
      spotLight: {
        color,
        indensity,
        position: { x, y, z },
        angle,
        distance,
        enabled,
        helperEnabled,
        penumbra
      }
    } = Config
    this.spotLight = new THREE.SpotLight(color, indensity)
    this.spotLight.position.set(x, y, z)
    this.spotLight.angle = angle
    this.spotLight.penumbra = penumbra
    this.spotLight.decay = 2
    this.spotLight.distance = distance
    this.spotLight.castShadow = enabled
    this.spotLightHelper = new THREE.SpotLightHelper(this.spotLight)
    this.spotLightHelper.visible = helperEnabled
  }

  place(lightName) {
    switch (lightName) {
      case 'ambient':
        this.scene.add(this.ambientLight)
        break
      case 'spot':
        this.scene.add(this.spotLight)
        this.scene.add(this.spotLightHelper)
        break
    }
  }
}
