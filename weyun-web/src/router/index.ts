import {
  createRouter,
  createWebHashHistory,
  // createMemoryHistory
} from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const Home = () => import('@/views/home/Home')
const Login = () => import('@/views/login/Login')
const Found = () => import('@/views/404')
const SchoolManage = () => import('@/views/home/school/SchoolManage')
const MainManage = () => import('@/views/home/main/ManageMain')
// const ManageView = () => import('@/views/ManageView.vue')
// const SchoolManage = () => import('@/views/SchoolManage.vue')

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'HomeView',
    component: Home,
    children: [
      {
        path: 'manage',
        name: 'MainManage',
        component: MainManage,
      }, {
        path: 'manage/school',
        name: 'SchoolManage',
        component: SchoolManage,
      }, {
        path: 'found',
        name: 'Found',
        component: Found,
      }
    ]
  },
  // {
  //   path: '/school',
  //   name: 'SchoolManage',
  //   component: SchoolManage,
  // },
  {
    path: '/login',
    name: 'LoginView',
    component: Login
  }, {
    path: '/404',
    name: 'Found',
    component: Found
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('@/views/Test'),
    children: [
      {
        path: 'a',
        name: 'TestA',
        component: Found
      }
    ]
  }
  // {
  //   path: '/',
  //   name: 'HomeView',
  //   component: HomeView,
  //   children: [
  //     {
  //       path: '/manage/user',
  //       name: 'ManageView',
  //       component: ManageView
  //     }, {
  //       path: '/manage/school',
  //       name: 'SchoolManage',
  //       component: SchoolManage
  //     }
  //   ]
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
