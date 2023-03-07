import type { Router } from 'vue-router';

export const setupGuard = (router: Router) => {
  router.beforeEach(() => {
    console.log('test');
  });
};
