import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DirectorMessage from './components/DirectorMessage';
import NewsSection from './components/NewsSection';
import MetricsPanel from './components/MetricsPanel';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 dark:bg-gray-900">
      <Header />
      <main>
        <Hero />
        <DirectorMessage />
        <NewsSection />
        <MetricsPanel />
      </main>
      <Footer />
    </div>
  );
}

export default App;