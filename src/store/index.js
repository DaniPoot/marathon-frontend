import Vue from 'vue'
import Vuex from 'vuex'

import accounts from './account'
import general from './general'

import * as authAPI from '../services/authApi'
import * as answersAPI from '../services/answersApi'
import * as difficultiesAPI from '../services/difficultiesApi'
import * as questionsAPI from '../services/questionsApi'
import * as subjectsAPI from '../services/subjectsApi'
import * as topicsAPI from '../services/topicsApi'

Vue.use(Vuex)

const Store = new Vuex.Store({
  modules: {
    accounts,
    general
  },
})

Store.$auth = authAPI
Store.$answers = answersAPI
Store.$difficulties = difficultiesAPI
Store.$questions = questionsAPI
Store.$subjects = subjectsAPI
Store.$topics = topicsAPI

export default Store 
