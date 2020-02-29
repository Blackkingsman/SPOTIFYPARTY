<template>
<div>
  <b-jumbotron  bg-variant="dark" text-variant="white" border-variant="dark" >
    <template v-slot:header>Spotusfy</template>

    <hr class="my-4" color=white>

    <p>
		Taking the i out of Spotify
    </p>
  </b-jumbotron>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="">Home</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Create Session</b-nav-item>
        <b-nav-item href="#" >Join Session</b-nav-item>
		<b-nav-item href="#" >Invite People</b-nav-item>
		        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#"><b-icon icon="person">Profile</b-icon></b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="md" id="searchBar" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="md"  @click="handleClick()" class="my-2 my-sm-0" type="submit"> Search </b-button>
        </b-nav-form>
		        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#"><b-icon icon="person">Profile</b-icon></b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</div>

</template>

<script>
export default {
  methods: {
    handleClick: function() {
      alert("hey something is working now")
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.header {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: rgb(44, 43, 43);
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
