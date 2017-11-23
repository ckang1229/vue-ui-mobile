<template>
  <component-view>
    <div class="scroll">
      <div class="config">
        <span class="config-name">高度</span>
        <v-radio v-model="config.height" val="2px">2px</v-radio>
        <v-radio v-model="config.height" val="3px">3px</v-radio>
        <v-radio v-model="config.height" val="4px">4px</v-radio>
      </div>
      <div class="config">
        <span class="config-name">颜色</span>
        <v-radio v-model="config.color" val="#3399ff">#3399ff</v-radio>
        <v-radio v-model="config.color" val="#ff9900">#ff9900</v-radio>
        <v-radio v-model="config.color" val="#00cc66">#00cc66</v-radio>
      </div>
      <div class="config">
        <span class="config-name">spin</span>
        <v-switch v-model="config.spin"></v-switch>
      </div>
      <div class="config">
        <v-button type="primary" @click="start">开始</v-button>
        <v-button type="error" @click="end">结束</v-button>
      </div>
    </div>
  </component-view>
</template>

<script>
  import ComponentView from '../../components/ComponentView.vue'

  export default {
    data(){
      return {
        config: {
          spin: false,
          color: '#3399ff',
          height: '2px'
        }
      }
    },
    methods: {
      start(){
        this.$loadingBar.start(this.config)
      },
      end(){
        this.$loadingBar.finish()
      }
    },
    components: {
      ComponentView
    }
  }
</script>
