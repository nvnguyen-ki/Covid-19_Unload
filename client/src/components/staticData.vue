
<template>
  <div class="page" style="margin-top:20px; text-align: justify;" >
      <div class="worldData" data-aos="fade-down" >
        <h3 style="font-weight: bold;">{{lastUpdated}}</h3>
        <h5 id="data"> {{TotalWorld}} <br/>  {{TotalDeath}}<br/>  {{UsaTotal}}<br/>  {{UsaDeath}}</h5>
      </div>
      <div class="dailyUpdates" data-aos="fade-down">
        <h5 id="newUpdate" data-aos="fade-down"></h5>
      </div>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import funct from '@/services/functions'
export default {
  /* created is a function that runs before the application is loaded.
  and you're calling the function WorldData so it loads the data first */
  mounted () {
    console.log('getting data...')
    this.WorldData()
    this.LatestUpdate()
    // looping LatestUpdate log display
    this.interval = setInterval(() => this.LatestUpdate(), 280000)
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
      console.log(res.data[0])
      this.UsaTotal = 'Confirmed cases in USA: ' + funct.AbbreviateNum(res.data[0].usaConfirmed)
      this.UsaDeath = 'USA Deaths: ' + funct.AbbreviateNum(res.data[0].usaDeaths)
      this.TotalWorld = 'Confirmed cases in the world: ' + funct.AbbreviateNum(res.data[0].total_in_world)
      this.TotalDeath = 'Global Deaths: ' + funct.AbbreviateNum(res.data[0].total_death_in_world)
      this.lastUpdated = 'Updated ' + funct.dateToHowManyAgo(res.data[0].lastUpdate) + '.'
    },
    async LatestUpdate () {
      const res = await AuthenticationService.LatestUpdate()
      // console.log(res.data)
      var i = 0
      for (i = 0; i < res.data.length; i++) {
        this.latest.date = res.data[i].lastUpdateEt
        const time = await funct.dateToHowManyAgo(this.latest.date)
        const newCase = res.data[i].positiveIncrease
        const state = res.data[i].state
        const timeSince = 'Updated ' + time + '.'
        const latestText = newCase + ' new cases in ' + state + '.'
        // length of data is 56. shows data every 5 seconds. resets every 280 seconds.
        setTimeout(async function () {
          document.getElementById('newUpdate').innerHTML = timeSince + '<br/>' + latestText
          // changing opacity to 1 and back to 0 every time innerhtml changes for effect
          document.getElementById('newUpdate').style.opacity = 1
          setTimeout(async function () {
            document.getElementById('newUpdate').style.opacity = 0
          }, 3900)
        }, i * 5000)
      }
    }
  }
}
</script>

<style scoped>
.worldData {
  position: relative;
  width:25vw;
}
.dailyUpdates {
  position: relative;
  text-align: center;
}
#data {
  font-size: 25px;
  border-top: 1px solid rgb(231, 231, 231);
}
#newUpdate {
  font-size: 25px;
}
</style>
