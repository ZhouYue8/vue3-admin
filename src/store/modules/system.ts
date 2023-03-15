import { defineStore } from 'pinia';
import { getSystemMenuList } from '@/api';
export interface IMenus {
  name: string;
  path: string;
  redirect: string;
  emoji: string;
  birthdate: string;
  attribute: 'catalog' | 'menu';
}

interface SystemState {
  menus: IMenus[];
  isLoading: boolean;
}

export const useSystemStore = defineStore('system', {
  state: (): SystemState => ({
    menus: [],
    isLoading: false,
  }),
  getters: {},
  actions: {
    async getMenus(
      page_size: number,
      current_page: number,
      attribute?: string,
    ) {
      this.isLoading = true;
      const data = await getSystemMenuList(page_size, current_page, attribute);
      this.menus = data.data;
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    },
  },
});
