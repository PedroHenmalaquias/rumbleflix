import { reactive, computed, ref } from 'vue'
import { defineStore } from 'pinia'
import api from '@/plugin/axios'

export const useMovieStore = defineStore('movie', () => {
  const state = reactive({
    currentMovie: {},
  })

  const currentMovie = computed(() => state.currentMovie)

  const getMovieDetail = async (movieId) => {
    const response = await api.get(`movie/${movieId}`)
    state.currentMovie = response.data
  }
  const isLoading = ref(false)
  const listMovies = async (discoverParams) => {
    console.log('discoverParams', discoverParams)
    isLoading.value = true
    const response = await api.get('/discover/movie', {
      params: discoverParams,
    })
    isLoading.value = false
    return response.data.results
  }

  return { currentMovie, getMovieDetail, listMovies, isLoading }
})
