import { useState } from 'react';
import { FAQS } from '../data/content';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="faq" className="py-32" style={{ background: 'var(--surface)' }}>
      <div className="max-w-200 mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4" style={{ background: 'rgba(99,102,241,0.1)', color: 'var(--primary)' }}>
            FAQ
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight" style={{ color: 'var(--text)' }}>
            Common <span className="gradient-text">Questions</span>
          </h2>
        </div>
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`flex flex-col gap-3 reveal ${isVisible ? 'active' : ''}`}
        >
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl border overflow-hidden transition-all duration-300 cursor-pointer"
              style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
            >
              <div className="flex items-center justify-between px-6 py-5">
                <h3 className="text-sm font-semibold" style={{ color: 'var(--text)' }}>{faq.q}</h3>
                <span
                  className="text-lg shrink-0 ml-4 transition-transform duration-300"
                  style={{ color: 'var(--primary)', transform: openIdx === i ? 'rotate(45deg)' : 'none' }}
                >
                  +
                </span>
              </div>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: openIdx === i ? '300px' : '0px' }}
              >
                <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
