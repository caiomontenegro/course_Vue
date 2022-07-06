<template>
  <li>
    <h2>{{ name }}</h2>
    <button @click="toggleDatails">{{detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
  </li>
</template>

<script>
  export default {
    props: [
      'name', 
      'phoneNumber', 
      'emailAddress'
    ],
    data() {
      return {
        detailsAreVisible: false,
      }
    },
    methods: {
      toggleDatails() {
        this.detailsAreVisible = !this.detailsAreVisible
      }
    }
  }
</script>