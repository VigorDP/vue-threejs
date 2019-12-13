<template>
  <div class="people" :style="customStyle">
    <slot></slot>
    <div class="close" @click="close"></div>
  </div>
</template>

<script>
import { edgeDetect, commonMethods } from '../mixins'

export default {
  name: 'Info-Wrapper',
  props: ['customStyle'],
  mixins: [edgeDetect, commonMethods]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.people {
  font-size: 14px;
  position: absolute;
  width: 640px;
  height: auto;
  min-height: 500px;
  background: url(../../assets/imgs/main_bg.png) center/100% 100% no-repeat;
  .close {
    width: 30px;
    height: 30px;
    position: absolute;
    right: 30px;
    top: 24px;
    background: url(../../assets/imgs/close_normal.png) center/100% 100% no-repeat;
    &:hover {
      cursor: pointer;
      background: url(../../assets/imgs/close_hover.png) center/100% 100% no-repeat;
    }
  }
}
</style>
