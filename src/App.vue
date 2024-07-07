<script>
    // IMPORT dei componenti
    import AppRight from './components/AppRight.vue';
    import HeaderLeft from './components/HeaderLeft.vue'
    import MainApp from './components/MainApp.vue';

    // Export
    export default {
      components: {
          HeaderLeft,
          MainApp,
          AppRight
    }
}
</script>

<!-- Componenti di pagina -->
<template>
  
  <!-- Dividere in due sezioni la pagina -->
  <div id="container">

    <!-- LEFT -->
    <div id="info" class="space">

      <!-- Header -->
      <HeaderLeft />

      <!-- Main Part -->
      <MainApp />
    </div>

    <div id="pick" class="space">
      <AppRight />
    </div>
  </div>
</template>

<style scoped>

  /* Container dividi app */
  #container{

    width: 100vw;
    height: 100vh;
    /* Flex */
    display: flex;
  }

  #pick{
    background-color: #2F4F4F;

    /* Flex */
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  #info{
    background-color: #DCDCDC;
  }

  /* DEBUG */
  .space{
    width: 50vw;
    height: 100%;
    border: 1px solid black;
  }
</style>
