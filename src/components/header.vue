<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <header>
    <div class="container-header">
      <div class="container-nav-title">
        <div class="container-title">
          <h1>RUMBLE</h1>
          <img class="logo" src="../../public/rumble-logo.png" />
        </div>
        <div class="container-nav">
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/filmes">Filmes</router-link></li>
            <li><router-link to="/tv">Programas de TV</router-link></li>
            <li><router-link to="/test">TEST</router-link></li>
          </ul>
        </div>
      </div>
      <div class="search-bar">
        <div class="container-search">
          <input type="text" placeholder="Procure Filmes , Series..." />
          <img class="lupa" src="../../public/lupa-logo.png" />
        </div>
      </div>
    </div>
  </header>
</template>
<style scoped>
* {
  color: #2b2b2b75;
}

header {
  /* z-index: 2; */
  width: 100%;
  /* position: absolute; */
  margin-bottom: 5rem;
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
  color: white;
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
a{
    text-decoration: none;
    color: white;
}
input {
  background-color: transparent;
  border: none;
  color: white;
}
input:focus {
  outline: none;
  /* background-color: red; */
}
input:focus > .container-search{
  border: 5px solid red;
}

.search-bar {
  transition: .3s ease-in-out;
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
  border: 1px solid #6b6b6b75;
  border-radius: 2em;
}

h1 {
  font-size: 1.5em;
  color: white;
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
