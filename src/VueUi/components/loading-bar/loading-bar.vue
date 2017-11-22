<template>
  <transition name="fade">
    <div class="v-loading-bar" v-show="show">
      <div class="v-loading-bar-inner" :style="{width: `${current}%`, backgroundColor: color, height}"></div>
      <spin
        v-if="spin"
        class="v-loading-bar-spin"
        :style="{top: height, right: height}"
        size="0.44"
        :color="color"
      ></spin>
    </div>
  </transition>
</template>

<script>
  import Spin from '../spin'

  export default {
    props: {
      color: {
        type: String,
        default: ''
      },
      height: {
        type: String,
        default: ''
      },
      spin: {
        type: Boolean,
        default: false
      }
    },
    data(){
      return {
        current: 0,
        show: false
      }
    },
    components: {
      Spin
    }
  }
</script>

<style lang="less" type="text/less">
  @import "../../styles/index";

  .v-loading-bar{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 2/@RootFontSize;
    z-index: @LoadingBarIndex;

    .v-loading-bar-inner{
      height: 100%;
      background-color: @Info;
      transition: width .3s linear;
    }

    .v-loading-bar-spin{
      display: flex;
      left: auto;
      transform: translate(-50%, 50%);
    }
  }
</style>
