<script setup>
import DetailComponent from '@/components/DetailMovieComponent.vue';
</script>

<template>  
<DetailComponent :movieId="$route.params.movieId" />
</template>

<style scoped>
</style>