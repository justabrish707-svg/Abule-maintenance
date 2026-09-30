import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { STATS } from '../data/content';

function AnimatedNumber({ target }: { target: string }) {
  const [display, setDisplay] = useState('0');
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const num = parseFloat(target.replace(/[^0-9.]/g, ''));
        const suffix = target.replace(/[0-9.]/g, '');
        if (isNaN(num)) { setDisplay(target); return; }
        const duration = 1400;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          const val = num * ease;
          setDisplay((Number.isInteger(num) ? Math.round(val) : val.toFixed(1)) + suffix);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return <div ref={ref}>{display}</div>;
}

const STAT_KEYS: Record<string, 'stat_devices' | 'stat_success' | 'stat_turnaround' | 'stat_rating'> = {
  'Devices Repaired': 'stat_devices',
  'Success Rate': 'stat_success',
  'Avg. Turnaround': 'stat_turnaround',
  'Customer Rating': 'stat_rating',
};

export default function Stats() {
  const { t } = useLanguage();

  return (
    <section style={{
      padding: '3rem 0',
      background: 'var(--surface-2)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
        <div className="stats-grid" style={{ alignItems: 'center' }}>
          {STATS.map((s) => (
            <div
              key={s.num}
              style={{
                padding: '1.25rem 1rem',
                textAlign: 'center',
              }}
            >
              <div style={{
                fontSize: 'clamp(1.75rem, 4.5vw, 2.5rem)',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                color: 'var(--text)',
                lineHeight: 1.1,
                marginBottom: '0.25rem',
              }}>
                <AnimatedNumber target={s.num} />
              </div>
              <div style={{
                fontSize: '0.825rem',
                fontWeight: 500,
                color: 'var(--muted)',
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
              }}>
                {STAT_KEYS[s.label] ? t(STAT_KEYS[s.label]) : s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
