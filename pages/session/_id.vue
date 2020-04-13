<template>
  <div id="app">
    <div><Navbar /></div>
    <div class="flex-container">
      <div class="session">
        <currentSession />
      </div>
      <div>{{ responses }}</div>
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
import { fireDb } from '~/plugins/firebase'
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
      input: '',
      errors: [],
      baseuri: 'https://api.spotify.com/v1',
      user_id: 'tphillips-24',
      data: {
        name: this.$route.params.id,
        description: 'Description',
        public: true
      },
      found: false,
      responses: null,
      playlistId: '',
      route: this.$route.params.id
    }
  },
  async mounted () {
    const req = new XMLHttpRequest()
    const name = this.route // this is the sessionid found in the URL
    const snapshot = await
    fireDb
      .collection('sessions')
      .where('result', '==', name).get() // used to check if playlistid is already set
    const holder = []
    let flag = true // will be used later to see if playlist already exists
    snapshot.forEach((item) => {
      // checks to see if the item is undefined or not set flag false if undefined
      if (typeof item.data().playlistid === 'undefined') {
        flag = false
      } else {
        // if item is defined this means that there is a current playlist on spotify
        holder.push(item.data().playlistid)
      }
    })
    if (flag === true) {
      // used in console developer tools:(ctrl + shift + i) browser
      console.log('playlist already found: ' + holder)
    }
    //
    // this function is used to dectect change on the request
    //
    req.onreadystatechange = async function () {
      if (req.readyState === 4) {
        //
        // 4 means it responded
        // here checking to see if i got any errors
        // if its within this range no errors detected
        //
        if (req.status >= 200 && req.status <= 300) {
          console.log('success')
          //
          // this will take the response from the api and store it
          //
          this.responses = JSON.parse(req.responseText)
          console.log(name)
          //
          // once the response is stored we can pick out the fields we need
          // here i grabbed the playlistid from the creation
          // and stored it on the firebase for the current session
          //
          await fireDb.collection('sessions').doc(name).update({ playlistid: this.responses.id })
        } else {
          // errors were detected view dev tools
          console.log('failure')
        }
      }
    }
    if (flag === false) { // if playlist is not defined on firebase create playlist on spotify
      console.log('playlist not found! adding playlist to spotify')
      //
      // open http request (method: ,url: https://api.spotify.com/v1/users/{user_id}/playlists, async:)
      //
      req.open('post', 'https://api.spotify.com/v1/users/tphillips24-us/playlists', true)
      //
      // set header for use this format make sure to get access token I used
      // trim() so there were no trailing or beginning spaces
      //
      req.setRequestHeader('Authorization', 'Bearer ' +
        localStorage.getItem('spotify-access-token')
          .toString().trim())
      //
      // set Content-Type to application/json this can be found in spotify documentation
      //
      req.setRequestHeader('Content-Type', 'application/json')
      //
      // make sure to send data with JSON.stringify()
      // data: {name:,public,description}
      // there are more fields that are optional you can add to data {}
      //
      req.send(JSON.stringify(this.data))
    }
  },
  methods: {
    async addmember (name) {
      console.log(this.responses)
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
