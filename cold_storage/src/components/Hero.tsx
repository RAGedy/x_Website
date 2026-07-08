/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-semibold text-ember-orange">Ember</div>
        </div>
        
        <div className="hidden items-center gap-10 md:flex">
          {['Platform', 'Use Cases', 'Security'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-ember-orange"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <button className="rounded-full bg-ember-orange px-6 py-2 text-sm font-semibold text-black transition-all hover:brightness-110 active:scale-95">
            Book a Demo
          </button>
        </div>
      </div>
    </nav>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-8"
          >
            <h1 className="text-5xl md:text-7xl leading-[1.05] font-semibold tracking-tight text-white">
              Never lose a document again.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-zinc-400">
              Ember reads every drive your firm touches and turns it into an intelligent, cited answer engine. Your team asks questions the way they ask colleagues; Ember answers with sources.
            </p>
            <div className="flex flex-wrap gap-4 pt-4 text-white">
              <button className="rounded-full bg-ember-orange px-8 py-4 font-semibold text-black transition-all hover:brightness-110 active:scale-95 shadow-lg shadow-ember-orange/20">
                Book a Demo
              </button>
              <button className="flex items-center gap-2 rounded-full border border-border-cool px-8 py-4 font-semibold transition-all hover:bg-white/5 active:scale-95">
                See How It Works
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-ember-orange/10 rounded-card blur-3xl" />
            <div className="relative rounded-card border border-border-cool bg-deep-slate p-4 shadow-2xl overflow-hidden group">
              <div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-4">
                <div className="flex space-x-1.5">
                  <div className="w-2 h-2 rounded-full bg-zinc-700" />
                  <div className="w-2 h-2 rounded-full bg-zinc-700" />
                  <div className="w-2 h-2 rounded-full bg-zinc-700" />
                </div>
                <div className="flex-1 bg-black/40 rounded-full px-4 py-1 text-[10px] text-zinc-500 italic border border-white/5">
                  Search: "Show me Q3 revenue growth for Portfolio X vs. underwriting memo"
                </div>
              </div>
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc-1KnnP82fOY0KEqKINrKSTC_keWLoMJosZUrEYC_N9VXaU0UIGwPAoJR5EdosWc-24Iv50b4-8IxrKow1QGfUwBH5fZ-hAymf5dIa7Pvg2g1mw5npU8KTElsiUOKhb7z1Z0YvIkrimDzhJMJZQmHksm34ImImlFUYd7_Z3oY22JDgdfTKj5AoP4Na7TXtuNkPfccMiTFHZtYLWcE08E4-SFxV9ib3_AKmAdYBBlJFu9WfrZX0xhOyf2QEvwCe968Ij-SRz6EfYI" 
                alt="Ember Interface"
                className="rounded-xl opacity-90 transition-opacity group-hover:opacity-100"
              />
              <div className="absolute bottom-10 right-10 max-w-[200px] rounded-xl border border-ember-orange/30 bg-black/90 p-4 shadow-2xl backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-2 text-ember-orange">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[10px] font-semibold uppercase text-white">Source Verified</span>
                </div>
                <p className="text-[10px] text-zinc-400">Referenced in: 2023_Q3_Underwriting_Memo.pdf (p.14)</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
