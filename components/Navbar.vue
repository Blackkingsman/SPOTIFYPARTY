<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#">
      Home
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" />

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">
          Create Session
        </b-nav-item>
        <b-nav-item href="#">
          Join Session
        </b-nav-item>
        <b-nav-item href="#">
          Invite People
        </b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="md" class="mr-sm-2" placeholder="Search" />
          <b-button size="md" class="my-2 my-sm-0" type="submit" @click="handleClick()">
            Search
          </b-button>
        </b-nav-form>
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item id="show-btn" variant="success" pill @click="$bvModal.show('edit-modal-prevent-closing')">
            Profile
          </b-dropdown-item>
          <b-modal
            id="edit-modal-prevent-closing"
            ref="modal"
            title="Edit Profile Information"
            ok-variant="success"
            ok-title="Submit"
            @show="resetEditModal"
            @hidden="resetEditModal"
            @ok="handleEditOk"
          >
            <form ref="form" @submit.stop.prevent="handleEditSubmit">
              <b-form-group
                :state="editState"
                :invalid-feedback="error"
              >
                <b-form-input
                  id="emailInput"
                  v-model="newEmail"
                  :state="editState"
                  placeholder="New Email Address"
                  type="email"
                />
                <b-form-input
                  id="nameInput"
                  v-model="newName"
                  :state="editState"
                  placeholder="New Display Name"
                  type="text"
                />
                <br>
                <form v-if="isInitial || isSaving" enctype="multipart/form-data" novalidate>
                  <h5>
                    Upload Profile Picture
                  </h5>
                  <div class="dropbox">
                    <input
                      :disabled="isSaving"
                      :name="uploadName"
                      accept="image/jpeg, image/png"
                      class="input-file"
                      type="file"
                      @change="filesChange($event.target.name)"
                    >
                  </div>
                </form>
              </b-form-group>
            </form>
          </b-modal>
          <b-dropdown-item href="#">
            Sign Out
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import Profile from './Profile'

const STATUS_INITIAL = 0
const STATUS_SAVING = 1
const STATUS_SUCCESS = 2
const STATUS_FAILURE = 3

export default {
  name: 'EditButton',

  data () {
    return {
      newEmail: '',
      newName: '',
      editState: null,
      error: null,
      uploadedFile: [],
      uploadError: null,
      currentStatus: null,
      uploadName: 'photo'
    }
  },

  computed: {
    isInitial () {
      return this.currentStatus === STATUS_INITIAL
    },
    isSaving () {
      return this.currentStatus === STATUS_SAVING
    }
  },

  methods: {
    handleClick () {
      alert('hey something is working now')
    },

    validateEmail () {
      this.error = null
      if (this.newEmail.length > 0 && !this.newEmail.includes('@')) {
        this.error = 'Please enter a valid email address'
      }
      if (this.error) {
        this.editState = false
        return false
      }
      return true
    },

    validateName () {
      this.error = null
      if (this.newName.length > 0 && this.newName.length < 3) {
        this.error = 'The display name should be at least 3 characters'
      }
      if (this.error) {
        this.editState = false
        return false
      }
      return true
    },

    resetEditModal () {
      this.newEmail = ''
      this.newName = ''
      this.editState = null
      this.currentStatus = STATUS_INITIAL
      this.uploadedFile = []
      this.uploadError = null
    },

    save (formData) {
      this.currentStatus = STATUS_SAVING

      function upload (formData) {}

      upload(formData)
      try {
        this.uploadedFile = [].concat(formData)
        this.currentStatus = STATUS_SUCCESS
      } catch (e) {
        this.uploadError = e.response
        this.currentStatus = STATUS_FAILURE
      }
    },

    filesChange (fieldName) {
      const formData = new FormData()
      formData.append(fieldName, Profile.props.name.toString())
      this.save()
    },

    handleEditOk (bvModalEvt) {
      bvModalEvt.preventDefault()
      this.handleEditSubmit()
    },

    handleEditSubmit () {
      if (!this.validateEmail() || !this.validateName()) {
        return
      }
      this.$nextTick(() => {
        this.$bvModal.hide('edit-modal-prevent-closing')
      })
      this.updateProfile()
    },

    updateProfile () {
      if (this.newEmail) {
        Profile.props.email = this.email
      }
      if (this.newName) {
        Profile.props.name = this.newName
      }
    }
  }
}
</script>
