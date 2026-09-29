import { useState, useEffect } from 'react';
import type { FormEvent } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { validateContactSubmission, cleanPhone, sanitizeText, type ContactValidationErrors } from '../utils/validation';
import { checkRateLimit, recordActionTimestamp } from '../utils/rateLimiter';
import { trackEvent } from '../utils/analytics';

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
  const [errors, setErrors] = useState<ContactValidationErrors>({});
  const [rateLimitSec, setRateLimitSec] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  // Countdown timer for rate limiting
  useEffect(() => {
    if (rateLimitSec <= 0) return;
    const interval = setInterval(() => {
      setRateLimitSec(prev => (prev > 1 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [rateLimitSec]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    // Clear field-specific error upon typing
    if (errors[name as keyof ContactValidationErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // 1. Check Rate Limit (Anti-Spam)
    const rateCheck = checkRateLimit('contact_submit', 30);
    if (!rateCheck.allowed) {
      setRateLimitSec(rateCheck.remainingSeconds);
      return;
    }

    // 2. Strict Input Validation & Sanitization
    const validation = validateContactSubmission(form);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setLoading(true);

    const safeName = sanitizeText(form.name, 80);
    const safePhone = cleanPhone(form.phone);
    const safeIssue = sanitizeText(form.issue, 800);

    setTimeout(() => {
      const msg = `Hello Abule Tech! 👋\n\n*Name:* ${safeName}\n*Phone:* ${safePhone}\n*Device:* ${form.device}\n*Problem:* ${safeIssue}\n\nPlease help me fix my device. Thank you!`;
      window.open(`https://wa.me/251954897133?text=${encodeURIComponent(msg)}`, '_blank');

      // Record rate limit & log analytics
      recordActionTimestamp('contact_submit');
      trackEvent('contact_form_submitted', {
        device: form.device,
        hasPhone: Boolean(safePhone),
      });

      setLoading(false);
      setSent(true);
      setForm(INITIAL);
      setTimeout(() => setSent(false), 6000);
    }, 1000);
  };

  const channels = [
    { href: 'https://wa.me/abule_76', icon: '💬', label: '@abule_76', sublabel: 'WhatsApp' },
    { href: 'mailto:abuletech@gmail.com', icon: '📧', label: 'abuletech@gmail.com', sublabel: 'Email' },
    { href: 'https://t.me/abule_48', icon: '✈️', label: '@abule_48', sublabel: 'Telegram' },
    { href: 'https://instagram.com/abule_48', icon: '📷', label: '@abule_48', sublabel: 'Instagram' },
  ];

  return (
    <section id="contact" style={{ padding: 'clamp(4.5rem, 8vw, 7rem) 0', background: 'var(--bg)' }}>
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

        <div className="grid-2-col" style={{ alignItems: 'start' }}>
          
          {/* Left Column: Direct Channels & Map */}
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--text)' }}>
              Direct Channels
            </h3>

            <div className="channels-grid" style={{ marginBottom: '2rem' }}>
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

            {/* Rate limit cooldown alert */}
            {rateLimitSec > 0 && (
              <div style={{ marginBottom: '1rem', padding: '0.75rem 1rem', borderRadius: 12, background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.25)', color: '#EF4444', fontSize: '0.825rem', fontWeight: 600 }}>
                ⏳ Please wait {rateLimitSec}s before sending another request to prevent duplicates.
              </div>
            )}

            {/* Success notification */}
            {sent && (
              <div style={{ marginBottom: '1rem', padding: '0.75rem 1rem', borderRadius: 12, background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', color: '#22C55E', fontSize: '0.85rem', fontWeight: 600 }}>
                {t('contact_sent')}
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div>
                <input
                  id="f-name"
                  name="name"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={t('contact_name_ph')}
                  className="input-sleek"
                  style={{ borderColor: errors.name ? '#EF4444' : undefined }}
                />
                {errors.name && (
                  <div style={{ color: '#EF4444', fontSize: '0.75rem', marginTop: '0.25rem', paddingLeft: '0.25rem' }}>
                    {errors.name}
                  </div>
                )}
              </div>

              <div>
                <input
                  id="f-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder={t('contact_phone_ph')}
                  className="input-sleek"
                  style={{ borderColor: errors.phone ? '#EF4444' : undefined }}
                />
                {errors.phone && (
                  <div style={{ color: '#EF4444', fontSize: '0.75rem', marginTop: '0.25rem', paddingLeft: '0.25rem' }}>
                    {errors.phone}
                  </div>
                )}
              </div>

              <div>
                <select
                  id="f-device"
                  name="device"
                  autoComplete="off"
                  value={form.device}
                  onChange={handleChange}
                  className="input-sleek"
                  style={{ borderColor: errors.device ? '#EF4444' : undefined }}
                >
                  <option value="">{t('contact_device_ph')}</option>
                  <option value="Desktop PC">Desktop PC</option>
                  <option value="Laptop">Laptop</option>
                  <option value="All-in-One">All-in-One</option>
                  <option value="Other">Other</option>
                </select>
                {errors.device && (
                  <div style={{ color: '#EF4444', fontSize: '0.75rem', marginTop: '0.25rem', paddingLeft: '0.25rem' }}>
                    {errors.device}
                  </div>
                )}
              </div>

              <div>
                <textarea
                  id="f-issue"
                  name="issue"
                  autoComplete="off"
                  value={form.issue}
                  onChange={handleChange}
                  placeholder={t('contact_issue_ph')}
                  rows={4}
                  className="input-sleek"
                  style={{ resize: 'vertical', borderColor: errors.issue ? '#EF4444' : undefined }}
                />
                {errors.issue && (
                  <div style={{ color: '#EF4444', fontSize: '0.75rem', marginTop: '0.25rem', paddingLeft: '0.25rem' }}>
                    {errors.issue}
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={loading || rateLimitSec > 0}
                style={{
                  width: '100%',
                  padding: '0.85rem',
                  borderRadius: 99,
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  color: '#fff',
                  background: (rateLimitSec > 0 || loading) ? 'var(--muted)' : 'var(--primary)',
                  border: 'none',
                  cursor: (rateLimitSec > 0 || loading) ? 'not-allowed' : 'pointer',
                  transition: 'background 0.2s ease',
                  marginTop: '0.5rem',
                }}
                onMouseEnter={e => {
                  if (rateLimitSec === 0 && !loading) e.currentTarget.style.background = 'var(--primary-hover)';
                }}
                onMouseLeave={e => {
                  if (rateLimitSec === 0 && !loading) e.currentTarget.style.background = 'var(--primary)';
                }}
              >
                {loading
                  ? t('contact_sending')
                  : rateLimitSec > 0
                  ? `⏳ Wait ${rateLimitSec}s`
                  : `📱 ${t('contact_submit')} →`}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
