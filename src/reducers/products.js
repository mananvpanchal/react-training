/**
 * Created by Admin on 03-02-2016.
 */
import * as Constants from '../constants';

const getProductIndex = (products, product) => {
    if(product === undefined) {
        return -1;
    }
    for(let i=0;i<products.length;i++) {
        if(products[i].name === product.name) {
            return i;
        }
    }
    return -1;
};

export default (state = [], action) => {
    let index = getProductIndex(state, action.product);
    switch (action.type) {
        case Constants.ADD_TO_CART:
            if(state[index].quantity !== 0) {
                return [...state.slice(0, index),
                    Object.assign({}, state[index], {quantity: action.product.quantity - 1}),
                    ...state.slice(index + 1)
                ];
            } else {
                return state;
            }
        case Constants.REMOVE_FROM_CART:
            return [...state.slice(0, index),
                Object.assign({}, state[index], {quantity: state[index].quantity + 1}),
                ...state.slice(index + 1)
            ];
        default:
            return state;
    }
}