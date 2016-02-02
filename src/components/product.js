import React from 'react';
// import * as Constants from '../constants';
// import { connect } from 'react-redux';

const Product = ({ name, price, quantity, addToCart, removeFromCart }) => {
  return (<div>
    Name: { name }<br/>Price: { price }<br/>Quantity: { quantity }<br/>
    <button onClick={() => { addToCart(name); } }>Add To Cart</button>
    <button onClick={() => { removeFromCart(name); } }>Remove From Cart</button>
    </div>);
};

export default Product;
