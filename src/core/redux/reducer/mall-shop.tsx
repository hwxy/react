import {handleActions, combineActions, createAction } from 'redux-actions';

const defaultState = { counter: 10 };

const mallShop = handleActions(
  {
    ADD: (
      state,
      action
    ) => {
      console.log(action, 'ADD');
      return { ...state, counter: state.counter + (action as any).payload.counter };
    },
    DEl: (
      state,
      action
    ) => {
      console.log(action, 'DEl');
      return { ...state, counter: state.counter + (action as any).payload.counter };
    }
  }, 
  defaultState
);

export default {
  mallShop
}