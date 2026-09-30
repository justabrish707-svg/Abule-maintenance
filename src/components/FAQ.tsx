import { useState } from 'react';
import { FAQS } from '../data/content';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useLanguage } from '../hooks/useLanguage';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>();
  const { t } = useLanguage();

  return (
    <section id="faq" style={{ padding: 'clamp(4.5rem, 8vw, 7rem) 0', background: 'var(--surface-2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 1.5rem' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-badge">{t('faq_badge')}</div>
          <h2 className="section-heading">
            {t('faq_title_1')}{' '}<span className="gradient-text">{t('faq_title_2')}</span>
          </h2>
        </div>

        <div
          ref={ref}
          className={`reveal ${isVisible ? 'active' : ''}`}
          style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}
        >
          {FAQS.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={i}
                style={{
                  borderRadius: 14,
                  border: '1px solid',
                  borderColor: isOpen ? 'var(--primary)' : 'var(--border)',
                  background: 'var(--surface)',
                  overflow: 'hidden',
                  transition: 'border-color 0.2s ease',
                }}
              >
                <button
                  type="button"
                  id={`faq-header-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1.15rem 1.35rem',
                    textAlign: 'left',
                    cursor: 'pointer',
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--text)',
                  }}
                >
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text)' }}>{faq.q}</h3>
                  <span
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      color: isOpen ? 'var(--primary)' : 'var(--muted)',
                      transform: isOpen ? 'rotate(45deg)' : 'none',
                      transition: 'transform 0.25s ease, color 0.25s ease',
                      marginLeft: '1rem',
                      flexShrink: 0,
                    }}
                  >
                    +
                  </span>
                </button>
                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-header-${i}`}
                  style={{
                    maxHeight: isOpen ? '600px' : '0px',
                    overflow: 'hidden',
                    transition: 'max-height 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <p style={{ padding: '0 1.35rem 1.15rem', fontSize: '0.875rem', lineHeight: 1.65, color: 'var(--muted)' }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
