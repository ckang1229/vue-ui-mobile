import VScroll from './components/scroll'
import VPullDownRefresh from './components/pull-down-refresh'
import VIcon from './components/icon'
import VButton from './components/button'
import VDialog from './components/dialog'
import VLoadingBar from './components/loading-bar'
import VMessage from './components/message'
import VRadio from './components/radio'
import VCheckbox from './components/checkbox'

import './styles/index.less'

const components = {
  VScroll,
  VIcon,
  VButton,
  VPullDownRefresh,
  VRadio,
  VCheckbox
}

const install = function(Vue){
  for(const [name, component] of Object.entries(components)){
    Vue.component(name, component)
  }

  Vue.prototype.$dialog = VDialog.showDialog
  Vue.prototype.$loadingBar = VLoadingBar
  Vue.prototype.$message = VMessage
  Vue.prototype.$loadingBarConfig = VLoadingBar.config
}

export const API = {
  install,
  ...components
}

export default API
