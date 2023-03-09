import type { App } from 'vue';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { setupGuard } from './gurad';
import { children } from './main';
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/view/login/login-view.vue'),
    meta: {
      title: '登录',
    },
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/view/main'),
    redirect: '/dashBorard',
    children,
    meta: {
      title: '主页',
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;

export const setupRouter = (app: App) => {
  setupGuard(router);
  app.use(router);
};
