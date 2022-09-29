<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t2">Go to Team 2</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  inject: ['users', 'teams'], // receive the app provide datas.
  components: {
    UserItem
  },
  data() {
    return {
      teamName: '',
      members: []
    };
  },
  methods: {
    loadTeamMembers(route) {
    const teamId = route.params.teamId  // receive the teamId route param

    const selectedTeam = this.teams.find(team => team.id === teamId) // ^^^ In teams list, we search for for team param, and if team.id equals teamId, return the value

    const members = selectedTeam.members // result of our last .find() ^^^ (IDs members) of team

    const selectedMembers = [] // Here we will populate with members must be shown.

    for(const member of members) {
      const selectedUser = this.users.find(user => user.id === member)
      // find the data user in members ID list
      selectedMembers.push(selectedUser)
      // Insert the users on the selectedMembers array.
    }
    this.members = selectedMembers // Update the members with seletedMembers array.
    this.teamName = selectedTeam.name //update the teamName with selectedTeam.name
    }
  },
  created() {
    // ONche the Dom is mounted (before fo the page is render)
    this.loadTeamMembers(this.$route)
  },
  watch: {
    $route(newRoute) {
      // ^^^ when the route change.
      this.loadTeamMembers(newRoute)
    }
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>