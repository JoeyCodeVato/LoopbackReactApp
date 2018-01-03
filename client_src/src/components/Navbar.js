import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {

        return (
            <div>
                <nav className="blue darken-3">
                    <div className="nav-wrapper">
                        <a href="/" className="center brand-logo">Kool Design Teez</a>
                        <a  data-activates="main-menu" className="button-collapse show-on-large">
                        <i className="fa fa-bars"></i>
                        </a>
                        <ul className="side-nav" id="main-menu">
                            <li><Link to="/"><i className="fa fa-users"></i>Men's Shirts</Link></li>
                            <li><Link to="/inventories/add"><i className="fa fa-plus"></i>Add Shirt</Link></li>
                            <li><Link to="/about"><i className="fa fa-question-circle"></i>About</Link></li>
                        </ul>
                        <ul className="left hide-on-small-only">
                                <li><Link to="/"><i className="fa fa-users"></i>Home</Link></li>
                        </ul>
                    </div>
                </nav>

            </div>
        )
    }
}

export default Navbar;