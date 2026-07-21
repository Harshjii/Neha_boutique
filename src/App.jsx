import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { MobileNav } from './components/MobileNav';
import { CartDrawer } from './components/CartDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { Footer } from './components/Footer';

import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetail } from './pages/ProductDetail';
import { CustomStudio } from './pages/CustomStudio';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

import { Checkout } from './pages/Checkout';
import { OrderConfirmation } from './pages/OrderConfirmation';
import { Account } from './pages/Account';
import { Wishlist } from './pages/Wishlist';
import { SizeGuide } from './pages/SizeGuide';
import { Events } from './pages/Events';
import { FAQ } from './pages/FAQ';

import './styles.css';

export function App() {
  return (
    <CartProvider>
      <Router>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <MobileNav />
          <CartDrawer />
          <QuickViewModal />
          
          <div style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/custom-studio" element={<CustomStudio />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />

              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order-confirmation" element={<OrderConfirmation />} />
              <Route path="/account" element={<Account />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/size-guide" element={<SizeGuide />} />
              <Route path="/events" element={<Events />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
