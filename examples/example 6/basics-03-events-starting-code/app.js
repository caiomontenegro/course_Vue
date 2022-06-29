const app = Vue.createApp({
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    reduce() {
      this.counter--
    },
    reduce(num) {
      this.counter = this.counter - num
    }
  }
}) 

app.mount('#events')
