/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home'
import main from '../components/main'
import community from '../components/community'
import login from '../components/login'
import register from '../components/register'

import draftBank from '../components/draft/draftBank'
import draftBusiness from '../components/draft/draftBusiness'
import draftOnline from '../components/draft/draftOnline'

Vue.use(Router)

const routerHome = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: '登录',
      component: login
    }, {
      path: '/register',
      name: '注册',
      component: register
    },
    {
      path: '/',
      name: 'home',
      component: home,
      redirect:'/main',
      children: [
        {
          path: 'main',
          name: 'main',
          component: main
        },
        {
          path: '/community',
          name: 'community',
          component: community,
          redirect:'/community/draftBank',
          children: [
            {
              path: 'draftBank',
              name: 'draftBank',
              component: draftBank
            },{
              path: 'draftBusiness',
              name: 'draftBusiness',
              component: draftBusiness
            },{
              path: 'draftOnline',
              name: 'draftOnline',
              component: draftOnline
            }
          ]
        }
      ]
    }
  ]
})

export default routerHome
