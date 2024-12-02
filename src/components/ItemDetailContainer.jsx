// src/components/ItemDetailContainer.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Simulación de un producto
const fetchProductById = (id) => {
    const allProducts = [
        { id: 1, name: 'Lamborghini Urus', description: 'El Lamborghini Urus: El SUV superdeportivo que redefine los límites de la potencia y el lujo. Experimenta la adrenalina de un superdeportivo combinado con la versatilidad de un SUV.' },
        { id: 2, name: 'Lamborghini Revuelto', description: 'El Lamborghini Revuelto: El futuro de los superdeportivos ha llegado. Combinando un motor V12 atmosférico con tres motores eléctricos, el Revuelto ofrece una potencia y una agilidad sin precedentes, redefiniendo los límites de la performance.' },
        { id: 3, name: 'BMW X6', description: 'La fusión perfecta entre diseño deportivo y versatilidad. Su silueta coupé, combinada con una potente motorización y un chasis dinámico, te brinda una experiencia de conducción única en su clase.' },
        { id: 4, name: 'Bmw M4 Competition', description: 'Un concentrado de adrenalina en cada curva. Con un motor de seis cilindros en línea biturbo y una puesta a punto orientada a la pista, el M4 Competition ofrece una experiencia de conducción que te dejará sin aliento.' },
        { id: 5, name: 'McLaren 765LT', description: 'Un cohete de carretera. Con un motor V8 biturbo de 765 CV, el 765LT ofrece una aceleración brutal y una experiencia de conducción visceral que te dejará sin aliento.' },
        { id: 6, name: 'McLaren Senna', description: 'Un arma de circuito disfrazada de coche de calle. Con un motor V8 biturbo de 800 CV y un chasis de fibra de carbono ultraligero, el Senna ofrece una aceleración brutal y una agilidad sin igual.' },
    ];
    return allProducts.find(product => product.id === parseInt(id));
};

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const product = fetchProductById(id);
        setProduct(product);
        setLoading(false);
    }, [id]); // Dependencia en id

    if (loading) {
        return <div>Cargando detalles del producto...</div>;
    }

    return (
        <div className="item-detail-container">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
        </div>
    );
};

export default ItemDetailContainer;