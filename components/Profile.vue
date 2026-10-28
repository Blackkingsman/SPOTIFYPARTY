<template>
  <div class="profile">
    <h1>{{ msg }}</h1>
    <img src="../assets/user.png" alt="">
    <p>
      Name: {{ name }}<br>
      Email ID: {{ email }}<br>
      Age: {{ age }}<br>
    </p>
  </div>
</template>

<script>

export default {
  name: 'Profile',
  props: {
    msg: {
      type: String,
      default: 'Welcome'
    },
    name: {
      type: String,
      default: 'John Doe'
    },
    email: {
      type: String,
      default: 'john.doe@gmail.com'
    },
    age: {
      type: Number,
      default: 18
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .profile {
    margin-top: 60px;
  }

</style>
