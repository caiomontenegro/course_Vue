<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? '(Favorite)' : '' }}</h2>
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
    props: {
      id: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      }, 
      phoneNumber: {
        type: String,
        required: true
      },
      emailAddress: {
        type: String,
        required: true
      },
      isFavorite: {
        type: Boolean,
        required: false,
        default: false,
      }
    },
    emits: [
      'toggle-favorite'
    ],
    // emits: {
    //   'toggle-favorite': function(id) {
    //     if(id) {
    //       return true
    //     } else {
    //       console.warn('Id is missing')
    //       return false
    //     }
    //   }
    // },
    data() {
      return {
        detailsAreVisible: false,
      }
    },
    methods: {
      toggleDatails() {
        this.detailsAreVisible = !this.detailsAreVisible
      },
      toggleFavorite() {
        this.$emit('toggle-favorite', this.id)
      },

    }
  }
</script>