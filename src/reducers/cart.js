/**
 * Created by Admin on 03-02-2016.
 */
import * as Constants from '../constants';

const getProductIndex = (products, product) => {
    for (let i = 0; i < products.length; i++) {
        if (products[i].name === product.name) {
            return i;
        }
    }
    return -1;
};

const calculateAmount = (products, lastAmount, add) => {
    let amount = 0;
    for (let i = 0; i < products.length; i++) {
        amount = amount + products[i].amount;
    }
    return add ? amount + lastAmount : amount - lastAmount;
};

export default (state = { products: []}, action) => {
    let index = getProductIndex(state.products, action.product);
    switch (action.type) {
        case Constants.ADD_TO_CART:
            if (action.product.quantity !== 0) {
                if (index === -1) {
                    return Object.assign({}, state, {
                            products: [...state.products,
                                Object.assign(
                                    {},
                                    action.product,
                                    {quantity: 1, amount: action.product.price}
                                )
                            ]
                        },
                        {amount: state.amount === undefined ? action.product.price : state.amount + action.product.price}
                    );
                } else {
                    return Object.assign({}, state, {
                            products: [...state.products.slice(0, index),
                                Object.assign(
                                    {},
                                    action.product,
                                    {
                                        quantity: state.products[index].quantity + 1,
                                        amount: action.product.price * (state.products[index].quantity + 1)
                                    }
                                ),
                                ...state.products.slice(index + 1)
                            ]
                        },
                        {amount : state.amount + action.product.price}
                    );
                }
            } else {
                return state;
            }
        case Constants.REMOVE_FROM_CART:
            if (action.product.quantity > 1) {
                return Object.assign({}, state, {
                        products: [...state.products.slice(0, index),
                            Object.assign(
                                {},
                                action.product,
                                {
                                    quantity: state.products[index].quantity - 1,
                                    amount: action.product.price * (state.products[index].quantity - 1)
                                }
                            ),
                            ...state.products.slice(index + 1)
                        ]
                    },
                    {amount : state.amount - action.product.price}
                );
            } else {
                return Object.assign({}, state, {
                        products: [...state.products.slice(0, index),
                            ...state.products.slice(index + 1)
                        ]
                    },
                    {amount : state.amount - action.product.price}
                );
            }
        default:
            return state;
    }
};