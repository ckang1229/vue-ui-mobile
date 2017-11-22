<template>
  <div
    class="v-button"
    :class="[type, long && 'long', disabled && 'disabled', circle && 'circle']"
    @click="!disabled && $emit('click', $event)"
  >
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        default: ''
      },
      long: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      circle: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="less" type="text/less">
  @import "../../styles/variable";

  .v-button{
    display: inline-block;
    padding: 6/@RootFontSize 15/@RootFontSize;
    user-select: none;
    cursor: pointer;
    border-radius: 4/@RootFontSize;
    background-color: @Default;
    color: @Content;
    font-size: @SmallFontSize;
    border: 1px solid @BorderColor;
    box-sizing: border-box;

    &.circle{
      border-radius: 30 / @RootFontSize;
    }

    &.long{
      width: 100%;
      text-align: center;
    }

    &.primary{
      background-color: @Primary;
      border-color: @Primary;
      color: #fff;
    }

    &.text{
      background-color: transparent;
      border-color: transparent;
    }

    &.info{
      background-color: @Info;
      border-color: @Info;
      color: #fff;
    }

    &.success{
      background-color: @Success;
      border-color: @Success;
      color: #fff;
    }

    &.warning{
      background-color: @Warning;
      border-color: @Warning;
      color: #fff;
    }

    &.error{
      background-color: @Error;
      border-color: @Error;
      color: #fff;
    }

    &.disabled{
      background-color: @Default;
      color: @Disabled;
      border-color: @BorderColor;
    }
  }
</style>
