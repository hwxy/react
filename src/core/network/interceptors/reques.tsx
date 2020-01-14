import { AxiosRequestConfig, AxiosError } from "axios";
import { Toast } from "antd-mobile";
export const request = (config: AxiosRequestConfig) => {
  Toast.loading("loading...", 0, () => {}, true);
  return config;
};

export const requestError = (error: AxiosError) => {
  return Promise.reject(error);
};
