import * as Constants from '../constants';

const reducer = (state = {}, action) => {
  if (action.type === Constants.ADD_TO_CART) {
    // console.log(state.prodquantity === undefined);
    if (state.prodquantity === 0) {
      return state;
    } else {
      return Object.assign({}, { name: action.name },
      { price: state.price },
      { prodquantity: state.prodquantity === 0 ? 0 : state.prodquantity - 1 },
      { cartquantity: state.cartquantity === undefined ? 1 : state.cartquantity + 1 },
      { amount: state.price === undefined ? 0 : state.price * (state.cartquantity === undefined ? 1 : state.cartquantity + 1) });
    }
  } else if (action.type === Constants.REMOVE_FROM_CART) {
    // console.log(state.prodquantity === undefined);
    if (state.cartquantity === undefined || state.cartquantity === 0) {
      return state;
    } else {
      return Object.assign({}, { name: action.name },
      { price: state.price },
      { prodquantity: state.prodquantity === undefined ? 0 : state.prodquantity + 1 },
      { cartquantity: state.cartquantity === undefined ? 1 : state.cartquantity - 1 },
      { amount: state.price === undefined ? 0 : state.price * (state.cartquantity === undefined ? 1 : state.cartquantity - 1) });
    }
  } else {
    return state;
  }
};
export default reducer;
