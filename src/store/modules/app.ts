import router from '@/router';
import { defineStore } from 'pinia';

interface ITab {
  path: string;
  title: string;
}

interface AppState {
  tabs: Array<ITab>;
  currentPath: string;
}

export const useAppStore = defineStore('app', {
  state: (): AppState => ({
    tabs: [],
    currentPath: '',
  }),
  getters: {},
  actions: {
    setCurrentPath(path: string) {
      router.push(path);
      this.currentPath = path;
    },
    addTab(tab: ITab) {
      if (
        !this.tabs.find(item => item.path === tab.path) &&
        tab.path !== '/login'
      ) {
        this.tabs.push(tab);
      }
    },
    closeTab(path: string) {
      if (this.tabs.length > 1) {
        this.tabs = this.tabs.filter(item => item.path !== path);
      }
    },
    cleanTab() {
      this.$reset();
    },
  },
  persist: {
    key: 'App_STORE',
    storage: window.localStorage,
  },
});
