import { useState } from 'react';
import { FAQS } from '../data/content';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useLanguage } from '../context/LanguageContext';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const { ref, isVisible } = useIntersectionObserver();
  const { t } = useLanguage();

  return (
    <section id="faq" className="py-32" style={{ background: 'var(--surface)' }}>
      <div className="max-w-200 mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4" style={{ background: 'rgba(99,102,241,0.1)', color: 'var(--primary)' }}>
            {t('faq_badge')}
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight" style={{ color: 'var(--text)' }}>
            {t('faq_title_1')}{' '}<span className="gradient-text">{t('faq_title_2')}</span>
          </h2>
        </div>
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`flex flex-col gap-3 reveal ${isVisible ? 'active' : ''}`}
        >
          {FAQS.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={i}
                className="rounded-2xl border overflow-hidden transition-all duration-300"
                style={{ borderColor: isOpen ? 'rgba(99,102,241,0.3)' : 'var(--border)', background: 'var(--bg)' }}
              >
                <button
                  type="button"
                  id={`faq-header-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer transition-colors"
                  style={{ background: 'transparent', border: 'none' }}
                >
                  <h3 className="text-sm font-semibold" style={{ color: 'var(--text)' }}>{faq.q}</h3>
                  <span
                    className="text-lg shrink-0 ml-4 transition-transform duration-300"
                    style={{ color: 'var(--primary)', transform: isOpen ? 'rotate(45deg)' : 'none' }}
                  >
                    +
                  </span>
                </button>
                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-header-${i}`}
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isOpen ? '300px' : '0px' }}
                >
                  <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
