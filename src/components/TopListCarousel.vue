<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

const config = {
  itemsToShow: 3.95,  // Aproximadamente 3.95 slides visíveis
  wrapAround: true,    // Carrossel com loop
  transition: 500,     // Transição suave
};
</script>

<template>
  <Carousel v-bind="config">
    <Slide v-for="slide in 20" :key="slide">
      <div class="carousel__item">{{ slide }}</div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<style>
/* Largura fixa para todos os slides */
.carousel__slide {
  width: 20rem !important;  /* Largura fixa para todos os slides */
  padding: 5px;
  background-color: aqua;
  height: 25rem;
  flex-shrink: 0;  /* Evita que o slide encolha */
}

/* Estilo para o slide ativo (aqui você quer que seja o slide da esquerda) */
.carousel__slide--active {
  opacity: 1;
  transform: scale(1);  /* O slide ativo no tamanho original */
  width: 20rem;  /* A largura do slide ativo é a mesma que os outros */
}

/* Slide anterior */
.carousel__slide--prev {
  opacity: 1;
  transform: scale(1.05);  /* Dá destaque ao slide anterior */
  width: 20rem;  /* Largura igual ao slide ativo */
}

/* Slide próximo */
.carousel__slide.carousel__slide--next {
  opacity: 0.8;
  transform: scale(0.95);  /* Dá um efeito de profundidade ao slide seguinte */
  width: 20rem;  /* Largura igual ao slide ativo */
}

/* Para os slides à frente do ativo (não necessariamente o próximo ou anterior) */
.carousel__slide--active ~ .carousel__slide {
  opacity: 0.7;
  transform: scale(0.9);  /* Diminui a escala dos slides à frente do ativo */
  width: 15rem;  /* Menor largura para os outros slides */
}

/* Ajuste da área visível (viewport) do carrossel */
.carousel__viewport {
  width: 100%;
  overflow: hidden;  /* Garante que apenas os slides visíveis sejam mostrados */
}

/* Responsividade - ajuste para telas menores */
@media (max-width: 768px) {
  .carousel__slide {
    width: 15rem;  /* Ajuste para telas menores */
  }
}

@media (max-width: 480px) {
  .carousel__slide {
    width: 12rem;  /* Ajuste ainda mais para telas pequenas */
  }
}
</style>