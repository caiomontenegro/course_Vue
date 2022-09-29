import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue'
import NotFound from './components/nav/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams'}, // this path, redirect user to '/teams'
    { path: '/teams', component: TeamsList }, // our-domain.com/teams => TeamsList
    { path: '/users', component: UsersList }, // we can use "alias:" propertie, to use more than one path.
    { path: '/teams/:teamId', component: TeamMembers, props: true}, // path with params, remember of register path with params last.
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

const app = createApp(App)

app.use(router);

app.mount('#app');
