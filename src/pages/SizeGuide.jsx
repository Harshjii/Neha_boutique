import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Ruler, Sparkles, Video, CheckCircle2 } from 'lucide-react';

export const SizeGuide = () => {
  const [unit, setUnit] = useState('inches'); // 'inches' | 'cm'

  const sizeTable = [
    { size: 'XS', us: '0-2', uk: '4-6', bust: unit === 'inches' ? '32 - 33"' : '81 - 84 cm', waist: unit === 'inches' ? '25 - 26"' : '63 - 66 cm', hips: unit === 'inches' ? '35 - 36"' : '89 - 91 cm' },
    { size: 'S', us: '4-6', uk: '8-10', bust: unit === 'inches' ? '34 - 35"' : '86 - 89 cm', waist: unit === 'inches' ? '27 - 28"' : '68 - 71 cm', hips: unit === 'inches' ? '37 - 38"' : '94 - 96 cm' },
    { size: 'M', us: '8-10', uk: '12-14', bust: unit === 'inches' ? '36 - 37"' : '91 - 94 cm', waist: unit === 'inches' ? '29 - 30"' : '73 - 76 cm', hips: unit === 'inches' ? '39 - 40"' : '99 - 101 cm' },
    { size: 'L', us: '12-14', uk: '16-18', bust: unit === 'inches' ? '38 - 40"' : '96 - 101 cm', waist: unit === 'inches' ? '31 - 33"' : '78 - 84 cm', hips: unit === 'inches' ? '41 - 43"' : '104 - 109 cm' },
    { size: 'XL', us: '16', uk: '20', bust: unit === 'inches' ? '41 - 43"' : '104 - 109 cm', waist: unit === 'inches' ? '34 - 36"' : '86 - 91 cm', hips: unit === 'inches' ? '44 - 46"' : '112 - 117 cm' },
    { size: 'Custom Fit', us: 'Any', uk: 'Any', bust: 'Bespoke Tailored', waist: 'Bespoke Tailored', hips: 'Bespoke Tailored' }
  ];

  return (
    <main className="container-custom section-spacing">
      <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem auto' }}>
        <span className="text-label-caps text-gold">Fit & Measurement Assistant</span>
        <h1 className="text-headline-lg font-serif" style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
          Bridal Fitting & Size Guide
        </h1>
        <p className="text-body-md" style={{ color: 'var(--color-on-surface-muted)' }}>
          Every Neha Boutique outfit can be crafted to standard international sizing or 100% custom-tailored to your exact personal measurements.
        </p>
      </div>

      {/* Unit Toggle & Table */}
      <section style={{ background: 'white', border: '1px solid var(--color-outline-variant)', borderRadius: 'var(--radius-md)', padding: '2.5rem', marginBottom: '4rem', boxShadow: 'var(--shadow-sm)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
          <h3 className="font-serif text-headline-sm">Standard Size Chart</h3>
          <div style={{ display: 'flex', background: 'var(--color-surface-low)', padding: '0.25rem', borderRadius: '4px', border: '1px solid var(--color-outline-variant)' }}>
            <button 
              onClick={() => setUnit('inches')}
              style={{
                padding: '0.4rem 1rem',
                borderRadius: '4px',
                background: unit === 'inches' ? 'var(--color-primary)' : 'transparent',
                color: unit === 'inches' ? 'white' : '#555',
                fontWeight: 600,
                fontSize: '0.8rem'
              }}
            >
              Inches (in)
            </button>
            <button 
              onClick={() => setUnit('cm')}
              style={{
                padding: '0.4rem 1rem',
                borderRadius: '4px',
                background: unit === 'cm' ? 'var(--color-primary)' : 'transparent',
                color: unit === 'cm' ? 'white' : '#555',
                fontWeight: 600,
                fontSize: '0.8rem'
              }}
            >
              Centimeters (cm)
            </button>
          </div>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ background: 'var(--color-surface-low)', borderBottom: '2px solid var(--color-outline-variant)' }}>
                <th style={{ padding: '1rem' }}>Size</th>
                <th style={{ padding: '1rem' }}>US Size</th>
                <th style={{ padding: '1rem' }}>UK Size</th>
                <th style={{ padding: '1rem' }}>Bust</th>
                <th style={{ padding: '1rem' }}>Waist</th>
                <th style={{ padding: '1rem' }}>Hips</th>
              </tr>
            </thead>
            <tbody>
              {sizeTable.map((row, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid var(--color-outline-variant)' }}>
                  <td style={{ padding: '1rem', fontWeight: 700, color: 'var(--color-primary)' }}>{row.size}</td>
                  <td style={{ padding: '1rem', color: '#555' }}>{row.us}</td>
                  <td style={{ padding: '1rem', color: '#555' }}>{row.uk}</td>
                  <td style={{ padding: '1rem', color: '#555' }}>{row.bust}</td>
                  <td style={{ padding: '1rem', color: '#555' }}>{row.waist}</td>
                  <td style={{ padding: '1rem', color: '#555' }}>{row.hips}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Measurement Instructions */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
        <div>
          <span className="text-label-caps text-gold">How to Measure at Home</span>
          <h2 className="text-headline-lg font-serif" style={{ marginTop: '0.5rem', marginBottom: '1.25rem' }}>
            Bespoke Custom Measurements
          </h2>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', color: '#555', fontSize: '0.95rem' }}>
            <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <CheckCircle2 className="text-gold" size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
              <div><strong>Bust:</strong> Measure around the fullest part of your chest with tape parallel to the floor.</div>
            </li>
            <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <CheckCircle2 className="text-gold" size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
              <div><strong>Waist:</strong> Measure around your natural waistline (narrowest part of your torso).</div>
            </li>
            <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <CheckCircle2 className="text-gold" size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
              <div><strong>Hips:</strong> Stand with feet together and measure around the fullest part of your hips.</div>
            </li>
            <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <CheckCircle2 className="text-gold" size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
              <div><strong>Lehenga Length:</strong> Measure from your naval/waist down to the floor wearing your intended wedding heels.</div>
            </li>
          </ul>
        </div>

        <div style={{ background: 'var(--color-surface-low)', padding: '2.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-outline-variant)', textAlign: 'center' }}>
          <Video size={48} className="text-gold" style={{ marginBottom: '1rem', margin: '0 auto' }} />
          <h3 className="font-serif text-headline-sm" style={{ marginBottom: '0.75rem' }}>Need Stylist Help?</h3>
          <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1.5rem' }}>
            Schedule a complimentary 15-minute video call with a Neha Boutique master tailor who will guide you through taking your measurements online.
          </p>
          <Link to="/contact" className="btn-primary btn-gold">Book Virtual Tailor Video Call &rarr;</Link>
        </div>
      </section>
    </main>
  );
};
