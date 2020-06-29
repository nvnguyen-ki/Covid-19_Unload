
<template>
  <div class="page" style="margin-top:20px;" >
    <div class="scrape_box" >
      <form method="POST" action="/scrape">
      <div id="Infobox">
      <!-- <input type="text" v-model="text" name="text" placeholder="url"/> -->
      <input type="text" v-model="regionProvince" name="regionProvince" placeholder="State"/>
      <br>
      <input type="text" v-model="CityName" name="CityName" placeholder="City Name"/>
       <!-- <input type="text" name="scrape" placeholder="Email, phone, etc..."/> -->
      </div>
       <div id="error" v-html="error" />
      <v-btn text small style="margin: 15px;font-size:12px; border:1px solid rgb(146, 146, 146)" @click="test">test</v-btn>
      </form>
      <p id="congrats"></p>
    </div>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      CityName: '',
      regionProvince: '',
      text: '',
      error: null
    }
  },
  methods: {
    async test () {
      const res = await AuthenticationService.test(({
        region_province: this.regionProvince,
        city_name: this.CityName
      }))
      try {
        console.log(res.data)
        document.getElementById('congrats').innerHTML = 'confirmed cases: ' + res.data[0].confirmed + ' and the deaths today: ' + res.data[0].death + '.'
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
