<template>
  <!-- v-if="isActive"  -->
  <b-button id="spotifyLogin" pill variant="success" @click="redirectToSpotify">
    Connect with Spotify
  </b-button>
</template>

<script>
// // Import the EventBus.
// import { EventBus } from '../event-bus.js'

// // Listen for the active event and its payload.
// EventBus.$on('active', (isActive) => {
//   isActive = false
// })

export default {
  methods: {
    redirectToSpotify () {
      const clientId = '944d6c120afe41179ddcf4c1d9a874b2'
      const redirectUri = encodeURIComponent(`${location.origin}/callback/`)
      let uri = 'https://accounts.spotify.com/authorize'
      uri += `?client_id=${clientId}`
      uri += `&redirect_uri=${redirectUri}`
      uri += '&response_type=token'
      uri += '&state=yes'
      window.location = uri
    }
  }
}
</script>

<style scoped>
  #spotifyLogin {
    z-index: -1;
    margin-left: auto;
    margin-right: auto;
    padding: 12px;
    left: 0;
    right: 0;
    font-size: 21px;
  }
</style>
