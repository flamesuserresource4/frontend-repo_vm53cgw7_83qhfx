import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Shield, Bot, Video, Mic, Zap } from 'lucide-react';

const features = [
  {
    icon: <Cpu className="h-5 w-5 text-fuchsia-300" />,
    title: 'AI Slide Intelligence',
    desc: 'Detect clutter, contrast issues, and layout risks with pixel-level analysis.',
  },
  {
    icon: <Mic className="h-5 w-5 text-blue-300" />,
    title: 'Voice & Pace Coach',
    desc: 'Get instant feedback on tone, pauses, and engagement markers.',
  },
  {
    icon: <Video className="h-5 w-5 text-violet-300" />,
    title: 'Delivery Heatmaps',
    desc: 'See attention hotspots and drift areas across your presentation.',
  },
  {
    icon: <Shield className="h-5 w-5 text-emerald-300" />,
    title: 'Private by Design',
    desc: 'On-device preprocessing and encrypted pipelines keep you safe.',
  },
  {
    icon: <Bot className="h-5 w-5 text-pink-300" />,
    title: 'Copilot Suggestions',
    desc: 'Rewrite slides, improve story arcs, and auto-generate speaker notes.',
  },
  {
    icon: <Zap className="h-5 w-5 text-yellow-300" />,
    title: 'Realtime Insights',
    desc: 'Latency-optimized engine streams tips while you present.',
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="pointer-events-none absolute inset-x-0 -top-10 mx-auto h-40 max-w-4xl bg-[radial-gradient(closest-side,rgba(168,85,247,0.35),transparent)]" />
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl md:text-5xl font-bold text-white"
      >
        Built for Presenters who love the Future
      </motion.h2>
      <p className="mt-3 text-center text-white/70 max-w-2xl mx-auto">
        Precision tools wrapped in a playful, cyber aesthetic. It looks wild because it is.
      </p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-5 backdrop-blur-xl"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden>
              <div className="absolute -inset-24 rotate-12 bg-gradient-to-r from-fuchsia-500/20 via-violet-500/20 to-blue-500/20 blur-2xl" />
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black/60 border border-white/10">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">{f.title}</h3>
            </div>
            <p className="mt-3 text-sm text-white/70">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
