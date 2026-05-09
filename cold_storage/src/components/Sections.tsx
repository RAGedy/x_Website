/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { FolderX, Rows3, Hourglass, Check } from 'lucide-react';

export function TrustBand() {
  const partners = [
    {
      name: 'Duke Endowment',
      logo: new URL('../assets/logos/dukeendowment_light.png', import.meta.url).href,
      className: 'max-h-14 max-w-56'
    },
    {
      name: 'DIIG',
      logo: new URL('../assets/logos/DIIG.png', import.meta.url).href,
      className: 'max-h-14 max-w-48'
    },
    {
      name: 'Sapien Labs',
      logo: new URL('../assets/logos/sapien_labs.png', import.meta.url).href,
      className: 'max-h-12 max-w-44'
    },
    {
      name: 'WSU',
      logo: new URL('../assets/logos/WSU.png', import.meta.url).href,
      className: 'max-h-12 max-w-44'
    }
  ];

  return (
    <section className="border-y border-zinc-900 bg-deep-dark py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 items-center gap-8">
          {partners.map((partner) => (
            <div key={partner.name} className="flex h-16 items-center justify-center">
              <img
                src={partner.logo}
                alt={partner.name}
                className={`h-auto w-auto object-contain ${partner.className}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProblemSection() {
  const problems = [
    {
      icon: FolderX,
      title: 'The Folder Labyrinth',
      desc: 'Critical diligence is buried four layers deep in a "Miscellaneous" folder from a deal in 2019.'
    },
    {
      icon: Rows3,
      title: 'Siloed Spreadsheets',
      desc: 'The associate who built the model left two years ago. No one really understands it anymore.'
    },
    {
      icon: Hourglass,
      title: 'Analyst Time Loss',
      desc: "Senior MDs wait hours for simple answers that exist in the system, but aren't discoverable by search."
    }
  ];

  return (
    <section className="grain-black-sand py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="mx-auto max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
            Employees spend 20% of their work week searching for information.{' '}
            <span className="text-ember-orange">Ember</span> reclaims 416 hours per employee, per year.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((prob, idx) => (
            <motion.div
              key={prob.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group rounded-card border border-zinc-800 bg-deep-slate p-8 transition-all hover:border-ember-orange"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 text-ember-orange transition-colors group-hover:bg-ember-orange group-hover:text-black">
                <prob.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-white">{prob.title}</h3>
              <p className="leading-relaxed text-zinc-400">{prob.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SolutionSection() {
  return (
    <section id="platform" className="hero-gradient scroll-mt-20 border-y border-zinc-900 bg-hero-purple py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              Your knowledge, unburied
            </h2>
            <div className="space-y-6">
              {[
                'Connect your CRM, SharePoint, and Cloud Storage in minutes.',
                'Ask questions just like a colleague and receive cited answers from every connected document.',
                'Graph RAG technology maps relationships across distinct asset classes.',
                'Source-cited answers ensure every claim is backed by a document.'
              ].map((text) => (
                <div key={text} className="flex gap-4 items-start">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ember-orange/20">
                    <Check className="h-3 w-3 text-ember-orange" />
                  </div>
                  <p className="text-lg text-white/80">{text}</p>
                </div>
              ))}
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, rotate: -5 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-ember-orange/5 rounded-full blur-3xl opacity-50" />
            <div className="relative rounded-card border border-white/10 bg-black/40 p-2 shadow-2xl overflow-hidden">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiiGjZ5yPBL_Yflmu-Hmf0_g-u3cIbeOsvdb-chO7jxRIP8Zfkfa-mwojROfJmvnxiCCVIOz-PrMpW9rQbJyMXXPg8w-_RuhmqfUQnRsJ8M4aftqXomj8gbl0-sYQmzA1XCoQDQRPysT76ftFi25Nuzsr1C0Ib0MxyQfhbeSHXlK7N9dYHQKuiheq4rOn_hi8t1ejqsvLrhAeHPW_jpnLzrcchZMxjFOlPveWzSANuHvLOZB5oo5ng-PECLjwVZDllLj-P5rA5o80" 
                alt="Knowledge Graph Visualization"
                className="rounded-xl grayscale transition-all duration-700 hover:grayscale-0"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
