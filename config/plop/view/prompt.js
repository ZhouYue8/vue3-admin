module.exports = {
  description: '创建视图模板默认是src/view',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: '创建组件模板默认是src/view/下',
    },
  ],
  actions: ({ name }) => {
    return [
      {
        type: 'add',
        path: `src/view/${name}/src/${name}-view.vue`,
        templateFile: 'config/plop/view/page.hbs',
        data: {
          name,
        },
      },
      {
        type: 'add',
        path: `src/view/${name}/index.ts`,
        templateFile: 'config/plop/view/export.hbs',
        data: {
          name,
        },
      },
    ];
  },
};
