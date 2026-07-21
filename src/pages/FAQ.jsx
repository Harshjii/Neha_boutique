import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, ShieldCheck, Truck, RefreshCw, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      category: 'Shipping & Delivery',
      question: 'Do you offer worldwide shipping and insured concierge delivery?',
      answer: 'Yes. Neha Boutique provides complimentary DHL Express worldwide shipping on all bridal couture orders. Each parcel is fully insured and delivered in our signature temperature-controlled VIP wooden trunk packaging.'
    },
    {
      category: 'Custom Fittings & Measurements',
      question: 'How do custom measurements and fittings work online?',
      answer: 'Once your order is placed, our lead stylist schedules a 1-on-1 virtual measurement session via video call. Alternatively, you can submit your saved body measurements through your VIP User Dashboard.'
    },
    {
      category: 'Production Crafting Timeline',
      question: 'How long does it take to craft a Zardozi bridal lehenga?',
      answer: 'Standard prêt-à-porter items ship within 5-7 business days. Custom bridal lehengas and bespoke couture gowns require 4-6 weeks of intensive hand embroidery by our master karigars in New Delhi.'
    },
    {
      category: 'Alterations & Lifetime Guarantee',
      question: 'What is your alteration policy if the fit needs adjusting?',
      answer: 'We provide complimentary lifetime fit adjustments for all our brides. You can visit any of our flagship boutiques in New Delhi, London, or New York, or return the garment using our pre-paid VIP courier service.'
    },
    {
      category: 'Authenticity & Fabrics',
      question: 'Are the metallic Zardozi threads and silks authentic?',
      answer: '100% authentic. Every garment is certified with a Silk Mark of authenticity. We use genuine gold and silver coated metallic wires, pure raw silk, and hand-cut stones.'
    }
  ];

  return (
    <main className="container-custom section-spacing">
      <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
        <span className="text-label-caps text-gold">VIP Concierge Care</span>
        <h1 className="text-headline-lg font-serif" style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
          Frequently Asked Questions
        </h1>
        <p className="text-body-md" style={{ color: 'var(--color-on-surface-muted)' }}>
          Everything you need to know about ordering bespoke bridal wear, international shipping, and lifetime fit guarantees.
        </p>
      </div>

      <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div 
              key={idx}
              style={{
                background: 'white',
                border: '1px solid var(--color-outline-variant)',
                borderRadius: 'var(--radius-sm)',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                style={{
                  width: '100%',
                  padding: '1.5rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  textAlign: 'left',
                  background: isOpen ? 'rgba(200,169,106,0.06)' : 'white'
                }}
              >
                <div>
                  <span style={{ fontSize: '0.7rem', color: 'var(--color-gold-dark)', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 600 }}>{faq.category}</span>
                  <h3 className="font-serif" style={{ fontSize: '1.1rem', marginTop: '0.2rem', color: 'var(--color-primary)' }}>{faq.question}</h3>
                </div>
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                  <ChevronDown size={20} className="text-gold" />
                </motion.div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div style={{ padding: '0 1.5rem 1.5rem 1.5rem', color: '#555', fontSize: '0.95rem', lineHeight: 1.6, borderTop: '1px solid #eee' }}>
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <div style={{ textAlign: 'center', marginTop: '4rem', background: 'var(--color-surface-low)', padding: '3rem 2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-outline-variant)' }}>
        <h3 className="font-serif text-headline-sm" style={{ marginBottom: '0.5rem' }}>Have More Questions?</h3>
        <p style={{ color: '#666', marginBottom: '1.5rem' }}>Our senior bridal concierge is available 24/7 via WhatsApp, phone, or live chat.</p>
        <Link to="/contact" className="btn-primary btn-gold">Contact Concierge Team &rarr;</Link>
      </div>
    </main>
  );
};
