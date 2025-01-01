// src/components/CartPage.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <div>
            <h2>Carrito de Compras</h2>
            {cartItems.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            {item.name} - Cantidad: {item.quantity}
                        </li>
                    ))}
                </ul>
            )}
            <Link to="/checkout">
                <button>Finalizar Compra</button>
            </Link>
        </div>
    );
};

export default CartPage;