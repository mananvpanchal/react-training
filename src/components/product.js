import React from 'react';
import * as Constants from '../constants';
import { connect } from 'react-redux';

let Product = ({ name, price, quantity, addToCart }) => {
  return (<div>
    Name: { name }<br/>Price: { price }<br/>Quantity: { quantity }<br/>
    <button onClick={() => { addToCart(name); } }>Add To Cart</button>
    </div>);
};

Product = connect(
  (state) => {
    console.log(state);
    return {
      name: state.name, price: state.price, quantity: state.prodquantity
    };
  },
  (dispatch) => {
    return {
      addToCart: (name) => {
        dispatch({ type: Constants.ADD_TO_CART, name });
      }
    };
  }
)(Product);
export default Product;
