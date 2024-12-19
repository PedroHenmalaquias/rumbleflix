<script setup>
import { ref, onMounted } from 'vue'
import { useMovieStore } from '@/stores/movie';
import { useGenreStore } from '@/stores/genre';
import 'vue3-carousel/dist/carousel.css';
import router from '@/router';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import Footer from '@/components/FooterComp.vue';

const movieStore = useMovieStore();
const genreStore = useGenreStore();
onMounted(async () => {
  await genreStore.getAllGenres('movie');
  loadRandomGenreMovies();
});
const movies = ref([]);
function list(id) {
  movies.value = movieStore.listMovies({ with_genres: id });
}
function loadRandomGenreMovies() {
  if (genreStore.genres.length > 0) {
    const randomGenre = genreStore.genres[Math.floor(Math.random() * genreStore.genres.length)];
    movieStore.getMoviesWithGenre(randomGenre.id);
  };
};
const config = {
  itemsToShow: 7,
  transition: 500,
};
const formatDate = (date) => new Date(date).toLocaleDateString('pt-BR');
function openMovie(movieId) {
  router.push({ name: 'MovieDetails', params: { movieId } });
};
</script>
<template>
  <h1>FILMES</h1>
  <div class="container-carousel">
    <Carousel v-bind="config">
      <Slide v-for="genre in genreStore.genres" :key="genre.id">
        <span @click="movieStore.getMoviesWithGenre(genre.id)" class="genre-item">{{ genre.name }}</span>
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
  <div class="movie-list">
    <div 
      v-for="pr in movieStore.state.moviesWithGenre" 
      :key="pr.id" 
      class="movie-card" 
      @click="openMovie(pr.id)"
    >
      <img :src="`https://image.tmdb.org/t/p/w500${pr.poster_path}`" :alt="pr.title" />
      <div class="movie-details">
        <p class="movie-title">{{ pr.title }}</p>
        <p class="movie-release-date">{{ formatDate(pr.release_date) }}</p>
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
