import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/',
        name: 'home',
        component: () => import('./views/TheStartingPage.vue')
      },
      {
        path: '/product',
        name: 'Product page',
        component: () => import('@/views/TheProductPage.vue')
      },
      {
        path: '/about',
        name: 'About page',
        component: () => import('@/views/TheAboutPage.vue')
      }
    ]
  })