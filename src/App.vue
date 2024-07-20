// componente principale
<script>
// IMPORT dei componenti
import AppRight from "./components/AppRight.vue";
import Header from "./components/Header.vue";
import NameApp from "./components/NameApp.vue";
import Contacts from "./page/Contacts.vue";

// Export
export default {
  components: {
    Header,
    NameApp,
    AppRight,
    Contacts,
  },
  data() {
    return {
      showContactDetails: false,
    };
  },
  methods: {
    handleShowContactDetails() {
      this.showContactDetails = true;
    },
  },
};
</script>

<!-- Componenti di pagina -->
<template>
  <!-- Dividere in due sezioni la pagina -->
  <div id="container">
    <!-- LEFT -->
    <div id="info" class="space">
      <!-- Header -->
      <Header />

      <!-- Move in to the page -->
      <router-view v-slot="{Component}">

        <transition name="slide">

          <component :is="Component" :key="$route.path"></component>
        </transition>
      </router-view>
    </div>

    <div id="pick" class="space">
      <AppRight />
    </div>
  </div>
</template>

<style scoped>
/* Container dividi app */
#container {
  width: 100vw;
  min-height: 100vh;
  /* Flex */
  display: flex;
}

#pick {
  background-color: #2f4f4f;
  text-align: center;
  min-height: 100vh;
  /* Flex */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

#info {
  background-color: #dcdcdc;
  padding: 20px;
    min-height: 100vh;
}

/* DEBUG */
.space {
  width: 50vw;
  height: 100%;
}

.slide-enter-active{

  transition: opacity 1s, transform 1s;
}

.slide-enter-from{

  opacity: 0;
  transform: translateY(-100%);
}
.slide-leave-to{
  opacity: 1;
  transform: translateY(-100%);
}
</style>
