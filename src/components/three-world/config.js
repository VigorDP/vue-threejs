// This object contains the state of the app
export default {
  isDev: false,
  dpr: 1,
  obj: {
    globalScale: 0.2,
    // 一级场景所需物品
    layout: {
      path: '/3d/one/layout/layout',
      level: 'one'
    },
    group_shop_1: {
      path: '/3d/one/shop/shop1',
      level: 'one'
    },
    group_building_manage: {
      path: '/3d/one/building_manage/building_manage',
      level: 'one'
    },
    group_building_relic: {
      path: '/3d/one/building_relic/building_relic',
      level: 'one'
    },
    group_high_building_num7: {
      path: '/3d/one/high_building_num7/high_building_num7',
      level: 'one',
      childName: 'building'
    },
    group_high_building_num8: {
      path: '/3d/one/high_building_num8/high_building_num8',
      level: 'one',
      childName: 'building'
    },
    group_low_building1: {
      path: '/3d/one/low_building1/low_building1',
      level: 'one',
      childName: 'building'
    },
    group_low_building2: {
      path: '/3d/one/low_building2/low_building2',
      level: 'one',
      childName: 'building'
    },
    // 二级场景所需物品
    building: {
      path: '/3d/two/building_in/building_in',
      childName: 'floor',
      level: 'two',
      scale: 0.5
    },
    // 三级场景所需物品
    floor: {
      path: '/3d/three/floor/single_floor',
      level: 'three',
      scale: 2
    },
    // 不含材质的物品模型
    stl2: {
      path: '/3d/main.STL'
    }
  },
  fog: {
    color: 0xffffff,
    near: 0.0008
  },
  camera: {
    fov: 40,
    near: 0.1,
    far: 1000,
    aspect: 1,
    posX: 0,
    posY: 100,
    posZ: 500
  },
  controls: {
    autoRotate: false,
    autoRotateSpeed: -0.5,
    rotateSpeed: 0.5,
    zoomSpeed: 0.8,
    minDistance: 10,
    maxDistance: 600,
    minPolarAngle: Math.PI / 5,
    maxPolarAngle: Math.PI / 2,
    minAzimuthAngle: -Infinity,
    maxAzimuthAngle: Infinity,
    enableDamping: true,
    dampingFactor: 0.5,
    enableZoom: true,
    target: {
      x: 0,
      y: 0,
      z: 0
    }
  },
  ambientLight: {
    enabled: true,
    color: 0x412e2e
  },
  spotLight: {
    enabled: true,
    helperEnabled: false,
    color: 0xffffff,
    indensity: 2,
    position: {
      x: 0,
      y: 400,
      z: -400
    },
    angle: 104.05,
    penumbra: 0.05,
    decay: 2,
    distance: 100000000
  }
}
