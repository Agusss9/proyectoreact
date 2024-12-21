// src/components/Checkout.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Checkout = () => {
    const { cartItems } = useContext(CartContext);

    const handleCheckout = () => {
        // Lógica para procesar el pago o finalizar la compra
        alert('Compra finalizada!');
    };

    return (
        <div>
            <h2>Detalle de Compra</h2>
            {cartItems.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>{item.name}</li> // Muestra el nombre del producto
                    ))}
                </ul>
            )}
            <button onClick={handleCheckout}>Finalizar Compra</button>
        </div>
    );
};

export default Checkout;