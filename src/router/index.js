import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Introduction from '../views/Introduction'
import About from '../views/About'
import Mars from '../views/Mars'
import Weather from '../views/Weather'
import Curiosity from '../views/Curiosity'
import Spirit from '../views/Spirit'
import Opportunity from '../views/Opportunity'
import CannotFind from '../views/CannotFind'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Introduction',
    component: Introduction
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/mars',
    name:'Mars',
    component:Mars,
    props:true
  },
  {
    path:'/weather',
    name:'Weather',
    component:Weather,
    
  },
 
  {
    path:'/curiosity',
    name:'Curiosity',
    component:Curiosity,
  },
  {
    path:'/spirit',
    name:'Spirit',
    component:Spirit,
    
  },
  {
    path:'/opportunity',
    name:'Opportunity',
    component:Opportunity,
    
  },
  {
    path:'*',
    name:'Cannot-Find',
    component:CannotFind,
    
  }
]

const router = new VueRouter({
  routes
})

export default router
