<template>
  <div class="page" style="margin-top:20px;">
    <static-data id="components"/>
    <search id="components"/>

    <p id="demo"></p>
  </div>
</template>

<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import Search from './Search.vue'
import staticData from './staticData.vue'
export default {
  name: 'app',
  data () {
    return {
      prefixes: ['', 'k', 'M', 'G', 'T', 'P', 'E']
    }
  },
  components: {
    PulseLoader,
    Search,
    staticData
  }
}
</script>

<style scoped>

.box {
  width:50;
  text-align: center;
  margin:auto;
}
</style>
