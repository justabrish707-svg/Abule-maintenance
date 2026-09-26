import { useState } from 'react';

// Estimator Types & Data
interface DeviceOption {
  id: string;
  name: string;
  icon: string;
}

interface IssueOption {
  id: string;
  name: string;
  minPrice: number;
  maxPrice: number;
  time: string;
  description: string;
}

const DEVICES: DeviceOption[] = [
  { id: 'laptop', name: 'Laptop', icon: '💻' },
  { id: 'desktop', name: 'Desktop PC', icon: '🖥️' },
  { id: 'mac', name: 'MacBook / Mac', icon: '🍎' },
  { id: 'storage', name: 'External Drive / USB', icon: '💾' },
];

const ISSUES: IssueOption[] = [
  { id: 'os', name: 'OS Crash / Boot Loop / Blue Screen', minPrice: 400, maxPrice: 600, time: 'Same Day (3–5 Hours)', description: 'Full OS reinstall, driver updates, and data protection.' },
  { id: 'hardware', name: 'Hardware Repair / Motherboard / Power', minPrice: 600, maxPrice: 1200, time: '24 Hours', description: 'Deep component-level diagnostics and soldering repair.' },
  { id: 'data', name: 'Data Recovery (Deleted/Corrupted)', minPrice: 800, maxPrice: 2000, time: '24–48 Hours', description: 'Deep sector scanning and file restoration from damaged media.' },
  { id: 'virus', name: 'Virus Removal & Slow System Tune-up', minPrice: 350, maxPrice: 500, time: 'Same Day (2–4 Hours)', description: 'Malware removal, disk optimization, and thermal paste application.' },
  { id: 'screen', name: 'Screen / Battery / Keyboard Fix', minPrice: 500, maxPrice: 1500, time: 'Same Day / 24h', description: 'Replacement of physical components with quality tested parts.' },
];

// Demo Ticket Data for Live Status Tracker
interface TicketStatus {
  id: string;
  customerName: string;
  device: string;
  step: number; // 1 to 5
  updatedAt: string;
  notes: string;
}

const DEMO_TICKETS: Record<string, TicketStatus> = {
  'AB-4801': {
    id: 'AB-4801',
    customerName: 'Alemayehu T.',
    device: 'Dell XPS 15 (SSD Issue)',
    step: 3,
    updatedAt: 'Today at 2:15 PM',
    notes: 'Replacement NVMe SSD installed. Restoring user documents.',
  },
  'AB-1024': {
    id: 'AB-1024',
    customerName: 'Bethlehem G.',
    device: 'HP Pavilion (Screen Fix)',
    step: 5,
    updatedAt: 'Today at 11:30 AM',
    notes: 'Repair complete and quality tested. Ready for pickup at Arba Minch shop!',
  },
  'AB-7730': {
    id: 'AB-7730',
    customerName: 'Yosef M.',
    device: 'Lenovo ThinkPad (No Power)',
    step: 2,
    updatedAt: 'Today at 4:00 PM',
    notes: 'Power rail diagnostic ongoing under microscope.',
  },
};

const TRACKER_STEPS = [
  { step: 1, label: 'Received', icon: '📥' },
  { step: 2, label: 'Diagnostics', icon: '🔬' },
  { step: 3, label: 'In Repair', icon: '🛠️' },
  { step: 4, label: 'Testing', icon: '🧪' },
  { step: 5, label: 'Ready', icon: '🎉' },
];

