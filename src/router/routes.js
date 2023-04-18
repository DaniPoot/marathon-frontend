import { UserTypes } from '../const/UserTypes'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/home/Home.vue'),
    meta: {
      authenticated: true,
      userTypes: [UserTypes.STUDENT]
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/pages/home/Dashboard.vue'),
    meta: {
      authenticated: true,
      userTypes: [UserTypes.ADMINISTRATOR, UserTypes.PROFESSOR]
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login/Login.vue'),
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
      userTypes: [UserTypes.ADMINISTRATOR, UserTypes.PROFESSOR, UserTypes.STUDENT]
    }
  },
  {
    path: '/difficulty',
    name: 'difficulty',
    component: () => import('@/pages/game/Difficulty.vue'),
    meta: {
      authenticated: true,
      userTypes: [UserTypes.ADMINISTRATOR, UserTypes.PROFESSOR, UserTypes.STUDENT]
    }
  },
  {
    path: '/questions',
    component: () => import('@/pages/questions/Questions.vue'),
    children: [
      {
        path: '',
        name: 'question-list',
        component: () => import('@/pages/questions/list/questions-list.vue'),
        meta: {
          authenticated: true,
          userTypes: [UserTypes.ADMINISTRATOR, UserTypes.PROFESSOR]
        }
      },
      {
        path: 'create',
        name: 'question-form',
        component: () => import('@/pages/questions/form/question-form.vue'),
        meta: {
          authenticated: true,
          userTypes: [UserTypes.ADMINISTRATOR, UserTypes.PROFESSOR]
        }
      },
      {
        path: 'edit/:questionId',
        name: 'question-edit',
        component: () => import('@/pages/questions/form/question-form.vue'),
        meta: {
          authenticated: true,
          userTypes: [UserTypes.ADMINISTRATOR, UserTypes.PROFESSOR]
        }
      }
    ],
    meta: {
      authenticated: true,
    }
  },
  {
    path: '/difficulties',
    component: () => import('@/pages/questions/Questions.vue'),
    children: [
      {
        path: '',
        name: 'difficulties-list',
        component: () => import('@/pages/difficulties/list/difficulties-list.vue'),
        meta: {
          authenticated: true,
          userTypes: [UserTypes.ADMINISTRATOR, UserTypes.PROFESSOR]
        }
      },
      {
        path: 'create',
        name: 'difficulty-form',
        component: () => import('@/pages/difficulties/form/difficulty-form.vue'),
        meta: {
          authenticated: true,
          userTypes: [UserTypes.ADMINISTRATOR, UserTypes.PROFESSOR]
        },
      },
      {
        path: 'edit/:difficultyId',
        name: 'difficulty-edit',
        component: () => import('@/pages/difficulties/form/difficulty-form.vue'),
        props: true,
        meta: {
          authenticated: true,
          userTypes: [UserTypes.ADMINISTRATOR, UserTypes.PROFESSOR]
        },
      }
    ],
    meta: {
      authenticated: true,
    }
  },
  {
    path: '/subjects',
    component: () => import('@/pages/questions/Questions.vue'),
    children: [
      {
        path: '',
        name: 'subjects-list',
        component: () => import('@/pages/subjects/list/subjects-list.vue'),
        meta: {
          authenticated: true,
          userTypes: [UserTypes.ADMINISTRATOR, UserTypes.PROFESSOR]
        }
      },
      {
        path: 'create',
        name: 'subject-form',
        component: () => import('@/pages/subjects/form/subject-form.vue'),
        meta: {
          authenticated: true,
          userTypes: [UserTypes.ADMINISTRATOR, UserTypes.PROFESSOR]
        },
      },
      {
        path: 'edit/:subjectId',
        name: 'subject-edit',
        component: () => import('@/pages/subjects/form/subject-form.vue'),
        props: true,
        meta: {
          authenticated: true,
          userTypes: [UserTypes.ADMINISTRATOR, UserTypes.PROFESSOR]
        },
      }
    ],
    meta: {
      authenticated: true,
    }
  },
  {
    path: '/topics',
    component: () => import('@/pages/questions/Questions.vue'),
    children: [
      {
        path: '',
        name: 'topics-list',
        component: () => import('@/pages/topics/list/topics-list.vue'),
        meta: {
          authenticated: true,
          userTypes: [UserTypes.ADMINISTRATOR, UserTypes.PROFESSOR]
        }
      },
      {
        path: 'create',
        name: 'topic-form',
        component: () => import('@/pages/topics/form/topic-form.vue'),
        meta: {
          authenticated: true,
          userTypes: [UserTypes.ADMINISTRATOR, UserTypes.PROFESSOR]
        },
      },
      {
        path: 'edit/:topicId',
        name: 'topic-edit',
        component: () => import('@/pages/topics/form/topic-form.vue'),
        props: true,
        meta: {
          authenticated: true,
          userTypes: [UserTypes.ADMINISTRATOR, UserTypes.PROFESSOR]
        },
      }
    ],
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
      userTypes: [UserTypes.ADMINISTRATOR, UserTypes.PROFESSOR, UserTypes.STUDENT]
    }
  },
  {
    path: '/score',
    name: 'score',
    component: () => import('@/pages/game/Score.vue'),
    meta: {
      authenticated: true,
      userTypes: [UserTypes.ADMINISTRATOR, UserTypes.PROFESSOR, UserTypes.STUDENT]
    }
  }
]

export default routes
