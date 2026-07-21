import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export const About = () => {
  return (
    <main>
      <section style={{ background: "linear-gradient(rgba(26, 26, 26, 0.6), rgba(26, 26, 26, 0.6)), url('https://images.unsplash.com/photo-1583391733975-207d579294f5?auto=format&fit=crop&q=80&w=1920') center/cover no-repeat", padding: '8rem 2rem', color: 'white', textAlign: 'center' }}>
        <motion.div 
          className="container-custom" 
          style={{ maxWidth: '800px' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-label-caps" style={{ color: 'var(--color-gold-light)' }}>The House of Neha</span>
          <h1 className="text-display-xl font-serif" style={{ marginTop: '0.5rem', marginBottom: '1.5rem' }}>
            Guardians of Indian Couture
          </h1>
          <p className="text-body-lg" style={{ color: '#f0f0f0' }}>
            Where centuries-old Zardozi metalwork meets modern minimalist architectural cuts.
          </p>
        </motion.div>
      </section>

      <section className="section-spacing container-custom">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <span className="text-label-caps text-gold">Handmade in India</span>
            <h2 className="text-headline-lg font-serif" style={{ marginTop: '0.5rem', marginBottom: '1.25rem' }}>
              The Art of Slow Luxury
            </h2>
            <p className="text-body-md" style={{ color: 'var(--color-on-surface-muted)', marginBottom: '1.25rem' }}>
              In an era of mass fashion, Neha Boutique stands as a sanctuary for slow, deliberate luxury. Every bridal garment requires up to 450 hours of intensive hand embroidery by master karigars whose families have served royal courts for centuries.
            </p>
            <p className="text-body-md" style={{ color: 'var(--color-on-surface-muted)', marginBottom: '1.5rem' }}>
              We harvest pure organic silks, employ eco-friendly natural vegetable dyes, and weave genuine gold and silver coated metallic wires into our signature lehengas and sarees.
            </p>

            <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem', borderTop: '1px solid var(--color-outline-variant)', paddingTop: '1.5rem' }}>
              <div>
                <div className="font-serif text-headline-md text-gold">450+</div>
                <p style={{ fontSize: '0.8rem', color: '#777' }}>Hours per Lehenga</p>
              </div>
              <div>
                <div className="font-serif text-headline-md text-gold">100%</div>
                <p style={{ fontSize: '0.8rem', color: '#777' }}>Hand-Dyed Silk</p>
              </div>
              <div>
                <div className="font-serif text-headline-md text-gold">VIP</div>
                <p style={{ fontSize: '0.8rem', color: '#777' }}>Atelier Fitting</p>
              </div>
            </div>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800" alt="Master Craftsmen at Work" style={{ borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)' }} />
          </div>
        </div>
      </section>

      <section className="section-spacing bg-surface-low">
        <div className="container-custom" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <span className="text-label-caps text-gold">Follow Our Journey</span>
          <h2 className="text-headline-lg font-serif" style={{ marginTop: '0.5rem', marginBottom: '1.25rem' }}>
            Join @neha_boutique_0
          </h2>
          <p className="text-body-lg" style={{ color: 'var(--color-on-surface-muted)', marginBottom: '2rem' }}>
            Follow our official Instagram handle for daily couture inspiration, artisan videos, and bridal fitting moments.
          </p>
          <a 
            href="https://www.instagram.com/neha_boutique_0/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary btn-gold"
            style={{ gap: '0.5rem' }}
          >
            <InstagramIcon size={18} /> Visit @neha_boutique_0 &rarr;
          </a>
        </div>
      </section>
    </main>
  );
};
