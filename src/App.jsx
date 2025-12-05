import React from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Features from './sections/Features';
import HowItWorks from './sections/HowItWorks';
import Waitlist from './sections/Waitlist';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-brand-500/30 selection:text-brand-200">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}

export default App;
