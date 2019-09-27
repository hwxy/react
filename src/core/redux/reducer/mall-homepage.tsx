import {handleActions, combineActions, createAction } from 'redux-actions';
import { combineReducers } from 'redux'

const defaultState = { counter: 10 };

const mallPage = handleActions(
  {
    ADD: (
      state,
      action
    ) => {
      console.log(action, 'homePageADD');
      return { ...state, counter: state.counter + (action as any).payload.counter };
    },
  },
  defaultState
);

const mallPage2 = handleActions(
  {
    DEl: (
      state,
      action
    ) => {
      console.log(action, 'homePageDEl');
      return { ...state, counter: state.counter + (action as any).payload.counter };
    }
  },
  defaultState
);



export default {
  mallPage: combineReducers({
    mallPage,
    mallPage2
  })
}