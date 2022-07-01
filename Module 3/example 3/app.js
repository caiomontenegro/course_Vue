const app = Vue.createApp({
  data() {
    return { 
      registeredGoal: '',
      goals: [], 
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
