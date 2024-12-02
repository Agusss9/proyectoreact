// src/components/ItemListContainer.jsx
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

// Simulación de productos (puedes reemplazar esto con una llamada a una API)
const fetchProductsByCategory = (categoryId) => {
    // Simulación de productos según la categoría
    const allProducts = [
        { id: 1, name: 'Lamborghini Urus', category: 1 },
        { id: 2, name: 'Lamborghini Revuelto', category: 1 },
        { id: 3, name: 'BMW X6', category: 2 },
        { id: 4, name: 'Bmw M4 Competition', category: 2 },
        { id: 5, name: 'McLaren 765LT', category: 3 },
        { id: 6, name: 'McLaren Senna', category: 3 },
    ];
    return allProducts.filter(product => product.category === parseInt(categoryId));
};

const ItemListContainer = ({ greeting }) => {
    const { id: categoryId } = useParams(); // Obtener el id de la categoría
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const products = fetchProductsByCategory(categoryId);
        setProducts(products);
        setLoading(false);
    }, [categoryId]); // Dependencia en categoryId

    if (loading) {
        return <div>Cargando productos...</div>;
    }

    return (
        <div className="item-list-container">
            <h2>{greeting}</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <Link to={`/item/${product.id}`}>{product.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemListContainer;