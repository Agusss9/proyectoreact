// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Checkout from './components/Checkout';
import Welcome from './components/Welcome';
import CartPage from './components/CartPage'; // Importa la nueva página del carrito
import { CartProvider } from './context/CartContext';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
    return (
        <CartProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<><Welcome /><ItemListContainer greeting="¡Bienvenido a nuestra tienda!" /></>} />
                    <Route path="/category/:id" element={<ItemListContainer />} />
                    <Route path="/item/:id" element={<ItemDetailContainer />} />
                    <Route path="/cart" element={<CartPage />} /> {/* Ruta para el carrito */}
                    <Route path="/checkout" element={<Checkout />} />
                </Routes>
            </Router>
        </CartProvider>
    );
};

export default App;