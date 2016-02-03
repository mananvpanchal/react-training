import Cart from '../components/cart';
import { connect } from 'react-redux';

const CartImpl = connect(
  (state, { quantity }) => {
    if(state.cart.quantity === undefined) {
      state.cart = Object.assign({}, {quantity: quantity});
    }
    return {
      product: state.product,
      cart: state.cart
    };
  },
  null
)(Cart);

export default CartImpl;
