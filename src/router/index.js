import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ComputedValue from '../views/ComputedValue.vue'
import Props from '../views/Props.vue'

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
    path: '/working-with-props',
    name: 'props',
    component: Props
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
