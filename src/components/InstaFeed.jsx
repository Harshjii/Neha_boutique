import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle } from 'lucide-react';

const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export const InstaFeed = () => {
  const posts = [
    {
      id: '1',
      img: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=600',
      likes: '4.2k',
      comments: '128',
      title: 'Zardozi Velvet Lehenga Detail'
    },
    {
      id: '2',
      img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=600',
      likes: '5.8k',
      comments: '210',
      title: 'Emerald Silk Couture'
    },
    {
      id: '3',
      img: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=600',
      likes: '3.9k',
      comments: '95',
      title: 'Heritage Banarasi Weaves'
    },
    {
      id: '4',
      img: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=600',
      likes: '6.1k',
      comments: '340',
      title: 'Champagne Sequin Gown'
    }
  ];

  return (
    <section className="section-spacing container-custom" id="instagramSection">
      <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem auto' }}>
        <span className="text-label-caps text-gold" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
          <InstagramIcon size={16} /> @neha_boutique_0
        </span>
        <h2 className="text-headline-lg font-serif" style={{ marginTop: '0.5rem' }}>Follow Us On Instagram</h2>
        <p className="text-body-md" style={{ color: 'var(--color-on-surface-muted)', marginTop: '0.5rem' }}>
          Behind-the-scenes karigar craftsmanship, royal bridal fittings, and runway previews.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
        {posts.map((post, index) => (
          <motion.a 
            key={post.id}
            href="https://www.instagram.com/neha_boutique_0/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{ position: 'relative', aspectRatio: '1', borderRadius: 'var(--radius-sm)', overflow: 'hidden', display: 'block' }}
          >
            <img 
              src={post.img} 
              alt={post.title} 
              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
            />
            <div style={{ 
              position: 'absolute', 
              inset: 0, 
              background: 'rgba(26,26,26,0.65)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: '1.25rem', 
              color: 'white', 
              opacity: 0, 
              transition: 'opacity 0.3s ease' 
            }}
            className="insta-hover-overlay"
            onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
            onMouseLeave={(e) => e.currentTarget.style.opacity = 0}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontWeight: 600 }}>
                <Heart size={18} fill="white" /> {post.likes}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontWeight: 600 }}>
                <MessageCircle size={18} fill="white" /> {post.comments}
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
        <a 
          href="https://www.instagram.com/neha_boutique_0/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
          style={{ gap: '0.5rem' }}
          id="viewInstaProfileBtn"
        >
          <InstagramIcon size={18} />
          View @neha_boutique_0 On Instagram &rarr;
        </a>
      </div>
    </section>
  );
};
