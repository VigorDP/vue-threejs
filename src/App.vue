<template>
  <div id="root">
    <!-- 3d 组件 -->
    <ThreeWorld />
    <!-- 信息展示面板 -->
    <section class="infoContainer">
      <component
        v-bind:is="currentComponent"
        playerId="id"
        videoUrl="rtsp://184.72.239.149/vod/mp4:BigBuckBunny_115k.mov"
        v-on:close="handleClose($event)"
        :description="description"
        :customStyle="style"
      ></component>
    </section>
  </div>
</template>

<script>
import ThreeWorld from './components/three-world/ThreeWorld.vue'
import Tip from './components/tip/tip.vue'
import RtspVideo from './components/rtsp-video/rtsp.vue'

import emitter from './common/event-emitter'
export default {
  name: 'root',
  components: {
    ThreeWorld,
    Tip,
    RtspVideo
  },
  mounted() {
    emitter.on('show-building', (obj, position) => {
      // this.showDrawer(obj)
      this.style = `top:${position[1]}px;left:${position[0]}px`
      this.description = obj.name || '未知物品'
      // 视频监控
      if (obj.name.startsWith('camera')) {
        this.currentComponent = 'rtsp-video'
      } else {
        this.currentComponent = 'tip'
      }
    })
    emitter.on('hide-all-infoPanel', _ => {
      this.visible = false
    })
  },
  data() {
    return {
      visible: false,
      style: '',
      description: '',
      currentComponent: 'tip'
    }
  },
  methods: {
    showDrawer(obj) {
      if (this.title === obj.name) {
        this.visible = false
        setTimeout(() => {
          this.title = ''
        }, 400)
      } else {
        this.visible = true
        this.title = obj.name || ''
      }
      get('topics').then(data => (this.content = data.data[parseInt(Math.random() * data.data.length)].content))
    },
    goTo() {
      emitter.emit('target', { to: 'camera', position: [80, -0, -140] })
    },
    handleClose(e) {
      this.currentComponent = 'tip'
    }
  }
}
</script>

<style lang='scss'>
#root {
  margin: 0;
  padding: 0;
}
.infoContainer {
  position: relative;
  height: 0;
  .test {
    position: absolute;
    top: 0;
    left: 300;
  }
}
</style>
