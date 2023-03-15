import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import { ErrorMsgMap } from './httpEnum';
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

// 全局拦截器
const globalInterceptors: AxiosInterceptor = {
  interceptorsRequest: config => {
    // console.log('全局request');
    return config;
  },
  interceptorsResponse: res => {
    // console.log('全局response');
    return res.data;
  },
  interceptorsRequestError: error => {
    // console.log(error.response);

    ElMessage.error({
      message: ErrorMsgMap.get(error.response.status),
    });
    // return error;
  },
  interceptorsResponseError: error => {
    // console.log('全局ResponseError');
    // console.log(error);
    console.log(error);
    ElMessage.error({
      message: ErrorMsgMap.get(error.response.status),
    });
    // return error;
  },
};

class WsRequest {
  options: AxiosRequestConfigExt; // axios配置
  instance: AxiosInstance; // axios实例
  constructor(options: AxiosRequestConfigExt) {
    this.options = options;

    this.instance = axios.create(this.options);

    options.interceptors && this.setupinterceptors(options.interceptors); // 配置传递过来的拦截器
    this.setupinterceptors(globalInterceptors); // 配置全局拦截器
  }

  request<T = any>(reqConfig: AxiosRequestConfigExt): Promise<IResponse<T>> {
    reqConfig.interceptors && this.setupinterceptors(reqConfig.interceptors);

    return this.instance.request<any, IResponse<T>>(reqConfig);
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
