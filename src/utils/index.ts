import WsRequest from './http';

export default new WsRequest({
  baseURL: '/mock/api',
  showLoading: true,
  interceptors: {
    interceptorsRequest(config) {
      // console.log('单个网络地址的拦截器');
      return config;
    },
    interceptorsResponse(res) {
      // console.log('单个网络地址的响应');
      return res;
    },
  },
});
