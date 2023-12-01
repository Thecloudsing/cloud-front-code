import req from "@/service/axios-config";
import { AxiosHeaders } from "axios";

const requestMicroQueues: { [key: string]: 0 | 1 } = {};
export type BodyType = {
  params?: any;
  data?: any;
};
export type ReqOptions = {
  reject?: boolean;
  headers?: AxiosHeaders;
  paramUri?: boolean;
};

// export type ReqFunc = <T>(param: ReqFuncParam) => Promise<T | undefined>;
export interface ReqFunc<T> {
  // eslint-disable-next-line no-unused-vars
  (param: ReqFuncParam): Promise<T | undefined>;
}

export type ReqFuncParam = {
  url: string;
  body?: BodyType;
  options?: ReqOptions;
};
type RequestFuncParam = {
  method: "GET" | "POST" | "PUT" | "DELETE";
} & ReqFuncParam;
const request = async <T>({
  url,
  method,
  body,
  options,
}: RequestFuncParam): Promise<T | undefined> => {
  if (requestMicroQueues[url]) {
    return;
  }
  requestMicroQueues[url] = 1;
  const { reject, headers } = options || {};
  try {
    const { params, data } = body || {};
    const response = await req.request<T>({
      url,
      method,
      params,
      data,
      headers,
    });
    if (response.data === undefined) {
      return response as T;
    }
    return response.data;
  } catch (e: any) {
    console.log(url + "-> 请求失败 ->" + `${e.errCode}=${e.errMsg}`);
    if (reject) return Promise.reject(e);
  } finally {
    requestMicroQueues[url] = 0;
  }
};

const createReqFunc = <T>(method: RequestFuncParam["method"]) => {
  const func: ReqFunc<T> = ({ url, body, options }) =>
    request({ url, method, body, options });
  return func;
};
export const GET = <T>() => createReqFunc<T>("GET");
export const POST = <T>() => createReqFunc<T>("POST");
export const PUT = <T>() => createReqFunc<T>("PUT");
export const DELETE = <T>() => createReqFunc<T>("DELETE");

// export interface ReqFunc<T> {
//   (url: string, body?: BodyType): Promise<T | undefined>;
// }
// export const GET: ReqFunc = ({ url, body, options }) =>
//   request({ url, method: "GET", body, options });
// export const POST: ReqFunc = ({ url, body, options }) =>
//   request({ url, method: "POST", body, options });
// export const PUT: ReqFunc = ({ url, body, options }) =>
//   request({ url, method: "PUT", body, options });
// export const DELETE: ReqFunc = ({ url, body, options }) =>
//   request({ url, method: "DELETE", body, options });
export default request;
