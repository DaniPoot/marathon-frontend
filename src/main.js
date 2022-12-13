import Vue from 'vue'
import VueFormulate from '@braid/vue-formulate'
import App from './App.vue'
import router from './router'
import Argon from './plugins/argon-kit'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(Argon)
Vue.use(VueFormulate, {
  outer: (context, classes) => {
    return classes.concat([
      'form-group'
    ])
  },
  classes: {
    error: (context, classes) => {
      return classes.concat([
        'text-danger'
      ])
    },
    input: (context, classes) => {
      const myClasses = ['form-control']
      if (context.type === 'checkbox') myClasses.push('custom-control-input')
      if (context.hasErrors) myClasses.push('is-invalid')
      return classes.concat(myClasses)
    },
    decorator: (context, classes) => {
      return classes.concat('custom-control-label')
    },
  }
})
new Vue({
  router: router({ store }),
  store,
  render: h => h(App)
}).$mount('#app')
