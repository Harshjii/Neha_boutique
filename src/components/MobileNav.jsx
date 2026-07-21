import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export const MobileNav = () => {
  const { isMobileNavOpen, setIsMobileNavOpen } = useCart();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <AnimatePresence>
      {isMobileNavOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 1000 }}>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileNavOpen(false)}
            style={{ 
              position: 'absolute', 
              inset: 0, 
              background: 'rgba(0,0,0,0.6)', 
              backdropFilter: 'blur(4px)' 
            }}
          />

          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              width: '85%', 
              maxWidth: '360px', 
              height: '100vh', 
              background: 'var(--color-surface-bright)', 
              display: 'flex', 
              flexDirection: 'column', 
              zIndex: 1001 
            }}
          >
            <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--color-outline-variant)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div className="brand-logo" style={{ textAlign: 'left' }}>
                <h1 style={{ fontSize: '1.4rem' }}>Neha</h1>
                <span>Haute Couture</span>
              </div>
              <button onClick={() => setIsMobileNavOpen(false)} style={{ color: '#666' }}>
                <X size={24} />
              </button>
            </div>

            <div style={{ flex: 1, padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <li>
                  <Link to="/" onClick={() => setIsMobileNavOpen(false)} className={`nav-link ${isActive('/') ? 'active' : ''}`} style={{ fontSize: '1.1rem' }}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/shop" onClick={() => setIsMobileNavOpen(false)} className={`nav-link ${isActive('/shop') ? 'active' : ''}`} style={{ fontSize: '1.1rem' }}>
                    Bridal Collection
                  </Link>
                </li>
                <li>
                  <Link to="/custom-studio" onClick={() => setIsMobileNavOpen(false)} className={`nav-link ${isActive('/custom-studio') ? 'active' : ''}`} style={{ fontSize: '1.1rem' }}>
                    Custom Studio
                  </Link>
                </li>
                <li>
                  <Link to="/about" onClick={() => setIsMobileNavOpen(false)} className={`nav-link ${isActive('/about') ? 'active' : ''}`} style={{ fontSize: '1.1rem' }}>
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link to="/contact" onClick={() => setIsMobileNavOpen(false)} className={`nav-link ${isActive('/contact') ? 'active' : ''}`} style={{ fontSize: '1.1rem' }}>
                    Contact & Atelier
                  </Link>
                </li>
              </ul>

              <div style={{ borderTop: '1px solid var(--color-outline-variant)', paddingTop: '1.5rem' }}>
                <span className="text-label-caps text-gold" style={{ display: 'block', marginBottom: '0.75rem' }}>Connect With Us</span>
                <a 
                  href="https://www.instagram.com/neha_boutique_0/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary btn-gold"
                  style={{ width: '100%', gap: '0.5rem', fontSize: '0.75rem' }}
                >
                  <InstagramIcon size={18} />
                  Follow @neha_boutique_0
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
