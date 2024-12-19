<script setup>
import { defineProps, onMounted, ref } from 'vue'
import { useTvStore } from '@/stores/tv'
import DifferentFilmGenresCarrousel from './DifferentFilmGenresCarrousel.vue'

const tvStore = useTvStore()
const props = defineProps({
  tvId: {
    type: Number,
    required: true,
  },
})
function formatTime(time) {
  const hours = Math.floor(time / 60)
  const minutes = time % 60
  return `${hours}h ${minutes}m`
}
const currentGenres = []
const recomendedTv = ref(null)
onMounted(async () => {
  await tvStore.getTvDetail(props.tvId)
  for (const genre of tvStore.currentTv.genres) {
    currentGenres.push(genre.id)
  }
  recomendedTv.value = await tvStore.listTv(currentGenres.join(','))
})
</script>
<template>
  <div class="filter"></div>
  <section>
    <div class="background">
      <img :src="`https://image.tmdb.org/t/p/original/${tvStore.currentTv.backdrop_path}`" alt="" />
    </div>
    <div class="info">
      <h1>{{ tvStore.currentTv.name }}</h1>
      <div class="rowCategories">
        <p v-for="genre in tvStore.currentTv.genres" :key="genre.id">{{ genre.name }}</p>
        <p>{{ formatTime(tvStore.currentTv.runtime) }}</p>
      </div>
    </div>
    <div class="description">
      <h2>{{ tvStore.currentTv.overview }}</h2>
    </div>
    <div class="actionButtons">
      <div class="primaryButtons">
        <button class="white"><img src="/public/assistirTest.svg" alt="" />Assistir Agora</button>
        <button class="grey"><img src="/public/list.svg" alt="" />Adicionar à lista</button>
      </div>
      <div class="secundaryButttons">
        <button class="grey"><img src="/public/curtir.svg" alt="" /></button>
        <button class="grey"><img src="/public/baixar.svg" alt="" /></button>
        <button class="grey"><img src="/public/compartilhar.svg" alt="" /></button>
      </div>
    </div>
  </section>
  <h2 class="recomends">Recomendamos também</h2>
  <DifferentFilmGenresCarrousel :itens="tvStore.state.tvPrograms" />
</template>
<style scoped>
@import url(/src/assets/DetailComp.css);
</style>
