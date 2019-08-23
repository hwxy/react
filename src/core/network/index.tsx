import axios, { AxiosResponse, AxiosRequestConfig }  from "axios";
import request from "@/core/network/interceptors/reques.tsx";
import response from "@/core/network/interceptors/response.tsx";
const instance = axios.create({
  baseURL: "https://www.easy-mock.com/mock/5d5dfa3814b5706759ab5234"
});
const CancelToken = axios.CancelToken;
//暂时没想好要不要用cancelTotal
export const cancelTotal: object[] = [];

interface ICancelData {
  url: string,
  cancel?: any
}



export const apiGet = (url: string, params = {}) => {
  let cancelData: ICancelData  = {
    url: '',
  };
  cancelData.url = url;
  return instance.get(url, {
    ...params,
    cancelToken: new CancelToken(c => {
      cancelData.cancel = c;
      cancelTotal.push(cancelData);
    })
  })
};
export const apiPost = (url: string, params = {}) => {
  let cancelData: ICancelData  = {
    url: '',
  };
  cancelData.url = url;
  return instance.post(url, {
    ...params
  });
};
export const apiPut = (url: string, params = {}) => {
  let cancelData: ICancelData  = {
    url: '',
  };
  cancelData.url = url;
  return instance.put(url, {
    ...params
  });
};
export const apiDelete = (url: string, params = {}) => {
  let cancelData: ICancelData  = {
    url: '',
  };
  cancelData.url = url;
  return instance.delete(url, {
    ...params
  });
};

instance.interceptors.request.use(request);
instance.interceptors.response.use(response);

export default instance;
