import { createRouter, createWebHistory } from 'vue-router'

import UsersPage from '../pages/UserPage.vue'
import Login from '../components'
import NotFoundPage from '../pages/NotFoundPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/login', name: 'Login', component: async () => await Login },
    {
      path: '/users',
      name: 'users-page',
      component: async () => await UsersPage,
    },


    { path: '/:pathMatch(.*)*', component: async () => await NotFoundPage },
  ],
})

export default router