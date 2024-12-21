// src/components/ItemDetailContainer.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import Slider from 'react-slick'; // Importa el componente Slider
import AddItemButton from './AddItemButton'; // Asegúrate de que la ruta sea correcta

const fetchProductById = (id) => {
    const allProducts = [
        { id: 1, name: 'Lamborghini Urus', description: 'El Lamborghini Urus: El SUV superdeportivo que redefine los límites de la potencia y el lujo. Experimenta la adrenalina de un superdeportivo combinado con la versatilidad de un SUV.', 
            images: [
            'https://wallpapers.com/images/hd/lamborghini-urus-1920-x-1080-wallpaper-nw8rj8and1jg9j37.jpg', 
            'https://wallpapers.com/images/hd/lamborghini-urus-5120-x-2880-wallpaper-6y0atx084wc4jksm.jpg'
        ]  },
        { id: 2, name: 'Lamborghini Revuelto', description: 'El Lamborghini Revuelto: El futuro de los superdeportivos ha llegado. Combinando un motor V12 atmosférico con tres motores eléctricos, el Revuelto ofrece una potencia y una agilidad sin precedentes, redefiniendo los límites de la performance.', 
            images: [
            'https://preview.redd.it/a1naz2f91usa1.jpg?auto=webp&s=e04b73b6a3f1274532c08207d233fdc071010920', 
            'https://preview.redd.it/lamborghini-revuelto-1920x1080-v0-aqeycw1o3o1b1.jpg?auto=webp&s=a1df700bf0bd9c6863175574f3c8566c730af436'
        ]  },
        { id: 3, name: 'BMW X6', description: 'La fusión perfecta entre diseño deportivo y versatilidad. Su silueta coupé, combinada con una potente motorización y un chasis dinámico, te brinda una experiencia de conducción única en su clase.', 
            images: [
            'https://images6.alphacoders.com/107/thumb-1920-1070728.jpg', 
            'https://wallpapers.com/images/hd/bmw-x6-m-pictures-ac66uv7us59so0br.jpg'
        ]  },
        { id: 4, name: 'Bmw M4 Competition', description: 'Un concentrado de adrenalina en cada curva. Con un motor de seis cilindros en línea biturbo y una puesta a punto orientada a la pista, el M4 Competition ofrece una experiencia de conducción que te dejará sin aliento.' , 
            images: [
            'https://preview.redd.it/o2fkfbozrcpc1.jpeg?auto=webp&s=554ff261dec55bc10ecae84530f9244eb0b8ace7', 
            'https://wallpapers.com/images/featured/fondods-de-bmw-m4-f4nqi6xjpni7ls9r.jpg'
        ]  },
        { id: 5, name: 'McLaren 765LT', description: 'Un cohete de carretera. Con un motor V8 biturbo de 765 CV, el 765LT ofrece una aceleración brutal y una experiencia de conducción visceral que te dejará sin aliento.' , 
            images: [
            'https://wallpapers.com/images/hd/mclaren-765lt-1920-x-1080-wallpaper-56sxw2pbvfn5xnf8.jpg', 
            'https://images3.alphacoders.com/110/1106316.jpg'
        ]  },
        { id: 6, name: 'McLaren Senna', description: 'Un arma de circuito disfrazada de coche de calle. Con un motor V8 biturbo de 800 CV y un chasis de fibra de carbono ultraligero, el Senna ofrece una aceleración brutal y una agilidad sin igual.' , 
            images: [
            'https://preview.redd.it/8hirjogrvq971.jpg?auto=webp&s=f07e5a04fd2427a553139c9109f41bf9c969c091', 
            'https://uhdwallpapers.org/uploads/converted/18/07/02/mclaren-senna-wallpaper-1920x1080_96748-mm-90.jpg'
        ]  },
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
            <Slider>
                {product.images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`Imagen ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
                    </div>
                ))}
            </Slider>
            <AddItemButton product={product} /> {/* Botón para agregar al carrito */}
            <button onClick={() => alert('Consulta enviada!')}>Consultar</button> {/* Botón de consulta */}
        </div>
    );
};

export default ItemDetailContainer;