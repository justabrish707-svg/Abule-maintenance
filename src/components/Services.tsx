import { SERVICES } from '../data/content';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const GRADIENTS = [
  ['#EEF2FF', '#6366F1', 'rgba(99,102,241,0.08)'],
  ['#FDF2F8', '#EC4899', 'rgba(236,72,153,0.08)'],
  ['#FFFBEB', '#F59E0B', 'rgba(245,158,11,0.08)'],
  ['#F0FDFA', '#14B8A6', 'rgba(20,184,166,0.08)'],
  ['#F5F3FF', '#8B5CF6', 'rgba(139,92,246,0.08)'],
];

function ServiceCard({ service, idx, delay }: { service: typeof SERVICES[0]; idx: number; delay: number }) {
  const { ref, isVisible } = useIntersectionObserver();
  const [bg, accent, glow] = GRADIENTS[idx % GRADIENTS.length];
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`reveal ${isVisible ? 'active' : ''} ${service.wide ? 'md:col-span-2' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transitionDelay: `${delay}ms`,
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 28,
        padding: '2.5rem',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
        transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s, border-color 0.3s',
        transform: hovered ? 'translateY(-10px)' : '',
        boxShadow: hovered ? 'var(--shadow-xl)' : 'var(--shadow-sm)',
        borderColor: hovered ? `${accent}40` : 'var(--border)',
      }}
    >
      {/* Corner glow on hover */}
      <div style={{
        position: 'absolute', top: -60, right: -60,
        width: 160, height: 160, borderRadius: '50%',
        background: `radial-gradient(circle, ${glow}, transparent 70%)`,
        transition: 'opacity 0.4s',
        opacity: hovered ? 1 : 0,
        pointerEvents: 'none',
      }} />

      {/* Top accent line */}
      <div style={{
        position: 'absolute', top: 0, left: '10%', right: '10%', height: 2,
        background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
        transition: 'opacity 0.4s',
        opacity: hovered ? 0.8 : 0,
      }} />

      {/* Icon */}
      <div style={{
        width: 56, height: 56, borderRadius: 16,
        background: bg,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1.6rem', marginBottom: '1.5rem',
        transition: 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1)',
        transform: hovered ? 'scale(1.12) rotate(-6deg)' : 'scale(1)',
        border: `1px solid ${accent}20`,
      }}>
        {service.icon}
      </div>

      <h3 style={{ fontSize: '1.2rem', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '0.6rem', color: 'var(--text)' }}>
        {service.title}
      </h3>
      <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--muted)' }}>
        {service.description}
      </p>

      {/* Bottom link */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '0.4rem',
        marginTop: '1.5rem', fontSize: '0.85rem', fontWeight: 600,
        color: accent, transition: 'gap 0.2s',
        gap: hovered ? '0.6rem' : '0.4rem',
      } as React.CSSProperties}>
        Learn more <span>→</span>
      </div>
    </div>
  );
}

import { useState } from 'react';

export default function Services() {
  return (
    <section id="services" style={{ padding: '8rem 0', background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
      {/* Background decoration */}
      <div style={{ position: 'absolute', top: '20%', left: '-5%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.04), transparent 70%)', filter: 'blur(40px)' }} />
      <div style={{ position: 'absolute', bottom: '10%', right: '-5%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(236,72,153,0.04), transparent 70%)', filter: 'blur(40px)' }} />

      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 1.5rem', position: 'relative' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: 580, margin: '0 auto 4rem' }}>
          <div className="section-badge">⚡ What We Do</div>
          <h2 className="section-heading" style={{ marginBottom: '1rem' }}>
            Expert Repairs,<br /><span className="gradient-text">Every Single Time</span>
          </h2>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.75, color: 'var(--muted)' }}>
            From dead hardware to corrupted data — we bring precision and transparency to every job.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.id} service={s} idx={i} delay={i * 70} />
          ))}
        </div>
      </div>
    </section>
  );
}
