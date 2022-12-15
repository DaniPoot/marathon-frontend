const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/home/Home.vue'),
    meta: {
      authenticated: true,
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
    component: () => import('@/pages/game/Asigments.vue'),
    meta: {
      authenticated: true,
    }
  },
  {
    path: '/difficulty',
    name: 'difficulty',
    component: () => import('@/pages/game/Difficulty.vue'),
    meta: {
      authenticated: true,
    }
  },
  {
    path: '/board',
    name: 'board',
    component: () => import('@/pages/game/Board.vue'),
    meta: {
      authenticated: true,
    }
  },
  {
    path: '/score',
    name: 'score',
    component: () => import('@/pages/game/Score.vue'),
    meta: {
      authenticated: true,
    }
  }
]

export default routes
