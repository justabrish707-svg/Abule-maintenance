const links = {
  Services: ['Hardware Repair', 'Data Recovery', 'Software Fix', 'PC Upgrades', 'Networking'],
  Company: ['About Us', 'Pricing', 'FAQ', 'Contact'],
};

const socials = [
  { icon: '💬', label: 'WhatsApp', href: 'https://wa.me/251954897133' },
  { icon: '✈️', label: 'Telegram', href: 'https://t.me/abule_48' },
  { icon: '📷', label: 'Instagram', href: 'https://instagram.com/abule_48' },
];

export default function Footer() {
  return (
    <>
      {/* Live status ticker */}
      <div style={{
        padding: '0.7rem 1rem',
        textAlign: 'center',
        fontSize: '0.85rem',
        fontWeight: 500,
        borderTop: '1px solid var(--border)',
        background: 'var(--surface-2)',
        color: 'var(--muted)',
        letterSpacing: '0.01em',
      }}>
        <span style={{
          display: 'inline-block', width: 8, height: 8, borderRadius: '50%',
          background: '#22C55E', marginRight: 8,
          animation: 'pulse-dot 2s infinite',
          boxShadow: '0 0 0 0 rgba(34,197,94,0.7)',
          verticalAlign: 'middle',
        }} />
        Currently accepting new repairs in Arba Minch — average 24h turnaround.
      </div>

      <footer style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', padding: '4rem 0 2rem', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle background */}
        <div style={{ position: 'absolute', bottom: 0, right: 0, width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.04), transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 1.5rem', position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '3rem', marginBottom: '3rem' }}>
            {/* Brand column */}
            <div style={{ maxWidth: 300 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 12,
                  background: 'linear-gradient(135deg, #6366F1, #EC4899)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 900, fontSize: '1rem', color: '#fff',
                  boxShadow: '0 4px 12px rgba(99,102,241,0.3)',
                }}>A</div>
                <span style={{ fontWeight: 900, fontSize: '1.15rem', letterSpacing: '-0.04em', color: 'var(--text)' }}>
                  Abule<span style={{ color: 'var(--primary)' }}>Tech</span>
                </span>
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                Arba Minch's most trusted PC repair & maintenance service. Fast, transparent, and guaranteed.
              </p>
              {/* Socials */}
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                {socials.map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    style={{
                      width: 38, height: 38, borderRadius: 10,
                      background: 'var(--surface-2)', border: '1px solid var(--border)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.05rem', textDecoration: 'none',
                      transition: 'all 0.2s',
                    }}
                    title={s.label}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.background = 'rgba(99,102,241,0.08)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--surface-2)'; e.currentTarget.style.transform = ''; }}
                  >{s.icon}</a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
              {Object.entries(links).map(([col, items]) => (
                <div key={col}>
                  <h4 style={{ fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text)', marginBottom: '1.25rem' }}>{col}</h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    {items.map(item => (
                      <li key={item}>
                        <a href="#" style={{ fontSize: '0.875rem', textDecoration: 'none', color: 'var(--muted)', transition: 'color 0.2s' }}
                          onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'}
                          onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
                        >{item}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{ paddingTop: '2rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>© {new Date().getFullYear()} Abule Tech. All rights reserved.</span>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              {['Privacy Policy', 'Terms of Service'].map(l => (
                <a key={l} href="#" style={{ fontSize: '0.8rem', color: 'var(--muted)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
                >{l}</a>
              ))}
            </div>
            <span style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>Made with ❤️ in Arba Minch, Ethiopia</span>
          </div>
        </div>
      </footer>
    </>
  );
}
