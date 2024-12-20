<script setup>
import { ref, onMounted } from 'vue'
import { useGenreStore } from '@/stores/genre'
import { useTvStore } from '@/stores/tv'
import router from '@/router'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import Footer from '@/components/FooterComp.vue'

const genreStore = useGenreStore()
const tvStore = useTvStore()
onMounted(async () => {
  await genreStore.getAllGenres('tv')
  const randomGenreId = genreStore.genres[Math.floor(Math.random() * genreStore.genres.length)].id
  tvStore.listTv(randomGenreId)
})
const formatDate = (date) => new Date(date).toLocaleDateString('pt-BR')
const config = {
  itemsToShow: 7,
  transition: 500,
}
function openTv(tvId) {
  router.push({ name: 'TvDetails', params: { tvId } })
}
</script>
<template>
  <h1>PROGRAMAS DE TV</h1>
  <div class="container-carousel">
    <Carousel v-bind="config">
      <Slide v-for="genre in genreStore.genres" :key="genre.id">
        <span @click="tvStore.listTv(genre.id);genreStore.setCurrentGenreId(genre.id)" :class="{ active: genre.id === genreStore.currentGenreId }" class="genre-item" >{{ genre.name }}</span>
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
  <div class="movie-list">
    <div
      v-for="pr in tvStore.state.tvPrograms"
      :key="pr.id"
      class="movie-card"
      @click="openTv(pr.id)"
    >
      <img :src="`https://image.tmdb.org/t/p/w500${pr.poster_path}`" :alt="pr.name" />
      <div class="movie-details">
        <p class="movie-title">{{ pr.name }}</p>
        <p class="movie-release-date">{{ formatDate(pr.first_air_date) }}</p>
        <p class="movie-genres">
          <span v-for="genre_id in pr.genre_ids" :key="genre_id" @click="listMovies(genre_id)">
            {{ genreStore.getGenreName(genre_id) }}
          </span>
        </p>
      </div>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
@import url(/src/assets/ListComp.css);
</style>
