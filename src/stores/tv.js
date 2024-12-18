import { reactive, computed, ref } from 'vue';
import { defineStore } from 'pinia';
import api from '@/plugin/axios';

export const useTvStore = defineStore('tv', () => {
  const state = reactive({
    currentTv: {},
    tvPrograms: []
  });

  const currentTv = computed(() => state.currentTv);
  
  const getTvDetail = async (tvId) => {
    const response = await api.get(`tv/${tvId}`);
    state.currentTv = response.data;
  };
  const isLoading = ref(false);
  const listTv = async (genreId) => {
    const response = await api.get('discover/tv', {
      params: {
        with_genres: genreId,
        language: 'pt-BR',
      },
    })
    state.tvPrograms = response.data.results;
  }

  return { currentTv, getTvDetail, listTv, isLoading, state };
});