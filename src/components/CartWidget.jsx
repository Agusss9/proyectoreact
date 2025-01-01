// src/components/CartWidget.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <div className="cart-widget">
            🛒 <span>{cartItems.length}</span>
        </div>
    );
};

export default CartWidget;