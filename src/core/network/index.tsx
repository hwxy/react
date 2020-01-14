import axios from "axios";
import { request, requestError } from "@/core/network/interceptors/reques.tsx";
import {
  response,
  responseError
} from "@/core/network/interceptors/response.tsx";

const instance = axios.create({
  baseURL: window.location.origin
});

const CancelToken = axios.CancelToken;
//暂时没想好要不要用cancelTotal
export const cancelTotal: object[] = [];

interface ICancelData {
  url: string;
  cancel?: any;
}

export const apiGet = (url: string, params = {}) => {
  let cancelData: ICancelData = {
    url: ""
  };
  cancelData.url = url;
  return instance.get(url, {
    params,
    cancelToken: new CancelToken(c => {
      cancelData.cancel = c;
      cancelTotal.push(cancelData);
    })
  });
};
export const apiPost = (url: string, params = {}) => {
  let cancelData: ICancelData = {
    url: ""
  };
  cancelData.url = url;
  return instance.post(url, {
    ...params
  });
};
export const apiPut = (url: string, params = {}) => {
  let cancelData: ICancelData = {
    url: ""
  };
  cancelData.url = url;
  return instance.put(url, {
    ...params
  });
};
export const apiDelete = (url: string, params = {}) => {
  let cancelData: ICancelData = {
    url: ""
  };
  cancelData.url = url;
  return instance.delete(url, {
    ...params
  });
};

instance.interceptors.request.use(request, requestError);
instance.interceptors.response.use(response, responseError);

export default instance;
