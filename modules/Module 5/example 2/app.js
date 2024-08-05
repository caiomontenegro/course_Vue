const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.message = this.$ref.userText.value
      console.dir(this.$ref.userText)
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
});
const appA = Vue.createApp({
  data() {
    return {
      name: 'Caio'
    }
  }
})

const appB = Vue.createApp({
  template: `<p>{{ name }}</p>`,
  data() {
    return {
      name: 'Montenegro'
    }
  }
})

app.mount('#app');
appA.mount('#elementA')
appB.mount('#elementB')


const data = {
  message: 'hello',
  longMessage: 'Hello'
}

const handler = {
  set(target, key, value) {
    console.log(target)
    console.log(key)
    console.log(value)
  }
}

const proxy = new Proxy (data, handler)

proxy.message = 'Hello!!!!!'

console.log(proxy.longMessage)