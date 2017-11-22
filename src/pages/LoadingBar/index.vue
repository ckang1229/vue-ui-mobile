<template>
  <component-view>
    <div class="scroll">
      <v-button type="primary" @click="$loadingBar.start()">开始</v-button>
      <v-button type="primary" @click="$loadingBar.update({current: 40})">update 40</v-button>
      <v-button type="primary" @click="$loadingBar.finish()">结束</v-button>
      <v-button type="primary" @click="updateColor('#ff9900')">自定义颜色 #ff9900</v-button>
      <v-button type="primary" @click="updateHeight('3px')">自定义高度 3px</v-button>
      <v-button type="primary" @click="withSpin()">带有spin</v-button>
    </div>
  </component-view>
</template>

<script>
  import ComponentView from '../../components/ComponentView.vue'

  export default {
    methods: {
      updateColor(color){
        this.$loadingBar.destroy()

        this.$loadingBarConfig({
          color
        })
      },
      updateHeight(height){
        this.$loadingBar.destroy()

        this.$loadingBarConfig({
          height
        })
      },
      withSpin(){
        this.$loadingBar.destroy()

        this.$loadingBarConfig({
          spin: true
        })
      }
    },
    components: {
      ComponentView
    }
  }
</script>
