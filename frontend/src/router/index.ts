import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FeaturesPage from '@/views/FeaturesPage.vue'
import TestResults from '@/views/TestResults.vue'
import login from '@/views/login.vue'
import Signup from '@/views/Signup.vue'
import BookAppointment from '@/views/BookAppointment.vue'
import Contactus from '@/views/Contactus.vue'
import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/features',
      name: 'features',
      component: FeaturesPage
    },
    {
      path: '/testresults',
      name: 'testresults',
      component: TestResults
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/booktest',
      name: 'booktest',
      component: BookAppointment
    },
    {
      path: '/contactus',
      name: 'contactus',
      component: Contactus
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
})

export default router
