import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ComputedValue from '../views/ComputedValue.vue'
import Posts from '../views/Posts.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/computed',
    name: 'computed',
    component: ComputedValue
  },
  {
    path: '/post-list',
    name: 'postlist',
    component: Posts
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
