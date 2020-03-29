<template>
  <div id="app">
    <navbar />
    <info-block />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import InfoBlock from '../components/InfoBlock'

export default {
  components: {
    Navbar,
    InfoBlock
  }
}
</script>

<style scoped>
  #app {
    position: absolute;
    overflow-y: hidden;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
  }
</style>
