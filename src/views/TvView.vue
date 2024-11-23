<script setup>
import { ref, onMounted } from 'vue'
import api from '@/plugin/axios'
import Loading from 'vue-loading-overlay'
import { useGenreStore } from '@/stores/genre'
import { useRouter } from 'vue-router'
const router = useRouter()

function openTv(tvId) {
  router.push({ name: 'TvDetails', params: { tvId } });
}
const genreStore = useGenreStore()
const isLoading = ref(false)
const genres = ref([])

onMounted(async () => {
  isLoading.value = true
  await genreStore.getAllGenres('tv')
  isLoading.value = false
})
const tvPrograms = ref([])
const formatDate = (date) => new Date(date).toLocaleDateString('pt-BR')
const listTvPrograms = async (genreId) => {
  genreStore.setCurrentGenreId(genreId);
  isLoading.value = true
  const response = await api.get('discover/tv', {
    params: {
      with_genres: genreId,
      language: 'pt-BR',
    },
  })
  tvPrograms.value = response.data.results
  isLoading.value = false
}
</script>

<template>
  <h1>Programas de TV</h1>
  <ul class="genre-list">
    <li
      v-for="genre in genreStore.genres"
      :key="genre.id"
      @click="listTvPrograms(genre.id)"
      class="genre-item"
      :class="{ active: genre.id === genreStore.currentGenreId }"
    >
      {{ genre.name }}
    </li>
  </ul>
  <loading v-model:active="isLoading" is-full-page />
  <div class="tv-list">
    <div v-for="program in tvPrograms" :key="program.id" class="tv-card">
      <img :src="`https://image.tmdb.org/t/p/w500${program.poster_path}`" :alt="program.name" @click="openTv(program.id)"/>
      <div class="tv-details">
        <p class="tv-title">{{ program.name }}</p>
        <p class="tv-release-date">{{ formatDate(program.first_air_date) }}</p>
        <p class="tv-genres">
          <span v-for="genre_id in program.genre_ids" :key="genre_id" @click="listMovies(genre_id)" :class="{ active: genre_id === genreStore.currentGenreId }">
            {{ genreStore.getGenreName(genre_id) }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
.tv-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.tv-card {
  width: 15rem;
  height: 30rem;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 0 0.5rem #000;
}

.tv-card img {
  width: 100%;
  height: 20rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem #000;
}

.tv-details {
  padding: 0 0.5rem;
}

.tv-title {
  font-size: 1.1rem;
  font-weight: bold;
  line-height: 1.3rem;
  height: 3.2rem;
}
.active {
  background-color: #67b086;
  font-weight: bolder;
}

.movie-genres span.active {
  background-color: #abc322;
  color: #000;
  font-weight: bolder;
}
</style>
