import { useHomeStore } from './modules/home';
import { useAppStore } from './modules/app';
import type { App } from 'vue';
import { useThemeStore } from './modules/theme';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { useSystemStore } from './modules/system';
// 统一导出useStore方法
export default function useStore() {
  return {
    homeStore: useHomeStore(),
    themeStore: useThemeStore(),
    appStore: useAppStore(),
    systemStore: useSystemStore(),
  };
}
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
export const setupPinia = (app: App) => {
  app.use(pinia);
};
