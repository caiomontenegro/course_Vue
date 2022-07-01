const app = Vue.createApp({
  data() {
    return {
      style: '',
      hidden: false,
      color: ''
    }
  },
  computed: {
    checkUser1() {
      if(this.style === 'user1') return true
    },
    checkUser2() {
      if(this.style === 'user2') return true
    },
  },  
  methods: {
    saveClass(event) {
      this.style = event.target.value
      console.log(this.style)
    },
    checkContent() {
      this.hidden = !this.hidden
      console.log(this.content)
    },
  }
})

app.mount("#assignment")