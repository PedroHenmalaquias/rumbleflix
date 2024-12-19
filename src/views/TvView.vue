<script setup>
import { ref, onMounted } from 'vue'
import api from '@/plugin/axios'
import { useGenreStore } from '@/stores/genre'
import { useTvStore } from '@/stores/tv';
import router from '@/router';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import Footer from '@/components/Footer.vue';

const genreStore = useGenreStore();
const tvStore = useTvStore();

// Modificar para pegar gêneros aleatórios
onMounted(async () => {
  // Pega todos os gêneros de programas de TV
  await genreStore.getAllGenres('tv');

  // Pega programas de TV com um gênero aleatório
  const randomGenreId = genreStore.genres[Math.floor(Math.random() * genreStore.genres.length)].id;
  tvStore.listTv(randomGenreId);  // Aqui, estamos chamando a função listTv com um gênero aleatório
})

const formatDate = (date) => new Date(date).toLocaleDateString('pt-BR')
const tv = ref([])

const config = {
  itemsToShow: 7,
  transition: 500,
};

function openTv(tvId) {
  router.push({ name: 'TvDetails', params: { tvId } });
}
</script>

<template>
  <h1>Programas de TV</h1>
  <div class="container-carousel">
    <Carousel v-bind="config">
      <Slide v-for="genre in genreStore.genres" :key="genre.id">
        <span @click="tvStore.listTv(genre.id)" class="genre-item">{{ genre.name }}</span>
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>

  <div class="movie-list">
    <div v-for="pr in tvStore.state.tvPrograms" :key="pr.id" class="movie-card" @click="openTv(pr.id)">
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
.container-carousel {
  width: 90%;
  margin: auto;
}

h1 {
  text-align: start;
  padding-top: 5rem;
  margin-left: 5rem;
  padding-bottom: 2rem;
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
  background-color: transparent;
  min-width: 10rem;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  align-self: center;
  color: #fff;
  border: 2px solid rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  transition: .3s ease-in-out;
}

.genre-item:hover {
  cursor: pointer;
  color: black;
  background-color: rgba(255, 255, 255, 1);
}

.movie-list {
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 2rem auto;
}

.movie-card {
  position: relative;
  width: 15rem;
  height: 20rem;
  border-radius: 0.5rem;
  margin: 0.5rem 0;
  overflow: hidden;
  box-shadow: 0 0 0.5rem #000;
}

.movie-card img {
  width: 100%;
  height: 20rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem #000;
  transition: transform 0.3s ease;
}

.movie-card:hover img {
  transform: scale(1.05); 
}

.movie-details {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 0.5rem;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.movie-card:hover .movie-details {
  transform: translateY(0); 
}

.movie-title {
  font-size: 1.1rem;
  font-weight: bold;
  line-height: 1.3rem;
  height: 3.2rem;
}

.movie-genres span {
  margin-right: 0.5rem;
  display: inline-block;
}

.movie-genres span:last-child {
  margin-right: 0;
}
</style>
