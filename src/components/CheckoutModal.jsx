import React, { useState } from 'react';
import { X, CheckCircle, CreditCard, Lock, Truck, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CheckoutModal({ isOpen, onClose, cartItems, onClearCart }) {
  const [isCompleted, setIsCompleted] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Eleanor Vance',
    email: 'eleanor@example.com',
    address: '742 Evergreen Terrace, Suite 4B',
    city: 'San Francisco',
    zip: '94107',
    cardNumber: '•••• •••• •••• 4242'
  });

  if (!isOpen) return null;

  const totalAmount = cartItems.reduce((acc, i) => acc + i.price * i.quantity, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsCompleted(true);
    onClearCart();

    // Trigger confetti celebratory effect
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.log('Confetti effect failed', err);
    }
  };

  const handleClose = () => {
    setIsCompleted(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '650px' }}>
        <button className="close-modal-btn" onClick={handleClose}>
          <X size={20} />
        </button>

        {!isCompleted ? (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <Lock size={18} color="var(--color-emerald)" />
              <span style={{ fontSize: '0.85rem', color: 'var(--color-emerald)', fontWeight: '700', textTransform: 'uppercase' }}>
                256-Bit Encrypted Secure Checkout
              </span>
            </div>

            <h2 className="font-serif" style={{ fontSize: '2.2rem', marginBottom: '1.5rem' }}>
              Complete Your Artisanal Order
            </h2>

            <form onSubmit={handleSubmit}>
              {/* Customer Details */}
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', marginBottom: '0.4rem', color: 'var(--text-muted)' }}>
                  Full Shipping Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{ width: '100%', background: 'var(--bg-dark)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', padding: '0.75rem', color: 'white', outline: 'none' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', marginBottom: '0.4rem', color: 'var(--text-muted)' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{ width: '100%', background: 'var(--bg-dark)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', padding: '0.75rem', color: 'white', outline: 'none' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', marginBottom: '0.4rem', color: 'var(--text-muted)' }}>
                    Delivery Address
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    style={{ width: '100%', background: 'var(--bg-dark)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', padding: '0.75rem', color: 'white', outline: 'none' }}
                  />
                </div>
              </div>

              {/* Payment Card Simulation */}
              <div style={{ background: 'var(--bg-dark)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.25rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
                  <span style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--color-gold)' }}>Payment Card Details</span>
                  <CreditCard size={20} color="var(--color-gold)" />
                </div>
                <input
                  type="text"
                  value={formData.cardNumber}
                  onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                  style={{ width: '100%', background: '#0a0f0d', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 'var(--radius-sm)', padding: '0.75rem', color: 'white', outline: 'none', fontFamily: 'monospace' }}
                />
              </div>

              {/* Order total */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-color)', paddingTop: '1rem', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '1.1rem', fontWeight: '700' }}>Order Total ({cartItems.length} items)</span>
                <span style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--color-gold)' }}>${totalAmount.toFixed(2)}</span>
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}>
                <Sparkles size={18} /> Confirm & Pay ${totalAmount.toFixed(2)}
              </button>
            </form>
          </div>
        ) : (
          /* Order Confirmation */
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <div style={{ width: '72px', height: '72px', background: 'rgba(16,185,129,0.15)', color: 'var(--color-emerald)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
              <CheckCircle size={42} />
            </div>

            <div style={{ fontSize: '0.85rem', color: 'var(--color-gold)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Order Confirmed • #MSIP-{Math.floor(100000 + Math.random() * 900000)}
            </div>

            <h2 className="font-serif" style={{ fontSize: '2.5rem', margin: '0.5rem 0 1rem' }}>
              Thank You For Your Order!
            </h2>

            <p style={{ color: 'var(--text-muted)', maxWidth: '480px', margin: '0 auto 1.5rem' }}>
              Your artisanal tea selection has been dispatched to our Kyoto & Darjeeling master blenders. A shipping confirmation email with tracking details has been sent to <strong>{formData.email}</strong>.
            </p>

            <div style={{ background: 'var(--bg-dark)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.25rem', maxWidth: '400px', margin: '0 auto 2rem', textAlign: 'left', fontSize: '0.9rem' }}>
              <div style={{ color: 'var(--color-emerald)', fontWeight: '700', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Truck size={16} /> Estimated Delivery: 2-3 Business Days
              </div>
              <div style={{ color: 'var(--text-muted)' }}>
                <strong>Deliver To:</strong> {formData.name}, {formData.address}
              </div>
            </div>

            <button className="btn-primary" onClick={handleClose}>
              Continue Exploring Collection
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
