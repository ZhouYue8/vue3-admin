import svgIcon from '@/components/icon-svg';
import type { App } from 'vue';
export const setupGlobalComponent = (app: App) => {
  app.component('SvgIcon', svgIcon);
};
