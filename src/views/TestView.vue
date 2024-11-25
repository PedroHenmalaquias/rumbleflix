<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'
import { useMovieStore } from '@/stores/movie';
import { useTvStore } from '@/stores/tv';
import { useGenreStore } from '@/stores/genre';
import StandardListCarousel from '@/components/StandardListCarousel.vue';
import HeroCarousel from '@/components/HeroCarousel.vue';

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
    <!-- <StandardListCarousel title="Top Movies" :itens="topMovies" /> -->
     <HeroCarousel/>
</section> 
</template>
<style scoped>
section{
    display: flex;
    flex-direction: column;
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