import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export const QuickViewModal = () => {
  const { quickViewItem, setQuickViewItem, addToCart, toggleWishlist, isInWishlist } = useCart();
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Royal Crimson');
  const [qty, setQty] = useState(1);

  if (!quickViewItem) return null;

  const colorSwatches = [
    { name: 'Royal Crimson', hex: '#7a001e' },
    { name: 'Emerald Green', hex: '#004d25' },
    { name: 'Champagne Gold', hex: '#d4af37' },
    { name: 'Ivory White', hex: '#f7f4ed' }
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'Custom Fit'];
  const bookmarked = isInWishlist(quickViewItem.name);

  return (
    <AnimatePresence>
      <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setQuickViewItem(null)}
          style={{ 
            position: 'absolute', 
            inset: 0, 
            background: 'rgba(0,0,0,0.65)', 
            backdropFilter: 'blur(6px)' 
          }}
        />

        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          style={{ 
            position: 'relative', 
            width: '90%', 
            maxWidth: '920px', 
            maxHeight: '90vh', 
            background: 'white', 
            borderRadius: 'var(--radius-md)', 
            overflowY: 'auto', 
            padding: '2.5rem', 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '2.5rem',
            zIndex: 1001 
          }}
        >
          <button 
            onClick={() => setQuickViewItem(null)} 
            style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', color: '#333' }}
          >
            <X size={24} />
          </button>

          <div>
            <div style={{ position: 'relative' }}>
              <img 
                src={quickViewItem.image} 
                alt={quickViewItem.name} 
                style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', borderRadius: 'var(--radius-sm)' }}
              />
              <button 
                onClick={() => toggleWishlist(quickViewItem)}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 'var(--shadow-sm)',
                  cursor: 'pointer'
                }}
              >
                <Heart size={20} fill={bookmarked ? 'var(--color-gold)' : 'none'} color={bookmarked ? 'var(--color-gold)' : '#333'} />
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span className="card-category">{quickViewItem.categoryName || quickViewItem.category}</span>
            <h2 className="font-serif text-headline-md" style={{ margin: '0.35rem 0' }}>{quickViewItem.name}</h2>
            <div className="text-gold" style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '1.25rem' }}>
              ${quickViewItem.price.toLocaleString()}
            </div>

            {/* Color Swatches */}
            <div style={{ marginBottom: '1.25rem' }}>
              <span className="text-label-caps" style={{ display: 'block', marginBottom: '0.5rem' }}>
                Color: <span style={{ color: 'var(--color-gold-dark)', fontWeight: 700 }}>{selectedColor}</span>
              </span>
              <div style={{ display: 'flex', gap: '0.65rem' }}>
                {colorSwatches.map(swatch => (
                  <button
                    key={swatch.name}
                    onClick={() => setSelectedColor(swatch.name)}
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: swatch.hex,
                      border: selectedColor === swatch.name ? '2px solid var(--color-gold)' : '1px solid #ddd',
                      outline: selectedColor === swatch.name ? '2px solid var(--color-primary)' : 'none',
                      cursor: 'pointer'
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span className="text-label-caps">Select Size</span>
                <Link to="/size-guide" onClick={() => setQuickViewItem(null)} style={{ fontSize: '0.75rem', color: 'var(--color-gold)', textDecoration: 'underline' }}>
                  Size Guide &rarr;
                </Link>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    style={{
                      padding: '0.45rem 0.85rem',
                      border: selectedSize === size ? '1px solid var(--color-gold)' : '1px solid var(--color-outline-variant)',
                      background: selectedSize === size ? 'var(--color-primary)' : 'white',
                      color: selectedSize === size ? 'white' : 'var(--color-primary)',
                      borderRadius: '4px',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
              <button 
                className="btn-primary btn-gold" 
                style={{ flex: 1, gap: '0.5rem' }}
                onClick={() => {
                  addToCart(quickViewItem, { size: selectedSize, color: selectedColor });
                  setQuickViewItem(null);
                }}
              >
                <ShoppingBag size={18} /> Add to Shopping Bag
              </button>
            </div>

            <Link 
              to="/product/1" 
              onClick={() => setQuickViewItem(null)}
              style={{ fontSize: '0.85rem', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '0.35rem', fontWeight: 600 }}
            >
              View Full Product Details <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
