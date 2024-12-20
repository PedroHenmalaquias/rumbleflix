<script setup>
import { defineProps, onMounted, ref } from 'vue'
import { useMovieStore } from '@/stores/movie'
import DifferentFilmGenresCarrousel from './DifferentFilmGenresCarrousel.vue'

const movieStore = useMovieStore()
const props = defineProps({
  movieId: {
    type: Number,
    required: true,
  },
})
function formatTime(time) {
  const hours = Math.floor(time / 60)
  const minutes = time % 60
  return `${hours}h ${minutes}m`
}
const currentGenres = []
const recomendedMovies = ref(null)
onMounted(async () => {
  await movieStore.getMovieDetail(props.movieId)
  for (const genre of movieStore.currentMovie.genres) {
    currentGenres.push(genre.id)
  }
  recomendedMovies.value = await movieStore.listMovies({ with_genres: currentGenres.join(', ') })
})
</script>
<template>
  <div class="filter"></div>
  <section>
    <div class="background">
      <img
        :src="`https://image.tmdb.org/t/p/original/${movieStore.currentMovie.backdrop_path}`" alt=""/>
    </div>
    <div class="info">
      <h1>{{ movieStore.currentMovie.title }}</h1>
      <div class="rowCategories">
        <p v-for="genre in movieStore.currentMovie.genres" :key="genre.id">{{ genre.name }}</p>
        <p>{{ formatTime(movieStore.currentMovie.runtime) }}</p>
      </div>
    </div>
    <div class="description">
      <h2>{{ movieStore.currentMovie.overview }}</h2>
    </div>
    <div class="actionButtons">
      <div class="primaryButtons">
        <button class="white"><img src="/public/assistirTest.svg" alt="" />Assistir Agora</button>
        <button class="grey"><img src="/public/list.svg" alt="" />Adicionar à lista</button>
      </div>
      <div class="secundaryButttons">
        <button class="grey"><img src="/public/curtir.svg" alt="" /></button>
        <button class="grey"><img src="/public/baixar.svg" alt="" /></button>
        <button class="grey"><img src="/public/compartilhar.svg" alt="" /></button>
      </div>
    </div>
  </section>
  <h2 class="recomends">Recomendamos também</h2>
  <DifferentFilmGenresCarrousel :itens="recomendedMovies" />
</template>
<style scoped>
@import url(/src/assets/DetailComp.css);
</style>
