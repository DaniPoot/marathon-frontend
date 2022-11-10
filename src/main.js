import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Argon from './plugins/argon-kit'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(Argon)
new Vue({
  router: router({ store }),
  store,
  render: h => h(App)
}).$mount('#app')
