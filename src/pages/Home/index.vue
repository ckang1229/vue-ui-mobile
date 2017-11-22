<template>
  <div class="home">
    <v-scroll>
      <div class="home-title">VUE-UI</div>
      <div class="home-subtitle">基于vue2.0 与 better-scroll 的移动端UI</div>
      <div class="home-content">
        <div class="item" @click="$router.push('/button')">
          <v-icon type="social-youtube-outline" size="0.64" color="#FF685E"></v-icon>
          <div class="com-name">Button</div>
        </div>
        <div class="item" @click="$router.push('/dialog')">
          <v-icon type="ios-chatbubble-outline" size="0.64" color="#3CC51E"></v-icon>
          <div class="com-name">Dialog</div>
        </div>
        <div class="item" @click="$router.push('/loading-bar')">
          <v-icon type="ios-minus-empty" size="0.64" color="#FC746C"></v-icon>
          <div class="com-name">LoadingBar</div>
        </div>
        <div class="item" @click="$router.push('/pull-down-refresh')">
          <v-icon type="load-d" size="0.64" color="#8B78E2"></v-icon>
          <div class="com-name">PullRefresh</div>
        </div>
        <div class="item" @click="$router.push('/message')">
          <v-icon type="ios-information-outline" size="0.64" color="#8B78E2"></v-icon>
          <div class="com-name">Message</div>
        </div>
        <div class="item" @click="$router.push('/radio')">
          <v-icon type="ios-circle-filled" size="0.64" color="#FF8D20"></v-icon>
          <div class="com-name">Radio</div>
        </div>
        <div class="item" @click="$router.push('/checkbox')">
          <v-icon type="android-checkbox-outline" size="0.64" color="#FF685E"></v-icon>
          <div class="com-name">Checkbox</div>
        </div>
        <div class="item" @click="$router.push('/pull-down-refresh')">
          <v-icon type="ios-more" size="0.64" color="#FF685E"></v-icon>
          <div class="com-name">PullRefresh</div>
        </div>
      </div>
    </v-scroll>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="less" type="text/less">
  @import "../../assets/styles/index.less";

  .home{
    .PageStyles();
    z-index: @HomeZIndex;
    text-align: center;
    .home-title{
      height: 75 / @RootFontSize;
      line-height: 75 / @RootFontSize;
      font-weight: bold;
      font-size: 24 / @RootFontSize;
      color: #FF5E53;
    }
    .home-subtitle{
      height: 20 / @RootFontSize;
      line-height: 20 / @RootFontSize;
      color: @SubColor;
      font-size: @MiddleFontSize;
    }
    .home-content{
      margin-top: 30 / @RootFontSize;
      font-size: 0;
      background-color: #fff;
    }
    .item{
      display: inline-block;
      padding: (20 / @RootFontSize) 0;
      width: 25%;
      vertical-align: middle;
      box-sizing: border-box;
      border-right: 1px solid @BorderColor;
      border-bottom: 1px solid @BorderColor;
    }
    .item:nth-child(4n){
      border-right: none;
    }
    .com-name{
      margin-top: 6 / @RootFontSize;
      font-size: @MiddleFontSize;
      .EN-fontFamily();
    }
  }
</style>
