<template>
  <div>
    <button v-if="!isHidden" class="btn btn-success" @click="isHidden = !isHidden">
      Show Personal Queue
    </button>
    <button v-if="isHidden" class="btn btn-danger" @click="isHidden = !isHidden">
      Hide Personal Queue
    </button>
    <div v-show="isHidden">
      <h2>Personal Queue</h2>
      <table class="table">
        <thead>
          <tr>
            <th v-for="(column, index) in columns" :key="index">
              {{ column }}
            </th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="index">
            <td v-for="(column, indexColumn) in columns" :key="indexColumn">
              {{ item[column] }}
            </td>

            <b-button variant="danger">
              - Remove Song
            </b-button>
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
