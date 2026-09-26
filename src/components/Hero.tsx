import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section style={{ position: 'relative', overflow: 'hidden', paddingTop: '9rem', paddingBottom: '6rem', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>

      {/* Animated mesh blobs */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
        <div className="mesh-blob" style={{ background: 'radial-gradient(circle, #FFE4E6, #FECDD3)', width: 700, height: 700, top: '-25%', left: '-15%' }} />
        <div className="mesh-blob" style={{ background: 'radial-gradient(circle, #DBEAFE, #BFDBFE)', width: 600, height: 600, top: '10%', right: '-10%', animationDelay: '-6s' }} />
        <div className="mesh-blob" style={{ background: 'radial-gradient(circle, #EDE9FE, #DDD6FE)', width: 500, height: 500, bottom: '-10%', left: '15%', animationDelay: '-12s' }} />
        <div className="mesh-blob" style={{ background: 'radial-gradient(circle, #CCFBF1, #99F6E4)', width: 450, height: 450, top: '5%', right: '25%', animationDelay: '-18s' }} />
      </div>

      {/* Subtle grid pattern overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: 'radial-gradient(circle, rgba(99,102,241,0.07) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)',
      }} />

      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 1.5rem', width: '100%', position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        {/* LEFT: Copy */}
        <div style={{ maxWidth: 620 }}>

          {/* Status badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.45rem 1rem', borderRadius: 99,
            background: 'rgba(99,102,241,0.08)',
            border: '1px solid rgba(99,102,241,0.18)',
            backdropFilter: 'blur(12px)',
            fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)',
            letterSpacing: '0.08em', textTransform: 'uppercase',
            marginBottom: '1.75rem',
            animation: 'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
            opacity: 0,
          }}>
            <span style={{
              width: 7, height: 7, borderRadius: '50%', background: '#22C55E',
              animation: 'pulse-dot 2s infinite',
              boxShadow: '0 0 0 0 rgba(34,197,94,0.7)',
            }} />
            {t('hero_badge')}
          </div>

          {/* Headline */}
          <h1 style={{
            fontSize: 'clamp(2.6rem, 4.5vw, 5rem)',
            fontWeight: 900,
            letterSpacing: '-0.055em',
            lineHeight: 1.04,
            marginBottom: '1.5rem',
            animation: 'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s forwards',
            opacity: 0,
            color: 'var(--text)',
          }}>
            {t('hero_title_1')}<br />
            <span className="gradient-text">{t('hero_title_2')}</span>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: '1.05rem',
            lineHeight: 1.75,
            color: 'var(--muted)',
            marginBottom: '2.5rem',
            animation: 'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s forwards',
            opacity: 0,
          }}>
            {t('hero_subtitle')}
          </p>

          {/* CTA Buttons */}
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: '0.875rem',
            animation: 'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s forwards',
            opacity: 0,
          }}>
            <a
              href="#contact"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.9rem 2rem', borderRadius: 99,
                fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none',
                color: '#fff',
                background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
                boxShadow: '0 8px 24px rgba(99,102,241,0.4), 0 2px 8px rgba(99,102,241,0.2)',
                transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 16px 32px rgba(99,102,241,0.5), 0 4px 12px rgba(99,102,241,0.3)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 8px 24px rgba(99,102,241,0.4), 0 2px 8px rgba(99,102,241,0.2)'; }}
            >
              🛠️ {t('hero_cta_book')}
            </a>
            <a
              href="#services"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.9rem 2rem', borderRadius: 99,
                fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none',
                color: 'var(--text)',
                background: 'rgba(255,255,255,0.7)',
                backdropFilter: 'blur(12px)',
                border: '1px solid var(--border)',
                transition: 'all 0.3s ease',
                boxShadow: 'var(--shadow-sm)',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.borderColor = 'rgba(99,102,241,0.3)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
            >
              {t('hero_cta_explore')} →
            </a>
          </div>

          {/* Social Proof */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '1rem',
            marginTop: '2.5rem',
            animation: 'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.4s forwards',
            opacity: 0,
          }}>
            {/* Stacked avatars */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {['#6366F1', '#EC4899', '#14B8A6', '#F59E0B'].map((color, i) => (
                <div key={i} style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: `linear-gradient(135deg, ${color}, ${color}99)`,
                  border: '2.5px solid var(--bg)',
                  marginLeft: i === 0 ? 0 : -10,
                  zIndex: 4 - i, position: 'relative',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.7rem', fontWeight: 700, color: '#fff',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.12)',
                }}>
                  {['HB','DT','YG','AM'][i]}
                </div>
              ))}
            </div>
            <div>
              <div style={{ color: '#F59E0B', letterSpacing: 3, fontSize: '0.9rem' }}>★★★★★</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--muted)', marginTop: 2 }}>
                {t('hero_trusted')}
              </div>
            </div>

            {/* Divider */}
            <div style={{ width: 1, height: 36, background: 'var(--border)', margin: '0 0.25rem' }} />

            {/* Quick stat */}
            <div>
              <div style={{ fontSize: '1.1rem', fontWeight: 900, color: 'var(--text)', letterSpacing: '-0.04em' }}>98%</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{t('hero_success_rate')}</div>
            </div>
          </div>
        </div>

        {/* RIGHT: Hero Graphic — now always visible on desktop */}
        <div style={{
          position: 'relative',
          width: '100%',
          height: 540,
          animation: 'fadeUp 1.2s cubic-bezier(0.16,1,0.3,1) 0.5s forwards, floatHero 7s ease-in-out 1.7s infinite alternate',
          opacity: 0,
        }}>
          {/* Glow behind SVG */}
          <div style={{
            position: 'absolute', top: '30%', left: '20%',
            width: 300, height: 300, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99,102,241,0.22), transparent 70%)',
            filter: 'blur(50px)',
          }} />
          <div style={{
            position: 'absolute', top: '60%', left: '50%',
            width: 200, height: 200, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(236,72,153,0.15), transparent 70%)',
            filter: 'blur(40px)',
          }} />

          <svg viewBox="0 0 520 580" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            {/* Main monitor card */}
            <rect x="60" y="60" width="360" height="260" rx="24" fill="url(#monitorGrad)" fillOpacity="0.12" stroke="url(#strokeGrad)" strokeWidth="1.5" />
            {/* Monitor bezel */}
            <rect x="80" y="80" width="320" height="210" rx="14" fill="#0B0F1E" fillOpacity="0.88" />
            {/* Screen glow */}
            <rect x="88" y="88" width="304" height="194" rx="10" fill="url(#screenGrad)" />

            {/* Toolbar dots */}
            <circle cx="106" cy="105" r="5" fill="#FF5F57" fillOpacity="0.85" />
            <circle cx="120" cy="105" r="5" fill="#FFBD2E" fillOpacity="0.85" />
            <circle cx="134" cy="105" r="5" fill="#28CA41" fillOpacity="0.85" />

            {/* Code lines */}
            {[
              { x: 108, w: 80,  c: '#818CF8', y: 0  },
              { x: 108, w: 140, c: '#A78BFA', y: 17 },
              { x: 108, w: 60,  c: '#F472B6', y: 34 },
              { x: 128, w: 120, c: '#818CF8', y: 51 },
              { x: 128, w: 100, c: '#34D399', y: 68 },
              { x: 128, w: 160, c: '#FCD34D', y: 85 },
              { x: 108, w: 70,  c: '#F472B6', y: 102 },
              { x: 108, w: 140, c: '#818CF8', y: 119 },
              { x: 128, w: 90,  c: '#34D399', y: 136 },
              { x: 108, w: 60,  c: '#A78BFA', y: 153 },
            ].map((l, i) => (
              <rect key={i} x={l.x} y={120 + l.y} width={l.w} height={5} rx="2.5" fill={l.c} fillOpacity="0.8" />
            ))}
            {/* Cursor blink */}
            <rect x="108" y="282" width="2" height="14" rx="1" fill="#818CF8" fillOpacity="0.9">
              <animate attributeName="opacity" values="1;0;1" dur="1.2s" repeatCount="indefinite" />
            </rect>

            {/* Stand */}
            <rect x="220" y="322" width="60" height="50" rx="8" fill="url(#monitorGrad)" fillOpacity="0.25" />
            <rect x="190" y="370" width="120" height="14" rx="7" fill="url(#monitorGrad)" fillOpacity="0.35" />

            {/* Floating chip: CPU */}
            <rect x="18" y="180" width="80" height="50" rx="14" fill="url(#cardGlass)" stroke="url(#strokeGrad)" strokeWidth="1" />
            <text x="58" y="199" textAnchor="middle" fill="#818CF8" fontSize="9" fontWeight="800" letterSpacing="1">CPU</text>
            <text x="58" y="215" textAnchor="middle" fill="#94A3B8" fontSize="8">3.8 GHz</text>
            <text x="58" y="226" textAnchor="middle" fill="#34D399" fontSize="7" fontWeight="600">● ACTIVE</text>

            {/* Floating chip: RAM */}
            <rect x="422" y="130" width="82" height="52" rx="14" fill="url(#cardGlass)" stroke="url(#strokeAccent)" strokeWidth="1" />
            <text x="463" y="150" textAnchor="middle" fill="#F472B6" fontSize="9" fontWeight="800" letterSpacing="1">RAM</text>
            <text x="463" y="165" textAnchor="middle" fill="#94A3B8" fontSize="8">16 GB DDR4</text>
            <text x="463" y="176" textAnchor="middle" fill="#818CF8" fontSize="7">72% used</text>

            {/* Floating chip: SSD */}
            <rect x="422" y="220" width="82" height="52" rx="14" fill="url(#cardGlass)" stroke="url(#strokeTeal)" strokeWidth="1" />
            <text x="463" y="240" textAnchor="middle" fill="#14B8A6" fontSize="9" fontWeight="800" letterSpacing="1">SSD</text>
            <text x="463" y="255" textAnchor="middle" fill="#94A3B8" fontSize="8">512 GB</text>
            <text x="463" y="266" textAnchor="middle" fill="#34D399" fontSize="7">● HEALTHY</text>

            {/* Status card */}
            <rect x="70" y="408" width="340" height="130" rx="22" fill="url(#statusCard)" stroke="url(#strokeGrad)" strokeWidth="1" />
            {/* Status pulse */}
            <circle cx="110" cy="448" r="20" fill="rgba(99,102,241,0.12)" />
            <text x="110" y="455" textAnchor="middle" fontSize="20">🛠️</text>
            <rect x="144" y="434" width="110" height="8" rx="4" fill="#6366F1" fillOpacity="0.75" />
            <rect x="144" y="450" width="170" height="6" rx="3" fill="#94A3B8" fillOpacity="0.5" />
            <rect x="144" y="464" width="90" height="6" rx="3" fill="#22C55E" fillOpacity="0.75" />
            <rect x="144" y="478" width="60" height="5" rx="2.5" fill="#F59E0B" fillOpacity="0.6" />
            {/* Progress bar */}
            <rect x="90" y="505" width="280" height="7" rx="3.5" fill="rgba(99,102,241,0.1)" />
            <rect x="90" y="505" width="210" height="7" rx="3.5" fill="url(#progressGrad)">
              <animate attributeName="width" from="0" to="210" dur="2.2s" fill="freeze" />
            </rect>
            <text x="313" y="513" textAnchor="start" fill="#94A3B8" fontSize="8">75%</text>

            {/* Decorative dots pattern */}
            {[...Array(6)].map((_, row) =>
              [...Array(6)].map((_, col) => (
                <circle
                  key={`${row}-${col}`}
                  cx={16 + col * 16}
                  cy={400 + row * 16}
                  r="1.5"
                  fill="#6366F1"
                  fillOpacity={0.15 + Math.random() * 0.1}
                />
              ))
            )}

            <defs>
              <linearGradient id="monitorGrad" x1="0" y1="0" x2="520" y2="580" gradientUnits="userSpaceOnUse">
                <stop stopColor="#6366F1" />
                <stop offset="0.5" stopColor="#8B5CF6" />
                <stop offset="1" stopColor="#EC4899" />
              </linearGradient>
              <linearGradient id="strokeGrad" x1="0" y1="0" x2="520" y2="580" gradientUnits="userSpaceOnUse">
                <stop stopColor="#6366F1" stopOpacity="0.5" />
                <stop offset="1" stopColor="#EC4899" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="strokeAccent" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#EC4899" stopOpacity="0.5" />
                <stop offset="1" stopColor="#F472B6" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="strokeTeal" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#14B8A6" stopOpacity="0.5" />
                <stop offset="1" stopColor="#0D9488" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="screenGrad" x1="88" y1="88" x2="392" y2="282" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1E293B" />
                <stop offset="1" stopColor="#0F172A" />
              </linearGradient>
              <linearGradient id="progressGrad" x1="0" y1="0" x2="1" y2="0">
                <stop stopColor="#6366F1" />
                <stop offset="1" stopColor="#EC4899" />
              </linearGradient>
              <linearGradient id="statusCard" x1="70" y1="408" x2="410" y2="538" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" stopOpacity="0.97" />
                <stop offset="1" stopColor="#F1F5F9" stopOpacity="0.92" />
              </linearGradient>
              <linearGradient id="cardGlass" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="white" stopOpacity="0.12" />
                <stop offset="1" stopColor="white" stopOpacity="0.04" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 120,
        background: 'linear-gradient(to bottom, transparent, var(--bg))',
        zIndex: 2,
      }} />
    </section>
  );
}
