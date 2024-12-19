<script setup>
import { defineProps } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const config = {
  itemsToShow: 6,
  transition: 500,
}
defineProps({
  title: String,
  itens: Array,
})
</script>
<template>
  <div class="containerCarousel">
    <h2>{{ title }}</h2>
    <Carousel v-bind="config">
      <Slide v-for="item in itens" :key="item.id">
        <span><img :src="`https://image.tmdb.org/t/p/w780${item.poster_path}`" alt="" /></span>
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>
<style scoped>
.containerCarousel {
  min-height: 30vh;
  width: 95%;
  margin: 0 auto;
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
}
h2 {
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 1rem;
}
span {
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
}
img {
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
}
.carousel__slide {
  padding: 5;
  height: 20rem;
  color: black;
  border-radius: 0.5rem;
}
.carousel__viewport {
  perspective: 2000px;
}
.carousel__track {
  transform-style: preserve-3d;
}
.carousel__slide--sliding {
  transition: 0.5s;
}
.carousel__slide {
  opacity: 0.9;
  transform: scale(0.9);
}
.carousel__slide--active ~ .carousel__slide {
  transform: scale(0.9);
}
.carousel__slide--prev {
  opacity: 1;
  transform: scale(0.95);
}
.carousel__slide.carousel__slide--next {
  opacity: 1;
  transform: scale(0.9);
}
.carousel__slide--active {
  opacity: 1;
}
</style>
