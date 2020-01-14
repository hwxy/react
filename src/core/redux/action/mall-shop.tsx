import { createAction } from "redux-actions";

// 第二个参数为 payload 的转换器
export const addnum = createAction("SHOP__ADD", (num: number) => {
  return num;
});

export const delnum = createAction("SHOP__DEL", (amount: any) => {
  return 2;
});

export const setNum = createAction("SHOP__SET", async (amount: any) => {
  let promise = new Promise(res => {
    setTimeout(() => {   
      console.log(111);
      res(3);
    }, 5000);     
  });
  let data = await promise;
  return data;
});
