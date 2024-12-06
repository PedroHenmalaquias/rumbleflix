<script setup>
import DetailComponent from '@/components/DetailComponent.vue';
</script>

<template>  
<DetailComponent :movieId="$route.params.movieId" />
</template>

<style scoped>
</style>