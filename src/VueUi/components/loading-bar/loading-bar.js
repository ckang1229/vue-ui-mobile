import LoadingBar from './loading-bar.vue'
import Vue from 'vue'

LoadingBar.newInstance = properties => {
  const _props = properties || {}

  const Instance = new Vue({
    data: _props,
    render(h){
      return h(LoadingBar, {
        props: _props
      })
    }
  })

  const component = Instance.$mount();
  document.body.appendChild(component.$el)
  const loadingBar = component.$children[0]

  return {
    update(conf){
      if('current' in conf){
        loadingBar.current = conf.current;
      }

      if('show' in conf){
        loadingBar.show = conf.show;
      }
    },
    destroy(){
      document.body.removeChild(document.getElementsByClassName('v-loading-bar')[0])
    }
  }
}

export default LoadingBar
