/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar, Hero } from './components/Hero';
import { TrustBand, ProblemSection, SolutionSection } from './components/Sections';
import { CapabilitiesGrid, SecuritySection } from './components/Features';
import { FinalCTA, Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-ember-orange selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <TrustBand />
        <ProblemSection />
        <SolutionSection />
        <CapabilitiesGrid />
        <SecuritySection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
