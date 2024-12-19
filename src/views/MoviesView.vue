<script setup>
import { ref, onMounted } from 'vue'
import { useMovieStore } from '@/stores/movie';
// import { useTvStore } from '@/stores/tv';
import { useGenreStore } from '@/stores/genre';
import 'vue3-carousel/dist/carousel.css';
import router from '@/router';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
// import HeroCarousel from '@/components/HeroCarousel.vue';
// import DifferentFilmGenresCarrousel from '@/components/DifferentFilmGenresCarrousel.vue';
// import { useGenreStore } from '@/stores/genre';

const movieStore = useMovieStore()
const genreStore = useGenreStore()
onMounted(async () => {
  //   isLoading.value = true;
  await genreStore.getAllGenres('movie')
  //   isLoading.value = false;
})
const movies = ref([]);
function list(id) {
  movies.value = movieStore.listMovies({with_genres: id})
}
const config = {
  itemsToShow: 7,  
  transition: 500,
};
function openMovie(movieId) {
  router.push({ name: 'MovieDetails', params: { movieId } });
}
</script>
<template>
    <h1>Programas de TV</h1>
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
    <!-- <ul class="genre-list">
      <li
        v-for="genre in genreStore.genres"
        :key="genre.id"
        @click="tvStore.listTv(genre.id)"
        class="genre-item"
      >
        {{ genre.name }}
      </li>
    </ul> -->
    <div class="movie-list">
      <div v-for="pr in movieStore.state.moviesWithGenre" :key="pr.id" class="movie-card" @click="openMovie(pr.id)">
        <img :src="`https://image.tmdb.org/t/p/w500${pr.poster_path}`" :alt="pr.title" />
        <div class="movie-details">
          <p class="movie-title">{{ pr.title }}</p>
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
.container-carousel{
  width: 90%;
  margin: auto;
}
h1 {
  text-align: center;
  padding-top: 5rem;
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
  background-color:transparent;
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
  /* box-shadow: 0 0 0.5rem #5d6424; */
}
.movie-list {
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 2rem auto;
}

.movie-card {
  width: 15rem;
  height: 30rem;
  border-radius: 0.5rem;
  margin: .5rem 0;
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