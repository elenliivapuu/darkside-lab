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
      component: () => import('../views/AdminView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register', // disable this endpoint when not in use
      name: 'Register',
      component: () => import('../views/RegisterView.vue')
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth || to.name === 'Login') {
    const res = await fetch('http://127.0.0.1:5000/api/check', {
      method: 'GET',
      credentials: 'include',
    })
    const data = await res.json();
    const authd = data.authenticated;

    if (!authd && to.name !== 'Login') 
      return next('/login')

    if (authd && to.name === 'Login')
      return next('/admin')
  }
  next()
})

export default router
