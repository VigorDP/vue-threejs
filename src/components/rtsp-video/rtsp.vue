<template>
  <div class="container" :style="customStyle" @click.stop>
    <div class="head">
      <div class="left">{{ description }}-视频监控</div>
      <div class="right" @click.stop="close"></div>
    </div>
    <rtsp :playerId="playerId" :videoUrl="videoUrl"></rtsp>
  </div>
</template>

<script>
import { edgeDetect, commonMethods } from '../mixins'
import Rtsp from '../rtsp-base/rtsp.vue'

const VxgParam = {
  url: '',
  nmf_path: '/vxg/pnacl/Release/media_player.nmf',
  nmf_src: '/vxg/pnacl/Release/media_player.nmf',
  latency: 8000,
  autohide: 3,
  controls: true,
  avsync: true,
  auto_reconnect: true,
  //采用udp协议获取数据流
  connection_udp: 1
}
export default {
  name: 'Rtsp-Video',
  props: ['videoUrl', 'playerId', 'customStyle', 'description'],
  mixins: [edgeDetect, commonMethods],
  components: { Rtsp }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.container {
  display: inline-block;
  position: relative;
  width: 600px;
  height: 420px;
  .head {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    justify-content: space-between;
    background: url(../../assets/imgs/header_bg.png) center/100% 100% no-repeat;
    .left {
      position: relative;
      left: 2.5em;
      color: #afd0d0;
      font-size: 14px;
    }
    .right {
      width: 40px;
      background: url(../../assets/imgs/close_normal.png) center/100% 100% no-repeat;
      &:hover {
        cursor: pointer;
        background: url(../../assets/imgs/close_hover.png) center/100% 100% no-repeat;
      }
    }
  }
  .vxg-container {
    position: relative;
    width: 100% !important;
    height: 100% !important;
    background: #111;
  }
}
</style>
