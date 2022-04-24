import PageHome from "../components/PageHome";
import PageThread from "../components/PageThread";
import PageNotFound from "../components/PageNotFound";
import {createRouter, createWebHistory} from 'vue-router'
import sourceData from '../data.json'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: PageHome
  },
  {
    path: '/thread/:id',
    name: 'PageThread',
    component: PageThread,
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
    component: PageNotFound
  },

]

export default createRouter({
  history: createWebHistory(),
  routes
})
