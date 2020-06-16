<template>
  <div class="">
   <h1> register </h1>
   <input type="text" v-model="email" name="email" placeholder="email"/>
   <br>
   <input type="password" name="password" v-model="password" placeholder="password"/>
  <br>
  <button @click=register>Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>
