import { FEATURES } from '../data/content';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function About() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="about" className="py-32" style={{ background: 'var(--surface)' }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Visual */}
          <div
            className={`relative pb-[100%] rounded-[32px] overflow-hidden reveal ${isVisible ? 'active' : ''}`}
            style={{ background: 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05)' }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '60%', height: '60%', background: 'conic-gradient(from 180deg at 50% 50%, #6366F1, #EC4899, #8B5CF6, #6366F1)', filter: 'blur(40px)', opacity: 0.15, animation: 'spin 10s linear infinite' }} />
              <div className="relative z-10 text-center">
                <div className="text-7xl mb-4">🔧</div>
                <div className="text-6xl font-extrabold" style={{ color: 'var(--primary)' }}>98%</div>
                <div className="text-sm font-semibold mt-2" style={{ color: 'var(--muted)' }}>Success Rate</div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div
            ref={ref as React.RefObject<HTMLDivElement>}
            className={`reveal ${isVisible ? 'active' : ''}`}
            style={{ transitionDelay: '150ms' }}
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6" style={{ background: 'rgba(99,102,241,0.1)', color: 'var(--primary)' }}>
              Our Promise
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4" style={{ color: 'var(--text)' }}>
              Built on Trust.<br />
              <span className="gradient-text">Delivered with Precision.</span>
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--muted)' }}>
              We believe in total transparency. Every repair starts with a free diagnosis, a clear written estimate, and your full approval — before we touch anything. No hidden fees, ever.
            </p>
            <ul className="list-none space-y-4">
              {FEATURES.map(f => (
                <li key={f} className="flex items-start gap-4 text-base" style={{ color: 'var(--text)' }}>
                  <div className="min-w-[28px] h-7 rounded-full flex items-center justify-center text-sm text-white shrink-0" style={{ background: 'var(--primary)' }}>✓</div>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
