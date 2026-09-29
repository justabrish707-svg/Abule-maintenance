import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section style={{
      position: 'relative',
      paddingTop: 'clamp(6.5rem, 12vw, 8.5rem)',
      paddingBottom: 'clamp(3.5rem, 8vw, 5.5rem)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      background: 'var(--bg)',
      overflow: 'hidden',
    }}>
      {/* Subtle radial ambient glow */}
      <div style={{
        position: 'absolute', top: '15%', left: '50%', transform: 'translateX(-50%)',
        width: 800, height: 400,
        background: 'radial-gradient(ellipse, rgba(99,102,241,0.08), transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem', width: '100%', position: 'relative', zIndex: 2 }}>
        <div className="grid-2-col">
          
          {/* LEFT: Headline & Actions */}
          <div>
            {/* Minimal Badge */}
            <div className="section-badge">
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22C55E' }} />
              {t('hero_badge')}
            </div>

            {/* Title */}
            <h1 style={{
              fontSize: 'clamp(2.25rem, 5.5vw, 4.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.035em',
              lineHeight: 1.05,
              marginBottom: '1.25rem',
              color: 'var(--text)',
            }}>
              {t('hero_title_1')}<br />
              <span className="gradient-text">{t('hero_title_2')}</span>
            </h1>

            {/* Subtitle */}
            <p style={{
              fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)',
              lineHeight: 1.7,
              color: 'var(--muted)',
              marginBottom: '2.25rem',
              fontWeight: 400,
            }}>
              {t('hero_subtitle')}
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', marginBottom: '2.5rem' }}>
              <a
                href="#contact"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.85rem 1.85rem', borderRadius: 99,
                  fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none',
                  color: '#fff',
                  background: 'var(--primary)',
                  boxShadow: '0 4px 20px rgba(99, 102, 241, 0.3)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--primary-hover)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--primary)'; }}
              >
                🛠️ {t('hero_cta_book')}
              </a>
              <a
                href="#services"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.85rem 1.85rem', borderRadius: 99,
                  fontWeight: 500, fontSize: '0.9rem', textDecoration: 'none',
                  color: 'var(--text)',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-strong)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; }}
              >
                {t('hero_cta_explore')} →
              </a>
            </div>

            {/* Social Trust Metrics */}
            <div className="hero-trust-bar">
              <div>
                <div style={{ color: '#F59E0B', letterSpacing: 2, fontSize: '0.85rem' }}>★★★★★</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: 2, fontWeight: 500 }}>
                  {t('hero_trusted')}
                </div>
              </div>
              <div style={{ width: 1, height: 32, background: 'var(--border)', flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.02em' }}>98%</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{t('hero_success_rate')}</div>
              </div>
            </div>
          </div>

          {/* RIGHT: Minimalist Diagnostic Card */}
          <div style={{ position: 'relative', width: '100%' }}>
            <div style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 24,
              padding: 'clamp(1.25rem, 3vw, 2rem)',
              boxShadow: 'var(--shadow-lg)',
            }}>
              {/* Terminal Header Bar */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5F57' }} />
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FFBD2E' }} />
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28CA41' }} />
                </div>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--muted)', fontFamily: 'monospace' }}>
                  abule-diagnostics.v2.4
                </div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#22C55E', background: 'rgba(34,197,94,0.1)', padding: '0.2rem 0.6rem', borderRadius: 99 }}>
                  LIVE MONITOR
                </div>
              </div>

              {/* Status Modules */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                
                {/* Module 1: Motherboard & CPU */}
                <div style={{ padding: '1rem 1.15rem', borderRadius: 14, background: 'var(--surface-2)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ fontSize: '1.2rem' }}>💻</span>
                    <div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text)' }}>Motherboard & Power Rail</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>Micro-soldering & voltage diagnostic</div>
                    </div>
                  </div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#22C55E', flexShrink: 0, marginLeft: '0.5rem' }}>PASS ✓</span>
                </div>

                {/* Module 2: Data Recovery */}
                <div style={{ padding: '1rem 1.15rem', borderRadius: 14, background: 'var(--surface-2)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ fontSize: '1.2rem' }}>💾</span>
                    <div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text)' }}>NVMe / SSD Data Recovery</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>Deep sector scanning & extraction</div>
                    </div>
                  </div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)', flexShrink: 0, marginLeft: '0.5rem' }}>99.2% RESTORED</span>
                </div>

                {/* Module 3: OS & System Performance */}
                <div style={{ padding: '1rem 1.15rem', borderRadius: 14, background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text)' }}>OS Optimization Progress</div>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--muted)' }}>85%</div>
                  </div>
                  <div style={{ width: '100%', height: 6, borderRadius: 99, background: 'var(--border)', overflow: 'hidden' }}>
                    <div style={{ width: '85%', height: '100%', borderRadius: 99, background: 'var(--primary)' }} />
                  </div>
                </div>

              </div>

              {/* Bottom Guarantee Banner */}
              <div className="hero-guarantee-banner" style={{
                marginTop: '1.25rem', padding: '0.75rem 1rem', borderRadius: 12,
                background: 'rgba(99,102,241,0.06)', border: '1px solid rgba(99,102,241,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                fontSize: '0.78rem', fontWeight: 600, color: 'var(--primary)',
              }}>
                <span>🛡️ Free Written Estimate Before Work Starts</span>
                <span style={{ fontWeight: 800, flexShrink: 0, marginLeft: '0.5rem' }}>0 ETB Risk</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#services"
        className="scroll-indicator"
        aria-label="Scroll to services"
        style={{
          position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)',
          width: 36, height: 36, borderRadius: '50%',
          background: 'var(--surface)', border: '1px solid var(--border)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'var(--muted)', fontSize: '0.9rem', textDecoration: 'none',
        }}
      >
        ↓
      </a>
    </section>
  );
}
