
import React from 'react';
import { 
  Building2, 
  Stethoscope, 
  ShoppingBag, 
  Zap, 
  Globe, 
  Gavel, 
  GraduationCap, 
  Truck,
  ShieldAlert
} from 'lucide-react';
import { Industry } from '../types';

const IndustryCard: React.FC<{ industry: Industry }> = ({ industry }) => (
  <div className="bg-navy-900 p-8 rounded-2xl border border-slate-800 shadow-xl hover:border-accent transition-all group">
    <div className="text-accent mb-6 group-hover:scale-110 transition-transform">
      {industry.icon}
    </div>
    <h3 className="text-xl font-bold mb-4 text-white">{industry.name}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{industry.focus}</p>
  </div>
);

const Industries: React.FC = () => {
  const industries: Industry[] = [
    {
      name: 'Financial Services',
      focus: 'Data protection, fraud prevention, regulatory compliance (POPIA/FIC), and high-availability service uptime.',
      icon: <Building2 className="w-10 h-10" />
    },
    {
      name: 'Healthcare & Life Sciences',
      focus: 'Patient data confidentiality, ransomware resilience for critical care systems, and health regulation compliance.',
      icon: <Stethoscope className="w-10 h-10" />
    },
    {
      name: 'Retail & E-Commerce',
      focus: 'Phishing prevention, payment security (PCI-DSS), platform availability, and building customer trust through data safety.',
      icon: <ShoppingBag className="w-10 h-10" />
    },
    {
      name: 'Energy, Utilities & Mining',
      focus: 'OT/ICS protection, operational continuity, and managing national infrastructure cyber risks.',
      icon: <Zap className="w-10 h-10" />
    },
    {
      name: 'Telecommunications',
      focus: 'Network availability, large-scale data protection, and maintaining core service integrity.',
      icon: <Globe className="w-10 h-10" />
    },
    {
      name: 'Government & Public Sector',
      focus: 'Citizen data protection, compliance enforcement, and ensuring continuity of essential public services.',
      icon: <Gavel className="w-10 h-10" />
    },
    {
      name: 'Education',
      focus: 'Protection of student records, learning system availability, and reducing phishing risks for faculty and students.',
      icon: <GraduationCap className="w-10 h-10" />
    },
    {
      name: 'Manufacturing & Logistics',
      focus: 'Production continuity, cyber-physical security, and supply chain integrity monitoring.',
      icon: <Truck className="w-10 h-10" />
    }
  ];

  return (
    <div className="bg-navy-950 py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-4">Sector-Aligned Defence</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">Expertise Tailored to Industry Realities</h1>
          <p className="text-xl text-slate-400">
            Each industry faces distinct cyber risks and regulatory exposure. We align our security operations to meet those specific demands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, i) => (
            <IndustryCard key={i} industry={ind} />
          ))}
        </div>

        <div className="mt-20 bg-navy-900 rounded-[2.5rem] p-12 border border-slate-800 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <ShieldAlert className="w-8 h-8 mr-4 text-accent" />
                Common Sector Drivers
              </h2>
              <ul className="space-y-4">
                {[
                  'Regulatory enforcement (POPIA) and audit exposure',
                  'Downtime and revenue loss risk from ransomware',
                  'Reputational and trust damage from data leaks',
                  'Limited internal security capacity for 24/7 monitoring'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2.5 mr-4"></div>
                    <span className="text-slate-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-navy-800 p-8 rounded-2xl shadow-inner border border-slate-700">
              <h3 className="text-xl font-bold mb-4 text-white">Industrial & OT Focus</h3>
              <p className="text-slate-400 mb-6">
                Operating in a high-risk industrial sector? We offer engagement-based assessments specifically for critical infrastructure.
              </p>
              <a 
                href="#/contact"
                className="text-accent font-bold flex items-center hover:translate-x-1 transition-transform"
              >
                Learn about OT Security <Globe className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;
