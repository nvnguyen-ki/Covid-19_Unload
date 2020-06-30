import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import staticData from '@/components/staticData'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/staticData',
      name: 'staticData',
      component: staticData
    }
  ]
})
