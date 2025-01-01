// src/components/ItemDetailContainer.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import AddItemButton from './AddItemButton';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            try {
                const productRef = doc(db, 'products', id);
                const productSnap = await getDoc(productRef);
                if (productSnap.exists()) {
                    setProduct({ id: productSnap.id, ...productSnap.data() });
                } else {
                    console.log("Producto no encontrado");
                }
            } catch (error) {
                console.error("Error fetching product:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return <div>Cargando detalles del producto...</div>;
    }

    if (!product) {
        return <div>Producto no encontrado.</div>;
    }

    return (
        <div className="item-detail-container">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto' }} />
            <AddItemButton product={product} /> {/* Usar AddItemButton aquí */}
        </div>
    );
};

export default ItemDetailContainer;