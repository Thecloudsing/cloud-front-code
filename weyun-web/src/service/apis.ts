import {DELETE, GET, POST, PUT, ReqFunc, ReqOptions} from "@/service/micro-queues";
import apis from "@/service/urls";
import {SchoolAddType, SchoolQueryType} from "@/service/types";

export interface ReqFuncType<REQ, RESP> {
  // eslint-disable-next-line no-unused-vars
  (req: REQ, options?: ReqOptions): Promise<RESP | undefined>;
}

// type createFuncType = <REQ, RESP>(
//   req: REQ,
//   options?: ReqOptions,
// ) => Promise<RESP | undefined>;
type ReqParam<T> = {
  [key in string & keyof T]: T[key];
} & {
  paramUri?: string[];
};
const isParamUri = <T>(
    url: string,
    params: ReqParam<T>,
    options: ReqOptions | undefined,
) => {
  let uri = url;
  if (options?.paramUri) {
    if (!(params && params["paramUri"] && Array.isArray(params["paramUri"]))) {
      throw new Error("paramUri must be an array");
    }
    uri = url + "/" + (params["paramUri"] as string[]).join("/");
  }
  return uri;
};
export const createVoid = <RESP>(fn: () => ReqFunc<RESP>, url: string) => {
  const func: ReqFuncType<undefined, RESP> = function (_, options) {
    // @ts-ignore
    return fn().call(this, { url, options });
  };
  return func;
};
export const createParam = <REQ, RESP>(
    fn: () => ReqFunc<RESP>,
    url: string,
) => {
  const func: ReqFuncType<ReqParam<REQ>, RESP> = function (params, options) {
    const uri = isParamUri(url, params, options);
    // @ts-ignore
    return fn().call(this, { url: uri, options, body: { params } });
  };
  return func;
};
export const createData = <REQ, RESP>(fn: () => ReqFunc<RESP>, url: string) => {
  const func: ReqFuncType<REQ, RESP> = function (data, options) {
    //@ts-ignore
    return fn().call(this, { url, options, body: { data } });
  };
  return func;
};
export const createBody = <REQ, RESP>(fn: () => ReqFunc<RESP>, url: string) => {
  const func: ReqFuncType<ReqParam<REQ>, RESP> = function (body, options) {
    const uri = isParamUri(url, body, options);
    // @ts-ignore
    return fn().call(this, { url: uri, options, body });
  };
  return func;
};
export const SchoolApi = {
  query: createParam<undefined, SchoolQueryType[]>(GET, apis.school),
  add: createData<SchoolAddType, undefined>(POST, apis.school),
  update: createData<SchoolAddType, undefined>(PUT, apis.school),
  delete: createParam<{paramUri: string|number[]}, undefined>(DELETE, apis.school)
}
