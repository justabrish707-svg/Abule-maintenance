const links = {
  Services: [
    { label: 'Hardware Repair', href: '#services' },
    { label: 'Data Recovery', href: '#services' },
    { label: 'Software Fix', href: '#services' },
    { label: 'PC Upgrades', href: '#services' },
    { label: 'Interactive Estimator', href: '#tools' },
  ],
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'Pricing Plans', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact & Booking', href: '#contact' },
  ],
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
        padding: '0.65rem 1rem',
        textAlign: 'center',
        fontSize: '0.8rem',
        fontWeight: 500,
        borderTop: '1px solid var(--border)',
        background: 'var(--surface-2)',
        color: 'var(--muted)',
      }}>
        <span style={{
          display: 'inline-block', width: 6, height: 6, borderRadius: '50%',
          background: '#22C55E', marginRight: 8, verticalAlign: 'middle',
        }} />
        Currently accepting new repairs in Arba Minch — average 24h turnaround.
      </div>

      <footer style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', padding: '3.5rem 0 2rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="footer-inner">
            
            {/* Brand column */}
            <div style={{ maxWidth: 280 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.85rem' }}>
                <div style={{
                  width: 30, height: 30, borderRadius: 8,
                  background: 'var(--primary)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 800, fontSize: '0.875rem', color: '#fff',
                }}>A</div>
                <span style={{ fontWeight: 800, fontSize: '1.05rem', letterSpacing: '-0.03em', color: 'var(--text)' }}>
                  Abulè<span style={{ color: 'var(--primary)' }}>Tech</span>
                </span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                Arba Minch's most trusted PC repair & maintenance service. Fast, transparent, and guaranteed.
              </p>
              {/* Socials */}
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {socials.map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    style={{
                      width: 34, height: 34, borderRadius: 8,
                      background: 'var(--surface-2)', border: '1px solid var(--border)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.95rem', textDecoration: 'none', color: 'var(--text)',
                      transition: 'border-color 0.2s',
                    }}
                    title={s.label}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-strong)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; }}
                  >{s.icon}</a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="footer-links-group">
              {Object.entries(links).map(([col, items]) => (
                <div key={col}>
                  <h4 style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text)', marginBottom: '1rem' }}>{col}</h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    {items.map(item => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          style={{ fontSize: '0.85rem', textDecoration: 'none', color: 'var(--muted)', transition: 'color 0.2s' }}
                          onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
                          onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <span style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>© {new Date().getFullYear()} Abule Tech. All rights reserved.</span>
            <span style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>Made in Arba Minch, Ethiopia</span>
          </div>
        </div>
      </footer>
    </>
  );
}
