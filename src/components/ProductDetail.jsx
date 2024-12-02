// src/components/ProductDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();

    return (
        <div className="product-detail">
            <h2>Detalle del Producto {id}</h2>
            <p>Aquí se mostrarán los detalles del producto con ID: {id}</p>
            {/* Aquí puedes agregar más información sobre el producto */}
        </div>
    );
};

export default ProductDetail;