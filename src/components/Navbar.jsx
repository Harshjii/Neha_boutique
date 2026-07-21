import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Heart, User, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';

const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export const Navbar = () => {
  const { totalCount, wishlistItems, setIsCartOpen, setIsMobileNavOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <div className="announcement-bar">
        <span>Complimentary Worldwide VIP Shipping & Private Consultations</span>
        <a 
          href="https://www.instagram.com/neha_boutique_0/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="insta-pill"
          id="topBarInstaLink"
        >
          <InstagramIcon size={13} />
          <span>@neha_boutique_0</span>
        </a>
      </div>

      <header className={`header-glass ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <button 
            className="icon-btn mobile-menu-toggle" 
            onClick={() => setIsMobileNavOpen(true)}
            aria-label="Open Mobile Menu"
            id="mobileMenuToggle"
          >
            <Menu size={24} />
          </button>

          <Link to="/" className="brand-logo" id="brandLogo">
            <h1>Neha</h1>
            <span>Haute Couture</span>
          </Link>

          <nav aria-label="Main Navigation">
            <ul className="nav-links">
              <li>
                <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className={`nav-link ${isActive('/shop') ? 'active' : ''}`}>
                  Bridal Collection
                </Link>
              </li>
              <li>
                <Link to="/custom-studio" className={`nav-link ${isActive('/custom-studio') ? 'active' : ''}`}>
                  Custom Studio
                </Link>
              </li>
              <li>
                <Link to="/events" className={`nav-link ${isActive('/events') ? 'active' : ''}`}>
                  VIP Events
                </Link>
              </li>
              <li>
                <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>
                  Contact & Atelier
                </Link>
              </li>
            </ul>
          </nav>

          <div className="nav-actions">
            <a 
              href="https://www.instagram.com/neha_boutique_0/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="icon-btn text-gold" 
              title="Follow us on Instagram @neha_boutique_0"
              id="headerInstaIcon"
            >
              <InstagramIcon size={20} />
            </a>
            
            <Link to="/account" className="icon-btn" aria-label="VIP Account" title="My Account">
              <User size={20} />
            </Link>

            <Link to="/wishlist" className="icon-btn" aria-label="View Wishlist" title="Wishlist">
              <Heart size={20} />
              {wishlistItems.length > 0 && (
                <span className="badge-count" style={{ background: 'var(--color-primary)', color: 'var(--color-gold)' }}>
                  {wishlistItems.length}
                </span>
              )}
            </Link>

            <button 
              className="icon-btn" 
              onClick={() => setIsCartOpen(true)}
              aria-label="Open Shopping Bag"
              id="cartToggleBtn"
            >
              <ShoppingBag size={20} />
              {totalCount > 0 && (
                <span className="badge-count" id="cartBadgeCount">{totalCount}</span>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
