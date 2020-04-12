<template>
  <div id="app">
    <div><Navbar /></div>
    <div class="flex-container">
      <div class="session">
        <currentSession />
      </div>
      <div class="queue">
        <Tablepage />
        <b-input id="txtUserId" v-model="input" @keyup.enter="addmember(input)" />
      </div>
    </div>
  </div>
</template>

<script>
import Tablepage from '../../components/Tablepage'
import Navbar from '../../components/Navbar.vue'
import currentSession from '../../components/Session'
import Session from '../../model/Session'
export default {
  name: 'App',
  components: {
    Tablepage,
    Navbar,
    currentSession
  },
  data () {
    return {
      session: new Session(this.$route.params.id),
      input: ''
    }
  },
  methods: {
    async addmember (name) {
      // track: {track_id, track_title, track_artist, track_album}
      await this.session.addtoQueue(name, { track_id: '456145640564056', track_name: 'Lil Wayne', artist: 'Trippie Redd', track_album: '!' })
    }
  }
}

</script>
<style>
  .flex-container{
    display: flex;
    flex-wrap: wrap;
  }
  .flex-container .queue{
    width: 90% !important;
    margin-left: auto !important;
    margin-right: auto !important;
  }
  h4{
    color: white;
  }
  h5{
    color: white;
  }
  tr:nth-child(even) {background-color: RGB(75,75,75)
  ;}
  tr:nth-child(odd) {background-color: RGB(69,66,65)
  ;}
</style>
