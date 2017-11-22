import VScroll from './components/scroll'
import VPullDownRefresh from './components/pull-down-refresh'
import VIcon from './components/icon'
import VButton from './components/button'
import VDialog from './components/dialog'
import LoadingBar from './components/loading-bar'
import Message from './components/message'

import './styles/index.less'

const components = {
  VScroll,
  VIcon,
  VButton,
  VPullDownRefresh
}

const install = function(Vue){
  for(const [name, component] of Object.entries(components)){
    Vue.component(name, component)
  }

  Vue.prototype.$dialog = VDialog.showDialog
  Vue.prototype.$loadingBar = LoadingBar
  Vue.prototype.$message = Message
  Vue.prototype.$loadingBarConfig = LoadingBar.config
}

export const API = {
  install,
  ...components
}

export default API
