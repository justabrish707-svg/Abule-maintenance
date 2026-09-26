import { useEffect, useRef, useState } from 'react';
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
        const duration = 1800;
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

const STAT_ICONS = ['⚡', '⭐️', '🛠️', '⏱️'];

export default function Stats() {
  return (
    <section style={{ padding: '4.5rem 0', background: 'var(--surface-2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
      {/* Background glow effects */}
      <div style={{ position: 'absolute', top: '50%', left: '20%', transform: 'translate(-50%,-50%)', width: 400, height: 200, background: 'radial-gradient(ellipse, rgba(99,102,241,0.08), transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '50%', right: '10%', transform: 'translate(0,-50%)', width: 400, height: 200, background: 'radial-gradient(ellipse, rgba(236,72,153,0.06), transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 1.5rem', position: 'relative' }}>
        <div className="stats-grid">
          {STATS.map((s, i) => {
            const colors = [
              ['#6366F1', '#8B5CF6'],
              ['#EC4899', '#F472B6'],
              ['#14B8A6', '#0D9488'],
              ['#F59E0B', '#FBBF24'],
            ][i % 4];

            return (
              <div
                key={s.num}
                style={{
                  padding: '2rem 1.5rem', textAlign: 'center', borderRadius: 24,
                  border: '1px solid var(--border)',
                  background: 'var(--surface)',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative', overflow: 'hidden',
                  boxShadow: 'var(--shadow-sm)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = `${colors[0]}50`;
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = `0 16px 32px ${colors[0]}18`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                }}
              >
                {/* Top accent glowing bar */}
                <div style={{
                  position: 'absolute', top: 0, left: '25%', right: '25%', height: 3,
                  background: `linear-gradient(90deg, ${colors[0]}, ${colors[1]})`,
                  borderRadius: '0 0 6px 6px',
                }} />

                {/* Mini icon badge */}
                <div style={{
                  width: 38, height: 38, borderRadius: 12, margin: '0 auto 1rem',
                  background: `${colors[0]}12`, border: `1px solid ${colors[0]}25`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.1rem',
                }}>
                  {STAT_ICONS[i % STAT_ICONS.length]}
                </div>

                <div style={{
                  fontSize: '2.75rem', fontWeight: 900, letterSpacing: '-0.05em', marginBottom: '0.25rem',
                  background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`,
                  WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent',
                }}>
                  <AnimatedNumber target={s.num} />
                </div>
                <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--muted)', letterSpacing: '0.01em' }}>
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
