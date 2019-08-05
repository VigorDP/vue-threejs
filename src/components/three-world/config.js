// This object contains the state of the app
export default {
  isDev: false,
  dpr: 1,
  obj: {
    globalScale: 0.2,
    // 一级场景所需物品
    group_road_1: {
      path: '/3d/one/group_road_1/group_road_1',
      level: 'one'
    },
    group_shop_1: {
      path: '/3d/one/group_shop_1/group_shop_1',
      level: 'one'
    },
    group_parking_1: {
      path: '/3d/one/group_parking_1/group_parking_1',
      level: 'one'
    },
    group_charging_pile_1: {
      path: '/3d/one/group_charging_pile_1/group_charging_pile_1',
      level: 'one'
    },
    group_build_out_1: {
      path: '/3d/one/group_build_out_1/group_build_out_1',
      level: 'one',
      childName: 'building'
    },
    group_villa_1: {
      path: '/3d/one/group_villa_1/group_villa_1',
      level: 'one'
    },
    group_camera_1: {
      path: '/3d/one/group_camera_1/group_camera_1',
      level: 'one'
    },
    group_round_camera_1: {
      path: '/3d/one/group_round_camera_1/group_round_camera_1',
      level: 'one'
    },
    group_barrier_gate_obj: {
      path: '/3d/one/group_barrier_gate_obj/barrier_gate_obj_1',
      level: 'one'
    },
    group_barrier_gate_fbx: {
      path: '/3d/one/group_barrier_gate_fbx/barrier_gate_fbx_1.FBX',
      level: 'one'
    },
    group_sign_1: {
      path: '/3d/one/group_sign_1/group_sign_1',
      level: 'one'
    },
    RFID_1: {
      path: '/3d/one/RFID_1/RFID_1',
      level: 'one'
    },
    water_obj: {
      path: '/3d/one/water_obj/water_obj',
      level: 'one'
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
