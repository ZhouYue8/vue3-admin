import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

export interface IResponse<T> {
  code: number;
  msg: string;
  data: T;
}

interface AxiosInterceptor {
  interceptorsRequest?: (
    config: InternalAxiosRequestConfig,
  ) => InternalAxiosRequestConfig;
  interceptorsResponse?: (res: AxiosResponse) => AxiosResponse;
  interceptorsRequestError?: (error: any) => any;
  interceptorsResponseError?: (error: any) => any;
}

interface AxiosRequestConfigExt extends AxiosRequestConfig {
  interceptors?: AxiosInterceptor;
  showLoading?: boolean;
}

const DEFAULTSHOWLOADING = false;

// 全局拦截器
const globalInterceptors: AxiosInterceptor = {
  interceptorsRequest: config => {
    console.log('全局request');
    return config;
  },
  interceptorsResponse: res => {
    console.log('全局response');
    return res;
  },
  interceptorsRequestError: error => {
    console.log('全局RequestError');
    return error;
  },
  interceptorsResponseError: error => {
    console.log('全局ResponseError');
    return error;
  },
};

class WsRequest {
  options: AxiosRequestConfigExt; // axios配置
  instance: AxiosInstance; // axios实例
  showLoading?: boolean; // 是否显示loading
  loading?: any;
  constructor(options: AxiosRequestConfigExt) {
    this.options = options;
    this.showLoading = options.showLoading || DEFAULTSHOWLOADING;

    this.instance = axios.create(this.options);

    options.interceptors && this.setupinterceptors(options.interceptors); // 配置传递过来的拦截器
    this.setupinterceptors(globalInterceptors); // 配置全局拦截器
  }

  request<T = any>(reqConfig: AxiosRequestConfigExt): Promise<IResponse<T>> {
    reqConfig.interceptors && this.setupinterceptors(reqConfig.interceptors);
    if (this.showLoading) {
      this.loading = ElLoading.service({
        lock: true,
        text: '正在请求数据....',
        background: 'rgba(0, 0, 0, 0.5)',
      });
    }
    return new Promise((resolve, reject) => {
      this.instance
        .request<any, IResponse<T>>(reqConfig)
        .then(res => {
          if (this.showLoading) {
            //关闭loading...
            this.loading?.close();
            this.showLoading = DEFAULTSHOWLOADING;
          }
          resolve(res);
        })
        .catch(error => {
          // 错误的时候也需要关闭loading...
          this.loading?.close();
          this.showLoading = DEFAULTSHOWLOADING;
          reject(error);
        });
    });
  }
  get<T>(config: AxiosRequestConfigExt) {
    return this.request<T>({ ...config, method: 'GET' });
  }
  post<T>(config: AxiosRequestConfigExt) {
    return this.request<T>({ ...config, method: 'POST' });
  }
  delete<T>(config: AxiosRequestConfigExt) {
    return this.request<T>({ ...config, method: 'DELETE' });
  }
  put<T>(config: AxiosRequestConfigExt) {
    return this.request<T>({ ...config, method: 'PUT' });
  }
  patch<T>(config: AxiosRequestConfigExt) {
    return this.request<T>({ ...config, method: 'PATCH' });
  }

  // 初始化拦截器
  private setupinterceptors(interceptors: AxiosInterceptor) {
    this.instance.interceptors.request.use(
      interceptors?.interceptorsRequest,
      interceptors?.interceptorsRequestError,
    );
    this.instance.interceptors.response.use(
      interceptors?.interceptorsResponse,
      interceptors?.interceptorsResponseError,
    );
  }
}

export default WsRequest;
