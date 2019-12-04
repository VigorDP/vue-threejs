<template>
  <div class="tip" :style="customStyle">
    <span class="message">{{description}}</span>
  </div>
</template>

<script>
export default {
  name: 'Tip',
  props: ['description', 'customStyle']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.tip {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 200px;
  height: 50px;
  transform: translateY(-100%);
  background: url(../../assets/tip.png) center/100% no-repeat;
  .message {
    position: absolute;
    top: 4px;
    left: 130px;
    transform: translateX(-50%);
    color: white;
  }
}
</style>
