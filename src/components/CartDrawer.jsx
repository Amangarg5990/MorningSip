import React, { useState } from 'react';
import { X, Trash2, ArrowRight, Tag, ShieldCheck, Truck } from 'lucide-react';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout
}) {
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = (subtotal * discountPercent) / 100;
  const freeShippingThreshold = 50;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const freeShippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const finalTotal = Math.max(0, subtotal - discountAmount);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    setPromoError('');
    setPromoSuccess('');

    if (promoCode.trim().toUpperCase() === 'TEA15') {
      setDiscountPercent(15);
      setPromoSuccess('15% Promo Discount Applied!');
    } else {
      setPromoError('Invalid promo code. Try TEA15 for 15% off.');
    }
  };

  return (
    <>
      <div className={`cart-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}></div>

      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        {/* Header */}
        <div className="cart-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="font-serif" style={{ fontSize: '1.4rem', fontWeight: '700' }}>
              Your Tea Bag
            </span>
            <span style={{ fontSize: '0.85rem', color: 'var(--color-gold)', fontWeight: '700' }}>
              ({cartItems.reduce((acc, i) => acc + i.quantity, 0)} items)
            </span>
          </div>
          <button className="close-modal-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {/* Free Shipping Progress Bar */}
        <div style={{ padding: '1rem 1.5rem', background: 'rgba(230,197,148,0.06)', borderBottom: '1px solid var(--border-color)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '0.4rem', fontWeight: '600' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-gold)' }}>
              <Truck size={14} /> Free Express Worldwide Shipping
            </span>
            <span>
              {remainingForFreeShipping > 0
                ? `Add $${remainingForFreeShipping.toFixed(2)} more`
                : 'Unlocked! 🎉'}
            </span>
          </div>
          <div style={{ height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '999px', overflow: 'hidden' }}>
            <div
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, var(--color-gold), var(--color-emerald))',
                width: `${freeShippingProgress}%`,
                transition: 'width 0.3s ease'
              }}
            ></div>
          </div>
        </div>

        {/* Item List */}
        <div className="cart-items-list">
          {cartItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 1rem', color: 'var(--text-muted)' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🍵</div>
              <h4 className="font-serif" style={{ fontSize: '1.3rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                Your Tea Bag is Empty
              </h4>
              <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                Discover single-origin harvests or create your custom blend to begin.
              </p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div style={{ flexGrow: 1 }}>
                  <div style={{ fontWeight: '700', fontSize: '0.95rem', color: 'var(--text-main)' }}>
                    {item.name}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-emerald)', fontWeight: '600' }}>
                    {item.origin}
                  </div>
                  <div style={{ fontWeight: '800', color: 'var(--color-gold)', marginTop: '0.2rem' }}>
                    ${item.price}
                  </div>
                </div>

                {/* Quantity Controls */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    style={{ background: 'transparent', border: 'none', color: 'var(--text-dim)', cursor: 'pointer' }}
                    title="Remove item"
                  >
                    <Trash2 size={15} />
                  </button>

                  <div style={{ display: 'flex', alignItems: 'center', background: 'var(--bg-dark)', border: '1px solid var(--border-color)', borderRadius: '999px' }}>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      style={{ background: 'transparent', border: 'none', color: 'white', padding: '0.2rem 0.6rem', cursor: 'pointer' }}
                    >
                      -
                    </button>
                    <span style={{ padding: '0 0.3rem', fontSize: '0.85rem', fontWeight: '700' }}>{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      style={{ background: 'transparent', border: 'none', color: 'white', padding: '0.2rem 0.6rem', cursor: 'pointer' }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer & Promo */}
        {cartItems.length > 0 && (
          <div className="cart-footer">
            {/* Promo code form */}
            <form onSubmit={handleApplyPromo} style={{ marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <input
                  type="text"
                  placeholder="Promo Code (e.g. TEA15)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  style={{
                    flexGrow: 1,
                    background: 'var(--bg-dark)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '0.5rem 0.8rem',
                    color: 'white',
                    fontSize: '0.85rem',
                    outline: 'none'
                  }}
                />
                <button type="submit" className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
                  Apply
                </button>
              </div>
              {promoSuccess && <div style={{ fontSize: '0.78rem', color: 'var(--color-emerald)', marginTop: '0.3rem', fontWeight: '600' }}>{promoSuccess}</div>}
              {promoError && <div style={{ fontSize: '0.78rem', color: '#ef4444', marginTop: '0.3rem' }}>{promoError}</div>}
            </form>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            {discountPercent > 0 && (
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: 'var(--color-emerald)', marginBottom: '0.4rem' }}>
                <span>Discount ({discountPercent}%)</span>
                <span>-${discountAmount.toFixed(2)}</span>
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.8rem' }}>
              <span>Shipping</span>
              <span>{remainingForFreeShipping === 0 ? 'FREE' : '$4.99'}</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.3rem', fontWeight: '800', color: 'var(--color-gold)', marginBottom: '1.25rem', paddingTop: '0.6rem', borderTop: '1px dashed var(--border-color)' }}>
              <span>Total</span>
              <span>${(finalTotal + (remainingForFreeShipping === 0 ? 0 : 4.99)).toFixed(2)}</span>
            </div>

            <button
              className="btn-primary"
              onClick={onCheckout}
              style={{ width: '100%', justifyContent: 'center', padding: '0.9rem' }}
            >
              Checkout Securely
              <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    </>
  );
}
