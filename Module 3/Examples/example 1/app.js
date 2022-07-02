const app = Vue.createApp({
  data() {
    return { 
      goal: '',
      goals: [], 
    };
  },
  computed: {
  },
  methods: {
    addGoal() {
      this.goals.push(this.goal)
      console.log(this.goals)
    }
  }
});

app.mount('#user-goals');
