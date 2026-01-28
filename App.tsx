
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import BackgroundSVG from './components/BackgroundSVG';
import HomeSection from './pages/Home';
import AboutSection from './pages/About';
import ContactSection from './pages/Contact';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black text-white selection:bg-white selection:text-black scroll-smooth">
      {loading && <Preloader />}
      <div className={`min-h-screen flex flex-col transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <BackgroundSVG />
        <Navbar />
        <main className="flex-grow">
          {/* Section: Home / Intelligence */}
          <section id="hero" className="min-h-screen flex items-center pt-0 md:text-2xl">
            <HomeSection className="scale-125" />
          </section>

          {/* Section: Methodology / How it works */}
          <section id="how-it-works" className="py-8 border-y border-white/5 bg-zinc-950/20 md:text-2xl">
            <AboutSection />
          </section>

          {/* Section: Contact / Access */}
          <section id="access" className="py-8 md:text-2xl">
            <ContactSection />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
