<template>
  <header class="header">
    <v-icon type="chevron-left" size="0.54" class="icon-back" v-if="back" @click.native="$router.go(-1)"></v-icon>
    {{title}}
  </header>
</template>

<script>
  export default {
    props:{
      back: {
        type: Boolean,
        default: true
      },
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="less" type="text/less">
  @import "../assets/styles/index";

  .header{
    position: relative;
    height: 37.5 / @RootFontSize;
    line-height: 37.5 / @RootFontSize;
    text-align: center;
    font-size: @LargeFontSize;
    color: @Title;
    background-color: #fff;
    border-bottom: 1px solid @BorderColor;
    box-sizing: border-box;
    .icon-back{
      position: absolute;
      top: 50%;
      left: 10 / @RootFontSize;
      transform: translateY(-50%);
      .extend-click();
    }
  }
</style>
