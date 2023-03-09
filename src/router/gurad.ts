import type { Router } from 'vue-router';
import Nprogress from 'nprogress';
import useStore from '@/store';
export const setupGuard = (router: Router) => {
  router.beforeEach((to, from, next) => {
    const { themeStore } = useStore();
    Nprogress.start();
    themeStore.setLoading(true);

    next();
  });
  router.afterEach(to => {
    const { themeStore } = useStore();
    themeStore.setLoading(false);
    Nprogress.done();
    document.title = to.meta.title;
  });
};
