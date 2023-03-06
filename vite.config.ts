import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import unocss from 'unocss/vite';
import path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import setupExtend from 'vite-plugin-vue-setup-extend';
import removeConsole from 'vite-plugin-remove-console';
import { visualizer } from 'rollup-plugin-visualizer';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    unocss(path.resolve(process.cwd(), 'uno.config.ts')),
    setupExtend(), // 为setup添加名字
    AutoImport({
      dts: 'types/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json', // 生成json文件
        globalsPropValue: true,
      },
      // 'pinia', 'vue-router', 'vue-i18n', 'vue', '@vueuse/core'
      imports: ['vue', '@vueuse/core'],
      // 可以使用element plus 等组件库在这里注册
      resolvers: [],
    }),
    removeConsole({
      external: ['src/main.ts'],
    }),
    // 生产报告 放在最后一个
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
      filename: path.resolve(process.cwd(), 'dist/report.html'),
    }),
  ],
});
