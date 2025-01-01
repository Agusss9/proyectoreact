// src/components/ItemListContainer.jsx
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { db } from '../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = () => {
    const { id: categoryId } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const productsCollection = collection(db, 'products');
                let q;
                if (categoryId) {
                    q = query(productsCollection, where('category', '==', parseInt(categoryId)));
                } else {
                    q = productsCollection;
                }
                const querySnapshot = await getDocs(q);
                console.log("Query Snapshot:", querySnapshot); // Depuración
                const productsData = querySnapshot.docs.map(doc => {
                    const data = doc.data();
                    console.log("Document Data:", data); // Depuración
                    return {
                        id: doc.id,
                        name: data.name,
                        description: data.description,
                        image: data.image,
                        category: data.category,
                    };
                });
                setProducts(productsData);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [categoryId]);

    if (loading) {
        return <div>Cargando productos...</div>;
    }

    return (
        <div className="item-list-container">
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <Link to={`/item/${product.id}`}>
                            <img src={product.image} alt={product.name} />
                            <span>{product.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemListContainer;