const app = Vue.createApp({
  data() {
    return {
      courseGoalA: '<em>Finish the course and learn the Vue.</em>',
      courseGoalB: '<em>Master Vue and build amazing apps.</em>', 
      vueLink: 'https://vuejs.org'
    }
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random()
      if (randomNumber < 0.5) {
        return this.courseGoalA
      } else {
        return this.courseGoalB
      }
    }
  }
})

app.mount('#user-goal')