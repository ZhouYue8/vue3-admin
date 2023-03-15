import request from '@/utils';
import type { IMenus } from '@/store/modules/system';
const getSystemMenuList = async (
  page_size: number,
  current_page: number,
  attribute?: string,
) => {
  return await request.get<IMenus[]>({
    url: 'system/menu/list',
    params: {
      page_size,
      current_page,
      attribute,
    },
  });
};

export { getSystemMenuList };
