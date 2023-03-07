import { useThemeStore } from './modules/theme';
import { useUserStore } from './modules/user';

// 统一导出useStore方法
export default function useStore() {
  return {
    userStore: useUserStore(),
    themeStore: useThemeStore(),
  };
}
