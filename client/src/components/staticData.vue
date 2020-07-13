
<template>
  <div class="page" style="text-align: justify;" >
     <h5 id="lastUpdated"> {{lastUpdated}}</h5>
      <div class="worldData" data-aos="fade-down" >
        <h3>/01/ <span style=""> Latest World updates <i class="em em-earth_americas" aria-role="presentation" aria-label="EARTH GLOBE AMERICAS"></i></span> </h3>
        <div class="CountryUpdates" data-aos="fade-down">
        <span id="newCountryUpdates" data-aos="fade-down"> </span>
        </div>
        <h5 id="data"> <span id="numbers">{{TotalWorld}} </span> <span id="sub"> <br> total cases around the World </span></h5>
        <h5 id="data"> <span id="numbers">{{TotalDeath}} </span> <span id="sub"> <br> total deaths around the World </span></h5>
      </div>
      <div class="usaData" data-aos="fade-down" >
        <h3>/02/ <span style="">Latest U.S updates <i class="em em-flag-um" aria-role="presentation" aria-label="U.S. Outlying Islands Flag"></i></span> </h3>
        <div class="dailyUpdates" data-aos="fade-down">
        <span id="newUpdate" data-aos="fade-down"> </span>
      </div>
      <h5 id="data"> <span id="numbers">{{UsaTotal}} </span> <span id="sub"> <br> total cases in U.S </span></h5>
      <h5 id="data"> <span id="numbers">{{UsaDeath}} </span> <span id="sub"> <br> total deaths in U.S </span> </h5>
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
      this.UsaTotal = funct.AbbreviateNum(res.data[0].usaConfirmed)
      this.UsaDeath = funct.AbbreviateNum(res.data[0].usaDeaths)
      this.TotalWorld = funct.AbbreviateNum(res.data[0].total_in_world)
      this.TotalDeath = funct.AbbreviateNum(res.data[0].total_death_in_world)
      this.lastUpdated = funct.dateToHowManyAgo(res.data[0].lastUpdate)
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
#sub {
  font-size: 15px;
  position: relative;
  text-align: center;
}
#numbers {
  background-color:rgb(213, 247, 241);
  font-size: 23px;
}
#lastUpdated {
  font-family: 'Montserrat Subrayada', sans-serif;
  position: relative;
  float: right;
  right:150px;
  bottom: 70px;
}
.worldData {
  position: relative;
  width: 50%;
  margin: auto;
  text-align: center;
}
.usaData {
  position: relative;
  width: 50%;
  margin: auto;
  text-align: center;
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
  border-bottom: 1px solid black;
}
#data {
  font-size: 20px;
  padding: 15px;
}
#newUpdate {
  font-size: 20px;
  border-bottom: 1px solid black;
}
</style>
