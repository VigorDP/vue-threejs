<template>
  <div class="people" :style="customStyle">
    <tabs :options="{ useUrlFragment: false }" @clicked="tabClicked" @changed="tabChanged">
      <tab name="First tab">
        <div class="top">
          <!-- 左边 -->
          <div class="left">
            <div class="avatar">
              <img
                src="https://upload.jianshu.io/users/upload_avatars/6813214/9d36bb4a-f514-4d40-8ab8-f885bed1ac54.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120"
                alt=""
              />
              <div class="img_decorator">个人信息</div>
            </div>
            <div class="basic_info">
              <div class="line"><span>业主姓名:</span><span>风之化身 </span></div>
              <div class="line"><span>性别:</span><span>男</span></div>
              <div class="line"><span>出生日期:</span><span>1966年5月</span></div>
              <div class="line"><span>手机号:</span><span>158 3720 2761</span></div>
              <div class="line"><span>所属小区:</span><span>育才嘉苑</span></div>
              <div class="line"><span>单元号:</span><span>二期6栋3单元</span></div>
              <div class="line"><span>物业费缴纳:</span><span>已交</span></div>
            </div>
          </div>
          <div class="center"></div>
          <div class="right">
            <div class="basic_info">
              <div class="line"><span>业主姓名:</span><span>风之化身 </span></div>
              <div class="line"><span>性别:</span><span>男</span></div>
              <div class="line"><span>出生日期:</span><span>1966年5月</span></div>
              <div class="line"><span>手机号:</span><span>158 3720 2761</span></div>
              <div class="line"><span>所属小区:</span><span>育才嘉苑</span></div>
              <div class="line"><span>单元号:</span><span>二期6栋3单元</span></div>
              <div class="line"><span>物业费缴纳:</span><span>已交</span></div>
            </div>
          </div>
        </div>
        <div class="bottom"></div>
      </tab>
      <tab id="second-tab" name="Default tab">Second tab content</tab>
    </tabs>
    <div class="close"></div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Tabs, Tab } from 'vue-tabs-component'

Vue.component('tabs', Tabs)
Vue.component('tab', Tab)

export default {
  name: 'People-Info',
  props: ['description', 'customStyle'],
  methods: {
    tabClicked(selectedTab) {
      console.log('Current tab re-clicked:' + selectedTab.tab.name)
    },
    tabChanged(selectedTab) {
      console.log('Tab changed to:' + selectedTab.tab.name)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.people {
  position: absolute;
  width: 640px;
  height: 500px;
  background: url(../../assets/people-info/main_bg.png) center/100% no-repeat;
  .tabs-component {
    width: 100%;
    height: 100%;
    position: relative;
    padding: 20px;

    .tabs-component-tabs {
      display: flex;
      .tabs-component-tab {
        text-align: center;
        width: 120px;
        height: 28px;
        background: url(../../assets/people-info/tab_normal.png) center/100% no-repeat;
        &:hover {
          cursor: pointer;
          background: url(../../assets/people-info/tab_hover.png) center/100% no-repeat;
        }
        &.is-active {
          background: url(../../assets/people-info/tab_hover.png) center/100% no-repeat;
        }
        a {
          font-size: 15px;
          line-height: 28px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: rgba(220, 231, 237, 1);
        }
      }
    }
    .tabs-component-panels {
      border: solid 1px #ddd;
      border-radius: 6px;
      margin-top: 10px;
      width: 100%;
      height: 400px;
      .tabs-component-panel {
        .top {
          display: flex;
          align-items: center;
          justify-content: space-around;
          height: 280px;
          .center {
            width: 1px;
            height: 262px;
            border: 1px solid rgba(90, 123, 146, 1);
          }
          .left,
          .right {
            width: 280px;
            align-self: flex-start;
            .avatar {
              display: flex;
              align-items: center;
              justify-content: center;
              margin-top: 30px;
              img {
                width: 90px;
                height: 90px;
                border-radius: 50%;
              }
              .img_decorator {
                transform: translateX(-10%) translateY(-120%);
                height: 25px;
                line-height: 25px;
                text-align: center;
                width: 90px;
                font-size: 13px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: rgba(255, 255, 255, 1);
                background: url(../../assets/people-info/name_decorator.png) center/100% no-repeat;
              }
            }
            .basic_info {
              // background: yellow;
              width: 80%;
              margin: 30px auto 0;
              .line {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin: 4px 0;
                span {
                  color: white;
                  flex: 1;
                }
              }
            }
          }
          .right {
            flex: 1;
            border: 1px solid red;
          }
        }
      }
    }
  }
  .close {
    width: 30px;
    height: 30px;
    position: absolute;
    right: 30px;
    top: 24px;
    background: url(../../assets/close_normal.png) center/100% 100% no-repeat;
    &:hover {
      cursor: pointer;
      background: url(../../assets/close_hover.png) center/100% 100% no-repeat;
    }
  }
}
</style>
