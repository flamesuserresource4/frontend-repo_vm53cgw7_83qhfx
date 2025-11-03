import React from 'react';
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import FeaturesGrid from './components/FeaturesGrid.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const handleGetStarted = () => {
    const el = document.getElementById('features');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Navbar onGetStarted={handleGetStarted} />
      <main>
        <HeroSection onGetStarted={handleGetStarted} />
        <FeaturesGrid />
      </main>
      <Footer />
    </div>
  );
}
