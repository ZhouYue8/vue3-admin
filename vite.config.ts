import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import unocss from 'unocss/vite'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    unocss(path.resolve(process.cwd(), 'uno.config.ts')),
    AutoImport({
      dts: 'types/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
      },
      imports: ['vue', '@vueuse/core'],
      resolvers: [],
    }),
  ],
})
