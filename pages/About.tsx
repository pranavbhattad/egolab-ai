
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-8">
        <div>
          <span className="text-[12px] mono uppercase opacity-60 tracking-[0.5em] mb-4 block">The Focus</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 uppercase leading-tight">
            Giving brains to machines. <br/>
          </h2>
          <p className="text-lg text-white/40 leading-relaxed font-medium">
            Machines are filled with power but lack intelligence. We are changing that. We are going to teach a robot how to solder a PCB, weld a joint, assemble a motor or possibly anything on their own. 
          </p>
        </div>
        
        <div className="space-y-6">
            <Feature num="01" title="Data Collection Phase" body="We deploy our devices for just 1 day to capture the training data. This phase gives you productivity insights." />
            <Feature num="02" title="The Robot Pilot" body="We identify the single most economically useful task to automate." />
            <Feature num="03" title="Mass Deployment" body="We move from pilot to production, training models for every automatable task. This enables 24/7 production and eliminates downtime from a lack of workers." />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 border border-white/20 rounded-2xl bg-white/[0.02]">
        <Stat label="Total Frames" val="10.8B+" />
        <Stat label="Factory Partners" val="300+" />
        <Stat label="Total Workers" val="1L+" />
        <Stat label="Legal Compliance" val="100%" />
      </div>
    </div>
  );
};

const Feature = ({ num, title, body }: { num: string, title: string, body: string }) => (
  <div className="flex space-x-6 p-6 bg-white/[0.03] border border-white/5 rounded-xl hover:bg-white/[0.05] transition-colors">
    <div className="text-2xl font-black mono text-white/20">{num}</div>
    <div>
      <h3 className="text-sm font-black uppercase tracking-widest mb-2">{title}</h3>
      <p className="text-xs text-white/40 leading-relaxed font-medium">{body}</p>
    </div>
  </div>
);

const Stat = ({ label, val }: { label: string, val: string }) => (
  <div className="text-center">
    <div className="text-2xl font-black">{val}</div>
    <div className="text-[7px] uppercase tracking-widest font-black opacity-30">{label}</div>
  </div>
);

export default About;
