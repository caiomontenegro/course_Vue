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

app.mount('#app')