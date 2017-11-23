<template>
  <component-view>
    <div class="scroll">
      <div>switchVal: {{switchVal}}</div>
      <v-switch v-model="switchVal"></v-switch>
    </div>
  </component-view>
</template>

<script>
  import ComponentView from '../../components/ComponentView.vue'

  export default {
    data(){
      return {
        switchVal: false
      }
    },
    components: {
      ComponentView
    }
  }
</script>
