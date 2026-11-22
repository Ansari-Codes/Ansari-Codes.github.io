import { createRouter, createWebHistory } from 'vue-router'
import PageLanding from '@/Pages/PageLanding.vue'
import PageProjects from '@/Pages/PageProjects.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: PageLanding },
    { path: '/projects', name: 'projects', component: PageProjects },
  ],
})

export default router
