
import React from 'react';
import { Target, Eye, Shield, Users, CheckCircle, Globe, Activity, Trophy } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-navy-950">
      {/* Intro Section */}
      <section className="py-24 bg-navy-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none hidden lg:block">
           <svg viewBox="0 0 100 100" fill="currentColor" className="text-accent w-full h-full">
             <circle cx="100" cy="0" r="100" />
           </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-4">Our Identity</h2>
              <h1 className="text-5xl font-extrabold text-white mb-8">Seraphis IT and data solutions</h1>
              <div className="prose prose-xl text-slate-300">
                <p className="mb-6 leading-relaxed">
                  Seraphis was established to address a critical gap in the South African market: organisations required to meet serious cyber and regulatory obligations, but without the scale to operate internal security teams.
                </p>
                <p className="leading-relaxed">
                  We act as a seamless extension of your enterprise — combining security operations, governance expertise, and recovery support into a single, high-accountability partnership.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-3xl translate-x-4 translate-y-4 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1573163281530-5be9c2049969?auto=format&fit=crop&q=80&w=1200" 
                alt="Corporate Office" 
                className="rounded-3xl shadow-2xl object-cover h-[500px] w-full brightness-75 border border-slate-700"
              />
              <div className="absolute bottom-10 left-10 bg-navy-950/90 backdrop-blur-md p-10 rounded-2xl shadow-2xl border border-accent/20 hidden md:block">
                <p className="text-accent font-black text-5xl mb-1 tracking-tight">100%</p>
                <p className="text-white text-xs font-bold uppercase tracking-widest opacity-80">Local Security Focus</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Goals */}
      <section className="py-32 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-navy-900 text-white p-12 rounded-[2rem] shadow-2xl flex flex-col h-full border border-slate-800 hover:border-accent/30 transition-all">
              <Target className="w-16 h-16 text-accent mb-8" />
              <h2 className="text-3xl font-bold mb-6">Mission</h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                To enable South African organisations to operate securely and confidently in a landscape of escalating cyber threat through outcome-driven managed defence.
              </p>
            </div>
            <div className="bg-navy-900/50 p-12 rounded-[2rem] shadow-sm border border-slate-800 flex flex-col h-full hover:border-accent/30 transition-all">
              <Eye className="w-16 h-16 text-accent mb-8" />
              <h2 className="text-3xl font-bold mb-6 text-white">Vision</h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                To be the primary cyber resilience partner for organisations where operational uptime and regulatory trust are non-negotiable.
              </p>
            </div>
            <div className="bg-navy-900 p-12 rounded-[2rem] shadow-xl border-t-4 border-accent flex flex-col h-full border-x border-b border-slate-800 hover:scale-[1.02] transition-all">
              <Trophy className="w-16 h-16 text-accent mb-8" />
              <h2 className="text-3xl font-bold mb-6 text-white">Strategic Goals</h2>
              <ul className="text-slate-300 space-y-4 text-sm font-medium">
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" /> Reduce cyber risk for the SME & Mid-market.</li>
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" /> Deliver 100% audit readiness for regulatory compliance.</li>
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" /> Maintain zero-downtime recovery architectures.</li>
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" /> Standardize POPIA reporting across all client tiers.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Section */}
      <section className="py-32 relative text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=2000" 
            alt="Data Center" 
            className="w-full h-full object-cover grayscale opacity-5"
          />
          <div className="absolute inset-0 bg-navy-950/95"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Operating Model</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-xl">
              Engineered for resilience, transparency, and rapid response.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: <Globe />, title: 'Remote-First', desc: 'Secure cloud-native operations reaching every corner of SA.' },
              { icon: <Shield />, title: 'Centralised', desc: 'Unified 24/7 monitoring and global threat intel integration.' },
              { icon: <Users />, title: 'Elite Access', desc: 'Direct board-level communication and clear IR escalation.' },
              { icon: <Activity />, title: 'KPI Driven', desc: 'Tangible risk reduction metrics and recovery validation.' }
            ].map((model, i) => (
              <div key={i} className="text-center group p-6 rounded-3xl hover:bg-navy-800 transition-colors">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full text-accent mb-8 group-hover:bg-accent/20 transition-all">
                  {model.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{model.title}</h3>
                <p className="text-slate-400 leading-relaxed">{model.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
