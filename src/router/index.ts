import { createRouter, createWebHistory } from 'vue-router'
import PageLanding from '@/Pages/PageLanding.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: PageLanding },
    { path: '/projects', name: 'projects', component: PageLanding },
  ],
})

export default router
