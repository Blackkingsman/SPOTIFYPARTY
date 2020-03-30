<template>
  <b-button id="spotifyLogin" pill variant="success" @click="redirectToSpotify">
    Connect with Spotify
  </b-button>
</template>

<script>
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
    font-size: 21px;
    padding: 12px;
  }
</style>
