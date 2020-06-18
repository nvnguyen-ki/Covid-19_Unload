<template>
  <div class="">
   <h1> register </h1>
   <input type="text" v-model="email" name="email" placeholder="email"/>
   <br>
   <input type="password" name="password" v-model="password" placeholder="password"/>
  <br>
  <div class="error" v-html="error" />
  <button @click=register>Register</button>
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
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error {
  color:royalblue;
}
</style>
