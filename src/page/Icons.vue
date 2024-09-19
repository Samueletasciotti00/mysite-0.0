<template>
  <div class="box">
    <h1>Skills</h1>

    <div class="box-icons">
      <div>
        <!-- JS -->
        <i class="fa-brands fa-square-js" style="color: #d4c339"></i>
        <span>JS</span>
      </div>

      <div>
        <!-- PHP -->
        <i class="fa-brands fa-php" style="color: #025ca2; font-weight:600"></i>
        <span>PHP</span>
      </div>

      <div>
        <i class="fa-brands fa-react" style="color: rgb(88 196 220)"></i>
        <span>React</span>
      </div>

      <div>
        <!-- Vue.js -->
        <i class="fa-brands fa-vuejs" style="color: #59c059"></i>
        <span>Vue</span>
      </div>

      <div>
        <!-- Laravel -->
        <i class="fa-brands fa-laravel" style="color: #e11414"></i>
        <span>Laravel</span>
      </div>

      <div>
        <!-- Bootstrap -->
        <i class="fa-brands fa-bootstrap" style="color: #b197fc"></i>
        <span>Bootstrap</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Icons",
};
</script>

<style lang="scss" scoped>
@use "src/style/general.scss" as *;
/* Template */
.box-icons {
  width: 80%;
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

.box h1 {
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

  &:hover {
    font-size: 45px;
  }
}

/* Gestione colori span */
span {
  font-size: 20px;
}
</style>
