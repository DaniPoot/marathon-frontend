import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

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
    const isAuthenticated = store.getters['accounts/isAuthenticated']
    if (to.name !== 'login' && !isAuthenticated && to.meta.authenticated) next({ name: 'login' })
    else next()
  })

  return router
}
