import { reactive, computed, ref } from 'vue';
import { defineStore } from 'pinia';
import api from '@/plugin/axios';

export const useTvStore = defineStore('tv', () => {
  const state = reactive({
    currentTv: {},
  });

  const currentTv = computed(() => state.currentTv);
  const isLoading = ref(false);
  const getTvDetail = async (tvId) => {
    const response = await api.get(`tv/${tvId}`);
    state.currentTv = response.data;
    console.log('currentTv', state.currentTv);
  };
  const listTv = async (discoverParams) => {
    console.log('discoverParams', discoverParams);
    isLoading.value = true;
    const response = await api.get('/discover/tv', {
      params: discoverParams
    });
    isLoading.value = false;
    return response.data.results;
  };

  return { currentTv, getTvDetail, listTv, isLoading };
});