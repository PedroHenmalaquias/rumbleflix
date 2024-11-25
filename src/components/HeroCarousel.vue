<script setup>
import { ref, defineProps } from 'vue'
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { useGenreStore } from '@/stores/genre.js'

const genreStore = useGenreStore()
defineProps({
  title: String,
  itens: Array,
  })


</script>
<template>
    <Carousel>
    <Slide v-for="item in itens.slice(0, 5)" :key="item.id">
        <div class="container">
            <div class="background"><img :src="`https://image.tmdb.org/t/p/original/${item.poster_path}`" alt=""></div>
        <div class="content">
            <span class="rowCategories"><p v-for="genre in item.genre_ids" :key="genre.id">{{ genre.name }}</p></span>
            <span class="description"><p>{{ item.overview }}</p></span>
            <span class="actionButtons">
                <button class="white"><img src="/public/assistirTest.svg" alt="">Assistir Agora {{ item.id }}</button>
                <button><img src="/public/verMaisTest.svg" alt="">Ver mais</button>
            </span>
        </div>
    </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
    <!-- <div class="container">
        <div class="content">
            <span class="rowCategories"><p>Ação</p><p>Herois</p><p>Drama</p></span>
            <span class="description"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eaque inventore impedit, voluptatibus quos eum aliquam. Commodi eligendi quos, beatae, consectetur explicabo, iusto nobis cupiditate reiciendis sed quaerat ab non.</p></span>
            <span class="actionButtons">
                <button class="white"><img src="/public/assistirTest.svg" alt="">Assistir Agora</button>
                <button><img src="/public/verMaisTest.svg" alt="">Ver mais</button>
            </span>
        </div>
    </div> -->
</template>
<style scoped>
.container{
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    /* background-image: url('/public/testHero.svg'); */
    /* background-size: auto; */
    /* background-position:bottom; */
    /* background-repeat: no-repeat; */
}
.background{
    width: 100%;
    height: 100%;
    z-index: 1;
    position: absolute;
}
.background > img{
    width: 100%;
    height: 100%;
    /* object-fit: cover; */
}
.content{
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    border-radius: 1rem;
    width: 30%;
    background: none;
}
.rowCategories{
    display: flex;
    gap: 1rem;
    padding: 1rem;
    border-radius: 1rem;
    /* background-color: rgba(0, 0, 0, 0.5); */
}
.description{
    padding: 1rem;
    border-radius: 1rem;
    /* background-color: rgba(0, 0, 0, 0.5); */
}
.description p{
    text-align: center;
}
.actionButtons{
    display: flex;
    width: 100%;
    gap: 1rem;
    padding: 1rem;
    border-radius: 1rem;
    /* background-color: rgba(0, 0, 0, 0.5); */
}
.actionButtons > button{
    display: flex;
    align-items: center;
    width: 50%;
    gap: 1rem;
    padding: 1rem;
    border-radius: 5rem;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    border: none;
    transition: .5s;
    cursor: pointer;
}
.actionButtons > button:hover{
    background-color: #fff;
    color: black;
}
.actionButtons > button.white{
    background-color: #fff;
    color: black;
}
.actionButtons > button.white:hover{
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
}
.actionButtons > button img{
    width: 1.5rem;
}
.white{
    color: #fff;
}
</style>