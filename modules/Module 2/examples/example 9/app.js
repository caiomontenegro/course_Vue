const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullName: ''
    };
  },
  watch: {
    counter() {
      if(this.counter > 10 ) {
        this.counter = 0
      }
    }
  },
  computed: {
    outputFull() {
      console.log('running')
      if(this.name === '') {
        this.fullName = this.name 
      } else {
        this.fullName = this.name + ' ' + 'Montenegro'
      }
      return this.fullName
    }
  },
  methods: {
    setName(event) {
      this.name = event.target.value
    },
    setFullName() {
      console.log('running')
      if(this.name === '') {
        this.fullName = this.name 
      } else {
        this.fullName = this.name + ' ' + 'Montenegro'
      }
      return this.fullName
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetName() {
      this.name = ''
    }
  }
});

app.mount('#events');
