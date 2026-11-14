import React from 'react';
import { ShowcaseGallery } from './components/ShowcaseGallery';
import { Manifesto } from './components/Manifesto';
import { Method } from './components/Method';
import { AboutAuthor } from './components/AboutAuthor';
import { BookConversion } from './components/BookConversion';
import { A2MAssistant } from './components/A2MAssistant';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans selection:bg-slate-200 selection:text-gray-900">
      <main className="flex-grow">
        <ShowcaseGallery />
        <Manifesto />
        <Method />
        <AboutAuthor />
        <BookConversion />
        <A2MAssistant />
      </main>
    </div>
  );
};

export default App;
