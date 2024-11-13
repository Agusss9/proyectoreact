
                    import React from 'react';
                    import CartWidget from './CartWidget';
                    import './Navbar.css';

                    function NavBar() {
                        return (
                            <nav className="navbar">
                                <h1>Nombre de la Tienda</h1>
                                <ul className="categories">
                                    <li>Categoría 1</li>
                                    <li>Categoría 2</li>
                                    <li>Categoría 3</li>
                                </ul>
                                <CartWidget />
                            </nav>
                        );
                    }

                    export default NavBar;
                