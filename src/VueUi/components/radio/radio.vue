<template>
  <div class="v-radio">
    <span
      class="v-input-radio"
      :class="{checked, disabled}"
      @click="valueChange"
    >
      <div
        class="v-input-radio-inner"
        :class="{disabled}"
      ></div>
    </span>
    <span
      class="v-radio-name"
      @click="valueChange"
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
        default: undefined
      },
      val: {
        type: null,
        default: null
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
        .v-input-radio-inner{
          transform: scale3d(1, 1, 1);
        }

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
        transform: scale3d(0, 0, 0);
        transition: transform .3s;

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
</style>
