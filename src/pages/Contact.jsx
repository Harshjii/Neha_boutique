import React from 'react';
import { motion } from 'framer-motion';

const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export const Contact = () => {
  return (
    <main className="container-custom section-spacing">
      <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
        <span className="text-label-caps text-gold">VIP Concierge & Atelier</span>
        <h1 className="text-headline-lg font-serif" style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
          Book a Private Bridal Consultation
        </h1>
        <p className="text-body-md" style={{ color: 'var(--color-on-surface-muted)' }}>
          Experience one-on-one styling with Neha's senior couture designers in our flagship ateliers or via virtual 3D consultation.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '4rem', alignItems: 'start' }}>
        
        <div style={{ background: 'white', border: '1px solid var(--color-outline-variant)', borderRadius: 'var(--radius-md)', padding: '2.5rem', boxShadow: 'var(--shadow-sm)' }}>
          <h3 className="font-serif text-headline-sm" style={{ marginBottom: '1.5rem' }}>Schedule Your Visit</h3>
          
          <form onSubmit={(e) => { e.preventDefault(); alert('Thank you! Your private consultation request has been submitted. Our VIP Concierge will reach out to confirm your slot within 2 hours.'); }}>
            <div style={{ marginBottom: '1.25rem' }}>
              <label className="text-label-caps" style={{ display: 'block', marginBottom: '0.35rem' }}>Full Name</label>
              <input type="text" required placeholder="e.g. Princess Ananya" style={{ width: '100%', padding: '0.85rem 1rem', border: '1px solid var(--color-outline-variant)', borderRadius: '4px', fontFamily: 'inherit' }} />
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <label className="text-label-caps" style={{ display: 'block', marginBottom: '0.35rem' }}>Email Address</label>
              <input type="email" required placeholder="name@domain.com" style={{ width: '100%', padding: '0.85rem 1rem', border: '1px solid var(--color-outline-variant)', borderRadius: '4px', fontFamily: 'inherit' }} />
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <label className="text-label-caps" style={{ display: 'block', marginBottom: '0.35rem' }}>Phone / WhatsApp Number</label>
              <input type="tel" required placeholder="+1 (555) 019-2834" style={{ width: '100%', padding: '0.85rem 1rem', border: '1px solid var(--color-outline-variant)', borderRadius: '4px', fontFamily: 'inherit' }} />
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <label className="text-label-caps" style={{ display: 'block', marginBottom: '0.35rem' }}>Preferred Consultation Type</label>
              <select style={{ width: '100%', padding: '0.85rem 1rem', border: '1px solid var(--color-outline-variant)', borderRadius: '4px', fontFamily: 'inherit', background: 'white' }}>
                <option>Private Atelier Appointment (New Delhi)</option>
                <option>Private Boutique Visit (London - Mayfair)</option>
                <option>Private Salon Appointment (New York - Fifth Ave)</option>
                <option>Virtual 3D Consultation (Worldwide)</option>
              </select>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label className="text-label-caps" style={{ display: 'block', marginBottom: '0.35rem' }}>Wedding / Event Date & Notes</label>
              <textarea rows="3" placeholder="Tell us about your wedding theme, color preferences, or specific bridal lehenga code..." style={{ width: '100%', padding: '0.85rem 1rem', border: '1px solid var(--color-outline-variant)', borderRadius: '4px', fontFamily: 'inherit' }}></textarea>
            </div>

            <button type="submit" className="btn-primary btn-gold" style={{ width: '100%' }}>
              Request VIP Appointment &rarr;
            </button>
          </form>
        </div>

        <div>
          <h3 className="font-serif text-headline-sm" style={{ marginBottom: '1.5rem' }}>Flagship Boutiques</h3>

          <div style={{ borderBottom: '1px solid var(--color-outline-variant)', paddingBottom: '1.5rem', marginBottom: '1.5rem' }}>
            <h4 className="font-serif" style={{ fontSize: '1.1rem', color: 'var(--color-primary)' }}>New Delhi Atelier</h4>
            <p style={{ fontSize: '0.9rem', color: '#555', marginTop: '0.25rem' }}>
              12 Mehrauli Heritage Complex, Near Qutub Minar<br />
              New Delhi, India 110030<br />
              <strong>Phone:</strong> +91 11 2664 8900
            </p>
          </div>

          <div style={{ borderBottom: '1px solid var(--color-outline-variant)', paddingBottom: '1.5rem', marginBottom: '1.5rem' }}>
            <h4 className="font-serif" style={{ fontSize: '1.1rem', color: 'var(--color-primary)' }}>London Boutique</h4>
            <p style={{ fontSize: '0.9rem', color: '#555', marginTop: '0.25rem' }}>
              42 Mount Street, Mayfair<br />
              London W1K 2RX, United Kingdom<br />
              <strong>Phone:</strong> +44 20 7946 0912
            </p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4 className="font-serif" style={{ fontSize: '1.1rem', color: 'var(--color-primary)' }}>Instagram Concierge</h4>
            <p style={{ fontSize: '0.9rem', color: '#555', marginTop: '0.25rem', marginBottom: '1rem' }}>
              Direct Message our Instagram team for instant styling advice and size consultations.
            </p>
            <a 
              href="https://www.instagram.com/neha_boutique_0/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ gap: '0.5rem' }}
            >
              <InstagramIcon size={18} /> DM @neha_boutique_0 &rarr;
            </a>
          </div>
        </div>

      </div>
    </main>
  );
};
