<template>
  <li>
    <h2>{{ name }} {{ friendIsFavorite === '1' ? '(Favorite)' : '' }}</h2>
    <button @click="toggleDatails">{{detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <button @click="toggleFavorite">Favorite</button>
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
      'emailAddress',
      'isFavorite',
    ],
    data() {
      return {
        detailsAreVisible: false,
        friendIsFavorite: this.isFavorite
      }
    },
    methods: {
      toggleDatails() {
        this.detailsAreVisible = !this.detailsAreVisible
      },
      toggleFavorite() {
        if(this.friendIsFavorite === '1') {
          this.friendIsFavorite = '0'
        } else {
          this.friendIsFavorite = '1'
        }
      }
    }
  }
</script>