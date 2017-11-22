<template>
  <transition name="msg-ani">
    <div class="v-message" :class="[type]" v-if="show">
      <v-icon :type="getIcon.name" v-if="type" size="0.38" :color="getIcon.color"></v-icon>
      <span class="v-message-content">{{content}}</span>
    </div>
  </transition>
</template>

<script>
  export default {
    data(){
      return {
        show: false
      }
    },
    props: {
      type: {
        type: String,
        default: ''
      },
      content: {
        type: String,
        default: ''
      }
    },
    computed: {
      getIcon(){
        let icon = {};

        switch (this.type){
          case 'info':
            icon.name = 'information-circled';
            icon.color = '#878D99';
            break;
          case 'success':
            icon.name = 'checkmark-circled';
            icon.color = '#67C23A';
            break;
          case 'warning':
            icon.name = 'information-circled';
            icon.color = '#EB9E05';
            break;
          case 'error':
            icon.name = 'close-circled';
            icon.color = '#FA5555';
            break;
        }

        return icon;
      }
    }
  }
</script>

<style type="text/less" lang="less">
  @import "../../styles/index";

  .v-message{
    padding: 6/@RootFontSize 12/@RootFontSize;
    position: fixed;
    top: 10/@RootFontSize;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    z-index: @MessageIndex;
    font-size: @MiddleFontSize;
    background-color: #fff;
    box-shadow: 0 0 6/@RootFontSize rgba(0, 0, 0, .1);
    border-radius: 4/@RootFontSize;
    color: @Content;
    border: 1px solid transparent;
    white-space: nowrap;
  }

  .v-message.info{
    background-color: #edf2fc;
    border-color: #e6ebf5;
    color: #878D99;
  }

  .v-message.success{
    background-color: #f0f9eb;
    border-color: #e1f3d8;
    color: #67C23A;
  }

  .v-message.warning{
    background-color: oldlace;
    border-color: #fbeccd;
    color: #EB9E05;
  }

  .v-message.error{
    background-color: #fee;
    border-color: #fedddd;
    color: #FA5555;
  }

  .msg-ani-enter-active,
  .msg-ani-leave-active{
    transition: transform .2s, opacity .2s;
  }

  .msg-ani-enter,
  .msg-ani-leave-to{
    transform: translate3d(-50%, -50%, 0);
    opacity: 0;
  }
</style>
