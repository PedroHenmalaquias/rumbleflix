import { reactive, computed } from 'vue';
import { defineStore } from 'pinia';
import api from '@/plugin/axios';

export const useTvStore = defineStore('tv', () => {
  const state = reactive({
    currentTv: {},
  });

  const currentTv = computed(() => state.currentTv);

  const getTvDetail = async (tvId) => {
    const response = await api.get(`tv/${tvId}`);
    state.currentTv = response.data;
    console.log('currentTv', state.currentTv);
  };

  return { currentTv, getTvDetail };
});