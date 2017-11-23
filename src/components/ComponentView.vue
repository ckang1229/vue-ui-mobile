<template>
  <div class="component">
    <top-bar :title="$route.name"></top-bar>
    <div class="scroll-view">
      <v-scroll ref="scroll">
        <slot></slot>
      </v-scroll>
    </div>
  </div>
</template>

<script>
  import TopBar from './TopBar'

  export default {
    name: 'component-view',
    mounted(){
      this.$nextTick(() => {
        this.$refs.scroll.refresh()
      })
    },
    components: {
      TopBar
    }
  }
</script>

<style lang="less" type="text/less">
  @import "../assets/styles/index.less";
  .component{
    .PageStyles();
    z-index: @ComponentZIndex;

    .scroll-view{
      position: absolute;
      top: 37.5 / @RootFontSize;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: @BackgroundColor;
      .scroll{
        padding: 12/@RootFontSize 14/@RootFontSize;
        .v-button{
          margin-top: 10/@RootFontSize;
        }
      }
    }

    .config{
      margin-top: 14/@RootFontSize;

      .config-name{
        margin-right: 4/@RootFontSize;
      }

      .v-radio{
        margin-right: 4/@RootFontSize;
      }
    }
  }
</style>
