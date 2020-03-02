
<template>
  <div id="app">
    <navbar />
    <profile />
    <sessions />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Profile from '../components/Profile.vue'
import Sessions from '../components/Sessions.vue'

export default {
  components: {
    Navbar,
    Profile,
    Sessions
  },
  methods: {
    handleClick () {
      alert('hey something is working now')
    }
  }
}
</script>

<style scoped>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
