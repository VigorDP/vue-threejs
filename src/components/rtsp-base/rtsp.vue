<template>
  <div :id="playerId" class="vxg-container" ref="vxgplayer"></div>
</template>

<script>
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
  name: 'Rtsp-Base',
  props: ['videoUrl', 'playerId'],
  data: function() {
    return {
      player: null
    }
  },
  mounted() {
    // 异步加载 vxgplayer 插件
    let script = document.createElement('script')
    script.setAttribute('src', '/vxg/vxgplayer.min.js')
    script.setAttribute('type', 'text/javascript')
    document.head.appendChild(script)
    const that = this
    script.onload = function() {
      that.initVxgPlugin()
      that.initPlayer()
      that.playVideo(that.videoUrl)
    }

    let style = document.createElement('link')
    style.setAttribute('type', 'text/css')
    style.setAttribute('rel', 'stylesheet')
    style.setAttribute('href', '/vxg/vxgplayer.min.css')
    document.head.appendChild(style)
  },
  methods: {
    initVxgPlugin() {
      if (!this.videoUrl || !this.playerId) {
        alert(this.name + '请传入 videoUrl 和 playerId')
        return
      }
      this.player = window.vxgplayer(this.playerId, VxgParam)
    },
    initPlayer() {
      if (!this.player) {
        console.log('VXGPlayer 初始化失败！')
        return
      }
      this.player.onReadyStateChange(onreadyState => {
        console.log('player LOADED: versionPLG=' + this.player.versionPLG() + ' versionAPP=' + this.player.versionAPP())
      })
      this.player.onStateChange(readyState => {
        console.log('NEW READY STATE: ' + readyState)
      })
      this.player.onError(err => {
        console.error('初始化vxg出错：', err)
      })
      this.player.onBandwidthError(res => {
        console.log(res.error())
      })
    },
    playVideo(videoUrl) {
      this.player.src(videoUrl)
      this.player.play()
    }
  },

  beforeDestroy: function() {
    if (this.player) {
      this.player.dispose()
      this.player = null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.vxg-container {
  position: relative;
  width: 100% !important;
  height: 100% !important;
  background: #111;
}
</style>
