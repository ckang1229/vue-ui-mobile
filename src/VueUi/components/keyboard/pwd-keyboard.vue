<template>
  <transition name="fade-ani">
    <div class="v-pwd-keyboard-wrap" v-show="isOpen" @click="close">
      <v-keyboard ref="VKeyboard">
        <div slot="pwd-area" >
          <div class="v-pwd-title">输入安全密码</div>
          <div class="v-pwd-result">
            <div class="v-pwd-result-box">
              <div class="v-pwd-result-box-item" :class="{active: i <= result.length}" v-for="i in PWD_LENGTH"></div>
            </div>
          </div>
        </div>
      </v-keyboard>
    </div>
  </transition>
</template>

<script>
  import VKeyboard from './keyboard'

  const PWD_LENGTH = 6

  export default {
    data () {
      return {
        isOpen: false,
        result: []
      }
    },
    created () {
      this.PWD_LENGTH = PWD_LENGTH
    },
    methods: {
      open (opt = {}) {
        if('onComplete' in opt){
          this.completeCallBack = opt.onComplete
        }

        this.result = []
        this.isOpen = true

        this.$refs.VKeyboard.open({
          onKeyClick: this.onKeyClick
        })
      },
      close () {
        this.isOpen = false
      },
      onKeyClick (keyText) {
        if(keyText !== 'C' && this.result.length < PWD_LENGTH){
          this.result.push(keyText)
        }else if(keyText === 'C'){
          this.result.splice(this.result.length - 1)
        }

        if(this.result.length === PWD_LENGTH){
          this.completeCallBack(this.result.join(''))
        }
      }
    },
    components: {
      VKeyboard
    }
  }
</script>

<style lang="less" type="text/less">
  @import "../../styles/variable";

  .v-pwd-keyboard-wrap{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .6);

    .v-pwd-title{
      padding: 10 / @RootFontSize 0;
      text-align: center;
      border-bottom: 1px solid #ddd;
      font-size: 18 / @RootFontSize;
      color: #000;
    }

    .v-pwd-result{
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100 / @RootFontSize;
    }

    .v-pwd-result-box{
      display: flex;
    }

    .v-pwd-result-box-item{
      position: relative;
      width: 40 / @RootFontSize;
      height: 40 / @RootFontSize;
      border-left: 1px solid #ddd;
      border-top: 1px solid #ddd;
      border-bottom: 1px solid #ddd;

      &:last-child{
        border-right: 1px solid #ddd;
      }
      
      &.active::after{
        content: "";
        margin-top: -7 / @RootFontSize;
        margin-left: -7 / @RootFontSize;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 14 / @RootFontSize;
        height: 14 / @RootFontSize;
        background-color: #000;
        border-radius: 50%;
      }
    }
  }
</style>