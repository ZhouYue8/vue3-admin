module.exports = {
  description: '创建组件模板默认是src/components',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: '创建组件模板默认是src/components/下',
    },
  ],
  actions: ({ name }) => {
    return [
      {
        type: 'add',
        path: `src/components/${name}/src/${name}.vue`,
        templateFile: 'config/component/page.hbs',
        data: {
          name,
        },
      },
      {
        type: 'add',
        path: `src/components/${name}/index.ts`,
        templateFile: 'config/component/export.hbs',
        data: {
          name,
        },
      },
    ]
  },
}
