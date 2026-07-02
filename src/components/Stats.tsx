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
        // Extract numeric part
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

export default function Stats() {
  return (
    <section style={{ padding: '5rem 0', background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
      {/* Subtle background glow */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 200, background: 'radial-gradient(ellipse, rgba(99,102,241,0.06), transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 1.5rem', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', position: 'relative' }}>
        {STATS.map((s, i) => (
          <div
            key={s.num}
            style={{
              padding: '1.5rem', textAlign: 'center', borderRadius: 20,
              border: '1px solid var(--border)',
              background: 'var(--surface-2)',
              transition: 'all 0.3s ease',
              position: 'relative', overflow: 'hidden',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(99,102,241,0.3)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(99,102,241,0.1)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = ''; }}
          >
            {/* Top gradient bar */}
            <div style={{
              position: 'absolute', top: 0, left: '20%', right: '20%', height: 2,
              background: `linear-gradient(90deg, ${['#6366F1', '#EC4899', '#14B8A6', '#F59E0B'][i]}, transparent)`,
              borderRadius: '0 0 4px 4px',
            }} />
            <div style={{ fontSize: '2.8rem', fontWeight: 900, letterSpacing: '-0.05em', marginBottom: '0.35rem', background: `linear-gradient(135deg, ${['#6366F1','#EC4899','#14B8A6','#F59E0B'][i]}, ${['#8B5CF6','#F472B6','#0D9488','#FBBF24'][i]})`, WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              <AnimatedNumber target={s.num} />
            </div>
            <div style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--muted)' }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
