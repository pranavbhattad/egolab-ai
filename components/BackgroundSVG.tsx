
import React from 'react';

const BackgroundSVG: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-black"></div>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="opacity-[0.15]">
        <defs>
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.5" />
            <circle cx="0" cy="0" r="1" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {/* Animated Scanning Line */}
        <rect x="0" y="0" width="100%" height="1" fill="white" className="animate-scan" />

        {/* Floating Geometric Elements */}
        <g className="animate-drift opacity-40">
           <circle cx="20%" cy="30%" r="200" fill="none" stroke="white" strokeWidth="0.2" />
           <circle cx="80%" cy="70%" r="300" fill="none" stroke="white" strokeWidth="0.2" />
        </g>
      </svg>
      
      {/* Radial Gradient for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_80%)]"></div>
      
      <style>{`
        @keyframes scan {
          0% { transform: translateY(0vh); opacity: 0; }
          50% { opacity: 0.5; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        .animate-scan {
          animation: scan 8s linear infinite;
        }
        @keyframes drift {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(50px, 30px); }
        }
        .animate-drift {
          animation: drift 20s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default BackgroundSVG;
