import { createRouter, createWebHistory } from 'vue-router'
import JokeDiscovery from "@/views/JokeDiscovery.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: JokeDiscovery,
    },
    {
      path: '/collection',
      name: 'collection',
      component: () => import('../views/JokeCollection.vue'),
    },
  ],
})

export default router
