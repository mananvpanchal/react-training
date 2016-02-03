import * as Constants from '../constants';
import Product from '../components/product';
import { connect } from 'react-redux';

const ProductImpl = connect(
  (state, { name, price, quantity }) => {
    if(state.product.name === undefined) {
      state.product = Object.assign({}, {name: name, price: price, quantity: quantity});
    }
    return {
      product: state.product,
      cart: state.cart
    }
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
