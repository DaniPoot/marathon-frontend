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
    let modalBackground = document.querySelector('.modal-backdrop')
    if (modalBackground) {
      modalBackground.remove()
    }
    const { authenticated, userTypes } = to.meta
    const isAuthenticated = store.getters['accounts/isAuthenticated']
    const userType = store.getters['accounts/userType']

    if (!isAuthenticated && authenticated) {
      const route = { name: 'login', params: { to: to.name, params: to.params } }
      next(route)
    } else if (!isAuthenticated && !authenticated) {
      next()
    }
    if (isAuthenticated) {
      if (userTypes.includes(userType) || userType === UserTypes.ALL) {
        next()
        return
      }
      if (userType === UserTypes.ADMINISTRATOR || userType === UserTypes.PROFESSOR) {
        next({ name: 'dashboard' })
        return
      }
      next({ name: 'home' })
      return
    }

  })

  return router
}
