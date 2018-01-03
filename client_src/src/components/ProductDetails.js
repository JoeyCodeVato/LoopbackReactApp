import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


class ProductDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            details: ''
        };
    }

    componentWillMount() {
        this.getProduct();
    }

    onDelete() {
        let productId = this.state.details.id;

        axios.delete(`http://localhost:8888/api/inventories/${productId}?access_token=cZXiDX7yb9U6Lr4gMuAJG2COLyN45VTztjL911KOR2f0YTcFTicC1nksDBrgCgfJ`)
        .then(response => {
            this.props.history.push('/');
        }).catch(err => console.log());
    }

    getProduct(id) {
        let productId = this.props.match.params.id
        axios.get(`http://localhost:8888/api/inventories/${productId}`)
        .then(response => {
            this.setState({details: response.data}, () => {
            });
        })
        .catch((err) => console.log(err))
    }

    render() {
        return (
            <div>
                <br/>
                <Link to='/' className='btn grey'>Back</Link>
                <h1>{this.state.details.name}</h1>
                <ul className='collections'>
                <li className='collections-item'>Available Sizes: {this.state.details.size}</li>
                <li className='collections-item'> <img src={this.state.details.image} alt='{this.state.details.name}'/></li>
                </ul>
                <Link className='btn' to={`/inventories/edit/${this.state.details.id}`}>Edit</Link>
                <button onClick={this.onDelete.bind(this)} className='btn red right'>Delete</button>
            </div>
        )
    }

}

export default ProductDetails