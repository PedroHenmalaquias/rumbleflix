<script setup>
import { ref, onMounted } from 'vue'
import { useMovieStore } from '@/stores/movie';
import { useTvStore } from '@/stores/tv';
import HeroCarousel from '@/components/HeroCarousel.vue';
import DifferentFilmGenresCarrousel from '@/components/DifferentFilmGenresCarrousel.vue';
import TransitionShadow from '@/components/TransitionShadow.vue';
import Footer from '@/components/Footer.vue';

const movieStore = useMovieStore()
const topMovies = ref([])
const topMovies1989 = ref([]) 
onMounted(async () => {
    topMovies.value = await movieStore.listMovies({sort_by: 'popularity.desc'})
    topMovies1989.value = await movieStore.listMovies({year: '1989'})
})
</script>
<template>
<section>
     <HeroCarousel :itens="topMovies"/>
     <TransitionShadow />
     <DifferentFilmGenresCarrousel :itens="topMovies1989" />
     <DifferentFilmGenresCarrousel :itens="topMovies"/>
     <DifferentFilmGenresCarrousel :itens="topMovies1989"/>
     <DifferentFilmGenresCarrousel :itens="topMovies"/>
     <Footer />
</section> 
</template>
<style scoped>
section{
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #111111;
}
.top{
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    width: 100%;
    margin: 1rem 0;
}
</style>