import React from 'react';

export default function Toast({ toasts = [] }) {
  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
      {toasts.map((t) => (
        <div
          key={t.id}
          className="bg-primary text-on-primary px-4 py-3 rounded-xl shadow-xl border border-secondary/30 flex items-center gap-3 animate-fadeIn pointer-events-auto"
        >
          <span className="material-symbols-outlined text-secondary-fixed text-[20px] shrink-0">
            verified
          </span>
          <span className="font-body-sm text-xs text-surface-bright font-medium">
            {t.message}
          </span>
        </div>
      ))}
    </div>
  );
}
