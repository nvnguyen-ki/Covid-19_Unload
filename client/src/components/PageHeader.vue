<template>
<div>
    <!-- Image and text -->
  <nav class="navbar navbar-light bg-light sticky-top">
    <a class="navbar-brand" href="/">
      Scrape
    </a>
    <router-link to="login">Login</router-link>
    <router-link to="register">Sign Up</router-link>
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
