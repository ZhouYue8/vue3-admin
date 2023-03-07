import WsRequest from './http';

export default new WsRequest({
  baseURL: 'https://jsonplaceholder.typicode.com/todos/',
  showLoading: true,
  interceptors: {
    interceptorsRequest(config) {
      console.log('单个网络地址的拦截器');
      return config;
    },
    interceptorsResponse(res) {
      console.log('单个网络地址的响应');

      return res;
    },
  },
});
