import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#services', label: t('nav_services') },
    { href: '#tools', label: t('nav_tools') },
    { href: '#about', label: t('nav_about') },
    { href: '#pricing', label: t('nav_pricing') },
    { href: '#faq', label: t('nav_faq') },
    { href: '#contact', label: t('nav_contact') },
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
          <ul style={{ gap: '2.2rem', listStyle: 'none', alignItems: 'center' }} className="hidden md:flex">
            {links.map(l => (
              <li key={l.href} style={{ position: 'relative' }}>
                <a
                  href={l.href}
                  onClick={() => setActive(l.href)}
                  style={{
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    fontWeight: 600,
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
            {/* EN / AM Language Switcher Pill */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'am' : 'en')}
              style={{
                background: 'var(--surface-2)', border: '1px solid var(--border)',
                color: 'var(--text)', cursor: 'pointer',
                padding: '0.35rem 0.75rem', borderRadius: 99,
                display: 'flex', alignItems: 'center', gap: '0.35rem',
                fontSize: '0.78rem', fontWeight: 800, transition: 'all 0.2s',
                boxShadow: 'var(--shadow-sm)',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--primary)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; }}
              aria-label="Toggle language"
              title="Switch language between English and Amharic"
            >
              <span>{language === 'en' ? '🇬🇧' : '🇪🇹'}</span>
              <span>{language === 'en' ? 'EN' : 'አማ'}</span>
            </button>

            {/* Theme Toggle */}
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

            {/* Book Now Button */}
            <a
              href="#contact"
              className="hidden md:inline-flex"
              style={{
                background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
                color: '#fff', textDecoration: 'none', padding: '0.55rem 1.25rem',
                borderRadius: 99, fontSize: '0.85rem', fontWeight: 700,
                boxShadow: '0 4px 14px rgba(99,102,241,0.35)',
                transition: 'all 0.2s cubic-bezier(0.16,1,0.3,1)',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(99,102,241,0.45)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 14px rgba(99,102,241,0.35)'; }}
            >
              {t('nav_book_now')} ↗
            </a>

            {/* Mobile Hamburger Button */}
            <button
              className={`hamburger md:hidden ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              style={{
                background: 'var(--surface-2)',
                border: '1px solid var(--border)',
                borderRadius: 12,
                padding: '8px 10px',
                cursor: 'pointer',
              }}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        {/* Mobile Nav Menu Dropdown */}
        {menuOpen && (
          <div
            className="md:hidden"
            style={{
              padding: '1.25rem 0 1.5rem',
              borderTop: '1px solid var(--border)',
              background: theme === 'dark' ? 'rgba(8,12,24,0.96)' : 'rgba(248,250,255,0.96)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderRadius: '0 0 20px 20px',
            }}
          >
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              {links.map(l => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => { setActive(l.href); setMenuOpen(false); }}
                    style={{
                      display: 'block',
                      padding: '0.75rem 1rem',
                      borderRadius: 12,
                      textDecoration: 'none',
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: active === l.href ? 'var(--primary)' : 'var(--text)',
                      background: active === l.href ? 'rgba(99,102,241,0.1)' : 'transparent',
                    }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li style={{ paddingTop: '0.75rem', marginTop: '0.5rem', borderTop: '1px solid var(--border)' }}>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
                    color: '#fff',
                    textDecoration: 'none',
                    padding: '0.875rem',
                    borderRadius: 99,
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    boxShadow: '0 4px 14px rgba(99,102,241,0.35)',
                  }}
                >
                  {t('nav_book_now')} ↗
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
