import { handleActions } from 'redux-actions';

const defaultState = { num: 10 };

const mallShop = handleActions(
  {
    SHOP__ADD: (
      state,
      action
    ) => {
      let num = action.payload + (state.num  as any);      
      return { ...state, num };
    },
    SHOP__DEl: (   
      state,
      action     
    ) => {
      console.log(action, 'DEl');
      return { ...state };
    },
    SHOP__SET: (   
      state,
      action
    ) => {
      console.log(action, 'Set');
      return { ...state };
    },
  }, 
  defaultState
);

export default {
  mallShop
}