import { defineStore } from 'pinia';
export const useThemeStore = defineStore('theme', {
  state: () => ({
    isDark: true,
    theme: useToggle(useDark()),
    isLoading: false,
  }),
  getters: {},
  actions: {
    switchTheme() {
      this.isDark = this.theme();
    },
    setLoading(value: boolean) {
      this.isLoading = value;
    },
  },
  persist: {
    key: 'Theme_STORE',
    storage: window.sessionStorage,
  },
});
