<template>
  <div class="people" :style="customStyle" @click.stop>
    <tabs :options="{ useUrlFragment: false }">
      <tab v-for="(people, key) in config" :key="key" :name="people.location">
        <div class="top">
          <!-- 左边 -->
          <div class="left">
            <div class="avatar">
              <img :src="people.img" alt />
              <div class="img_decorator">个人信息</div>
            </div>
            <div class="basic_info">
              <div class="line">
                <span>业主姓名:</span>
                <span>{{ people.name }}</span>
              </div>
              <div class="line">
                <span>性别:</span>
                <span>{{ people.sex }}</span>
              </div>
              <div class="line">
                <span>出生日期:</span>
                <span>{{ people.birthday }}</span>
              </div>
              <div class="line">
                <span>手机号:</span>
                <span>{{ people.mobile }}</span>
              </div>
              <div class="line">
                <span>所属小区:</span>
                <span>{{ people.socialName }}</span>
              </div>
              <div class="line">
                <span>单元号:</span>
                <span>{{ people.unit }}</span>
              </div>
              <div class="line">
                <span>物业费缴纳:</span>
                <span
                  :style="{color:people.isPayedPropertyFee?'#06D8EB':'red'}"
                >{{ people.isPayedPropertyFee?'已缴':'未缴' }}</span>
              </div>
            </div>
          </div>
          <div class="center"></div>
          <div class="right">
            <div class="basic_info">
              <div class="line">
                <span>民族:</span>
                <span>{{ people.nation }}</span>
              </div>
              <div class="line">
                <span>婚姻状况:</span>
                <span>{{ people.marriageStatus }}</span>
              </div>
              <div class="line">
                <span>籍贯:</span>
                <span>{{ people.nativeName }}</span>
              </div>
              <div class="line">
                <span>证件类型:</span>
                <span>{{ people.idType }}</span>
              </div>
              <div class="line">
                <span>证件号码:</span>
                <span>{{ people.idCard }}</span>
              </div>
              <div class="line">
                <span>学历:</span>
                <span>{{ people.educationLevel }}</span>
              </div>
              <div class="line">
                <span>所属户主:</span>
                <span>{{ people.name }}</span>
              </div>
              <div class="line">
                <span>入住人员数量:</span>
                <span>{{ people.familyMember.length }}</span>
              </div>
              <div class="line">
                <span>入住时间:</span>
                <span>2015年6月</span>
              </div>
              <div class="extra">
                <span>备注:</span>
                <span>{{ people.remark }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="left">
            <img src="../../assets/people-info/house_info.png" alt />
            <span>家庭信息</span>
          </div>
          <div class="right2">
            <div class="header common">
              <span class="span1">姓名</span>
              <span class="span2">关系</span>
              <span class="span2">性别</span>
              <span class="span3">联系方式</span>
              <span class="span4">身份证号</span>
            </div>
            <div class="common" v-for="(family, key) in people.familyMember" :key="key">
              <span class="span1">{{ family.name }}</span>
              <span class="span2">{{ family.role }}</span>
              <span class="span2">{{ family.sex }}</span>
              <span class="span3">{{ family.tel }}</span>
              <span class="span4">{{ family.idCard }}</span>
            </div>
          </div>
        </div>
      </tab>
    </tabs>
    <div class="close" @click="close"></div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Tabs, Tab } from 'vue-tabs-component'
import { edgeDetect } from '../mixins/edgeDetect'
Vue.component('tabs', Tabs)
Vue.component('tab', Tab)

export default {
  name: 'People-Info',
  props: ['description', 'customStyle', 'config'],
  mixins: [edgeDetect],
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.people {
  font-size: 14px;
  position: absolute;
  width: 640px;
  height: auto;
  min-height: 500px;
  background: url(../../assets/people-info/main_bg.png) center/100% 100% no-repeat;
  &.transformY {
    transform: translateY(-80%);
  }
  &.transformX {
    transform: translateX(-120%);
  }
  &.transformXY {
    transform: translateX(-120%) translateY(-80%);
  }
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
                background: url(../../assets/people-info/name_decorator.png) center/100% no-repeat;
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
