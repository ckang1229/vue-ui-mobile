<template>
  <component-view :scroll="false">
    <div class="scroll" slot="no-scroll">
      <v-button type="primary" @click="defaultKeyboard">普通数字键盘</v-button>
      <v-button type="primary" @click="haveXKeyboard">带有X字符数字键盘</v-button>
      <v-button type="primary" @click="PwdKeyboard">密码数字键盘</v-button>
      <v-keyboard ref="VKeyboard"></v-keyboard>
      <v-pwd-keyboard ref="VPwdKeyboard"></v-pwd-keyboard>
    </div>
  </component-view>
</template>

<script>
  import ComponentView from '../../components/ComponentView.vue'

  export default {
    methods: {
      onkeyClick (keyText) {
        this.$message.info(`点击了${keyText}`)
      },
      defaultKeyboard () {
        this.$refs.VKeyboard.open({
          onKeyClick: this.onkeyClick
        })
      },
      haveXKeyboard () {
        this.$refs.VKeyboard.open({
          XButton: true,
          onKeyClick: this.onkeyClick
        })
      },
      PwdKeyboard () {
        this.$refs.VPwdKeyboard.open({
          onComplete (result) {
            this.$message.info(`输入结果: ${result}`)
          }
        })
      }
    },
    components: {
      ComponentView
    }
  }
</script>
