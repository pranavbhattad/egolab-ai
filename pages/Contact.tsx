
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formType, setFormType] = useState<'buyer' | 'factory'>('buyer');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // Send to Netlify form endpoint
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString()
      });
      
      if (response.ok) {
        setSubmitted(true);
        form.reset();
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("Form submission failed", error);
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none mb-4">Request Access.</h2>
        <p className="text-xs text-white/60 uppercase mono tracking-[0.4em]">Choose your track to begin integration</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-4">
          <button 
            type="button"
            onClick={() => setFormType('buyer')}
            className={`w-full text-left p-6 rounded-2xl border-2 transition-all ${formType === 'buyer' ? 'border-white bg-white/10' : 'border-white/5 opacity-40 hover:opacity-100'}`}
          >
            <div className="text-[12px] mono uppercase font-black tracking-widest opacity-60 mb-1">AI Research Track</div>
            <h3 className="text-xl font-black uppercase">I need POV Data</h3>
            <p className="text-[11px] text-white/60 mt-2 font-medium">Get raw 4K egocentric streams for model training.</p>
          </button>
          
          <button 
            type="button"
            onClick={() => setFormType('factory')}
            className={`w-full text-left p-6 rounded-2xl border-2 transition-all ${formType === 'factory' ? 'border-white bg-white/10' : 'border-white/5 opacity-40 hover:opacity-100'}`}
          >
            <div className="text-[12px] mono uppercase font-black tracking-widest opacity-60 mb-1">Industrial Track</div>
            <h3 className="text-xl font-black uppercase">I have a Factory</h3>
            <p className="text-[11px] text-white/60 mt-2 font-medium">Monetize your floor data and audit process safety.</p>
          </button>
        </div>

        <div className="lg:col-span-2">
          <form 
            key={formType}
            onSubmit={handleSubmit} 
            name="egolab-contact"
            method="POST"
            className="bg-white/[0.03] border border-white/10 p-8 md:p-10 rounded-3xl backdrop-blur-md"
            netlify
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            {/* Formspree works better if the 'name' attributes are clear */}
            <input type="hidden" name="Inquiry_Type" value={formType === 'buyer' ? 'Data Buyer' : 'Factory Partner'} />
            <input type="hidden" name="form-name" value="egolab-contact" />
            <input type="hidden" name="bot-field" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-1">
                <label className="text-[11px] mono uppercase font-black text-white/60">Your Name</label>
                <input required name="Full_Name" type="text" className="w-full bg-transparent border-b border-white/10 py-2 focus:border-white transition-all outline-none text-base font-bold" />
              </div>
              <div className="space-y-1">
                <label className="text-[11px] mono uppercase font-black text-white/60">Email Address</label>
                <input required name="Email" type="email" className="w-full bg-transparent border-b border-white/10 py-2 focus:border-white transition-all outline-none text-base font-bold" />
              </div>
              <div className="space-y-1">
                <label className="text-[11px] mono uppercase font-black text-white/60">Organization</label>
                <input required name="Organization" type="text" className="w-full bg-transparent border-b border-white/10 py-2 focus:border-white transition-all outline-none text-base font-bold" />
              </div>
              <div className="space-y-1">
                <label className="text-[11px] mono uppercase font-black text-white/60">Focus Area</label>
                <select name="Focus_Area" className="w-full bg-black border-b border-white/10 py-2 focus:border-white transition-all outline-none text-sm font-bold appearance-none cursor-pointer">
                  {formType === 'buyer' ? (
                    <>
                      <option>Humanoid Dexterity</option>
                      <option>Safety Audit AI</option>
                      <option>AR-VR Training</option>
                      <option>Academic Research</option>
                    </>
                  ) : (
                    <>
                      <option>Automotive Assembly</option>
                      <option>Electronics Fab</option>
                      <option>Heavy Mechanical</option>
                      <option>Logistics Hub</option>
                    </>
                  )}
                </select>
              </div>
            </div>

            <div className="space-y-1 mb-10">
              <label className="text-[11px] mono uppercase font-black text-white/60">
                {formType === 'buyer' ? 'Dataset Requirements' : 'Describe your operational floor'}
              </label>
              <textarea name="Message_Details" rows={2} required className="w-full bg-transparent border-b border-white/10 py-2 focus:border-white transition-all outline-none text-base font-bold resize-none" />
            </div>

            <button 
              type="submit" 
              disabled={submitted}
              className={`w-full py-5 rounded-full font-black uppercase tracking-[0.4em] text-[12px] transition-all ${submitted ? 'bg-green-500 text-black' : 'bg-white text-black hover:scale-[1.01] hover:shadow-2xl hover:shadow-white/5'}`}
            >
              {submitted ? 'Inquiry Dispatched ✓' : 'Send Access Request'}
            </button>
            
            <div className="mt-8 text-center">
               <span className="text-[11px] mono uppercase tracking-[0.5em] opacity-60">Mumbai • Dubai • London</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;