<script>
    export default{
        data() {
            return{
                voices: [
                'Chi sono',
                'CV',
                'Contatti'
                ]
            }
           
        }
    }
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
                <li @click="myFunction" v-for="voice in voices"><a href="#">{{ voice }}</a></li>
            </ul>
        </div>
    </div>
</template>

<!-- CSS -->
<style scoped>

    /* Formattazione Header */
    .container{
        /* Flex */
        display: flex;
        justify-content: space-around;
        align-items: center;

        h3{
            color: #2F4F4F;
        }
    }

    #voice{
        
        ul {
            list-style: none;
            
            /* Flex */
            display: flex;
            justify-content: space-around;

            /* List */
            li{
                margin: 10px;
                font-size: 16px;
            }

            li a:hover{
                animation-name: zooLi;
                animation-duration: 1.5s;
                color: red;
            }

            li a{ 
                text-decoration: none;
                color: black;
                
            }
        }        
    }

    /* Gestione dell'hover su gli li */
    @keyframes zooLi {
        0% {
            font-size: 16px;
        }
         
        50% {
            font-size: 21px;
        }

        100% {
            font-size: 16px;
        }
    }
    
</style>