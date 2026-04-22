/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Network, Table, Database, FileCheck, Brain, Shield, Lock, LayoutGrid } from 'lucide-react';

const highStakesWords = ['Finance', 'Consulting', 'Enterprise'];

export function CapabilitiesGrid() {
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const capabilities = [
    { icon: Network, title: 'Agentic Retrieval', desc: "Intelligent agents that don't just search—they hunt for meaning across formats." },
    { icon: Table, title: 'Excel-Native Search', desc: 'Direct indexing of cell-level data and formulas in complex underwriting models.' },
    { icon: Database, title: 'Graph RAG Knowledge', desc: 'Understand how a PDF deck from Portfolio Company A relates to an Excel in B.' },
    { icon: FileCheck, title: 'Source-Cited Synthesis', desc: 'Zero hallucination. Every response includes a direct link to the source document.' },
    { icon: Brain, title: 'Institutional Memory', desc: 'Capture deal logic even after the lead associate has departed the firm.' },
    { icon: Shield, title: 'Enterprise Security', desc: 'Multi-layered protection and industry-certified security standards safeguard every document.' }
  ];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveWordIndex((current) => (current + 1) % highStakesWords.length);
    }, 2200);

    return () => window.clearInterval(interval);
  }, [highStakesWords.length]);

  return (
    <section id="use-cases" className="bg-background scroll-mt-20 py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 text-center text-4xl font-semibold tracking-tight text-white md:text-5xl">
          Built for High-Stakes{' '}
          <span className="relative inline-block w-[11ch] align-baseline text-left text-ember-orange">
            <span aria-hidden="true" className="invisible">
              Enterprise
            </span>
            <span className="absolute left-0 right-0 top-0 bottom-[-0.2em] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={highStakesWords[activeWordIndex]}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="absolute left-0 top-0 leading-[inherit]"
                >
                  {highStakesWords[activeWordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group rounded-card border border-zinc-800 bg-deep-slate p-8 hover:bg-black/40 transition-colors"
            >
              <cap.icon className="h-8 w-8 text-ember-orange mb-4" />
              <h3 className="mb-2 text-xl font-semibold text-white">{cap.title}</h3>
              <p className="leading-relaxed text-zinc-400">{cap.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SecuritySection() {
  const pillars = [
    {
      icon: Shield,
      title: 'Secure',
      desc: 'Your data stays under your control with multi-layer protection and industry-certified security standards.'
    },
    {
      icon: Lock,
      title: 'Sovereign',
      desc: 'Secure within your virtual private cloud (VPC), on-premise, or dedicated Ember data vault.'
    },
    {
      icon: LayoutGrid,
      title: 'Customizable',
      desc: 'Made for your use cases, needs, and infrastructure: integrated into your workflows.'
    }
  ];

  return (
    <section id="security" className="grain-bottom-ember scroll-mt-20 py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="mx-auto max-w-4xl text-center text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
          Secure, sovereign, customizable
        </h2>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="rounded-card border border-zinc-800 bg-deep-slate p-8 text-center">
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-ember-orange/15 text-ember-orange">
                <pillar.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-white">{pillar.title}</h3>
              <p className="leading-relaxed text-zinc-400">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
