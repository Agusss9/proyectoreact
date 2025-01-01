// src/components/AddItemButton.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const AddItemButton = ({ product }) => {
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = () => {
        addToCart(product);
        alert(`${product.name} ha sido agregado al carrito!`); // Mensaje de confirmación
    };

    return <button onClick={handleAddToCart}>Agregar al Carrito</button>;
};

export default AddItemButton;