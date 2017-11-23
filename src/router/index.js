import Vue from 'vue'
import Router from 'vue-router'
import { VLoadingBar } from '../VueUi/components'

import Home from '../pages/Home'

const ButtonView = () => import('../pages/Button')
const DialogView = () => import('../pages/Dialog')
const LoadingBarView = () => import('../pages/LoadingBar')
const PullDownRefreshView = () => import('../pages/PullDownRefresh')
const MessageView = () => import('../pages/Message')
const RadioView = () => import('../pages/Radio')
const CheckboxView = () => import('../pages/Checkbox')
const SwitchView = () => import('../pages/Switch')

Vue.use(Router)

const router = new Router({
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
    },
    {
      path: '/radio',
      name: 'Radio',
      component: RadioView
    },
    {
      path: '/checkbox',
      name: 'Checkbox',
      component: CheckboxView
    },
    {
      path: '/switch',
      name: 'Switch',
      component: SwitchView
    }
  ]
})

router.beforeEach((to, from, next) => {
  VLoadingBar.start()

  next()
})

router.afterEach(() => {
  VLoadingBar.finish()
})

export default router
