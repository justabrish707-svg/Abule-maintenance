import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const MINI_STATS = [
  { value: '500+', label: 'Devices Fixed', color: '#6366F1', bg: 'rgba(99,102,241,0.1)' },
  { value: '98%', label: 'Success Rate', color: '#22C55E', bg: 'rgba(34,197,94,0.1)' },
  { value: '24h', label: 'Avg Turnaround', color: '#F59E0B', bg: 'rgba(245,158,11,0.1)' },
  { value: '4.9★', label: 'Customer Rating', color: '#EC4899', bg: 'rgba(236,72,153,0.1)' },
];

const TRUST_ITEMS = [
  { icon: '🔍', text: 'Free diagnosis before any work starts' },
  { icon: '📋', text: 'Written estimate — you approve everything' },
  { icon: '✅', text: 'No fix, no fee — guaranteed' },
  { icon: '🏆', text: '30-day warranty on all repairs' },
];

export default function About() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="about" className="py-32" style={{ background: 'var(--surface)', position: 'relative', overflow: 'hidden' }}>
      {/* Background decoration */}
      <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.06), transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-5%', left: '-5%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(236,72,153,0.05), transparent 70%)', filter: 'blur(50px)', pointerEvents: 'none' }} />

      <div className="max-w-300 mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: Premium Visual Panel */}
          <div
            className={`reveal ${isVisible ? 'active' : ''}`}
            style={{ position: 'relative' }}
          >
            {/* Main card */}
            <div style={{
              borderRadius: 32,
              background: 'linear-gradient(135deg, var(--surface-2) 0%, var(--bg) 100%)',
              border: '1px solid var(--border)',
              padding: '2.5rem',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
            }}>
              {/* Conic gradient glow */}
              <div style={{
                position: 'absolute', top: '40%', left: '40%',
                transform: 'translate(-50%,-50%)',
                width: '65%', height: '65%',
                background: 'conic-gradient(from 180deg at 50% 50%, rgba(99,102,241,0.15), rgba(236,72,153,0.1), rgba(139,92,246,0.12), rgba(99,102,241,0.15))',
                filter: 'blur(50px)',
                animation: 'spin 12s linear infinite',
                pointerEvents: 'none',
              }} />

              {/* Centered icon badge */}
              <div style={{ textAlign: 'center', marginBottom: '2rem', position: 'relative' }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  width: 88, height: 88, borderRadius: 28,
                  background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #EC4899 100%)',
                  boxShadow: '0 16px 40px rgba(99,102,241,0.4)',
                  fontSize: '2.5rem',
                  marginBottom: '1rem',
                }}>🔧</div>
                <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--muted)' }}>Trusted Tech Experts</div>
              </div>

              {/* 2x2 Stats grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.875rem', position: 'relative' }}>
                {MINI_STATS.map((s) => (
                  <div key={s.value} style={{
                    padding: '1.25rem',
                    borderRadius: 20,
                    background: s.bg,
                    border: `1px solid ${s.color}22`,
                    textAlign: 'center',
                    transition: 'transform 0.3s ease',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = ''; }}
                  >
                    <div style={{ fontSize: '1.85rem', fontWeight: 900, letterSpacing: '-0.04em', color: s.color, lineHeight: 1 }}>
                      {s.value}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '0.35rem', fontWeight: 500 }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge — top left */}
            <div style={{
              position: 'absolute', top: -18, left: -18,
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 16, padding: '0.7rem 1rem',
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              boxShadow: 'var(--shadow-md)',
              fontSize: '0.8rem', fontWeight: 600, color: 'var(--text)',
              whiteSpace: 'nowrap',
              animation: 'floatHero 5s ease-in-out infinite alternate',
            }}>
              <span style={{ fontSize: '1.1rem' }}>⚡</span> Same-day service available
            </div>

            {/* Floating badge — bottom right */}
            <div style={{
              position: 'absolute', bottom: -18, right: -18,
              background: 'linear-gradient(135deg, #6366F1, #EC4899)',
              borderRadius: 16, padding: '0.7rem 1.1rem',
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              boxShadow: '0 8px 24px rgba(99,102,241,0.35)',
              fontSize: '0.8rem', fontWeight: 700, color: '#fff',
              whiteSpace: 'nowrap',
              animation: 'floatHero 6s ease-in-out 1.5s infinite alternate',
            }}>
              <span>🛡️</span> No-fix, No-fee Guarantee
            </div>
          </div>

          {/* RIGHT: Text */}
          <div
            ref={ref as React.RefObject<HTMLDivElement>}
            className={`reveal ${isVisible ? 'active' : ''}`}
            style={{ transitionDelay: '150ms' }}
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6" style={{ background: 'rgba(99,102,241,0.1)', color: 'var(--primary)' }}>
              Our Promise
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '1.25rem', color: 'var(--text)' }}>
              Built on Trust.<br />
              <span className="gradient-text">Delivered with Precision.</span>
            </h2>
            <p className="text-sm leading-relaxed mb-10" style={{ color: 'var(--muted)', maxWidth: 480, lineHeight: 1.8 }}>
              We believe in total transparency. Every repair starts with a free diagnosis, a clear written estimate, and your full approval — before we touch anything. No hidden fees, ever.
            </p>

            {/* Trust items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {TRUST_ITEMS.map((item, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  padding: '1rem 1.25rem',
                  borderRadius: 16,
                  background: 'var(--bg)',
                  border: '1px solid var(--border)',
                  transition: 'all 0.2s ease',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(99,102,241,0.25)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(99,102,241,0.08)'; e.currentTarget.style.transform = 'translateX(6px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = ''; e.currentTarget.style.transform = ''; }}
                >
                  <div style={{
                    width: 40, height: 40, borderRadius: 12,
                    background: 'rgba(99,102,241,0.08)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.2rem', flexShrink: 0,
                  }}>{item.icon}</div>
                  <span style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text)' }}>{item.text}</span>
                  <div style={{ marginLeft: 'auto', flexShrink: 0, width: 20, height: 20, borderRadius: '50%', background: 'rgba(99,102,241,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', color: 'var(--primary)', fontWeight: 700 }}>✓</div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                marginTop: '2rem',
                padding: '0.85rem 2rem', borderRadius: 99,
                fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none',
                color: '#fff',
                background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
                boxShadow: '0 8px 24px rgba(99,102,241,0.35)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 28px rgba(99,102,241,0.5)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 8px 24px rgba(99,102,241,0.35)'; }}
            >
              🛠️ Book Free Diagnosis →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
