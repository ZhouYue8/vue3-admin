import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'

import 'uno.css'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
createApp(App).use(pinia).mount('#app')
