
<template>
  <div class="page" style="margin-top:20px;" >
    <div class="scrape_box" >
      <form method="POST" action="/scrape">
      <div id="Infobox">
      <input type="text" v-model="text" name="text" placeholder="url"/>
      <br>
       <!-- <input type="text" name="scrape" placeholder="Email, phone, etc..."/> -->
      </div>
       <div class="error" v-html="error" />
      <v-btn text small style="margin: 15px;font-size:12px; border:1px solid rgb(146, 146, 146)" @click="scrape">Scrape</v-btn>
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
      text: '',
      error: null
    }
  },
  methods: {
    async scrape () {
      try {
        const res = await AuthenticationService.scrape(({
          text: this.text
        }))
        document.getElementById('congrats').innerHTML = res.data[0].title + ' Has a ' + res.data[0].rating + ' rating.'
        console.log(res.data[0])
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
