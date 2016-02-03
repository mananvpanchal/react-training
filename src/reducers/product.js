/**
 * Created by Admin on 03-02-2016.
 */
import * as Constants from '../constants';

export default (state = {}, action) => {
    switch (action.type) {
        case Constants.ADD_TO_CART:
            return Object.assign({}, state, { quantity: state.quantity - 1 });
        case Constants.REMOVE_FROM_CART:
            return Object.assign({}, state, { quantity: state.quantity + 1 });
        default:
            return state;
    }
}