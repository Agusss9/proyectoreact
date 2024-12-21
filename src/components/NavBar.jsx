// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import './Navbar.css'; // Asegúrate de que este archivo exista

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="brand">Home</Link>
            <ul className="categories">
                <li><Link to="/category/1">Lamborghini</Link></li>
                <li><Link to="/category/2">BMW</Link></li>
                <li><Link to="/category/3">McLaren</Link></li>
            </ul>
            <CartWidget />
        </nav>
    );
};

export default Navbar;