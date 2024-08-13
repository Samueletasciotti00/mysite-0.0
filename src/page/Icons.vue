<template>


  <div class="box">

    <h1>Skills</h1>

    <div class="box-icons">
      <div>
      <!-- HTML -->
      <i class="fa-brands fa-html5" style="color: #c6270b"></i>
      <span>HTML</span>
    </div>

    <div>
      <!-- CSS -->
      <i class="fa-brands fa-css3-alt" style="color: darkblue"></i>
      <span>CSS</span>
    </div>

    <div>
      <!-- JS -->
      <i class="fa-brands fa-square-js" style="color: #d4c339"></i>
      <span
        >JS</span
      >
    </div>

    <div>
        <i class="fa-brands fa-react" style="color: rgb(88 196 220);"></i>
        <span>React</span>
    </div>

    <div>
      <!-- Vue.js -->
      <i class="fa-brands fa-vuejs" style="color: #59c059"></i>
      <span>Vue</span>
    </div>

    <div>
      <!-- Sass -->
      <i class="fa-brands fa-sass" style="color: violet"></i>
      <span>Sass</span>
    </div>

    <div>
        <!-- PHP -->
        <i class="fa-brands fa-php" style="color: #025ca2;"></i>
        <span>PHP</span>
    </div>

    <div>
        <!-- Bootstrap -->
        <i class="fa-brands fa-bootstrap" style="color: #B197FC;"></i>
        <span>Bootstrap</span>
    </div>

    <div>
      <!-- Git -->
      <i class="fa-brands fa-git-alt" style="color: #ff1551;"></i>
      <span>Git</span>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Icons"
};
</script>

<style lang="scss" scoped>
@use 'src/style/general.scss' as *;
/* Template */
.box-icons {

  width: 70%;
  /* padding-top: 100px; */
  margin: 10% auto;

  text-align: center;
  /* Flex */
  align-items: left;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}


.box {
  /* padding-top: 100px; */
  margin: 35% auto;
  // gap: 20px;
  /* Flex */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.box h1{
  font-size: 45px;
}

/* Gestione singoli elementi  */
.box-icons > div {
  
  display: flex;
  flex-direction: column;
}

/* Gestione icone linguaggi */
.box-icons i {
  font-size: 32px;
  transition: 1s;

  &:hover{
    font-size: 45px;
  }
}

/* Gestione colori span */
span {
  font-size: 20px;
}

img{
  max-width: 40%;
  margin: -4.5px auto;
  &:hover{
    height: 45px;
    width: 45px;
  }
}

</style>
