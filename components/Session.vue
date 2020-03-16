<template>
  <div>
    <button v-if="!isHidden" class="btn btn-success" @click="isHidden = !isHidden">
      Show Current Session
    </button>
    <button v-if="isHidden" class="btn btn-danger" @click="isHidden = !isHidden">
      Hide Current Session
    </button>
    <div v-show="isHidden">
      <h2>Current Session</h2>
      <table class="table">
        <thead>
          <tr>
            <th v-for="(column, index) in columns" :key="index">
              {{ column }}
            </th>
            <th>Controls</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="index">
            <td v-for="(column, indexColumn) in columns" :key="indexColumn">
              {{ item[column] }}
            </td>
            <b-button v-if="item == items[0]" variant="danger">
              Leave
            </b-button>
            <b-button v-if="item != items[0]" variant="success">
              Make Leader
            </b-button><b-button v-if="item != items[0]" variant="danger" @click="removeElement(index)">
              Remove
            </b-button>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    removeElement (index) {
      this.items.splice(index, 1)
    }
  },
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
          'No.': '1',
          Username: 'tphillips24',
          Name: 'Terry ',
          Role: 'Party Leader'
        },
        {
          'No.': '2',
          Username: 'keith213',
          Name: 'Keith',
          Role: 'Memeber'
        },
        {
          'No.': '3',
          Username: 'upasnadah25',
          Name: 'Upasna',
          Role: 'Memeber'
        },
        {
          'No.': '4',
          Username: 'trung231',
          Name: 'Trung',
          Role: 'Memeber'
        },
        {
          'No.': '5',
          Username: 'griffin256',
          Name: 'Griffin',
          Role: 'Memeber'
        }

      ],
      columns: ['No.', 'Username', 'Name', 'Role'],
      slcQuality: null
    }
  }

}
</script>
