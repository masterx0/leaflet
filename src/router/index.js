import Vue from 'vue'
import Router from 'vue-router'
import VueLeaflet from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VueLeaflet',
      component: VueLeaflet
    }
  ]
})
