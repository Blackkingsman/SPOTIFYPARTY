<template>
  <div id="session-navigation">
    <create-button />
    <b-button pill variant="success" style="color: white" @click="makeID">
      Create Session
    </b-button>
    <b-button v-b-modal.join-modal pill variant="success" style="color: white">
      Join Session
    </b-button>
  </div>
</template>

<script>

export default {
  components: {

  },

  methods: {
    makeID () {
      const length = 4
      let result = ''
      const characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      const charactersLength = characters.length
      for (let i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        )
      }
      this.$router.push(`/session/${result}`)
    }
  }
}
</script>

<style scoped lang="scss">
#session-navigation {
  display: inline-flex;
  div {
    margin: 0 3% 0 3%;
  }
}
</style>
