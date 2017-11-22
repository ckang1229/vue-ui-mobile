<template>
  <scroll
    :pullDownRefresh="true"
    @pullingDown="$emit('pullingDown')"
    :refreshTxt="refreshTxt"
    ref="scroll"
  >
    <slot></slot>
  </scroll>
</template>

<script>
  import Scroll from '../scroll';

  export default {
    methods: {
      complete(){
        this.$refs.scroll.forceUpdate()
      },
      refresh(){
        this.$refs.scroll.refresh()
      }
    },
    props: {
      refreshTxt: {
        type: String,
        default: '刷新成功'
      }
    },
    components: {
      Scroll
    }
  }
</script>
