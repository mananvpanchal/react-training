import * as Constants from '../constants';
import Product from '../components/product';
import { connect } from 'react-redux';

const ProductImpl = connect(
  (state, { name, price, quantity }) => {
    if (state.prodquantity === undefined) {
      Object.assign(state, { prodquantity: quantity });
    }
    if (state.price === undefined) {
      Object.assign(state, { price });
    }
    console.log(state);
    return {
      name, price, quantity: state.prodquantity
    };
  },
  (dispatch) => {
    return {
      addToCart: (name) => {
        dispatch({ type: Constants.ADD_TO_CART, name });
      },
      removeFromCart: (name) => {
        dispatch({ type: Constants.REMOVE_FROM_CART, name });
      }
    };
  }
)(Product);

export default ProductImpl;
