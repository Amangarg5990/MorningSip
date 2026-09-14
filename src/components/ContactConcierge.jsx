import React, { useState } from 'react';

export default function ContactConcierge({ onToast }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    inquiryType: 'corporate-gifting',
    terroirs: ['Assam', 'Darjeeling'],
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleTerroirToggle = (terroir) => {
    setFormData((prev) => {
      const exists = prev.terroirs.includes(terroir);
      if (exists) {
        return { ...prev, terroirs: prev.terroirs.filter((t) => t !== terroir) };
      } else {
        return { ...prev, terroirs: [...prev.terroirs, terroir] };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onToast) {
        onToast('Estate dispatch received! Our master sommelier will contact you.');
      }
    }, 600);
  };

  return (
    <section className="py-space-xl md:py-28 bg-surface w-full relative" id="contact">
      <div className="max-w-7xl mx-auto px-gutter grid grid-cols-1 lg:grid-cols-12 gap-gutter relative z-10">
        {/* Left Info Box */}
        <div className="lg:col-span-5 flex flex-col gap-space-md">
          <div>
            <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase text-xs">
              Direct Estate Concierge
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary mt-1">
              Inquire for Gifting, Bulk &amp; Tastings
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
              Whether curating bespoke wedding favors, private corporate gifts, or requesting direct garden lot allocations for international hospitality, our master tasters are at your service.
            </p>
          </div>

          <div className="space-y-space-md mt-space-sm">
            <div className="flex items-start gap-space-sm">
              <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-primary shadow-sm shrink-0 border border-outline-variant/30">
                <span className="material-symbols-outlined text-[20px]">location_on</span>
              </div>
              <div>
                <div className="font-title-md text-label-md text-primary font-bold">Tasting Rooms &amp; Estate Offices</div>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  <strong>Assam Estate:</strong> Moran Terroir Lodge, Dibrugarh Road, Assam 786621<br />
                  <strong>Executive Atelier:</strong> Diplomatic Enclave, Chanakyapuri, New Delhi 110021
                </p>
              </div>
            </div>

            <div className="flex items-start gap-space-sm">
              <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-primary shadow-sm shrink-0 border border-outline-variant/30">
                <span className="material-symbols-outlined text-[20px]">phone_in_talk</span>
              </div>
              <div>
                <div className="font-title-md text-label-md text-primary font-bold">Concierge Line</div>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  +91 (0) 373 289 4410 • +91 (0) 11 4982 3000<br />
                  <span className="text-label-sm text-secondary font-semibold">Monday to Saturday, 9:00 AM – 7:00 PM IST</span>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-space-sm">
              <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-primary shadow-sm shrink-0 border border-outline-variant/30">
                <span className="material-symbols-outlined text-[20px]">mark_email_read</span>
              </div>
              <div>
                <div className="font-title-md text-label-md text-primary font-bold">Direct Terroir Inquiries</div>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  concierge@morningsip.com • sommelier@morningsip.com
                </p>
              </div>
            </div>
          </div>

          {/* Terroir Guarantee Seal Card */}
          <div className="bg-primary text-on-primary p-space-md rounded-xl mt-space-sm shadow-md border border-primary-container">
            <div className="flex items-center gap-space-sm">
              <span className="material-symbols-outlined text-secondary-fixed text-[32px]">verified_user</span>
              <div>
                <div className="font-title-md text-label-md text-surface-bright font-bold">
                  The Morning Sip Origin Authenticity Seal
                </div>
                <div className="font-body-sm text-label-sm text-surface-container-highest">
                  Every batch carries the Tea Board of India GI Origin certification stamp.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Contact & Custom Order Form */}
        <div className="lg:col-span-7 bg-surface p-space-lg md:p-space-xl rounded-2xl shadow-xl flex flex-col justify-between border border-outline-variant/30">
          {!isSubmitted ? (
            <form
              className={`space-y-space-md transition-opacity duration-300 ${
                isSubmitting ? 'opacity-50 pointer-events-none' : ''
              }`}
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                <div>
                  <label className="block font-label-md text-label-sm text-primary mb-1 font-semibold" htmlFor="full_name">
                    Your Full Name *
                  </label>
                  <input
                    id="full_name"
                    required
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Lord / Lady / Dr. / Name"
                    className="w-full px-space-md py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md placeholder:text-outline border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-secondary/50"
                  />
                </div>

                <div>
                  <label className="block font-label-md text-label-sm text-primary mb-1 font-semibold" htmlFor="email_address">
                    Direct Email *
                  </label>
                  <input
                    id="email_address"
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="tea.connoisseur@estate.com"
                    className="w-full px-space-md py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md placeholder:text-outline border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-secondary/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                <div>
                  <label className="block font-label-md text-label-sm text-primary mb-1 font-semibold" htmlFor="phone_number">
                    Telephone / WhatsApp
                  </label>
                  <input
                    id="phone_number"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-space-md py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md placeholder:text-outline border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-secondary/50"
                  />
                </div>

                <div>
                  <label className="block font-label-md text-label-sm text-primary mb-1 font-semibold" htmlFor="inquiry_type">
                    Nature of Inquiry *
                  </label>
                  <select
                    id="inquiry_type"
                    required
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-space-md py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-secondary/50"
                  >
                    <option value="corporate-gifting">Bespoke Corporate Tea Gifting</option>
                    <option value="wholesale">Wholesale &amp; Hospitality Distribution</option>
                    <option value="sommelier-consultation">Private Sommelier Tasting Session</option>
                    <option value="harvest-allocation">Direct Garden Lot / First Flush Allocation</option>
                    <option value="general-inquiry">General Connoisseur Inquiries</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-label-md text-label-sm text-primary mb-1 font-semibold">
                  Interested Estate Terroirs
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-label-sm font-label-md">
                  {['Assam', 'Darjeeling', 'Nilgiri', 'Meghalaya'].map((terroir) => {
                    const checked = formData.terroirs.includes(terroir);
                    return (
                      <label
                        key={terroir}
                        className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer transition-colors border ${
                          checked
                            ? 'bg-surface-container border-secondary/40'
                            : 'bg-surface-container-low border-transparent hover:bg-surface-container'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => handleTerroirToggle(terroir)}
                          className="accent-primary"
                        />
                        <span className="text-on-surface text-xs font-semibold">
                          {terroir === 'Assam' ? 'Assam Valley' : terroir === 'Nilgiri' ? 'Nilgiri Blue' : terroir}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block font-label-md text-label-sm text-primary mb-1 font-semibold" htmlFor="notes">
                  Your Requirements or Tasting Notes
                </label>
                <textarea
                  id="notes"
                  rows={4}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Mention volume requirements, preferred delivery dates, custom wooden caddy engraving, or specific tasting preferences..."
                  className="w-full px-space-md py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md placeholder:text-outline border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-secondary/50"
                />
              </div>

              <div className="flex items-center justify-between pt-space-xs flex-wrap gap-2">
                <span className="font-body-sm text-label-sm text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-secondary text-[16px]">lock</span>
                  Strict confidential estate privacy
                </span>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-space-xl py-3 bg-primary text-on-primary hover:bg-primary-container rounded-lg font-title-md text-label-md shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>{isSubmitting ? 'Dispatching...' : 'Send Concierge Dispatch'}</span>
                  <span className="material-symbols-outlined text-[18px]">send</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="mt-space-md p-space-xl bg-tertiary text-on-tertiary rounded-xl text-center animate-fadeIn my-auto">
              <div className="w-16 h-16 rounded-full bg-secondary/20 text-secondary-fixed flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-[36px]">mark_email_read</span>
              </div>
              <div className="font-headline-sm text-headline-sm text-secondary-fixed">
                Dispatch Received by Master Sommelier
              </div>
              <p className="font-body-md text-body-md mt-2 text-surface-bright max-w-md mx-auto leading-relaxed">
                An estate advisor will review your terroir requirements and reply directly within 4 business hours.
              </p>
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    inquiryType: 'corporate-gifting',
                    terroirs: ['Assam', 'Darjeeling'],
                    notes: ''
                  });
                }}
                className="mt-6 px-space-lg py-2 rounded-lg bg-secondary text-on-secondary font-title-md text-sm hover:bg-secondary/90 transition-colors"
              >
                Send Another Inquiry
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
