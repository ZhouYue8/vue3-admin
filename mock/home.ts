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
            emoij: '๐',
          },
          {
            name: 'flame',
            color: '#d93b56',
            title: 'ไปๆฅๅข้ฟ',
            number: 28,
            emoij: '๐',
          },
          {
            name: 'dinosaur',
            color: '#0ee0aa',
            title: 'ๆต่ง้',
            number: 180,
            emoij: '๐',
          },
          {
            name: '้พๆฅ',
            color: '#6366f1',
            title: '้พๆฅ',
            number: 777,
            emoij: '๐',
          },
        ],
      };
    },
  },
];
