<template>
  <div class="page" style="margin-top:20px;">
    <div class="box" >
      <button v-on:click="isHidden = !isHidden" >Search</button>
      <div id="inputbox" v-if="isHidden" data-aos="fade-up" >
      <!-- <input type="text" v-model="text" name="text" placeholder="url"/> -->
      <input id="states" type="text" v-model="regionProvince" name="regionProvince" placeholder="State"/>
      <input type="text" v-model="CityName" name="CityName" placeholder="City Name"/>
       <!-- <input type="text" name="scrape" placeholder="Email, phone, etc..."/> -->
      <v-btn text small style="margin: 15px;font-size:12px; border:1px solid rgb(146, 146, 146)" @click="searchData">test</v-btn>
      <!-- <div id="error" v-html="error" /> -->
      <p id="info">
      </p>
      <p id="error">
      </p>
      </div>
    </div>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import funct from '@/services/functions'
export default {
  data () {
    return {
      isHidden: false,
      CityName: '',
      regionProvince: '',
      text: '',
      error: null,
      updated: ''
    }
  },
  methods: {
    async searchData () {
      const res = await AuthenticationService.searchData(({
        // getting data from input
        region_province: this.regionProvince,
        city_name: this.CityName
      }))
      try {
        console.log(res.data)
        console.log(res.data[0].last_update)
        const updated = funct.dateToHowManyAgo(res.data[0].last_update)
        const confirmedInCity = funct.AbbreviateNum(res.data[0].today_confirmed_in_city)
        const totalConfirmedInState = funct.AbbreviateNum(res.data[0].total_confirmed_in_state)
        const deathInCity = funct.AbbreviateNum(res.data[0].death_in_city)
        const totalDeathInState = funct.AbbreviateNum(res.data[0].total_death)
        document.getElementById('info').innerHTML = updated + '<br/>Total New confirmed cases in city: ' + confirmedInCity + ' <br/>Deaths in city today: ' + deathInCity +
        '<br/>Total Confirmed in State: ' + totalConfirmedInState + '<br/>Total Death in State: ' + totalDeathInState
        document.getElementById('error').innerHTML = ''
      } catch (error) {
        document.getElementById('info').innerHTML = ''
        document.getElementById('error').innerHTML = res.data.error
      }
    }
    // async scrape () {
    //   try {
    //     const res = await AuthenticationService.scrape(({
    //       text: this.text
    //     }))
    //     for (var i = 0; i < res.data.length; i++) {
    //       document.getElementById('congrats').innerHTML = res.data[i].title + ' Has a ' + res.data[i].rating + ' rating.'
    //     }
    //   } catch (error) {
    //     this.error = error.response.data.error
    //   }
    // }
  }
}
</script>
<style scoped>
.box {
  text-align: center;
  margin:auto;
}
</style>
