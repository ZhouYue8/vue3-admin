import type { App } from 'vue';
import { useThemeStore } from './modules/theme';
import { useUserStore } from './modules/user';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
// 统一导出useStore方法
export default function useStore() {
  return {
    userStore: useUserStore(),
    themeStore: useThemeStore(),
  };
}
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
export const setupPinia = (app: App) => {
  app.use(pinia);
};
