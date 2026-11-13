import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ShowcaseGallery } from './components/ShowcaseGallery';
import { Manifesto } from './components/Manifesto';
import { Method } from './components/Method';
import { TargetAudience } from './components/TargetAudience';
import { AboutAuthor } from './components/AboutAuthor';
import { BookConversion } from './components/BookConversion';
import { A2MAssistant } from './components/A2MAssistant';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-primary text-slate-100 flex flex-col font-sans selection:bg-brand-cyan/30 selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ShowcaseGallery />
        <Manifesto />
        <Method />
        <TargetAudience />
        <AboutAuthor />
        <BookConversion />
        <A2MAssistant />
      </main>
      <Footer />
    </div>
  );
};

export default App;

