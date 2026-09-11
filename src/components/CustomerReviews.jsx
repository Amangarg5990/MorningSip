import React, { useState } from 'react';
import { Star, CheckCircle, ThumbsUp, Plus, X } from 'lucide-react';

const INITIAL_REVIEWS = [
  {
    id: 1,
    name: 'Seraphina Vance',
    role: 'Certified Tea Sommelier',
    rating: 5,
    date: '2 days ago',
    verified: true,
    product: 'Uji Ceremonial Matcha',
    title: 'Unbelievable velvet umami profile!',
    content: 'Having studied tea in Kyoto, I am exceptionally pickly about matcha grade. Morning Sip’s Uji Ceremonial is pure electric emerald, froths effortlessly, and leaves zero bitterness.'
  },
  {
    id: 2,
    name: 'Julian Thorne',
    role: 'Verified Buyer',
    rating: 5,
    date: '1 week ago',
    verified: true,
    product: 'Golden Silk Milk Oolong',
    title: 'Naturally creamy without artificial oils',
    content: 'The natural buttery notes in this high-mountain Taiwan oolong are divine. You can re-steep these leaves up to 5 times and each cup reveals new floral orchid layers.'
  },
  {
    id: 3,
    name: 'Dr. Evelyn Reed',
    role: 'Wellness Enthusiast',
    rating: 5,
    date: '2 weeks ago',
    verified: true,
    product: 'Serenity Chamomile & Lavender',
    title: 'My nightly sanctuary in a mug',
    content: 'The whole Egyptian chamomile flower heads look like little suns in my glass teapot. Perfectly balanced with lavender. Slept better than I have in months.'
  }
];

export default function CustomerReviews() {
  const [reviews, setReviews] = useState(INITIAL_REVIEWS);
  const [showModal, setShowModal] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    product: 'Uji Ceremonial Matcha',
    rating: 5,
    title: '',
    content: ''
  });

  const handleAddReview = (e) => {
    e.preventDefault();
    const created = {
      id: Date.now(),
      name: newReview.name || 'Anonymous Sipper',
      role: 'Verified Buyer',
      rating: Number(newReview.rating),
      date: 'Just now',
      verified: true,
      product: newReview.product,
      title: newReview.title,
      content: newReview.content
    };
    setReviews([created, ...reviews]);
    setShowModal(false);
    setNewReview({ name: '', product: 'Uji Ceremonial Matcha', rating: 5, title: '', content: '' });
  };

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">Real Sipper Testimonials</div>
          <h2 className="section-title">Loved by Tea Connoisseurs Worldwide</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            Join thousands of daily tea lovers who have elevated their morning and evening brewing rituals.
          </p>
        </div>

        {/* Top statistics summary bar */}
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)', padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '3.5rem', fontWeight: '800', color: 'var(--color-gold)', lineHeight: 1 }}>
              4.9
            </div>
            <div>
              <div style={{ display: 'flex', color: '#f59e0b', marginBottom: '0.2rem' }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#f59e0b" />)}
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Based on 1,480+ Verified Reviews</div>
            </div>
          </div>

          <button className="btn-primary" onClick={() => setShowModal(true)}>
            <Plus size={16} /> Write a Review
          </button>
        </div>

        {/* Reviews Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem' }}>
          {reviews.map((rev) => (
            <div key={rev.id} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', padding: '2rem', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', color: '#f59e0b' }}>
                  {[...Array(rev.rating)].map((_, i) => <Star key={i} size={16} fill="#f59e0b" />)}
                </div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>{rev.date}</span>
              </div>

              <h4 style={{ fontSize: '1.15rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                "{rev.title}"
              </h4>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6', flexGrow: 1, marginBottom: '1.5rem' }}>
                {rev.content}
              </p>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '0.9rem', color: 'var(--text-main)' }}>{rev.name}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-emerald)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <CheckCircle size={12} /> {rev.role} • {rev.product}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Write Review Modal */}
        {showModal && (
          <div className="modal-overlay" onClick={() => setShowModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '500px' }}>
              <button className="close-modal-btn" onClick={() => setShowModal(false)}>
                <X size={20} />
              </button>

              <h3 className="font-serif" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
                Write a Tea Review
              </h3>

              <form onSubmit={handleAddReview}>
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    style={{ width: '100%', background: 'var(--bg-dark)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', padding: '0.75rem', color: 'white' }}
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>Tea Purchased</label>
                  <select
                    value={newReview.product}
                    onChange={(e) => setNewReview({ ...newReview, product: e.target.value })}
                    style={{ width: '100%', background: 'var(--bg-dark)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', padding: '0.75rem', color: 'white' }}
                  >
                    <option>Uji Ceremonial Matcha</option>
                    <option>Moonlight Jasmine Pearls</option>
                    <option>Golden Silk Milk Oolong</option>
                    <option>Darjeeling Champagne First Flush</option>
                    <option>Serenity Chamomile & Lavender</option>
                  </select>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>Review Headline</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Best matcha I have tried!"
                    value={newReview.title}
                    onChange={(e) => setNewReview({ ...newReview, title: e.target.value })}
                    style={{ width: '100%', background: 'var(--bg-dark)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', padding: '0.75rem', color: 'white' }}
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>Your Tasting Experience</label>
                  <textarea
                    required
                    rows="4"
                    placeholder="Describe aroma, flavor notes, steep performance..."
                    value={newReview.content}
                    onChange={(e) => setNewReview({ ...newReview, content: e.target.value })}
                    style={{ width: '100%', background: 'var(--bg-dark)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', padding: '0.75rem', color: 'white', resize: 'vertical' }}
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Submit Verified Review
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
