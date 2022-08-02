import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar_container">
            <div className="navbar_content">
                <Link to='/'>Poke<span>Champions</span></Link>
            </div>
        </div>
    )
}

export default Navbar