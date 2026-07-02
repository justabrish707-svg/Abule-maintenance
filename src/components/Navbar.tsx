import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
        background: scrolled
          ? theme === 'dark' ? 'rgba(8,12,24,0.92)' : 'rgba(248,250,255,0.92)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.06)' : 'none',
      }}
    >
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
          {/* Brand */}
          <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{
              width: 36, height: 36, borderRadius: 12,
              background: 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1rem', fontWeight: 900, color: '#fff',
              boxShadow: '0 4px 12px rgba(99,102,241,0.4)',
            }}>A</div>
            <span style={{ fontWeight: 900, fontSize: '1.15rem', letterSpacing: '-0.04em', color: 'var(--text)' }}>
              Abule<span style={{ color: 'var(--primary)' }}>Tech</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', alignItems: 'center' }} className="hidden md:flex">
            {links.map(l => (
              <li key={l.href} style={{ position: 'relative' }}>
                <a
                  href={l.href}
                  onClick={() => setActive(l.href)}
                  style={{
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    color: active === l.href ? 'var(--primary)' : 'var(--muted)',
                    transition: 'color 0.2s',
                    paddingBottom: 4,
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                  onMouseLeave={e => (e.currentTarget.style.color = active === l.href ? 'var(--primary)' : 'var(--muted)')}
                >
                  {l.label}
                  {active === l.href && (
                    <span style={{
                      position: 'absolute', bottom: -2, left: 0, right: 0, height: 2,
                      background: 'linear-gradient(90deg, var(--primary), var(--accent))',
                      borderRadius: 99, animation: 'slideRight 0.3s ease forwards',
                      transformOrigin: 'left',
                    }} />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={toggle}
              style={{
                background: 'var(--surface-2)', border: '1px solid var(--border)',
                color: 'var(--text)', cursor: 'pointer',
                width: 38, height: 38, borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1rem', transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.boxShadow = '0 0 0 3px var(--glow-primary)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = ''; }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>

            <a
              href="#contact"
              className="hidden md:inline-flex"
              style={{
                padding: '0.5rem 1.25rem',
                borderRadius: 99, fontWeight: 700, fontSize: '0.875rem',
                textDecoration: 'none', color: '#fff',
                background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                boxShadow: '0 4px 14px rgba(99,102,241,0.35)',
                transition: 'all 0.3s ease',
                border: 'none',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(99,102,241,0.5)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 14px rgba(99,102,241,0.35)'; }}
            >
              Book Now ↗
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(o => !o)}
              className="md:hidden"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 6, display: 'flex', flexDirection: 'column', gap: 5 }}
              aria-label="Menu"
            >
              {[0,1,2].map(i => (
                <span key={i} style={{
                  display: 'block', width: 22, height: 2, borderRadius: 4,
                  background: 'var(--text)', transition: 'all 0.3s ease',
                  transform: menuOpen
                    ? i === 0 ? 'translateY(7px) rotate(45deg)'
                    : i === 2 ? 'translateY(-7px) rotate(-45deg)' : 'none'
                    : 'none',
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }} />
              ))}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div style={{
        maxHeight: menuOpen ? 400 : 0,
        overflow: 'hidden', transition: 'max-height 0.4s cubic-bezier(0.16,1,0.3,1)',
        background: 'var(--surface)', borderTop: menuOpen ? '1px solid var(--border)' : 'none',
      }}>
        <div style={{ padding: '1rem 1.5rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          {links.map(l => (
            <a key={l.href} href={l.href}
              onClick={() => { setMenuOpen(false); setActive(l.href); }}
              style={{
                padding: '0.75rem 1rem', borderRadius: 12, textDecoration: 'none',
                fontSize: '0.95rem', fontWeight: 500, color: 'var(--muted)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--surface-2)'; e.currentTarget.style.color = 'var(--text)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = ''; e.currentTarget.style.color = 'var(--muted)'; }}
            >{l.label}</a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)}
            style={{ marginTop: '0.5rem', padding: '0.75rem 1rem', borderRadius: 12, textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem', color: '#fff', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', textAlign: 'center' }}>
            Book Free Diagnosis
          </a>
        </div>
      </div>
    </nav>
  );
}
