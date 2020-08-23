
<template>
  <div class="page" style="text-align: justify;" >
     <h5 id="lastUpdated"> Last Updated : {{lastUpdated}}</h5>
     <v-container fluid>
       <v-row>
     <v-card
    class="mx-auto"
     width="300"
    height="440"
  >
      <div class="worldData" data-aos="fade-down" >
        <h3> <span style=""> Latest World updates <i class="em em-earth_americas" aria-role="presentation" aria-label="EARTH GLOBE AMERICAS"></i></span> </h3>
        <h5 id="data"> <span id="numbers" style="color:rgb(26, 170, 127)">{{TotalWorld}} </span> <span id="sub"> <br> total cases around the World </span></h5>
        <h5 id="data"> <span id="numbers" style="color:rgb(240, 179, 67)">{{TotalDeath}} </span> <span id="sub"> <br> total deaths around the World </span></h5>
      </div>
      </v-card>
      <v-card
    class="mx-auto"
     width="300"
    height="440"
  >
      <div class="usaData" data-aos="fade-down" >
        
        <h3><span style="">Latest U.S.A updates <i class="em em-flag-um" aria-role="presentation" aria-label="U.S. Outlying Islands Flag"></i></span> </h3>
      <h5 id="data"> <span id="numbers" style="color:rgb(100, 136, 202)">{{UsaTotal}} </span> <span id="sub"> <br> total cases in U.S </span></h5>
      <h5 id="data"> <span id="numbers" style="color: rgb(219, 118, 118)">{{UsaDeath}} </span> <span id="sub"> <br> total deaths in U.S </span> </h5>
      </div>
      </v-card>
      <v-card
    class="mx-auto"
    width="300"
    height="440"
  >
  
      <div class="CountryUpdates" data-aos="fade-down" style="margin-top:50px;"> 
        <h3>recent updates </h3>
        <h3 style="margin-bottom:54px"><i class="em em-mantelpiece_clock" aria-role="presentation" aria-label=""></i></h3>
        <span id="newCountryUpdates" data-aos="fade-down"> </span>
        <span id="sub" > <br> World </span>
        </div>
        <div class="dailyUpdates" style="margin-top:55px" data-aos="fade-down">
        <span id="newUpdate" data-aos="fade-down"> </span>
        <span id="sub"> <br> U.S.A </span>
      </div>
      </v-card>
      </v-row>
     </v-container>
      <!-- <div class="small">
        <line-chart :chart-data="datacollection"></line-chart>
      </div> -->
      <footerinfo/>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import funct from '@/services/functions'
import LineChart from '../services/LineChart.js'
import footerinfo from './FooterInfo.vue'
export default {
  /* created is a function that runs before the application is loaded.
  and you're calling the function WorldData so it loads the data first */
  mounted () {
    this.WorldData()
    this.LatestUpdate()
    this.countriesDaily()
     this.fillData()
    // looping LatestUpdate log display
    this.interval = setInterval(() => this.LatestUpdate(), 280000)
    this.interval = setInterval(() => this.countriesDaily(), 1080000)
  },
  components: {
      LineChart,
      footerinfo
  },
  data () {
    return {
      datacollection: null,
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
    fillData () {
        this.datacollection = {
          labels: [0, this.TotalWorld],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: 'rgb(213, 247, 241)',
              data: [0, this.TotalWorld]
            }
          ]
        }
    },
    async WorldData () {
      const res = await AuthenticationService.WorldData()
      this.UsaTotal = funct.numberWithCommas(res.data[0].usaConfirmed)
      this.UsaDeath = funct.numberWithCommas(res.data[0].usaDeaths)
      this.TotalWorld = funct.numberWithCommas(res.data[0].total_in_world)
      this.TotalDeath = funct.numberWithCommas(res.data[0].total_death_in_world)
      this.lastUpdated = (res.data[0].lastUpdate)
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
#numbers {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size:28px;
}
#sub {
  font-size: 15px;
  position: relative;
  text-align: center;
}

#lastUpdated {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  position: relative;
  float: right;
  right:150px;
  bottom: 112px;
  font-size: 15px;

}
.small {
    width: 45%;
    position: relative;
    margin:auto;
    border: 1px solid rgb(0, 0, 0);
}
@media screen and (max-width: 1250px) {
#lastUpdated {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  position: relative;
  float: right;
  right:260px;
  bottom: 115px;
  font-size: 15px;
}
}
.worldData {
  position: relative;
  width: 50%;
  margin: auto;
  text-align: center;
  margin-top:50px;
}
.usaData {
  position: relative;
  width: 50%;
  margin: auto;
  text-align: center;
  margin-top:50px;
}
.dailyUpdates {
  position: relative;
  text-align: center;
}
.CountryUpdates {
  position: relative;
  text-align: center;
}
#newCountryUpdates {
  font-size: 20px;
}
#data {
  font-size: 20px;
  padding: 15px;
}
#newUpdate {
  font-size: 20px;
}
</style>
