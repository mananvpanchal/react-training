import React from 'react';
import { connect } from 'react-redux';
import * as Constants from '../constants';

let Product = (props) => {
    let product = { prodid: props.prodid, name: props.name, price: props.price, quantity: props.quantity };
    return (<div style={{display: 'inline-block', borderStyle: 'dotted', borderWidth: 'thin', padding: '10', margin: '10'}}>
        Name: { props.name }<br/>
        Price: { props.price }<br/>
        Quantity: { props.quantity }<br/>
        <button onClick={() => { props.addToCart(product); } }>Add Product</button>
    </div>);
};

Product = connect(
    null,
    (dispatch) => {
        return {
            addToCart: (product) => {
                dispatch({type: Constants.ADD_TO_CART, product});
            }
        };
    }
)(Product);

export default Product;
