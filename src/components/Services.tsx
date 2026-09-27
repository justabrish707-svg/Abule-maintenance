import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SERVICES } from '../data/content';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

function ServiceCard({ service, delay, btnText }: { service: typeof SERVICES[0]; delay: number; btnText: string }) {
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
        border: '1px solid var(--border)',
        borderRadius: 18,
        padding: '2.25rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        transform: hovered ? 'translateY(-4px)' : 'none',
        borderColor: hovered ? 'var(--border-strong)' : 'var(--border)',
        boxShadow: hovered ? 'var(--shadow-lg)' : 'none',
      }}
    >
      <div>
        <div style={{
          width: 48, height: 48, borderRadius: 14,
          background: 'var(--surface-2)',
          border: '1px solid var(--border)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.4rem',
          marginBottom: '1.5rem',
        }}>
          {service.icon}
        </div>

        <h3 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '0.75rem', color: 'var(--text)' }}>
          {service.title}
        </h3>
        <p style={{ fontSize: '0.9rem', lineHeight: 1.65, color: 'var(--muted)', fontWeight: 400 }}>
          {service.description}
        </p>
      </div>

      <a
        href="#contact"
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
          marginTop: '1.75rem', fontSize: '0.85rem', fontWeight: 600,
          color: 'var(--primary)', textDecoration: 'none',
          transition: 'gap 0.2s',
        }}
      >
        {btnText} <span style={{ transition: 'transform 0.2s', transform: hovered ? 'translateX(4px)' : '' }}>→</span>
      </a>
    </div>
  );
}

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" style={{ padding: '7rem 0', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto 3.5rem' }}>
          <div className="section-badge">{t('services_badge')}</div>
          <h2 className="section-heading" style={{ marginBottom: '1rem' }}>
            {t('services_title_1')}<br /><span className="gradient-text">{t('services_title_2')}</span>
          </h2>
          <p style={{ fontSize: '0.975rem', lineHeight: 1.7, color: 'var(--muted)' }}>
            {t('services_desc')}
          </p>
        </div>

        <div className="responsive-3-grid">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.id} service={s} delay={i * 60} btnText={t('services_btn')} />
          ))}
        </div>
      </div>
    </section>
  );
}
