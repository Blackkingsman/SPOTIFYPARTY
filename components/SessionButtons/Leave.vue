<template>
  <div>
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
      flag: false,
      sessionState: null,
      error: null
    }
  },

  methods: {

    async removeID () {
      const docID = this.$route.params.id
      console.log(docID)
      let returnValue = false
      let docExists = false
      try {
        const docRef = await fireDb.collection('sessions').doc(docID)
        await docRef.get().then(function (doc) {
          if (doc.exists) {
            docExists = true
            this.$data.flag = true
          } else {
            window.alert('ERROR: Session does not exist!')
            console.log('no such doc exists')
          }
        })
      } catch (e) {
        console.log(e.toString())
      }
      if (docExists) {
        try {
          await fireDb.collection('sessions').doc(docID).delete()
          returnValue = true
        } catch (e) {
          console.log(e.toString())
        }
      }
      return returnValue
    },

    async handleOk (bvModalEvt) {
      console.log(this.$data.flag.toString())
      const success = await this.removeID()
      console.log(this.$data.flag.toString())
      if (success) {
        console.log('here')
        bvModalEvt.preventDefault()
        this.handleSubmit()
      } else {
        console.log('dhuoahdoadadijlajd')
      }
    },

    handleSubmit () {
      console.log('home page')
      this.$router.push('/home')
    }
  }
}
</script>
