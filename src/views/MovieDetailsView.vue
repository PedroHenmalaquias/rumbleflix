<script setup>
import DetailComponent from '@/components/DetailMovieComponent.vue';
import Footer from '@/components/FooterComp.vue';
</script>

<template>  
<DetailComponent :movieId="$route.params.movieId" />
<Footer />
</template>

<style scoped>
</style>