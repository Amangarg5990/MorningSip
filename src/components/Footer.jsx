import React, { useState } from 'react';
import { Leaf, Send, Check } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div>
            <a href="#" className="brand-logo" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
              <div className="brand-icon">
                <Leaf size={20} />
              </div>
              <span className="font-serif">Morning Sip</span>
            </a>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '320px', lineHeight: '1.6' }}>
              Single-origin loose leaf harvests & fine artisanal teas sourced directly from heritage tea gardens.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 style={{ color: 'var(--color-gold)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
              Explore
            </h5>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
              <li><button onClick={() => onNavigate('shop')} style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>Collection Catalog</button></li>
              <li><button onClick={() => onNavigate('quiz')} style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>Tea Matcher Quiz</button></li>
              <li><button onClick={() => onNavigate('blender')} style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>Custom Tea Blender</button></li>
              <li><button onClick={() => onNavigate('timer')} style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>Digital Steep Timer</button></li>
              <li><button onClick={() => onNavigate('benefits')} style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>Tea Benefits & Science</button></li>
            </ul>
          </div>

          {/* Origins */}
          <div>
            <h5 style={{ color: 'var(--color-gold)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
              Indian Terroirs
            </h5>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              <li>Assam Valley (Golden Tips & Royal CTC)</li>
              <li>Darjeeling (Champagne First Flush)</li>
              <li>Nilgiri (Blue Mountain Winter Frost)</li>
              <li>Meghalaya (Khasi Cloud Highlands)</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h5 style={{ color: 'var(--color-gold)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
              Join Tea Club (15% Off)
            </h5>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1rem' }}>
              Subscribe to receive micro-harvest releases, brewing guides, and a 15% discount code (`TEA15`).
            </p>

            <form onSubmit={handleSubscribe}>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <input
                  type="email"
                  required
                  placeholder="Enter email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    flexGrow: 1,
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '0.6rem 0.8rem',
                    color: 'white',
                    fontSize: '0.85rem',
                    outline: 'none'
                  }}
                />
                <button type="submit" className="btn-primary" style={{ padding: '0.6rem 1rem' }}>
                  {subscribed ? <Check size={16} /> : <Send size={16} />}
                </button>
              </div>
              {subscribed && (
                <div style={{ fontSize: '0.78rem', color: 'var(--color-emerald)', marginTop: '0.4rem', fontWeight: '600' }}>
                  Welcome! Check your email for code TEA15.
                </div>
              )}
            </form>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.5rem', textAlign: 'center', fontSize: '0.82rem', color: 'var(--text-dim)' }}>
          © 2026 Morning Sip. All rights reserved. Handcrafted for Tea Lovers.
        </div>
      </div>
    </footer>
  );
}
