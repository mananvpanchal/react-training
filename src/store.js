import { createStore, combineReducers } from 'redux';
// import reducers from './reducers';
import addToCart from './reducers/add-to-cart';
import removeFromCart from './reducers/remove-from-cart';

const reducer = combineReducers({ addToCart, removeFromCart });
export const store = createStore(reducer);
