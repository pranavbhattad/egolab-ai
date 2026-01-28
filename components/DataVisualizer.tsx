
import React from 'react';

const DataVisualizer: React.FC = () => {
  return (
    <div className="relative w-full aspect-video bg-zinc-900 border border-white/10 overflow-hidden group">
      {/* Simulated Video Frame */}
      <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center grayscale group-hover:scale-110 transition-transform duration-[10s]"></div>
      
      {/* HUD / Overlay */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between mono text-[10px] text-white/80 pointer-events-none">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              <span>LIVE_POV_RECORDING</span>
            </div>
            <div className="opacity-50">CAM_04 // SECTOR_B // PUNE_HUB</div>
          </div>
          <div className="text-right">
            <div>24.42° N, 71.04° E</div>
            <div className="opacity-50">TEMP: 28.4°C // HUM: 42%</div>
          </div>
        </div>

        {/* Bounding Boxes Simulation */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-48 h-48 border border-white/40">
            <div className="absolute top-0 left-0 -translate-x-full -translate-y-full p-1 bg-white text-black text-[8px] font-bold">WELDING_ROD [98.2%]</div>
            <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-white"></div>
            <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-white"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-white"></div>
            <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-white"></div>
          </div>
          <div className="relative w-32 h-32 ml-20 mt-20 border border-white/20">
             <div className="absolute top-0 left-0 -translate-x-full -translate-y-full p-1 bg-white/20 text-white text-[8px] font-bold">ASSEMBLY_COMPONENT_Z [42.1%]</div>
          </div>
        </div>

        <div className="flex justify-between items-end opacity-50">
          <div>FRAME_004122 / 122900</div>
          <div className="flex space-x-4">
             <div className="w-32 h-1 bg-white/10 relative overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-1/2 bg-white/40"></div>
             </div>
             <span>720P // 60FPS</span>
          </div>
        </div>
      </div>

      {/* Grid scanning effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
    </div>
  );
};

export default DataVisualizer;
