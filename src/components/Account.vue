<template>
  <div class="account">
    <p>Oh, <br> it's you!</p>
    <div class="user" v-if="user">
      <h1>Good day, <span>{{user.name}}!</span></h1>
      <h1>Bet you're craving for some <span>{{user.food}}!</span></h1>
    </div>
    <loading v-if="isLoading" />
  </div>
</template>

<script>

import { db } from '../firebase'
import store from '../store'
import Loading from './Loading'

export default {
  name: 'Account',
  components: {
    Loading
  },
  data(){
    return{
      user: null,
      isLoading: true
    }
  },
  beforeCreate(){
    // dispatches an action to the store to check for login status then gets user data
    store.dispatch('checkState')
    .then((uid) => {
      db.collection("users").doc(String(uid)).get()
        .then(doc => {
            this.isLoading = false
            this.user = doc.data() 
        })
        .catch((error) => {
          console.log("Firestore: ", error);
        });
    })
    .catch((err) => {
      console.log(err);
    })
  }
}
</script>

<style scoped>

.account{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100vh;
    padding: 10%;
    font-size: 3vw;
    background-color: rgba(27,4,57,1);
    box-sizing: border-box;
}

.account p{
    padding-top: 70px;
    font-family: 'Abril Fatface', cursive;
    font-size: 7vw;
    color: white;
}

.user{
    flex-direction: column;
    width: 50%;
    font-family: 'Patua One', cursive;
    font-size: 20px;
    color: white;
    margin: 50px auto;
}

span{
  color: crimson;
}

@media screen and (max-width: 800px) {
  .account{
    flex-direction: column-reverse;
    justify-content: center;
  }

  .user{
    width: 100%;
    font-size: 15px;
  }

  .info{
    width: 100%;
    margin: 0;
    padding-top: 100px;
  }

  .account p{
    width: 100%;
    font-size: 30px;
    margin: 0;
    padding: 0;
  }
  
}
</style>