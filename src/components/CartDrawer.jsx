import React from 'react';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems = [],
  onUpdateQuantity,
  onRemoveItem,
  onCheckout
}) {
  if (!isOpen) return null;

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const freeShippingThreshold = 2000;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-primary/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-surface border-l border-outline-variant/30 shadow-2xl flex flex-col justify-between animate-fadeIn">
          {/* Header */}
          <div className="p-space-lg bg-surface-container-low border-b border-outline-variant/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-secondary text-lg">✦</span>
              <h3 className="font-headline-sm text-headline-sm text-primary">Your Tasting Bag</h3>
              <span className="font-label-caps text-secondary font-bold text-xs">
                ({totalItems} items)
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors"
              title="Close"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>

          {/* Free Shipping Progress */}
          <div className="px-space-lg py-3 bg-surface-container text-xs text-on-surface-variant border-b border-outline-variant/20">
            <div className="flex justify-between font-semibold mb-1">
              <span>
                {remainingForFreeShipping === 0
                  ? '🎉 Complimentary Estate Shipping unlocked!'
                  : `Add ₹${remainingForFreeShipping.toLocaleString()} more for free shipping`}
              </span>
              <span>{Math.round(progressPercent)}%</span>
            </div>
            <div className="w-full bg-surface-dim h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-secondary h-full rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Item List */}
          <div className="flex-1 overflow-y-auto p-space-lg space-y-space-md">
            {cartItems.length === 0 ? (
              <div className="text-center py-16">
                <span className="material-symbols-outlined text-[48px] text-on-surface-variant/40 mb-3">
                  local_cafe
                </span>
                <p className="font-title-md text-primary">Your bag is empty</p>
                <p className="font-body-sm text-on-surface-variant text-xs mt-1">
                  Explore our single-estate harvests from Assam, Darjeeling, Nilgiri, and Meghalaya.
                </p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 bg-surface-container-low p-3 rounded-xl border border-outline-variant/20"
                >
                  <img
                    src={item.image}
                    alt={item.title || item.name}
                    className="w-20 h-20 rounded-lg object-cover bg-primary-container shrink-0"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-title-md text-sm text-primary font-bold line-clamp-1">
                          {item.title || item.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem && onRemoveItem(item.id)}
                          className="text-on-surface-variant/60 hover:text-error transition-colors"
                          title="Remove item"
                        >
                          <span className="material-symbols-outlined text-[18px]">delete</span>
                        </button>
                      </div>
                      <span className="text-[11px] text-secondary font-medium block">
                        {item.caddySize || item.regionLabel || 'Estate Caddy'}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2 bg-surface rounded-lg px-2 py-0.5 border border-outline-variant/30">
                        <button
                          onClick={() => onUpdateQuantity && onUpdateQuantity(item.id, item.quantity - 1)}
                          className="text-primary hover:text-secondary font-bold text-xs"
                        >
                          -
                        </button>
                        <span className="text-xs font-semibold px-1">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity && onUpdateQuantity(item.id, item.quantity + 1)}
                          className="text-primary hover:text-secondary font-bold text-xs"
                        >
                          +
                        </button>
                      </div>
                      <span className="font-title-md text-primary font-bold text-sm">
                        ₹{(item.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout */}
          {cartItems.length > 0 && (
            <div className="p-space-lg bg-surface-container-low border-t border-outline-variant/30 space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-on-surface-variant">Subtotal</span>
                <span className="font-headline-sm text-headline-sm text-primary font-bold">
                  ₹{subtotal.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center text-xs text-on-surface-variant">
                <span>Shipping</span>
                <span>{subtotal >= freeShippingThreshold ? 'FREE' : '₹150'}</span>
              </div>

              <button
                onClick={onCheckout}
                className="w-full py-3 bg-primary hover:bg-primary-container text-on-primary rounded-lg font-title-md text-label-md transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <span>Proceed to Estate Checkout</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>

              <p className="text-[11px] text-center text-on-surface-variant flex items-center justify-center gap-1">
                <span className="material-symbols-outlined text-[14px] text-secondary">verified_user</span>
                Nitrogen-purged fresh sealed &amp; direct estate delivery
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
