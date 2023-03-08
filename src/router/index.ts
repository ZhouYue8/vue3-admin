import type { App } from 'vue';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: '登录页',
    component: () => import('@/view/login/login-view.vue'),
  },
  {
    path: '/main',
    name: '主页',
    component: () => import('@/view/main'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;

export const setupRouter = (app: App) => {
  app.use(router);
};
