import { reactive, computed, ref } from 'vue'
import { defineStore } from 'pinia'
import api from '@/plugin/axios'

export const useMovieStore = defineStore('movie', () => {
  const state = reactive({
    currentMovie: {},
    moviesWithGenre: [],
  })
  const isLoading = ref(false)
  const currentMovie = computed(() => state.currentMovie)

  const getMovieDetail = async (movieId) => {
    isLoading.value = true
    const response = await api.get(`movie/${movieId}`)
    state.currentMovie = response.data
    isLoading.value = false
  }
  
  const getMoviesWithGenre = async (genre) => {
    isLoading.value = true
    const response = await api.get('discover/movie', {
      params: {
        with_genres: genre,
        language: 'pt-BR',
      },
    })
    state.moviesWithGenre = response.data.results;
    isLoading.value = false
  }
  const listMovies = async (discoverParams) => {
    isLoading.value = true
    const response = await api.get('/discover/movie', {
      params: discoverParams,
    })
    isLoading.value = false
    return response.data.results
  }

  return { currentMovie, getMovieDetail, listMovies, isLoading, state, getMoviesWithGenre }
})
