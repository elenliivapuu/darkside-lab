import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  linkActiveClass: "active",
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
    },
    {
      path: '/admin',
      name: 'Admin',
      component: () => import('../views/AdminView.vue')
    }
  ]
})

export default router
