import axios from "axios";
import request from "./interceptors/reques";
import response from "./interceptors/response";
const instance = axios.create();
const CancelToken = axios.CancelToken;
//暂时没想好要不要用cancelTotal
export const cancelTotal = [];
export const apiGet = (url, params = {}) => {
  let cancelData = {};
  cancelData.url = url;
  return instance.get(url, {
    ...params,
    cancelToken: new CancelToken(c => {
      cancelData.cancel = c;
      cancelTotal.push(cancelData);
    })
  });
};
export const apiPost = (url, params = {}) => {
  let cancelData = {};
  cancelData.url = url;
  return instance.post(url, {
    ...params
  });
};
export const apiPut = (url, params = {}) => {
  let cancelData = {};
  cancelData.url = url;
  return instance.put(url, {
    ...params
  });
};
export const apiDelete = (url, params = {}) => {
  let cancelData = {};
  cancelData.url = url;
  return instance.delete(url, {
    ...params
  });
};

instance.interceptors.request.use(request);
instance.interceptors.response.use(response);

export default instance;
