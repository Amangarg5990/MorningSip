import React, { useState } from 'react';

export default function CheckoutModal({ isOpen, onClose, cartItems = [], onClearCart }) {
  const [step, setStep] = useState('shipping'); // 'shipping' | 'success'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    deliveryNotes: ''
  });

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shippingCost = subtotal >= 2000 ? 0 : 150;
  const total = subtotal + shippingCost;

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    setStep('success');
    if (onClearCart) onClearCart();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-primary/50 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-surface rounded-2xl max-w-xl w-full p-6 md:p-8 shadow-2xl border border-outline-variant/30 z-10 animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {step === 'shipping' ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-secondary text-base">✦</span>
              <span className="font-label-caps text-secondary text-xs uppercase tracking-widest">
                Artisanal Delivery
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-1">
              Estate Dispatch Checkout
            </h3>
            <p className="font-body-sm text-xs text-on-surface-variant mb-6">
              Order value: <strong className="text-primary font-bold">₹{total.toLocaleString()}</strong> ({cartItems.length} unique harvests)
            </p>

            <form onSubmit={handleSubmitOrder} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-primary mb-1">Recipient Name *</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Vikramaditya Sen"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-surface-container-low border border-outline-variant/30 focus:ring-1 focus:ring-secondary/50 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-primary mb-1">Email Address *</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="connoisseur@tea.com"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-surface-container-low border border-outline-variant/30 focus:ring-1 focus:ring-secondary/50 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-primary mb-1">Phone Number *</label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-surface-container-low border border-outline-variant/30 focus:ring-1 focus:ring-secondary/50 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-primary mb-1">PIN Code *</label>
                  <input
                    required
                    type="text"
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    placeholder="110021"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-surface-container-low border border-outline-variant/30 focus:ring-1 focus:ring-secondary/50 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-primary mb-1">Shipping Address *</label>
                <textarea
                  required
                  rows={2}
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="Residence / Estate Address, Landmark..."
                  className="w-full px-3 py-2 text-xs rounded-lg bg-surface-container-low border border-outline-variant/30 focus:ring-1 focus:ring-secondary/50 outline-none"
                />
              </div>

              <div className="p-3 bg-surface-container rounded-xl text-xs space-y-1">
                <div className="flex justify-between text-on-surface-variant">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-on-surface-variant">
                  <span>Express Nitrogen Packaging & Delivery</span>
                  <span>{shippingCost === 0 ? 'COMPLIMENTARY' : `₹${shippingCost}`}</span>
                </div>
                <div className="flex justify-between text-primary font-bold pt-1 border-t border-outline-variant/20">
                  <span>Total Payable</span>
                  <span className="text-secondary font-bold text-sm">₹{total.toLocaleString()}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-primary hover:bg-primary-container text-on-primary rounded-lg font-title-md text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <span>Confirm Harvest Dispatch</span>
                <span className="material-symbols-outlined text-[18px]">verified</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-secondary/20 text-secondary-fixed flex items-center justify-center mx-auto mb-4">
              <span className="material-symbols-outlined text-[36px]">verified</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
              Estate Dispatch Reserved!
            </h3>
            <p className="font-body-sm text-sm text-on-surface-variant max-w-sm mx-auto leading-relaxed mb-6">
              Thank you, {formData.name || 'Connoisseur'}. Your order of single-origin Indian whole leaf teas is being sealed in our climate-controlled nitrogen caddies.
            </p>
            <button
              onClick={() => {
                setStep('shipping');
                onClose();
              }}
              className="px-6 py-2.5 bg-primary text-on-primary rounded-lg font-title-md text-xs hover:bg-primary-container transition-colors"
            >
              Return to Terroir Collection
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
