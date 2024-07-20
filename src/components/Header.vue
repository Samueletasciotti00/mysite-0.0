<script>
import Contacts from '../page/Contacts.vue';
import NameApp from "./NameApp.vue";

export default {
  data() {
    return {
      // Link for router
      routes: [
        {
          path: "/",
          name: "home",
          component: NameApp,
        },
        {
          path: "/contacts",
          name: "contacts",
          component: Contacts,
        },
      ],
    };
  },
};
</script>

<!-- Componente di sinistra -->
<template>
  <!-- CONTAINER -->
  <div class="container">
    <!-- Description -->
    <h3>Curriculm Vitae</h3>

    <!-- Voice -->
    <div id="voice">
      <ul>
        <li class="nav-item" v-for="(route, index) in routes" :key="index">
                        <router-link class="nav-link" :to="route.path">{{ route.name }}</router-link>
                    </li>
      </ul>
    </div>
  </div>
</template>

<!-- CSS -->
<style scoped>
/* Formattazione Header */
.container {
  /* Flex */
  display: flex;
  justify-content: space-around;
  align-items: center;
}

h3 {
  color: green;
}

ul {
  list-style: none;
  cursor: pointer;
  display: flex;
  gap: 10px;

  
}

ul li a:hover{
   color: green;
}

ul li a {
  text-decoration: none;
  color: black;
}
</style>
