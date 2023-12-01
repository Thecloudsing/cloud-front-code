import { useState } from "react";
import { getFunctionHash } from "@/utils/func";
import { ReqFuncType, testApi } from "@/service/apis";
import { ReqOptions } from "@/service/micro-queues";

type DataType<T> = {
  status: "start" | "padding" | "end";
  data?: T;
};
type ErrorType = {
  current: string;
  errCode: number;
  errMsg: string;
};
const initialState: DataType<any> = {
  status: "start",
  data: null,
};
type FirstGeneric<T> = T extends ReqFuncType<infer U, any> ? U : T;
type SecondGeneric<T> = T extends ReqFuncType<any, infer V> ? V : T;
type FuncS<O, R extends ReqS<O>, T extends RespS<O>> = {
  [key in string & keyof O]: ReqFuncType<R[key], T[key]>;
};
type ReqS<O> = {
  [key in string & keyof O]: FirstGeneric<O[key]>;
};
type RespS<O> = {
  [key in string & keyof O]: SecondGeneric<O[key]>;
};
const micro: { [key: string]: 0 | 1 } = {};
const useApi = <T>() => {
  const [result, setResult] = useState<DataType<T | undefined>>(initialState);
  const [error, setError] = useState<ErrorType>();
  const optionsPadding = () => {
    setResult({ status: "padding" });
  };
  const optionsError = (current: string, errCode: number, errMsg: string) => {
    setResult({ status: "end" });
    setError({ current, errCode, errMsg });
  };
  const optionsData = (data?: T) => {
    setError(undefined);
    setResult({ data, status: "end" });
  };
  const isPadding = () => {
    return result.status === "padding";
  };
  const send = <REQ>(fn: ReqFuncType<REQ, T>, body: REQ) => {
    (async function () {
      const ident = await getFunctionHash(fn);
      if (micro[ident]) {
        return;
      }
      micro[ident] = 1;
      optionsPadding();
      try {
        const res = await fn(body, { reject: true });
        optionsData(res);
      } catch (e: any) {
        optionsError("-1", e.errCode, e.errMsg);
      } finally {
        micro[ident] = 0;
      }
    })();
  };
  const a = {
    test: testApi.test,
    // user: testApi.user,
  };
  const b = {
    test: { name: 2 },
    // user: { name: "" },
  };
  //prettier-ignore
  const sendAll = <R extends ReqS<O>, P extends RespS<O>, O extends FuncS<O, R, P>>(fns: O, body: R) => {
    if (isPadding()) return;
    optionsPadding();
    const options: ReqOptions = { reject: true };
    let count = 0;
    const result: {
      [key in string & keyof O]?: P[key];
    } = {};
    const error: {
      [key in string & keyof O]?: ErrorType;
    } = {};
    for (let fnKey in fns) {
      micro[fnKey] = 1;
      count++;
      fns[fnKey](body[fnKey], options).then((res) => {
        // @ts-ignore
        result[fnKey] = res;
      }).catch((err) => {
        error[fnKey] = err;
        optionsError(fnKey, err.errCode, err.errMsg);
      }).finally(() => {
        count--;
        if (error) {
          return;
        }
        if (count === 0) {
          optionsData(result as T);
        }
      });
    }
  };
  sendAll(a, b);
  const sendHttp = (promise: Promise<T>) => {
    if (isPadding()) {
      return;
    }
    optionsPadding();
    promise
      .then((data) => {
        optionsData(data);
      })
      .catch((err: any) => {
        optionsError("-1", err.code, err.message);
      });
  };
  const sendHttpAll = (tasks: Promise<T>[]) => {
    if (isPadding()) {
      return;
    }
    optionsPadding();
    Promise.all(
      tasks.map((task, index) =>
        task.catch((err) => {
          throw { err, index };
        }),
      ),
    )
      .then((result) => {
        optionsData(result as T);
      })
      .catch(({ err, index }) => {
        optionsError(index.toString(), err.errCode, err.errMsg);
      });
  };
  return {
    data: result.data,
    error,
    isLoading: result.status === "padding",
    sendHttp,
    sendHttpAll,
    send,
    sendAll,
  };
};

export default useApi;
