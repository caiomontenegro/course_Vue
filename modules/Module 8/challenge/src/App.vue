<template>
    <user-data @new-person="addPerson"></user-data>
  <ul>
    <active-user
    v-for="person in people"
    :key="person.id"
    :id="person.id"
    :name="person.name"
    :age="person.age"
    ></active-user>
  </ul>
</template>


<script>
export default {
  data() {
    return {
      people: [
      ],
    }
  },
  methods: {
    addPerson(name, age) {
      const newPerson = {
        id: this.people.length+1,
        name: name,
        age: age
      }
      this.people.push(newPerson)
    }
  }
}
</script>
