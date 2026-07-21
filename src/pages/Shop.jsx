import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Eye } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Shop = () => {
  const { addToCart, setQuickViewItem } = useCart();
  const [filter, setFilter] = useState('all');

  const products = [
    {
      id: '1',
      name: 'Noor Zardozi Velvet Lehenga',
      category: 'lehenga',
      categoryName: 'Bridal Couture',
      price: 3450,
      badge: 'Bestseller',
      image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '2',
      name: 'Mehr Emerald Raw Silk Lehenga',
      category: 'lehenga',
      categoryName: 'Bridal Couture',
      price: 3800,
      badge: 'New Arrival',
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '3',
      name: 'Royal Banarasi Katan Silk Saree',
      category: 'saree',
      categoryName: 'Heritage Silk Saree',
      price: 1950,
      badge: null,
      image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '4',
      name: 'Aria Champagne Sequin Gown',
      category: 'gown',
      categoryName: 'Modern Couture',
      price: 2650,
      badge: null,
      image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '5',
      name: 'Sitara Ivory Chikankari Anarkali',
      category: 'anarkali',
      categoryName: 'Prêt-à-Porter',
      price: 1650,
      badge: null,
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '6',
      name: 'Zoya Ruby Silk Bridal Lehenga',
      category: 'lehenga',
      categoryName: 'Bridal Couture',
      price: 4100,
      badge: null,
      image: 'https://images.unsplash.com/photo-1583391733975-207d579294f5?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '7',
      name: 'Kavya Gold Tissue Organza Saree',
      category: 'saree',
      categoryName: 'Heritage Saree',
      price: 1800,
      badge: null,
      image: 'https://images.unsplash.com/photo-1583391733983-107f9c2d1c64?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '8',
      name: 'Tara Midnight Velvet Cape Gown',
      category: 'gown',
      categoryName: 'Indo-Western Couture',
      price: 2900,
      badge: null,
      image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800'
    }
  ];

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <main>
      <section style={{ background: 'var(--color-surface-low)', padding: '4rem 2rem', borderBottom: '1px solid var(--color-outline-variant)', textAlign: 'center' }}>
        <div className="container-custom" style={{ maxWidth: '800px' }}>
          <span className="text-label-caps text-gold">The 2026 Bridal Catalogue</span>
          <h1 className="text-headline-lg font-serif" style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
            Haute Couture & Bridal Lehengas
          </h1>
          <p className="text-body-md" style={{ color: 'var(--color-on-surface-muted)' }}>
            Each piece is meticulously crafted using pure metallic Zardozi, pearls, and raw silk fabrics. Custom fit adjustments available upon order placement.
          </p>
        </div>
      </section>

      <section className="container-custom" style={{ paddingTop: '3rem', paddingBottom: '2rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem', borderBottom: '1px solid var(--color-outline-variant)', paddingBottom: '1.5rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {[
              { id: 'all', label: 'All Ensembles' },
              { id: 'lehenga', label: 'Bridal Lehengas' },
              { id: 'saree', label: 'Silk Sarees' },
              { id: 'gown', label: 'Couture Gowns' },
              { id: 'anarkali', label: 'Anarkali Sets' }
            ].map(tab => (
              <button 
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                style={{
                  padding: '0.6rem 1.25rem',
                  border: '1px solid var(--color-outline-variant)',
                  borderRadius: 'var(--radius-full)',
                  background: filter === tab.id ? 'var(--color-primary)' : 'white',
                  color: filter === tab.id ? 'var(--color-gold-light)' : 'var(--color-primary)',
                  borderColor: filter === tab.id ? 'var(--color-primary)' : 'var(--color-outline-variant)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  transition: 'all 0.3s ease'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="container-custom" style={{ paddingBottom: '6rem' }}>
        <motion.div 
          layout
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2.5rem' }}
        >
          <AnimatePresence>
            {filteredProducts.map(product => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={product.id} 
                className="card-product"
              >
                <div className="card-product-image">
                  <img src={product.image} alt={product.name} />
                  {product.badge && <span className="card-badge">{product.badge}</span>}
                  <div className="card-actions-overlay">
                    <button 
                      className="btn-primary" 
                      style={{ flex: 1, padding: '0.75rem', fontSize: '0.7rem' }}
                      onClick={() => setQuickViewItem(product)}
                    >
                      <Eye size={14} /> Quick View
                    </button>
                    <button 
                      className="btn-secondary" 
                      style={{ padding: '0.75rem', background: 'white' }}
                      onClick={() => addToCart(product)}
                    >
                      <ShoppingBag size={16} />
                    </button>
                  </div>
                </div>
                <div className="card-info">
                  <span className="card-category">{product.categoryName}</span>
                  <Link to="/product/1">
                    <h3 className="card-title">{product.name}</h3>
                  </Link>
                  <p className="card-price">${product.price.toLocaleString()}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </main>
  );
};
