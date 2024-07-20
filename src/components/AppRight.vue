<script>
export default {
  data() {
    return {
      img: "src/assets/img/IMG_3032.JPG",
    };
  },
  methods: {
    fullRight() {
      //Selezionare classe/id per ridimensionamento
      let destra = document.getElementById("pick");
      let sinistra = document.getElementById("info");
      let hoverImg = document.querySelector(".img");

      //Mostrare la descrizione
      let section = document.getElementById('sezione');
      
      

      // Condizione di Transition
      if (this.x == 1) {
        //Se è 1

        //Ridimensionamento
        sinistra.style.transition = "0.75s ease";
        destra.style.width = "100vw";

        sinistra.style.width = "0";
        sinistra.style.padding = "0";
        // Switch di stato per il prossimo click
        this.x = 0;

        section.style.display = 'block';
      } else {
        //Ridimensionamento
        destra.style.transition = "0.75s ease";
        destra.style.width = "50vw";

        sinistra.style.width = "50vw";
        sinistra.style.padding = "20px";
        // Switch di stato per il prossimo click
        this.x = 1;

        section.style.display = 'none';
      }
    },
  },
};
</script>

<!-- Componente di Destra -->
<template>
  <!-- Foto utente -->
  <div @click="fullRight()" class="img">
    <span>Click Me!</span>
    <img :src="img" alt="" />

    <!-- Contenuto Da mostrare  -->
    <div id="sezione">

        <!-- H3 titol -->
        <h3>La mia storia</h3>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis praesentium minima quis, deserunt distinctio optio suscipit dolorem voluptate vel animi, magni expedita tenetur labore provident commodi quaerat itaque? Voluptatem, eveniet?
        Atque dolore explicabo odio rem vitae, neque iure laudantium minus saepe iusto! Incidunt aspernatur expedita quibusdam mollitia vitae ipsam assumenda harum aliquid dolorem et asperiores earum, nostrum illum debitis. Quae!
        Rem, nam, exercitationem, illo laborum dolore cumque laudantium culpa repudiandae dolores architecto excepturi vero veritatis. Quia, eligendi voluptatem, voluptate aut hic facere expedita dolor provident fuga quidem ex. Quidem, nesciunt.
        Autem quis ipsum nisi eveniet quod architecto sed quos voluptatem odit libero! Pariatur nemo odio atque, doloribus ex deserunt consequatur molestias, neque quae esse nam similique tempora vero! Cum, mollitia!
        Nisi culpa alias qui, facilis inventore id molestiae, labore nesciunt ducimus aspernatur, voluptate magni officiis! Odio expedita enim illo, facere obcaecati pariatur veritatis necessitatibus, corporis doloribus deleniti, iste iusto inventore.</p>
    </div>
  </div>
</template>

<!-- CSS -->
<style scoped>

/* Immage settings */
.img {
  width: 400px;
  border-radius: 100px;
  text-align: center;
}

.img img {
  max-width: 100%;
}

.img span {
  color: #2f4f4f;
  font-size: 20px;
}

.img:hover span {
  color: tomato;
}

.img:hover {
  animation-name: zooImg;
  animation-duration: 1s;
}

/* Section transition */
#sezione{
    display: none;
    animation-duration: 1s;
}

#sezione:active{
    animation-name: descript;
}

/* Gestione dell'hover sull' img */
@keyframes zooImg {
  0% {
    width: 400px;
  }

  50% {
    width: 450px;
  }

  100% {
    width: 400px;
  }
}

@keyframes descript {
  0% {
    width: 400px;
  }

  50% {
    width: 450px;
  }

  100% {
    width: 400px;
  }  
}
</style>
