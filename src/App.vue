<template>
  <div id="root">
    <ThreeWorld />
    <!-- <router-view></router-view> -->
    <section class="infoContainer">
      <tip :description="description" :customStyle="style"></tip>
      <button @click="goTo">到摄像头</button>
    </section>
  </div>
</template>

<script>
import ThreeWorld from './components/three-world/ThreeWorld.vue'
import Tip from './components/tip/tip.vue'
import emitter from './common/event-emitter'
export default {
  name: 'root',
  components: {
    ThreeWorld,
    Tip
  },
  mounted() {
    emitter.on('show-building', (obj, position) => {
      // this.showDrawer(obj)
      this.style = `top:${position[1]}px;left:${position[0]}px`
      this.description = obj.name || '未知物品'
    })
    emitter.on('hide-all-infoPanel', _ => {
      this.visible = false
    })
  },
  data() {
    return {
      visible: false,
      style: '',
      description: ''
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
  .test {
    position: absolute;
    top: 0;
    left: 300;
  }
}
</style>
