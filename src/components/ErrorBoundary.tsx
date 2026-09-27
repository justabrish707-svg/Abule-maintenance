import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  public override state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public override componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('[Application Crash Caught by ErrorBoundary]:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  public override render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          background: 'var(--bg, #090D16)',
          color: 'var(--text, #F8FAFC)',
          fontFamily: "'Inter', sans-serif",
        }}>
          <div style={{
            maxWidth: 520,
            width: '100%',
            background: 'var(--surface, #0F1626)',
            border: '1px solid var(--border, rgba(255,255,255,0.1))',
            borderRadius: 24,
            padding: '2.5rem 2rem',
            textAlign: 'center',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
          }}>
            <div style={{
              width: 56,
              height: 56,
              borderRadius: 18,
              background: 'rgba(239, 68, 68, 0.12)',
              border: '1px solid rgba(239, 68, 68, 0.25)',
              color: '#EF4444',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.75rem',
              margin: '0 auto 1.25rem',
            }}>
              ⚠️
            </div>

            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>
              Something went unexpected
            </h2>

            <p style={{ fontSize: '0.9rem', color: 'var(--muted, #94A3B8)', lineHeight: 1.6, marginBottom: '2rem' }}>
              The application encountered a client-side exception. Don't worry, your data is safe.
            </p>

            {this.state.error && import.meta.env.DEV && (
              <pre style={{
                background: 'rgba(0,0,0,0.3)',
                padding: '0.85rem',
                borderRadius: 12,
                fontSize: '0.75rem',
                color: '#EF4444',
                textAlign: 'left',
                overflowX: 'auto',
                marginBottom: '1.5rem',
                fontFamily: 'monospace',
              }}>
                {this.state.error.message}
              </pre>
            )}

            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={this.handleReset}
                style={{
                  padding: '0.75rem 1.75rem',
                  borderRadius: 99,
                  background: 'var(--primary, #6366F1)',
                  color: '#fff',
                  border: 'none',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  transition: 'opacity 0.2s',
                }}
              >
                🔄 Reload Application
              </button>

              <a
                href="https://wa.me/251954897133"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '0.75rem 1.75rem',
                  borderRadius: 99,
                  background: 'var(--surface-2, #141E33)',
                  border: '1px solid var(--border, rgba(255,255,255,0.1))',
                  color: 'var(--text, #F8FAFC)',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                💬 Contact Support
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
