import { TESTIMONIALS } from '../data/content';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useState } from 'react';

const AVATAR_COLORS = [
  ['#6366F1', '#8B5CF6'],
  ['#EC4899', '#F472B6'],
  ['#14B8A6', '#0D9488'],
];

function TestCard({ t, idx, delay }: { t: typeof TESTIMONIALS[0]; idx: number; delay: number }) {
  const { ref, isVisible } = useIntersectionObserver();
  const [hovered, setHovered] = useState(false);
  const [c1, c2] = AVATAR_COLORS[idx % 3];

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`reveal ${isVisible ? 'active' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transitionDelay: `${delay}ms`,
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 28,
        padding: '2.25rem',
        position: 'relative',
        overflow: 'hidden',
        transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s, border-color 0.3s',
        transform: hovered ? 'translateY(-8px)' : '',
        boxShadow: hovered ? 'var(--shadow-xl)' : 'var(--shadow-sm)',
        borderColor: hovered ? `${c1}30` : 'var(--border)',
      }}
    >
      {/* Background quote mark */}
      <div style={{
        position: 'absolute', top: -10, right: 20,
        fontSize: '8rem', lineHeight: 1, fontWeight: 900,
        color: c1, opacity: 0.04, userSelect: 'none', fontFamily: 'Georgia, serif',
      }}>"</div>

      {/* Stars */}
      <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1.25rem' }}>
        {Array.from({ length: t.stars }).map((_, i) => (
          <span key={i} style={{ color: '#F59E0B', fontSize: '1rem' }}>★</span>
        ))}
      </div>

      <p style={{ fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--muted)', fontStyle: 'italic', marginBottom: '1.75rem' }}>
        {t.text}
      </p>

      {/* Author */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
        <div style={{
          width: 44, height: 44, borderRadius: '50%',
          background: `linear-gradient(135deg, ${c1}, ${c2})`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontWeight: 800, fontSize: '0.85rem',
          flexShrink: 0,
          boxShadow: `0 4px 12px ${c1}40`,
          transition: 'transform 0.3s',
          transform: hovered ? 'scale(1.1)' : 'scale(1)',
        }}>
          {t.initials}
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text)' }}>{t.name}</div>
          <div style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>{t.role}</div>
        </div>
        {/* Verified badge */}
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.72rem', fontWeight: 600, color: c1, background: `${c1}12`, padding: '0.3rem 0.7rem', borderRadius: 99 }}>
          ✓ Verified
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section style={{ padding: '8rem 0', background: 'var(--surface)', position: 'relative', overflow: 'hidden' }}>
      {/* Background grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(99,102,241,0.04) 1px, transparent 1px)',
        backgroundSize: '36px 36px',
        maskImage: 'radial-gradient(ellipse 100% 100% at 50% 50%, black, transparent)',
      }} />

      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 1.5rem', position: 'relative' }}>
        <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto 4rem' }}>
          <div className="section-badge">💬 Customer Stories</div>
          <h2 className="section-heading" style={{ marginBottom: '1rem' }}>
            Real People.<br /><span className="gradient-text">Real Results.</span>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.75 }}>
            Don't just take our word for it — hear from our customers.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
          {TESTIMONIALS.map((t, i) => <TestCard key={t.id} t={t} idx={i} delay={i * 80} />)}
        </div>

        {/* Bottom aggregate rating */}
        <div style={{ marginTop: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--text)', letterSpacing: '-0.04em' }}>4.9</div>
            <div style={{ color: '#F59E0B', fontSize: '1rem', letterSpacing: 3 }}>★★★★★</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: 4 }}>Average Rating</div>
          </div>
          <div style={{ width: 1, height: 60, background: 'var(--border)' }} />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--text)', letterSpacing: '-0.04em' }}>500+</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: 4 }}>Happy Customers</div>
          </div>
          <div style={{ width: 1, height: 60, background: 'var(--border)' }} />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--text)', letterSpacing: '-0.04em' }}>98%</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: 4 }}>Would Recommend</div>
          </div>
        </div>
      </div>
    </section>
  );
}
