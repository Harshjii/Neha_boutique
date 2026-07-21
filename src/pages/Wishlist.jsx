import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Wishlist = () => {
  const { wishlistItems, toggleWishlist, addToCart } = useCart();

  return (
    <main className="container-custom section-spacing">
      <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
        <span className="text-label-caps text-gold">Saved Haute Couture</span>
        <h1 className="text-headline-lg font-serif" style={{ marginTop: '0.5rem' }}>Your Saved Wishlist</h1>
        <p className="text-body-md" style={{ color: 'var(--color-on-surface-muted)', marginTop: '0.5rem' }}>
          Keep track of your favorite royal lehengas, silk sarees, and custom bridal outfits.
        </p>
      </div>

      {wishlistItems.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '5rem 1rem', background: 'white', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-outline-variant)' }}>
          <Heart size={48} className="text-gold" style={{ marginBottom: '1rem', margin: '0 auto' }} />
          <h3 className="font-serif text-headline-sm" style={{ marginBottom: '0.5rem' }}>Your Wishlist is Empty</h3>
          <p style={{ color: '#777', marginBottom: '2rem' }}>Explore our latest collections and bookmark your favorite bridal ensembles.</p>
          <Link to="/shop" className="btn-primary btn-gold">Explore Collections &rarr;</Link>
        </div>
      ) : (
        <motion.div 
          layout
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2.5rem' }}
        >
          <AnimatePresence>
            {wishlistItems.map(item => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={item.id || item.name} 
                className="card-product"
              >
                <div className="card-product-image">
                  <img src={item.image} alt={item.name} />
                  <button 
                    onClick={() => toggleWishlist(item)}
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      background: 'white',
                      border: 'none',
                      borderRadius: '50%',
                      width: '36px',
                      height: '36px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: 'var(--shadow-sm)',
                      cursor: 'pointer',
                      zIndex: 3
                    }}
                  >
                    <Trash2 size={16} color="#999" />
                  </button>
                </div>
                <div className="card-info">
                  <span className="card-category">{item.category}</span>
                  <Link to="/product/1">
                    <h3 className="card-title">{item.name}</h3>
                  </Link>
                  <p className="card-price" style={{ marginBottom: '1rem' }}>${item.price.toLocaleString()}</p>
                  
                  <button 
                    className="btn-primary btn-gold" 
                    style={{ width: '100%', gap: '0.5rem', fontSize: '0.75rem', padding: '0.75rem' }}
                    onClick={() => addToCart(item)}
                  >
                    <ShoppingBag size={16} /> Move to Shopping Bag
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </main>
  );
};
