import Vue from 'vue'
import Router from 'vue-router'
//import components
import Home from './Home'
import About from './About'
import QandA from './QandA'
import meetings from './Meetings'
import signup from './SignUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/About',
      name: 'About',
      component: About
    },{
      path: '/QandA',
      name: 'QandA',
      component: QandA
    },{
      path: '/Meetings',
      name: 'Meetings',
      component: Meetings
    },{
      path: '/SignUp',
      name: 'SignUp',
      component: SignUp
    }

    }
  ]
})
