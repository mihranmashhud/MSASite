import Vue from 'vue'
import Router from 'vue-router'
//import components
import Home from './../component/Home'
import QandA from './../component/QandA'
import meetings from './../component/Meetings'
import signup from './../component/SignUp'

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
    },{
      path: '/Meetings',
      name: 'Meetings',
      component: Meetings
    },{
      path: '/SignUp',
      name: 'SignUp',
      component: SignUp
    }
  ]
})
