<template>
  <div class="v-radio" @click="valueChange">
    <span
      class="v-input-radio"
      :class="{checked, disabled}"
    >
      <transition name="v-radio-ani">
        <div
          class="v-input-radio-inner"
          :class="{disabled}"
          v-show="checked"
        ></div>
      </transition>
    </span>
    <span
      class="v-radio-name"
    >
      <slot></slot>
    </span>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: null,
        default: ''
      },
      val: {
        type: null,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      valueChange(){
        if(!this.disabled){
          this.$emit('input', this.val)
        }
      }
    },
    computed: {
      checked(){
        return this.val === this.value
      }
    }
  }
</script>

<style type="text/less" lang="less">
  @import "../../styles/variable";
  @RadioDisabled: #f3f3f3;
  @RadioInnerDisabled: #ccc;

  .v-radio{
    display: inline-block;

    .v-input-radio{
      display: inline-block;
      position: relative;
      width: 12/@RootFontSize;
      height: 12/@RootFontSize;
      border-radius: 50%;
      vertical-align: middle;
      border: 1px solid @BorderColor;
      cursor: pointer;
      background-color: #fff;
      transition: border-color .3s;

      &.checked{
        border-color: @Primary;
        &.disabled{
          border-color: @BorderColor;
        }
      }

      &.disabled{
        background-color: @RadioDisabled;
      }

      .v-input-radio-inner{
        position: absolute;
        top: 2/@RootFontSize;
        left: 2/@RootFontSize;
        width: 8/@RootFontSize;
        height: 8/@RootFontSize;
        border-radius: 50%;
        background-color: @Primary;

        &.disabled{
          background-color: @RadioInnerDisabled;
        }
      }
    }

    .v-radio-name{
      margin-left: 2/@RootFontSize;
      vertical-align: middle;
    }
  }

  .v-radio-ani-enter-active,
  .v-radio-ani-leave-active{
    transition: transform .3s;
  }

  .v-radio-ani-enter,
  .v-radio-ani-leave-to{
    transform: scale3d(0, 0, 0)
  }
</style>
