<template>
  <form @submit.prevent="newPerson">
    <div>
      <label for="name">Name:</label>
      <input type="text" v-model="name">
    </div>
    <div>
      <label for="age">Age:</label>
      <input type="number" v-model="age">
    </div>
    <button>Submit</button>
  </form>
</template>

<script>
export default {
  emits: [
    'new-person'
  ],
  data() {
    return {
      name: '',
      age: ''
    }
  },
  methods: {
    newPerson() {
      this.$emit('new-person', this.name, this.age)
    }
  }
}
</script>