
import { createAction } from 'redux-actions';

// 第二个参数为 payload 的转换器
export const addnum = createAction('ADD', (amount: any) => {
  return 2;
})      

export const delnum = createAction('DEl', (amount: any) => {
  return 2;
})      