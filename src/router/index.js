import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Registration from '../views/Registration.vue'
import Aboutindia from '../views/Aboutindia.vue'
import Aboutraipur from '../views/Aboutraipur.vue'
import Callpapers from '../views/Callpapers.vue'
import ConferenceVenue from '../views/ConferenceVenue.vue'
import Downloads from '../views/Downloads.vue'
import Event_schedule from '../views/Event_schedule.vue'
import Keynote_Speakers from '../views/Keynote_Speakers.vue'
import Partners from '../views/Partners.vue'
import Workshops from '../views/Workshops.vue'
import Trackstopics from '../views/TracksTopics.vue'
import Advisory_Committee from '../views/Advisory_Committee.vue'
import Organising_Committee from '../views/Organising_Committee.vue'
import Technical_Committee from '../views/Technical_Committee.vue'
import TouristAttraction from '../views/Tourist_Attraction.vue'
import Accomodation from '../views/Accomodation.vue'
import SUC from '../views/Under-Construction.vue'
Vue.use(VueRouter)


const routes = [
  {
    path: '/new/',
    name: 'Home',
    component: Home
  },
  {
    path: '/new/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/new/registration',
    name: 'Registration',
    component: Registration
  },
  {
    path: '/new/india',
    name: 'Aboutindia',
    component: Aboutindia
  },
  {
    path: '/new/raipur',
    name: 'Aboutraipur',
    component: Aboutraipur
  },
  {
    path: '/new/call-for-papers',
    name: 'Callpapers',
    component: Callpapers
  },
  {
    path: '/new/advisory',
    name: 'Advisory_Committee',
    component: Advisory_Committee
  },
  {
    path: '/new/organising',
    name: 'Organising_Committee',
    component: Organising_Committee
  },
  {
    path: '/new/technical',
    name: 'Technical_Committee',
    component: Technical_Committee
  },
  {
    path: '/new/venue',
    name: 'ConferenceVenue',
    component: ConferenceVenue
  },
  {
    path: '/new/downloads',
    name: 'Downloads',
    component: Downloads
  },
  {
    path: '/new/schedule',
    name: 'Event_schedule',
    component: Event_schedule
  },
  {
    path: '/new/speakers',
    name: 'Keynote_Speakers',
    component: Keynote_Speakers
  },
  {
    path: '/new/partners',
    name: 'Partners',
    component: Partners
  },
  {
    path: '/new/workshops',
    name: 'Workshops',
    component: Workshops
  },
  {
    path: '/new/tracks',
    name: 'Trackstopics',
    component: Trackstopics
  },
  {
    path: '/new/tourist',
    name: 'TouristAttraction',
    component: TouristAttraction
  },
  {
    path: '/new/accomodation',
    name: 'Accomodation',
    component: Accomodation
  },
  {
    path: "*", component: SUC,
    meta: {
      layout: "another-layout"
    }
  }

]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
