import { useLanguage } from '../context/LanguageContext';

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section style={{ padding: 'clamp(3.5rem, 8vw, 6rem) 1.5rem', position: 'relative', overflow: 'hidden' }}>
      {/* Subtle ambient glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: 700, height: 350,
        background: 'radial-gradient(ellipse, rgba(99,102,241,0.08), transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{
          borderRadius: 24,
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          padding: 'clamp(2.5rem, 5vw, 4.5rem) clamp(1.5rem, 4vw, 3.5rem)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-lg)',
        }}>
          {/* Subtle top border highlight */}
          <div style={{
            position: 'absolute', top: 0, left: '15%', right: '15%', height: 1,
            background: 'linear-gradient(90deg, transparent, var(--primary), transparent)',
          }} />

          {/* Section Badge */}
          <div className="section-badge" style={{ marginBottom: '1.25rem' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22C55E' }} />
            {t('cta_badge')}
          </div>

          {/* Headline */}
          <h2 style={{
            fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
            fontWeight: 800,
            letterSpacing: '-0.035em',
            lineHeight: 1.1,
            marginBottom: '1rem',
            color: 'var(--text)',
          }}>
            {t('cta_title_1')}<br />
            <span className="gradient-text">{t('cta_title_2')}</span>
          </h2>

          {/* Description */}
          <p style={{
            fontSize: 'clamp(0.95rem, 1.25vw, 1.1rem)',
            color: 'var(--muted)',
            maxWidth: 540,
            margin: '0 auto 2.5rem',
            lineHeight: 1.65,
          }}>
            {t('cta_desc')}
          </p>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="#contact"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.85rem 2rem', borderRadius: 99,
                fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none',
                color: '#fff',
                background: 'var(--primary)',
                boxShadow: '0 4px 20px rgba(99, 102, 241, 0.3)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--primary-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.transform = 'none'; }}
            >
              🛠️ {t('cta_btn_book')}
            </a>
            <a
              href="https://wa.me/251954897133"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.85rem 2rem', borderRadius: 99,
                fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none',
                color: 'var(--text)',
                background: 'var(--surface-2)',
                border: '1px solid var(--border)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-strong)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none'; }}
            >
              💬 {t('cta_btn_wa')}
            </a>
          </div>

          {/* Trust signals */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1.75rem',
            marginTop: '2.5rem',
            paddingTop: '2rem',
            borderTop: '1px solid var(--border)',
            flexWrap: 'wrap',
          }}>
            {['✅ No-fix, no-fee', '⚡ 24h turnaround', '🔒 Free diagnosis', '⭐ 4.9/5 rating'].map(t => (
              <span key={t} style={{ fontSize: '0.82rem', color: 'var(--muted)', fontWeight: 500 }}>
                {t}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

