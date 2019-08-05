import Config from '../config'

// Manages all dat.GUI interactions
export default class DatGUI {
  constructor(main, mesh) {
    const gui = new dat.GUI()

    this.camera = main.camera.threeCamera
    this.controls = main.threeControls
    this.light = main.light

    const build = main.scene.getObjectByName('building_1')
    mesh = build

    /* Camera */
    const cameraFolder = gui.addFolder('Camera')
    const cameraFOVGui = cameraFolder.add(Config.camera, 'fov', 0, 180).name('Camera FOV')
    cameraFOVGui.onChange(value => {
      this.controls.enableRotate = false
      this.camera.fov = value
    })
    cameraFOVGui.onFinishChange(() => {
      this.camera.updateProjectionMatrix()
      this.controls.enableRotate = true
    })
    const cameraAspectGui = cameraFolder.add(Config.camera, 'aspect', 0, 4).name('Camera Aspect')
    cameraAspectGui.onChange(value => {
      this.controls.enableRotate = false

      this.camera.aspect = value
    })
    cameraAspectGui.onFinishChange(() => {
      this.camera.updateProjectionMatrix()

      this.controls.enableRotate = true
    })
    const cameraFogColorGui = cameraFolder.addColor(Config.fog, 'color').name('Fog Color')
    cameraFogColorGui.onChange(value => {
      main.scene.fog.color.setHex(value)
    })
    const cameraFogNearGui = cameraFolder.add(Config.fog, 'near', 0.0, 0.01).name('Fog Near')
    cameraFogNearGui.onChange(value => {
      this.controls.enableRotate = false
      main.scene.fog.density = value
    })
    cameraFogNearGui.onFinishChange(() => {
      this.controls.enableRotate = true
    })

    /* Controls */
    const controlsFolder = gui.addFolder('Controls')
    controlsFolder
      .add(Config.controls, 'autoRotate')
      .name('Auto Rotate')
      .onChange(value => {
        this.controls.autoRotate = value
      })
    const controlsAutoRotateSpeedGui = controlsFolder
      .add(Config.controls, 'autoRotateSpeed', -1, 1)
      .name('Rotation Speed')
    controlsAutoRotateSpeedGui.onChange(value => {
      this.controls.enableRotate = false
      this.controls.autoRotateSpeed = value
    })
    controlsAutoRotateSpeedGui.onFinishChange(() => {
      this.controls.enableRotate = true
    })
    /* Lights */
    // Ambient Light
    const ambientLightFolder = gui.addFolder('Ambient Light')
    ambientLightFolder
      .add(Config.ambientLight, 'enabled')
      .name('Enabled')
      .onChange(value => {
        this.light.ambientLight.visible = value
      })
    ambientLightFolder
      .addColor(Config.ambientLight, 'color')
      .name('Color')
      .onChange(value => {
        this.light.ambientLight.color.setHex(value)
      })

    const spotLightFolder = gui.addFolder('Spot Light')
    spotLightFolder
      .add(Config.spotLight, 'enabled')
      .name('Enabled')
      .onChange(value => {
        this.light.spotLight.visible = value
      })
    spotLightFolder
      .addColor(Config.spotLight, 'color')
      .name('Color')
      .onChange(value => {
        this.light.spotLight.color.setHex(value)
      })
    spotLightFolder
      .add(Config.spotLight, 'distance')
      .name('distance')
      .onChange(value => {
        this.light.spotLight.distance = value
      })

    spotLightFolder
      .add(Config.spotLight, 'angle', 0, 180)
      .name('angle')
      .onChange(value => {
        this.light.spotLight.angle = value
      })
    spotLightFolder
      .add(Config.spotLight.position, 'x', -400, 400)
      .name('position.x')
      .onChange(value => {
        this.light.spotLight.position.x = value
      })
    spotLightFolder
      .add(Config.spotLight.position, 'y', -400, 400)
      .name('position.y')
      .onChange(value => {
        this.light.spotLight.position.y = value
      })
    spotLightFolder
      .add(Config.spotLight.position, 'z', -400, 400)
      .name('position.z')
      .onChange(value => {
        this.light.spotLight.position.z = value
      })
    spotLightFolder
      .add(Config.spotLight, 'helperEnabled')
      .name('helperEnabled')
      .onChange(value => {
        this.light.spotLightHelper.visible = true
      })
  }
}
