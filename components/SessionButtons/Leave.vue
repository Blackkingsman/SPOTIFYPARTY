<template>
  <div>
    <b-button v-b-modal.modal-prevent-closing-leave variant="/" style="color: white">
      Leave Session
    </b-button>
    <b-modal
      id="modal-prevent-closing-leave"
      ref="modal"
      title="Leave Session?"
      ok-variant="success"
      ok-title="Yes"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          :state="leaveState"
          :invalid-feedback="error"
        >
          <p> Are you sure you want to leave? </p>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
import { fireDb } from '~/plugins/firebase.js'

export default {
  name: 'LeaveModal',

  data () {
    return {
      session: '',
      sessionState: null,
      error: null
    }
  },

  methods: {

    async removeID () {
      const docID = this.$route.params.id
      let result
      console.log(result)
      const ref = fireDb.collection('sessions').doc(docID)
      console.log(ref)
      try {
        await ref.get().then((doc) => {
          if (doc.exists) {
            result = fireDb.collection('sessions').doc(docID).delete()
          }
        })
      } catch (e) {}
    },

    handleOk (bvModalEvt) {
      this.removeID()
      const result = this.$route.params.id
      console.log(result)
      bvModalEvt.preventDefault()
      this.handleSubmit()
    },

    handleSubmit () {
      this.$router.push('/home')
    }
  }
}
</script>
