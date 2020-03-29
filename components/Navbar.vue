<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="/home">
      Home
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" />

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item @click="makeID">
          Create Session
        </b-nav-item>
        <b-nav-item v-b-modal.join-modal>
          Join Session
        </b-nav-item>
        <join-modal />
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
          <b-dropdown-item v-b-modal.profile-modal>
            Profile
          </b-dropdown-item>
          <profile-info />
          <b-dropdown-item href="#" @click.prevent="$emit('login')">
            Sign In
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import ProfileInfo from './ProfileInfo'
import JoinModal from './SessionButtons/Join'
import { fireDb } from '~/plugins/firebase.js'

export default {
  name: 'EditButton',

  components: {
    ProfileInfo,
    JoinModal
  },

  data () {
    return {}
  },

  methods: {
    handleClick () {
      alert('hey something is working now')
    },

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
      const ref = fireDb.collection('sessions').doc()
      const document = { result }
      try {
        await ref.get().then((doc) => {
          if (doc.exists) {
            result = this.createID()
          } else {
            ref.set(document)
            this.$router.push(`/session/${result}`)
          }
        })
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
