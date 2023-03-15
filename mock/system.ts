import { faker } from '@faker-js/faker';
export default [
  {
    url: '/mock/api/system/menu/list',
    method: 'get',
    response: options => {
      const arr: any = [];
      console.log(options.query);
      for (let index = 0; index < options.query.page_size; index++) {
        const path = faker.system.filePath();
        arr.push({
          name: '@cname',
          path,
          redirect: path + '/index',
          emoji: faker.internet.emoji(),
          'attribute|1': options.query.attribute ?? ['catalog', 'menu'],
          birthdate: faker.date.birthdate({
            min: 1989,
            max: 2000,
            mode: 'year',
          }),
        });
      }
      return { data: arr };
    },
  },
];
