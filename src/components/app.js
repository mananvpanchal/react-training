import React from 'react';
import ProductImpl from './product-impl';
import CartImpl from './cart-impl';

class App extends React.Component {
  render() {
    const name = 'Radio';
    const price = 50;
    const quantity = 10;
    return (<div><ProductImpl name={name} price={price} quantity={quantity}/><CartImpl /></div>);
  }
}
export default App;
