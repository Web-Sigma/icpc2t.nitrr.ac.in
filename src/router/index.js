import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Aboutindia  from '../views/Aboutindia.vue'
import Aboutraipur  from '../views/Aboutraipur.vue'
<<<<<<< HEAD
=======
import Callpapers  from '../views/Callpapers.vue'
import ConferenceVenue  from '../views/ConferenceVenue.vue'
import Downloads  from '../views/Downloads.vue'
import Event_schedule  from '../views/Event_schedule.vue'
import Keynote_Speakers  from '../views/Keynote_Speakers.vue'
import Partners  from '../views/Committee.vue'
import Workshops  from '../views/Workshops.vue'
import Registration  from '../views/Registration.vue'

>>>>>>> e2d9809b067d94841a1c41923c3270d891ae47b7
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
    component:Aboutindia
  },
  {
    path: '/raipur',
    name: 'Aboutraipur',
    component:Aboutraipur
  },
  {
    path: '/call-for-papers',
    name: 'Callpapers',
    component:Callpapers
  },
  // {
  //   path: '/advisory',
  //   name: 'Advisory_Committee',
  //   component:Advisory_Committee
  // },
  // {
  //   path: '/organising',
  //   name: 'Organising_Committee',
  //   component:Organising_Committee
  // },
  // {
  //   path: '/technical',
  //   name: 'Technical_Committee',
  //   component:Technical_Committee
  // },
  {
    path: '/venue',
    name: 'ConferenceVenue',
    component:ConferenceVenue
  },
  {
    path: '/downloads',
    name: 'Downloads',
    component:Downloads
  },
  {
    path: '/schedule',
    name: 'Event_schedule',
    component:Event_schedule
  },
  {
    path: '/speakers',
    name: 'Keynote_Speakers',
    component:Keynote_Speakers
  },
  {
    path: '/partners',
    name: 'Partners',
    component:Partners
  },
  {
    path: '/workshops',
    name: 'Workshops',
    component:Workshops
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
