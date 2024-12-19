<script setup>
import DetailTvComponent from '@/components/DetailTvComponent.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>  
<DetailTvComponent :tvId="$route.params.tvId" />
<Footer />
</template>

<style scoped>
</style>

</style>