import { ConfigEnv, defineConfig } from 'vite';
import { getPlugins } from './config/plugins';
import path from 'path';

// https://vitejs.dev/config/

// 需要分包的在数组里面加
const splitDependencies = ['lodash'];
//development  production
export default ({ mode }: ConfigEnv) => {
  return defineConfig({
    base: '/',
    server: {
      // 是否开启 https
      https: false,
      // 端口号
      port: 80,
      // 监听所有地址 127.0.0.1  localhost   192.168.1.x
      host: '0.0.0.0',
      // 服务启动时是否自动打开浏览器
      open: true,
      // 允许跨域
      cors: true,
      // 自定义代理规则
      proxy: {},
    },
    plugins: getPlugins(mode),
    build: {
      // 设置最终构建的浏览器兼容目标
      target: 'es2015',
      // 构建后是否生成 source map 文件
      sourcemap: false,
      //  chunk 大小警告的限制（以 kb为单位）
      chunkSizeWarningLimit: 2048,
      // 启用/禁用 gzip 压缩大小报告
      reportCompressedSize: false,
      rollupOptions: {
        // 输出文件命名
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
          manualChunks(id) {
            // 创建一个vendor包含所有依赖项的块node_modules
            for (const dependency of splitDependencies) {
              if (id.includes(dependency)) {
                return dependency;
              }
            }
          },
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    envDir: path.resolve(__dirname, 'config/env'),
  });
};
