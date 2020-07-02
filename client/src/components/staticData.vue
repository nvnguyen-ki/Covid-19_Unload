
<template>
  <div class="page" style="margin-top:20px;">
      <div class="worldData">
        <p id="data" > {{TotalWorld}} </p>
        <p id="data" > {{TotalDeath}}</p>
        <p id="data" > {{UsaTotal}} </p>
        <p id="data" > {{UsaDeath}}</p>
        <p id="data"> {{lastUpdated}}</p>
      </div>
      <div class="dailyUpdates">
        <p id="newUpdate">{{this.timeSince}}</p>
        <p id="newUpdate">{{this.latest.text}}</p>
      </div>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import funct from '@/services/functions'
export default {
  /* created is a function that runs before the application is loaded.
  and you're calling the function WorldData so it loads the data first */
  created () {
    console.log('getting data...')
    this.WorldData()
    this.LatestUpdate()
  },
  data () {
    return {
      error: null,
      TotalWorld: '',
      TotalDeath: '',
      UsaTotal: '',
      UsaDeath: '',
      lastUpdated: '',
      latest: {
        date: '',
        newCases: '',
        state: '',
        text: '',
        timeSince: ''
      }
    }
  },
  methods: {
    // abbreviateNumbers for easier look at numbers.
    // World Data of Covid
    async WorldData () {
      const res = await AuthenticationService.WorldData()
      this.UsaTotal = 'Confirmed cases in USA: ' + funct.AbbreviateNum(res.data[0].usaConfirmed)
      this.UsaDeath = 'USA Deaths: ' + funct.AbbreviateNum(res.data[0].usaDeaths)
      this.TotalWorld = 'Confirmed cases in the world: ' + funct.AbbreviateNum(res.data[0].total_in_world)
      this.TotalDeath = 'Global Deaths: ' + funct.AbbreviateNum(res.data[0].total_death_in_world)
      this.lastUpdated = 'Updated on: ' + funct.AbbreviateNum(res.data[0].lastUpdate)
    },
    async LatestUpdate () {
      const res = await AuthenticationService.LatestUpdate()
      this.latest.date = res.data.lastUpdateEt
      const time = await funct.dateToHowManyAgo(this.latest.date)
      this.latest.newCases = res.data.positiveIncrease
      this.latest.state = res.data.state
      this.timeSince = 'Updated ' + time
      this.latest.text = this.latest.newCases + ' new cases in ' + this.latest.state
    }
  }
}
</script>

<style scoped>
.dailyUpdates {
  border: 1px solid grey;
}
</style>
