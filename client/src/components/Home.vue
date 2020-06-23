
<template>
  <div class="page" style="margin-top:20px;" >
    <div class="scrape_box" >
      <div id="Infobox">
      <input type="text" ref="url" name="url" placeholder="url"/>
      <br>
       <!-- <input type="text" name="scrape" placeholder="Email, phone, etc..."/> -->
      </div>
      <v-btn text small style="margin: 15px;font-size:12px; border:1px solid rgb(146, 146, 146)" onClick="scrapeRealtor()">Scrape</v-btn>
      <p id="congrats"></p>
    </div>
  </div>
</template>

<style scoped>
.scrape_box {
  width:50;
  text-align: center;
  margin:auto;
}
</style>
