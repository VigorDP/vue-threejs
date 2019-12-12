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
        :config="peopleInfo"
      ></component>
    </section>
  </div>
</template>

<script>
import ThreeWorld from './components/three-world/ThreeWorld.vue'
import Tip from './components/tip/tip.vue'
import RtspVideo from './components/rtsp-video/rtsp.vue'
import PeopleInfo from './components/people-info/people-info.vue'

import emitter from './common/event-emitter'
export default {
  name: 'root',
  data() {
    return {
      visible: false,
      style: '',
      description: '',
      currentComponent: 'tip',
      peopleInfo: [
        {
          location: '3栋3单元301',
          img:
            'https://upload.jianshu.io/users/upload_avatars/6813214/9d36bb4a-f514-4d40-8ab8-f885bed1ac54.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120',
          name: '风之化身',
          sex: '男',
          birthday: '2019年01月',
          mobile: '15926339107',
          socialName: '育才嘉苑',
          unit: '二期6栋3单元',
          isPayedPropertyFee: false,
          nation: '汉',
          marriageStatus: '未婚',
          nativeName: '湖北武汉',
          idType: '身份证',
          idCard: '421302199501141680',
          educationLevel: '硕士',
          remark: '暂无',
          familyMember: [
            {
              name: '1',
              role: 'child',
              sex: '男',
              tel: '15926339107',
              idCard: '45789423554561522'
            }
          ]
        },
        {
          location: '3栋3单元302',
          img:
            'https://upload.jianshu.io/users/upload_avatars/6813214/9d36bb4a-f514-4d40-8ab8-f885bed1ac54.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120',
          name: '风之化身2',
          sex: '男',
          birthday: '2019年01月',
          mobile: '15926339107',
          socialName: '育才嘉苑',
          unit: '二期6栋3单元',
          isPayedPropertyFee: true,
          nation: '汉',
          marriageStatus: '未婚',
          nativeName: '湖北武汉',
          idType: '身份证',
          idCard: '421302199501141680',
          educationLevel: '硕士',
          remark: '暂无',
          familyMember: [
            {
              name: '1',
              role: 'child',
              sex: '男',
              tel: '15926339107',
              idCard: '45789423554561522'
            }
          ]
        },
        {
          location: '3栋3单元303',
          img:
            'https://upload.jianshu.io/users/upload_avatars/6813214/9d36bb4a-f514-4d40-8ab8-f885bed1ac54.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120',
          name: '风之化身2',
          sex: '男',
          birthday: '2019年01月',
          mobile: '15926339107',
          socialName: '育才嘉苑',
          unit: '二期6栋3单元',
          isPayedPropertyFee: true,
          nation: '汉',
          marriageStatus: '未婚',
          nativeName: '湖北武汉',
          idType: '身份证',
          idCard: '421302199501141680',
          educationLevel: '硕士',
          remark: '暂无',
          familyMember: [
            {
              name: '1',
              role: 'child',
              sex: '男',
              tel: '15926339107',
              idCard: '45789423554561522'
            }
          ]
        },
        {
          location: '3栋3单元304',
          img:
            'https://upload.jianshu.io/users/upload_avatars/6813214/9d36bb4a-f514-4d40-8ab8-f885bed1ac54.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120',
          name: '风之化身2',
          sex: '男',
          birthday: '2019年01月',
          mobile: '15926339107',
          socialName: '育才嘉苑',
          unit: '二期6栋3单元',
          isPayedPropertyFee: true,
          nation: '汉',
          marriageStatus: '未婚',
          nativeName: '湖北武汉',
          idType: '身份证',
          idCard: '421302199501141680',
          educationLevel: '硕士',
          remark: '暂无',
          familyMember: [
            {
              name: '1',
              role: 'child',
              sex: '男',
              tel: '15926339107',
              idCard: '45789423554561522'
            }
          ]
        }
      ]
    }
  },

  mounted() {
    this.$loading.show('3D社区构建中，请稍后...')
    emitter.on('show-building', (obj, position) => {
      // this.showDrawer(obj)
      this.style = `top:${position[1]}px;left:${position[0]}px`
      this.description = obj.name || '未知物品'
      // 视频监控
      if (obj.name.startsWith('camera')) {
        this.currentComponent = 'rtsp-video'
      } else if (obj.name.indexOf('floor') !== -1) {
        this.currentComponent = 'people-info'
      } else {
        this.currentComponent = 'tip'
      }
    })
    emitter.on('hide-all-infoPanel', _ => {
      this.visible = false
    })
    emitter.once('model-loading-finished', _ => {
      this.$loading.show('构建完毕，请使用！')
      this.$loading.hide(2000)
    })
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
  },
  components: {
    ThreeWorld,
    Tip,
    RtspVideo,
    PeopleInfo
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  ul,
  li {
    text-decoration: none;
  }
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
