
<template>
  <div class="page" style="margin-top:20px; text-align: justify;" >
     <div id="lastUpdated">{{lastUpdated}}</div>
    <v-card
    class="mx-auto"
    max-width="396"
  >
  <v-card-title class="headline">World Update</v-card-title>
      <div class="worldData" data-aos="fade-down" >
         <v-card-subtitle>
        <h5 id="data"> {{TotalWorld}}</h5>
        <h5 id="data"> {{TotalDeath}} </h5>
        <div class="CountryUpdates" data-aos="fade-down">
        <h5 id="newCountryUpdates" data-aos="fade-down"></h5>
        </div>

         </v-card-subtitle>
      </div>
       </v-card>
       <v-card
    class="mx-auto"
    max-width="396"
  >
      <v-card-title class="headline">USA updates</v-card-title>
      <div class="usaData" data-aos="fade-down" >
      <v-card-subtitle>
      <h5 id="data">{{UsaTotal}} </h5>
      <h5 id="data"> {{UsaDeath}}</h5>
      <div class="dailyUpdates" data-aos="fade-down">
        <h5 id="newUpdate" data-aos="fade-down"></h5>
      </div>
      </v-card-subtitle>
      </div>
       </v-card>
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
    this.countriesDaily()
    // looping LatestUpdate log display
    this.interval = setInterval(() => this.LatestUpdate(), 280000)
    this.interval = setInterval(() => this.countriesDaily(), 1080000)
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
        const newCase = res.data[i].positiveIncrease
        const state = res.data[i].state
        const latestText = '<br>+' + newCase + ' new cases in ' + state + '.'
        // length of data is 56. shows data every 5 seconds. resets every 280 seconds.
        setTimeout(async function () {
          document.getElementById('newUpdate').innerHTML = latestText
          // changing opacity to 1 and back to 0 every time innerhtml changes for effect
          document.getElementById('newUpdate').style.opacity = 1
          setTimeout(async function () {
            document.getElementById('newUpdate').style.opacity = 0
          }, 3900)
        }, i * 5000)
      }
    },
    async countriesDaily () {
      const res = await AuthenticationService.countriesDaily()
      for (let i = 0; i < res.data.length - 11; i++) {
        if (res.data[i].cases.new === null) {
          res.data[i].cases.new = 0
        }
        const country = (res.data[i].country)
        const newCase = (res.data[i].cases.new)
        const latestText = newCase + ' new cases in ' + country + '.'
        setTimeout(async function () {
          document.getElementById('newCountryUpdates').innerHTML = '<br/>' + latestText
          // changing opacity to 1 and back to 0 every time innerhtml changes for effect
          document.getElementById('newCountryUpdates').style.opacity = 1
          setTimeout(async function () {
            document.getElementById('newCountryUpdates').style.opacity = 0
          }, 3900)
        }, i * 5000)
      }
    }
  }
}
</script>

<style scoped>
#lastUpdated {
  text-align: center;
  font-weight: 900;
  font-size: 25px;
}
.worldData {
  position: relative;
}
.dailyUpdates {
  position: relative;
  text-align: center;
}
.CountryUpdates {
  position: relative;
  text-align: center;
}
#data {
  font-size: 20px;
}
#newUpdate {
  font-size: 20px;
}
</style>
