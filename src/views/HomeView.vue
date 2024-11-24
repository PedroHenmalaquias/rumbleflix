<script setup>
import { ref, onMounted } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import { useMovieStore } from '@/stores/movie'
import { useTvStore } from '@/stores/tv'

// const genreStore = useGenreStore()
const movieStore = useMovieStore()
const tvStore = useTvStore()
const topMovies = ref([])
const topTv = ref([])
const actionMovies = ref([])
const romanceMovies = ref([])
const comedyMovies = ref([])
onMounted(async () => { 
    topMovies.value = await movieStore.listMovies({sort_by: 'popularity.desc'})
    topTv.value = await tvStore.listTv({sort_by: 'popularity.desc'})
    actionMovies.value = await movieStore.listMovies({with_genres: 28})
    romanceMovies.value = await movieStore.listMovies({with_genres: 10749})
    comedyMovies.value = await movieStore.listMovies({with_genres: 35})
})
const config = {
  autoplay: 5000,
  wrapAround: true,
  pauseAutoplayOnHover: true,
  mouseDrag: false,
  touchDrag: false,
  transition: 1500,
}
</script>
<template>
  <div></div>
    <!-- <Carousel v-bind="config">
    <Slide v-for="slide in 5" :key="slide">
        
      <div class="carousel__item">{{ slide }}</div>
    </Slide>
  </Carousel>
  <div class="topList">
    <h2>TOP 10 - FILMES HOJE </h2>
    <div class="list"><span v-for="movie in topMovies.slice(0, 10)" :key="movie.id">
        {{ movie.title }}
    </span></div>
  </div>
  <div class="topList">
    <h2>TOP 10 - SÉRIES HOJE </h2>
     <div class="list"><span v-for="tv in topTv.slice(0, 10)" :key="tv.id">{{ tv.name }}</span></div>
  </div>
  <div class="topList">
    <h2>AÇÃO</h2>
    <div class="list"><span v-for="movie in actionMovies.slice(0, 15)" :key="movie.id">{{ movie.title }}</span></div>
  </div>
  <div class="topList">
    <h2>Romance</h2>
    <div class="list"><span v-for="movie in romanceMovies.slice(0, 15)" :key="movie.id">{{ movie.title }}</span></div>
  </div>
  <div class="topList">
    <h2>Comédia</h2>
    <div class="list"><span v-for="movie in comedyMovies.slice(0, 15)" :key="movie.id">{{ movie.title }}</span></div>
  </div> -->
</template>
<style scoped>
.topList {
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
}
.list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
}
.carousel__item {
    width: 100%;
    height: 100vh;
    overflow: hidden;
}
</style>
