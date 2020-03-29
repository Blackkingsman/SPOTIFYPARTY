<template>
  <div id="app">
    <Navbar />
    <br>
    <Sessionpage />
    <br>
    <Tablepage />
    <br>
  </div>
</template>

<script>
import Tablepage from '../../components/Tablepage'
import Sessionpage from '../../components/Session'
import Navbar from '../../components/Navbar'
export default {

  name: 'App',
  components: {
    Navbar,
    Tablepage,
    Sessionpage
  }

}

</script>
