<template>
  <!-- Image and text -->
  <div class="header">
      <h5><a href="/">CoVID19 UnloaD <i class="em em-mask" aria-role="presentation" aria-label="FACE WITH MEDICAL MASK"></i></a></h5>
      <h5><router-link to="/search">Search U.S.A <i class="em em-mag_right" aria-role="presentation" aria-label="RIGHT-POINTING MAGNIFYING GLASS"></i></router-link></h5>
       <div class="github-b">
          <a
            href="https://github.com/nvnguyen-ki/Covid-19_Unload"
            target="_blank"
          >
              github
              <img src="../assets/github_2.webp" width="28" alt="Github" />
          </a>
        </div>
  </div>
</template>

<script>
export default {
  name: 'PageHeader'
}
</script>

<style scoped>
a {
  color:black;
  font-family: 'Montserrat Subrayada', sans-serif;
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
