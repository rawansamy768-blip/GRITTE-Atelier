  import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import Catalog from './pages/Catalog';
import Collections from './pages/Collections';
import About from './pages/About';
import Returns from './pages/Returns';
import Checkout from './pages/Checkout';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
    );
  };

  const handleRemoveItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleToggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const totalCartCount = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);

  return (
    <Router>
      <ScrollToTop />
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', width: '100%' }}>
        <Navbar cartCount={totalCartCount} wishlistCount={wishlist.length} />
        <main style={{ flexGrow: 1, width: '100%' }}>
          <Routes>
            <Route path="/" element={<Home onAddToCart={handleAddToCart} onToggleWishlist={handleToggleWishlist} wishlist={wishlist} cart={cart} />} />
            <Route path="/catalog" element={<Catalog onAddToCart={handleAddToCart} onToggleWishlist={handleToggleWishlist} wishlist={wishlist} cart={cart} />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/about" element={<About />} />
            <Route path="/returns" element={<Returns />} />
            <Route path="/product/:id" element={<ProductDetails onAddToCart={handleAddToCart} onToggleWishlist={handleToggleWishlist} wishlist={wishlist} cart={cart} />} />
            <Route path="/cart" element={<Cart cart={cart} onUpdateQuantity={handleUpdateQuantity} onRemoveItem={handleRemoveItem} />} />
            <Route path="/checkout" element={<Checkout cart={cart} onClearCart={handleClearCart} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}