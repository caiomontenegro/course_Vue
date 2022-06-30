const app = Vue.createApp({
  data() {
    return {
      result: 0,
      text: ''
    }
  },
  watch: {
    result(value) {
      if(value !== 0) {
        setTimeout(() => {
          this.result = 0
        }, 5000)
      }
    }
  },
  computed: {
    updateText() {
      this.text = 'start!'
      if(this.result > 0 && this.result < 37) {
        this.text = 'No there yet'
      } else if (this.result === 37) {
        this.text = 'Yeah, this is it!'
      } else if(this.result > 37) {
        this.text = 'Too much'
      }
      return this.text
    } 
  },
  methods: {
    add(num) {
      this.result = this.result + num
    },
  }
})

app.mount('#assignment')