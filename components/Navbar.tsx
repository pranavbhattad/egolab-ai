
import React from 'react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <button onClick={() => scrollTo('hero')} className="hover:opacity-80 transition-opacity">
          <Logo className="h-5" />
        </button>

        <div className="hidden md:flex items-center space-x-10">
          {[
            { label: 'Intelligence', id: 'hero' },
            { label: 'How it works', id: 'how-it-works' },
            { label: 'Get Access', id: 'access' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-[12px] uppercase tracking-[0.4em] font-bold opacity-70 hover:opacity-100 transition-all hover:text-white"
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollTo('access')}
          className="bg-white text-black px-4 py-1.5 text-[12px] font-black uppercase tracking-[0.2em] hover:scale-105 transition-all rounded-full"
        >
          Access Data
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
