import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { InstaFeed } from '../components/InstaFeed';

const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export const Home = () => {
  return (
    <main>
      <section 
        className="hero-section" 
        style={{ 
          position: 'relative', 
          height: '90vh', 
          minHeight: '600px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          background: "linear-gradient(rgba(26, 26, 26, 0.45), rgba(26, 26, 26, 0.45)), url('https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=1920') center/cover no-repeat" 
        }}
      >
        <motion.div 
          className="container-custom" 
          style={{ textAlign: 'center', color: 'white', maxWidth: '900px', zIndex: 2 }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}
          >
            <span className="text-label-caps" style={{ color: 'var(--color-gold-light)' }}>
              Haute Couture Edition 2026
            </span>
            <a 
              href="https://www.instagram.com/neha_boutique_0/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="insta-pill"
            >
              <InstagramIcon size={12} />
              <span>@neha_boutique_0</span>
            </a>
          </motion.div>

          <h1 className="text-display-xl font-serif" style={{ marginBottom: '1.5rem', textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
            Aura of Elegance
          </h1>

          <p className="text-body-lg" style={{ marginBottom: '2.5rem', color: '#f0f0f0', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto', fontWeight: 300 }}>
            Timeless Indian regal heritage fused with contemporary Parisian silhouettes. Handcrafted Zardozi, pure silk, and bespoke craftsmanship for your most sacred celebrations.
          </p>

          <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/shop" className="btn-primary btn-gold" id="heroShopCta">
              Explore Bridal '26
            </Link>
            <Link 
              to="/custom-studio" 
              className="btn-primary" 
              style={{ background: 'rgba(250, 249, 246, 0.15)', backdropFilter: 'blur(8px)', borderColor: 'white', color: 'white' }}
              id="heroStudioCta"
            >
              Design Custom Outfit
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="section-spacing container-custom" id="categoriesSection">
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem auto' }}>
          <span className="text-label-caps text-gold">The Collections</span>
          <h2 className="text-headline-lg font-serif" style={{ marginTop: '0.5rem', color: 'var(--color-primary)' }}>
            Curated Regal Ensembles
          </h2>
          <p className="text-body-md" style={{ color: 'var(--color-on-surface-muted)', marginTop: '0.75rem' }}>
            Each ensemble is individually hand-cut, dyed, and adorned by master craftsmen over 400 hours.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          <motion.div whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 300 }}>
            <Link to="/shop" className="card-product">
              <div className="card-product-image">
                <img src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800" alt="Royal Velvet Lehengas" />
                <span className="card-badge">Bridal Flagship</span>
              </div>
              <div className="card-info">
                <span className="card-category">Haute Couture</span>
                <h3 className="card-title">Royal Velvet Lehengas</h3>
                <p className="text-body-md text-gold" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem' }}>
                  Discover Collection <ArrowRight size={16} />
                </p>
              </div>
            </Link>
          </motion.div>

          <motion.div whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 300 }}>
            <Link to="/shop" className="card-product">
              <div className="card-product-image">
                <img src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=800" alt="Banarasi Sarees" />
                <span className="card-badge">Limited Edition</span>
              </div>
              <div className="card-info">
                <span className="card-category">Heritage Silk</span>
                <h3 className="card-title">Banarasi & Kanjivaram Sarees</h3>
                <p className="text-body-md text-gold" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem' }}>
                  Discover Collection <ArrowRight size={16} />
                </p>
              </div>
            </Link>
          </motion.div>

          <motion.div whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 300 }}>
            <Link to="/shop" className="card-product">
              <div className="card-product-image">
                <img src="https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=800" alt="Indo-Western Couture Gowns" />
              </div>
              <div className="card-info">
                <span className="card-category">Modern Fusion</span>
                <h3 className="card-title">Indo-Western Couture Gowns</h3>
                <p className="text-body-md text-gold" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem' }}>
                  Discover Collection <ArrowRight size={16} />
                </p>
              </div>
            </Link>
          </motion.div>

          <motion.div whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 300 }}>
            <Link to="/shop" className="card-product">
              <div className="card-product-image">
                <img src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800" alt="Artisanal Anarkali Sets" />
              </div>
              <div className="card-info">
                <span className="card-category">Prêt-à-Porter</span>
                <h3 className="card-title">Artisanal Anarkali Sets</h3>
                <p className="text-body-md text-gold" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem' }}>
                  Discover Collection <ArrowRight size={16} />
                </p>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="section-spacing bg-surface-low" style={{ borderTop: '1px solid var(--color-outline-variant)', borderBottom: '1px solid var(--color-outline-variant)' }}>
        <div className="container-custom" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <span className="text-label-caps text-gold">Bespoke Atelier Experience</span>
            <h2 className="text-headline-lg font-serif" style={{ marginTop: '0.5rem', marginBottom: '1.25rem' }}>
              Design Your Own Couture Outfit
            </h2>
            <p className="text-body-lg" style={{ color: 'var(--color-on-surface-muted)', marginBottom: '2rem' }}>
              Step into Neha Boutique's virtual studio. Select your preferred silhouette, choice of pure silk or rich velvet, intricate Zardozi motif pattern, and signature color palette.
            </p>
            <ul style={{ listStyle: 'none', marginBottom: '2.5rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.85rem', fontSize: '0.95rem' }}>
                <ShieldCheck className="text-gold" size={20} /> Instant Real-time 3D & Color Rendering
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.85rem', fontSize: '0.95rem' }}>
                <ShieldCheck className="text-gold" size={20} /> Personal Stylist Consultations Included
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem' }}>
                <ShieldCheck className="text-gold" size={20} /> Perfect Fit Guarantee via Virtual Measurements
              </li>
            </ul>
            <Link to="/custom-studio" className="btn-primary" id="launchStudioBtn">
              Launch Custom Studio &rarr;
            </Link>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800" 
              alt="Master Craftsman Embroidery Studio" 
              style={{ borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)' }} 
            />
          </div>
        </div>
      </section>

      <InstaFeed />
    </main>
  );
};
