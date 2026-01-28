
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-8" }) => {
  return (
    <div className={`flex items-center select-none group ${className}`}>
      <span className="text-2xl font-[900] tracking-tighter leading-none text-white relative">
        egolab.ai
        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-500"></span>
      </span>
    </div>
  );
};

export default Logo;
