import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Video, TextCursorInput, Gauge, Wand2 } from 'lucide-react';

const features = [
  {
    icon: <Mic size={18} />, title: 'Voice intelligence',
    desc: 'Detects filler words, measures pace, and evaluates clarity to keep your delivery sharp.'
  },
  {
    icon: <Video size={18} />, title: 'Video presence',
    desc: 'Analyzes eye contact, posture, and gestures to improve your on-camera confidence.'
  },
  {
    icon: <Gauge size={18} />, title: 'Scoring & trends',
    desc: 'Track your progress with scores and insights that get better with every session.'
  },
  {
    icon: <Wand2 size={18} />, title: 'Actionable tips',
    desc: 'Personalized recommendations to practice exactly what will move your score the most.'
  },
];

export default function FeaturesGrid() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Built for presenters who want results</h2>
          <p className="mt-3 text-slate-600">Everything you need to record, analyze, and get feedback in minutes.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.05 * i }}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-violet-500 via-sky-500 to-amber-400 text-white">
                {f.icon}
              </div>
              <h3 className="mt-3 font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
