<template>
  <div>
    <input
      id="my-input"
      class="form-control"
      type="text"
      aria-label="Search"
      placeholder="Search..."
      @keydown="eventHandler"
    >
    <div v-if="GET_HIDDEN" id="test" />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Session from '../../model/Session.js'
import { spotify } from '~/plugins/spotify'
import { fireDb } from '~/plugins/firebase'

export default {
  name: 'SearchButton',
  computed: {
    ...mapGetters(['GET_HIDDEN', 'GET_RESPONSE', 'GET_DISPLAY']),
    ...mapState(['ishidden', 'jsonResponse'])
  },
  data () {
    return {
      qs: {
        q: 'road',
        type: 'track'
      },
      tracks: [],
      session: new Session(this.$route.params.id)
    }
  },
  methods: {
    async eventHandler () {
      // Get the input box
      const input = document.getElementById('my-input')
      const name = this.$route.params.id
      const realsession = this.session
      const displayname = this.$store.getters.GET_USER
      if (input.value.length === 0 || input.value.trim() === '' || input.value === ' ' || input.value === null) {
        this.$store.commit('SET_HIDDEN', false)
      } else {
        this.$store.commit('SET_HIDDEN', true)
      }
      // Init a timeout variable to be used below
      let timeout = null
      const gettoken = await fireDb.collection('sessions').doc(name).get()
      const tokenid = gettoken.data().apiToken
      spotify.setAccessToken(tokenid)
      // Listen for keystroke events
      input.addEventListener('keyup', function (e) {
        // Clear the timeout if it has already been set.
        // This will prevent the previous task from executing
        // if it has been less than <MILLISECONDS>
        clearTimeout(timeout)

        // Make a new timeout set to go off in 1000ms (1 second)
        timeout = setTimeout(async function () {
          console.log('Input Value:', input.value)
          console.log(tokenid)
          if (input.value.length !== 0) {
            await spotify.searchTracks(input.value, { limit: 10 }, function (err, responses) {
              if (err) {
                console.error(err)
              } else {
                const p = document.getElementById('test')
                const holder = []
                let index = -1
                p.innerHTML = '<table class="table" id ="example">\n' +
                    '        <thead> <tr><th>Track Name</th> <th>Artist Name</th> ' +
                    '<th> Album Name</th> <th>Album Cover</th> <th>Controls</th></tr> ' +
                    '</thead><tbody id ="tablebody"></tbody></table>'
                responses.tracks.items.forEach((item) => {
                  holder.push(item)
                  document.getElementById('tablebody').innerHTML +=
                      '<tr><td><h5><small>' + item.name + '</small></h5></td> <td><h5><small>' + item.artists[0].name + '</small></h5></td> <td><h5><small>' +
                      item.album.name + '</small></h5></td><td><img src="' + item.album.images[2].url + '"/></td><td>' +
                      '<button type = "button" class="btn-outline-success">ADD</button></td></tr>'
                })
                const table = document.getElementById('example')
                const rows = table.getElementsByTagName('tr')
                for (let i = 0; i < rows.length; i++) {
                  const currentRow = table.rows[i]
                  const createClickHandler =
                      function (row) {
                        return async function () {
                          // const cell = row.getElementsByTagName('td')[0]
                          // const id = cell.innerHTML
                          index = i - 1
                          console.log(index)
                          const snapshot = await
                          fireDb
                            .collection('sessions')
                            .doc(name)
                            .get() // used to check if playlistid is already set
                          const idholder = []
                          let flag = true // will be used later to see if playlist already exists
                          if (typeof snapshot.data().playlistid === 'undefined') {
                            flag = false
                            console.log('false')
                          } else {
                            // if item is defined this means that there is a current playlist on spotify
                            idholder.push(snapshot.data().playlistid)
                          }
                          console.log(idholder[0])
                          if (flag) {
                            console.log('hello')
                            await spotify.addTracksToPlaylist(idholder[0].toString(), [holder[index].uri], null, async function (err, responses) {
                              if (err) {
                                console.error(err)
                              } else {
                                console.log('successfully added track!')
                                const song = {
                                  uri: holder[index].uri,
                                  url: holder[index].album.images[0].url,
                                  album_name: holder[index].album.name,
                                  track_name: holder[index].name,
                                  artist_name: holder[index].album.artists[0].name
                                }
                                input.value = null
                                await realsession.addtoQueue(displayname, song)
                              }
                            })
                          }
                        }
                      }
                  currentRow.onclick = createClickHandler(currentRow)
                }
              }
            })
          }
        }, 250)
      })
    }
  }
}
</script>

<style>

</style>
