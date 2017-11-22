<template>
  <div class="v-checkbox">
    <span
      class="v-input-checkbox"
      :class="{checked, disabled}"
      @click="toggleCheck"
    >
      <icon
        type="checkmark"
        size="0.32"
        :color="iconColor"
        v-show="checked"
      ></icon>
    </span>
    <span
      class="v-checkbox-name"
      @click="toggleCheck"
    >
      <slot></slot>
    </span>
  </div>
</template>

<script>
  import Icon from '../icon'

  export default {
    props: {
      value: {
        type: Array,
        default: []
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
      toggleCheck(){
        if(this.disabled) return;
        let newValue = [...this.value];

        if(this.checked){
          newValue.splice(this.index, 1)
        }else{
          newValue.push(this.val)
        }

        this.$emit('input', newValue)
      }
    },
    computed: {
      index(){
        return this.value.findIndex(v => v === this.val)
      },
      checked(){
        return this.index !== -1
      },
      iconColor(){
        return this.disabled ? '#ccc' : '#fff'
      }
    },
    components: {
      Icon
    }
  }
</script>

<style lang="less" type="text/less">
  @import "../../styles/variable";

  .v-checkbox{
    display: inline-block;

    .v-input-checkbox{
      display: inline-flex;
      width: 12/@RootFontSize;
      height: 12/@RootFontSize;
      vertical-align: middle;
      border: 1px solid @BorderColor;
      align-items: center;
      justify-content: center;
      border-radius: 2/@RootFontSize;
      transition: background-color .3s, border-color .3s;

      &.checked{
        border-color: @Primary;
        background-color: @Primary;
        &.disabled{
          border-color: @BorderColor;
          background-color: @CheckboxDisabled;
        }
      }
    }
    .v-checkbox-name{
      margin-left: 2/@RootFontSize;
      vertical-align: middle;
    }
  }
</style>
