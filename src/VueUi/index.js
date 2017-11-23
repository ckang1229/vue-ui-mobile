import * as components from './components'
import './styles/index.less'


const install = function(Vue){
  for(const [name, component] of Object.entries(components)){
    Vue.component(name, component)
  }

  Vue.prototype.$dialog = components.VDialog.showDialog
  Vue.prototype.$loadingBar = components.VLoadingBar
  Vue.prototype.$message = components.VMessage
  Vue.prototype.$loadingBarConfig = components.VLoadingBar.config
}

export default install
