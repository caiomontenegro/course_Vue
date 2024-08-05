<template>
  <base-container title="Vuex" v-if="isAuth">
    <the-counter></the-counter>
    <favorite-value></favorite-value>
    <button @click="addOne">Add 10</button>
    <change-counter></change-counter>
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue'
import ChangeCounter from './components/ChangeCounter.vue'
import FavoriteValue from './components/FavoriteValue.vue'
import UserAuth from './components/UserAuth.vue'

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth
  },
  methods: {
    addOne() {
      // this.$store.state.counter++
      // this.$store.commit('increment')


      // mutation:
      // this.$store.commit('increase', { value: 10}) // We don't need use object values, we can use other kinds of values to. As boleean, strings, number, etc.

      // We can type this, like this:
      // this.$store.commit({
      //  type: 'increase',
      //  value: 10
      // })


      // actions:
      this.$store.dispatch({
        type: 'increase', 
        value: 10
      })
    }
  },
  computed: {
    isAuth() {
      return this.$store.getters.logged
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>