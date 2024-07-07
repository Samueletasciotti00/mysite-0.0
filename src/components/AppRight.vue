<script>
    export default{
        data() {
            return{
                img: 'src/assets/img/IMG_3032.JPG'
            }
              
        },
        methods: {
            myFunction(x) {

                //Selezionare classe/id per ridimensionamento
                let destra = document.getElementById('pick');
                let sinistra = document.getElementById('info');

                

                if(x == null){
                   this.x = 1;
                } else if(this.x == 1){
                    //Ridimensionamento
                    destra.style.width = '100vw';

                    sinistra.style.width = '0';

                    this.x = 0;
                } else {
                    //Ridimensionamento
                    destra.style.width = '50vw';

                    sinistra.style.width = '50vw';

                    this.x = 1;
                }
                

            }
        }
    }
</script>

<!-- Componente di Destra -->
<template>
    
    <!-- Foto utente -->
    <div @click="myFunction(x)" class="img">
        <img :src="img" alt="">
    </div>
</template>

<!-- CSS -->
<style scoped>
    .img{
        width: 400px;
        border-radius: 100px;
        img{
            max-width: 100%;
        }
    }

    .img:hover{
        animation-name: zooImg;
        animation-duration: 1s;
    }

    /* Gestione dell'hover sull' img */
    @keyframes zooImg {
        0% {
            width: 400px;
        }
         
        50% {
            width: 500px;
        }

        100% {
            width: 400px;
        }
    }
</style>