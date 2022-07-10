<template>
  <base-card>
    <base-button @click="setSelectedTab('stored-resources')">Store Resources</base-button>
    <base-button @click="setSelectedTab('add-resource')">Add Resource</base-button>
  </base-card>
  <component :is="selectedTab"></component>
</template>

<script>
import StoredResources from './StoredResources.vue'
import AddResource from './AddResource.vue'

export default {
  components: {
    StoredResources,
  },
  data() {
    return {
      selectedTab: 'stored-resource'
    }
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab
    }
  }
}
</script>