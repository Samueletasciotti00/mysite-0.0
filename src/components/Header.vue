<script>
import Contacts from '../page/Contacts.vue';
import Icons from '../page/Icons.vue';
import NameApp from "../page/NameApp.vue";
import App from '/src/App.vue'


export default {
  data() {
    return {
      // Link for router
      routes: [
        {
          path: "/",
          name: "HOME",
          component: NameApp,
        },
        {
          path: "/contacts",
          name: "CONTACTS",
          component: Contacts,
        },
        {
          path: "/skills",
          name: "SKILLS",
          component: Icons
        }  
      ]
    }
  }
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

      <!-- List of menu voice -->
      <ul>
        <li class="nav-item" v-for="(route, index) in routes" :key="index">
            <router-link class="nav-link" :to="route.path">{{ route.name }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<!-- CSS -->
<style lang="scss" scoped>
@use 'src/style/general.scss' as *;
/* Formattazione Header */
.container {
  /* Flex */
  display: flex;
  justify-content: space-around;
  align-items: center;
}

h3 {
  color: $green;
}

ul {
  list-style: none;
  cursor: pointer;
  display: flex;
  gap: 10px;
  transition: 1s;
}

ul li a:hover{
   color: $green;
}

ul li a {
  text-decoration: none;
  color: $black;
}

</style>
