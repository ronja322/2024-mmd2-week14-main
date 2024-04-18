import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',

      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/box1',
      name: 'box1',

      component: () => import('../views/BoxOne.vue')
    },
    {
      path: '/box2',
      name: 'box2',

      component: () => import('../views/BoxTwo.vue')
    },
    {
      path: '/box3',
      name: 'box3',

      component: () => import('../views/BoxTree.vue')
    },
    {
      path: '/box4',
      name: 'box4',

      component: () => import('../views/BoxFour.vue')
    },
    {
      path: '/box5',
      name: 'box5',

      component: () => import('../views/BoxFive.vue')
    },
    {
      path: '/about2',
      name: 'about2',

      component: () => import('../views/AboutView2.vue')
    },

    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('../views/PortfoliosView.vue')
    },
    {
      path: '/portfoliodetail/:id',
      name: 'portfoliodetail',
      component: () => import('../views/PortfolioDetailView.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue')
    },
    {
      path: '/MyCV',
      name: 'mycv',
      component: () => import('../views/MyCVView.vue')
    },
    {
      path: '/box6',
      name: 'box6',

      component: () => import('../views/BoxSix.vue')
    },
    {
      path: '/box7',
      name: 'box7',

      component: () => import('../views/BoxSeven.vue')
    },
    {
      path: '/box8',
      name: 'box8',

      component: () => import('../views/BoxAigt.vue')
    },
    {
      path: '/box9',
      name: 'box9',

      component: () => import('../views/BoxNine.vue')
    },
    {
      path: '/box10',
      name: 'box10',

      component: () => import('../views/BoxTeen.vue')
    },
    {
      path: '/box11',
      name: 'box11',

      component: () => import('../views/BoxEleven.vue')
    },
  ]
})

export default router
