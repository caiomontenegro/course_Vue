const app = Vue.createApp({
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    reduce() {
      this.counter--
    }
  }
}) 

app.mount('#events')
