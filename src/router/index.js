import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home'

const ButtonView = () => import('../pages/Button')
const DialogView = () => import('../pages/Dialog')
const LoadingBarView = () => import('../pages/LoadingBar')
const PullDownRefreshView = () => import('../pages/PullDownRefresh')
const MessageView = () => import('../pages/Message')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/button',
      name: 'Button',
      component: ButtonView
    },
    {
      path: '/dialog',
      name: 'Dialog',
      component: DialogView
    },
    {
      path: '/loading-bar',
      name: 'LoadingBar',
      component: LoadingBarView
    },
    {
      path: '/pull-down-refresh',
      name: 'PullDownRefresh',
      component: PullDownRefreshView
    },
    {
      path: '/message',
      name: 'Message',
      component: MessageView
    }
  ]
})
