import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import NotebookList from '../components/NotebookList.vue'
import NoteDetail from '../components/NoteDetail.vue'
import TashDetail from '../components/TashDetail.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/notebooks',
      name: 'NotebookList',
      component: NotebookList
    }, {
      path: '/note',
      name: 'NoteDetail',
      component: NoteDetail
    }, {
      path: '/trash',
      name: 'TashDetail',
      component: TashDetail
    }, {
      path: '/trash',
      name: 'TashDetail',
      component: TashDetail
    }
  ]
})
