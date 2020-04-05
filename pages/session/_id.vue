<template>
  <div id="app">
    <div><Navbar/></div>
    <div class="flex-container">
      <div class="session"><Session/></div>
      <div  class="queue"><Tablepage /></div>
    </div>
  </div>
</template>

<script>
import Tablepage from '../../components/Tablepage'
import Navbar from '../../components/Navbar.vue'
import Session from '../../components/Session'
export default {

  name: 'App',
  components: {
    Tablepage,
    Navbar,
    Session
  }

}

</script>
<style>
  .flex-container{
    display: flex;
    flex-wrap: wrap;
  }
  .flex-container .queue{
    width: 90% !important;
    margin-left: auto !important;
    margin-right: auto !important;
  }
  h4{
    color: white;
  }
  h5{
    color: white;
  }
  tr:nth-child(even) {background-color: RGB(75,75,75)
  ;}
  tr:nth-child(odd) {background-color: RGB(69,66,65)
  ;}
</style>
