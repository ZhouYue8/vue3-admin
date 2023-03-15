import { createApp } from 'vue';
import { setupPinia } from '@/store';
import { setupGlobalComponent } from './components';
import { setupRouter } from './router';
import { setupDirective } from './directive';
import '@/assets/style/index.scss';
// import zhCn from 'element-plus/dist/locale/zh-cn.mjs';

import 'uno.css';
import 'virtual:svg-icons-register';
import App from './App.vue';
export const app = createApp(App);
//添加自定义指令
setupDirective(app);
// 初始化路由
setupRouter(app);
// app.use(ElementPlus, {
//   locale: zhCn,
// });
// 初始化全局组件
setupGlobalComponent(app);
// 初始化pinia
setupPinia(app);

app.mount('#app');
