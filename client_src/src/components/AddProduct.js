import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


class AddProduct extends Component {
    addProduct(newProduct) {
        axios.request({
            method: "post",
            url: "http://localhost:8888/api/inventories?access_token=cZXiDX7yb9U6Lr4gMuAJG2COLyN45VTztjL911KOR2f0YTcFTicC1nksDBrgCgfJ",
            data: newProduct
        }).then(response => {
            this.props.history.push('/');
        }).catch(err => console.log(err));
    }

    onSubmit(e) {
        const newProduct = {
            name: this.refs.name.value,
            model: this.refs.model.value,
            size: this.refs.size.value,
            image: this.refs.image.value
        }
        this.addProduct(newProduct);
        e.preventDefault();
    }
    render() {
        return (
            <div>
            <br/>
            <Link to='/' className='btn grey'>Back</Link>
            <h1>Add Product</h1>
            <form onSubmit={this.onSubmit.bind(this)}>
            <div className="input-field">
                <input type="text" name="name" ref="name"/>
                <label htmlFor="name">Name</label>
            </div>
            <div className="input-field">
                <input type="text" name="model" ref="model"/>
                <label htmlFor="model">Model</label>
            </div>
            <div className="input-field">
                <input type="text" name="size" ref="size"/>
                <label htmlFor="size">Size</label>
            </div>
            <div className="input-field">
                <input type="text" name="image" ref="image"/>
                <label htmlFor="image">Image</label>
            </div>
            <input type="submit" value="save" className="btn"/>

            </form>
            </div>
        )
    }

}

export default AddProduct