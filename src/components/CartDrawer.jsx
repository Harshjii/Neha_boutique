import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartDrawer = () => {
  const { isCartOpen, setIsCartOpen, cartItems, updateQty, removeFromCart, subtotal } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 1000 }}>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            style={{ 
              position: 'absolute', 
              inset: 0, 
              background: 'rgba(0,0,0,0.6)', 
              backdropFilter: 'blur(4px)' 
            }}
          />

          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{ 
              position: 'absolute', 
              top: 0, 
              right: 0, 
              width: '100%', 
              maxWidth: '440px', 
              height: '100vh', 
              background: 'var(--color-surface-bright)', 
              display: 'flex', 
              flexDirection: 'column', 
              zIndex: 1001 
            }}
          >
            <div style={{ padding: '1.5rem 2rem', borderBottom: '1px solid var(--color-outline-variant)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 className="font-serif" style={{ fontSize: '1.25rem' }}>Shopping Bag</h3>
              <button onClick={() => setIsCartOpen(false)} style={{ color: '#666' }}>
                <X size={24} />
              </button>
            </div>

            <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem 2rem' }}>
              {cartItems.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#777' }}>
                  <ShoppingBag size={48} className="text-gold" style={{ marginBottom: '1rem', margin: '0 auto' }} />
                  <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--color-primary)' }}>Your Shopping Bag is empty</p>
                  <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>Discover our latest Haute Couture collection.</p>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} style={{ display: 'flex', gap: '1rem', paddingBottom: '1.25rem', marginBottom: '1.25rem', borderBottom: '1px solid var(--color-outline-variant)' }}>
                    <img src={item.image} alt={item.name} style={{ width: '80px', height: '100px', objectFit: 'cover', borderRadius: '4px' }} />
                    <div style={{ flex: 1 }}>
                      <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.25rem' }}>{item.name}</h4>
                      <p style={{ fontSize: '0.75rem', color: 'var(--color-gold-dark)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                        {item.category} • Size: {item.size}
                      </p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--color-outline-variant)', borderRadius: '4px' }}>
                          <button onClick={() => updateQty(item.id, -1)} style={{ padding: '0.2rem 0.5rem', color: '#555' }}><Minus size={14} /></button>
                          <span style={{ padding: '0 0.5rem', fontSize: '0.85rem', fontWeight: 600 }}>{item.qty}</span>
                          <button onClick={() => updateQty(item.id, 1)} style={{ padding: '0.2rem 0.5rem', color: '#555' }}><Plus size={14} /></button>
                        </div>
                        <span style={{ fontWeight: 700, color: 'var(--color-primary)', fontSize: '0.95rem' }}>
                          ${(item.price * item.qty).toLocaleString()}
                        </span>
                      </div>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} style={{ color: '#999', alignSelf: 'flex-start' }}>
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {cartItems.length > 0 && (
              <div style={{ padding: '1.5rem 2rem', borderTop: '1px solid var(--color-outline-variant)', background: 'var(--color-surface-low)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.25rem', fontSize: '1.1rem', fontWeight: 600 }}>
                  <span>Subtotal</span>
                  <span className="text-gold">${subtotal.toLocaleString()}</span>
                </div>
                <p style={{ fontSize: '0.75rem', color: '#777', marginBottom: '1.25rem' }}>Shipping, duties, and custom fit adjustments calculated at checkout.</p>
                <button className="btn-primary btn-gold" style={{ width: '100%' }} onClick={() => alert('Proceeding to VIP Checkout...')}>
                  Proceed to Checkout
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
