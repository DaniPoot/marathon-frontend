import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import { UserTypes } from '../const/UserTypes'

Vue.use(Router)

export default function ({ store }) {
  const router = new Router({
    linkExactActiveClass: 'active',
    routes,
    scrollBehavior: to => {
      if (to.hash) {
        return { selector: to.hash }
      } else {
        return { x: 0, y: 0 }
      }
    }
  })

  router.beforeEach((to, from, next) => {
    const { authenticated } = to.meta
    const isAuthenticated = store.getters['accounts/isAuthenticated']
    if (to.name !== 'login' && !isAuthenticated && authenticated) {
      const route = { name: 'login', params: { to: to.name, params: to.params  } }
      next(route)
    }
    else next()
  })

  return router
}
