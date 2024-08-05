const app = Vue.createApp({
  data() {
    return {
      name: 'Caio Montenegro',
      age: 29,
      image: 'https://external-preview.redd.it/pM6doAOjz89eQEU_NhwbOD-PGY4lGeqxDymoJzWu5II.jpg?auto=webp&s=6aff9317c479fbd6abd1b18cbe4efbe14b759244'
    }
  },
  methods: {
    years() {
      const age = `${this.age}  years old.`
      return age
    },
    futureAge() {
      const future = `${this.age + 5} years old.`
      return future
    },
    favoriteNumber() {
      const number = Math.random()
      return number.toFixed(1)
    },
    InputName() {
    }
  }
})

app.mount('#assignment')