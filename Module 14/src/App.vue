<template>
  <base-container title="Vuex"></base-container>
    <the-counter></the-counter>
    <favorite-value></favorite-value>
    <change-counter></change-counter>
    <button @click="addOne">Add 10</button>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue'
import ChangeCounter from './components/ChangeCounter.vue'
import FavoriteValue from './components/FavoriteValue.vue'

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue
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