
<template>
  <div class="page" style="margin-top:20px;" >
    <div class="scrape_box" >
      <div id="Infobox">
      <input type="text" v-model="url" name="url" placeholder="url"/>
      <br>
       <!-- <input type="text" name="scrape" placeholder="Email, phone, etc..."/> -->
      </div>
      <v-btn text small style="margin: 15px;font-size:12px; border:1px solid rgb(146, 146, 146)" @click="scrape">Scrape</v-btn>
      <p id="congrats"></p>
    </div>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      url: '',
      error: null
    }
  },
  methods: {
    async scrape () {
      try {
        await AuthenticationService.scrape(({
          url: this.url
        }))
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
