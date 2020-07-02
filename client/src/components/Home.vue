<template>
  <div class="page" style="margin-top:20px;">
    <static-data id="static-data"/>
    <search id="search"/>
    <p id="demo"></p>
  </div>
</template>

<script>

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
    Search,
    staticData
  },
  methods: {
    AbbreviateNum (number) {
      var num = Math.log10(number) / 3 | 0
      if (num === 0) return number
      var prefix = this.prefixes[num]
      var scale = Math.pow(10, num * 3)
      var scaled = number / scale
      return scaled.toFixed(1) + prefix
    }
  }
}
</script>

<style scoped>
#static-data {
  border: 1px solid black;
}
#search {
  border: 1px solid black;
}
.box {
  width:50;
  text-align: center;
  margin:auto;
}
</style>
