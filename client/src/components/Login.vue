<template>
  <div class="page" >
    <div class="login" >
      <h3 style="border-bottom:1px solid rgb(146, 146, 146)"> Login </h3>
      <div id="Infobox">
      <input type="text" v-model="email" name="email" placeholder="email"/>
      <br>
      <input type="password" name="password" v-model="password" placeholder="password"/>
      <br>
      </div>
      <div class="error" v-html="error" />
      <v-btn text small style="margin: 15px;font-size:12px; border:1px solid rgb(146, 146, 146)" @click="login">login</v-btn>
    </div>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$router.push({
          path: '/'
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
#Infobox {
  margin-top:20px;
}

.page{
  margin-top:20px;
}

.login {
  width: 50%;
  margin:auto;
  border:1px solid rgb(146, 146, 146);
  text-align: center;
}

.error {
  color:rgb(235, 132, 107);
}
</style>
