<template>
  <ul>
    <learning-resources v-for="res in storedResources" 
    :key="res.id" 
    :title="res.title"
    :description="res.description"
    :link="res.link"
    ></learning-resources>
  </ul>
</template>


<script>
import LearningResources from './components/learning-resources/LearningResource.vue'

export default {
  components: {
    LearningResources
  },
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The Official Vue.js documentatiom', 
          link: 'https://vuejs.org'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to Google', 
          link: 'https://google.com'
        },
      ]
    }
  }
}
</script>