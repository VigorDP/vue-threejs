<template>
  <div>
    <div id="three-world"></div>
    <a-drawer
      placement="right"
      :mask="false"
      :title="title"
      wrapClassName="transparent"
      @close="onClose"
      :visible="visible"
    >
      <p>{{content}}</p>
    </a-drawer>
  </div>
</template>

<script>
import Core from './index'
import { get, post } from '../../common/api'
import emitter from './core/event-emitter'
export default {
  name: 'ThreeWorld',
  mounted() {
    new Core(document.getElementById('three-world'))
    emitter.on('show-building', obj => {
      this.showDrawer(obj)
    })
    emitter.on('hide-all-infoPanel', _ => {
      this.visible = false
    })
  },
  data() {
    return {
      visible: false,
      title: '',
      content: ''
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
    onClose() {
      this.visible = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
#three-world {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.ant-modal-confirm-content {
  white-space: pre;
}
</style>
