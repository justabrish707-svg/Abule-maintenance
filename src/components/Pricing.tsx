import { PRICING } from '../data/content';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useState } from 'react';

function PricingCard({ plan, delay }: { plan: typeof PRICING[0]; delay: number }) {
  const { ref, isVisible } = useIntersectionObserver();
  const [hovered, setHovered] = useState(false);

  if (plan.featured) {
    return (
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`reveal ${isVisible ? 'active' : ''}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          transitionDelay: `${delay}ms`,
          background: 'linear-gradient(135deg, #6366F1 0%, #7C3AED 50%, #EC4899 100%)',
          borderRadius: 32, padding: '2.5rem',
          display: 'flex', flexDirection: 'column',
          position: 'relative', overflow: 'hidden',
          transform: isVisible ? 'scale(1.05)' : 'scale(0.98)',
          boxShadow: hovered ? '0 30px 60px rgba(99,102,241,0.6)' : '0 20px 50px rgba(99,102,241,0.45)',
          transition: 'transform 0.9s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s',
        }}
      >
        {/* Shimmer overlay */}
        <div style={{
          position: 'absolute', inset: 0, borderRadius: 'inherit',
          background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.08) 50%, transparent 60%)',
          backgroundSize: '200% auto',
          animation: 'shimmer 3s linear infinite',
          pointerEvents: 'none',
        }} />
        <div style={{ position: 'absolute', top: -30, right: -30, width: 120, height: 120, borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
        <div style={{ position: 'absolute', bottom: -20, left: -20, width: 80, height: 80, borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />

        <div style={{ display: 'inline-flex', alignItems: 'center', padding: '0.35rem 0.9rem', borderRadius: 99, background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', fontSize: '0.72rem', fontWeight: 800, color: '#fff', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem', alignSelf: 'flex-start' }}>
          ⭐ Most Popular
        </div>
        <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{plan.name}</div>
        <div style={{ fontSize: '3.2rem', fontWeight: 900, letterSpacing: '-0.06em', color: '#fff', marginBottom: '0.35rem' }}>{plan.price}</div>
        <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)', marginBottom: '2rem' }}>{plan.description}</p>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.875rem', marginBottom: '2rem', flex: 1 }}>
          {plan.features.map(f => (
            <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', color: 'rgba(255,255,255,0.9)' }}>
              <span style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', flexShrink: 0 }}>✓</span>
              {f}
            </li>
          ))}
        </ul>
        <a href="#contact" style={{
          textAlign: 'center', padding: '0.9rem', borderRadius: 99,
          fontWeight: 700, fontSize: '0.9rem', color: '#6366F1',
          background: '#fff', textDecoration: 'none',
          boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.2)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)'; }}
        >{plan.cta} →</a>
      </div>
    );
  }

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`reveal ${isVisible ? 'active' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transitionDelay: `${delay}ms`,
        background: 'var(--surface)', border: '1px solid var(--border)',
        borderRadius: 28, padding: '2.5rem', display: 'flex', flexDirection: 'column',
        transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s, border-color 0.3s',
        transform: hovered ? 'translateY(-6px)' : '',
        boxShadow: hovered ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        borderColor: hovered ? 'rgba(99,102,241,0.2)' : 'var(--border)',
      }}
    >
      <div style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{plan.name}</div>
      <div style={{ fontSize: '2.8rem', fontWeight: 900, letterSpacing: '-0.05em', color: 'var(--text)', marginBottom: '0.35rem' }}>{plan.price}</div>
      <p style={{ fontSize: '0.875rem', color: 'var(--muted)', marginBottom: '2rem' }}>{plan.description}</p>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.875rem', marginBottom: '2rem', flex: 1 }}>
        {plan.features.map(f => (
          <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', color: 'var(--text)' }}>
            <span style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(99,102,241,0.1)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', flexShrink: 0 }}>✓</span>
            {f}
          </li>
        ))}
      </ul>
      <a href="#contact" style={{
        textAlign: 'center', padding: '0.9rem', borderRadius: 99,
        fontWeight: 700, fontSize: '0.9rem', color: '#fff',
        background: 'var(--text)', textDecoration: 'none',
        boxShadow: '0 4px 14px rgba(99,102,241,0.2)',
        transition: 'transform 0.2s, box-shadow 0.2s',
      }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = ''; }}
      >{plan.cta}</a>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" style={{ padding: '8rem 0', background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%,-50%)', width: 800, height: 400, background: 'radial-gradient(ellipse, rgba(99,102,241,0.05), transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 1.5rem', position: 'relative' }}>
        <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto 4rem' }}>
          <div className="section-badge">💰 Pricing</div>
          <h2 className="section-heading" style={{ marginBottom: '1rem' }}>
            Simple,{' '}<span className="gradient-text">Transparent</span>{' '}Pricing
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.75 }}>
            No surprises. No hidden fees. You only pay if we fix it.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem', alignItems: 'center' }}>
          {PRICING.map((p, i) => <PricingCard key={p.id} plan={p} delay={i * 80} />)}
        </div>

        {/* Trust note */}
        <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.85rem', color: 'var(--muted)' }}>
          🔒 No-fix, no-fee guarantee &nbsp;·&nbsp; 📋 Free written estimate &nbsp;·&nbsp; 🏆 30-day warranty on Premium
        </p>
      </div>
    </section>
  );
}
