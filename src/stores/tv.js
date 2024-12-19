import { reactive, computed, ref } from 'vue';
import { defineStore } from 'pinia';
import api from '@/plugin/axios';

export const useTvStore = defineStore('tv', () => {
  const state = reactive({
    currentTv: {},
    tvPrograms: []
  });

  const currentTv = computed(() => state.currentTv);
  const isLoading = ref(false);
  
  const getTvDetail = async (tvId) => {
    isLoading.value = true;
    const response = await api.get(`tv/${tvId}`);
    state.currentTv = response.data;
    isLoading.value = false;
  };

  const listTv = async (genreId) => {
    isLoading.value = true;
    const response = await api.get('discover/tv', {
      params: {
        with_genres: genreId,
        language: 'pt-BR',
      },
    })
    state.tvPrograms = response.data.results;
    isLoading.value = false;
  }

  return { currentTv, getTvDetail, listTv, isLoading, state };
});