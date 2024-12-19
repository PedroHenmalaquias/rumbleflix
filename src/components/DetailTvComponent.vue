<script setup>
import { defineProps, onMounted, ref } from 'vue';
import { useTvStore } from '@/stores/tv';
import StandardListCarousel from './StandardListCarousel.vue';

const tvStore = useTvStore();
const props = defineProps({
    tvId:{
      type: Number,
      required: true,
    },
  });
function formatTime(time) {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    return `${hours}h ${minutes}m`;
}
const currentGenres = []
const recomendedTv = ref(null);
  onMounted(async () => {
    await tvStore.getTvDetail(props.tvId);
    for (const genre of tvStore.currentTv.genres) {
  currentGenres.push(genre.id);  
}
    recomendedTv.value = await tvStore.listTv(currentGenres.join(','))
  });
</script>
<template>
    <div class="filter"></div>
    <section>
        <div class="background"><img :src="`https://image.tmdb.org/t/p/original/${tvStore.currentTv.backdrop_path}`" alt=""></div>
        <div class="info"><h1>{{ tvStore.currentTv.name }}</h1>
            <div class="rowCategories"><p v-for="genre in tvStore.currentTv.genres" :key="genre.id">{{ genre.name }}</p><p>{{ formatTime(tvStore.currentTv.runtime) }}</p></div>
            <!-- {{ tvStore.currentTv }} -->
        </div>
        <div class="actionButtons">
            <div class="primaryButtons">
                <button class="white"><img src="/public/assistirTest.svg" alt="">Assistir Agora</button>
                <button class="grey"><img src="/public/list.svg" alt="">Adicionar à lista</button>
            </div>
            <div class="secundaryButttons">
            <button class="grey"><img src="/public/curtir.svg" alt=""></button>
            <button class="grey"><img src="/public/baixar.svg" alt=""></button>
            <button class="grey"><img src="/public/compartilhar.svg" alt=""></button>
            </div>
        </div>
    </section>
    <div class="description"><h2>{{ tvStore.currentTv.overview }}</h2></div>
    <h2 class="recomends">Recomendamos também</h2>
    <StandardListCarousel :itens="recomendedTv" />
</template>
<style scoped>
.filter {
  background: linear-gradient(to bottom, rgba(0, 0, 0,0.4 ), rgba(30, 30, 30, 1));
  z-index: 2;
  position: absolute;
  width: 100%;
  height: 100vh;
}
.recomends{
  margin-left: 5%;
  margin-top: 2rem;
}
section {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: start;
}
.background{
    width: 100%;
    height: 100%;
    z-index: 1;
    position: absolute;
}
.background > img{
    width: 100%;
    height: 100%;
}
.info{
    display: flex;
    width: 90%;
    margin: 1rem auto;
    z-index: 3;
    flex-direction: column;
    align-items: start;
    color: white;
}
.info h1{
    font-size: 2rem;
}
.rowCategories{
    display: flex;
    width: 100%;
    justify-content: start;
    gap: 1rem;
}
.actionButtons{
    display: flex;
    height: 10%;
    width: 90%;
    justify-content: space-between;
    z-index: 3;
    margin: 0 auto;
}
.primaryButtons{
    display: flex;
    width: 50%;
    gap: 1rem;
}
button{
    display: flex;
    border: none;
    height: 3rem;
    width: 30%;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    padding: .5rem;
    border-radius: 1rem;
    transition: .3s ease-in-out;
    cursor: pointer;
}
button.white{
    background-color: white;
    color: black;
}
button.grey{
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
}
button.white:hover{
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
}
button.grey:hover{
    background-color: rgba(255, 255, 255, 0.5);
    color: black;
}
button img{
    width: 1rem;
}
.secundaryButttons{
    display: flex;
    justify-content: end;
    width: 50%;
    gap: 1rem;
}
.secundaryButttons button{
  width: 7%;
  border-radius: 50%;
}
.description{
    width: 90%;
    margin: 1rem auto 3rem auto;
    color: white;
}
.description h2{
    font-size: 1rem;
}
</style>