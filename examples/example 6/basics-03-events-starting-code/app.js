const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      girlName: '',
      text: '',
      confirmedText: ''
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
    },
    inputText(event) {
      this.text = event.target.value
      console.log(input)
    },
    confirmText() {
      this.confirmedText = this.text
    }
  }
}) 

app.mount('#events')
