<script setup>
import { ref, defineProps } from 'vue'
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

const config = {
  itemsToShow: 4.5,
  wrapAround: false,
  snapAlign: 'start',
  gap: 10,
};

defineProps({
  title: String,
  itens: Array,
  })
</script>
<template>
    <section>
        <h2>{{ title }}</h2>
    <Carousel v-bind="config">
    <Slide v-for="item in itens" :key="item.id">
      <span><img :src="`https://image.tmdb.org/t/p/w780${item.poster_path}`" alt=""></span>
    </Slide>
    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</section>
</template>
<style scoped>
section{
    min-height: 30vh;
    width: 95%;
    margin: 0 auto;
    display: flex;
}
h2{
    font-size: 1.5rem;
    color: #fff;
    margin-left: 2.5%;
    margin-bottom: 1.5rem;
}
span{
    /* margin-right: 1rem; */
    width: 100%;
    height: 30vh;
}
img{
    width: 100%;
    height: 30vh;
    border-radius: .5rem;
}
</style>