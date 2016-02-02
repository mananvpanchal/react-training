import * as Constants from '../constants';

const addToCart = (state = { name: 'Radio', prodquantity: 0, cartquantity: 0, price: 0, amount: 0 }, action) => {
  if (action.type === Constants.ADD_TO_CART) {
    const newState = {};
    newState.name = state.name;
    newState.prodquantity = state.prodquantity - 1;
    newState.cartquantity = state.cartquantity + 1;
    newState.amount = state.price * state.cartquantity;
    return newState;
  } else {
    return state;
  }
};
export default addToCart;
