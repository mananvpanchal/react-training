/**
 * Created by Admin on 04-02-2016.
 */

import React from 'react';
import { connect } from 'react-redux';
import * as Constants from '../constants';

let CartProduct = (props) => {
    let product = { prodid: props.prodid, name: props.name, price: props.price, quantity: props.quantity };
    return (<div style={{display: 'inline-block', borderStyle: 'dotted', borderWidth: 'thin', padding: '10', margin: '10'}}>
        Name: { props.name }<br/>
        Price: { props.price }<br/>
        Quantity: { props.quantity }<br/>
        Amount: { props.amount }<br/>
        <button onClick={() => { props.removeFromCart(product); } }>Remove Product</button>
    </div>);
};

CartProduct = connect(
    null,
    (dispatch) => {
        return {
            removeFromCart: (product) => {
                dispatch({type: Constants.REMOVE_FROM_CART, product});
            }
        };
    }
)(CartProduct);

export default CartProduct;