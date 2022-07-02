const app = Vue.createApp({
  data() {
    return {
      inputTask: '',
      tasks: [],
      buttonValue: ['Hide', 'Show list'],
      show: true
    }
  },
  methods: {
    saveTask() {
      this.tasks.push(this.inputTask)
      console.log(this.tasks)
    },
    showList() {
      this.show = !this.show
    }
  }
})

app.mount('#assignment')