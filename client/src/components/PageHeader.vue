<template>
<div>
    <!-- Image and text -->
  <nav class="_nav navbar navbar-light bg-light">
    <a class="navbar-brand" href="/">
      Scrape
    </a>
    <div class="nav-item ml-auto" style="margin-right: 35px;">
      <router-link to="login" v-if="!$store.state.isUserLoggedIn">Login</router-link>
    </div>
    <div class="nav-item">
      <router-link to="register" v-if="!$store.state.isUserLoggedIn">Sign Up</router-link>
    </div>
    <div class="nav-item">
      <a @click="logout" href="" v-if="$store.state.isUserLoggedIn">Log-Out</a>
    </div>
  </nav>
</div>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        path: '/Home'
      })
    }
  },
  name: 'PageHeader'
}
</script>

<style scoped>

.nav-item{
  margin-right:5px;
}
</style>
