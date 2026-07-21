import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Check, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CustomStudio = () => {
  const { addToCart } = useCart();

  const [state, setState] = useState({
    silhouette: 'lehenga',
    fabric: 'raw-silk',
    embroidery: 'zardozi',
    color: 'royal-crimson',
    colorName: 'Royal Crimson',
    colorHex: '#7a001e'
  });

  const colorMap = {
    'royal-crimson': { hex: '#7a001e', name: 'Royal Crimson' },
    'emerald-green': { hex: '#004d25', name: 'Emerald Green' },
    'champagne-gold': { hex: '#d4af37', name: 'Champagne Gold' },
    'ivory-white': { hex: '#f7f4ed', name: 'Ivory White' },
    'midnight-blue': { hex: '#0a192f', name: 'Midnight Blue' }
  };

  const calculatePrice = () => {
    let base = 2800;
    if (state.fabric === 'velvet') base += 450;
    if (state.embroidery === 'zardozi') base += 600;
    if (state.silhouette === 'gown') base += 300;
    return base;
  };

  const handleCustomOrder = () => {
    const customItem = {
      name: `Custom Bespoke Outfit (${state.colorName})`,
      category: 'Custom Atelier',
      price: calculatePrice(),
      image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=800',
      size: `${capitalize(state.silhouette)} / ${state.colorName}`
    };
    addToCart(customItem);
  };

  function capitalize(str) {
    return str.replace(/\b\w/g, l => l.toUpperCase());
  }

  return (
    <main className="container-custom section-spacing">
      <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
        <span className="text-label-caps text-gold">Interactive Atelier Experience</span>
        <h1 className="text-headline-lg font-serif" style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
          Bespoke Couture Studio
        </h1>
        <p className="text-body-md" style={{ color: 'var(--color-on-surface-muted)' }}>
          Personalize every detail of your bridal outfit. Select your silhouette, silk fabric, embroidery motif, and signature royal color palette.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'start' }}>
        
        {/* Customizer Controls */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          
          {/* Step 1: Silhouette */}
          <div>
            <h3 className="font-serif" style={{ fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ background: 'var(--color-primary)', color: 'white', borderRadius: '50%', width: '28px', height: '28px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem' }}>1</span>
              Select Silhouette
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem' }}>
              {[
                { id: 'lehenga', title: 'Bridal Lehenga', sub: 'Skirt + Blouse' },
                { id: 'saree', title: 'Concept Saree', sub: 'Draped Silk' },
                { id: 'gown', title: 'Indo-Western', sub: 'Structured Gown' }
              ].map(item => (
                <div 
                  key={item.id}
                  onClick={() => setState(prev => ({ ...prev, silhouette: item.id }))}
                  style={{
                    border: state.silhouette === item.id ? '2px solid var(--color-gold)' : '1px solid var(--color-outline-variant)',
                    background: state.silhouette === item.id ? 'rgba(200,169,106,0.08)' : 'white',
                    borderRadius: 'var(--radius-sm)',
                    padding: '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <strong style={{ fontSize: '0.9rem', display: 'block' }}>{item.title}</strong>
                  <span style={{ fontSize: '0.75rem', color: '#777' }}>{item.sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Step 2: Fabric */}
          <div>
            <h3 className="font-serif" style={{ fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ background: 'var(--color-primary)', color: 'white', borderRadius: '50%', width: '28px', height: '28px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem' }}>2</span>
              Select Fabric Base
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem' }}>
              {[
                { id: 'raw-silk', title: 'Pure Raw Silk', sub: 'Royal Shine' },
                { id: 'velvet', title: 'Micro Velvet', sub: 'Lustrous Finish' },
                { id: 'organza', title: 'Tissue Organza', sub: 'Ethereal Sheer' }
              ].map(item => (
                <div 
                  key={item.id}
                  onClick={() => setState(prev => ({ ...prev, fabric: item.id }))}
                  style={{
                    border: state.fabric === item.id ? '2px solid var(--color-gold)' : '1px solid var(--color-outline-variant)',
                    background: state.fabric === item.id ? 'rgba(200,169,106,0.08)' : 'white',
                    borderRadius: 'var(--radius-sm)',
                    padding: '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <strong style={{ fontSize: '0.9rem', display: 'block' }}>{item.title}</strong>
                  <span style={{ fontSize: '0.75rem', color: '#777' }}>{item.sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Step 3: Embroidery */}
          <div>
            <h3 className="font-serif" style={{ fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ background: 'var(--color-primary)', color: 'white', borderRadius: '50%', width: '28px', height: '28px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem' }}>3</span>
              Embroidery Technique
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem' }}>
              {[
                { id: 'zardozi', title: 'Metallic Zardozi', sub: 'Gold & Silver' },
                { id: 'gota-patti', title: 'Gota Patti', sub: 'Ribbonwork' },
                { id: 'threadwork', title: 'Resham Thread', sub: 'Floral Silk' }
              ].map(item => (
                <div 
                  key={item.id}
                  onClick={() => setState(prev => ({ ...prev, embroidery: item.id }))}
                  style={{
                    border: state.embroidery === item.id ? '2px solid var(--color-gold)' : '1px solid var(--color-outline-variant)',
                    background: state.embroidery === item.id ? 'rgba(200,169,106,0.08)' : 'white',
                    borderRadius: 'var(--radius-sm)',
                    padding: '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <strong style={{ fontSize: '0.9rem', display: 'block' }}>{item.title}</strong>
                  <span style={{ fontSize: '0.75rem', color: '#777' }}>{item.sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Step 4: Color Swatches */}
          <div>
            <h3 className="font-serif" style={{ fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ background: 'var(--color-primary)', color: 'white', borderRadius: '50%', width: '28px', height: '28px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem' }}>4</span>
              Color Swatch
            </h3>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {Object.keys(colorMap).map(key => (
                <div 
                  key={key}
                  onClick={() => setState(prev => ({ 
                    ...prev, 
                    color: key, 
                    colorName: colorMap[key].name, 
                    colorHex: colorMap[key].hex 
                  }))}
                  style={{
                    border: state.color === key ? '2px solid var(--color-gold)' : '1px solid var(--color-outline-variant)',
                    background: state.color === key ? 'rgba(200,169,106,0.08)' : 'white',
                    borderRadius: 'var(--radius-sm)',
                    padding: '0.75rem 1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    cursor: 'pointer'
                  }}
                >
                  <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: colorMap[key].hex, border: '1px solid rgba(0,0,0,0.1)' }} />
                  <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{colorMap[key].name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Live Preview Box */}
        <div style={{ position: 'sticky', top: '120px', background: 'white', border: '1px solid var(--color-outline-variant)', borderRadius: 'var(--radius-md)', padding: '2rem', boxShadow: 'var(--shadow-md)' }}>
          <span className="text-label-caps text-gold">Live Customization Preview</span>
          <h3 className="font-serif text-headline-sm" style={{ marginTop: '0.25rem', marginBottom: '1.5rem' }}>
            Your Bespoke Masterpiece
          </h3>

          <motion.div 
            animate={{ backgroundColor: state.colorHex }}
            transition={{ duration: 0.5 }}
            style={{ 
              position: 'relative', 
              width: '100%', 
              aspectRatio: '3/4', 
              borderRadius: 'var(--radius-sm)', 
              overflow: 'hidden', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}
          >
            <img 
              src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=800" 
              alt="Couture Preview Overlay" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85, mixBlendMode: 'overlay' }} 
            />
            
            <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', right: '1rem', background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)', color: 'white', padding: '1rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.2)' }}>
              <span style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-gold-light)' }}>
                Interactive Render
              </span>
              <p style={{ fontSize: '0.85rem', marginTop: '0.2rem', lineHeight: 1.5 }}>
                <strong>Silhouette:</strong> {capitalize(state.silhouette)}<br />
                <strong>Fabric:</strong> {capitalize(state.fabric.replace('-', ' '))}<br />
                <strong>Embroidery:</strong> {capitalize(state.embroidery)}<br />
                <strong>Color:</strong> {state.colorName}
              </p>
            </div>
          </motion.div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem', marginBottom: '1.5rem' }}>
            <div>
              <span style={{ fontSize: '0.8rem', color: '#777' }}>Estimated Atelier Price</span>
              <div className="text-gold" style={{ fontSize: '1.75rem', fontWeight: 700 }}>
                ${calculatePrice().toLocaleString()}
              </div>
            </div>
            <span style={{ fontSize: '0.75rem', background: 'var(--color-surface-low)', padding: '0.4rem 0.75rem', borderRadius: '4px' }}>
              Crafting Time: 5-6 Weeks
            </span>
          </div>

          <button className="btn-primary btn-gold" style={{ width: '100%', marginBottom: '1rem' }} onClick={handleCustomOrder}>
            Order Custom Design &rarr;
          </button>
          
          <Link to="/contact" className="btn-secondary" style={{ width: '100%', textAlign: 'center' }}>
            Book Consultation with Stylist
          </Link>
        </div>

      </div>
    </main>
  );
};
