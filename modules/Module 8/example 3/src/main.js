import { createApp } from 'vue';

import App from './App.vue'
import FriendsContacts from './components/FriendsContacts.vue'

const app = createApp(App)

app.component('friends-contacts', FriendsContacts)

app.mount('#app');
