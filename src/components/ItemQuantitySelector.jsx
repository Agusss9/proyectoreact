// src/components/ItemQuantitySelector.jsx
import React, { useState } from 'react';
const ItemQuantitySelector = ({ min = 1, max = 10, onQuantityChange }) => {
    const [quantity, setQuantity] = useState(min);

    const handleChange = (e) => {
        const value = Math.max(min, Math.min(max, e.target.value)); // Asegura que el valor esté dentro de los límites
        setQuantity(value);
        if (onQuantityChange) {
            onQuantityChange(value); // Llama al callback si se proporciona
        }
    };

    return (
        <div className="quantity-selector">
            <button onClick={() => handleChange({ target: { value: quantity - 1 } })} disabled={quantity <= min}>-</button>
            <input 
                type="number" 
                value={quantity} 
                onChange={handleChange} 
                min={min} 
                max={max} 
                className="quantity-input"
            />
            <button onClick={() => handleChange({ target: { value: quantity + 1 } })} disabled={quantity >= max}>+</button>
        </div>
    );
};

export default ItemQuantitySelector;