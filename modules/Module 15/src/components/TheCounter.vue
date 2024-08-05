<template>
  <h3>
    {{ finalCounter }}
  </h3>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // counter() {
    //   return this.$store.getters.finalCounter
    // }

    // use map:
    ...mapGetters(['finalCounter'])
  },
};
</script>
