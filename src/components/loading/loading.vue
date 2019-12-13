<template>
  <transition name="fade">
    <div class="loading" v-if="show">
      <div class="content">
        <img src="../../assets/imgs/loading.gif" alt />
        <span class="message">{{message}}</span>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Loading',
  props: ['message'],
  data: function() {
    return {
      show: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.loading {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(46, 47, 53, 0.6);
  // opacity: 0.6;
  display: flex;
  align-items: center;
  justify-content: center;
  .content {
    width: 240px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .message {
      font-size: 18px;
      margin-top: 20px;
      font-weight: 800;
      letter-spacing: 2px;
      color: #8ccbe7;
    }
  }
}
</style>
