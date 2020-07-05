<template>
  <div id="app" >
    <Header />
    <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@300&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <router-view/>
  </div>
</template>

<script>
import Header from './components/header.vue'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style scoped>
#app {
 font-family: 'Inconsolata',monospace;
}
</style>
