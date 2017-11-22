<template>
  <component-view>
    <div class="scroll">
      <div>checkboxVal: {{checkboxVal}}</div>
      <v-checkbox val="苹果" v-model="checkboxVal">苹果</v-checkbox>
      <v-checkbox val="梨子" v-model="checkboxVal">梨子</v-checkbox>
      <v-checkbox val="香蕉" v-model="checkboxVal">香蕉</v-checkbox>
      <v-checkbox val="橘子" v-model="checkboxVal" disabled>橘子</v-checkbox>
    </div>
  </component-view>
</template>

<script>
  import ComponentView from '../../components/ComponentView.vue'

  export default {
    data(){
      return {
        checkboxVal: ['橘子']
      }
    },
    components: {
      ComponentView
    }
  }
</script>
