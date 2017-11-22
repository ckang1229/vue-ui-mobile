<template>
  <component-view>
    <div class="scroll">
      <div>radioVal: {{radioVal}}</div>
      <v-radio v-model="radioVal" val="Iphone">Iphone</v-radio>
      <v-radio v-model="radioVal" val="Android">Android</v-radio>
      <v-radio v-model="radioVal" val="Sony">Sony</v-radio>
      <v-radio v-model="radioVal" val="disabled" disabled>Disabled</v-radio>
    </div>
  </component-view>
</template>

<script>
  import ComponentView from '../../components/ComponentView.vue'

  export default {
    data(){
      return {
        radioVal: 'disabled'
      }
    },
    components: {
      ComponentView
    }
  }
</script>
