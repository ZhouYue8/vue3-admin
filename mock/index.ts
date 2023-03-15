export default [
  {
    url: '/mock/api/getList',
    method: 'get',
    response: () => {
      return {
        data: [
          { label: '全部', value: 0 },
          { label: '待审核', value: 1 },
        ],
      };
    },
  },
];
