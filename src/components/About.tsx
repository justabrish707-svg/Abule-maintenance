import { useLanguage } from '../context/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function About() {
  const { t } = useLanguage();
  const { ref, isVisible } = useIntersectionObserver();

  const miniStats = [
    { value: '500+', label: t('stat_devices') },
    { value: '98%', label: t('stat_success') },
    { value: '24h', label: t('stat_turnaround') },
    { value: '4.9★', label: t('stat_rating') },
  ];

  const trustItems = [
    { icon: '🔍', text: t('about_item_1') },
    { icon: '📋', text: t('about_item_2') },
    { icon: '✅', text: t('about_item_3') },
    { icon: '🏆', text: t('about_item_4') },
  ];

  return (
    <section id="about" style={{ padding: 'clamp(4.5rem, 8vw, 7rem) 0', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
        <div className="grid-2-col">

          {/* LEFT: Minimal Visual Card Panel */}
          <div
            className={`reveal ${isVisible ? 'active' : ''}`}
            style={{ position: 'relative' }}
          >
            <div style={{
              borderRadius: 24,
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              padding: '2.25rem',
              boxShadow: 'var(--shadow-md)',
            }}>
              <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  width: 64, height: 64, borderRadius: 20,
                  background: 'var(--primary-light)',
                  color: 'var(--primary)',
                  fontSize: '2rem',
                  marginBottom: '0.85rem',
                }}>🔧</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)' }}>Abule Tech Standard</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>Precision Repairs & Diagnostics</div>
              </div>

              {/* 2x2 Stats Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                {miniStats.map((s) => (
                  <div key={s.value} style={{
                    padding: '1rem',
                    borderRadius: 14,
                    background: 'var(--surface-2)',
                    border: '1px solid var(--border)',
                    textAlign: 'center',
                  }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)', lineHeight: 1 }}>
                      {s.value}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '0.25rem', fontWeight: 500 }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Text Content */}
          <div
            ref={ref as React.RefObject<HTMLDivElement>}
            className={`reveal ${isVisible ? 'active' : ''}`}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="section-badge">{t('about_badge')}</div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1rem', color: 'var(--text)' }}>
              {t('about_title_1')}<br />
              <span className="gradient-text">{t('about_title_2')}</span>
            </h2>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--muted)', marginBottom: '2rem', fontWeight: 400 }}>
              {t('about_desc')}
            </p>

            {/* Trust Points */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
              {trustItems.map((item, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: '0.85rem',
                  padding: '0.85rem 1rem',
                  borderRadius: 12,
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                }}>
                  <span style={{ fontSize: '1.1rem' }}>{item.icon}</span>
                  <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text)' }}>{item.text}</span>
                  <span style={{ marginLeft: 'auto', color: 'var(--primary)', fontWeight: 700, fontSize: '0.85rem' }}>✓</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.85rem 1.85rem', borderRadius: 99,
                fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none',
                color: '#fff',
                background: 'var(--primary)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--primary-hover)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--primary)'; }}
            >
              🛠️ {t('hero_cta_book')} →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
