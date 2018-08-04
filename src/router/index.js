import Vue from 'vue'
import Router from 'vue-router'
import PhotoGrid from '@/components/PhotoGrid'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'PhotoGrid',
      component: PhotoGrid
    }
  ]
})
