<script setup>
import { ref, onMounted } from 'vue'
import { useMovieStore } from '@/stores/movie';
import HeroCarousel from '@/components/HeroCarousel.vue';
import DifferentFilmGenresCarrousel from '@/components/DifferentFilmGenresCarrousel.vue';
import TransitionShadow from '@/components/TransitionShadow.vue';
import Footer from '@/components/FooterComp.vue';

const movieStore = useMovieStore()
const topMovies = ref([])
const mostVotedMovies = ref([])
const movies2000 = ref([])
const movies1990 = ref([]) 
const movies1980 = ref([])
onMounted(async () => {
    topMovies.value = await movieStore.listMovies({sort_by: 'popularity.desc'})
    movies1990.value = await movieStore.listMovies({year: '1990'})
    movies2000.value = await movieStore.listMovies({year: '2000'})
    mostVotedMovies.value = await movieStore.listMovies({sort_by: 'vote_count.desc'})
    movies1980.value = await movieStore.listMovies({year: '1980', include_adult: 'false'})
})
</script>
<template>
<section>
     <HeroCarousel :itens="topMovies"/>
     <TransitionShadow />
     <DifferentFilmGenresCarrousel :itens="mostVotedMovies" :title="`Mais Votados`" />
     <DifferentFilmGenresCarrousel :itens="movies1980" :title="`Década de 80`"/>
     <DifferentFilmGenresCarrousel :itens="movies1990" :title="`Década de 90`"/>
     <DifferentFilmGenresCarrousel :itens="movies2000" :title="`Década de 2000`"/>
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