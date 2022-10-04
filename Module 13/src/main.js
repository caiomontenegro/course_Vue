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
    } }, // we can use "alias:" propertie, to use more than one path.

    // { path: '/teams/:teamId', component: TeamMembers, props: true}, // path with params, remember of register path with params last.

    { path: '/:notFound(.*)', component: NotFound }
  ]
});

const app = createApp(App)

app.use(router);

app.mount('#app');
