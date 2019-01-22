import { apiGet } from "../core/network/index.js";
const BaseUrl =
  " https://www.easy-mock.com/mock/5c3c047937e0172bd028d180/example";

export function getSwiperData(params) {
  return apiGet(`${BaseUrl}/swiperdata`);
}
