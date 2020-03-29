<template>
  <div id="app">
    <navbar />
    <site-info />
    <spotify-login-button />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import SiteInfo from '../components/SiteInfo'
import SpotifyLoginButton from '../components/SpotifyLoginButton'

export default {
  components: {
    Navbar,
    SiteInfo,
    SpotifyLoginButton
  }
}
</script>
