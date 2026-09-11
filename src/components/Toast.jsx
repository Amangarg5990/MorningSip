import React from 'react';
import { CheckCircle, Info } from 'lucide-react';

export default function Toast({ toasts }) {
  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="toast-container">
      {toasts.map((t) => (
        <div key={t.id} className="toast">
          <CheckCircle size={18} color="var(--color-emerald)" />
          <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>{t.message}</span>
        </div>
      ))}
    </div>
  );
}
