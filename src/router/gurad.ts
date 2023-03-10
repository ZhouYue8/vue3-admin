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
    const { themeStore, appStore } = useStore();
    themeStore.setLoading(false);
    appStore.addTab({
      path: to.path,
      title: to.meta.title,
    });
    appStore.currentPath = to.path;
    Nprogress.done();
    document.title = to.meta.title;
  });
};
