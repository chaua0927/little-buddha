import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Posts from '@/components/Posts'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    }
  ]
})
