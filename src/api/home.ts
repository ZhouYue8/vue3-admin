import request from '@/utils';

export interface ICardTotal {
  name: string;
  color: string;
  title: string;
  number: number;
  emoij: string;
}

const getCartTotalApi = async () => {
  return await request.get<ICardTotal[]>({
    url: 'home/dashborard/total',
  });
};

export { getCartTotalApi };
