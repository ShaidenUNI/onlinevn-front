import { createRouter, createWebHistory } from 'vue-router'

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
    path: '/novel/:id',
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
