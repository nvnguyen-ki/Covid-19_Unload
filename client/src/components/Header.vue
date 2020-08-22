<template>
  <!-- Image and text -->
  <div class="header">
      <h5><a href="/">Covid-19 Unload <i class="em em-mask" aria-role="presentation" aria-label="FACE WITH MEDICAL MASK"></i></a></h5>
      <h5><router-link to="/search">Search U.S.A <i class="em em-mag_right" aria-role="presentation" aria-label="RIGHT-POINTING MAGNIFYING GLASS"></i></router-link></h5>
       <h5 class="github-b">
          <a
            href="https://github.com/nvnguyen-ki/Covid-19_Unload"
            target="_blank"
          >
              github
              <img src="../assets/github_2.webp" width="28" alt="Github" />
          </a>
        </h5>
  </div>
</template>

<script>
export default {
  name: 'PageHeader'
}
</script>

<style scoped>
.github-b {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
a {
  color:black;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
a:hover {
  color:black;
  background-color:yellow;
  text-decoration: none;
}
.header {
  margin-top: 50px;
  margin-left: 100px;
  color:black;
  font-weight: 400;
}

</style>
