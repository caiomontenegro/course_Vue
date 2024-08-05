<template>
  <form @submit.prevent="addContact">
    <div>
      <label for="name">Name:</label>
      <input type="text" v-model="name">
    </div>
    <div>
      <label for="phone">Phone:</label>
      <input type="tel" v-model="phone">
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" v-model="email">
    </div>
    <div>
      <button>Submit</button>
    </div>
  </form>
</template>

<script>
  export default {
    emits: [
      'new-contact'
    ],
    data() {
      return {
        name: '',
        phone: '', 
        email: ''
      }
    },
    methods: {
      addContact() {
        this.$emit(
          'new-contact', 
          this.name,
          this.phone, 
          this.email
        )
      }
    }
  }
</script>