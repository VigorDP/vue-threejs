<template>
  <info-wrapper :customStyle="customStyle" @close="close">
    <tabs :options="{ useUrlFragment: false }" cache-lifetime="0" @change="start" @click="start">
      <tab class="panel" v-for="(machine, key) in entranceGuardInfo" :key="key" :name="machine.location">
        <div class="top-layout">
          <div class="left">
            <img :src="machine.icon" alt />
            <span>编号:01A</span>
          </div>
          <div class="right">
            <div class="basic_info">
              <div class="line">
                <span>门禁状态:</span>
                <span>{{ machine.nation || '运行中' }}</span>
              </div>
              <div class="line">
                <span>所在位置:</span>
                <span>{{ machine.marriageStatus || '1单元东门' }}</span>
              </div>
              <div class="line">
                <span>使用年限:</span>
                <span>{{ machine.nativeName || '3.6年' }}</span>
              </div>
              <div class="line">
                <span>维修时间:</span>
                <span>{{ machine.nativeName || '2019年10月22日' }}</span>
              </div>
              <div class="line">
                <span>维修人:</span>
                <span>{{ machine.nativeName || '李明国' + '136 2710 3866' }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom-table-layout" v-if="machine.type === 'machine'">
          <div class="title">
            <span>近24小时开门信息</span>
            <img src="../../assets/imgs/right_line.png" alt />
          </div>
          <div class="table">
            <header>
              <span class="width1">序号</span>
              <span class="width2">姓名</span>
              <span class="width3">角色</span>
              <span class="width3">性别</span>
              <span class="width4">开门方式</span>
              <span>时间</span>
            </header>
            <swiper
              :options="swiperOption"
              class="swiper-class"
              ref="mySwiper"
              :key="key"
              @mouseenter.native="stop"
              @mouseleave.native="start"
            >
              <swiper-slide v-for="i in Math.ceil(machine.table.length / 6)" :key="i">
                <div
                  class="table-line"
                  v-for="(people, key) in machine.table.slice((i - 1) * 6, (i - 1) * 6 + 6)"
                  :key="key"
                  :index="i - 1"
                >
                  <span class="width1">{{ (i - 1) * 6 + key + 1 }}</span>
                  <span class="width2">{{ people.name }}</span>
                  <span class="width3">{{ people.role }}</span>
                  <span class="width3">{{ people.sex }}</span>
                  <span class="width4">{{ people.openDoorWay }}</span>
                  <span>{{ people.time }}</span>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <div class="bottom-elevator-layout" v-if="machine.type === 'elevator'">
          <div class="title">
            <span>电梯A监控画面</span>
          </div>
          <div class="video-wrap">
            <rtsp :playerId="playerId" :videoUrl="videoUrl"></rtsp>
          </div>
        </div>
      </tab>
    </tabs>
  </info-wrapper>
</template>

<script>
import Vue from 'vue'
import { Tabs, Tab } from 'vue-tabs-component'
import InfoWrapper from '../info-wrapper/wrapper.vue'
import Rtsp from '../rtsp-base/rtsp.vue'

import { commonMethods } from '../mixins'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.component('tabs', Tabs)
Vue.component('tab', Tab)

const swiperOption = {
  autoplay: true,
  loop: true,
  speed: 1000,
  direction: 'vertical',
  observer: true, //修改swiper自己或子元素时，自动初始化swiper
  observeParents: true //修改swiper的父元素时，自动初始化swiper
}

export default {
  name: 'People-Info',
  props: ['description', 'customStyle', 'entranceGuardInfo', 'playerId', 'videoUrl'],
  mixins: [commonMethods],
  beforeCreate() {
    this.swiperOption = swiperOption
  },
  methods: {
    stop: function() {
      this.$refs.mySwiper.forEach(item => item.swiper.autoplay.stop())
    },
    start: function() {
      this.$refs.mySwiper.forEach(item => item.swiper.autoplay.start())
    }
  },
  components: {
    InfoWrapper,
    swiper,
    swiperSlide,
    Rtsp
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.panel {
  padding: 12px 35px !important;
  display: flex;
  flex-direction: column;
  height: 100%;
  font-size: 13px;
  color: rgba(219, 244, 247, 1);
  .top-layout {
    height: 134px;
    display: flex;
    align-items: center;

    .left {
      position: relative;
      img {
        width: 170px;
        height: 112px;
      }
      span {
        position: absolute;
        bottom: 6px;
        left: 40%;
        transform: translateX(-50%);
        color: rgba(219, 244, 247, 1);
        letter-spacing: 1px;
      }
    }
    .right {
      flex: 1;
      margin-left: 20px;
      .basic_info {
        .line {
          display: flex;
          align-items: center;
          margin: 9px 0;
          &:last-child {
            margin-bottom: 0;
          }
          span {
            color: white;
            letter-spacing: 1px;
            &:first-child {
              width: 100px;
              color: rgba(204, 205, 213, 1);
            }
            &:last-child {
              width: 242px;
            }
          }
        }
      }
    }
  }
  .bottom-table-layout {
    margin-top: 38px;
    flex: 1;
    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
        font-size: 13px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(155, 213, 210, 1);
      }
      img {
        height: 9px;
      }
    }
    .table {
      margin-top: 10px;
      width: 530px;
      header {
        width: 100%;
        height: 25px;
        background: rgba(0, 235, 238, 0.3);
        display: flex;
        align-items: center;
        justify-content: space-around;
        span {
          display: inline-block;
          color: rgba(204, 205, 209, 1);
          text-align: center;
          &:last-child {
            width: 126px;
          }
        }
      }

      .width1 {
        width: 34px;
        text-align: center;
      }
      .width2 {
        width: 54px;
        text-align: center;
      }
      .width3 {
        width: 27px;
        text-align: center;
      }
      .width4 {
        width: 55px;
        text-align: center;
      }

      .swiper-class {
        width: 100%;
        height: 152px;
        .table-line {
          display: flex;
          align-items: center;
          justify-content: space-around;
          font-size: 13px;
          height: 13px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          margin-top: 12px;
          span {
            color: rgba(255, 255, 255, 1);
            &:first-child {
              width: 34px;
              height: 18px;
              line-height: 18px;
              text-align: center;
              background: rgba(0, 144, 146, 1);
              border-radius: 9px;
            }
          }
        }
      }
    }
  }
  .bottom-elevator-layout {
    margin-top: 38px;
    flex: 1;
    .title {
      display: flex;
      justify-content: center;
      background: url(../../assets/imgs/middle_line.png) center/100% 100% no-repeat;
      span {
        font-size: 13px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        text-align: center;
        color: rgba(155, 213, 210, 1);
      }
      img {
        height: 9px;
      }
    }
    .video-wrap {
      padding-top: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 400px;
      height: 215px;
      transform: translateX(65px);
    }
  }
}
</style>
