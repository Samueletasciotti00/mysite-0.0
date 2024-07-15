<script>
    export default{
        data() {
           return{
            
           }
        }
    }
</script>

<!-- Componente Centrale -->
<template>
    <div class="box">

        <!-- Titolo Principale -->
        <h1>Samuele Tasciotti</h1>
        <h2>Web Developer</h2>
        

        <!-- Contatti -->
        <ul>
            <li class="info"><b>Telefono:</b> +39 3791672035</li>
            <li class="info"><b>Email:</b> samueletasciotti@icloud.com</li>
        </ul>

        <!-- Links -->

        <span><a href="">Linkedin</a> <i class="fa-brands fa-linkedin"></i></span>
    </div>
        

</template>

<!-- CSS -->
<style scoped>
    /* Template */
    .box{
        /* padding-top: 100px; */
        margin: 150px;
        gap: 20px;
        /* Flex */
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: left;
        text-align: center;
    }

    /* Titol Of Page */
    h1{
        font-size: 35px;
    }

    /* List Decoration */
    ul{
        list-style: none;
    }

    span a{
        text-decoration: none;
        color: red;
    }
</style>