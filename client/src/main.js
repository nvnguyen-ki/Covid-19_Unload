// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
// import {sync} from 'vuex-router-sync'
// import store from './store/store'
import AOS from 'aos'
import 'aos/dist/aos.css'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

Vue.config.productionTip = false
Vue.use(Vuetify)

// sync(store, router)
/* eslint-disable no-new */
new Vue({
  created () {
    AOS.init()
  },
  el: '#app',
  router,
  AOS,
  PulseLoader,
  // store,
  components: { App },
  template: '<App/>',
  render: h => h(App)
}).$mount('#app')
