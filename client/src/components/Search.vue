<template>
  <div class="page" style="margin-top:20px;">
    <div class="box" >
      <button v-on:click="isHidden = !isHidden" >Search</button>
      <div id="inputbox" v-if="isHidden">
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
      states: ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia',
        'Federated States of Micronesia', 'Florida', 'Georgia', 'Guam',
        'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands',
        'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
        'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
        'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
        'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota',
        'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
        'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
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
        const confirmedInCity = funct.AbbreviateNum(res.data[0].today_confirmed_in_city)
        const totalConfirmedInState = funct.AbbreviateNum(res.data[0].total_confirmed_in_state)
        const deathInCity = funct.AbbreviateNum(res.data[0].death_in_city)
        const totalDeathInState = funct.AbbreviateNum(res.data[0].total_death)
        document.getElementById('info').innerHTML = 'confirmed cases: ' + confirmedInCity + ' & deaths today: ' + deathInCity +
        '<br/>Confirmed in State: ' + totalConfirmedInState + '<br/>Death in State: ' + totalDeathInState
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
  width:50;
  text-align: center;
  margin:auto;
}
</style>
