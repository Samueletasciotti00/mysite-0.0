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
                <li v-for="voice in voices"><a href="#">{{ voice }}</a></li>
            </ul>
        </div>
    </div>
</template>

<!-- CSS -->
<style>

    /* Formattazione Header */
    .container{
        /* Flex */
        display: flex;
        justify-content: space-around;
        align-items: center;
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
            }

            li a{ 
                text-decoration: none;
                color: black;
            }
        }        
    }

    
</style>