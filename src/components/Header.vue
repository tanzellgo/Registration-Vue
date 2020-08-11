<template>
  <nav>

    <a href="/" class="nav-logo">Nightly</a>

    <label for="check" class="burger-icon">
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </label>
      
    <input type="checkbox" class="checkbox" id="check"/>

    <ul class="nav-pages">
      <!-- renders based on login status -->
      <template v-if="setUser">
        <li><a href="/account" class="nav-page">PROFILE</a></li>
        <li><a href="/" @click="logout" class="nav-page">LOGOUT</a></li>
      </template>
      <template v-else>
        <li><a href="/register" class="nav-page">REGISTER</a></li>
        <li><a href="/login" class="nav-page">LOGIN</a></li>
      </template>
    </ul>
      
  </nav>
</template>

<script>

import { auth } from '../firebase'
import store from '../store'

export default {
  name: 'Header',
  data(){
    return{
      midShow: false
    }
  },
  methods: {
    logout(){
      auth.signOut()
    }
  },
  computed: {
    setUser: () => {
      if(store.getters.user){
        return !!store.getters.user
      } else {
        return false
      }
    }
  }
}

</script>
  
<style scoped>

nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    padding: 0 30px;
    z-index: 1000;
    box-sizing: border-box;
}

nav a{
  font-family: 'Patua One', cursive;
  font-size: 30px;
  color: white
}

.checkbox {
    display: none;
}

#check:checked~ul{
    left: 0;
    opacity: 1;
}

.burger-icon {
    display: none;
    cursor: pointer;
}

.bar1,
.bar2,
.bar3 {
    width: 25px;
    height: 3px;
    margin: 3px 0;
    background-color: white;
}

.nav-pages{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 30%;
    list-style-type: none;
    padding: 0;
}

.nav-page{
    font-family: 'Open Sans', sans-serif;
    font-size: 15px;
    font-weight: 700;
    margin-left: 15px;
    text-decoration: none;
}

.nav-page:hover{
  text-decoration: underline;
}


@media screen and (max-width: 800px) {

    /*Header*/

    .burger-icon {
        display: flex;
        flex-direction: column;
    }

    #check:checked~ul{
        left: 0;
        opacity: 1;
    }

    .nav-pages{
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: -100%;
        font-size: 100px;
        padding: 20% 0;
        margin: 0;
        background-color: rgba(27,4,57,1);
        z-index: -1;
        opacity: 0;
        transition: all 0.5s;
        box-sizing: border-box;
    }

    .nav-page{
      font-size: 20px;
      line-height: 40px;
    }

}

</style>