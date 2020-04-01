<template>
  <div>
    <b-button v-b-modal.modal-prevent-closing-leave variant="/" style="color: white">
      Leave Session
    </b-button>
    <b-modal
      id = "modal-prevent-closing-leave"
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
    // validateSession () {
    //   this.error = null
    //   if (!this.$refs.form.checkValidity()) {
    //     this.error = 'Please enter a session ID'
    //   } else if (this.session.length !== 4) {
    //     this.error = 'The session ID should be 4 characters'
    //   }
    //   if (this.error) {
    //     this.sessionState = false
    //     return false
    //   }
    //   return true
    // },

    // resetModal () {
    //   this.session = ''
    //   this.sessionState = null
    // },

    handleOk (bvModalEvt) {
      bvModalEvt.preventDefault()
      this.handleSubmit()
    },

    handleSubmit () {
      this.$router.push('/home')
    }
  }
}
</script>
