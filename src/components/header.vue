<script setup>
</script>
<template>
    <section class="container-header">
        <div>
            <h1>RUMBLE</h1>
            <img class="logo" src="../../public/rumble-logo.png">
        </div>
        <div>
            <ul>
                <li>Home</li>
                <li>Series</li>
                <li>Filmes</li>
            </ul>
        </div>
        <div>
            <div>
                <input type="text" placeholder="Procure Filmes , Series...">
                <img class="lupa" src="../../public/lupa-logo.png">
            </div>
        </div>
    </section>
</template>
<style scoped>
    .container-header {
        height: 4rem;
        background-color: black;
    }

    .logo {
        width: 3rem;
        height: 3rem;   
    }
    .lupa {
        width: 2rem;
        height: 2rem; 
    }
</style>