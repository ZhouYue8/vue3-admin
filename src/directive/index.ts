import { App } from 'vue';
import vClose from './vShowCloseTab';
import echart from './echart';
export const setupDirective = (app: App) => {
  app.directive('tab-close', vClose);
  app.directive('echart', echart);
};
