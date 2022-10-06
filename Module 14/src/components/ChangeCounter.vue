<template>
  <button @click="addOne">add 1</button>
</template>

<script>
export default {
  methods: {
    addOne() {
      // this.$store.state.counter++
      // this.$store.commit('increment')
      this.$store.dispatch({
        type: 'increment'
      })
    }
  }
}
</script>