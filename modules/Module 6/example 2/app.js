const app = Vue.createApp({
  data() {
    return {
      showDetails: false, 
      friends: [
        {
          id: 'manuel',
          name: 'Manuel Lorenz',
          phone: '888-888',
          email: 'manuel@email.com.br'
        },
        {
          id: 'julia',
          name: 'Julia Jones', 
          phone: '999-999',
          email: 'julia@email.com.br'
        }
      ],
    }
  },
  methods: {
    toggleDetails () {
      this.showDetails = !this.showDetails
    }
  }
})

app.component('friend-contact', {
  template: `
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">{{ showDetails ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="showDetails">
      <li><strong>Phone:</strong>{{ friend.phone }}</li>
      <li><strong>Email:</strong>{{ friend.email }}</li>
    </ul>
  </li>
  `,
  data() {
    return { 
      showDetails: false,
      friend: {
        id: 'manuel',
        name: 'Manuel Lorenz',
        phone: '888-888',
        email: 'manuel@email.com.br'
      },
    }
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails
    }
  }
})

app.mount('#app')