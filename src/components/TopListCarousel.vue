<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

const config = {
  itemsToShow: 6,
  // wrapAround: true,  
  transition: 500,
};
</script>

<template>
  <Carousel v-bind="config">
    <Slide v-for="slide in 10" :key="slide">
      <div class="carousel__item">{{ slide }}</div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<style>
.carousel__slide {
  padding: 5;
  height: 20rem;
  color: black;
  background-color: white;
  /* width: 15rem !important; */
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
  /* transform: scale(0.9); */
}
</style>
