import { reactive, computed } from 'vue';
import { defineStore } from 'pinia';
import api from '@/plugin/axios';

export const useGenreStore = defineStore('genre', () => {
    const state = reactive({
        genres: [],
        currentGenreId: null,
      });
  const currentGenreId = computed(() => state.currentGenreId);
  const setCurrentGenreId = (genreId) => {
    state.currentGenreId = genreId;
  };
  const genres = computed(() => state.genres);
  const getGenreName = (id) =>
    state.genres.find((genre) => genre.id === id).name;
  const getGenreId = (name) =>{
  const genre = state.genres.find((genre) => genre.name === name);
  return genre};
  const getAllGenres = async (type) => {
    const response = await api.get(`genre/${type}/list?language=pt-BR`);
    return response.data.genres;
  };

  return {
    genres,
    getAllGenres,
    getGenreName,
    currentGenreId,
    setCurrentGenreId,
    getGenreId,
  };
});