import React, { useState } from 'react';
import { Mail, Lock, ArrowRight, Github, Chrome } from 'lucide-react';

export default function AuthSection({ onSuccess }) {
  const [mode, setMode] = useState('signup');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onSuccess?.();
    }, 900);
  };

  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          <div className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-8 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-slate-900">
                {mode === 'signup' ? 'Create your account' : 'Welcome back'}
              </h2>
              <button
                onClick={() => setMode(mode === 'signup' ? 'login' : 'signup')}
                className="text-sm text-slate-600 hover:text-slate-900"
              >
                {mode === 'signup' ? 'Have an account? Log in' : "New here? Sign up"}
              </button>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {mode === 'signup' && (
                <div>
                  <label className="block text-sm font-medium text-slate-700">Full name</label>
                  <input required type="text" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500" placeholder="Ada Lovelace" />
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <div className="mt-1 flex items-center gap-2 rounded-xl border border-slate-300 px-3 focus-within:ring-2 focus-within:ring-violet-500">
                  <Mail size={16} className="text-slate-400" />
                  <input required type="email" className="w-full py-2 outline-none" placeholder="you@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Password</label>
                <div className="mt-1 flex items-center gap-2 rounded-xl border border-slate-300 px-3 focus-within:ring-2 focus-within:ring-violet-500">
                  <Lock size={16} className="text-slate-400" />
                  <input required type="password" className="w-full py-2 outline-none" placeholder="••••••••" />
                </div>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 text-white px-4 py-2.5 font-medium shadow hover:shadow-lg transition disabled:opacity-60"
              >
                {mode === 'signup' ? 'Create account' : 'Log in'}
                <ArrowRight size={16} />
              </button>

              <div className="relative py-2 text-center text-xs text-slate-500">
                <span className="bg-white px-2 relative z-10">or continue with</span>
                <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-slate-200" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-slate-800 hover:bg-slate-50 transition"
                >
                  <Chrome size={16} /> Google
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-slate-800 hover:bg-slate-50 transition"
                >
                  <Github size={16} /> GitHub
                </button>
              </div>
            </form>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-violet-50 via-sky-50 to-amber-50 p-8">
            <div className="max-w-md">
              <h3 className="text-xl font-semibold text-slate-900">Your AI coach for standout presentations</h3>
              <p className="mt-2 text-slate-600">
                Get scoring and feedback on pace, clarity, filler words, sentiment, and presence. Actionable tips help you improve with each take.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                <li>• Detects filler words and suggests replacements</li>
                <li>• Highlights moments needing stronger emphasis</li>
                <li>• Audio loudness and clarity checks</li>
                <li>• Body language and eye-contact cues</li>
              </ul>
            </div>
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.12),transparent_60%)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
