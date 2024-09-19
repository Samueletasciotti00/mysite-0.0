<script>
import Contacts from "../page/Contacts.vue";
import Icons from "../page/Icons.vue";
import NameApp from "../page/NameApp.vue";
import Story from "../page/Story.vue";

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
          component: Icons,
        },
        {
          path: "/story",
          name: "STORY",
          component: Story,
        },
      ],
    };
  },
  methods:{
    burgerMenu(){

      // Seleziono il burger menu come variabile
      let burger = document.getElementById('burger');

      burger.addEventListener('click', function(){
        
      });
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
      <ul class="desk-menu">
        <li class="nav-item" v-for="(route, index) in routes" :key="index">
          <router-link class="nav-link" :to="route.path">{{
            route.name
          }}</router-link>
        </li>
      </ul>

      <div id="burger">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png" alt="">
      </div>
<!-- 
      <div id="menu">

      </div> -->
    </div>
  </div>
</template>

<!-- CSS -->
<style lang="scss" scoped>
@use "src/style/general.scss" as *;
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

ul li a:hover {
  color: $green;
  padding-bottom: 10px;
  border-bottom: 1px solid;
}

ul li a {
  text-decoration: none;
  color: $black;
}

@media screen and (min-width: 420px) and (max-width: 920px) {
  .desk-menu {
    display: none;
  }

  #burger {
    display: block !important;
    width: 30px;
    height: 40px;

    img{
      display: block !important;
      width: 100%;
    }
  }
}

#burger {
  display: none;
  img{
    display: none;
  }
}

// #menu{
//   width: 40%;
//   height: 100vh;
//   background-color: black;
//   position: absolute;
// }
</style>
