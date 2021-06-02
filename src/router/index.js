import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Registration  from '../views/Registration.vue'
import Aboutindia  from '../views/Aboutindia.vue'
import Aboutraipur  from '../views/Aboutraipur.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Registration
  },
  {
    path: '/india',
    name: 'Aboutindia',
    component: Aboutindia
  },
  {
    path: '/raipur',
    name: 'Aboutraipur',
    component: Aboutraipur
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
