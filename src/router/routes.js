const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/home/Home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login/Login.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('@/pages/register/Register.vue')
  },
  {
    path: '/components',
    name: 'components',
    component: () => import('@/views/Components.vue')
  }
]

export default routes
