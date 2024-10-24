import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/galerii',
      name: 'Galerii',
      component: () => import('../views/GalleryView.vue')
    },
    {
      path: '/hinnakiri',
      name: 'Hinnakiri',
      component: () => import('../views/PricelistView.vue')
    },
    {
      path: '/kontakt',
      name: 'Kontakt',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/broneeri',
      name: 'Broneeri',
      component: () => import('../views/BookView.vue')
    }
  ]
})

export default router
