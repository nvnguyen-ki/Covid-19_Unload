<template>
  <!-- Image and text -->
  <div class="header">
  <a class="navbar-brand" href="/" style="text-decoration:">
      <h2 id="title">CoVID19-UnloaD</h2>
  </a>
  </div>
</template>

<script>
export default {
  name: 'PageHeader'
}
</script>

<style scoped>
.header {
  background-color:#fafafa;
  padding: 4px;
}

#title {
  color: black;
  background-color: #ffeb3b;
  text-decoration: underline;
  font-weight: bold;
  position: relative;
}
</style>
