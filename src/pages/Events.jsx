import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Clock, X, CheckCircle2 } from 'lucide-react';

export const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);

  const events = [
    {
      id: '1',
      city: 'London',
      country: 'United Kingdom',
      title: 'Royal Bridal Trunk Show 2026',
      date: 'September 12 - 14, 2026',
      time: '10:00 AM - 7:00 PM BST',
      location: 'The Claridge’s Hotel, Mayfair',
      image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=800',
      description: 'Private preview of the 2026 Haute Couture lehenga collection with senior designers in Mayfair.'
    },
    {
      id: '2',
      city: 'Dubai',
      country: 'United Arab Emirates',
      title: 'Emirates Luxury Fashion Week Showcase',
      date: 'October 04 - 06, 2026',
      time: '11:00 AM - 8:00 PM GST',
      location: 'Armani Hotel, Burj Khalifa, Dubai',
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800',
      description: 'Exclusive bridal consultation and champagne reception for Middle Eastern brides.'
    },
    {
      id: '3',
      city: 'New York',
      country: 'USA',
      title: 'Fifth Avenue Bridal Trunk Experience',
      date: 'November 08 - 10, 2026',
      time: '10:00 AM - 6:00 PM EST',
      location: 'The Plaza Hotel, Fifth Avenue',
      image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=800',
      description: 'Personal styling appointments with master karigars flown in directly from New Delhi.'
    }
  ];

  const handleRsvpSubmit = (e) => {
    e.preventDefault();
    setRsvpSubmitted(true);
    setTimeout(() => {
      setRsvpSubmitted(false);
      setSelectedEvent(null);
    }, 2500);
  };

  return (
    <main className="container-custom section-spacing">
      <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
        <span className="text-label-caps text-gold">Global VIP Trunk Shows</span>
        <h1 className="text-headline-lg font-serif" style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
          Exclusive Atelier Events & Shows
        </h1>
        <p className="text-body-md" style={{ color: 'var(--color-on-surface-muted)' }}>
          Experience Neha Boutique’s royal bridal collections in person. Reserve your private invitation-only fitting slot at our upcoming global events.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
        {events.map(event => (
          <div key={event.id} className="card-product" style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
            <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
              <img src={event.image} alt={event.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <span className="card-badge" style={{ background: 'var(--color-primary)', color: 'white' }}>
                {event.city}, {event.country}
              </span>
            </div>

            <div style={{ padding: '2rem' }}>
              <h3 className="font-serif text-headline-sm" style={{ marginBottom: '1rem' }}>{event.title}</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.85rem', color: '#555', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Calendar size={16} className="text-gold" /> {event.date}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Clock size={16} className="text-gold" /> {event.time}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <MapPin size={16} className="text-gold" /> {event.location}
                </div>
              </div>

              <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                {event.description}
              </p>

              <button 
                className="btn-primary btn-gold" 
                style={{ width: '100%' }}
                onClick={() => setSelectedEvent(event)}
              >
                RSVP Private Fitting &rarr;
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* RSVP Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEvent(null)}
              style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(6px)' }}
            />

            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              style={{ position: 'relative', width: '90%', maxWidth: '540px', background: 'white', borderRadius: 'var(--radius-md)', padding: '2.5rem', zIndex: 1001 }}
            >
              <button onClick={() => setSelectedEvent(null)} style={{ position: 'absolute', top: '1rem', right: '1rem', color: '#333' }}>
                <X size={24} />
              </button>

              {rsvpSubmitted ? (
                <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                  <CheckCircle2 size={48} className="text-gold" style={{ marginBottom: '1rem', margin: '0 auto' }} />
                  <h3 className="font-serif text-headline-sm">VIP Invitation Confirmed</h3>
                  <p style={{ color: '#666', marginTop: '0.5rem' }}>We have reserved your fitting slot for {selectedEvent.title} in {selectedEvent.city}. Check your email for details.</p>
                </div>
              ) : (
                <>
                  <span className="text-label-caps text-gold">Exclusive RSVP</span>
                  <h3 className="font-serif text-headline-sm" style={{ marginTop: '0.35rem', marginBottom: '0.5rem' }}>
                    RSVP for {selectedEvent.city} Trunk Show
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '1.5rem' }}>
                    {selectedEvent.date} • {selectedEvent.location}
                  </p>

                  <form onSubmit={handleRsvpSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <input type="text" placeholder="Your Full Name" required style={{ padding: '0.75rem', border: '1px solid var(--color-outline-variant)', borderRadius: '4px' }} />
                    <input type="email" placeholder="Email Address" required style={{ padding: '0.75rem', border: '1px solid var(--color-outline-variant)', borderRadius: '4px' }} />
                    <input type="tel" placeholder="WhatsApp / Phone Number" required style={{ padding: '0.75rem', border: '1px solid var(--color-outline-variant)', borderRadius: '4px' }} />
                    <select style={{ padding: '0.75rem', border: '1px solid var(--color-outline-variant)', borderRadius: '4px', background: 'white' }}>
                      <option>Preferred Slot: Morning (11:00 AM)</option>
                      <option>Preferred Slot: Afternoon (2:30 PM)</option>
                      <option>Preferred Slot: Evening (5:30 PM)</option>
                    </select>
                    <button type="submit" className="btn-primary btn-gold" style={{ marginTop: '0.5rem' }}>Confirm VIP Reservation &rarr;</button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
};
