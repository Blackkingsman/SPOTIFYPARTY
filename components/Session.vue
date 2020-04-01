<template>
  <div>
    <h5>Current Session</h5>
    <h5>Users: {{ items.length }}</h5>
    <table class="session">
      <thead>
        <tr>
          <th v-for="(column, index) in columns" :key="index">
            <h4><small>{{ column }}</small></h4>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td v-for="(column, indexColumn) in columns" :key="indexColumn">
            <h5> <small>{{ item[column] }}</small></h5>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {

      optQuality: [
        { value: 1, text: 'Original' },
        { value: 2, text: 'Kw-1' },
        { value: 3, text: 'Kw-2' }
      ],
      items: [
        {
          Username: 'tphillips24'
        },
        {
          Username: 'keith213'
        },
        {
          Username: 'upasnadah25'
        },
        {
          Username: 'trung231'
        },
        {
          Username: 'griffin256'
        }

      ],
      columns: ['Username'],
      slcQuality: null,
      user: 'tphillips24'
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
  table.a {
    table-layout: fixed;
    width: 180px;
  }
  tr:nth-child(even) {background-color: RGB(75,75,75)
  ;}

</style>
