<template>
  <button @click="increment">add 1</button>
  <button @click="increase({value: 11})">Add 11</button>
</template>

<script>
import { mapActions } from 'vuex'

export default {

  methods: {
      // addOne() {
      // this.$store.state.counter++
      // this.$store.commit('increment')

      // actions methods
      // this.$store.dispatch({
      //   type: 'increment'
      // })
      // }

    // Using map
    ...mapActions(['increment', 'increase'])
    //or
    // ...mapActions([increment])
  }
}
</script>