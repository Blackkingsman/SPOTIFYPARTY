<template>
  <div class="session">
    <div>
      <table class="table">
        <thead>
          <tr>
            <th v-for="(column, index) in columns" :key="index">
              <h4><small>{{ items.length }} {{ column }}s  </small></h4>
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
          User: 'tphillips24'
        },
        {
          User: 'keith213'
        },
        {
          User: 'upasnadah25'
        },
        {
          User: 'trung231'
        },
        {
          User: 'griffin256'
        }

      ],
      columns: ['User'],
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
</style>
