<template>
  <transition name="fade">
    <div class="v-dialog-wrap" v-show="show" @touchmove.prevent @click="show = false">
      <div class="v-dialog" @click.stop>
        <div class="v-dialog-header" :class="{center: titleCenter}">
          {{title}}
          <v-icon type="ios-close-empty" size="0.68" class="v-dialog-close" @click="show = false"></v-icon>
        </div>
        <div class="v-dialog-content" :class="{center: contentCenter}">
          <div v-if="useHtmlStr" v-html="content"></div>
          <div v-else>{{content}}</div>
        </div>
        <div class="v-dialog-footer">
          <v-button type="text" @click="_cancelHandler">取消</v-button>
          <v-button type="info" @click="_confrimHandler">确定</v-button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    data(){
      return {
        title: '',
        content: '',
        titleCenter: false,
        contentCenter: false,
        useHtmlStr: false,
        show: false
      }
    },
    methods: {
      showDialog({
        title = '提示',
        content = '',
        titleCenter = false,
        contentCenter = false,
        useHtmlStr = false,
        confrim,
        cancel
      } = {}){
        this.title = title;
        this.content = content;
        this.titleCenter = titleCenter;
        this.contentCenter = contentCenter;
        this.useHtmlStr = useHtmlStr;
        this._confrim = confrim;
        this._cancel = cancel;
        this.show = true;
      },
      _hideDialog(){
        this.show = false;
      },
      _confrimHandler(){
        this._confrim && Object.prototype.toString.call(this._confrim) === '[object Function]' && this._confrim()

        this._hideDialog()
      },
      _cancelHandler(){
        this._cancel && Object.prototype.toString.call(this._cancel) === '[object Function]' && this._cancel()

        this._hideDialog()
      }
    }
  }
</script>

<style type="text/less" lang="less">
  @import "../../styles/index";

  .v-dialog{
    position: absolute;
    top: 20/@RootFontSize;
    left: 50%;
    width: 90%;
    transform: translateX(-50%);
    z-index: @DialogIndex;
    background-color: #fff;
    border-radius: 6/@RootFontSize;

    .v-dialog-header{
      position: relative;
      padding: 6/@RootFontSize 15/@RootFontSize;
      .titleFontStyle();
      font-size: @MiddleFontSize;
    }

    .v-dialog-header.center,
    .v-dialog-content.center{
      text-align: center;
    }

    .v-dialog-close{
      position: absolute;
      top: 50%;
      right: 15/@RootFontSize;
      transform: translateY(-50%);
      .extend-click();
    }

    .v-dialog-content{
      padding: 6/@RootFontSize 15/@RootFontSize;
      word-break: break-all;
      font-size: @SmallFontSize;
      color: @Content;
    }

    .v-dialog-footer{
      padding: 0 15/@RootFontSize 10/@RootFontSize;
      text-align: right;
    }
  }

  .v-dialog-wrap{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: @BackIndex;
    background-color: rgba(0, 0, 0, .3);
  }

  .fade-enter-active .v-dialog,
  .fade-leave-active .v-dialog{
    transition: transform .2s;
  }

  .fade-enter .v-dialog,
  .fade-leave-to .v-dialog{
    transform: translateX(-50%) scale(.7);
  }

</style>
