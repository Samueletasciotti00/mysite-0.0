<template>
  <!-- Pagina per i contatti -->
  <div class="box">
    <!-- Titolo Principale -->
    <h1>Contacts</h1>

    <!-- Contatti -->
    <ul id="contact" @cambioStato="receiveEmit">
      <li class="info"><b>Telefono:</b> +39 3791672035</li>
      <li class="info"><b>Email:</b> samueletasciotti@icloud.com</li>
    </ul>

    <!-- Links -->

    <span
      ><a href="https://www.linkedin.com/in/samuele-tasciotti-212b232a7/"
        >Linkedin </a
      > 
      <i class="fa-brands fa-linkedin"></i
    ></span>
  </div>
</template>

<script>
export default {
  name: 'Contacts',
  data() {},
  
};
</script>

<style lang="scss" scoped>
@use 'src/style/general.scss' as *;
/* Template */
.box {
  /* padding-top: 100px; */
  margin: 35% auto;
  gap: 20px;
  /* Flex */
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: left;
  text-align: center;
}

/* Titol Of Page */
h1 {
  font-size: 45px;
}

/* List Decoration */
ul {
  list-style: none;
}

span a {
  text-decoration: none;
  color: $green;
}
</style>
