import React, {Component} from 'react';
import axios from 'axios';
import ProductItem from './ProductItem';

class Home extends Component {
    constructor (){
        super();
        this.state = {
            products: []
        };
    }

    componentWillMount() {
        this.getProducts();
    }

    getProducts() {
        axios.get('http://localhost:8888/api/inventories')
        .then(response => {
            this.setState({products: response.data}, () => {
                console.log(this.state);
            });
        })
        .catch((err) => console.log(err))
    }

    render() {
        const productItems = this.state.products.map((product, i) => {
            return (
                <ProductItem key={product.id} item={product} />
            )
        });
        return (
            <div>
                <h1>KDS Home</h1>
                <ul className="collection">
                    {productItems}
                </ul>
            </div>
        )
    }
}

export default Home;