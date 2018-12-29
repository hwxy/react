import axios from "axios";
const instance = axios.create();
const CancelToken = axios.CancelToken;
instance.interceptors.request.use(config => {
  return config;
});
instance.interceptors.response.use(({ data }) => {
  return data;
});
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
