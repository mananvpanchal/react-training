import React from 'react';

const Cart = ({ cart }) => {
  return (<div><span>Cart</span><br/>
    Quantity: {cart.quantity}<br/>
    </div>);
};

export default Cart;
