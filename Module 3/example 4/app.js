const app = Vue.createApp({
  data() {
    return { 
      registeredGoal: '',
      goals: [], 
      users: {name: 'Caio', age: 29, color: 'white'}
    };
  },
  computed: {
  },
  methods: {
    addGoal() {
      this.goals.push(this.registeredGoal)
      console.log(this.goals)
    }
  }
});

app.mount('#user-goals');
