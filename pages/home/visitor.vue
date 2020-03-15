<template>
  <div id="app">
    <navbar />
    <site-info />
    <session-navigation />
  </div>
</template>

<script>
import Navbar from '../../components/Navbar'
import SiteInfo from '../../components/SiteInfo'
import SessionNavigation from '../../components/SessionNavigation'

export default {
  components: {
    Navbar,
    SiteInfo,
    SessionNavigation
  }
}
</script>
