/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Linkedin, Mail } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="hero-gradient border-t border-zinc-900 bg-hero-purple py-24 px-6 text-center text-white">
      <div className="mx-auto max-w-3xl space-y-8">
        <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          Ready to put AI to work?
        </h2>
        <div className="flex flex-wrap justify-center gap-6 pt-4">
          <button className="rounded-full bg-white px-10 py-5 font-semibold text-black transition-all hover:bg-ember-orange active:scale-95">
            Request a Demo
          </button>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-zinc-950 py-16 border-t border-zinc-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:items-end lg:justify-between">
          <div className="flex flex-col gap-6">
            <div className="text-2xl font-semibold text-ember-orange">Ember</div>
            <p className="max-w-xs text-sm leading-relaxed text-zinc-500">
              Copyright 2025 Ember AI
            </p>
            <div className="flex gap-4 text-zinc-500">
              <a href="#" className="transition-colors hover:text-ember-orange"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="transition-colors hover:text-ember-orange"><Mail className="h-5 w-5" /></a>
            </div>
          </div>
          
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 text-xs md:mt-0">
            {['Terms of Service', 'Privacy Policy', 'Security Compliance', 'Contact Support'].map((link) => (
              <a key={link} href="#" className="text-zinc-500 transition-colors hover:text-ember-orange">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
