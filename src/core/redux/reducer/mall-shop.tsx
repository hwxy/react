import {handleActions, combineActions, createAction } from 'redux-actions';

const defaultState = { counter: 10 };

const mallShop = handleActions(
  {
    ADD: (
      state,
      action
    ) => {
      console.log(action,22);
      return { ...state, counter: state.counter + (action as any).payload.counter };
    }
  },
  defaultState
);

export default {
  mallShop
}