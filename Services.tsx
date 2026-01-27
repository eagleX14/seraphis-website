
import React from 'react';
import { 
  Shield, 
  Gavel, 
  Activity, 
  RotateCcw, 
  Factory, 
  CheckCircle2
} from 'lucide-react';
import { ServicePillar } from '../types';

const ServiceCard: React.FC<{ service: ServicePillar }> = ({ service }) => {
  return (
    <div className="bg-navy-900 p-8 rounded-2xl border border-slate-800 shadow-xl hover:shadow-accent/5 hover:border-accent/30 transition-all flex flex-col h-full group">
      <div className="bg-navy-800 w-14 h-14 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
        {service.icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
      <p className="text-slate-400 mb-6 flex-grow leading-relaxed">{service.description}</p>
      <div className="space-y-3">
        {service.capabilities.map((cap, idx) => (
          <div key={idx} className="flex items-start space-x-3 text-sm">
            <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
            <span className="text-slate-300">{cap}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const services: ServicePillar[] = [
    {
      id: 'managed-defence',
      title: 'Managed Cyber Defence',
      description: 'We operate continuous monitoring and response capabilities to detect, analyse, and contain threats before they escalate.',
      icon: <Shield />,
      capabilities: [
        'SOC services (24/7 Monitoring)',
        'Centralised log monitoring & detection',
        'Endpoint, identity, and email security',
        'Threat intelligence & proactive hunting',
        'Incident escalation & coordination'
      ]
    },
    {
      id: 'compliance',
      title: 'Regulatory Compliance (POPIA)',
      description: 'We translate complex regulatory requirements into actionable controls and operational processes.',
      icon: <Gavel />,
      capabilities: [
        'POPIA readiness & gap assessments',
        'Policy & control framework development',
        'Technical remediation & audit prep',
        'Regulatory reporting support',
        'Ongoing compliance assurance'
      ]
    },
    {
      id: 'incident-response',
      title: 'Incident Response & Recovery',
      description: 'When incidents occur, speed and coordination determine impact. We focus on rapid restoration.',
      icon: <Activity />,
      capabilities: [
        'Response retainers & activation',
        'Ransomware containment',
        'Digital forensics & root-cause analysis',
        'Backup validation & recovery',
        'Post-incident reporting'
      ]
    },
    {
      id: 'resilience',
      title: 'Cyber Resilience & Continuity',
      description: 'We help organisations prepare for disruption — not just prevent it.',
      icon: <RotateCcw />,
      capabilities: [
        'Business continuity alignment',
        'Incident tabletop exercises',
        'Recovery runbook development',
        'Executive & board-level risk briefings'
      ]
    },
    {
      id: 'industrial',
      title: 'OT & Industrial Security',
      description: 'Specialised assessments and response for critical infrastructure and factory environments.',
      icon: <Factory />,
      capabilities: [
        'Industrial Control Systems (ICS) security',
        'OT environment gap analysis',
        'Sector-specific response playbooks',
        'Asset visibility in industrial networks'
      ]
    }
  ];

  return (
    <div className="bg-navy-950 py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-4">Our Service Pillars</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Outcome-Focused Security</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            We deliver the visibility, compliance, and recovery capabilities modern organisations need to thrive in a hostile cyber environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-20 bg-navy-900 rounded-[2rem] p-12 text-white relative overflow-hidden shadow-2xl border border-slate-800">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="md:max-w-xl mb-8 md:mb-0 text-left">
              <h2 className="text-3xl font-bold mb-4">Unsure where to start?</h2>
              <p className="text-slate-400 text-lg">
                Our Security & Compliance Readiness Assessment provides a high-level view of your current posture against South African regulatory standards.
              </p>
            </div>
            <a 
              href="#/contact"
              className="bg-accent text-navy-900 px-10 py-5 rounded-xl font-bold whitespace-nowrap hover:bg-white hover:scale-105 transition-all shadow-xl"
            >
              Start Free Assessment
            </a>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
        </div>
      </div>
    </div>
  );
};

export default Services;
