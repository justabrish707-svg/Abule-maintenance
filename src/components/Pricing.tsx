import { useState } from 'react';
import { PRICING } from '../data/content';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

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
          transform: isVisible ? (hovered ? 'translateY(-8px) scale(1.04)' : 'scale(1.02)') : 'scale(0.96)',
          boxShadow: hovered ? '0 32px 64px rgba(99,102,241,0.5)' : '0 20px 50px rgba(99,102,241,0.35)',
          transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s',
          border: '1px solid rgba(255,255,255,0.2)',
        }}
      >
        {/* Shimmer overlay */}
        <div style={{
          position: 'absolute', inset: 0, borderRadius: 'inherit',
          background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.12) 50%, transparent 60%)',
          backgroundSize: '200% auto',
          animation: 'shimmer 3.5s linear infinite',
          pointerEvents: 'none',
        }} />
        <div style={{ position: 'absolute', top: -30, right: -30, width: 140, height: 140, borderRadius: '50%', background: 'rgba(255,255,255,0.08)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -20, left: -20, width: 90, height: 90, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }} />

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.4rem 1rem', borderRadius: 99, background: 'rgba(255,255,255,0.25)', backdropFilter: 'blur(10px)', fontSize: '0.75rem', fontWeight: 800, color: '#fff', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.5rem', alignSelf: 'flex-start', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
          ⭐ Most Popular
        </div>
        <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'rgba(255,255,255,0.75)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{plan.name}</div>
        <div style={{ fontSize: '3.4rem', fontWeight: 900, letterSpacing: '-0.06em', color: '#fff', marginBottom: '0.35rem' }}>{plan.price}</div>
        <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)', marginBottom: '2rem', lineHeight: 1.6 }}>{plan.description}</p>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.875rem', marginBottom: '2.5rem', flex: 1 }}>
          {plan.features.map(f => (
            <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem', color: '#fff', fontWeight: 500 }}>
              <span style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', flexShrink: 0, fontWeight: 800 }}>✓</span>
              {f}
            </li>
          ))}
        </ul>
        <a href="#contact" style={{
          textAlign: 'center', padding: '1rem', borderRadius: 99,
          fontWeight: 800, fontSize: '0.95rem', color: '#6366F1',
          background: '#fff', textDecoration: 'none',
          boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 14px 30px rgba(0,0,0,0.25)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.2)'; }}
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
        transform: hovered ? 'translateY(-8px)' : '',
        boxShadow: hovered ? 'var(--shadow-xl)' : 'var(--shadow-sm)',
        borderColor: hovered ? 'rgba(99,102,241,0.35)' : 'var(--border)',
      }}
    >
      <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{plan.name}</div>
      <div style={{ fontSize: '3rem', fontWeight: 900, letterSpacing: '-0.05em', color: 'var(--text)', marginBottom: '0.35rem' }}>{plan.price}</div>
      <p style={{ fontSize: '0.9rem', color: 'var(--muted)', marginBottom: '2rem', lineHeight: 1.6 }}>{plan.description}</p>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.875rem', marginBottom: '2.5rem', flex: 1 }}>
        {plan.features.map(f => (
          <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text)' }}>
            <span style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(99,102,241,0.12)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', flexShrink: 0, fontWeight: 700 }}>✓</span>
            {f}
          </li>
        ))}
      </ul>
      <a href="#contact" style={{
        textAlign: 'center', padding: '1rem', borderRadius: 99,
        fontWeight: 700, fontSize: '0.9rem', color: '#fff',
        background: 'var(--text)', textDecoration: 'none',
        boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
        transition: 'transform 0.2s, box-shadow 0.2s',
      }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.18)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.12)'; }}
      >{plan.cta}</a>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" style={{ padding: '8rem 0', background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%,-50%)', width: 800, height: 400, background: 'radial-gradient(ellipse, rgba(99,102,241,0.06), transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 1.5rem', position: 'relative' }}>
        <div style={{ textAlign: 'center', maxWidth: 580, margin: '0 auto 4rem' }}>
          <div className="section-badge">💰 Pricing</div>
          <h2 className="section-heading" style={{ marginBottom: '1rem' }}>
            Simple,{' '}<span className="gradient-text">Transparent</span>{' '}Pricing
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.75 }}>
            No surprises. No hidden fees. You only pay if we fix your device.
          </p>
        </div>

        <div className="responsive-3-grid" style={{ alignItems: 'center' }}>
          {PRICING.map((p, i) => <PricingCard key={p.id} plan={p} delay={i * 80} />)}
        </div>

        {/* Trust note */}
        <div style={{
          marginTop: '3.5rem', padding: '1rem 1.5rem', borderRadius: 99,
          background: 'var(--surface)', border: '1px solid var(--border)',
          maxWidth: 680, margin: '3.5rem auto 0', textAlign: 'center',
          fontSize: '0.875rem', fontWeight: 600, color: 'var(--muted)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap',
          boxShadow: 'var(--shadow-sm)',
        }}>
          <span>🔒 No-fix, no-fee guarantee</span>
          <span style={{ opacity: 0.4 }}>•</span>
          <span>📋 Free written estimate</span>
          <span style={{ opacity: 0.4 }}>•</span>
          <span>🏆 30-day repair warranty</span>
        </div>
      </div>
    </section>
  );
}
