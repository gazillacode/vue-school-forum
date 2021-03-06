import Home from "@/pages/Home";
import ThreadShow from "@/pages/ThreadShow";
import NotFound from "@/pages/NotFound";
import {createRouter, createWebHistory} from 'vue-router'
import sourceData from '@/data.json'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/thread/:id',
    name: 'PageThread',
    component: ThreadShow,
    props: true,
    BeforeEnter(to, from, next) {

      // check if thread exists
      const threadExists = sourceData.threads.find(thread => thread.id === to.params.id)

      if(threadExists) {
        // if exists continue
        return next()
      } else {
        // if doesn't exist redirect to not found
        next({name: 'NotFound'})
      }
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  },

]

export default createRouter({
  history: createWebHistory(),
  routes
})
