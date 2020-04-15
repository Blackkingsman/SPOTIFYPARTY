<template>
  <div>
    <div class="queue">
      <table class="table">
        <thead>
          <tr>
            <th v-for="(column, index) in columns" :key="index">
              <h4 style="color: RGB(30,215,96);">
                <small> {{ column }}</small>
              </h4>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="index">
            <td v-for="(column, indexColumn) in columns" :key="indexColumn">
              <h5 v-if="column==='No.'">
                <small>{{ index +1 }}</small>
              </h5>
              <h5 v-if="column!='Album Cover'">
                <small>{{ item[column] }}</small>
              </h5>
              <img v-if="column=== 'Album Cover'" class="rounded-corners" :src="item['Album Cover'].valueOf()" style="width:75px;height:75px;">
              <b-button v-if="item['User'].valueOf() === GET_USER && column ==='Controls'" variant="danger" @click="removeElement (index)">
                Remove
              </b-button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { fireDb } from '../plugins/firebase'
export default {
  computed: {
    ...mapGetters(['GET_USER'])
  },
  data () {
    return {
      count: 0,
      isHidden: false,
      optQuality: [
        { value: 1, text: 'Original' },
        { value: 2, text: 'Kw-1' },
        { value: 3, text: 'Kw-2' }
      ],
      db: [],
      songs: [],
      queue: [],
      items: [],
      columns: ['No.', 'User', 'Album Cover', 'Album', 'Song', 'Artist', 'Controls'],
      slcQuality: null,
      user: 'bob'
    }
  },
  async created () {
    const sessionref = fireDb.collection('sessions')
    await sessionref.where('result', '==', this.$route.params.id).onSnapshot((data) => {
      this.db = []
      this.songs = []
      this.queue = []
      this.items = []
      if (data) {
        data.forEach((track) => {
          this.db.push(track.data())
        })
        if (this.db[0].playlist) {
          this.db[0].playlist.forEach((item) => {
            this.songs.push(item)
          })
        }
        if (this.songs) {
          this.songs.forEach((item) => {
            this.items.push({
              User: item.uid,
              Album: item.track.album_name,
              Song: item.track.track_name,
              'Album Cover': item.track.url,
              Artist: item.track.artist_name
            })
          })
        }
      } else {
        this.items = []
      }
    })
  },
  methods: {
    async removeElement (index) {
      const itemholder = []
      const playlistholder = []
      const name = this.$route.params.id
      const snapshot1 = await fireDb.collection('sessions')
        .where('result', '==', this.$route.params.id)
        .get() // used to check if playlistid is already set
      const holder = []
      let flag = true // will be used later to see if playlist already exists
      // get one Artist name this.jsonTracks[0].album.artists[0].name
      // get song name this.jsonTracks[0].name
      // get song Album name this.jsonTracks[0].album.name
      // get album img_URL this.jsonTracks[0].album.images[0].url
      // get song uri this.jsonTracks[0].uri)
      snapshot1.forEach((item) => {
        // checks to see if the item is undefined or not. set flag false if undefined
        if (typeof item.data().playlistid === 'undefined') {
          flag = false
        } else {
          // if item is defined this means that there is a current playlist on spotify
          holder.push(item.data().playlistid)
        }
      })
      if (flag === false) {
        console.log('Playlist Undefined')
      }
      const snapshot = await
      fireDb
        .collection('sessions')
        .where('result', '==', this.$route.params.id)
        .get()
      snapshot.forEach((item) => {
        itemholder.push(item.data())
      })
      itemholder.forEach((item) => {
        playlistholder.push((item))
      })
      const newArray = playlistholder[0].playlist.slice()
      let removeuri = ''
      let removeindex = -1
      console.log(newArray)
      const userid = this.$store.getters.GET_USER
      for (let i = 0; i < playlistholder[0].playlist.length; i++) {
        if (playlistholder[0].playlist[i].uid === userid && i === index) {
          removeindex = i
          removeuri = playlistholder[0].playlist[i].track.uri
        }
      }
      playlistholder[0].playlist.splice(removeindex, 1)
      console.log(playlistholder[0].playlist)
      console.log(removeuri + ' ' + removeindex.toString())
      const req = new XMLHttpRequest()
      req.onreadystatechange = async function () {
        if (req.readyState === 4) {
          if (req.status >= 200 && req.status <= 300) {
            console.log('successfully removed song from spotify. attempting remove from firebase')
            const oplaylist = []
            for (let i = 0; i < playlistholder[0].playlist.length; i++) {
              oplaylist.push(playlistholder[0].playlist[i])
            }
            console.log(oplaylist)
            await fireDb.collection('sessions').doc(name).update({ playlist: oplaylist })
          } else {
            console.log('failed to remove track')
          }
        }
      }
      const data = {
        tracks: [{ uri: removeuri, positions: [removeindex] }]
      }
      req.open('DELETE', 'https://api.spotify.com/v1/playlists/' + holder[0].toString().trim() + '/tracks', true)
      req.setRequestHeader('Authorization', 'Bearer ' +
        localStorage.getItem('spotify-access-token')
          .toString().trim())
      req.setRequestHeader('Content-Type', 'application/json')
      req.send(JSON.stringify(data))
    }

  }

}
</script>
<style>
  img.rounded-corners {
    border-radius: 20px;
  }
</style>
