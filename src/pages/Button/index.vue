<template>
  <component-view>
    <div class="scroll">
      <div class="demo-btn">
        <v-button>Default</v-button>
        <v-button type="primary">Primary</v-button>
        <v-button type="text">Text</v-button>
        <v-button type="info">Info</v-button>
        <v-button type="success">Success</v-button>
        <v-button type="warning">Warning</v-button>
        <v-button type="error">Error</v-button>
        <v-button type="error" disabled>Disabled</v-button>
      </div>
      <div class="long-btn">
        <v-button long>Default</v-button>
        <v-button type="primary" long>Primary</v-button>
        <v-button type="text" long>Text</v-button>
        <v-button type="info" long>Info</v-button>
        <v-button type="success" long>Success</v-button>
        <v-button type="warning" long>Warning</v-button>
        <v-button type="error" long>Error</v-button>
        <v-button type="error" disabled long>Disabled</v-button>
      </div>
      <div class="circle-btn">
        <v-button long circle>Default</v-button>
        <v-button type="primary" long circle>Primary</v-button>
        <v-button type="text" long circle>Text</v-button>
        <v-button type="info" long circle>Info</v-button>
        <v-button type="success" long circle>Success</v-button>
        <v-button type="warning" long circle>Warning</v-button>
        <v-button type="error" long circle>Error</v-button>
        <v-button type="error" disabled long circle>Disabled</v-button>
      </div>
    </div>
  </component-view>
</template>

<script>
  import ComponentView from '../../components/ComponentView'

  export default {
    name: 'button',
    components: {
      ComponentView
    }
  }
</script>

<style lang="less" type="text/less">
  @import "../../assets/styles/index.less";

  .demo-btn{
    .v-button{
      margin-top: 10 / @RootFontSize;
      margin-left: 10 / @RootFontSize;
    }
  }

  .long-btn,
  .circle-btn{
    padding: 10 / @RootFontSize;
    .v-button{
      margin-top: 10 / @RootFontSize;
      &:last-child{
        margin-bottom: 20 / @RootFontSize;
      }
    }
  }
</style>
