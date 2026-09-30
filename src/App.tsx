import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeProvider';
import { LanguageProvider } from './context/LanguageProvider';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AdminShortcut from './components/AdminShortcut';
import { TelegramIcon } from './components/SocialIcons';

// Code split heavy admin dashboard for performance
const Admin = lazy(() => import('./pages/Admin'));

export default function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Router>
          <AdminShortcut />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <Home />
                  <Footer />
                  {/* Floating Telegram Button */}
                  <a
                    href="https://t.me/Abule_48"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="telegram-float"
                    aria-label="Chat with us on Telegram"
                  >
                    <span className="telegram-tooltip">Chat with us!</span>
                    <TelegramIcon size={26} color="white" />
                  </a>
                </>
              }
            />
            <Route
              path="/admin/*"
              element={
                <Suspense fallback={
                  <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)', color: 'var(--text)' }}>
                    Loading Admin Portal...
                  </div>
                }>
                  <Admin />
                </Suspense>
              }
            />
          </Routes>
        </Router>
      </ThemeProvider>
    </LanguageProvider>
  );
}
