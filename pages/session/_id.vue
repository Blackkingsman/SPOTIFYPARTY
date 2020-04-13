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
    const retrievePlaylist = new XMLHttpRequest()
    const name = this.route
    const snapshot = await fireDb.collection('sessions').where('result', '==', name).get()
    const holder = []
    let flag = true
    snapshot.forEach((item) => {
      if (typeof item.data().playlistid === 'undefined') {
        flag = false
      } else {
        holder.push(item.data().playlistid)
      }
    })
    console.log('playlist already found: ' + holder)
    retrievePlaylist.open('get', 'https://api.spotify.com/v1/users/tphillips24-us/playlists', true)
    retrievePlaylist.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('spotify-access-token').toString().trim())
    retrievePlaylist.setRequestHeader('Content-Type', 'application/json')
    retrievePlaylist.send()
    req.onreadystatechange = async function () {
      if (req.readyState === 4) {
        if (req.status >= 200 && req.status <= 300) {
          console.log('success')
          this.responses = JSON.parse(req.responseText)
          console.log(name)
          await fireDb.collection('sessions').doc(name).update({ playlistid: this.responses.id })
        } else {
          console.log('failure')
        }
      }
    }
    if (flag === false) {
      console.log('playlist not found! adding playlist to spotify')
      req.open('post', 'https://api.spotify.com/v1/users/tphillips24-us/playlists', true)
      req.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('spotify-access-token').toString().trim())
      req.setRequestHeader('Content-Type', 'application/json')
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
