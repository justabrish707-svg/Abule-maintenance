export default function CTA() {
  return (
    <section style={{ padding: '6rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
      {/* Outer glow */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 800, height: 400, background: 'radial-gradient(ellipse, rgba(99,102,241,0.08), transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
        <div style={{
          borderRadius: 36,
          background: 'linear-gradient(135deg, #4F46E5 0%, #6D28D9 40%, #BE185D 100%)',
          padding: 'clamp(3rem, 6vw, 6rem) 2rem',
          textAlign: 'center',
          color: '#fff',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 30px 80px rgba(99,102,241,0.4), 0 10px 30px rgba(0,0,0,0.15)',
        }}>
          {/* Decorative orbs */}
          <div style={{ position: 'absolute', top: -60, left: -60, width: 200, height: 200, borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
          <div style={{ position: 'absolute', bottom: -80, right: -40, width: 280, height: 280, borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
          <div style={{ position: 'absolute', top: '30%', right: '15%', width: 60, height: 60, borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }} />

          {/* Shimmer */}
          <div style={{
            position: 'absolute', inset: 0, borderRadius: 'inherit',
            background: 'linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.06) 50%, transparent 65%)',
            backgroundSize: '200% auto', animation: 'shimmer 4s linear infinite', pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1rem', borderRadius: 99, background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(12px)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              🛠️ Free Diagnosis Available Now
            </div>

            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)', fontWeight: 900, letterSpacing: '-0.05em', lineHeight: 1.05, marginBottom: '1.25rem', color: '#fff' }}>
              Is Your PC<br />Letting You Down?
            </h2>
            <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', color: 'rgba(255,255,255,0.8)', maxWidth: 560, margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
              Get a free diagnosis today. No commitment, no surprises — just real answers and fast solutions.
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.95rem 2.25rem', borderRadius: 99,
                fontWeight: 800, fontSize: '0.95rem', textDecoration: 'none',
                color: '#6366F1', background: '#fff',
                boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
                transition: 'all 0.3s ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 18px 40px rgba(0,0,0,0.25)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.15)'; }}
              >
                🛠️ Book Free Diagnosis
              </a>
              <a href="https://wa.me/251954897133" target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.95rem 2.25rem', borderRadius: 99,
                fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none',
                color: '#fff',
                background: 'rgba(255,255,255,0.15)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.25)',
                transition: 'all 0.3s ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.25)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; e.currentTarget.style.transform = ''; }}
              >
                💬 Chat on WhatsApp
              </a>
            </div>

            {/* Trust signals */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
              {['✅ No-fix, no-fee', '⚡ 24h turnaround', '🔒 Free diagnosis', '⭐ 4.9/5 rating'].map(t => (
                <span key={t} style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
