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
                <li @click="myFunction()">Chi sono?</li>
                <li><a href="#">CV</a></li>
                <li><a href="#">Contatti</a></li>
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
    }

    h3{
        color: #2F4F4F;
    }

    ul{
        list-style: none;
        cursor: pointer;
        display: flex;
        gap: 10px;
    }
    
    ul li a{
        text-decoration: none;
        color: #2F4F4F;
    }
</style>