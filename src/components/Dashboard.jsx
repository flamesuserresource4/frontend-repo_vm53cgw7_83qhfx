import React from 'react';
import { motion } from 'framer-motion';
import { Upload, Mic, Video, BarChart3, Sparkles } from 'lucide-react';

export default function Dashboard() {
  const cards = [
    { title: 'Delivery score', value: '86%', desc: 'Pace, clarity, and confidence', color: 'from-violet-500 to-fuchsia-500' },
    { title: 'Filler words', value: 'Low', desc: '“um”, “like”, “you know”', color: 'from-amber-500 to-orange-500' },
    { title: 'Audio clarity', value: 'A', desc: 'Consistent loudness & tone', color: 'from-sky-500 to-cyan-500' },
  ];

  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-slate-900">Your dashboard</h2>
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-sky-500 text-white px-3 py-1 text-xs font-medium">
            <Sparkles size={14} /> AI insights
          </div>
        </div>

        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-r ${c.color} text-white h-10 w-10`}> 
                <BarChart3 size={18} />
              </div>
              <h3 className="mt-3 text-sm font-medium text-slate-500">{c.title}</h3>
              <p className="text-2xl font-semibold text-slate-900">{c.value}</p>
              <p className="text-sm text-slate-600 mt-1">{c.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 grid lg:grid-cols-2 gap-6 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm overflow-hidden"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900">Analyze a new presentation</h3>
              <div className="flex gap-2">
                <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-900 hover:shadow">
                  <Mic size={16} /> Record
                </button>
                <button className="inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white px-3 py-2 text-sm font-medium hover:shadow">
                  <Upload size={16} /> Upload
                </button>
              </div>
            </div>
            <motion.div
              className="mt-6 h-40 rounded-xl bg-gradient-to-r from-violet-100 via-sky-100 to-amber-100 border border-slate-200"
              initial={{ backgroundPositionX: '0%' }}
              animate={{ backgroundPositionX: '100%' }}
              transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
              style={{ backgroundSize: '200% 100%' }}
            />
            <p className="mt-3 text-sm text-slate-600">Drag and drop a video, or record right in your browser. We’ll process audio and video for instant feedback.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-slate-900">Recent sessions</h3>
            <div className="mt-4 space-y-3">
              {[1,2,3].map((n) => (
                <div key={n} className="flex items-center justify-between rounded-xl border border-slate-200 p-3">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-violet-500 to-sky-500 text-white">
                      <Video size={16} />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-slate-900">Presentation {n}</p>
                      <p className="text-xs text-slate-600">2 days ago · Score 84%</p>
                    </div>
                  </div>
                  <button className="text-sm font-medium text-violet-600 hover:text-violet-700">View</button>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
