import React from 'react';
// import * as Constants from '../constants';
// import { connect } from 'react-redux';

const Product = ({ product, addToCart, removeFromCart }) => {
  return (<div>
    Name: { product.name }<br/>Price: { product.price }<br/>Quantity: { product.quantity }<br/>
    <button onClick={() => { addToCart(product.name); } }>Add To Cart</button>
    <button onClick={() => { removeFromCart(product.name); } }>Remove From Cart</button>
    </div>);
};

export default Product;
