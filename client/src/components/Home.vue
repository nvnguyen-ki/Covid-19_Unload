<template>
  <div class="page" style="margin-top:20px;">
    <Header/>
    <static-data id="components"/>
    <search id="search"/>
    <p id="demo"></p>
  </div>
</template>

<script>
import Header from './Header.vue'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import Search from './Search.vue'
import staticData from './staticData.vue'
export default {
  name: 'app',
  data () {
    return {
      prefixes: ['', 'K', 'M', 'G', 'T', 'P', 'E']
    }
  },
  components: {
    Header,
    PulseLoader,
    Search,
    staticData
  }
}
</script>

<style scoped>
#search {
  position: relative;
  text-align: center;
  margin-top: 35px;
}
</style>
