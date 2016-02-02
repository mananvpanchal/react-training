import { createStore } from 'redux';
// import reducers from './reducers';
import reducer from './reducers/add-to-cart';

export const store = createStore(reducer);
