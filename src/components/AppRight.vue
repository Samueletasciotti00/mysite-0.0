<script>
export default {
  data() {
    return {
      x: 0,  
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
      if (this.x === 1) {
        //Se è 1
      
        //Ridimensionamento
        sinistra.style.transition = "0.75s ease";
        destra.style.width = "100vw";

        sinistra.style.width = "0";
        sinistra.style.padding = "0";
        // Switch di stato per il prossimo click
        this.x = 0;

        section.style.display = 'block';
        section.style.opacity ='1';


        // Rimozione dell effetto zoom sull'immagine al click;
        hoverImg.style.animationName = 'zooImg';
      } else {
        //Ridimensionamento
        destra.style.transition = "0.75s ease";
        destra.style.width = "50vw";

        sinistra.style.width = "50vw";
        sinistra.style.padding = "20px";
        // Switch di stato per il prossimo click
        this.x = 1;

        section.style.display = 'none';
        section.style.opacity ='1';

        //Aggiunta dell effetto zoom sull'immagine al click;
        console.log('Ok bro')
      }
    },
  },
};
</script>

<!-- Componente di Destra -->
<template>
  <!-- Foto utente -->
  <div  class="img">
    <span>Click Me!</span>
    <img @click="fullRight()" :src="img" alt="" />

    <!-- Contenuto Da mostrare  -->
    <div id="sezione" class="hidden">

        <!-- H3 titol -->
        <h3>La mia esperienza</h3>

        <p>
            Sono un ragazzo di 23 anni, studio programmazione web da ottobre 2023, mi piace realizzare siti minimal, fornire all'utente un esperienza grafica appagante e funzionale,
            se sei interessato a conoscermi non esitare a contattarmi!

            Per quanto riguarda le tecnologie che utilizzo ti basta tornare alla home page e premere su "liguaggi".
        </p>
    </div>
  </div>
</template>

<!-- CSS -->
<style lang="scss" scoped>
@use 'src/style/general.scss' as *;

/* Immage settings */
img{
  border-radius: 20px;
}

.img {
  width: 40%;

  text-align: center;
}

.img img {
  max-width: 100%;
}

.img span {
  color: $wood;
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
    opacity: 1;
    transition: 2.5s forward;
    padding: 20px;
    background-color: wheat;
    border-radius: 20px;
}

/* Descriptio css */
h3{
    font-size: 32px;
    color: $green;
    text-align: left;
}

p{
    font-size: 20px;
    text-align: left;
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

</style>
