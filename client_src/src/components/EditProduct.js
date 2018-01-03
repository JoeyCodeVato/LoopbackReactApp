import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


class EditProduct extends Component {
    constructor(props) {
        super(props);

        this.state = {
            "name": "",
            "model": "",
            "size": "",
            "image": ""
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentWillMount() {
        this.getProductDetails();
    }

    onSubmit(e) {
        const newProduct = {
            name: this.refs.name.value,
            model: this.refs.model.value,
            size: this.refs.size.value,
            image: this.refs.image.value
        }
        this.editProduct(newProduct);
        e.preventDefault();
    }

    getProductDetails() {
        let productId = this.props.match.params.id
        axios.get(`http://localhost:8888/api/inventories/${productId}`)
        .then(response => {
            this.setState({
                "id": response.data.id,
                "name": response.data.name,
                "size": response.data.size,
                "model": response.data.model,
                "image": response.data.image
            }
            ,() => {
                console.log(this.state);
            })
        })
        .catch(err => console.log(err))
    }

    handleInputChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        
        this.setState({
            [name]: value
        });
    }

    editProduct(newProduct) {
        axios.request({
            method: "put",
            url: `http://localhost:8888/api/inventories/${this.state.id}?access_token=cZXiDX7yb9U6Lr4gMuAJG2COLyN45VTztjL911KOR2f0YTcFTicC1nksDBrgCgfJ`,
            data: newProduct
        }).then(response => {
            this.props.history.push('/');
        }).catch(err => console.log(err));
    }


    render() {
        return (
            <div>
            <br/>
            <Link to='/' className='btn grey'>Back</Link>
            <h1>Edit Product</h1>
            <form onSubmit={this.onSubmit.bind(this)}>
            <div className="input-field">
                <input type="text" name="name" ref="name" value={this.state.name} onChange={this.handleInputChange}/>
                <label htmlFor="name" className="active">Name</label>
            </div>
            <div className="input-field">
                <input type="text" name="model" ref="model" value={this.state.model} onChange={this.handleInputChange}/>
                <label htmlFor="model" className="active">Model</label>
            </div>
            <div className="input-field">
                <input type="text" name="size" ref="size" value={this.state.size} onChange={this.handleInputChange}/>
                <label htmlFor="size" className="active">Size</label>
            </div>
            <div className="input-field">
                <input type="text" name="image" ref="image" value={this.state.image} onChange={this.handleInputChange}/>
                <label htmlFor="image" className="active">Image</label>
            </div>
            <input type="submit" value="save" className="btn"/>

            </form>
            </div>
        )
    }

}

export default EditProduct