<template>
  <div class="page">
    <div class="box" >
        <v-btn  medium  v-on:click="isHidden = !isHidden" class="ma-2" outlined color="indigo">Search U.S Cities</v-btn>
       <transition name="fade">
      <div id="inputbox" v-if="isHidden" >
        <v-form v-model="valid">
           <v-container>
              <v-text-field
            label="State"
            required
            dense
            v-model="regionProvince"
          ></v-text-field>
           <v-text-field
            label="City Name"
            required
            v-model="CityName"
          ></v-text-field>
        <v-btn class="ma-2" outlined color="indigo" text small style="font-size:12px;" v-on:click="searchData() ; display()">search</v-btn>
        <!-- <div id="error" v-html="error" /> -->
          <div id="infobox">
            <transition name="fade">
        <p id="info" v-if="show">
          {{this.time}}
          {{this.cityCase}}
          {{this.cityDeath}}
          <br>
          {{this.stateCase}}
          {{this.stateDeath}}
          {{this.error}}
        </p>
        </transition>
          </div>
         </v-container>
        </v-form>
      </div>
      </transition>
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
      updated: '',
      show: false,
      cityCase: '',
      cityDeath: '',
      stateCase: '',
      stateDeath: ''
    }
  },
  methods: {
    async display () {
      this.show = !this.show
    },
    async searchData () {
      const res = await AuthenticationService.searchData(({
        // getting data from input
        region_province: this.regionProvince,
        city_name: this.CityName
      }))
      try {
        this.error = ''
        const confirmedInCity = funct.AbbreviateNum(res.data[0].today_confirmed_in_city)
        const totalConfirmedInState = funct.AbbreviateNum(res.data[0].total_confirmed_in_state)
        const deathInCity = funct.AbbreviateNum(res.data[0].death_in_city)
        const totalDeathInState = funct.AbbreviateNum(res.data[0].total_death)
        this.cityCase = confirmedInCity + ' new cases with '
        this.cityDeath = deathInCity + ' deaths today in the city.'
        this.stateCase = totalConfirmedInState + ' total cases with '
        this.stateDeath = totalDeathInState + ' deaths within the state.'
      } catch (error) {
        this.cityCase = ''
        this.cityDeath = ''
        this.stateCase = ''
        this.stateDeath = ''
        this.text = ''
        this.error = res.data.error
      }
    }
  }
}
</script>
<style scoped>
#infobox {
  margin-top:15px;
  font-size: 20px;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s
}

.fade-enter,
.fade-leave-to {
    opacity: 0
}
::-webkit-scrollbar {
  display: none;
}
#info{
}
#error{
}
</style>
