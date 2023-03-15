export default [
  {
    url: '/mock/api/home/dashborard/total',
    method: 'get',
    response: () => {
      return {
        data: [
          {
            name: 'star',
            color: '#ffd43b',
            title: 'Stars',
            number: 997,
            emoij: '👋',
          },
          {
            name: 'flame',
            color: '#d93b56',
            title: '今日增长',
            number: 28,
            emoij: '🍓',
          },
          {
            name: 'dinosaur',
            color: '#0ee0aa',
            title: '浏览量',
            number: 180,
            emoij: '🍏',
          },
          {
            name: '链接',
            color: '#6366f1',
            title: '链接',
            number: 777,
            emoij: '🍆',
          },
        ],
      };
    },
  },
];
