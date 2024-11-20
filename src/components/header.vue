    <script setup>
</script>
    <template>
        <section>
            <div class="container-header">
                <div class="container-nav-title">
                    <div class="container-title">
                        <h1>RUMBLE</h1>
                        <img class="logo" src="../../public/rumble-logo.png">
                    </div>
                    <div class="container-nav">
                        <ul>
                            <li>Home</li>
                            <li>Series</li>
                            <li>Filmes</li>
                        </ul>
                    </div>
                </div>
                <div class="search-bar">
                    <div class="container-search"> 
                        <input type="text" placeholder="Procure Filmes , Series...">
                        <img class="lupa" src="../../public/lupa-logo.png">
                    </div>
                </div>
            </div>
        </section>
    </template>
<style scoped>
* {
    color: #2b2b2b75;
}

section {
    height: 5rem;
    background-color: rgba(255, 255, 255, 0);
}

.container-header {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.container-nav-title {
    display: flex;
    height: 100%;
    justify-content: space-around;
    align-items: center;
    color: #FFFFFF99;
}

.container-title {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    margin: 0em 2em 0em 2em;
}

.container-nav {
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
}

ul {
    list-style-type: none;
    display: flex;
    gap: 1rem;
}

li {
    margin: 0em 1em 0em 1em;
    font-size: 1.5em;
}

input {
    background-color: transparent;
    border: none;
}

.search-bar {
    height: 100%;
    width: 25%;
    display: flex;
    align-items: center;
}

.container-search {
    width: 90%;
    height: 55%;
    display: flex;
    justify-content: space-between;
    padding: 0em 1em 0em 1em;
    align-items: center;
    border: 1px solid #2b2b2b75;
    border-radius: 2em;
}

h1 {
    font-size: 1.5em;
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