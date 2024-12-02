// src/components/ItemListContainer.jsx
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const fetchProductsByCategory = (categoryId) => {
    const allProducts = [
        { id: 1, name: 'Lamborghini Urus', category: 1, image: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/urus/2024/model_chooser/Model%3DUrus%20SE%2C%20Type%3DMobile.png' },
        { id: 2, name: 'Lamborghini Revuelto', category: 1, image: 'https://media.es.wired.com/photos/6425e0e4b4e328f8839787f4/16:9/w_2560%2Cc_limit/Lamborghini-Revuelto-Featured-Gear.jpg' },
        { id: 3, name: 'BMW X6', category: 2, image: 'https://www.bmw.com.ar/content/dam/bmw/common/all-models/x-series/x6/2019/inform/bmw-xseries-x6-inform-lines-02-01.jpg.asset.1612778422606.jpg' },
        { id: 4, name: 'BMW M4 Competition', category: 2, image: 'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/l/RT_V_6491cb28166f4dee8a66c1e89e1b48d7.webp' },
        { id: 5, name: 'McLaren 765LT', category: 3, image: 'https://hips.hearstapps.com/hmg-prod/images/hennessey-mclaren-765lt-1-1615106775.jpg?crop=0.837xw:0.627xh;0.111xw,0.0627xh&resize=1200:*' },
        { id: 6, name: 'McLaren Senna', category: 3, image: 'https://mclaren.scene7.com/is/image/mclaren/Senna-tile-1-1200x1200:crop-4x3?wid=1920&hei=1440' },
    ];
    return allProducts.filter(product => product.category === parseInt(categoryId));
};

const ItemListContainer = ({ greeting }) => {
    const { id: categoryId } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const products = fetchProductsByCategory(categoryId);
        setProducts(products);
        setLoading(false);
    }, [categoryId]);

    if (loading) {
        return <div>Cargando productos...</div>;
    }

    return (
        <div className="item-list-container">
            <h2>{greeting}</h2>
            <p>Explora nuestra increíble selección de autos de lujo. ¡Encuentra el auto de tus sueños!</p>
            <img src="https://lh3.googleusercontent.com/gg/ACM6BIsPgffqTIn8Iozsh1Z3CdFu4cc770D1zpxmwEqGoGqANEkzE3bJKO6zQBcTXCT0NMTruDot522V647d7jEZEWPEz_gnixQEO-XuLiAnEVi3qPJ2-d0lfcSAJIKqvJrn8erpRK9VVsDqCWfbRlyQ1URtErfDsuhc_B9IcWAZRTlpJ_Z0Dtk=s1024" alt="Imagen de bienvenida" style={{ maxWidth: '15%', height: 'auto', marginBottom: '20px', marginLeft: "800px" }} />            <ul>
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