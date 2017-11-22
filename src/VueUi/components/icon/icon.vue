<template>
  <i
    class="v-icon"
    :class="[`v-icon-${type}`]"
    :style="{fontSize: `${size}rem`, color}"
    @click="$emit('click', $event)"
  ></i>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        default: ''
      },
      size: {
        type: String,
        default: ''
      },
      color: {
        type: String,
        default: ''
      }
    }
  }
</script>
