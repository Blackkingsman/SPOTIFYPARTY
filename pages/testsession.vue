<template>
  <div id="app">
    <Sessionpage />
    <br>
    <br>
    <Tablepage />
    <br>
    <br>
    <Usertable />
  </div>
</template>

<script>
import Tablepage from '../components/Tablepage'
import Usertable from '../components/UserTable'
import Sessionpage from '../components/Session'

export default {

  name: 'App',
  components: {

    Tablepage,
    Usertable,
    Sessionpage
  }

}

</script>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
