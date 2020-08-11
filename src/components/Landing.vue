<template>
  <div class="landing">
    <p>Hi, <br> there!</p>
    <div class="circle"></div>
  </div>
</template>

<script>
export default {
  name: 'landing'
}
</script>

<style scoped>

.landing{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100vh;
    padding: 10%;
    background-color: rgba(27,4,57,1);
    box-sizing: border-box;
}

.landing p{
    padding-top: 70px;
    font-family: 'Abril Fatface', cursive;
    font-size: 10vw;
    color: white;
}

.circle{
    width: 300px;
    height: 300px;
    border-radius: 100%;
    background-color:khaki;
}

@media screen and (max-width: 800px) {
  .landing{
    flex-direction: column-reverse;
    justify-content: center;
  }

  .circle{
    width: 200px;
    height: 200px;
  }

  .landing p{
    width: 100%;
    font-size: 30px;
    margin: 0;
  }
  
}

</style>