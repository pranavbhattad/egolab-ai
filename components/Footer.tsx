
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-24">
        <div className="col-span-1 md:col-span-2">
          <Logo className="mb-10 scale-110 origin-left" />
          <p className="text-lg text-white/40 max-w-sm leading-tight mb-12 font-medium">
            "The world's highest density egocentric manufacturing data network."
          </p>
          <div className="flex space-x-4">
             <span className="border border-white/10 text-[10px] px-3 py-1.5 mono uppercase tracking-widest text-white/60 rounded-full">Bharat-Sourced</span>
             <span className="border border-white/10 text-[10px] px-3 py-1.5 mono uppercase tracking-widest text-white/60 rounded-full">Global-Reach</span>
          </div>
        </div>

        <div>
          <h4 className="text-[10px] font-black uppercase tracking-[0.5em] mb-10 opacity-70">Contact</h4>
          <ul className="space-y-6 text-sm font-bold tracking-tighter">
            <li><a href="mailto:hello@egolab.ai" className="hover:text-white/60 transition-all">hello@egolab.ai</a></li>
            <li><a href="tel:+919359305009" className="hover:text-white/60 transition-all">+91 93593 05009</a></li>
            <li><a href="tel:+919408940860" className="hover:text-white/60 transition-all">+91 94089 40860</a></li>            
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-black uppercase tracking-[0.5em] mb-10 opacity-70">Connect</h4>
          <ul className="space-y-6 text-sm font-bold tracking-tighter">
            <li><a href="https://www.linkedin.com/company/egolab-ai" className="hover:text-white/60 transition-all">LinkedIn</a></li>
            <li><a href="https://x.com/EgolabAI" className="hover:text-white/60 transition-all">Twitter / X</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-[13px] mono uppercase tracking-[0.5em] opacity-70">
        <div>© 2026 Egolab.ai — All Operational Units Active</div>
        <div className="mt-4 md:mt-0">Mumbai • Dubai • London</div>
      </div>
    </footer>
  );
};

export default Footer;
