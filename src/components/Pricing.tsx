import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PRICING } from '../data/content';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

function PricingCard({ plan, delay }: { plan: typeof PRICING[0]; delay: number }) {
  const { ref, isVisible } = useIntersectionObserver();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`reveal ${isVisible ? 'active' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transitionDelay: `${delay}ms`,
        background: 'var(--surface)',
        border: '1px solid',
        borderColor: plan.featured
          ? 'var(--primary)'
          : (hovered ? 'var(--border-strong)' : 'var(--border)'),
        borderRadius: 20,
        padding: '2.25rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        transform: hovered ? 'translateY(-4px)' : 'none',
        boxShadow: plan.featured
          ? '0 8px 30px rgba(99, 102, 241, 0.15)'
          : (hovered ? 'var(--shadow-md)' : 'none'),
      }}
    >
      {plan.featured && (
        <div style={{
          position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)',
          padding: '0.25rem 0.85rem', borderRadius: 99,
          background: 'var(--primary)', color: '#fff',
          fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase',
        }}>
          Most Popular
        </div>
      )}

      <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
        {plan.name}
      </div>

      <div style={{ fontSize: '2.75rem', fontWeight: 800, letterSpacing: '-0.04em', color: 'var(--text)', marginBottom: '0.35rem' }}>
        {plan.price}
      </div>

      <p style={{ fontSize: '0.875rem', color: 'var(--muted)', marginBottom: '1.75rem', lineHeight: 1.6 }}>
        {plan.description}
      </p>

      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.25rem', flex: 1 }}>
        {plan.features.map(f => (
          <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.875rem', color: 'var(--text)', fontWeight: 500 }}>
            <span style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.85rem' }}>✓</span>
            {f}
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        style={{
          textAlign: 'center', padding: '0.85rem', borderRadius: 99,
          fontWeight: 600, fontSize: '0.875rem',
          color: plan.featured ? '#fff' : 'var(--text)',
          background: plan.featured ? 'var(--primary)' : 'var(--surface-2)',
          border: plan.featured ? 'none' : '1px solid var(--border)',
          textDecoration: 'none',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={e => {
          if (plan.featured) e.currentTarget.style.background = 'var(--primary-hover)';
          else e.currentTarget.style.borderColor = 'var(--border-strong)';
        }}
        onMouseLeave={e => {
          if (plan.featured) e.currentTarget.style.background = 'var(--primary)';
          else e.currentTarget.style.borderColor = 'var(--border)';
        }}
      >
        {plan.cta} →
      </a>
    </div>
  );
}

export default function Pricing() {
  const { t } = useLanguage();

  return (
    <section id="pricing" style={{ padding: 'clamp(4.5rem, 8vw, 7rem) 0', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto 3.5rem' }}>
          <div className="section-badge">{t('pricing_badge')}</div>
          <h2 className="section-heading" style={{ marginBottom: '0.85rem' }}>
            {t('pricing_title_1')} {t('pricing_title_2')}<br /><span className="gradient-text">{t('pricing_title_3')}</span>
          </h2>
          <p style={{ fontSize: '0.975rem', color: 'var(--muted)', lineHeight: 1.65 }}>
            {t('pricing_desc')}
          </p>
        </div>

        <div className="responsive-3-grid" style={{ alignItems: 'stretch' }}>
          {PRICING.map((p, i) => <PricingCard key={p.id} plan={p} delay={i * 70} />)}
        </div>

        {/* Guarantee Banner */}
        <div className="pricing-guarantee">
          <span>🔒 No-fix, no-fee guarantee</span>
          <span>•</span>
          <span>📋 Free written estimate</span>
          <span>•</span>
          <span>🏆 30-day repair warranty</span>
        </div>

      </div>
    </section>
  );
}
