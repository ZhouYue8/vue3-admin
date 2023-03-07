import { defineStore } from 'pinia';
export const useThemeStore = defineStore('theme', {
  state: () => ({
    isDark: true,
    theme: useToggle(useDark()),
  }),
  getters: {},
  actions: {
    switchTheme() {
      this.isDark = this.theme();
    },
  },
  persist: {
    key: 'Theme_STORE',
    storage: window.sessionStorage,
  },
});
