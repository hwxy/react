import { AxiosResponse, AxiosError } from "axios";
// base ui comp
import { Toast } from "antd-mobile";
import { get } from 'lodash';
export const response = ({ data }: AxiosResponse) => {
  Toast.hide();
  return data;
};

export const responseError = (error: AxiosError) => {
  if (error.response) {
    let res = error.response;
    const bodyJson = res.data;
    // err 不是字符串
    let message = `error: ${JSON.stringify(bodyJson)}`;
    
    const errorMessage = get(res, 'bodyJson.errorMessage');
    if (errorMessage) {
      message = `${errorMessage}`;
    }

    // 401
    if ([401, 505].includes(res.status)) {
      // 跳转登录页面;
      return;
    }
    // 404
    if (res.status == 404) {
      message = '服务暂不可用. eror: 404';
    }
    if (res.status == 500) {
      message = '服务暂不可用. eror: 500';
    }
    if (res.status == 502) {
      message = '服务暂不可用. eror: 502';
    }
    if (res.status == 504) {
      message = '请求超时. eror: 504';
    }

    Toast.fail(`请求错误. error: ${message}`);
  } else{
    Toast.fail("请求错误")
  } 

  setTimeout(() => {
    Toast.hide();
  }, 2000);

  throw error;
};
