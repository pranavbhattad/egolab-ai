
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-8">
        <div>
          <span className="text-[12px] mono uppercase opacity-60 tracking-[0.5em] mb-4 block">The Problem</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 uppercase leading-tight">
            CCTV sees the room. <br/><span className="text-white/20">We see the tool.</span>
          </h2>
          <p className="text-lg text-white/40 leading-relaxed font-medium">
            Most training data comes from security cameras. These lack the depth, angle, and proximity needed to teach a robot how to solder a PCB, weld a joint, or assemble a motor. 
          </p>
        </div>
        
        <div className="space-y-6">
            <Feature num="01" title="First-Person POV" body="Captured from lightweight head-mounted wearables worn by master industrial workers." />
            <Feature num="02" title="Dexterity Labels" body="Every hand movement, grasp type, and tool engagement is annotated by our AI pipeline." />
            <Feature num="03" title="Bharat Scale" body="Sourced from thousands of factory shifts across India's largest manufacturing hubs." />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 border border-white/20 rounded-2xl bg-white/[0.02]">
        <Stat label="Total Frames" val="120M+" />
        <Stat label="Factory Partners" val="48+" />
        <Stat label="Redaction Speed" val="<40ms" />
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
