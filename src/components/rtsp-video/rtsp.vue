<template>
  <div class="container">
    <div [id]="playerId1" class="vxg-container" ref="vxgplayer"></div>
  </div>
</template>

<script>
const VxgParam = {
  url: '',
  nmf_path: 'media_player.nmf',
  nmf_src: '/assets/vxg/pnacl/Release/media_player.nmf',
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
  props: ['description', 'customStyle'],
  data: {
    playerId1: 'vxg_media_player11'
  },
  mounted: function() {
    this.initVxgPlugin()
    this.initPlayer()
    this.playVideo(this.videoUrl)
  },
  initVxgPlugin() {
    if (vm.vxgplayer1 == null || vm.vxgplayer1.nativeElement.id == null || vm.vxgplayer1.nativeElement.id.length < 1) {
      console.info('vxgplayer1 id is null')
      return
    }
    vm.player1 = vxgplayer(vm.playerId1, _.cloneDeep(RtspParam.vxgParam))
    if (vm.player1 == null) {
      return
    }
  },
  initPlayer() {
    player.onReadyStateChange(onreadyState => {
      console.log('player LOADED: versionPLG=' + vm.player1.versionPLG() + ' versionAPP=' + vm.player1.versionAPP())
    })
    player.onStateChange(readyState => {
      console.log('NEW READY STATE: ' + readyState)
    })
    player.onError(err => {
      console.error('初始化vxg出错：', err)
    })

    player.onBandwidthError(res => {
      console.log(res.error())
    })
  },
  playVideo() {
    this.player1.src(rtsp)
    this.player1.play()
  },
  unmount: function() {
    if (this.player1) {
      this.player1.dispose()
      this.player1 = null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.container {
  width: 100%;
  height: 100%;
  position: relative;

  .vxg-container {
    width: 100% !important;
    height: 100% !important;
  }
}
</style>
