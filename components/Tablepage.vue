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
export default {
  data () {
    return {
      isHidden: false,
      optQuality: [
        { value: 1, text: 'Original' },
        { value: 2, text: 'Kw-1' },
        { value: 3, text: 'Kw-2' }
      ],
      items: [
        {
          User: 'tphillips24',
          Album: '!',
          Song: 'Lil Wayne',
          Artist: 'Trippie Redd',
          'Album Cover': 'https://upload.wikimedia.org/wikipedia/en/c/cd/Trippie_Redd_-_%21.png'
        },
        {
          User: 'upasnadah25',
          Album: 'Highest in The Room',
          Song: 'Highest in The Room',
          Artist: 'Travis Scott',
          'Album Cover': 'https://i2.wp.com/respect-mag.com/wp-content/uploads/2019/09/image002-5.jpg?resize=3000%2C3000&ssl=1'
        },
        {
          User: 'logan234',
          Album: 'Dark Knight Dummo',
          Song: 'Dark Knight Dummo',
          Artist: 'Trippie Redd',
          'Album Cover': 'https://m.media-amazon.com/images/I/91CtpJfsajL._SS500_.jpg'
        },
        {
          User: 'upasnadah25',
          Album: 'Hollywood\'s Bleeding',
          Song: 'Enemies',
          Artist: 'Post Malone',
          'Album Cover': 'https://bloximages.newyork1.vip.townnews.com/dailynebraskan.com/content/tncms/assets/v3/editorial/f/98/f980399a-d299-11e9-a670-d3964076fe5f/5d759f4b36a7d.image.jpg'
        },
        {
          User: 'keith213',
          Album: 'Tha Carter IV',
          Song: 'How To Love',
          Artist: 'Lil Wayne',
          'Album Cover': 'https://upload.wikimedia.org/wikipedia/en/d/d1/Lil_Wayne_-_Tha_Carter_IV.jpg'
        },
        {
          User: 'griffin256',
          Album: 'Trap Lord',
          Song: 'Work',
          Artist: 'A$ap Ferg',
          'Album Cover': 'https://upload.wikimedia.org/wikipedia/en/6/6c/ASAP_Ferg_Trap_Lord.jpg'
        }, {
          User: 'tphillips24',
          Album: 'TRAPSOUL',
          Song: 'Don\'t',
          Artist: 'Bryson Tiller',
          'Album Cover': 'https://upload.wikimedia.org/wikipedia/en/4/4e/Trapsoulalbum.jpeg'
        }

      ],
      columns: ['No.', 'User', 'Album Cover', 'Album', 'Song', 'Artist', 'Controls'],
      slcQuality: null,
      user: 'logan234'
    }
  },
  methods: {
    removeElement (index) {
      this.items.splice(index, 1)
    }
  }

}
</script>
<style>
  img.rounded-corners {
    border-radius: 20px;
  }
</style>
