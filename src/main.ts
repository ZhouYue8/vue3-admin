import { createApp } from 'vue';
import { createPinia } from 'pinia';
import 'normalize.css';
import 'uno.css';
import 'virtual:svg-icons-register';
import svgIcon from './components/icon-svg';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import 'element-plus/theme-chalk/dark/css-vars.css';
import App from './App.vue';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
createApp(App).component('svg-icon', svgIcon).use(pinia).mount('#app');
