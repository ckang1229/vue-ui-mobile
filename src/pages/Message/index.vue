<template>
  <component-view>
    <div class="scroll">
      <v-button type="primary" @click="$message.default('默认的message')">默认的message</v-button>
      <v-button type="info" @click="$message.info('这是一条信息')">Info</v-button>
      <v-button type="success" @click="$message.success('成功!这是一条成功信息')">成功</v-button>
      <v-button type="warning" @click="$message.warning('警告!这是一条警告信息')">警告</v-button>
      <v-button type="error" @click="$message.error('错误!这是一条错误信息')">错误</v-button>
      <v-button type="info" @click="$message.info({duration: 2000, content: '自定义停留时长 2000ms'})">自定义停留时长 2000ms</v-button>
    </div>
  </component-view>
</template>

<script>
  import ComponentView from '../../components/ComponentView.vue'

  export default {
    components: {
      ComponentView
    }
  }
</script>
