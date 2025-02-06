import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RopaView from '../views/RopaView.vue'
import ComplementosView from '../views/ComplementosView.vue'
import CalzadoView from '../views/CalzadoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/ropa',
      name: 'ropa',
      component: RopaView,
    },
    {
      path: '/complementos',
      name: 'complementos',
      component: ComplementosView,
    },
    {
      path: '/calzado',
      name: 'calzado',
      component: CalzadoView,
    }
  ],
})

export default router
