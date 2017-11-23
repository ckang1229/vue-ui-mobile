<template>
  <div class="v-switch" :class="{active: value}" @click="$emit('input', !value)">
    <div class="v-switch-inner"></div>
    <div class="v-switch-circle"></div>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: null,
        default: null
      }
    }
  }
</script>

<style type="text/less" lang="less">
  @import "../../styles/variable";
  @SwitchColor: #e4e4e4;
  @SwitchInnerColor: #fdfdfd;
  @SwitchCircleColor: #fefefe;

  @SwitchWidth: 42; //px
  @SwitchHeight: 22; //px

  .v-switch{
    position: relative;
    display: inline-block;
    vertical-align: middle;
    width: @SwitchWidth / @RootFontSize;
    height: @SwitchHeight / @RootFontSize;
    border-radius: @SwitchHeight /@RootFontSize;
    background-color: @SwitchColor;

    @SwitchInnerWidth: (@SwitchWidth - 2) / @RootFontSize;
    @SwitchInnerHeight: (@SwitchHeight - 2) / @RootFontSize;

    &.active{
      background-color: @Success;

      .v-switch-inner{
        transform: scale3d(0, 0, 0);
      }

      .v-switch-circle{
        transform: translate3d(100%, 0, 0);
      }
    }

    .v-switch-inner{
      position: relative;
      top: 1px;
      left: 1px;
      width: @SwitchInnerWidth;
      height: @SwitchInnerHeight;
      border-radius: @SwitchInnerHeight;
      background-color: @SwitchInnerColor;
      transition: transform .2s;
    }

    .v-switch-circle{
      position: absolute;
      top: 0;
      left: 0;
      width: @SwitchHeight / @RootFontSize;
      height: @SwitchHeight / @RootFontSize;
      background-color: @SwitchCircleColor;
      border-radius: 50%;
      z-index: 1;
      border:1px solid @SwitchColor;
      box-sizing: border-box;
      box-shadow: 0 2/@RootFontSize 3/@RootFontSize rgba(0, 0, 0, .12);
      transition: transform .2s;
    }
  }
</style>
