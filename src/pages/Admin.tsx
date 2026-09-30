import { useState, useEffect } from 'react';
import type { FormEvent } from 'react';
import { supabase } from '../utils/supabase';
import type { Session } from '@supabase/supabase-js';

interface Ticket {
  id: string;
  ticket_id: string;
  customer_name: string;
  device: string;
  issue: string;
  status_step: number;
  created_at: string;
}

const STEP_LABELS: Record<number, { label: string; color: string; bg: string }> = {
  1: { label: '1. Dropped Off', color: '#3B82F6', bg: 'rgba(59, 130, 246, 0.12)' },
  2: { label: '2. Diagnostics', color: '#8B5CF6', bg: 'rgba(139, 92, 246, 0.12)' },
  3: { label: '3. Repairing', color: '#F59E0B', bg: 'rgba(245, 158, 11, 0.12)' },
  4: { label: '4. Final Testing', color: '#06B6D4', bg: 'rgba(6, 182, 212, 0.12)' },
  5: { label: '5. Ready for Pickup', color: '#22C55E', bg: 'rgba(34, 197, 94, 0.12)' },
};

export default function Admin() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Dashboard state
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [newTicket, setNewTicket] = useState({
    ticket_id: `AB-${Math.floor(1000 + Math.random() * 9000)}`,
    customer_name: '',
    device: '',
    issue: '',
    status_step: 1,
  });

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) fetchTickets();
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) fetchTickets();
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) setError(error.message);
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const fetchTickets = async () => {
    const { data, error } = await supabase
      .from('tickets')
      .select('*')
      .order('created_at', { ascending: false });

    if (data) setTickets(data);
    if (error) console.error('Error fetching tickets:', error);
  };

  const generateNewTicketId = () => {
    setNewTicket(prev => ({
      ...prev,
      ticket_id: `AB-${Math.floor(1000 + Math.random() * 9000)}`,
    }));
  };

  const handleCreateTicket = async (e: FormEvent) => {
    e.preventDefault();
    if (!newTicket.ticket_id || !newTicket.customer_name || !newTicket.device || !newTicket.issue) {
      alert('Please fill out all fields.');
      return;
    }

    const { data, error } = await supabase
      .from('tickets')
      .insert([newTicket])
      .select();

    if (error) {
      alert(error.message);
    } else if (data) {
      setTickets([data[0], ...tickets]);
      setNewTicket({
        ticket_id: `AB-${Math.floor(1000 + Math.random() * 9000)}`,
        customer_name: '',
        device: '',
        issue: '',
        status_step: 1,
      });
    }
  };

  const updateStatus = async (id: string, newStep: number) => {
    const { error } = await supabase
      .from('tickets')
      .update({ status_step: newStep })
      .eq('id', id);

    if (error) {
      alert(error.message);
    } else {
      setTickets(tickets.map(t => (t.id === id ? { ...t, status_step: newStep } : t)));
    }
  };

  const deleteTicket = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this ticket?')) return;

    const { error } = await supabase
      .from('tickets')
      .delete()
      .eq('id', id);

    if (error) {
      alert(error.message);
    } else {
      setTickets(tickets.filter(t => t.id !== id));
    }
  };

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)', color: 'var(--text)' }}>
        Loading Admin Portal...
      </div>
    );
  }

  // LOGIN SCREEN
  if (!session) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', background: 'var(--bg)' }}>
        <div style={{ background: 'var(--surface)', padding: '3rem', borderRadius: 24, border: '1px solid var(--border)', boxShadow: 'var(--shadow-lg)', maxWidth: 400, width: '100%' }}>
          <h1 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', fontWeight: 800, textAlign: 'center', color: 'var(--text)' }}>Admin Login</h1>
          <p style={{ color: 'var(--muted)', marginBottom: '2rem', textAlign: 'center', fontSize: '0.9rem' }}>Secure access to Abule Tech Portal</p>
          
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {error && (
              <div style={{ color: '#EF4444', fontSize: '0.875rem', padding: '0.75rem', background: 'rgba(239, 68, 68, 0.1)', borderRadius: 8 }}>
                {error}
              </div>
            )}
            
            <div>
              <label htmlFor="admin-email" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', color: 'var(--muted)' }}>Email</label>
              <input
                id="admin-email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="input-sleek"
              />
            </div>
            
            <div>
              <label htmlFor="admin-password" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', color: 'var(--muted)' }}>Password</label>
              <input
                id="admin-password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                className="input-sleek"
              />
            </div>
            
            <button
              type="submit"
              disabled={loading}
              style={{ marginTop: '1rem', padding: '0.875rem', borderRadius: 12, background: 'var(--primary)', color: '#fff', fontWeight: 600, border: 'none', cursor: 'pointer' }}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // DASHBOARD SCREEN
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', padding: '2rem', color: 'var(--text)' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        
        {/* Header */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border)' }}>
          <div>
            <h1 style={{ fontSize: '2rem', fontWeight: 800 }}>Admin Dashboard</h1>
            <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>Manage live repair tickets for Arba Minch shop</p>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            style={{ padding: '0.5rem 1rem', borderRadius: 8, background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600 }}
          >
            Sign Out
          </button>
        </header>

        {/* Create Ticket Form */}
        <div style={{ background: 'var(--surface)', padding: '2rem', borderRadius: 24, border: '1px solid var(--border)', marginBottom: '3rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>➕ Create New Repair Ticket</h2>
            <button
              type="button"
              onClick={generateNewTicketId}
              style={{ fontSize: '0.75rem', padding: '0.35rem 0.75rem', borderRadius: 99, background: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--primary)', cursor: 'pointer', fontWeight: 600 }}
            >
              🎲 New Random ID
            </button>
          </div>

          <form onSubmit={handleCreateTicket} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', alignItems: 'end' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', marginBottom: '0.5rem', color: 'var(--muted)' }}>Ticket ID</label>
              <input type="text" placeholder="AB-4804" value={newTicket.ticket_id} onChange={e => setNewTicket({ ...newTicket, ticket_id: e.target.value })} required className="input-sleek" />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', marginBottom: '0.5rem', color: 'var(--muted)' }}>Customer Name</label>
              <input type="text" placeholder="Abebe Kebede" value={newTicket.customer_name} onChange={e => setNewTicket({ ...newTicket, customer_name: e.target.value })} required className="input-sleek" />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', marginBottom: '0.5rem', color: 'var(--muted)' }}>Device</label>
              <input type="text" placeholder="MacBook Pro" value={newTicket.device} onChange={e => setNewTicket({ ...newTicket, device: e.target.value })} required className="input-sleek" />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', marginBottom: '0.5rem', color: 'var(--muted)' }}>Issue</label>
              <input type="text" placeholder="Screen Replacement" value={newTicket.issue} onChange={e => setNewTicket({ ...newTicket, issue: e.target.value })} required className="input-sleek" />
            </div>
            <button type="submit" style={{ padding: '0.75rem', borderRadius: 12, background: 'var(--primary)', color: '#fff', border: 'none', cursor: 'pointer', fontWeight: 600 }}>
              Add Ticket
            </button>
          </form>
        </div>

        {/* Tickets List */}
        <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', fontWeight: 700 }}>📋 Active Repair Tickets ({tickets.length})</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {tickets.length === 0 ? (
            <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--muted)', background: 'var(--surface)', borderRadius: 16, border: '1px solid var(--border)' }}>
              No active tickets found in database.
            </div>
          ) : (
            tickets.map(ticket => {
              const stepInfo = STEP_LABELS[ticket.status_step] || STEP_LABELS[1];
              return (
                <div key={ticket.id} style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center', justifyContent: 'space-between', background: 'var(--surface)', padding: '1.5rem', borderRadius: 16, border: '1px solid var(--border)' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                      <span style={{ fontWeight: 800, color: 'var(--primary)', fontSize: '1.1rem' }}>{ticket.ticket_id}</span>
                      <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Owner: {ticket.customer_name}</span>
                      <span style={{ fontSize: '0.72rem', fontWeight: 700, color: stepInfo.color, background: stepInfo.bg, padding: '0.2rem 0.6rem', borderRadius: 99 }}>
                        {stepInfo.label}
                      </span>
                    </div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--text)' }}>
                      <strong>{ticket.device}</strong> — {ticket.issue}
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                      <label style={{ fontSize: '0.7rem', color: 'var(--muted)' }}>Update Step (1-5)</label>
                      <select 
                        value={ticket.status_step}
                        onChange={(e) => updateStatus(ticket.id, parseInt(e.target.value, 10))}
                        style={{ padding: '0.5rem', borderRadius: 8, background: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--text)', outline: 'none', fontSize: '0.85rem', fontWeight: 600 }}
                      >
                        <option value={1}>1. Dropped Off</option>
                        <option value={2}>2. Diagnostics</option>
                        <option value={3}>3. Repairing</option>
                        <option value={4}>4. Final Testing</option>
                        <option value={5}>5. Ready for Pickup</option>
                      </select>
                    </div>
                    <button
                      type="button"
                      onClick={() => deleteTicket(ticket.id)}
                      style={{ padding: '0.5rem 0.85rem', marginTop: '1rem', background: 'rgba(239, 68, 68, 0.1)', color: '#EF4444', border: 'none', borderRadius: 8, cursor: 'pointer', fontWeight: 600, fontSize: '0.825rem' }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
