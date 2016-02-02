import * as Constants from '../constants';
import Product from '../components/product';
import { connect } from 'react-redux';

const ProductImpl = connect(
  (state) => { return { name: state.name, price: state.price, quantity: state.prodquantity }; },
  (dispatch) => {
    return {
      addToCart: (name) => {
        console.log(name);
        dispatch({ type: Constants.ADD_TO_CART, name });
      }
    };
  }
)(Product);

export default ProductImpl;
