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

import { fireDb } from '~/plugins/firebase.js'

export default {

  methods: {
    createID () {
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
      return result
    },

    async makeID () {
      let result = this.createID()
      // console.log(result)
      const ref = fireDb.collection('sessions').doc(result)
      const document = { result }
      // console.log(document)
      try {
        await ref.get().then((doc) => {
          if (doc.exists) {
            result = this.createID()
          } else {
            ref.set(document)
            this.$router.push(`/session/${result}`)
          }
        })
      } catch (e) {}
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
