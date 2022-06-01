import Vue from 'vue'
import Vuex from 'vuex'

import accounts from './account'
import general from './general'

import * as authAPI from '../services/authApi'

Vue.use(Vuex)

const Store = new Vuex.Store({
  modules: {
    accounts,
    general
  },
})

Store.$auth = authAPI

export default Store 
