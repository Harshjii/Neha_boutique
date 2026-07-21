import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, CreditCard, Gift, Truck, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, rawSubtotal, discountAmount, subtotal, appliedPromo, applyPromoCode, setLastOrder, setCartItems } = useCart();
  
  const [promoInput, setPromoInput] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isGiftWrapped, setIsGiftWrapped] = useState(true);

  const [formData, setFormData] = useState({
    fullName: 'Princess Ananya Singh',
    email: 'ananya@royalheritage.com',
    phone: '+91 98765 43210',
    address: '14 Amrita Shergill Marg, Lutyens Delhi',
    city: 'New Delhi',
    postalCode: '110003',
    country: 'India',
    cardNumber: '4532 •••• •••• 8890',
    expiry: '08/28',
    cvv: '•••'
  });

  const handleApplyPromo = (e) => {
    e.preventDefault();
    applyPromoCode(promoInput);
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const orderDetails = {
      orderId: 'NB-' + Math.floor(100000 + Math.random() * 900000),
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      items: cartItems,
      subtotal,
      rawSubtotal,
      discountAmount,
      shipping: 0,
      paymentMethod: paymentMethod === 'card' ? 'VIP Credit Card' : paymentMethod === 'apple' ? 'Apple Pay' : 'Atelier Concierge Deposit',
      shippingAddress: `${formData.address}, ${formData.city}, ${formData.postalCode}, ${formData.country}`,
      customerName: formData.fullName,
      customerEmail: formData.email,
      giftWrapped: isGiftWrapped
    };

    setLastOrder(orderDetails);
    setCartItems([]);
    navigate('/order-confirmation');
  };

  if (cartItems.length === 0) {
    return (
      <main className="container-custom section-spacing" style={{ textAlign: 'center', padding: '6rem 2rem' }}>
        <h2 className="font-serif text-headline-lg" style={{ marginBottom: '1rem' }}>Your Bag is Empty</h2>
        <p style={{ color: '#666', marginBottom: '2rem' }}>Please add couture items to your bag before proceeding to checkout.</p>
        <Link to="/shop" className="btn-primary btn-gold">Explore Collections &rarr;</Link>
      </main>
    );
  }

  return (
    <main className="container-custom section-spacing">
      <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem auto' }}>
        <span className="text-label-caps text-gold">Secure Encrypted VIP Checkout</span>
        <h1 className="text-headline-lg font-serif" style={{ marginTop: '0.5rem' }}>Complete Your Couture Order</h1>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '3.5rem', alignItems: 'start' }}>
        
        {/* Checkout Form */}
        <form onSubmit={handlePlaceOrder} style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          
          {/* Step 1: Shipping Address */}
          <div style={{ background: 'white', border: '1px solid var(--color-outline-variant)', borderRadius: 'var(--radius-md)', padding: '2rem' }}>
            <h3 className="font-serif text-headline-sm" style={{ marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Truck className="text-gold" size={22} /> 1. Shipping Address
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <label className="text-label-caps" style={{ display: 'block', marginBottom: '0.35rem' }}>Full Name</label>
                <input 
                  type="text" 
                  value={formData.fullName} 
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  required 
                  style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-outline-variant)', borderRadius: '4px' }} 
                />
              </div>
              <div>
                <label className="text-label-caps" style={{ display: 'block', marginBottom: '0.35rem' }}>Phone Number</label>
                <input 
                  type="tel" 
                  value={formData.phone} 
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required 
                  style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-outline-variant)', borderRadius: '4px' }} 
                />
              </div>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label className="text-label-caps" style={{ display: 'block', marginBottom: '0.35rem' }}>Email Address</label>
              <input 
                type="email" 
                value={formData.email} 
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required 
                style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-outline-variant)', borderRadius: '4px' }} 
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label className="text-label-caps" style={{ display: 'block', marginBottom: '0.35rem' }}>Street Address</label>
              <input 
                type="text" 
                value={formData.address} 
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                required 
                style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-outline-variant)', borderRadius: '4px' }} 
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
              <div>
                <label className="text-label-caps" style={{ display: 'block', marginBottom: '0.35rem' }}>City</label>
                <input 
                  type="text" 
                  value={formData.city} 
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  required 
                  style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-outline-variant)', borderRadius: '4px' }} 
                />
              </div>
              <div>
                <label className="text-label-caps" style={{ display: 'block', marginBottom: '0.35rem' }}>Postal Code</label>
                <input 
                  type="text" 
                  value={formData.postalCode} 
                  onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                  required 
                  style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-outline-variant)', borderRadius: '4px' }} 
                />
              </div>
              <div>
                <label className="text-label-caps" style={{ display: 'block', marginBottom: '0.35rem' }}>Country</label>
                <input 
                  type="text" 
                  value={formData.country} 
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  required 
                  style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-outline-variant)', borderRadius: '4px' }} 
                />
              </div>
            </div>
          </div>

          {/* Step 2: Gift Packaging & Custom Fit Notes */}
          <div style={{ background: 'white', border: '1px solid var(--color-outline-variant)', borderRadius: 'var(--radius-md)', padding: '2rem' }}>
            <h3 className="font-serif text-headline-sm" style={{ marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Gift className="text-gold" size={22} /> 2. VIP Packaging & Bespoke Notes
            </h3>

            <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer', marginBottom: '1rem', fontSize: '0.9rem' }}>
              <input 
                type="checkbox" 
                checked={isGiftWrapped} 
                onChange={(e) => setIsGiftWrapped(e.target.checked)} 
                style={{ width: '18px', height: '18px', accentColor: 'var(--color-gold)' }}
              />
              <span>Include Signature Neha Boutique Wooden Trunk Box & Satin Ribbon</span>
            </label>

            <div>
              <label className="text-label-caps" style={{ display: 'block', marginBottom: '0.35rem' }}>Custom Fit Instructions / Stylist Notes</label>
              <textarea 
                rows="2" 
                placeholder="Mention any custom blouse sleeve length, dupatta border requests, or event dates..." 
                style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-outline-variant)', borderRadius: '4px' }}
              />
            </div>
          </div>

          {/* Step 3: Payment Gateway */}
          <div style={{ background: 'white', border: '1px solid var(--color-outline-variant)', borderRadius: 'var(--radius-md)', padding: '2rem' }}>
            <h3 className="font-serif text-headline-sm" style={{ marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CreditCard className="text-gold" size={22} /> 3. Payment Gateway
            </h3>

            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              {[
                { id: 'card', label: 'Credit / Debit Card' },
                { id: 'apple', label: 'Apple Pay' },
                { id: 'concierge', label: 'Atelier Deposit (50%)' }
              ].map(method => (
                <button
                  type="button"
                  key={method.id}
                  onClick={() => setPaymentMethod(method.id)}
                  style={{
                    padding: '0.75rem 1.25rem',
                    border: paymentMethod === method.id ? '2px solid var(--color-gold)' : '1px solid var(--color-outline-variant)',
                    background: paymentMethod === method.id ? 'rgba(200,169,106,0.08)' : 'white',
                    borderRadius: '4px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  {method.label}
                </button>
              ))}
            </div>

            {paymentMethod === 'card' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label className="text-label-caps" style={{ display: 'block', marginBottom: '0.35rem' }}>Card Number</label>
                  <input type="text" value={formData.cardNumber} readOnly style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-outline-variant)', borderRadius: '4px', background: '#fcfcfc' }} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label className="text-label-caps" style={{ display: 'block', marginBottom: '0.35rem' }}>Expiry Date</label>
                    <input type="text" value={formData.expiry} readOnly style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-outline-variant)', borderRadius: '4px', background: '#fcfcfc' }} />
                  </div>
                  <div>
                    <label className="text-label-caps" style={{ display: 'block', marginBottom: '0.35rem' }}>CVV</label>
                    <input type="password" value={formData.cvv} readOnly style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-outline-variant)', borderRadius: '4px', background: '#fcfcfc' }} />
                  </div>
                </div>
              </div>
            )}

            <button type="submit" className="btn-primary btn-gold" style={{ width: '100%', marginTop: '2rem', gap: '0.5rem' }}>
              <Lock size={16} /> Place Order & Pay ${subtotal.toLocaleString()} &rarr;
            </button>
          </div>

        </form>

        {/* Order Summary Box */}
        <div style={{ position: 'sticky', top: '120px', background: 'white', border: '1px solid var(--color-outline-variant)', borderRadius: 'var(--radius-md)', padding: '2rem', boxShadow: 'var(--shadow-md)' }}>
          <h3 className="font-serif text-headline-sm" style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--color-outline-variant)', paddingBottom: '0.75rem' }}>
            Order Summary ({cartItems.length})
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '1.5rem', maxHeight: '300px', overflowY: 'auto' }}>
            {cartItems.map(item => (
              <div key={item.id} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <img src={item.image} alt={item.name} style={{ width: '60px', height: '75px', objectFit: 'cover', borderRadius: '4px' }} />
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '0.85rem', fontWeight: 600 }}>{item.name}</h4>
                  <p style={{ fontSize: '0.75rem', color: '#777' }}>Size: {item.size} • Qty: {item.qty}</p>
                </div>
                <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>${(item.price * item.qty).toLocaleString()}</span>
              </div>
            ))}
          </div>

          {/* Promo Code Input */}
          <form onSubmit={handleApplyPromo} style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <input 
              type="text" 
              placeholder="Promo Code (e.g. NEHAVIP10)" 
              value={promoInput} 
              onChange={(e) => setPromoInput(e.target.value)}
              style={{ flex: 1, padding: '0.6rem 0.85rem', border: '1px solid var(--color-outline-variant)', borderRadius: '4px', fontSize: '0.8rem', textTransform: 'uppercase' }} 
            />
            <button type="submit" className="btn-secondary" style={{ padding: '0.6rem 1rem', fontSize: '0.75rem' }}>Apply</button>
          </form>

          {appliedPromo && (
            <div style={{ background: 'rgba(200,169,106,0.1)', border: '1px solid var(--color-gold)', padding: '0.6rem 1rem', borderRadius: '4px', fontSize: '0.8rem', color: 'var(--color-primary)', marginBottom: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>Promo Applied: <strong>{appliedPromo}</strong></span>
              <span className="text-gold" style={{ fontWeight: 700 }}>-10%</span>
            </div>
          )}

          <div style={{ borderTop: '1px solid var(--color-outline-variant)', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.9rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#777' }}>Subtotal</span>
              <span>${rawSubtotal.toLocaleString()}</span>
            </div>
            {discountAmount > 0 && (
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-gold-dark)' }}>
                <span>VIP Discount</span>
                <span>-${discountAmount.toLocaleString()}</span>
              </div>
            )}
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#777' }}>VIP Shipping & Insured Delivery</span>
              <span style={{ color: 'var(--color-gold)', fontWeight: 600 }}>COMPLIMENTARY</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--color-outline-variant)', paddingTop: '1rem', fontSize: '1.2rem', fontWeight: 700 }}>
              <span>Total Due</span>
              <span className="text-gold">${subtotal.toLocaleString()}</span>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
};
