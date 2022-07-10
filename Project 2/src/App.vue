<template>
  <ul>

  </ul>
</template>


<script>
export default {
  data() {
    return {
      storeResources: [
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