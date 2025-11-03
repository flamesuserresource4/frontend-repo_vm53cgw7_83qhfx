import React from 'react';
import { Bot, Play, LayoutDashboard, LogIn } from 'lucide-react';

export default function Navbar({ currentView, onNavigate }) {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 font-semibold text-slate-900 hover:opacity-80 transition"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-violet-500 via-sky-500 to-amber-400 text-white">
            <Bot size={18} />
          </span>
          <span>Vibe AI Presenter</span>
        </button>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <button
            onClick={() => onNavigate('home')}
            className={`inline-flex items-center gap-2 hover:text-slate-900 transition ${currentView === 'home' ? 'text-slate-900' : 'text-slate-600'}`}
          >
            <Play size={16} /> Home
          </button>
          <button
            onClick={() => onNavigate('dashboard')}
            className={`inline-flex items-center gap-2 hover:text-slate-900 transition ${currentView === 'dashboard' ? 'text-slate-900' : 'text-slate-600'}`}
          >
            <LayoutDashboard size={16} /> Dashboard
          </button>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('signup')}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-900 shadow-sm hover:shadow transition"
          >
            <LogIn size={16} /> Sign up / Login
          </button>
        </div>
      </div>
    </header>
  );
}
