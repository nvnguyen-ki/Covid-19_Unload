<template>
  <div class="page">
    <div class="register">
      <h3> Register </h3>
      <input type="text" v-model="email" name="email" placeholder="email"/>
      <br>
      <input type="password" name="password" v-model="password" placeholder="password"/>
      <br>
      <div class="error" v-html="error" />
      <button @click=register>register</button>
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
.register {
  width: 50%;
  margin:auto;
  border:1px solid rgb(146, 146, 146);
  text-align: center;
  font-family: 'Inconsolata',monospace;
}

.error {
  color:rgb(235, 132, 107);
}
</style>
