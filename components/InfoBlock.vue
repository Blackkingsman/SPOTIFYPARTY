<template>
  <div class="container">
    <div class="info-block">
      <h1 class="bold">{{ msg }}<span class="registered"><sup>&reg;</sup></span></h1>
      <h4 class="charcoal">
        Spotusfy is a simple app you can use to share music control of an existing Spotify account with your friends!
        <br><br>
        Sessions are created and joined which allow members to search for and add desired songs directly from Spotify into a shared playlist
        <br>
      </h4>
      <h3 class="bold2">
        Get Started:
      </h3>
      <h5>
        <span class="bold1">1. Start a New Session:</span>
        <br><br>
        Click the 'Create Session' button and log in with your existing Spotify account information
        <br><br>
        <span class="bold1">2. Invite Friends to Join:</span>
        <br><br>
        Once you are in a session you can invite friends to join by their usernames via the 'Invite People' tab
        <br><br>
        <span class="bold1">3. Join an Existing Session:</span>
        <br><br>
        Have a friend tell you the name they gave their existing session and join it without needing an invite using the 'Join Session' button
      </h5>
      <h3 class="bold3">
        Congratulations,<br>
        you're queueing songs!
      </h3>
      <h5 class="charcoal2">
        For more detailed information about using Spotusfy<span class="registered"><sup>&reg;</sup></span> please refer to our <a v-bind:href="'/faqs'">FAQs</a>
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoBlock',
  props: {
    msg: {
      type: String,
      default: 'spotusfy.com'
    }
  }
}
</script>

<style scoped>
  h4 {
    margin: 40px;
  }
  h5 {
    margin: 40px;
  }
  .charcoal2 {
    margin-bottom: 50px;
    margin-left: 175px;
    margin-right: 175px;
    color:dimgray
  }
  .site-info {
    margin-top: 60px;
  }
  .bold {
    margin-top: 70px;
    font-weight: 840;
  }
  .bold1 {
    font-weight: 850;
  }
  .bold2 {
    font-weight: 900;
    color:rgb(66, 173, 189);
  }
  .bold3 {
    margin-top: 55px;
    margin-bottom: 55px;
    font-weight: 900;
    color:rgb(66, 173, 189);
  }
  .registered {
    font-size: 65%;
  }
  .charcoal {
    color:dimgray
  }
</style>
