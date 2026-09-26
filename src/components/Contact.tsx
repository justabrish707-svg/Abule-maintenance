import { useState } from 'react';
import type { FormEvent } from 'react';

interface FormState {
  name: string;
  phone: string;
  device: string;
  issue: string;
}

const INITIAL: FormState = { name: '', phone: '', device: '', issue: '' };

export default function Contact() {
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
    }, 1500);
  };

  const inputStyle = {
    width: '100%',
    padding: '0.875rem 1rem',
    borderRadius: '12px',
    border: '1px solid var(--border)',
    background: 'var(--bg)',
    color: 'var(--text)',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    fontFamily: 'inherit',
  };

  const channels = [
    { href: 'https://wa.me/251954897133', icon: '💬', label: '+251 954 897 133', sublabel: 'WhatsApp', bg: '#D1FAE5' },
    { href: 'mailto:abuletech@gmail.com', icon: '📧', label: 'abuletech@gmail.com', sublabel: 'Email', bg: '#EEF2FF' },
    { href: 'https://t.me/abule_48', icon: '✈️', label: '@abule_48', sublabel: 'Telegram', bg: '#E0F2FE' },
    { href: 'https://instagram.com/abule_48', icon: '📷', label: '@abule_48', sublabel: 'Instagram', bg: '#FCE7F3' },
  ];

  return (
    <section id="contact" className="py-32" style={{ background: 'var(--bg)' }}>
      <div className="max-w-300 mx-auto px-6">
        <div className="text-center max-w-140 mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4" style={{ background: 'rgba(99,102,241,0.1)', color: 'var(--primary)' }}>
            Get In Touch
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight mb-4" style={{ color: 'var(--text)' }}>
            Book Your <span className="gradient-text">Free Diagnosis</span>
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>We are based in Arba Minch. Book online or reach us directly.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: channels + map */}
          <div>
            <h3 className="text-lg font-bold mb-6" style={{ color: 'var(--text)' }}>Reach us directly</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {channels.map(c => (
                <a
                  key={c.sublabel}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl border no-underline transition-all duration-300 hover:-translate-y-1"
                  style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 20px -5px rgba(0,0,0,0.1)'; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = ''; }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0" style={{ background: c.bg }}>{c.icon}</div>
                  <div>
                    <div className="text-sm font-semibold" style={{ color: 'var(--text)' }}>{c.label}</div>
                    <div className="text-xs" style={{ color: 'var(--muted)' }}>{c.sublabel}</div>
                  </div>
                </a>
              ))}
            </div>
            {/* Map */}
            <div className="rounded-2xl overflow-hidden border" style={{ borderColor: 'var(--border)' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126600.95764042848!2d37.47214714652253!3d6.032608402438699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17b077a2af5ccfa7%3A0xc665809cf932c0d8!2sArba%20Minch%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="240"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Abule Tech Location"
              />
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-[28px] p-8 border" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
            <h3 className="text-lg font-bold mb-6" style={{ color: 'var(--text)' }}>Book a Free Diagnosis</h3>
            {sent && (
              <div className="mb-5 flex items-center gap-3 p-4 rounded-xl text-sm font-medium" style={{ background: 'rgba(16,185,129,0.1)', color: '#10B981', border: '1px solid rgba(16,185,129,0.2)' }}>
                ✅ WhatsApp opened! We'll get back to you shortly.
              </div>
            )}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input id="f-name" name="name" autoComplete="name" required value={form.name} onChange={handleChange} placeholder="Your Full Name" style={inputStyle} onFocus={e => { e.target.style.borderColor = 'var(--primary)'; e.target.style.boxShadow = '0 0 0 3px rgba(99,102,241,0.1)'; }} onBlur={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = ''; }} />
              <input id="f-phone" name="phone" type="tel" autoComplete="tel" required value={form.phone} onChange={handleChange} placeholder="Phone Number" style={inputStyle} onFocus={e => { e.target.style.borderColor = 'var(--primary)'; e.target.style.boxShadow = '0 0 0 3px rgba(99,102,241,0.1)'; }} onBlur={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = ''; }} />
              <select id="f-device" name="device" autoComplete="off" required value={form.device} onChange={handleChange} style={inputStyle} onFocus={e => { e.target.style.borderColor = 'var(--primary)'; e.target.style.boxShadow = '0 0 0 3px rgba(99,102,241,0.1)'; }} onBlur={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = ''; }}>
                <option value="">Select Device Type</option>
                <option value="Desktop PC">Desktop PC</option>
                <option value="Laptop">Laptop</option>
                <option value="All-in-One">All-in-One</option>
                <option value="Other">Other</option>
              </select>
              <textarea id="f-issue" name="issue" autoComplete="off" required value={form.issue} onChange={handleChange} placeholder="Describe the issue..." rows={4} style={{ ...inputStyle, resize: 'vertical' }} onFocus={e => { e.target.style.borderColor = 'var(--primary)'; e.target.style.boxShadow = '0 0 0 3px rgba(99,102,241,0.1)'; }} onBlur={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = ''; }} />
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-full font-semibold text-sm text-white border-none cursor-pointer transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
                style={{ background: 'var(--text)', boxShadow: '0 4px 15px -3px var(--primary)' }}
              >
                {loading ? '⏳ Processing...' : '📱 Send via WhatsApp'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
