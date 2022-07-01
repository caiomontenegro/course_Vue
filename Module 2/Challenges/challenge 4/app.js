const app = Vue.createApp({
  data() {
    return {
      style: '',
      hidden: false,
      color: ''
    }
  },  
  methods: {
    checkContent() {
      this.hidden = !this.hidden
      console.log(this.content)
    },
  }
})

app.mount("#assignment")