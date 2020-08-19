<template>
  <!-- Image and text -->
  <div class="footer">
    <h6 id="warning">
      <span style="color:red">Warning:</span> Hosted free on heroku, therefore, website will be down every time it is unused and will take a while to load.
    </h6>
  </div>
</template>

<script>
export default {
  name: 'FooterInfo'
}
</script>

<style scoped>
#warning {
  position: relative;
  top: 145px;
  width: 700px;
  margin: auto;

}
</style>
