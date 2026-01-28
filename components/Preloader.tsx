
import React from 'react';

const Preloader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden">
      <div className="relative group">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-white blur-[80px] opacity-10 animate-pulse"></div>
        
        <svg width="120" height="120" viewBox="0 0 100 100" className="relative z-10">
          <circle 
            cx="50" cy="50" r="48" 
            fill="none" 
            stroke="white" 
            strokeWidth="0.5" 
            strokeDasharray="10 5" 
            className="animate-[spin_10s_linear_infinite] opacity-30" 
          />
          <text 
            x="50%" y="50%" 
            dominantBaseline="middle" 
            textAnchor="middle" 
            className="text-[28px] font-black fill-white tracking-tighter"
            style={{ filter: 'drop-shadow(0 0 5px rgba(255,255,255,0.8))' }}
          >
            egolab
          </text>
        </svg>

        <div className="mt-8 flex flex-col items-center">
            <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden">
                <div className="absolute inset-y-0 left-0 bg-white w-1/3 animate-[loading_2s_ease-in-out_infinite]"></div>
            </div>
            <div className="mt-4 text-[9px] mono uppercase tracking-[0.5em] text-white/40">
                Initializing Vision Aggregator
            </div>
        </div>
      </div>
      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
      `}</style>
    </div>
  );
};

export default Preloader;
