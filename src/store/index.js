import Vue from 'vue'
import Vuex from 'vuex'

import accounts from './accounts'
import general from './general'

Vue.use(Vuex)

const Store = new Vuex.Store({
  modules: {
    accounts,
    general
  },
})
export default Store 
