<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>

import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
   Header
  }
}
</script>

<style>

body{
  width: 100vw;
  height: 100vh;
  margin: 0;
}

</style>
