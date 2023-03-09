import { RouteRecordRaw } from 'vue-router';

const linkRouter: RouteRecordRaw[] = [
  {
    path: '/link',
    component: () => import('@/view/main/link/github'),
    meta: {
      title: '链接',
      p: '链接',
    },
  },
];

export default linkRouter;
