import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: () => import(/* webpackChunkName: "TarjetaView" */ '../views/HomeView.vue')
  },{
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/productos',
    name: 'TarjetaView',
    component: () => import(/* webpackChunkName: "TarjetaView" */ '../views/TarjetaView.vue')
  },
  {
  path: "/productos/:id",
  name: "ProductosView",
  props: true,
  component: () => import(/* webpackChunkName: "ProductosView" */ '../views/ProductosView.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
