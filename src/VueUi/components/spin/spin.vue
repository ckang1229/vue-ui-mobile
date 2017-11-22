<template>
  <div class="v-spin">
    <icon type="load-c" :size="size" :color="color" class="v-spin-load"></icon>
    <div class="v-spin-msg" v-if="msg" :color="color">{{msg}}</div>
  </div>
</template>

<script>
  import Icon from '../icon'

  export default {
    props: {
      color: {
        type: String,
        default: '#3399ff'
      },
      msg: {
        type: String,
        default: ''
      },
      size: {
        type: String,
        default: '0.5'
      }
    },
    components: {
      Icon
    }
  }
</script>

<style type="text/less" lang="less">
  @import "../../styles/index";

  .v-spin{
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .v-spin-load{
      text-align: center;
      transform-origin: center;
      animation: rotate-full .8s infinite linear;
    }

    .v-spin-msg{
      font-size: @MiddleFontSize;
    }
  }
</style>
