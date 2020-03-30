<template>
  <div id="app">
    <navbar />
    <info-block />
    <!-- <site-info /> -->
    <spotify-login-button />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import InfoBlock from '../components/InfoBlock'
// import SiteInfo from '../components/SiteInfo'
import SpotifyLoginButton from '../components/SpotifyLoginButton'

export default {
  components: {
    Navbar,
    InfoBlock,
    // SiteInfo,
    SpotifyLoginButton
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
