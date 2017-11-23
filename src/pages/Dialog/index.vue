<template>
  <component-view class="dialog-view">
    <div class="scroll">
      <div class="config">
        <span>标题居中</span>
        <v-switch v-model="config.titleCenter"></v-switch>
      </div>
      <div class="config">
        <span>内容居中</span>
        <v-switch v-model="config.contentCenter"></v-switch>
      </div>
      <v-button type="primary" @click="showDialog({content: '自定义文本'})">默认Dialog</v-button>
      <v-button type="primary" @click="showDialog({title: '自定义标题', content: '自定义文本'})">自定义标题</v-button>
      <v-button type="primary" @click="showDialog({content: '<div>div1</div><div>div2</div>', useHtmlStr: true})">内容为html字符串片段</v-button>
    </div>
  </component-view>
</template>

<script>
  import ComponentView from '../../components/ComponentView.vue'

  export default {
    data(){
      return {
        config: {
          titleCenter: false,
          contentCenter: false
        }
      }
    },
    methods: {
      showDialog(config){
        this.$dialog({
          ...config,
          ...this.config
        })
      }
    },
    components: {
      ComponentView
    }
  }
</script>

<style type="text/less" lang="less">
  @import "../../assets/styles/index";

  .dialog-view .v-button{
    margin-top: 10/@RootFontSize;
  }
</style>
