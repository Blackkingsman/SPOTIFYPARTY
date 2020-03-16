<template>
  <div>
    <button v-if="!isHidden" class="btn btn-success" @click="isHidden = !isHidden">
      Show Shared Queue
    </button>
    <button v-if="isHidden" class="btn btn-danger" @click="isHidden = !isHidden">
      Hide Shared Queue
    </button>
    <div v-show="isHidden">
      <h2>Shared Queue</h2>
      <table class="table">
        <thead>
          <tr>
            <th v-for="(column, index) in columns" :key="index">
              {{ column }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="index">
            <td v-for="(column, indexColumn) in columns" :key="indexColumn">
              {{ item[column] }}
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
          Queue: '1',
          Song: 'Lil Wayne',
          Artist: 'Trippie Redd',
          'Queued By': 'Terry '
        },
        {
          Queue: '2',
          Song: 'Highest in The Room',
          Artist: 'Travis Scott',
          'Queued By': 'Upasna  '
        },
        {
          Queue: '3',
          Song: 'Dark Knight Dummo',
          Artist: 'Trippie Redd',
          'Queued By': 'Logan '
        },
        {
          Queue: '4',
          Song: 'Enemies',
          Artist: 'Post Malone',
          'Queued By': 'Upasna  '
        },
        {
          Queue: '5',
          Song: 'How To Love',
          Artist: 'Lil Wayne',
          'Queued By': 'Keith '
        },
        {
          Queue: '6',
          Song: 'Work',
          Artist: 'A$ap Ferg',
          'Queued By': 'Griffin '
        }, {
          Queue: '7',
          Song: 'Dont',
          Artist: 'Bryson Tiller',
          'Queued By': 'Terry'
        }

      ],
      columns: ['Queue', 'Song', 'Artist', 'Queued By'],
      slcQuality: null
    }
  }

}
</script>
