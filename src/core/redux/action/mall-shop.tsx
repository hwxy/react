
import { createAction } from 'redux-actions';

// 第二个参数为 payload 的转换器
export const addnum = createAction('ADD', (amount: any) => {
  console.log(amount, 2);
  return 4;
})