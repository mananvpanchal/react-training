import { createStore, combineReducers } from 'redux';
import reducers from './reducers';

const finalReducer = combineReducers(reducers);

let state = {
    products: [
        {
            name: "Radio",
            price: 50,
            quantity: 10
        },
        {
            name: "Television",
            price: 100,
            quantity: 10
        },
        {
            name: "Refrigerator",
            price: 200,
            quantity: 10
        }
    ],
    cart: { products: [], amount: 0}
};
export const store = createStore(finalReducer, state);
