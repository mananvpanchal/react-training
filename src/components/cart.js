import React from 'react';
import { connect } from 'react-redux';
import * as Constants from '../constants';
import CartProduct from './cart-product';

let Cart = ({ cart }) => {
    let productList = cart.products.map((product, index) => {
        return <CartProduct key={index} prodid={index} name={product.name} price={product.price}
                            quantity={product.quantity} amount={product.amount}/>
    });
    return (<div><span>Cart Products</span><br/>
        {productList}<br/>
        <span>Amount: {cart.amount}</span>
    </div>);
};

Cart = connect(
    (state) => {
        return {
            cart: state.cart
        };
    },
    null
)(Cart);

export default Cart;
