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
              <b-button v-if="item['User'].valueOf() === user && column ==='Controls'" variant="danger" @click="removeElement (index)">
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
import { fireDb } from '../plugins/firebase'
export default {
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
    removeElement (index) {
      this.db.splice(index, 1)
    }

  }

}
</script>
<style>
  img.rounded-corners {
    border-radius: 20px;
  }
</style>
