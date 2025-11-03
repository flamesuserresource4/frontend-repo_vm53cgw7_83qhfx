import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Video, Mic, Zap } from 'lucide-react';

export default function HeroSection({ onGetStarted }) {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden rounded-b-[32px] bg-[radial-gradient(1200px_800px_at_10%_-10%,rgba(216,180,254,0.25),transparent),radial-gradient(1000px_600px_at_90%_10%,rgba(96,165,250,0.18),transparent)]">
      {/* Spline Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Vignette and aurora overlays (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
      <div className="pointer-events-none absolute inset-0 opacity-60 mix-blend-screen" aria-hidden>
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-fuchsia-500/30 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_8px_40px_rgba(168,85,247,0.35)]"
          >
            Analyze Presentations in a Futuristic 3D Space
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="mt-4 text-base md:text-lg text-white/80"
          >
            Step into a cyberpunk lab where your slides, speech, and delivery are decoded by AI. Upload, record, and get instant insights with mesmerizing visuals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <button
              onClick={onGetStarted}
              className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-blue-500 px-5 py-3 text-white shadow-[0_20px_60px_-20px_rgba(147,51,234,0.6)] hover:shadow-[0_30px_80px_-20px_rgba(59,130,246,0.55)] transition"
            >
              <Zap className="h-5 w-5" />
              Get Started
            </button>
            <button className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-black/40 px-5 py-3 text-white/90 backdrop-blur-md hover:bg-white/10 transition">
              <Video className="h-5 w-5" />
              Upload Video
            </button>
            <button className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-black/40 px-5 py-3 text-white/90 backdrop-blur-md hover:bg-white/10 transition">
              <Mic className="h-5 w-5" />
              Start Recording
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 text-sm text-white/60"
          >
            Powered by real-time AI insights • Immersive 3D visuals • Cyber-grade privacy
          </motion.div>
        </div>
      </div>
    </section>
  );
}
