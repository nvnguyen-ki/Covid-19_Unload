<template>
  <div id="app">
    <PageHeader />
    <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@300&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <router-view/>
  </div>
</template>

<script>
import PageHeader from './components/PageHeader.vue'
export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>

<style scoped>
#app {
 font-family: 'Inconsolata',monospace;
}
</style>
