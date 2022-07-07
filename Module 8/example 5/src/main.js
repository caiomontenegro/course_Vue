//Vue modules
import { createApp } from 'vue';

//Vue app
import App from './App.vue'
import FriendsContacts from './components/FriendsContacts.vue'
import NewFriend from './components/NewFriend.vue'

//App creation
const app = createApp(App)

//Mount components
app.component('friends-contacts', FriendsContacts)
app.component('new-friend', NewFriend)

//App mount
app.mount('#app');
