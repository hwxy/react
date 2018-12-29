import axios from "axios";
const instance = axios.create();
const CancelToken = axios.CancelToken;
instance.interceptors.request.use(config => {
  return config;
});
instance.interceptors.response.use(({ data }) => {
  return data;
});
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
