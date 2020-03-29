<template>
  <div class="container">
    <div class="page">
      <h1 class="title">
        spotusfy.com
      </h1>
      <div role="tablist" class="info-block">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button id="toggle-button" v-b-toggle.accordion-1 href="#" variant="light">
              <span class="when-opened">X</span> <span class="when-closed">Site Info</span>
            </b-button>
          </b-card-header>
          <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
            <h5 class="description">
              Spotusfy is a simple app you can use to share music control of an existing Spotify accountwith your friends! Sessions are created and joined which allow members to search for and add desired songs directly from Spotify into a shared playlist. You can:
            </h5>
            <h6 class="lil-bold">
              Start a New Session:
            </h6>
            <h6 class="left-justify">
              Click the 'Create Session' button and log in with your existing Spotify account information.
            </h6>
            <h6 class="lil-bold">
              Invite Friends to Join:
            </h6>
            <h6 class="left-justify">
              Once you are in a session you can invite friends to join by their usernames via the 'Invite People' tab.
            </h6>
            <h6 class="lil-bold">
              Join an Existing Session:
            </h6>
            <h6 class="left-justify">
              Have a friend tell you the name they gave their existing session and join it without needing an invite using the 'Join Session' button.
            </h6>
          </b-collapse>
        </b-card>
      </div>
      <b-button variant="primary" class="connect-button">
        Connect with Spotify
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoBlock'
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Lato:700&display=swap');

  .collapsed > .when-opened,
  :not(.collapsed) > .when-closed {
    display: none;
  }
  .when-closed {
    font-size: 19px;
  }
  #toggle-button {
    background-color: transparent;
    color: black;
  }
  .card-header .btn[aria-expanded=true] {
    float: right;
  }
  .card-header .btn[aria-expanded=false] {
    margin: 0px;
  }
  .card .card-header {
    background-color: transparent;
    border-color: transparent;
  }
  .card {
    background-color: white;
    border-color: transparent;
  }
  .title {
    font-family: 'Lato', sans-serif;
    margin-top: 280px;
    margin-bottom:140px;
    font-weight: 840;
    font-size: 65px;
  }
  .site-info {
    margin-left: 110px;
    margin-right: 110px;
    margin-top: 40px;
  }
  .connect-button {
    margin: 20px;
    font-size: 21px;
    /* width: 200px; */
    /* position: absolute; */
  }
  .info-button {
    margin: 15px;
  }
  #accordion-1 {
    margin: 15px;
    /* position: relative; */
  }
  .info-block {
    margin-top: 30px;
    margin-left: 200px;
    margin-right: 200px;
    /* position: absolute; */
  }
  .description {
    font-size: 18.5px;
    text-align: left;
    margin-top: 9px;
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 35px;
  }
  .lil-bold {
    font-size: 18px;
    font-weight: 840px;
    margin: 15px;
  }
  .left-justify {
    font-size: 18px;
    text-align: left;
    margin-left: 80px;
    margin-right: 80px;
    margin-top: 15px;
    margin-bottom: 25px;
  }
</style>
