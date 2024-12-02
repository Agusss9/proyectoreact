// src/components/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import './Navbar.css';

function NavBar() {
    const logoUrl = 'https://lh3.googleusercontent.com/gg/ACM6BIsPgffqTIn8Iozsh1Z3CdFu4cc770D1zpxmwEqGoGqANEkzE3bJKO6zQBcTXCT0NMTruDot522V647d7jEZEWPEz_gnixQEO-XuLiAnEVi3qPJ2-d0lfcSAJIKqvJrn8erpRK9VVsDqCWfbRlyQ1URtErfDsuhc_B9IcWAZRTlpJ_Z0Dtk=s1024'; // Reemplaza con la URL de tu logo

    return (
        <nav className="navbar">
            <Link to="/" className="brand">
                <img src={logoUrl} alt="Logo de Elite Motors" style={{ height: '40px' }} /> {/* Ajusta la altura según sea necesario */}
            </Link>
            <ul className="categories">
                <li><Link to="/category/1">Lamborghini</Link></li>
                <li><Link to="/category/2">BMW</Link></li>
                <li><Link to="/category/3">McLaren</Link></li>
            </ul>
            <CartWidget />
        </nav>
    );
}

export default NavBar;