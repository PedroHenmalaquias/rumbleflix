<script setup>
import { ref, defineProps, onMounted } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { useGenreStore } from '@/stores/genre.js'
import { useRouter } from 'vue-router'

const router = useRouter()
const genreStore = useGenreStore()
defineProps({
  title: String,
  itens: Array,
})
const isLoading = ref(false)
onMounted(async () => {
  isLoading.value = true
  await genreStore.getAllGenres('')
  isLoading.value = false
})
const config = {
  autoplay: 5000,
  transition: 1500,
}
function openMovie(movieId) {
  router.push({ name: 'MovieDetails', params: { movieId } })
}
</script>
<template>
  <Carousel v-bind="config">
    <Slide v-for="item in itens.slice(0, 5)" :key="item.id">
      <div class="container">
        <div class="background">
          <img :src="`https://image.tmdb.org/t/p/original/${item.backdrop_path}`" alt="" />
        </div>
        <div class="content">
          <h1>{{ item.title }}</h1>
          <span class="rowCategories">
            <p v-for="genre in item.genre_ids" :key="genre.id">
              {{ genreStore.getGenreName(genre) }}
            </p>
          </span>
          <span class="description">
            <p>{{ item.overview }}</p>
          </span>
          <span class="actionButtons">
            <button class="white" @click="openMovie(item.id)">
              <img src="/public/assistirTest.svg" alt="" />Assistir Agora
            </button>
            <button @click="openMovie(item.id)">
              <img src="/public/verMaisTest.svg" alt="" />Ver mais
            </button>
          </span>
        </div>
      </div>
    </Slide>
    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>
<style scoped>
.container {
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
}
.background {
  width: 100%;
  height: 100%;
  z-index: 1;
  position: absolute;
}
.background > img {
  width: 100%;
  height: 100%;
  filter: brightness(0.4);
}
h1 {
  font-size: 2rem;
  color: white;
}
.content {
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 1rem;
  width: 40%;
  background: none;
}
.rowCategories {
  display: flex;
  gap: 1rem;
  border-radius: 1rem;
}
.description {
  padding: 1rem;
  border-radius: 1rem;
}
.description p {
  text-align: center;
}
.actionButtons {
  display: flex;
  width: 100%;
  gap: 1rem;
  padding: 1rem;
  border-radius: 1rem;
}
.actionButtons > button {
  display: flex;
  align-items: center;
  width: 50%;
  gap: 1rem;
  padding: 1rem;
  border-radius: 5rem;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  transition: 0.5s;
  cursor: pointer;
}
.actionButtons > button:hover {
  background-color: #fff;
  color: black;
}
.actionButtons > button.white {
  background-color: #fff;
  color: black;
}
.actionButtons > button.white:hover {
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
}
.actionButtons > button img {
  width: 1.5rem;
}
.white {
  color: #fff;
}
</style>
