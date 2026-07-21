import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, Package, Truck, Sparkles, Printer, Calendar } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const OrderConfirmation = () => {
  const { lastOrder } = useCart();

  const order = lastOrder || {
    orderId: 'NB-849320',
    date: 'July 21, 2026',
    customerName: 'Princess Ananya Singh',
    customerEmail: 'ananya@royalheritage.com',
    shippingAddress: '14 Amrita Shergill Marg, Lutyens Delhi, New Delhi 110003, India',
    items: [
      {
        id: '1',
        name: 'Noor Zardozi Velvet Lehenga',
        category: 'Bridal Couture',
        price: 3450,
        qty: 1,
        image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=800',
        size: 'Custom Fit'
      }
    ],
    subtotal: 3450,
    paymentMethod: 'VIP Credit Card',
    giftWrapped: true
  };

  const steps = [
    { title: 'Order Confirmed', desc: 'July 21, 2026', status: 'completed' },
    { title: 'Handcrafted by Karigars', desc: 'In Atelier Production', status: 'active' },
    { title: 'Quality & Zardozi Inspection', desc: 'Expected Aug 12', status: 'pending' },
    { title: 'VIP Global Courier Dispatch', desc: 'Expected Aug 18', status: 'pending' },
    { title: 'Delivered in Wooden Trunk', desc: 'Expected Aug 20', status: 'pending' }
  ];

  return (
    <main className="container-custom section-spacing">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem auto' }}
      >
        <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(200,169,106,0.15)', border: '1px solid var(--color-gold)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gold)', marginBottom: '1.25rem' }}>
          <CheckCircle2 size={36} />
        </div>
        <span className="text-label-caps text-gold">Order Confirmed</span>
        <h1 className="text-headline-lg font-serif" style={{ marginTop: '0.35rem', marginBottom: '0.75rem' }}>
          Thank You, {order.customerName}
        </h1>
        <p className="text-body-md" style={{ color: 'var(--color-on-surface-muted)' }}>
          Your order <strong>#{order.orderId}</strong> has been received by the Neha Boutique Atelier. A confirmation receipt has been sent to <strong>{order.customerEmail}</strong>.
        </p>
      </motion.div>

      {/* 5-Stage Tracking Bar */}
      <section style={{ background: 'white', border: '1px solid var(--color-outline-variant)', borderRadius: 'var(--radius-md)', padding: '2.5rem', marginBottom: '3.5rem', boxShadow: 'var(--shadow-sm)' }}>
        <h3 className="font-serif text-headline-sm" style={{ marginBottom: '2rem', textAlign: 'center' }}>
          Atelier Production & Delivery Timeline
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1.5rem', position: 'relative' }}>
          {steps.map((step, idx) => (
            <div key={idx} style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
              <div 
                style={{ 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '50%', 
                  margin: '0 auto 0.75rem auto',
                  background: step.status === 'completed' ? 'var(--color-gold)' : step.status === 'active' ? 'var(--color-primary)' : 'var(--color-surface-low)',
                  color: step.status === 'pending' ? '#888' : 'white',
                  border: step.status === 'active' ? '2px solid var(--color-gold)' : 'none',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '0.9rem'
                }}
              >
                {step.status === 'completed' ? '✓' : idx + 1}
              </div>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.2rem' }}>{step.title}</h4>
              <span style={{ fontSize: '0.75rem', color: '#777' }}>{step.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Order Details Invoice Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'start' }}>
        
        <div style={{ background: 'white', border: '1px solid var(--color-outline-variant)', borderRadius: 'var(--radius-md)', padding: '2rem' }}>
          <h3 className="font-serif text-headline-sm" style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--color-outline-variant)', paddingBottom: '0.75rem' }}>
            Purchased Ensembles
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '1.5rem' }}>
            {order.items.map(item => (
              <div key={item.id} style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                <img src={item.image} alt={item.name} style={{ width: '70px', height: '90px', objectFit: 'cover', borderRadius: '4px' }} />
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', fontWeight: 600 }}>{item.name}</h4>
                  <p style={{ fontSize: '0.8rem', color: '#777' }}>Category: {item.category} • Size: {item.size}</p>
                  <p style={{ fontSize: '0.8rem', color: '#777' }}>Qty: {item.qty}</p>
                </div>
                <span className="text-gold" style={{ fontWeight: 700, fontSize: '1.1rem' }}>
                  ${(item.price * item.qty).toLocaleString()}
                </span>
              </div>
            ))}
          </div>

          <div style={{ borderTop: '1px solid var(--color-outline-variant)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', fontSize: '1.1rem', fontWeight: 700 }}>
            <span>Total Paid</span>
            <span className="text-gold">${order.subtotal.toLocaleString()}</span>
          </div>
        </div>

        <div style={{ background: 'white', border: '1px solid var(--color-outline-variant)', borderRadius: 'var(--radius-md)', padding: '2rem' }}>
          <h3 className="font-serif text-headline-sm" style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--color-outline-variant)', paddingBottom: '0.75rem' }}>
            Delivery Details
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem', color: '#444' }}>
            <div>
              <strong>Order Number:</strong> #{order.orderId}
            </div>
            <div>
              <strong>Order Date:</strong> {order.date}
            </div>
            <div>
              <strong>Payment Method:</strong> {order.paymentMethod}
            </div>
            <div>
              <strong>Shipping Address:</strong><br />
              {order.shippingAddress}
            </div>
            {order.giftWrapped && (
              <div style={{ color: 'var(--color-gold-dark)', fontWeight: 600 }}>
                ✓ Signature Wooden Trunk Box & VIP Gift Wrap Included
              </div>
            )}
          </div>

          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button className="btn-secondary" style={{ flex: 1, gap: '0.5rem' }} onClick={() => window.print()}>
              <Printer size={16} /> Print Invoice
            </button>
            <Link to="/account" className="btn-primary btn-gold" style={{ flex: 1 }}>
              View in My Account &rarr;
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
};
