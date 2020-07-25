<template>
  <div class="page" style="margin-top:20px;">
    <static-data id="components"/>
    <graphs/>
  </div>
</template>

<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import staticData from './staticData.vue'
import Graphs from './Graphs.vue'
export default {
  name: 'app',
  data () {
    return {
      prefixes: ['', 'K', 'M', 'G', 'T', 'P', 'E']
    }
  },
  components: {
    PulseLoader,
    staticData,
    Graphs
  }
}
</script>

<style scoped>
.page {
}
</style>
