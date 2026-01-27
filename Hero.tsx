
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, Activity, ChevronRight, Globe, Star, Quote } from 'lucide-react';

const TestimonialCard: React.FC<{ quote: string; author: string; role: string }> = ({ quote, author, role }) => (
  <div className="bg-navy-800/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 shadow-xl relative overflow-hidden group">
    <Quote className="absolute -top-2 -right-2 w-16 h-16 text-accent/5 -rotate-12 group-hover:text-accent/10 transition-colors" />
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-accent fill-accent" />
      ))}
    </div>
    <p className="text-slate-300 text-sm mb-4 relative z-10 italic">"{quote}"</p>
    <div className="relative z-10">
      <p className="font-bold text-white text-sm">{author}</p>
      <p className="text-accent text-xs uppercase tracking-wider">{role}</p>
    </div>
  </div>
);

const Hero: React.FC = () => {
  const testimonials = [
    {
      quote: "Seraphis transformed our POPIA compliance from a headache into a streamlined operational process.",
      author: "David M.",
      role: "CTO, FinTech Solutions"
    },
    {
      quote: "The SOC monitoring gave our board the peace of mind they needed. Professional and outcome-focused.",
      author: "Sarah J.",
      role: "COO, Healthcare Partners"
    },
    {
      quote: "When we faced a localized ransomware attempt, the Seraphis IR team was on it in minutes. Incredible speed.",
      author: "Michael K.",
      role: "IT Manager, Logistics Hub"
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-navy-950 text-white">
      {/* Background patterns and Image - Darkened for better contrast */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
          alt="Cyber Background" 
          className="w-full h-full object-cover opacity-10 scale-105 transition-transform duration-10000 hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/80 to-navy-950"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:pt-40 lg:pb-32 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-16 lg:mb-0">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-bold uppercase tracking-widest mb-8 border border-accent/20">
              Seraphis IT and data solutions
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
              Defend. <br />
              <span className="text-accent">Comply.</span> <br />
              Recover.
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-xl leading-relaxed">
              Security operations, POPIA compliance, and managed cyber defence — built for South African organisations operating under real regulatory and operational pressure.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link 
                to="/contact"
                className="bg-accent text-navy-900 px-10 py-5 rounded-lg font-bold text-center hover:bg-white hover:shadow-2xl hover:shadow-accent/40 transition-all flex items-center justify-center group text-lg"
              >
                Start Free Consultation
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <div className="flex items-center px-6 py-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:border-accent/30 transition-colors">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="h-8 w-auto mr-4" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase text-slate-400 font-black tracking-widest">Official Partner</span>
                  <span className="text-sm text-white font-bold">ID: 7019411</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 relative">
            <div className="space-y-6 pt-12">
              <div className="bg-navy-800/60 backdrop-blur-sm p-8 rounded-3xl border border-slate-700 shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                <ShieldCheck className="w-12 h-12 text-accent mb-6" />
                <h3 className="font-bold text-2xl mb-3">SOC Services</h3>
                <p className="text-slate-400">Continuous 24/7 monitoring and rapid threat neutralization.</p>
              </div>
              <div className="bg-navy-800/60 backdrop-blur-sm p-8 rounded-3xl border border-slate-700 shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                <Lock className="w-12 h-12 text-accent mb-6" />
                <h3 className="font-bold text-2xl mb-3">POPIA Ready</h3>
                <p className="text-slate-400">Tactical compliance remediation for South African law.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-navy-800/60 backdrop-blur-sm p-8 rounded-3xl border border-slate-700 shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                <Activity className="w-12 h-12 text-accent mb-6" />
                <h3 className="font-bold text-2xl mb-3">Recovery</h3>
                <p className="text-slate-400">Ransomware containment and rapid business restoration.</p>
              </div>
              <div className="bg-navy-800/60 backdrop-blur-sm p-8 rounded-3xl border border-slate-700 shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                <Globe className="w-12 h-12 text-accent mb-6" />
                <h3 className="font-bold text-2xl mb-3">Local SOC</h3>
                <p className="text-slate-400">Specifically designed for the South African risk profile.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="text-center mb-16">
          <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-4">Client Feedback</h2>
          <p className="text-4xl font-bold">Trusted Resilience Across SA</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
