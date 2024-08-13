// componente principale
<script>
// IMPORT dei componenti
import AppRight from "./components/AppRight.vue";
import Header from "./components/Header.vue";
import NameApp from "./page/NameApp.vue";
import Contacts from "./page/Contacts.vue";
import Icons from './page/Icons.vue';

// Export
export default {
  components: {
    Header,
    NameApp,
    AppRight,
    Contacts,
    Icons
  },
  data() {
    return {
      showContactDetails: false,
      status:true
    };
  },
  methods: {
    handleShowContactDetails() {
      this.showContactDetails = true;
    },
    changeMode() {
      //Riconoscere lo stato dell'app

      //Dichiarazione Variabili per cambio colore del tema;
      let colorRight = document.getElementById('pick');
      let colorLeft =  document.getElementById('info');

      // Modifica dell'icona bottone;
      let bottone = document.querySelector('button');

      if(this.status === true){

        // Turn in to LIGHT;
        colorRight.style.backgroundColor = '#80c8aa'; //BK_GRD Right;
        colorLeft.style.backgroundColor = '#ffffff';

        // Rimozione del simbolo precedente;
        bottone.innerHTML = '';
        //Aggiunta del simbolo successivo;
        bottone.innerHTML = '<i class="fa-regular fa-lightbulb" style="color: #FFD43B;"></i>';

        // Settare lo stato
        this.status = false;
      } else {

        // Turn in to DARK;
        colorRight.style.backgroundColor = '#2f4f4f';
        colorLeft.style.backgroundColor = '#dcdcdc';

        // Rimozione del simbolo precedente;
        bottone.innerHTML = '';
        //Aggiunta del simbolo successivo;
        bottone.innerHTML = '<i class="fa-regular fa-lightbulb" style="color: black;"></i>';

        // Settare lo stato
        this.status = true;
      }

      
    }
  },
};
</script>

<!-- Componenti di pagina -->
<template>
  <!-- Dividere in due sezioni la pagina -->
  <div id="container">
    <!-- LEFT -->
    <div id="info" class="space">

      <!-- Mode Button -->
      <button @click="changeMode"><i class="fa-regular fa-lightbulb" style="color: black;"></i></button>

      <!-- Header -->
      <Header />

      <!-- Move in to the page -->
      <router-view v-slot="{Component}">

        <transition name="slide">

          <component :is="Component" :key="$route.path"></component>
        </transition>
      </router-view>
    </div>

    <div id="pick" class="space media">
      <AppRight />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use './style/general.scss' as *;
/* Container dividi app */
#container {
  width: 100vw;
  height: 100vh;
  /* Flex */
  display: flex;
}

#pick {
  background-color: $wood; //Sass
  text-align: center;
  min-height: 100vh;
  /* Flex */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

#info {
  background-color: $light;
  padding: 20px;
  max-height: 100vh;
}

/* DEBUG */
.space {
  width: 50vw;
  height: 100%;
}

@media screen and (max-width: 920px) {
  #container{
    flex-direction: column;
  }
  .space{
    width: 100vw;
  }
}

.slide-enter-active{

  transition: opacity 1s, transform 2s;
}

.slide-enter-from{

  opacity: 0;
  transform: translateY(150%);
}
.slide-leave-to{
  opacity: 1;
  transform: translateY(0);
}

// Button for turn mods
button{
  background: transparent;
  border: none;
  font-size: 22px;
  position: absolute;

  transition: 1s ease;

  &:hover {
    font-size: 28px;
  }
}
</style>
