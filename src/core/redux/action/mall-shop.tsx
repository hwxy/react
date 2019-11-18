
import { createAction } from 'redux-actions';

// 第二个参数为 payload 的转换器
export const addnum = createAction('ADD', (amount: any) => {
  return 2;
})      

export const delnum = createAction('DEl', (amount: any) => {
  return 2;    
})           

export const setNum = createAction('SET', async (amount: any) => {
  console.log(amount, 2);
  let promise = new Promise((res)=>{
    setTimeout(()=>{
      console.log(111);
      res(3)
    }, 5000)
  });
  let data = await promise;
  return data;    
})           