<template>
  <info-wrapper :customStyle="customStyle" @close="close"></info-wrapper>
</template>

<script>
import Vue from 'vue'
import { Tabs, Tab } from 'vue-tabs-component'
import InfoWrapper from '../info-wrapper/wrapper.vue'
import { commonMethods } from '../mixins'

Vue.component('tabs', Tabs)
Vue.component('tab', Tab)

export default {
  name: 'People-Info',
  props: ['description', 'customStyle', 'config'],
  mixins: [commonMethods],
  components: {
    InfoWrapper
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
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
      background: url(../../assets/imgs/tab_normal.png) center/100% no-repeat;
      &:hover {
        cursor: pointer;
        background: url(../../assets/imgs/tab_hover.png) center/100% no-repeat;
      }
      &.is-active {
        background: url(../../assets/imgs/tab_hover.png) center/100% no-repeat;
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
    border-radius: 6px;
    width: 100%;
    min-height: 400px;
    .tabs-component-panel {
      padding-top: 30px;
      .top {
        display: flex;
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
          .avatar {
            display: flex;
            align-items: center;
            justify-content: center;
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
              background: url(../../assets/imgs/name_decorator.png) center/100% no-repeat;
            }
          }
          .basic_info {
            width: 80%;
            margin: 30px auto 0;
            .line {
              display: flex;
              align-items: center;
              margin: 7px 0;
              span {
                color: white;
                width: 102px;
                letter-spacing: 1px;
                &:first-child {
                  color: rgba(204, 205, 213, 1);
                }
              }
            }
            .extra {
              width: 268px;
              height: 45px;
              background: rgba(93, 98, 118, 0.5);
              border: 1px solid rgba(112, 126, 135, 1);
              border-radius: 3px;
              padding-top: 6px;
              padding-left: 3px;
              span {
                color: rgba(204, 205, 213, 1);
                letter-spacing: 2px;
                margin-right: 3px;
              }
            }
          }
        }
        .right {
          flex: 1;
          .basic_info {
            margin-top: 0;
            .line {
              margin: 9px 0;
              span {
                &:first-child {
                  max-width: 102px;
                }
              }
            }
          }
          // border: 1px solid red;
        }
      }
      .bottom {
        min-height: 94px;
        display: flex;
        padding: 0 25px;
        .left {
          position: relative;
          height: 94px;
          img {
            width: 76px;
            height: 94px;
          }
          span {
            position: absolute;
            width: 76px;
            text-align: center;
            bottom: 6px;
            left: 0;
            color: rgba(189, 242, 246, 1);
          }
        }
        .right2 {
          width: 460px;
          margin-left: 24px;

          .common {
            display: flex;
            justify-content: space-around;
            height: 25px;
            line-height: 25px;

            &.header {
              background: rgba(0, 235, 238, 0.3);
            }
            span {
              color: rgba(189, 242, 246, 1);
              flex: 1;
              text-align: center;
              &.span1 {
                max-width: 42px;
              }
              &.span2 {
                max-width: 28px;
              }
              &.span3 {
                max-width: 100px;
              }
              &.span4 {
                max-width: 140px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
