import Cart from '../components/cart';
import { connect } from 'react-redux';

const CartImpl = connect(
  (state) => {
    return {
      amount: state.amount, quantity: state.cartquantity
    };
  },
  null
)(Cart);

export default CartImpl;
