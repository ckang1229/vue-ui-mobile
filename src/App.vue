<template>
  <div id="app" @touchmove.prevent>
    <transition :name="transitionName">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      transitionName: ''
    }
  },
  watch: {
    $route(to, from){
      const toDeep = to.path.split('/').filter(path => path).length
      const fromDeep = from.path.split('/').filter(path => path).length

      this.transitionName = toDeep > fromDeep ? 'translate-left' : 'translate-right'
    }
  }
}
</script>

<style lang="less" type="text/less">
  @import "./assets/styles/index";

  #app{
    font-size: @SmallFontSize;
    color: @Content;
    .CN-fontFamily();
  }

  .translate-left-enter-active,
  .translate-left-leave-active,
  .translate-right-enter-active,
  .translate-right-leave-active{
    transition: transform .4s;
  }

  .translate-left-enter,
  .translate-right-leave-to{
    transform: translate3d(100%, 0, 0);
  }
  .translate-left-leave-to,
  .translate-right-enter{
    transform: translate3d(-20%, 0, 0);
  }
</style>
