import React from 'react';
import { Rocket, Star, User, Settings } from 'lucide-react';

export default function Navbar({ onGetStarted }) {
  return (
    <header className="relative w-full">
      <nav className="mx-auto mt-4 w-[95%] md:w-[90%] flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-4 md:px-6 py-3 shadow-[0_0_60px_-20px_rgba(168,85,247,0.6)]">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-blue-500 p-[2px]">
            <div className="h-full w-full rounded-[10px] bg-black flex items-center justify-center">
              <Rocket className="h-4 w-4 text-fuchsia-400" />
            </div>
          </div>
          <span className="text-sm md:text-base font-semibold tracking-wide bg-gradient-to-r from-fuchsia-300 via-violet-200 to-blue-200 text-transparent bg-clip-text">
            AstroVision
          </span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#showcase" className="hover:text-white transition-colors">Showcase</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs md:text-sm text-white/90 hover:bg-white/10 transition-colors"
            aria-label="Account"
          >
            <User className="h-4 w-4" />
            <span className="hidden md:inline">Sign in</span>
          </button>
          <button
            onClick={onGetStarted}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-blue-500 px-3 md:px-4 py-2 text-xs md:text-sm font-medium text-white shadow-lg shadow-fuchsia-500/30 hover:shadow-violet-500/40 active:scale-[0.98] transition"
          >
            <Star className="h-4 w-4" />
            <span className="hidden md:inline">Get Started</span>
          </button>
        </div>
      </nav>

      {/* Glow underline */}
      <div className="pointer-events-none absolute inset-x-0 top-[88px] mx-auto h-px w-[90%] bg-gradient-to-r from-transparent via-fuchsia-500/40 to-transparent" />
    </header>
  );
}
