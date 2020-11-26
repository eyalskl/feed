import Vue from 'vue'
import VueRouter from 'vue-router'
import feedApp from '../views/feed-app.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Feed',
    component: feedApp
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
