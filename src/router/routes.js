const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/home/Home.vue'),
    meta: {
      authenticated: false,
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login/Login.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('@/pages/register/Register.vue'),
  },
  {
    path: '/components',
    name: 'components',
    component: () => import('@/views/Components.vue')
  }, {
    path: '/newgame',
    name: 'newgame',
    component: () => import('@/pages/game/Asigments.vue')
  },
  {
    path: '/difficulty',
    name: 'difficulty',
    component: () => import('@/pages/game/Difficulty.vue')
  }
]

export default routes
