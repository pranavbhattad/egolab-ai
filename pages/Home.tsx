
import React from 'react';
import DataVisualizer from '../components/DataVisualizer';

const Home: React.FC = () => {
  return (
    <div className="px-6 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-[9px] mono uppercase tracking-[0.2em] font-bold text-white/60">India's First Egocentric Data Network</span>
          </div>
          
          <h1 className="text-4xl md:text-[5.5rem] font-[900] tracking-tighter leading-[0.85] mb-6 glow-text">
            Teaching Robots <br/>To Use Hands.
          </h1>
          
          <p className="text-lg md:text-xl text-white/50 leading-tight mb-8 font-medium">
            AI can't learn fine motor skills from ceiling cameras. We capture <span className="text-white">Exactly what the expert sees</span> to build the world's highest-density dexterity dataset.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <button 
              onClick={() => document.getElementById('access')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative bg-white text-black px-10 py-5 font-black uppercase tracking-[0.3em] text-[12px] rounded-full overflow-hidden transition-all active:scale-95"
            >
                <span className="relative z-10">Request Datasets</span>
                <div className="absolute inset-0 bg-white/80 group-hover:scale-105 transition-transform duration-500"></div>
            </button>
            <div className="text-[12px] mono uppercase tracking-widest opacity-60 leading-relaxed border-l border-white/10 pl-4">
              4K Raw Video • 60 FPS • <br/>AI Motion Annotated
            </div>
          </div>
        </div>

        <div className="relative group">
           <div className="absolute -inset-1 bg-gradient-to-r from-white/10 to-transparent blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
           <DataVisualizer />
        </div>
      </div>
    </div>
  );
};

export default Home;
