import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueFullPage from 'vue-fullpage.js'
import 'fullpage.js/dist/fullpage.css'

Vue.use(VueFullPage);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
