<template>
  <li>
    <h2>{{ friends.name }}</h2>
    <button @click="toggleDatails">{{detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ friends.phone }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ friends.email }}
      </li>
    </ul>
  </li>
</template>

<script>
  export default {
    data() {
      return {
        detailsAreVisible: false,
        friends: {
          id: 'carolina',
          name: 'Carolina Alto',
          phone: '777 777',
          email: 'carolina@email.com'
        },
      }
    },
    methods: {
      toggleDatails() {
        this.detailsAreVisible = !this.detailsAreVisible
      }
    }
  }
</script>