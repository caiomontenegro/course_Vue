const app = Vue.createApp({
  data() {
    return {
      userA: '',
      userB: '',
      confirmedUser: ''
    }
  },
  methods: {
    showAlert() {
      alert('Hello Vue.')
    },
    outputUserA(event) {
      this.userA = event.target.value
      console.log(user)
    },
    outputUserB(event) {
      this.userB = event.target.value
    },
    confirmedText() {
      this.confirmedUser = this.userB
    }
  }
})

app.mount('#assignment')