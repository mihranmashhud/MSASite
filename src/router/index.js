import Vue from 'vue'
import Router from 'vue-router'
//import components
import Home from './../components/Home'
import QandA from './../components/QandA'
import Meetings from './../components/Meetings'
import signup from './../components/SignUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/QandA',
      name: 'QandA',
      component: QandA
    }, {
      path: '/Meetings',
      name: 'Meetings',
      component: Meetings
    }, {
      path: '/SignUp',
      name: 'SignUp',
      component: SignUp
    }
  ],
  mode: 'history'
})
