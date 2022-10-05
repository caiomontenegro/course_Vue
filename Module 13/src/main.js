import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue'
import NotFound from './components/nav/NotFound.vue'
import TeamsFooter from './components/teams/TeamsFooter.vue'
import UsersFooter from './components/users/UsersFooter.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams'}, // this path, redirect user to '/teams'

    { name: 'teams',
     path: '/teams', 
     meta: {needsAuth: true},
     components: {
      default: TeamsList,
      footer: TeamsFooter,
     }, 
     children: [
      { name: 'team-members',  path: ':teamId', component: TeamMembers, props: true} // For children paths, we don't need type the complere route, just the last route param.
    ]}, // our-domain.com/teams => TeamsList

    { path: '/users', components: {
      default: UsersList,
      footer: UsersFooter
      },
      beforeEnter(to, from, next) {
        console.log('users beforeEnter') 
        console.log(to, from)
        next()
      }
     }, // we can use "alias:" propertie, to use more than one path.

    // { path: '/teams/:teamId', component: TeamMembers, props: true}, // path with params, remember of register path with params last.

    { path: '/:notFound(.*)', component: NotFound }
  ],
  scrollBehavior(to, from , savedPosition) {
    if(savedPosition) {
      return savedPosition
    } 
    return {left: 0, top: 0} 
  }
});

router.beforeEach(function(to, from, next) {
  console.log('Global-members') 
  console.log(to, from)
  if (to.meta.needsAuth) {
    console.log('Needs auth!')
    next()
  } else {
    next()
  }
  // if (to.name === 'team-members') {
  //   next() 
  // } else {
  //   next('/teams')
  //   //or
  //   next({name: 'team-members', params: {teamdId: 't2' }})
  // }
  next()
})

router.afterEach(function(to, from) {
  console.log('Global afterEach')
  console.log(to, from)
})

const app = createApp(App)

app.use(router);

app.mount('#app');
