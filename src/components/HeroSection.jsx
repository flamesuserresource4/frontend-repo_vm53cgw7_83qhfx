import React from 'react';
import Spline from '@splinetool/react-spline';
import { Mic, Video, Sparkles } from 'lucide-react';

export default function HeroSection({ onGetStarted }) {
  return (
    <section className="relative overflow-hidden">
      <div className="relative w-full h-[70vh] md:h-[80vh]">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.15),rgba(14,165,233,0.12),rgba(251,146,60,0.08)_70%)]" />
      </div>

      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <div className="backdrop-blur-sm bg-white/60 rounded-2xl p-6 md:p-8 shadow-xl border border-white/50">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-sky-500 text-white px-3 py-1 text-xs font-medium">
              <Sparkles size={14} /> AI presentation analysis
            </div>
            <h1 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
              Turn your talk into actionable insights
            </h1>
            <p className="mt-4 text-slate-600 text-base md:text-lg">
              Upload or record your presentation. Our AI reviews your delivery, pacing, clarity, and body language, then provides instant, prioritized feedback.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={onGetStarted}
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white px-5 py-3 font-medium shadow hover:shadow-lg transition"
              >
                Get Started
              </button>
              <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700">
                <Video size={16} /> Video & <Mic size={16} /> Audio analyzed
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
