
<template>
  <div class="page" style="margin-top:20px;">
      <div class="worldData">
        <p id="Worldslate" > {{TotalWorld}} --- {{TotalDeath}}</p>
        <p id="USAslate" > {{UsaTotal}} --- {{UsaDeath}}</p>
      </div>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  /* created is a function that runs before the application is loaded.
  and you're calling the function WorldData so it loads the data first */
  created () {
    console.log('getting data...')
    this.WorldData()
  },
  data () {
    return {
      error: null,
      TotalWorld: '',
      TotalDeath: '',
      UsaTotal: '',
      UsaDeath: ''
    }
  },
  methods: {
    // World Data of Covid
    async WorldData () {
      const res = await AuthenticationService.WorldData()
      this.UsaTotal = 'USA: ' + res.data[0].usaConfirmed
      this.UsaDeath = 'USA Deaths ' + res.data[0].usaDeaths
      this.TotalWorld = 'Global: ' + res.data[0].total_in_world
      this.TotalDeath = 'Global Deaths ' + res.data[0].total_death_in_world
    }
    // searching covid updates based on state and city in USA.
  }
}
</script>

<style scoped>

</style>
