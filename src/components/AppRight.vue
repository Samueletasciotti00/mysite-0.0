<script>
export default {
  data() {
    return {
      x: 0,
      store: 0,
      img: "src/assets/img/IMG_3032.JPG",
    };
  },
  methods: {
    fullRight() {
      // Selezionare classe/id per ridimensionamento
      const destra = document.getElementById("pick");
      const sinistra = document.getElementById("info");
      const hoverImg = document.querySelector(".img");
      const section = document.getElementById("sezione");

      // Controllo larghezza schermo
      const isWideScreen = matchMedia("only screen and (min-width: 920px)").matches;

      if (this.x === 1 && isWideScreen) {
        // Ridimensionamento per schermi larghi
        destra.style.transition = sinistra.style.transition = "0.75s ease";
        destra.style.width = "100%";
        sinistra.style.width = "0";
        sinistra.style.padding = "0";
        section.style.display = "block";
        section.style.opacity = "1";
        hoverImg.style.animationName = "zooImg";
        this.x = 0;
      } else if (this.store === 1) {
        destra.style.width = sinistra.style.width = "100%";
      } else if (isWideScreen) {
        // Ridimensionamento per schermi larghi (stato opposto)
        destra.style.transition = sinistra.style.transition = "0.75s ease";
        destra.style.width = sinistra.style.width = "50vw";
        sinistra.style.padding = "20px";
        section.style.display = "none";
        section.style.opacity = "0";
        this.x = 1;
      } else if (this.store === 1) {
        destra.style.width = sinistra.style.width = "100%";
      }
    },
  },
};
</script>

<!-- Componente di Destra -->
<template>

  <div class="img">
    <span>Click Me!</span>
    <img @click="fullRight()" :src="img" alt="Profile Image" />
    
    <!-- Contenuto Da mostrare  -->
    <div id="sezione" class="hidden">
      <h2>Progetti GitHub</h2>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@use 'src/style/general.scss' as *;

/* Impostazioni immagine */
.img {
  width: 40%;
  text-align: center;

  img {
    max-width: 100%;
    border-radius: 20px;
  }

  span {
    color: transparent;
    font-size: 20px;
    transition: color 0.3s ease;
  }

  &:hover span {
    color: tomato;
  }

  &:hover {
    animation: zooImg 1s forwards;
  }
}

/* Transizione sezione */
#sezione {
  display: none;
  opacity: 1;
  transition: opacity 2.5s ease-in-out;
  padding: 20px;
  margin: 20px;
  background-color: wheat;
  border-radius: 20px;
}

/* Stili descrizione */
h3 {
  font-size: 32px;
  color: $green;
  text-align: left;
}

p {
  font-size: 20px;
  text-align: left;
}

/* Animazione hover immagine */
@keyframes zooImg {
  0% {
    width: 300px;
  }

  50% {
    width: 350px;
  }

  100% {
    width: 250px;
  }
}
</style>
