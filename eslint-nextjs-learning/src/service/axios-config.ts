import axios, { AxiosError } from "axios";

const AUTH_URL = process.env.NEXT_PUBLIC_AUTH_URL || "/oauth2/login";

type ResultType<T> = {
  success: boolean;
  errMsg?: string;
  errCode?: number;
  data: T;
};
const req = axios.create({
  baseURL: "./",
  timeout: 10000,
});

req.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  config.headers["Content-Type"] = "application/json; charset=utf-8";
  return config;
});

req.interceptors.response.use(
  (res) => {
    console.log("axios res", res);
    const { success, errCode, errMsg, data } = res.data as ResultType<any>;
    if (errCode === 401) {
      window.location.href = data || AUTH_URL;
    }
    if (res.status === 200) {
      if (success) {
        return res.data;
      }
      if (res.data) {
        return res.data;
      }
      const err = { errCode, errMsg };
      return Promise.reject(err);
    }
    return Promise.reject({ errCode: res.status, errMsg: res.statusText });
  },
  (err: AxiosError) => {
    console.log("axios error", err);
    const { response } = err;
    if (response === undefined) {
      return;
    }
    if (response.status === 401) {
      window.location.href = AUTH_URL;
    }
  },
);

export default req;
