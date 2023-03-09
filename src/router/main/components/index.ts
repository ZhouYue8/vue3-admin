import { RouteRecordRaw } from 'vue-router';

const componentsRouter: RouteRecordRaw[] = [
  {
    path: '/form',
    component: () => import('@/view/main/components/form'),
    meta: {
      title: '表单',
      p: '组件',
    },
  },
  {
    path: '/model',
    component: () => import('@/view/main/components/model'),
    meta: {
      title: '模态框',
      p: '组件',
    },
  },
];

export default componentsRouter;
