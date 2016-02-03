import React from 'react';
import ProductImpl from './product-impl';
import CartImpl from './cart-impl';

class App extends React.Component {
  render() {
    const name = 'Radio';
    const price = 50;
    const quantity = 10;
    const cartQuantity = 0;
    return (<div><ProductImpl name={name} price={price} quantity={quantity}/><CartImpl quantity={cartQuantity} /></div>);
  }
}
export default App;
