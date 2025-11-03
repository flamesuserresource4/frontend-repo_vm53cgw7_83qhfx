import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesGrid from './components/FeaturesGrid';
import AuthSection from './components/AuthSection';
import Dashboard from './components/Dashboard';

function Footer() {
  return (
    <footer className="py-10 border-t border-black/5 bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600">© {new Date().getFullYear()} Vibe AI Presenter. All rights reserved.</p>
        <div className="text-sm text-slate-500">Built with care for creators and teams.</div>
      </div>
    </footer>
  );
}

export default function App() {
  const [view, setView] = useState('home');

  const handleNavigate = (v) => setView(v);
  const handleAuthSuccess = () => setView('dashboard');

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-white to-slate-50 text-slate-900">
      <Navbar currentView={view} onNavigate={handleNavigate} />

      {view === 'home' && (
        <main>
          <HeroSection onGetStarted={() => setView('signup')} />
          <FeaturesGrid />
        </main>
      )}

      {view === 'signup' && (
        <main>
          <AuthSection onSuccess={handleAuthSuccess} />
        </main>
      )}

      {view === 'dashboard' && (
        <main>
          <Dashboard />
        </main>
      )}

      <Footer />
    </div>
  );
}
