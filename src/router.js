import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/list',
      name: 'list',
      component: ()=>import('@/views/list.vue'),
    },
    {
      path: '/button',
      name: 'button',
      component: ()=>import('@/views/button.vue'),
    }
  ]
})
