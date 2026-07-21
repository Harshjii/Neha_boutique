import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, Sparkles, CheckCircle, Ruler } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const ProductDetail = () => {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState('Standard (M)');
  const [mainImg, setMainImg] = useState('https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=1200');

  const product = {
    id: '1',
    name: 'Noor Zardozi Velvet Lehenga',
    category: 'Bridal Couture',
    price: 3450,
    image: mainImg
  };

  const thumbs = [
    'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1583391733975-207d579294f5?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=600'
  ];

  return (
    <main className="container-custom section-spacing">
      <div style={{ fontSize: '0.8rem', color: '#777', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2rem' }}>
        <Link to="/">Home</Link> &nbsp;/&nbsp; <Link to="/shop">Bridal Collection</Link> &nbsp;/&nbsp; <span style={{ color: 'var(--color-primary)' }}>Noor Zardozi Velvet Lehenga</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'start' }}>
        <div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key={mainImg}
            transition={{ duration: 0.4 }}
            style={{ aspectRatio: '3/4', borderRadius: 'var(--radius-sm)', overflow: 'hidden', background: 'var(--color-surface-low)', marginBottom: '1rem' }}
          >
            <img src={mainImg} alt="Product Detail View" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </motion.div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem' }}>
            {thumbs.map((thumb, idx) => (
              <img 
                key={idx}
                src={thumb} 
                alt={`Thumb ${idx}`} 
                onClick={() => setMainImg(thumb)} 
                style={{ 
                  aspectRatio: '1', 
                  objectFit: 'cover', 
                  borderRadius: '4px', 
                  cursor: 'pointer', 
                  border: mainImg === thumb ? '2px solid var(--color-gold)' : '1px solid var(--color-outline-variant)' 
                }}
              />
            ))}
          </div>
        </div>

        <div>
          <span className="text-label-caps text-gold">Bridal Flagship Ensemble</span>
          <h1 className="text-headline-lg font-serif" style={{ marginTop: '0.35rem', marginBottom: '0.75rem' }}>
            Noor Zardozi Velvet Lehenga
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span className="text-gold" style={{ fontSize: '1.75rem', fontWeight: 700 }}>$3,450</span>
            <span style={{ fontSize: '0.8rem', background: 'var(--color-surface-low)', padding: '0.3rem 0.75rem', borderRadius: '4px', color: '#555' }}>
              Includes Dupatta, Blouse & Can-Can Lining
            </span>
          </div>

          <p className="text-body-md" style={{ color: 'var(--color-on-surface-muted)', marginBottom: '2rem' }}>
            Hand-crafted over 450 hours by royal karigars in New Delhi. Crafted from deep crimson Micro-Velvet adorned with genuine metallic Zardozi threadwork, dabka, and pearl embroidery.
          </p>

          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <span className="text-label-caps">Select Size / Fitting</span>
              <Link to="/contact" style={{ fontSize: '0.8rem', color: 'var(--color-gold)', textDecoration: 'underline', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <Ruler size={14} /> Request Custom Fitting &rarr;
              </Link>
            </div>
            
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {['Standard (M)', 'Small (S)', 'Large (L)', 'Custom Measurement'].map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  style={{
                    padding: '0.75rem 1.25rem',
                    border: selectedSize === size ? '1px solid var(--color-gold)' : '1px solid var(--color-outline-variant)',
                    background: selectedSize === size ? 'var(--color-primary)' : 'white',
                    color: selectedSize === size ? 'white' : 'var(--color-primary)',
                    borderRadius: '4px',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <button 
              className="btn-primary btn-gold" 
              style={{ flex: 1, minWidth: '220px' }} 
              onClick={() => addToCart({ ...product, size: selectedSize })}
            >
              Add to Shopping Bag
            </button>
            <Link to="/contact" className="btn-secondary" style={{ flex: 1, minWidth: '220px' }}>
              Book Atelier Fitting
            </Link>
          </div>

          <div style={{ borderTop: '1px solid var(--color-outline-variant)', paddingTop: '1.5rem' }}>
            <h3 className="font-serif" style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Garment Specifications</h3>
            <ul style={{ listStyle: 'none', fontSize: '0.9rem', color: '#555', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li><strong>Fabric:</strong> Pure Royal Micro-Velvet (Lehenga & Blouse), Hand-woven Net (Dupatta)</li>
              <li><strong>Embroidery:</strong> Genuine Metallic Zardozi, Cut-dana, Sequins & Pearl Work</li>
              <li><strong>Care Instructions:</strong> Dry Clean Only in VIP garment bag</li>
              <li><strong>Crafting Time:</strong> 4-6 weeks for bespoke tailoring</li>
              <li><strong>Packaging:</strong> Signature Neha Boutique Wooden Trunk Box</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};
