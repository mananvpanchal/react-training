import React from 'react';
import ProductList from './product-list';
import Cart from './cart';

class App extends React.Component {
    render() {
        return (<div><ProductList /><Cart /></div>)
    }
}
export default App;
