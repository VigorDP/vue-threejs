<template>
  <info-wrapper :customStyle="customStyle" @close="close">
    <tabs :options="{ useUrlFragment: false }" cache-lifetime="0">
      <tab class="panel" v-for="(people, key) in entranceGuardInfo" :key="key" :name="people.location">
        <div class="top-layout">
          <!-- 左边 -->
          <div class="left">
            <img src="../../assets/imgs/machine.png" alt />
            <span>编号:01A</span>
          </div>
          <div class="right">
            <div class="basic_info">
              <div class="line">
                <span>门禁状态:</span>
                <span>{{ people.nation || '运行中' }}</span>
              </div>
              <div class="line">
                <span>所在位置:</span>
                <span>{{ people.marriageStatus || '1单元东门' }}</span>
              </div>
              <div class="line">
                <span>使用年限:</span>
                <span>{{ people.nativeName || '3.6年' }}</span>
              </div>
              <div class="line">
                <span>维修时间:</span>
                <span>{{ people.nativeName || '2019年10月22日' }}</span>
              </div>
              <div class="line">
                <span>维修人:</span>
                <span>{{ people.nativeName || '李明国' + '136 2710 3866' }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom-table-layout">
          <div class="title">
            <span>近24小时开门信息</span>
            <img src="../../assets/imgs/right_line.png" alt />
          </div>
          <div class="table">
            <header>
              <span>序号</span>
              <span>姓名</span>
              <span>角色</span>
              <span>性别</span>
              <span>开门方式</span>
              <span>时间</span>
            </header>
            <section>
              <swiper :options="swiperOption" class="swiper-class" ref="mySwiper">
                <!-- slides -->
                <swiper-slide>I'm Slide 1</swiper-slide>
                <swiper-slide>I'm Slide 2</swiper-slide>
                <swiper-slide>I'm Slide 3</swiper-slide>
                <swiper-slide>I'm Slide 4</swiper-slide>
                <swiper-slide>I'm Slide 5</swiper-slide>
                <swiper-slide>I'm Slide 6</swiper-slide>
                <swiper-slide>I'm Slide 7</swiper-slide>
              </swiper>
            </section>
          </div>
        </div>
        <div class="bottom-elevator-layout">
          <div class="title">
            <span>电梯A监控画面</span>
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
import { commonMethods } from '../mixins'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.component('tabs', Tabs)
Vue.component('tab', Tab)

export default {
  name: 'People-Info',
  props: ['description', 'customStyle', 'entranceGuardInfo'],
  mixins: [commonMethods],
  data: function() {
    return {
      swiperOption: {
        autoplay: 3000,
        direction: 'vertical',
        observeParents: true
      }
    }
  },
  components: {
    InfoWrapper,
    swiper,
    swiperSlide
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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
      // border: 1px solid #000;
      header {
        width: 100%;
        height: 25px;
        background: rgba(0, 235, 238, 0.3);
        display: flex;
        align-items: center;
        justify-content: space-around;
        span {
          flex: 1;
          color: rgba(204, 205, 209, 1);
          text-align: center;
        }
      }
      section {
        .swiper-class {
          width: 100%;
          height: 100%;
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
  }
}
</style>
