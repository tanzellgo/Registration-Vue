<template>
  <div class="login">
    <p>Who <br> are you?</p>
    <form class="info" method="post" @submit.prevent >

      <h3 class="error">{{error}}</h3>

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" v-model="email" required />

      <label for="password">Password:</label>
      <input type="password" id="password" name="password" v-model="password" required />

      <button href="/account" @click="login">Login</button>

    </form>
  </div>
</template>

<script>

import { auth } from '../firebase'

export default {
  name: 'Login',
  data(){
    return{
      email: "",
      password: "",
      error: ""
    }
  },
  methods: {
    login() {
      auth.signInWithEmailAndPassword(this.email, this.password)
        .then(cred => {
          console.log("Logged in as " + cred.user.email)
          this.$router.push({ path: '/account' })
        })
        .catch(err => {
          this.error = err.message
        });
    }
  }
}
</script>

<style scoped>

.login{
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 10%;
  background-color: rgba(27,4,57,1);
  box-sizing: border-box;
}

.login p{
    padding-top: 70px;
    font-family: 'Abril Fatface', cursive;
    font-size: 7vw;
    color: white;
}

.info{
    display: flex;
    flex-direction: column;
    width: 30%;
    font-family: 'Patua One', cursive;
    font-size: 20px;
    color: white;
    margin: 50px auto;
}

.info input{
    font-size: 20px;
    padding: 7px;
    margin: 5px 0 20px;
    border-radius: 5px;
}

.info button{
  align-self: flex-end;
  background: none;
  border: none;
  outline: none;
  font-family: 'Patua One', cursive;
  font-size: 20px;
  color: white;
  cursor: pointer;
}

.info button:hover{
  text-decoration: underline;
}

.error{
  font-family: 'Patua One', cursive;
  font-size: 16px;
  color:crimson;
}

@media screen and (max-width: 800px) {
  .login{
    flex-direction: column-reverse;
    justify-content: center;
  }

  .info{
    width: 100%;
    margin: 0 0 50px;
    padding-top: 100px;
  }

  .login p{
    width: 100%;
    font-size: 30px;
    margin: 0;
    padding: 0;
  }
  
}

</style>