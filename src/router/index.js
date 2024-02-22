import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import KanagawaKen from '../views/cities/Ken.vue'
import KanagawaCity from '../views/cities/City.vue'
import ErrorPage from '../views/404Page.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/kanagawaken',
    name: 'kanagawaken',
    component: KanagawaKen
  },
  {
    path: '/kanagawaken/:id',
    name: 'kanagawakenCity',
    component: KanagawaCity,
    props:true
  },
  // catchAll()
  {
    path:'/:catchAll(.*)',
    component:ErrorPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
