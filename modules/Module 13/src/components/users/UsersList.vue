<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="saveChanges">Save Changes</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  data() {
    return {
      changesSaved: false
    }
  },
  components: {
    UserItem,
  },
  inject: ['users'],
  methods: {
    confirmInput() {
      //confirm something
      this.$router.push('/teams')
    },
    saveChanges() {
      this.changesSaved = true
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log('UserList Cmp beforeRouteEnter')
    console.log(to, from)
    next()
  },
  beforeRouteLeave(to, from, next) {
    console.log('UsersList Cmp beforeRouteEnter')
    console.log('to, from')

    if(this.changesSaved) {
      next()
    } else {
      const userWantsToLeave = confirm('Are you sure? You got unsaved changes!')
      next(userWantsToLeave)
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>