export default function RepairTools() {
  // Tab state: 'estimator' | 'tracker'
  const [activeTab, setActiveTab] = useState<'estimator' | 'tracker'>('estimator');

  // Estimator State
  const [selectedDevice, setSelectedDevice] = useState<string>('laptop');
  const [selectedIssue, setSelectedIssue] = useState<string>('os');

  // Tracker State
  const [ticketInput, setTicketInput] = useState<string>('');
  const [searchedTicket, setSearchedTicket] = useState<TicketStatus | null>(null);
  const [searchError, setSearchError] = useState<string | null>(null);

  const currentDevice = DEVICES.find(d => d.id === selectedDevice) || DEVICES[0];
  const currentIssue = ISSUES.find(i => i.id === selectedIssue) || ISSUES[0];

  const handleTrackSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = ticketInput.trim().toUpperCase();
    if (!query) return;

    if (DEMO_TICKETS[query]) {
      setSearchedTicket(DEMO_TICKETS[query]);
      setSearchError(null);
    } else {
      setSearchedTicket(null);
      setSearchError(`No ticket found for "${query}". Try sample codes: AB-4801, AB-1024, or AB-7730.`);
    }
  };

  const bookingMsg = `Hello Abule Tech! 👋\n\nI used your online estimator:\n*Device:* ${currentDevice.icon} ${currentDevice.name}\n*Issue:* ${currentIssue.name}\n*Estimated Cost:* ${currentIssue.minPrice} - ${currentIssue.maxPrice} ETB\n\nI would like to book a free diagnosis. Thank you!`;
  const whatsappUrl = `https://wa.me/251954897133?text=${encodeURIComponent(bookingMsg)}`;

  return (
    <section id="tools" style={{ padding: '8rem 0', background: 'var(--surface)', position: 'relative', overflow: 'hidden' }}>
      {/* Background glow */}
      <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)', width: 700, height: 350, background: 'radial-gradient(ellipse, rgba(99,102,241,0.06), transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 1.5rem', position: 'relative' }}>

        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto 3rem' }}>
          <div className="section-badge">🛠️ Interactive Tools</div>
          <h2 className="section-heading" style={{ marginBottom: '1rem' }}>
            Instant Estimate &<br /><span className="gradient-text">Live Repair Tracker</span>
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.75 }}>
            Calculate your repair price in seconds or check the live progress of your device in repair.
          </p>
        </div>

        {/* Tab Toggle Bar */}
        <div style={{
          display: 'flex', justifyContent: 'center', gap: '0.75rem',
          maxWidth: 420, margin: '0 auto 3.5rem', padding: '0.4rem',
          background: 'var(--surface-2)', border: '1px solid var(--border)',
          borderRadius: 99, boxShadow: 'var(--shadow-sm)',
        }}>
          <button
            onClick={() => setActiveTab('estimator')}
            style={{
              flex: 1, padding: '0.75rem 1.25rem', borderRadius: 99,
              fontWeight: 700, fontSize: '0.9rem', border: 'none', cursor: 'pointer',
              transition: 'all 0.3s ease',
              background: activeTab === 'estimator' ? 'var(--primary)' : 'transparent',
              color: activeTab === 'estimator' ? '#fff' : 'var(--muted)',
              boxShadow: activeTab === 'estimator' ? '0 4px 14px rgba(99,102,241,0.35)' : 'none',
            }}
          >
            🧮 Price Estimator
          </button>
          <button
            onClick={() => setActiveTab('tracker')}
            style={{
              flex: 1, padding: '0.75rem 1.25rem', borderRadius: 99,
              fontWeight: 700, fontSize: '0.9rem', border: 'none', cursor: 'pointer',
              transition: 'all 0.3s ease',
              background: activeTab === 'tracker' ? 'var(--primary)' : 'transparent',
              color: activeTab === 'tracker' ? '#fff' : 'var(--muted)',
              boxShadow: activeTab === 'tracker' ? '0 4px 14px rgba(99,102,241,0.35)' : 'none',
            }}
          >
            🔎 Track Repair Status
          </button>
        </div>

        {/* TAB 1: ESTIMATOR */}
        {activeTab === 'estimator' && (
          <div style={{
            background: 'var(--bg)', border: '1px solid var(--border)',
            borderRadius: 32, padding: '2.5rem', boxShadow: 'var(--shadow-lg)',
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem',
          }} className="responsive-3-grid">

            {/* Left Column: Selections */}
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '1.25rem', color: 'var(--text)' }}>
                1. Select Your Device
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', marginBottom: '2rem' }}>
                {DEVICES.map(dev => (
                  <button
                    key={dev.id}
                    onClick={() => setSelectedDevice(dev.id)}
                    style={{
                      padding: '1rem', borderRadius: 16, border: '1px solid',
                      borderColor: selectedDevice === dev.id ? 'var(--primary)' : 'var(--border)',
                      background: selectedDevice === dev.id ? 'rgba(99,102,241,0.1)' : 'var(--surface)',
                      color: selectedDevice === dev.id ? 'var(--primary)' : 'var(--text)',
                      display: 'flex', alignItems: 'center', gap: '0.75rem',
                      fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      textAlign: 'left',
                    }}
                  >
                    <span style={{ fontSize: '1.4rem' }}>{dev.icon}</span>
                    {dev.name}
                  </button>
                ))}
              </div>

              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '1.25rem', color: 'var(--text)' }}>
                2. Select Main Issue
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {ISSUES.map(iss => (
                  <button
                    key={iss.id}
                    onClick={() => setSelectedIssue(iss.id)}
                    style={{
                      padding: '1rem 1.25rem', borderRadius: 16, border: '1px solid',
                      borderColor: selectedIssue === iss.id ? 'var(--primary)' : 'var(--border)',
                      background: selectedIssue === iss.id ? 'rgba(99,102,241,0.1)' : 'var(--surface)',
                      color: selectedIssue === iss.id ? 'var(--primary)' : 'var(--text)',
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      textAlign: 'left',
                    }}
                  >
                    <span>{iss.name}</span>
                    <span style={{ fontSize: '0.75rem', opacity: 0.8, fontWeight: 700 }}>
                      {iss.minPrice}–{iss.maxPrice} ETB
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Calculated Result Box */}
            <div style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 24, padding: '2rem', display: 'flex', flexDirection: 'column',
              justifyContent: 'space-between', position: 'relative', overflow: 'hidden',
              boxShadow: 'var(--shadow-md)',
            }}>
              {/* Top Accent line */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg, #6366F1, #EC4899)' }} />

              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                  Estimated Price Summary
                </div>

                <div style={{ fontSize: '2.75rem', fontWeight: 900, color: 'var(--text)', letterSpacing: '-0.05em', marginBottom: '0.5rem' }}>
                  {currentIssue.minPrice} – {currentIssue.maxPrice} <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--muted)' }}>ETB</span>
                </div>

                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.35rem 0.85rem', borderRadius: 99, background: 'rgba(20,184,166,0.1)', color: '#14B8A6', fontSize: '0.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>
                  ⏱️ Turnaround: {currentIssue.time}
                </div>

                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--muted)', marginBottom: '1.75rem' }}>
                  {currentIssue.description}
                </p>

                {/* Included Perks */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem' }}>
                  {['Free written estimate before work starts', 'No-Fix, No-Fee Guarantee', '30-Day warranty on parts & repair'].map(perk => (
                    <div key={perk} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: 'var(--text)', fontWeight: 600 }}>
                      <span style={{ color: '#22C55E', fontWeight: 900 }}>✓</span>
                      {perk}
                    </div>
                  ))}
                </div>
              </div>

              {/* Booking CTA */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem',
                  padding: '1rem', borderRadius: 99, background: 'linear-gradient(135deg, #25D366, #20BA58)',
                  color: '#fff', textDecoration: 'none', fontWeight: 800, fontSize: '0.95rem',
                  boxShadow: '0 8px 24px rgba(37,211,102,0.35)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={e => e.currentTarget.style.transform = ''}
              >
                <span>💬</span> Book This Estimate on WhatsApp
              </a>
            </div>

          </div>
        )}

        {/* TAB 2: LIVE TRACKER */}
        {activeTab === 'tracker' && (
          <div style={{
            background: 'var(--bg)', border: '1px solid var(--border)',
            borderRadius: 32, padding: '2.5rem', boxShadow: 'var(--shadow-lg)',
            maxWidth: 760, margin: '0 auto',
          }}>

            {/* Ticket Search Form */}
            <form onSubmit={handleTrackSearch} style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem' }}>
              <input
                type="text"
                value={ticketInput}
                onChange={e => setTicketInput(e.target.value)}
                placeholder="Enter Ticket ID (e.g. AB-4801)"
                style={{
                  flex: 1, padding: '0.9rem 1.25rem', borderRadius: 16,
                  border: '1px solid var(--border)', background: 'var(--surface)',
                  color: 'var(--text)', fontSize: '0.95rem', fontWeight: 600,
                  outline: 'none', textTransform: 'uppercase',
                }}
              />
              <button
                type="submit"
                style={{
                  padding: '0.9rem 1.75rem', borderRadius: 16, border: 'none',
                  background: 'var(--primary)', color: '#fff', fontWeight: 800,
                  fontSize: '0.95rem', cursor: 'pointer', boxShadow: '0 4px 14px rgba(99,102,241,0.3)',
                }}
              >
                Track Ticket 🔎
              </button>
            </form>

            {/* Sample Helper Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--muted)', fontWeight: 600 }}>Try Demo Tickets:</span>
              {Object.keys(DEMO_TICKETS).map(code => (
                <button
                  key={code}
                  type="button"
                  onClick={() => { setTicketInput(code); setSearchedTicket(DEMO_TICKETS[code]); setSearchError(null); }}
                  style={{
                    padding: '0.35rem 0.75rem', borderRadius: 99, border: '1px solid var(--border)',
                    background: 'var(--surface)', color: 'var(--primary)', fontSize: '0.78rem',
                    fontWeight: 700, cursor: 'pointer',
                  }}
                >
                  {code}
                </button>
              ))}
            </div>

            {/* Search Error */}
            {searchError && (
              <div style={{ padding: '1rem', borderRadius: 16, background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', color: '#EF4444', fontSize: '0.875rem', fontWeight: 600 }}>
                ⚠️ {searchError}
              </div>
            )}

            {/* Ticket Result Display */}
            {searchedTicket && (
              <div style={{
                background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: 24, padding: '2rem', marginTop: '1rem',
              }}>
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
                  <div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--text)' }}>
                      Ticket #{searchedTicket.id}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>
                      Owner: {searchedTicket.customerName} · {searchedTicket.device}
                    </div>
                  </div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--primary)', background: 'rgba(99,102,241,0.1)', padding: '0.4rem 0.85rem', borderRadius: 99 }}>
                    Updated {searchedTicket.updatedAt}
                  </div>
                </div>

                {/* Progress Steps Visual Bar */}
                <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', margin: '2.5rem 0 2rem' }}>
                  {/* Connecting Line */}
                  <div style={{
                    position: 'absolute', top: 22, left: '5%', right: '5%', height: 3,
                    background: 'var(--border)', zIndex: 1,
                  }} />
                  <div style={{
                    position: 'absolute', top: 22, left: '5%',
                    width: `${((searchedTicket.step - 1) / (TRACKER_STEPS.length - 1)) * 90}%`,
                    height: 3, background: 'var(--primary)', zIndex: 2, transition: 'width 0.6s ease',
                  }} />

                  {TRACKER_STEPS.map(s => {
                    const isCompleted = s.step <= searchedTicket.step;
                    const isCurrent = s.step === searchedTicket.step;

                    return (
                      <div key={s.step} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 3, position: 'relative' }}>
                        <div style={{
                          width: 46, height: 46, borderRadius: '50%',
                          background: isCompleted ? 'var(--primary)' : 'var(--surface-2)',
                          color: isCompleted ? '#fff' : 'var(--muted)',
                          border: isCurrent ? '3px solid #EC4899' : `2px solid ${isCompleted ? 'var(--primary)' : 'var(--border)'}`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: '1.2rem', fontWeight: 800,
                          boxShadow: isCurrent ? '0 0 16px rgba(236,72,153,0.5)' : 'none',
                          transition: 'all 0.3s ease',
                        }}>
                          {s.icon}
                        </div>
                        <span style={{ fontSize: '0.78rem', fontWeight: isCurrent ? 800 : 600, color: isCurrent ? 'var(--primary)' : 'var(--muted)', marginTop: '0.6rem' }}>
                          {s.label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Latest Technician Note */}
                <div style={{ background: 'var(--bg)', borderRadius: 16, padding: '1rem 1.25rem', border: '1px solid var(--border)' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.25rem' }}>
                    📝 Latest Status Note:
                  </div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text)' }}>
                    "{searchedTicket.notes}"
                  </div>
                </div>
              </div>
            )}

          </div>
        )}

      </div>
    </section>
  );
}
