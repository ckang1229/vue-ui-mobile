<template>
  <transition name="fade-ani">
    <div class="v-keyboard-wrap" v-show="isOpen" @click="close()">
      <transition name="translateY">
        <div class="v-keyboard" v-show="isOpen" @click.stop>
          <slot name="pwd-area"></slot>
          <div class="key-group" @click="keyClick($event.target)">
            <div class="key-board-row">
              <div class="key-item">1</div>
              <div class="key-item">2</div>
              <div class="key-item">3</div>
            </div>
            <div class="key-board-row">
              <div class="key-item">4</div>
              <div class="key-item">5</div>
              <div class="key-item">6</div>
            </div>
            <div class="key-board-row">
              <div class="key-item">7</div>
              <div class="key-item">8</div>
              <div class="key-item">9</div>
            </div>
            <div class="key-board-row">
              <div class="key-item key-item--gray" :class="{'key-item--disabled': !XButton}">{{XButton ? 'X' : ''}}</div>
              <div class="key-item">0</div>
              <div class="key-item key-item--gray">C</div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
  export default {
    data () {
      return {
        XButton: false,
        isOpen: false
      }
    },
    methods: {
      open (opt = {}) {
        this.XButton = 'XButton' in opt ? opt.XButton : false

        if('onKeyClick' in opt){
          this.onKeyClick = opt.onKeyClick
        }

        this.isOpen = true
      },
      close () {
        this.isOpen = false
      },
      keyClick (el) {
        if(el.className.includes('key-item')){
          this.onKeyClick(el.innerHTML)
        }
      }
    }
  }
</script>

<style type="text/less" lang="less">
  @import "../../styles/variable";

  .v-keyboard-wrap{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: transparent;

    .v-keyboard{
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: #fff;
      transform: translateY(0);

      &.translateY-leave-to,
      &.translateY-enter{
        transform: translateY(100%);
      }

      &.translateY-leave-active,
      &.translateY-enter-active{
        transition: transform .4s;
      }
    }

    .key-group{
      .key-board-row{
        display: flex;
        border-top: 1px solid #ddd;
      }

      .key-item{
        flex: 1;
        height: 40 / @RootFontSize;
        line-height: 40 / @RootFontSize;
        text-align: center;

        &--gray{
          background-color: #f5f5f5;
        }

        &--disabled{
          pointer-events: none;
        }

        &:active{
          background-color: #e7e7e8;
        }

        &:not(:last-child){
          border-right: 1px solid #ddd;
        }
      }
    }
  }

  .fade-ani-leave-to,
  .fade-ani-enter{
    opacity: 0;
  }

  .fade-ani-leave-active,
  .fade-ani-enter-active{
    transition: opacity .4s;
  }
</style>