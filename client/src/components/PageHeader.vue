<template>
<div>
    <!-- Image and text -->
  <nav class="navbar navbar-light bg-light sticky-top">
    <a class="navbar-brand" href="/">
      Scrape
    </a>
    <router-link to="login" v-if="!$store.state.isUserLoggedIn">Login</router-link>
    <router-link to="register" v-if="!$store.state.isUserLoggedIn">Sign Up</router-link>
  </nav>
</div>
</template>

<script>
export default {
  name: 'PageHeader'
}
</script>

<style scoped>
</style>
