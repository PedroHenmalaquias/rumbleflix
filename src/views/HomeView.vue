<script setup>
import headerVue from '@/components/header.vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

const config = {
  autoplay: 5000,
  wrapAround: true,
  pauseAutoplayOnHover: true,
  mouseDrag: false,
  touchDrag: false,
  transition: 1500,
}
</script>
<template>
  <headerVue />
  <Carousel v-bind="config">
    <Slide v-for="slide in 5" :key="slide">
        
      <div class="carousel__item">{{ slide }}</div>
    </Slide>
  </Carousel>
</template>
<style scoped>
.carousel__item {

    width: 100%;
    height: 100vh;
    overflow: hidden;
}
</style>
