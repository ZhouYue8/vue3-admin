export enum ErrorCodeEnum {
  A100 = 100, // HTTP发送失败（axios内部未知 Error）
  A200 = 200, // HTTP无响应 (超时)
  H400 = 400, // HTTP响应异常(400、401、403、404、500...)
  H401 = 401,
  H403 = 403,
  H404 = 404,
  H405 = 405,
  H408 = 408,
  H500 = 500,
  H502 = 502,
  H504 = 504,
  H505 = 505,
  C100 = 100, // 客户端内部程序错误
}
export const ErrorMsgMap = new Map<ErrorCodeEnum, string>([
  [ErrorCodeEnum.A100, '客户端请求错误!'],
  [ErrorCodeEnum.A200, '网络请求超时(Axios timeout)!'],
  [ErrorCodeEnum.H400, '请求参数不匹配！'],
  [ErrorCodeEnum.H401, '未登录或token已超时！'],
  [ErrorCodeEnum.H403, '权限不足!'],
  [ErrorCodeEnum.H404, '网络请求错误,未找到该资源!'],
  [ErrorCodeEnum.H405, '网络请求错误,未找到该资源!'],
  [ErrorCodeEnum.H408, '网络请求超时!'],
  [ErrorCodeEnum.H500, '服务器错误,请联系管理员!'],
  [ErrorCodeEnum.H502, '网络错误!'],
  [ErrorCodeEnum.H504, '网络超时!'],
  [ErrorCodeEnum.H505, 'HTTP版本不支持!'],
]);
