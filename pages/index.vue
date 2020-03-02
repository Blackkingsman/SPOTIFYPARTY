
<template>
  <v-container>
    <navbar />
  </v-container>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  components: {
    Navbar
  },
  methods: {
    handleClick () {
      alert('hey something is working now')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
