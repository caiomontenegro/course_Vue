const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      girlName: ''
    }
  },
  methods: {
    reduce() {
      this.counter--
    },
    reduce(num) {
      this.counter = this.counter - num
    },
    setName(event) {
      this.name = event.target.value
    },
    setGirlName(event, lastName) {
      this.girlName = event.target.value + ' ' + lastName
    },
    submitForm(event) {
      event.preventDefault()
      alert("Sended")
    },
    submitForm2() {
      alert('Sended')
    }
  }
}) 

app.mount('#events')
