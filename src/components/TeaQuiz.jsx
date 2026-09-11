import React, { useState } from 'react';
import { TEA_QUIZ_QUESTIONS, PRODUCTS } from '../data/products';
import { Sparkles, Sun, Zap, Moon, Flame, ShieldCheck, Leaf, Flower, Heart, Coffee, Feather, ArrowRight, RotateCcw, ShoppingBag } from 'lucide-react';

const ICON_MAP = {
  Sun: <Sun size={24} />,
  Zap: <Zap size={24} />,
  Moon: <Moon size={24} />,
  Flame: <Flame size={24} />,
  Sparkles: <Sparkles size={24} />,
  ShieldCheck: <ShieldCheck size={24} />,
  Leaf: <Leaf size={24} />,
  Flower: <Flower size={24} />,
  Heart: <Heart size={24} />,
  Coffee: <Coffee size={24} />,
  Feather: <Feather size={24} />
};

export default function TeaQuiz({ onAddToCart, onSelectProduct }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [recommendation, setRecommendation] = useState(null);

  const handleSelectOption = (questionId, value) => {
    const updatedAnswers = { ...answers, [questionId]: value };
    setAnswers(updatedAnswers);

    if (currentStep < TEA_QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate best match
      const matched = findBestMatch(updatedAnswers);
      setRecommendation(matched);
    }
  };

  const findBestMatch = (ans) => {
    let topProduct = PRODUCTS[0];
    let maxScore = -1;

    PRODUCTS.forEach((prod) => {
      let score = 0;
      if (ans.caffeinePref && prod.caffeine === ans.caffeinePref) score += 5;
      if (ans.timeOfDay === 'morning' && prod.caffeine === 'High') score += 4;
      if (ans.timeOfDay === 'midday' && prod.caffeine === 'Medium') score += 4;
      if (ans.timeOfDay === 'evening' && prod.caffeine === 'Low') score += 5;
      if (ans.flavorNotes === 'malty' && (prod.category.includes('Assam') || prod.flavorNotes.some(f => f.toLowerCase().includes('malt')))) score += 6;
      if (ans.flavorNotes === 'muscatel' && (prod.category.includes('Darjeeling') || prod.flavorNotes.some(f => f.toLowerCase().includes('muscat')))) score += 6;
      if (ans.flavorNotes === 'floral' && (prod.category.includes('Nilgiri') || prod.flavorNotes.some(f => f.toLowerCase().includes('floral')))) score += 6;
      if (ans.flavorNotes === 'stonefruit' && (prod.category.includes('Meghalaya') || prod.flavorNotes.some(f => f.toLowerCase().includes('apricot') || f.toLowerCase().includes('honey')))) score += 6;
      if (ans.flavorNotes === 'spiced' && (prod.name.includes('Chai') || prod.name.includes('Kahwa') || prod.category.includes('Chai'))) score += 6;

      if (score > maxScore) {
        maxScore = score;
        topProduct = prod;
      }
    });

    return { product: topProduct, matchPercent: 98 };
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setRecommendation(null);
  };

  const currentQ = TEA_QUIZ_QUESTIONS[currentStep];
  const progressPercent = ((currentStep + 1) / TEA_QUIZ_QUESTIONS.length) * 100;

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">AI & Sommelier Powered</div>
          <h2 className="section-title">Find Your Perfect Tea Soulmate</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            Answer 3 quick questions about your mood, rhythm, and taste preferences to unlock your tailored blend.
          </p>
        </div>

        {!recommendation ? (
          <div className="quiz-card">
            {/* Progress bar */}
            <div className="quiz-progress">
              <div className="quiz-progress-bar" style={{ width: `${progressPercent}%` }}></div>
            </div>

            <div style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--color-gold)', fontWeight: '700', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              Step {currentStep + 1} of {TEA_QUIZ_QUESTIONS.length}
            </div>

            <h3 className="quiz-question-title">{currentQ.question}</h3>

            <div className="quiz-options-grid">
              {currentQ.options.map((opt) => {
                const isSelected = answers[currentQ.id] === opt.value;
                return (
                  <div
                    key={opt.value}
                    className={`quiz-option ${isSelected ? 'selected' : ''}`}
                    onClick={() => handleSelectOption(currentQ.id, opt.value)}
                  >
                    <div className="quiz-option-icon">
                      {ICON_MAP[opt.icon] || <Sparkles size={24} />}
                    </div>
                    <div style={{ fontWeight: '600', fontSize: '1rem', color: 'var(--text-main)' }}>
                      {opt.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {currentStep > 0 && (
              <div style={{ textAlign: 'center' }}>
                <button
                  className="btn-secondary"
                  onClick={() => setCurrentStep(currentStep - 1)}
                  style={{ padding: '0.4rem 1.2rem', fontSize: '0.85rem' }}
                >
                  ← Back to Previous Question
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="quiz-card" style={{ textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(16,185,129,0.15)', color: 'var(--color-emerald)', padding: '0.4rem 1.2rem', borderRadius: 'var(--radius-full)', fontWeight: '700', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              <Sparkles size={16} /> {recommendation.matchPercent}% Match Found For You
            </div>

            <h3 className="font-serif" style={{ fontSize: '2.4rem', marginBottom: '1rem' }}>
              Your Sommelier Match: {recommendation.product.name}
            </h3>

            <p style={{ color: 'var(--text-muted)', maxWidth: '580px', margin: '0 auto 2rem', fontSize: '1.05rem' }}>
              Based on your preference for <strong>{answers.timeOfDay}</strong> sipping and <strong>{answers.caffeinePref}</strong> caffeine level, this master harvest is crafted specifically to elevate your ritual.
            </p>

            <div style={{ background: 'var(--bg-dark)', borderRadius: 'var(--radius-md)', padding: '2rem', border: '1px solid var(--border-color)', maxWidth: '500px', margin: '0 auto 2rem', display: 'flex', gap: '1.5rem', alignItems: 'center', textAlign: 'left' }}>
              <img
                src={recommendation.product.image}
                alt={recommendation.product.name}
                style={{ width: '100px', height: '100px', borderRadius: 'var(--radius-sm)', objectFit: 'cover' }}
              />
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-emerald)', fontWeight: '700' }}>
                  {recommendation.product.origin}
                </div>
                <div style={{ fontWeight: '700', fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '0.25rem' }}>
                  {recommendation.product.name}
                </div>
                <div style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--color-gold)' }}>
                  ${recommendation.product.price}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                className="btn-primary"
                onClick={() => onAddToCart(recommendation.product)}
              >
                <ShoppingBag size={18} /> Add Sommelier Match to Cart
              </button>
              <button
                className="btn-secondary"
                onClick={() => onSelectProduct(recommendation.product)}
              >
                View Full Tasting Details
              </button>
              <button
                className="btn-secondary"
                onClick={handleReset}
                title="Retake Quiz"
              >
                <RotateCcw size={16} /> Retake
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
