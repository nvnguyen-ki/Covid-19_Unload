<template>
  <!-- Image and text -->
  <div class="header">
  <a class="navbar-brand" href="/" style="text-decoration:">
      <span id="title1">CoVID19</span>-<span id="title2">UnloaD</span>
  </a>
  </div>
</template>

<script>
export default {
  name: 'PageHeader'
}
</script>

<style scoped>
#title1{
  color:rgb(82, 155, 60);
}
#title2 {
  color:rgb(134, 183, 224)
}
.header {
  background-color:#fafafa;
  padding: 4px;
  text-align: center;
  color:black;
  font-weight: 900;
}

</style>
