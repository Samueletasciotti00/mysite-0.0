<script>
    export default{
        data() {
        
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
            <li><b>Telefono:</b> +39 3791672035</li>
            <li><b>Email:</b> samueletasciotti@icloud.com</li>
        </ul>

        <!-- Links -->

        <span><a href="">Linkedin</a></span>
    </div>
        

</template>

<!-- CSS -->
<style scoped>
    /* Template */
    .box{
        padding-top: 100px;
        /* Flex */
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: left;

        h1{
            font-size: 45px;
        }
    }
</style>