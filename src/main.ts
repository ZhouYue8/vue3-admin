import { createApp } from 'vue';
import { setupPinia } from '@/store';
import { setupGlobalComponent } from './components';
import { setupRouter } from './router';
import '@/assets/style/index.scss';
import 'uno.css';
import 'virtual:svg-icons-register';
import 'nprogress/nprogress.css';
import App from './App.vue';

export const app = createApp(App);
// 初始化路由
setupRouter(app);
// 初始化全局组件
setupGlobalComponent(app);
// 初始化pinia
setupPinia(app);
app.mount('#app');
