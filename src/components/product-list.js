/**
 * Created by Admin on 04-02-2016.
 */

import React from 'react';
import Product from './product';
import { connect } from 'react-redux';

let ProductList = ({ products }) => {
    let productList = products.map((product, index) => {
        return <Product key={index} prodid={index} name={product.name} price={product.price} quantity={product.quantity} />
    });
    return (<div>
        <span>Product List</span><br/>
        {productList}
    </div>);
};

ProductList = connect(
    (state) => {
        return {
            products: state.products
        }
    },
    null
)(ProductList);

export default ProductList;