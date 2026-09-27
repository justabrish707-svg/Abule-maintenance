import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TESTIMONIALS } from '../data/content';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const CATEGORY_MAP: Record<string, { label: string; icon: string }> = {
  all: { label: 'All Reviews', icon: '🌟' },
  data: { label: 'Data Recovery', icon: '💾' },
  hardware: { label: 'Hardware Repair', icon: '🖥️' },
  software: { label: 'Software & OS', icon: '⚙️' },
};

function TestCard({ t, delay }: { t: typeof TESTIMONIALS[0]; delay: number }) {
  const { ref, isVisible } = useIntersectionObserver();
  const [hovered, setHovered] = useState(false);
  const catInfo = CATEGORY_MAP[t.category || 'hardware'] || CATEGORY_MAP.hardware;

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
        padding: '2rem 1.75rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        transform: hovered ? 'translateY(-4px)' : 'none',
        borderColor: hovered ? 'var(--border-strong)' : 'var(--border)',
        boxShadow: hovered ? 'var(--shadow-md)' : 'none',
      }}
    >
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <div style={{ color: '#F59E0B', fontSize: '0.95rem', letterSpacing: 2 }}>★★★★★</div>
          <span style={{
            fontSize: '0.7rem', fontWeight: 600,
            color: 'var(--muted)', background: 'var(--surface-2)', border: '1px solid var(--border)',
            padding: '0.2rem 0.65rem', borderRadius: 99,
          }}>
            {catInfo.icon} {catInfo.label}
          </span>
        </div>

        <p style={{ fontSize: '0.9rem', lineHeight: 1.65, color: 'var(--text)', fontStyle: 'italic', marginBottom: '1.75rem' }}>
          {t.text}
        </p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
        <div style={{
          width: 38, height: 38, borderRadius: '50%',
          background: 'var(--surface-2)', border: '1px solid var(--border)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'var(--text)', fontWeight: 700, fontSize: '0.825rem',
        }}>
          {t.initials}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--text)' }}>{t.name}</div>
          <div style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>{t.role}</div>
        </div>
        <div style={{ fontSize: '0.7rem', fontWeight: 600, color: '#22C55E', background: 'rgba(34,197,94,0.1)', padding: '0.2rem 0.55rem', borderRadius: 99 }}>
          Verified ✓
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<string>('all');

  const filtered = filter === 'all'
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => t.category === filter);

  return (
    <section style={{ padding: '7rem 0', background: 'var(--surface-2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto 2.5rem' }}>
          <div className="section-badge">{t('test_badge')}</div>
          <h2 className="section-heading" style={{ marginBottom: '0.85rem' }}>
            {t('test_title_1')}<br /><span className="gradient-text">{t('test_title_2')}</span>
          </h2>
          <p style={{ fontSize: '0.975rem', color: 'var(--muted)', lineHeight: 1.65 }}>
            {t('test_desc')}
          </p>
        </div>

        {/* Category Pills */}
        <div style={{
          display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.5rem',
          marginBottom: '3rem',
        }}>
          {Object.entries(CATEGORY_MAP).map(([catKey, catObj]) => {
            const isActive = filter === catKey;
            return (
              <button
                key={catKey}
                onClick={() => setFilter(catKey)}
                style={{
                  padding: '0.45rem 1.15rem', borderRadius: 99,
                  fontWeight: 600, fontSize: '0.825rem', border: '1px solid',
                  cursor: 'pointer', transition: 'all 0.2s ease',
                  borderColor: isActive ? 'var(--primary)' : 'var(--border)',
                  background: isActive ? 'var(--primary)' : 'var(--surface)',
                  color: isActive ? '#fff' : 'var(--muted)',
                }}
              >
                <span>{catObj.icon}</span> {catObj.label}
              </button>
            );
          })}
        </div>

        {/* Cards Grid */}
        <div className="responsive-3-grid">
          {filtered.map((t, i) => <TestCard key={t.id} t={t} delay={i * 60} />)}
        </div>

        {/* Rating Summary Bar */}
        <div style={{
          marginTop: '3.5rem', padding: '1.5rem 2rem', borderRadius: 18,
          background: 'var(--surface)', border: '1px solid var(--border)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-around', gap: '1.5rem', flexWrap: 'wrap',
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.03em' }}>4.9 / 5.0</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--muted)', marginTop: 2 }}>Average Customer Rating</div>
          </div>
          <div style={{ width: 1, height: 36, background: 'var(--border)' }} />
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.03em' }}>500+</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--muted)', marginTop: 2 }}>Devices Fixed</div>
          </div>
          <div style={{ width: 1, height: 36, background: 'var(--border)' }} />
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.03em' }}>98%</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--muted)', marginTop: 2 }}>Recommendation Rate</div>
          </div>
        </div>

      </div>
    </section>
  );
}
