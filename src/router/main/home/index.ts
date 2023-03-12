import { RouteRecordRaw } from 'vue-router';
const homeRouter: RouteRecordRaw[] = [
  {
    path: '/dashBorard',
    component: () => import('@/view/main/home/dashBorard'),
    meta: {
      title: '仪表盘',
      p: '主页',
    },
  },
  {
    path: '/workbench',
    component: () => import('@/view/main/home/workbench'),
    meta: {
      title: '控制台',
      p: '主页',
    },
  },
];
export default homeRouter;
