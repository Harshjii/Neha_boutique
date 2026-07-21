import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Package, Ruler, MapPin, Heart, LogOut } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Account = () => {
  const { userProfile, setUserProfile, wishlistItems } = useCart();
  const [activeTab, setActiveTab] = useState('orders');

  const ordersList = [
    {
      id: 'NB-849320',
      date: 'July 21, 2026',
      total: 3450,
      status: 'In Production',
      items: ['Noor Zardozi Velvet Lehenga (Custom Fit)']
    },
    {
      id: 'NB-710294',
      date: 'May 14, 2026',
      total: 1950,
      status: 'Delivered',
      items: ['Royal Banarasi Katan Silk Saree']
    }
  ];

  return (
    <main className="container-custom section-spacing">
      <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem auto' }}>
        <span className="text-label-caps text-gold">VIP Atelier Member Profile</span>
        <h1 className="text-headline-lg font-serif" style={{ marginTop: '0.5rem' }}>Welcome, {userProfile.name}</h1>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '3rem', alignItems: 'start' }}>
        
        {/* Sidebar Nav */}
        <div style={{ background: 'white', border: '1px solid var(--color-outline-variant)', borderRadius: 'var(--radius-md)', padding: '1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {[
              { id: 'orders', label: 'Order History & Tracking', icon: Package },
              { id: 'measurements', label: 'Saved Measurements', icon: Ruler },
              { id: 'addresses', label: 'Address Book', icon: MapPin },
              { id: 'profile', label: 'VIP Profile Settings', icon: User }
            ].map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.85rem 1rem',
                    borderRadius: '4px',
                    background: activeTab === tab.id ? 'var(--color-primary)' : 'transparent',
                    color: activeTab === tab.id ? 'var(--color-gold-light)' : 'var(--color-primary)',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    textAlign: 'left',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <Icon size={18} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div style={{ borderTop: '1px solid var(--color-outline-variant)', marginTop: '1.5rem', paddingTop: '1.5rem' }}>
            <Link to="/wishlist" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.85rem 1rem', fontSize: '0.9rem', color: '#555', fontWeight: 600 }}>
              <Heart size={18} /> My Wishlist ({wishlistItems.length})
            </Link>
          </div>
        </div>

        {/* Dashboard Main Content */}
        <div style={{ background: 'white', border: '1px solid var(--color-outline-variant)', borderRadius: 'var(--radius-md)', padding: '2.5rem' }}>
          
          {/* Tab 1: Orders */}
          {activeTab === 'orders' && (
            <div>
              <h3 className="font-serif text-headline-sm" style={{ marginBottom: '1.5rem' }}>Order History</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {ordersList.map(ord => (
                  <div key={ord.id} style={{ border: '1px solid var(--color-outline-variant)', borderRadius: '6px', padding: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', borderBottom: '1px solid #eee', paddingBottom: '1rem', marginBottom: '1rem' }}>
                      <div>
                        <strong style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem' }}>#{ord.id}</strong>
                        <p style={{ fontSize: '0.8rem', color: '#777' }}>Placed on {ord.date}</p>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <span style={{ fontSize: '0.75rem', background: 'rgba(200,169,106,0.15)', color: 'var(--color-gold-dark)', padding: '0.35rem 0.75rem', borderRadius: 'var(--radius-full)', fontWeight: 700 }}>
                          {ord.status}
                        </span>
                        <p style={{ fontWeight: 700, marginTop: '0.35rem' }}>${ord.total.toLocaleString()}</p>
                      </div>
                    </div>
                    <ul style={{ fontSize: '0.9rem', color: '#555', paddingLeft: '1.25rem', marginBottom: '1.25rem' }}>
                      {ord.items.map((it, idx) => <li key={idx}>{it}</li>)}
                    </ul>
                    <Link to="/order-confirmation" className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.75rem' }}>
                      View Live Order Status &rarr;
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 2: Measurements */}
          {activeTab === 'measurements' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h3 className="font-serif text-headline-sm">Saved Fitting Measurements</h3>
                <Link to="/size-guide" style={{ fontSize: '0.8rem', color: 'var(--color-gold)', textDecoration: 'underline' }}>
                  Open Fit Assistant &rarr;
                </Link>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.25rem' }}>
                {Object.entries(userProfile.measurements).map(([key, val]) => (
                  <div key={key} style={{ background: 'var(--color-surface-low)', padding: '1.25rem', borderRadius: '6px', border: '1px solid var(--color-outline-variant)' }}>
                    <span style={{ fontSize: '0.75rem', color: '#777', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{key.replace(/([A-Z])/g, ' $1')}</span>
                    <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-primary)', marginTop: '0.2rem' }}>{val}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Addresses */}
          {activeTab === 'addresses' && (
            <div>
              <h3 className="font-serif text-headline-sm" style={{ marginBottom: '1.5rem' }}>Saved Shipping Addresses</h3>
              {userProfile.addresses.map(addr => (
                <div key={addr.id} style={{ border: '1px solid var(--color-outline-variant)', borderRadius: '6px', padding: '1.5rem' }}>
                  <span className="text-label-caps text-gold">{addr.title}</span>
                  <p style={{ marginTop: '0.5rem', fontSize: '0.95rem', color: '#333' }}>
                    {userProfile.name}<br />
                    {addr.address}<br />
                    {addr.city}, {addr.postalCode}, {addr.country}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Tab 4: Profile Settings */}
          {activeTab === 'profile' && (
            <div>
              <h3 className="font-serif text-headline-sm" style={{ marginBottom: '1.5rem' }}>VIP Profile Information</h3>
              <form onSubmit={(e) => { e.preventDefault(); alert('Profile updated successfully.'); }}>
                <div style={{ marginBottom: '1rem' }}>
                  <label className="text-label-caps" style={{ display: 'block', marginBottom: '0.35rem' }}>Full Name</label>
                  <input type="text" value={userProfile.name} onChange={(e) => setUserProfile({ ...userProfile, name: e.target.value })} style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-outline-variant)', borderRadius: '4px' }} />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <label className="text-label-caps" style={{ display: 'block', marginBottom: '0.35rem' }}>Email</label>
                  <input type="email" value={userProfile.email} onChange={(e) => setUserProfile({ ...userProfile, email: e.target.value })} style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-outline-variant)', borderRadius: '4px' }} />
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label className="text-label-caps" style={{ display: 'block', marginBottom: '0.35rem' }}>Phone</label>
                  <input type="tel" value={userProfile.phone} onChange={(e) => setUserProfile({ ...userProfile, phone: e.target.value })} style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-outline-variant)', borderRadius: '4px' }} />
                </div>
                <button type="submit" className="btn-primary btn-gold">Update Profile</button>
              </form>
            </div>
          )}

        </div>

      </div>
    </main>
  );
};
