import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Hakkimizda from '../views/Hakkimizda.vue'
import Anasayfa from '../views/Anasayfa.vue'
import Urunler from '../views/Urunler.vue'
import iletisim from '../views/iletisim.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Anasayfa',
    component: Anasayfa
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Hakkimizda',
    name: 'Hakkimizda',
    component: Hakkimizda
  },
  {
    path: '/Urunler',
    name: 'Urunler',
    component: Urunler
  },
  {
    path: '/iletisim',
    name: 'iletisim',
    component: iletisim
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
