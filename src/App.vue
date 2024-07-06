<script>
    // IMPORT dei componenti
    import HeaderLeft from './components/HeaderLeft.vue';

    // Export
    export default {
      components: {
      HeaderLeft
  }
}
</script>

<!-- Componenti di pagina -->
<template>
  
  <!-- Dividere in due sezioni la pagina -->
  <div id="container">

    <!-- LEFT -->
    <div class="debug">

      <!-- Header -->
      <HeaderLeft />

      <!-- Main Part -->
      
    </div>

    <div class="debug"></div>
  </div>
</template>

<style scoped>

  /* Container dividi app */
  #container{
    display: flex;
    width: 100vw;
    height: 100vh;
  }

  /* DEBUG */
  .debug{
    width: 50vw;
    height: 100%;
    border: 1px solid red;
  }
</style>
