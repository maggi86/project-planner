import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import addProjects from '@/views/addProjects.vue'
import editProject from '@/views/editProject.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/add',
    name: 'addProjects',
    component: addProjects
  },
  {
    path: '/project/:id',
    name: 'editProject',
    component: editProject,
    props: true
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
