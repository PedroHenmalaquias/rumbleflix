<script setup>
import { ref, onMounted } from 'vue'
import api from '@/plugin/axios'
import { useGenreStore } from '@/stores/genre'
import { useTvStore } from '@/stores/tv'

const genreStore = useGenreStore();
const tvStore = useTvStore();

onMounted(async () => {
  //   isLoading.value = true;
  await genreStore.getAllGenres('tv')
  //   isLoading.value = false;
})
// const getGenreName = (id) => genres.value.find((genre) => genre.id === id).name
const formatDate = (date) => new Date(date).toLocaleDateString('pt-BR')
const tv = ref([])

// const listTv = async (genreId) => {
//   const response = await api.get('discover/tv', {
//     params: {
//       with_genres: genreId,
//       language: 'pt-BR',
//     },
//   })
//   tv.value = response.data.results
// }
</script>

<template>
  <h1>Programas de TV</h1>
  <ul class="genre-list">
    <li
      v-for="genre in genreStore.genres"
      :key="genre.id"
      @click="tvStore.listTv(genre.id)"
      class="genre-item"
    >
      {{ genre.name }}
    </li>
  </ul>
  <div class="movie-list">
    <div v-for="pr in tvStore.state.tvPrograms" :key="pr.id" class="movie-card">
      <img :src="`https://image.tmdb.org/t/p/w500${pr.poster_path}`" :alt="pr.name" />
      <div class="movie-details">
        <p class="movie-title">{{ pr.name }}</p>
        <p class="movie-release-date">{{ pr.release_date }}</p>
        <p class="movie-genres">
          <span v-for="genre_id in pr.genre_ids" :key="genre_id" @click="listMovies(genre_id)">
            {{ genreStore.getGenreName(genre_id) }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  padding-top: 5rem;
}
.genre-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  list-style: none;
  padding: 0;
}

.genre-item {
  background-color: #5d6424;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  align-self: center;
  color: #fff;
  display: flex;
  justify-content: center;
}

.genre-item:hover {
  cursor: pointer;
  background-color: #7d8a2e;
  box-shadow: 0 0 0.5rem #5d6424;
}
.movie-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.movie-card {
  width: 15rem;
  height: 30rem;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 0 0.5rem #000;
}

.movie-card img {
  width: 100%;
  height: 20rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem #000;
}

.movie-details {
  padding: 0 0.5rem;
}

.movie-title {
  font-size: 1.1rem;
  font-weight: bold;
  line-height: 1.3rem;
  height: 3.2rem;
}
</style>
