function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + 5)
}

const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      rounds: 0, 
      logMessages: [],
      winner: null
    }
  },
  watch: {
    playerHealth(value) {
      if(value <= 0 && this.monsterHealth <= 0) {
        this.winner = 'draw'
        this.playerHealth = 0 
      } else if(value <= 0 ) {
        this.winner = 'Monster'
        this.playerHealth = 0 
      }
    },
    monsterHealth(value) {
      if(value <= 0 && this.playerHealth <= 0) {
        this.winner = 'draw'
        this.monsterHealth = 0
      } else if(value <= 0) {
        this.winner = 'Player'
        this.monsterHealth = 0
      }
    }
  },
  computed: {
    monsterHealthStyle() {
      return {width: this.monsterHealth + '%'}
    },
    playerHealthStyle() {
      return {width: this.playerHealth + '%'}
    }
  },
  methods: {
    attackMonster() {
      this.rounds++
      const attackValue = getRandomValue(5, 12)
      this.monsterHealth -= attackValue
      this.addLogMessage('player', 'attack', attackValue)
      this.attackPlayer()
    },
    attackPlayer() {
      const attackValue = getRandomValue(10, 20)
      this.playerHealth -= attackValue
      this.addLogMessage('monter', 'attack', attackValue)
    },
    specialAttack() {
      this.rounds = 0
      const attackValue = getRandomValue(10, 25)
      this.monsterHealth -= attackValue
      this.addLogMessage('player', 'special-attack', attackValue)
      this.attackPlayer()
    },
    heal() {
      const healValue = getRandomValue(8,20)
      if(this.playerHealth + healValue > 100) {
        this.playerHealth = 100
      } this.playerHealth += healValue
      this.addLogMessage('player', 'heals', healValue)
      this.attackPlayer()
    },
    newGame() {
      this.playerHealth = 100
      this.monsterHealth = 100
      this.winner = null
      this.rounds = 0
    },
    addLogMessage(who, what, value) {
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value
      })
    },
    surrender() {
      this.winner = 'Monster'
    }
  }
})

app.mount('#game')