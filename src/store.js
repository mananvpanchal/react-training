import { createStore, combineReducers } from 'redux';
import reducers from './reducers';

const finalReducer = combineReducers(reducers);
export const store = createStore(finalReducer);
