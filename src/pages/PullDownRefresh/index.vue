<template>
  <div class="component">
    <top-bar :title="$route.name"></top-bar>
    <div class="scroll-view">
      <v-pull-down-refresh ref="scroll" @pullingDown="pullingDown">
        <div class="list" v-for="(item, idx) in list">list{{idx}}</div>
      </v-pull-down-refresh>
    </div>
  </div>
</template>

<script>
  import TopBar from '../../components/TopBar'

  export default {
    data(){
      return {
        list: new Array(20)
      }
    },
    mounted(){
      this.$nextTick(() => {
        this.$refs.scroll.refresh()
      })
    },
    methods: {
      pullingDown(){
        setTimeout(() => {
          this.$refs.scroll.complete();
        }, 1000)
      }
    },
    components: {
      TopBar
    }
  }
</script>

<style lang="less" type="text/less">
  @import "../../assets/styles/index.less";
  .component{
    .PageStyles();
    z-index: @ComponentZIndex;
  }

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

  .list{
    padding: 10/@RootFontSize 12/@RootFontSize;
    background-color: @BackgroundColor;
  }
</style>
