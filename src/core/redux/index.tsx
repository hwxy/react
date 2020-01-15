import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
// import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';

let reducerFile = require['context']('./reducer', true, /.tsx$/);
let reducers: object = {};
reducerFile.keys().forEach((item: string): void => {
    let value: object = reducerFile(item).default;
    Object.assign(reducers, value);
})
         
let middlware: any[] = [promiseMiddleware];

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(
  combineReducers(reducers),    
  composeEnhancers(applyMiddleware(...middlware))
)
