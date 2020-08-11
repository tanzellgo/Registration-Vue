<template>
  <div class="register">
    <p>Tell <br> me more!</p>
    <form class="info" @submit.prevent >

      <h5 class="error">{{error}}</h5>

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" v-model="email" required />

      <label for="password">Password:</label>
      <input type="password" id="password" name="password" v-model="password" required />

      <label for="name">Name:</label>
      <input type="name" id="name" name="name" v-model="name" required />

      <label for="Food">Favorite Food:</label>
      <input type="food" id="food" name="food" v-model="food" required />

      <button @click.prevent="register">Register</button>

    </form>
  </div>
</template>

<script>

import { db, auth } from '../firebase'

export default {
  name: 'Register',
  data(){
    return{
      email: "",
      password: "",
      name: "",
      food: "",
      error: ""
    }
  },
  methods: {
    register() {
        auth.createUserWithEmailAndPassword(this.email, this.password)
        .then(cred => {
          this.$router.push({ path: '/account' })
          return db.collection('users').doc(cred.user.uid).set({
            name: this.name,
            food: this.food
          })
        })
        .catch(err => {
          this.error = err.message
        });
    }
  }
}
</script>

<style scoped>

.register{
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 10%;
  background-color: rgba(27,4,57,1);
  box-sizing: border-box;
}

.register p{
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
  font-size: 12px;
  color:crimson;
  margin: 0;
}

@media screen and (max-width: 800px) {
  .register{
    flex-direction: column-reverse;
    justify-content: center;
  }

  .info{
    width: 100%;
    margin: 0;
    padding-top: 40px;
  }

  .info input{
    margin: 5px 0 10px;
  }

  .register p{
    width: 100%;
    font-size: 30px;
    margin: 0;
    padding: 0;
  }
  
}


</style>
