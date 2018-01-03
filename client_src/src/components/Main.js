import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
import ProductDetails from './ProductDetails';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';

const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/inventories/add" component={AddProduct}/>
            <Route path="/inventories/edit/:id" component={EditProduct}/>
            <Route path="/inventories/:id" component={ProductDetails}/>
            </Switch>
    </main>
)

export default Main;