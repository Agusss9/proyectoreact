// src/components/ItemDetail.jsx
import React from 'react';
import ItemQuantitySelector from './ItemQuantitySelector';
import Description from './Description';
import AddItemButton from './AddItemButton';

const ItemDetail = ({ product }) => {
    return (
        <div>
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} />
            <Description description={product.description} />
            <ItemQuantitySelector />
            <AddItemButton product={product} /> {/* Asegúrate de que se pase el producto */}
        </div>
    );
};

export default ItemDetail;