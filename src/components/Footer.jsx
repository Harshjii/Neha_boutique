import React from 'react';
import { Link } from 'react-router-dom';

const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export const Footer = () => {
  return (
    <footer className="footer-luxury">
      <div className="container-custom">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2>Neha</h2>
            <span>Haute Couture</span>
            <p style={{ fontSize: '0.85rem', color: '#aaa', maxWidth: '280px', marginBottom: '1.25rem' }}>
              Preserving Indian textile heritage through bespoke bridal wear and modern luxury fashion.
            </p>
            <a 
              href="https://www.instagram.com/neha_boutique_0/"
              target="_blank"
              rel="noopener noreferrer"
              className="insta-pill"
              style={{ fontSize: '0.8rem', padding: '0.4rem 0.85rem' }}
              id="footerInstaPill"
            >
              <InstagramIcon size={16} />
              <span>Follow @neha_boutique_0</span>
            </a>
          </div>

          <div className="footer-column">
            <h4>Collections & Atelier</h4>
            <ul className="footer-links">
              <li><Link to="/shop">Bridal Lehengas</Link></li>
              <li><Link to="/shop">Bespoke Sarees</Link></li>
              <li><Link to="/shop">Indo-Western Couture</Link></li>
              <li><Link to="/custom-studio">Custom Design Studio</Link></li>
              <li><Link to="/events">Global VIP Trunk Shows</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Customer Care & Services</h4>
            <ul className="footer-links">
              <li><Link to="/account">VIP Account Dashboard</Link></li>
              <li><Link to="/size-guide">Fit & Size Assistant</Link></li>
              <li><Link to="/faq">Worldwide Shipping & FAQs</Link></li>
              <li><Link to="/about">Our Story & Heritage</Link></li>
              <li><Link to="/contact">Private Consultations</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>VIP Concierge</h4>
            <p style={{ fontSize: '0.85rem', color: '#aaa', marginBottom: '1rem' }}>
              Subscribe to receive private collection previews and invitation-only trunk shows.
            </p>
            <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing to Neha Boutique VIP Concierge.'); }}>
              <input type="email" className="newsletter-input" placeholder="Your Email Address" required />
              <button type="submit" className="newsletter-btn">JOIN</button>
            </form>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.8rem', color: '#888' }}>
          <p>&copy; 2026 Neha Boutique Haute Couture. All Rights Reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <a href="https://www.instagram.com/neha_boutique_0/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gold)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <InstagramIcon size={14} /> @neha_boutique_0
            </a>
            <Link to="/faq">Authenticity Guarantee</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
