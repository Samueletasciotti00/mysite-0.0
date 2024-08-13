<script>


export default {
  name: 'NameApp',
  components:{

  }, 
  data() {
    return {

    }
  }
};
</script>

<!-- Componente Centrale -->
<template>
  <div class="box">
    <!-- Titolo Principale -->
    <h1>Samuele Tasciotti</h1>
    <h2>Web Developer</h2>
  </div>
</template>

<!-- CSS -->
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
