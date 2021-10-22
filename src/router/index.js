import { createRouter, createWebHistory } from 'vue-router'
import FrontPage from '../views/FrontPage.vue'
import NovelLibrary from '../views/NovelLibrary.vue'
import NovelInfo from '../views/NovelInfo.vue'
import Editor from '../views/Editor.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Front page',
    component: FrontPage
  },
  {
    path: '/library',
    name: 'Novel library',
    component: NovelLibrary
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/library/:id',
    name: 'Novel info',
    component: NovelInfo
  },
  {
    path: '/editor/:id',
    name: 'Editor',
    component: Editor
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
