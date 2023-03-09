import type { Router } from 'vue-router';
import Nprogress from 'nprogress';
import useStore from '@/store';
export const setupGuard = (router: Router) => {
  router.beforeEach((to, from, next) => {
    const { themeStore } = useStore();
    Nprogress.start();
    themeStore.setLoading(true);
    setTimeout(() => {
      next();
    }, 1000);
  });
  router.afterEach(() => {
    const { themeStore } = useStore();
    themeStore.setLoading(false);
    Nprogress.done();
    console.log('to');
  });
};
