import { RouteRecordRaw } from 'vue-router';
const WHITELIST = ['/', '/login', '/main'];

interface ZoomRatioType {
  [MapZoom: string]: RouteRecordRaw[];
}

//两层router MENU
export const mapRouterMenu = (routes: RouteRecordRaw[]) => {
  const classify: ZoomRatioType = {};
  routes.forEach(element => {
    if (!WHITELIST.includes(element.path)) {
      if (element.meta?.p && !classify[element.meta?.p]) {
        element.meta?.p && (classify[element.meta?.p] = []);
      }
      element.meta?.p && classify[element.meta?.p].push(element);
    }
  });
  return classify;
};
