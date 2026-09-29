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
  { step: 1, label: 'Received' },
  { step: 2, label: 'Diagnostics' },
  { step: 3, label: 'In Repair' },
  { step: 4, label: 'Testing' },
  { step: 5, label: 'Ready' },
];

export default function RepairTools() {
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
    <section id="tools" style={{ padding: 'clamp(4.5rem, 8vw, 7rem) 0', background: 'var(--surface-2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto 2.5rem' }}>
          <div className="section-badge">Interactive Tools</div>
          <h2 className="section-heading" style={{ marginBottom: '0.85rem' }}>
            Instant Estimate &<br /><span className="gradient-text">Live Status Tracker</span>
          </h2>
          <p style={{ fontSize: '0.975rem', color: 'var(--muted)', lineHeight: 1.65 }}>
            Calculate your repair price in seconds or check the real-time repair progress of your device.
          </p>
        </div>

        {/* Tab Segmented Control */}
        <div className="tab-control">
          <button
            onClick={() => setActiveTab('estimator')}
            style={{
              flex: 1, padding: '0.65rem 1.15rem', borderRadius: 99,
              fontWeight: 600, fontSize: '0.85rem', border: 'none', cursor: 'pointer',
              transition: 'all 0.2s ease',
              background: activeTab === 'estimator' ? 'var(--primary)' : 'transparent',
              color: activeTab === 'estimator' ? '#fff' : 'var(--muted)',
            }}
          >
            🧮 Price Estimator
          </button>
          <button
            onClick={() => setActiveTab('tracker')}
            style={{
              flex: 1, padding: '0.65rem 1.15rem', borderRadius: 99,
              fontWeight: 600, fontSize: '0.85rem', border: 'none', cursor: 'pointer',
              transition: 'all 0.2s ease',
              background: activeTab === 'tracker' ? 'var(--primary)' : 'transparent',
              color: activeTab === 'tracker' ? '#fff' : 'var(--muted)',
            }}
          >
            🔎 Track Repair Status
          </button>
        </div>

        {/* TAB 1: ESTIMATOR */}
        {activeTab === 'estimator' && (
          <div
            className="estimator-grid"
            style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 24, padding: 'clamp(1.25rem, 3.5vw, 2.25rem)', boxShadow: 'var(--shadow-md)',
            }}
          >

            {/* Left Column */}
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text)' }}>
                1. Select Device
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.65rem', marginBottom: '1.75rem' }}>
                {DEVICES.map(dev => (
                  <button
                    key={dev.id}
                    onClick={() => setSelectedDevice(dev.id)}
                    style={{
                      padding: '0.85rem', borderRadius: 12, border: '1px solid',
                      borderColor: selectedDevice === dev.id ? 'var(--primary)' : 'var(--border)',
                      background: selectedDevice === dev.id ? 'var(--primary-light)' : 'var(--surface-2)',
                      color: selectedDevice === dev.id ? 'var(--primary)' : 'var(--text)',
                      display: 'flex', alignItems: 'center', gap: '0.65rem',
                      fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      textAlign: 'left',
                    }}
                  >
                    <span style={{ fontSize: '1.2rem' }}>{dev.icon}</span>
                    {dev.name}
                  </button>
                ))}
              </div>

              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text)' }}>
                2. Select Primary Issue
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {ISSUES.map(iss => (
                  <button
                    key={iss.id}
                    onClick={() => setSelectedIssue(iss.id)}
                    style={{
                      padding: '0.85rem 1rem', borderRadius: 12, border: '1px solid',
                      borderColor: selectedIssue === iss.id ? 'var(--primary)' : 'var(--border)',
                      background: selectedIssue === iss.id ? 'var(--primary-light)' : 'var(--surface-2)',
                      color: selectedIssue === iss.id ? 'var(--primary)' : 'var(--text)',
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      fontWeight: 500, fontSize: '0.825rem', cursor: 'pointer',
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

            {/* Right Column */}
            <div style={{
              background: 'var(--surface-2)', border: '1px solid var(--border)',
              borderRadius: 18, padding: '1.75rem', display: 'flex', flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
              <div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                  Estimated Price Summary
                </div>

                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.04em', marginBottom: '0.5rem' }}>
                  {currentIssue.minPrice} – {currentIssue.maxPrice} <span style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--muted)' }}>ETB</span>
                </div>

                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.3rem 0.75rem', borderRadius: 99, background: 'rgba(34,197,94,0.1)', color: '#22C55E', fontSize: '0.78rem', fontWeight: 600, marginBottom: '1.25rem' }}>
                  ⏱️ Turnaround: {currentIssue.time}
                </div>

                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--muted)', marginBottom: '1.5rem' }}>
                  {currentIssue.description}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.75rem' }}>
                  {['Free written estimate before work starts', 'No-Fix, No-Fee Guarantee', '30-Day warranty on parts & repair'].map(perk => (
                    <div key={perk} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.825rem', color: 'var(--text)', fontWeight: 500 }}>
                      <span style={{ color: '#22C55E', fontWeight: 800 }}>✓</span>
                      {perk}
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                  padding: '0.85rem', borderRadius: 99, background: '#25D366',
                  color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: '0.875rem',
                  boxShadow: '0 4px 14px rgba(37,211,102,0.3)',
                  transition: 'opacity 0.2s',
                }}
              >
                💬 Book This Estimate on WhatsApp
              </a>
            </div>

          </div>
        )}

        {/* TAB 2: LIVE TRACKER */}
        {activeTab === 'tracker' && (
          <div style={{
            background: 'var(--surface)', border: '1px solid var(--border)',
            borderRadius: 24, padding: '2.25rem', boxShadow: 'var(--shadow-md)',
            maxWidth: 720, margin: '0 auto',
          }}>
            {/* Ticket Search Form */}
            <form onSubmit={handleTrackSearch} className="tracker-form" style={{ marginBottom: '1.75rem' }}>
              <input
                type="text"
                value={ticketInput}
                onChange={e => setTicketInput(e.target.value)}
                placeholder="Enter Ticket ID (e.g. AB-4801)"
                className="input-sleek"
                style={{ textTransform: 'uppercase' }}
              />
              <button
                type="submit"
                style={{
                  padding: '0.85rem 1.5rem', borderRadius: 12, border: 'none',
                  background: 'var(--primary)', color: '#fff', fontWeight: 600,
                  fontSize: '0.875rem', cursor: 'pointer', whiteSpace: 'nowrap',
                }}
              >
                Track 🔎
              </button>
            </form>

            {/* Sample Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.75rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.78rem', color: 'var(--muted)', fontWeight: 500 }}>Try Demo Tickets:</span>
              {Object.keys(DEMO_TICKETS).map(code => (
                <button
                  key={code}
                  type="button"
                  onClick={() => { setTicketInput(code); setSearchedTicket(DEMO_TICKETS[code]); setSearchError(null); }}
                  style={{
                    padding: '0.3rem 0.65rem', borderRadius: 99, border: '1px solid var(--border)',
                    background: 'var(--surface-2)', color: 'var(--primary)', fontSize: '0.75rem',
                    fontWeight: 600, cursor: 'pointer',
                  }}
                >
                  {code}
                </button>
              ))}
            </div>

            {searchError && (
              <div style={{ padding: '0.85rem', borderRadius: 12, background: 'rgba(239,68,68,0.1)', color: '#EF4444', fontSize: '0.85rem', fontWeight: 500 }}>
                ⚠️ {searchError}
              </div>
            )}

            {searchedTicket && (
              <div style={{
                background: 'var(--surface-2)', border: '1px solid var(--border)',
                borderRadius: 18, padding: '1.75rem', marginTop: '1rem',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.85rem' }}>
                  <div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text)' }}>
                      Ticket #{searchedTicket.id}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>
                      Owner: {searchedTicket.customerName} · {searchedTicket.device}
                    </div>
                  </div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--primary)', background: 'var(--primary-light)', padding: '0.3rem 0.75rem', borderRadius: 99 }}>
                    {searchedTicket.updatedAt}
                  </div>
                </div>

                {/* Progress Tracker */}
                <div style={{ overflowX: 'auto', paddingBottom: '0.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', margin: '2rem 0 1.5rem', minWidth: 320 }}>
                    <div style={{
                      position: 'absolute', top: 16, left: '5%', right: '5%', height: 2,
                      background: 'var(--border)', zIndex: 1,
                    }} />
                  <div style={{
                    position: 'absolute', top: 16, left: '5%',
                    width: `${((searchedTicket.step - 1) / (TRACKER_STEPS.length - 1)) * 90}%`,
                    height: 2, background: 'var(--primary)', zIndex: 2, transition: 'width 0.4s ease',
                  }} />

                  {TRACKER_STEPS.map(s => {
                    const isCompleted = s.step <= searchedTicket.step;
                    const isCurrent = s.step === searchedTicket.step;

                    return (
                      <div key={s.step} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 3, position: 'relative' }}>
                        <div style={{
                          width: 34, height: 34, borderRadius: '50%',
                          background: isCompleted ? 'var(--primary)' : 'var(--surface)',
                          color: isCompleted ? '#fff' : 'var(--muted)',
                          border: `2px solid ${isCurrent ? 'var(--primary)' : 'var(--border)'}`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: '0.8rem', fontWeight: 700,
                        }}>
                          {s.step}
                        </div>
                        <span style={{ fontSize: '0.75rem', fontWeight: isCurrent ? 700 : 500, color: isCurrent ? 'var(--text)' : 'var(--muted)', marginTop: '0.5rem' }}>
                          {s.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

                <div style={{ background: 'var(--surface)', borderRadius: 12, padding: '0.85rem 1rem', border: '1px solid var(--border)' }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.2rem' }}>
                    📝 Latest Status Note:
                  </div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text)' }}>
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
