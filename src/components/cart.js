import React from 'react';

const Cart = ({ quantity, amount }) => {
  return (<div><span>Cart</span><br/>
    Quantity: {quantity}<br/>
    Amount: { amount }
    </div>);
};

export default Cart;
