
<template>
  <div class="page" style="margin-top:20px;">
    <div class="scrape_box" >
      <div class="worldData">
        <p id="Worldslate" > {{TotalWorld}} --- {{TotalDeath}}</p>
        <p id="USAslate" > {{UsaTotal}} --- {{UsaDeath}}</p>
      </div>
      <div id="Infobox">
      <!-- <input type="text" v-model="text" name="text" placeholder="url"/> -->
      <input type="text" v-model="regionProvince" name="regionProvince" placeholder="State"/>
      <br>
      <input type="text" v-model="CityName" name="CityName" placeholder="City Name"/>
       <!-- <input type="text" name="scrape" placeholder="Email, phone, etc..."/> -->
      </div>
       <div id="error" v-html="error" />
      <v-btn text small style="margin: 15px;font-size:12px; border:1px solid rgb(146, 146, 146)" @click="searchData">test</v-btn>
      <p id="congrats"></p>
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
    this.UsaData()
    this.WorldData()
  },
  data () {
    return {
      CityName: '',
      regionProvince: '',
      text: '',
      error: null,
      TotalWorld: '',
      TotalDeath: '',
      UsaTotal: '',
      UsaDeath: ''
    }
  },
  methods: {
    // World Data of Covid
    async UsaData () {
      const res = await AuthenticationService.USAData()
      this.UsaTotal = 'USA: ' + res.data[0].usaConfirmed
      this.UsaDeath = 'USA Deaths ' + res.data[0].usaDeaths
    },
    async WorldData () {
      const res = await AuthenticationService.WorldData()
      this.TotalWorld = 'Global: ' + res.data[0].total_in_world
      this.TotalDeath = 'Global Deaths ' + res.data[0].total_death_in_world
    },
    // searching covid updates based on state and city in USA.
    async searchData () {
      const res = await AuthenticationService.searchData(({
        // getting data from input
        region_province: this.regionProvince,
        city_name: this.CityName
      }))
      try {
        console.log(res.data)
        document.getElementById('congrats').innerHTML = 'confirmed cases: ' + res.data[0].today_confirmed_in_city + ' and the deaths today: ' + res.data[0].death_in_city + '.'
        document.getElementById('error').innerHTML = ''
      } catch (error) {
        this.error = res.data.error
        document.getElementById('congrats').innerHTML = ''
      }
    },
    async scrape () {
      try {
        const res = await AuthenticationService.scrape(({
          text: this.text
        }))
        for (var i = 0; i < res.data.length; i++) {
          document.getElementById('congrats').innerHTML = res.data[i].title + ' Has a ' + res.data[i].rating + ' rating.'
        }
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.scrape_box {
  width:50;
  text-align: center;
  margin:auto;
}
</style>
