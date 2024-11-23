<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'
import { useMovieStore } from '@/stores/movie';
import { useTvStore } from '@/stores/tv';
import { useGenreStore } from '@/stores/genre';

const genreStore = useGenreStore()
const movieStore = useMovieStore()
const tvStore = useTvStore()
const topMovies = ref([])
const topTv = ref([])
const topMovies1989 = ref([])
const topTv1989 = ref([])
const tvCategories = ref([])
const movieCategories = ref([])
const animationMovives = ref([])
const animationId = ref(0)
onMounted(async () => {
    topMovies.value = await movieStore.listMovies({sort_by: 'popularity.desc'})
    topMovies1989.value = await movieStore.listMovies({year: '1989'})
    topTv.value = await tvStore.listTv({year: '1989'})
    topTv1989.value = await tvStore.listTv({sort_by: 'popularity.desc'})
    tvCategories.value = await genreStore.getAllGenres('tv')
    movieCategories.value = await genreStore.getAllGenres('movie')
    animationId.value = await genreStore.getGenreId("Animation")
    console.log(`féeeee`,  animationId.value)
    animationMovives.value = await movieStore.listMovies({with_genres: 16})
})
</script>
<template><section>
    <h1>FILMES - top</h1>
    <div class="top"><span v-for="movie in topMovies" :key="movie.id">{{ movie.title }}</span></div>
    <h1>FILMES - animação</h1>
    <div class="top"><span v-for="movie in topMovies1989" :key="movie.id">
        {{ movie }}
    </span></div>

    <h1>TV</h1>
    <div class="top"><span v-for="tv in topTv" :key="tv.id">{{ tv }}</span></div>
    <h1>TV - top</h1>
    <div class="top"><span v-for="tv in topTv1989" :key="tv.id">{{ tv }}</span></div>
    <hr>
    <h1>Categorias de filmes</h1>
    <div class="top"><span v-for="category in movieCategories" :key="category.id">{{ category }}</span></div>
    <h1>Categorias de TV</h1>
    <div class="top"><span v-for="category in tvCategories" :key="category.id">
        {{ category }}
    </span></div>
    <br>
    <hr><hr><hr>
    <h1>FILMES DE ANIMAÇÃO</h1>
    <div class="top"><span v-for="movie in animationMovives" :key="movie.id">{{ movie.title }}</span></div>
</section>
</template>
<style scoped>
section{
    display: flex;
    flex-direction: column;
    margin-top: 10rem;
    width: 100%;
}
.top{
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    width: 100%;
    margin: 1rem 0;
}

</style>