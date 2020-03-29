<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="/">
      Home
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" />

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item v-if="onHomePage" @click="makeID">
          Create Session
        </b-nav-item>
        <b-nav-item v-if="onHomePage" v-b-modal.join-modal>
          Join Session
        </b-nav-item>

        <join-modal />
        <b-nav-item v-if="onSessionPage" href="#">
          Invite People
        </b-nav-item>
      </b-navbar-nav>Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item v-if="onIndexPage" right @click="spotifyLogin">
          Connect to Spotify
        </b-nav-item>
        <b-nav-item v-else right href='/'>
          Sign Out
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>

import JoinModal from './SessionButtons/Join'
import { fireDb } from '~/plugins/firebase.js'

export default {
  name: 'EditButton',

  components: {
    JoinModal
  },

  data () {
    return {}
  },

  computed: {
    onIndexPage () {
      return this.checkPath('')
    },
    onHomePage () {
      return this.checkPath('home')
    },
    onSessionPage () {
      return this.checkPath('session')
    }
  },

  methods: {
    handleClick () {
      alert('hey something is working now')
    },

    checkPath (path) {
      return this.$route.path.substr(1).split('/')[0] === path
    },

    spotifyLogin (e) {
      e.preventDefault()
      document.getElementById('spotifyLogin').click()
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
      } catch (e) {}
    }
  }
}
</script>
