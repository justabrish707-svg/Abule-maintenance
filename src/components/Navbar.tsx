import { useState, useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';
import { useLanguage } from '../hooks/useLanguage';

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Track scroll position for glassmorphism header
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active section scrollspy observer
  useEffect(() => {
    const sectionIds = ['services', 'tools', 'about', 'reviews', 'pricing', 'faq', 'contact'];
    const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach(sec => observer.observe(sec));
    return () => observer.disconnect();
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
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        background: scrolled
          ? theme === 'dark'
            ? 'rgba(9, 13, 22, 0.85)'
            : 'rgba(250, 250, 252, 0.85)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(1rem, 3vw, 1.5rem)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
          
          {/* Brand Logo Mark */}
          <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: 10,
                background: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1rem',
                fontWeight: 800,
                color: '#fff',
                boxShadow: '0 0 16px rgba(99, 102, 241, 0.35)',
              }}
            >
              A
            </div>
            <span style={{ fontWeight: 800, fontSize: '1.05rem', letterSpacing: '-0.03em', color: 'var(--text)' }}>
              Abulè<span style={{ color: 'var(--primary)' }}>Tech</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex" style={{ gap: '1.5rem', alignItems: 'center' }}>
            {links.map(l => {
              const isActive = activeSection === l.href;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  style={{
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? 'var(--primary)' : 'var(--muted)',
                    transition: 'color 0.2s',
                    position: 'relative',
                    padding: '0.35rem 0',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                  onMouseLeave={e => (e.currentTarget.style.color = isActive ? 'var(--primary)' : 'var(--muted)')}
                >
                  {l.label}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 2,
                        background: 'var(--primary)',
                        borderRadius: 99,
                      }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            
            {/* Language Switcher Pill */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'am' : 'en')}
              style={{
                background: 'var(--surface-2)',
                border: '1px solid var(--border)',
                color: 'var(--text)',
                cursor: 'pointer',
                padding: '0.35rem 0.65rem',
                borderRadius: 99,
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.75rem',
                fontWeight: 700,
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-strong)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; }}
              aria-label="Switch language"
            >
              <span>{language === 'en' ? '🇬🇧' : '🇪🇹'}</span>
              <span>{language === 'en' ? 'EN' : 'አማ'}</span>
            </button>

            {/* Theme Switcher Button */}
            <button
              onClick={toggle}
              style={{
                background: 'var(--surface-2)',
                border: '1px solid var(--border)',
                color: 'var(--text)',
                cursor: 'pointer',
                width: 34,
                height: 34,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.9rem',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-strong)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; }}
              aria-label="Toggle color theme"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>

            {/* Primary Action Button */}
            <a
              href="#contact"
              className="hidden lg:inline-flex"
              style={{
                background: 'var(--primary)',
                color: '#fff',
                textDecoration: 'none',
                padding: '0.5rem 1.15rem',
                borderRadius: 99,
                fontSize: '0.82rem',
                fontWeight: 600,
                transition: 'all 0.2s ease',
                boxShadow: '0 2px 10px rgba(99, 102, 241, 0.25)',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--primary-hover)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--primary)'; }}
            >
              {t('nav_book_now')} →
            </a>

            {/* Mobile Navigation Toggle */}
            <button
              className="lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              style={{
                background: 'var(--surface-2)',
                border: '1px solid var(--border)',
                borderRadius: 8,
                padding: '6px 10px',
                color: 'var(--text)',
                fontSize: '1rem',
                cursor: 'pointer',
              }}
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {menuOpen && (
          <div
            id="mobile-navigation"
            className="lg:hidden"
            style={{
              padding: '1rem 0 1.25rem',
              borderTop: '1px solid var(--border)',
              background: theme === 'dark' ? '#090D16' : '#FAFAFC',
              borderRadius: '0 0 16px 16px',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              {links.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => { setActiveSection(l.href); setMenuOpen(false); }}
                  style={{
                    padding: '0.65rem 0.85rem',
                    borderRadius: 8,
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    color: activeSection === l.href ? 'var(--primary)' : 'var(--text)',
                    background: activeSection === l.href ? 'var(--primary-light)' : 'transparent',
                  }}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                style={{
                  textAlign: 'center',
                  background: 'var(--primary)',
                  color: '#fff',
                  textDecoration: 'none',
                  padding: '0.75rem',
                  borderRadius: 99,
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  marginTop: '0.5rem',
                }}
              >
                {t('nav_book_now')} →
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
