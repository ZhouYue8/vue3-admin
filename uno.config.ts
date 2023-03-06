import {
  defineConfig,
  presetAttributify,
  presetUno,
  transformerAttributifyJsx,
} from 'unocss'

export default defineConfig({
  // 添加 windicss 预设、属性化模式
  presets: [presetUno(), presetAttributify()],
  // 提供指令功能
  transformers: [transformerAttributifyJsx()],
  theme: {
    colors: {
      root_light: '#f5f6fa', // 最底层背景
      root_dark: '#272727',
      page_light: '#ffffff', // 基础布局背景
      page_dark: '#18181B',
    },
    height: {
      header: '64px',
      footer: '50px',
    },
    minHeight: {},
  },
  // 这里可以放全局公共样式
  shortcuts: [
    {
      'bg-root': 'bg-root_light dark:bg-root_dark',
    },
    {
      'bg-page': 'bg-page_light dark:bg-page_dark',
    },
    {
      'transition-base': 'transition-all duration-150 ease-in-out',
    },
    {
      'page-base': 'min-h-content overflow-x-hidden box-border',
    },
    {
      'page-card': 'page-base bg-page rounded px-6 py-5',
    },
    {
      center: 'flex items-center justify-center',
    },
  ],
  // 自定义规则
  rules: [
    [
      'text-brand-gradient',
      {
        color: 'transparent',
        'background-image': 'linear-gradient(to right, #00ff8f, #00a1ff)',
        'background-clip': 'text',
        '-webkit-background-clip': ' text',
      },
    ],
    [
      'bg-gradient-light',
      {
        'background-image':
          'linear-gradient( 135deg, #ABDCFF30 20%, #0396FF20 100%)',
      },
    ],
    [
      'bg-gradient-dark',
      {
        'background-image':
          'linear-gradient( 135deg, #2A5470 20%, #4C4177 100%)',
      },
    ],
    [
      'shadow-card-dark',
      {
        'box-shadow': '0 0 12px 0 rgb(0 0 0 / 9%)',
      },
    ],
  ],
})
