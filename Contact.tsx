
import React, { useState } from 'react';
import { Mail, AlertTriangle, Send, Shield, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-navy-950 py-32 relative overflow-hidden min-h-screen">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-navy-900 via-accent to-navy-900"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="text-left">
            <h2 className="text-accent font-black tracking-[0.3em] uppercase text-xs mb-6">Connect with Seraphis</h2>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-8 leading-tight">Secure Your <br /> Future Today.</h1>
            <p className="text-xl text-slate-400 mb-16 leading-relaxed">
              Begin your cyber resilience journey with a high-level assessment of your current security posture and POPIA readiness.
            </p>

            <div className="space-y-10">
              <div className="flex items-start group">
                <div className="bg-navy-900 p-5 rounded-2xl text-accent group-hover:bg-accent group-hover:text-navy-900 transition-all border border-slate-800">
                  <Mail className="w-8 h-8" />
                </div>
                <div className="ml-8 text-left">
                  <h3 className="text-xl font-bold text-white mb-1">General Enquiries</h3>
                  <a href="mailto:info@seraphis-it.com" className="text-accent text-lg font-bold hover:underline">info@seraphis-it.com</a>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="bg-navy-900 p-5 rounded-2xl text-accent group-hover:bg-accent group-hover:text-navy-900 transition-all border border-slate-800">
                  <Shield className="w-8 h-8" />
                </div>
                <div className="ml-8 text-left">
                  <h3 className="text-xl font-bold text-white mb-1">Security Consultations</h3>
                  <a href="mailto:management@seraphis-it.com" className="text-accent text-lg font-bold hover:underline">management@seraphis-it.com</a>
                </div>
              </div>
              <div className="flex items-start group bg-red-950/20 p-8 rounded-3xl border-l-8 border-red-500 shadow-xl border-y border-r border-red-900/30">
                <div className="bg-navy-900 p-5 rounded-2xl text-red-500 shadow-md border border-red-900/50">
                  <AlertTriangle className="w-8 h-8" />
                </div>
                <div className="ml-8 text-left">
                  <h3 className="text-xl font-bold text-white mb-1">Incident Response (Emergency)</h3>
                  <p className="text-sm text-slate-500 mb-2 font-medium uppercase tracking-widest">24/7 Priority Hotline</p>
                  <a href="mailto:emergency@seraphis-it.com" className="text-red-500 text-lg font-black hover:underline">emergency@seraphis-it.com</a>
                </div>
              </div>
            </div>

            <div className="mt-16 p-10 bg-navy-900 text-white rounded-[2.5rem] border-2 border-accent/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-5">
                <Shield size={120} />
              </div>
              <h3 className="text-2xl font-bold mb-8 relative z-10 text-white">Engagement Process</h3>
              <ul className="space-y-6 relative z-10">
                {[
                  'Confidential risk and posture discussion',
                  'Strategic audit of current digital surface',
                  'Tailored engagement model per sector'
                ].map((step, i) => (
                  <li key={i} className="flex items-center space-x-5 text-slate-400">
                    <div className="w-10 h-10 rounded-xl bg-accent text-navy-900 flex items-center justify-center font-black text-sm">{i+1}</div>
                    <span className="text-lg font-medium">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-navy-900 p-10 md:p-16 rounded-[3rem] border border-slate-800 shadow-2xl relative">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-accent/5 rounded-full blur-3xl -z-10"></div>
            
            {submitted ? (
              <div className="text-center py-20">
                <div className="w-24 h-24 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-10 shadow-lg border border-accent/20">
                  <CheckCircle size={48} />
                </div>
                <h2 className="text-4xl font-bold text-white mb-6">Request Received</h2>
                <p className="text-slate-400 text-xl leading-relaxed">Thank you. A senior security analyst from our South African team will contact you within 4-6 hours.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-12 text-accent font-black text-sm uppercase tracking-widest hover:underline"
                >
                  Submit New Enquire
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 text-left">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-black text-slate-400 uppercase tracking-widest mb-3">First Name</label>
                    <input required type="text" className="w-full px-6 py-4 rounded-2xl bg-navy-800 border border-slate-700 text-white focus:ring-4 focus:ring-accent/10 focus:border-accent outline-none transition-all placeholder-slate-600" />
                  </div>
                  <div>
                    <label className="block text-sm font-black text-slate-400 uppercase tracking-widest mb-3">Last Name</label>
                    <input required type="text" className="w-full px-6 py-4 rounded-2xl bg-navy-800 border border-slate-700 text-white focus:ring-4 focus:ring-accent/10 focus:border-accent outline-none transition-all placeholder-slate-600" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-black text-slate-400 uppercase tracking-widest mb-3">Work Email</label>
                  <input required type="email" className="w-full px-6 py-4 rounded-2xl bg-navy-800 border border-slate-700 text-white focus:ring-4 focus:ring-accent/10 focus:border-accent outline-none transition-all placeholder-slate-600" />
                </div>
                <div>
                  <label className="block text-sm font-black text-slate-400 uppercase tracking-widest mb-3">Company / NGO</label>
                  <input required type="text" className="w-full px-6 py-4 rounded-2xl bg-navy-800 border border-slate-700 text-white focus:ring-4 focus:ring-accent/10 focus:border-accent outline-none transition-all placeholder-slate-600" />
                </div>
                <div>
                  <label className="block text-sm font-black text-slate-400 uppercase tracking-widest mb-3">Service Focus</label>
                  <select required className="w-full px-6 py-4 rounded-2xl bg-navy-800 border border-slate-700 text-white focus:ring-4 focus:ring-accent/10 focus:border-accent outline-none transition-all cursor-pointer">
                    <option className="bg-navy-900">Managed SOC (Sentinel SIEM)</option>
                    <option className="bg-navy-900">POPIA Compliance Framework</option>
                    <option className="bg-navy-900">IR Retainer Activation</option>
                    <option className="bg-navy-900">Industrial OT Assessment</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-black text-slate-400 uppercase tracking-widest mb-3">Security Requirements</label>
                  <textarea rows={5} className="w-full px-6 py-4 rounded-2xl bg-navy-800 border border-slate-700 text-white focus:ring-4 focus:ring-accent/10 focus:border-accent outline-none transition-all placeholder-slate-600" placeholder="Briefly describe your environment and concerns..."></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-accent text-navy-900 py-6 rounded-2xl font-black uppercase tracking-widest text-lg flex items-center justify-center hover:bg-white transition-all shadow-xl hover:shadow-accent/20 active:scale-95"
                >
                  Submit Request
                  <Send className="ml-3 w-6 h-6" />
                </button>
                <p className="text-[10px] text-center text-slate-500 font-bold uppercase tracking-widest px-10">
                  Data processed in accordance with Seraphis POPIA compliance standards.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
