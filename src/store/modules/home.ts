import { defineStore } from 'pinia';
import { getCartTotalApi, ICardTotal } from '@/api';

interface HomeState {
  card_total: ICardTotal[];
}

export const useHomeStore = defineStore('home', {
  state: (): HomeState => ({
    card_total: [],
  }),
  getters: {},
  actions: {
    async getCardTotal() {
      const result = await getCartTotalApi();
      this.card_total = result.data;
    },
  },
  persist: {
    key: 'Home_STORE',
    storage: window.localStorage,
  },
});
