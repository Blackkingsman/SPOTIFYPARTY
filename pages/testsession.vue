<template>
  <div id="app">
    <Navbar />
    <br>
    <Sessionpage />
    <br>
    <Tablepage />
    <br>
    <Usertable />
  </div>
</template>

<script>
import Tablepage from '../components/Tablepage'
import Usertable from '../components/UserTable'
import Sessionpage from '../components/Session'
import Navbar from '../components/Navbar'
export default {

  name: 'App',
  components: {
    Navbar,
    Tablepage,
    Usertable,
    Sessionpage
  }

}

</script>
