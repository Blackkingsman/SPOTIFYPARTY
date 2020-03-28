<template>
  <div class="container">
    <div class="page">
      <h1 class="title">
        {{ msg }}
      </h1>
      <div role="tablist" class="info-block">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button v-b-toggle.accordion-1 href="#" variant="light">
              <span class="when-opened">X</span> <span class="when-closed">Site Info</span>
            </b-button>
          </b-card-header>
          <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
            <h5> {{ text }} </h5>
            <h6 class="lil-bold">
              Start a New Session:
            </h6>
            <h6 class="left-just">
              Click the 'Create Session' button and log in with your existing Spotify account information.
            </h6>
            <h6 class="lil-bold">
              Invite Friends to Join:
            </h6>
            <h6 class="left-just">
              Once you are in a session you can invite friends to join by their usernames via the 'Invite People' tab.
            </h6>
            <h6 class="lil-bold">
              Join an Existing Session:
            </h6>
            <h6 class="left-just">
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
  name: 'InfoBlock',
  props: {
    msg: {
      type: String,
      default: 'spotusfy.com'
    },
    text: {
      type: String,
      default: 'Spotusfy is a simple app you can use to share music control of an existing Spotify accountwith your friends. Sessions are created and joined which allow members to search for and add desired songs directly from Spotify into a shared playlist. You can:'
    }
  }
}
</script>

<style scoped>
  .collapsed > .when-opened,
  :not(.collapsed) > .when-closed {
    display: none;
  }
  .when-closed {
    font-size: 18px;
  }
  .card-header .btn[aria-expanded=true] {
    float: right;
  }
  .card-header .btn[aria-expanded=false] {
    margin: 0px;
  }
  .container {
    overflow: hidden;
  }
  .title {
    margin-top: 280px;
    margin-bottom:160px;
    font-weight: 840;
    font-size: 75px;
  }
  .site-info {
    margin-left: 110px;
    margin-right: 110px;
    margin-top: 40px;
  }
  .connect-button {
    margin: 15px;
    font-size: 18px;
  }
  .info-button {
    margin: 15px;
  }
  #accordion-1 {
    margin: 15px;
  }
  .info-block {
    margin-top: 30px;
    margin-left: 200px;
    margin-right: 200px;
  }
  h5 {
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
  }
  .left-just {
    font-size: 18px;
    text-align: left;
    margin-left: 80px;
    margin-right: 80px;
    margin-bottom: 25px;
  }
  h6 {
    margin: 15px;
  }
  /*.charcoal2 {
    margin-bottom: 50px;
    margin-left: 175px;
    margin-right: 175px;
    color:dimgray
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
  } */
</style>
      <!-- <div>
        <b-button v-b-toggle.collapse-1 variant="dark" class="a-button">
          About
        </b-button>
        <b-collapse id="collapse-1" class="mt-2">
          <b-card class="site-info">
            <h5>
              {{ text }}
            </h5>
          </b-card>
        </b-collapse>
      </div> -->
