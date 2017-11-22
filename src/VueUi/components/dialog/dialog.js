import Dialog from './dialog.vue'
import Vue from 'vue'

Dialog.newInstance = () => {
  const Instance = new Vue({
    render(h){
      return h(Dialog)
    }
  })

  const component = Instance.$mount();
  document.body.appendChild(component.$el)
  const dialog = component.$children[0]

  return {
    showDialog(config){
      dialog.showDialog(config)
    }
  }
}

export default Dialog
