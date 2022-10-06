import App from './App.vue';

import { createApp } from 'vue';
import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      counter: 0 
    }
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 2
    }
  }
})

const app = createApp(App);

app.use(store)

app.mount('#app');
