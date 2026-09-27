import { useState } from 'react';
import type { FormEvent } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface FormState {
  name: string;
  phone: string;
  device: string;
  issue: string;
}

const INITIAL: FormState = { name: '', phone: '', device: '', issue: '' };

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState<FormState>(INITIAL);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const msg = `Hello Abule Tech! 👋\n\n*Name:* ${form.name}\n*Phone:* ${form.phone}\n*Device:* ${form.device}\n*Problem:* ${form.issue}\n\nPlease help me fix my device. Thank you!`;
      window.open(`https://wa.me/251954897133?text=${encodeURIComponent(msg)}`, '_blank');
      setLoading(false);
      setSent(true);
      setForm(INITIAL);
      setTimeout(() => setSent(false), 5000);
    }, 1200);
  };

  const channels = [
    { href: 'https://wa.me/251954897133', icon: '💬', label: '+251 954 897 133', sublabel: 'WhatsApp' },
    { href: 'mailto:abuletech@gmail.com', icon: '📧', label: 'abuletech@gmail.com', sublabel: 'Email' },
    { href: 'https://t.me/abule_48', icon: '✈️', label: '@abule_48', sublabel: 'Telegram' },
    { href: 'https://instagram.com/abule_48', icon: '📷', label: '@abule_48', sublabel: 'Instagram' },
  ];

  return (
    <section id="contact" style={{ padding: '7rem 0', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto 3.5rem' }}>
          <div className="section-badge">{t('contact_badge')}</div>
          <h2 className="section-heading" style={{ marginBottom: '0.85rem' }}>
            {t('contact_title_1')} <span className="gradient-text">{t('contact_title_2')}</span>
          </h2>
          <p style={{ fontSize: '0.975rem', color: 'var(--muted)', lineHeight: 1.65 }}>
            {t('contact_desc')}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5rem', alignItems: 'start' }} className="responsive-3-grid">
          
          {/* Left Column: Direct Channels & Map */}
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--text)' }}>
              Direct Channels
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '2rem' }}>
              {channels.map(c => (
                <a
                  key={c.sublabel}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.75rem',
                    padding: '0.85rem 1rem', borderRadius: 14,
                    border: '1px solid var(--border)', background: 'var(--surface)',
                    textDecoration: 'none', transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-strong)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; }}
                >
                  <div style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: 'var(--surface-2)', border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.1rem', flexShrink: 0,
                  }}>
                    {c.icon}
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: '0.825rem', fontWeight: 700, color: 'var(--text)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.label}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{c.sublabel}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Google Map */}
            <div style={{ borderRadius: 18, overflow: 'hidden', border: '1px solid var(--border)' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126600.95764042848!2d37.47214714652253!3d6.032608402438699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17b077a2af5ccfa7%3A0xc665809cf932c0d8!2sArba%20Minch%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="220"
                style={{ border: 0, filter: 'grayscale(0.3)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Abule Tech Location"
              />
            </div>
          </div>

          {/* Right Column: Form Card */}
          <div style={{
            background: 'var(--surface)', border: '1px solid var(--border)',
            borderRadius: 20, padding: '2rem', boxShadow: 'var(--shadow-md)',
          }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--text)' }}>
              Schedule Diagnosis
            </h3>

            {sent && (
              <div style={{ marginBottom: '1rem', padding: '0.75rem 1rem', borderRadius: 12, background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', color: '#22C55E', fontSize: '0.85rem', fontWeight: 600 }}>
                {t('contact_sent')}
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <input
                id="f-name"
                name="name"
                autoComplete="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder={t('contact_name_ph')}
                className="input-sleek"
              />
              <input
                id="f-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                value={form.phone}
                onChange={handleChange}
                placeholder={t('contact_phone_ph')}
                className="input-sleek"
              />
              <select
                id="f-device"
                name="device"
                autoComplete="off"
                required
                value={form.device}
                onChange={handleChange}
                className="input-sleek"
              >
                <option value="">{t('contact_device_ph')}</option>
                <option value="Desktop PC">Desktop PC</option>
                <option value="Laptop">Laptop</option>
                <option value="All-in-One">All-in-One</option>
                <option value="Other">Other</option>
              </select>
              <textarea
                id="f-issue"
                name="issue"
                autoComplete="off"
                required
                value={form.issue}
                onChange={handleChange}
                placeholder={t('contact_issue_ph')}
                rows={4}
                className="input-sleek"
                style={{ resize: 'vertical' }}
              />
              <button
                type="submit"
                disabled={loading}
                style={{
                  width: '100%',
                  padding: '0.85rem',
                  borderRadius: 99,
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  color: '#fff',
                  background: 'var(--primary)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background 0.2s ease',
                  marginTop: '0.5rem',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--primary-hover)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--primary)'; }}
              >
                {loading ? t('contact_sending') : `📱 ${t('contact_submit')} →`}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
