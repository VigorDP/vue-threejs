<template>
  <div id="three-world"></div>
</template>

<script>
import Core from './index'

export default {
  name: 'ThreeWorld',
  mounted() {
    new Core(document.getElementById('three-world'))
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
