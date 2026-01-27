
import React from 'react';
import { Mail, Linkedin, Twitter, ExternalLink, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-white pt-24 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-6 mb-8 group">
              <Logo className="w-24 h-24 text-accent group-hover:scale-110 transition-transform" />
              <div className="flex flex-col">
                <span className="text-4xl font-bold tracking-tighter leading-none uppercase">SERAPHIS</span>
                <span className="text-xs text-accent font-black tracking-[0.4em] mt-1">IT AND DATA SOLUTIONS</span>
              </div>
            </Link>
            <p className="text-slate-400 max-w-sm mb-6 text-lg leading-relaxed">
              Your security operations, compliance, and recovery partner — focused on keeping South African organisations operational and resilient.
            </p>
            <div className="flex items-center space-x-2 text-accent font-bold mb-10 hover:text-white transition-colors">
              <Globe size={18} />
              <a href="https://www.seraphis-it.com">www.seraphis-it.com</a>
            </div>
            <div className="mb-10 bg-white p-6 rounded-2xl flex items-center shadow-xl border-l-8 border-accent">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="h-10 w-auto mr-6" />
              <div>
                <p className="text-[10px] uppercase font-black text-navy-900 tracking-widest opacity-60">Gold Certified Partner</p>
                <p className="text-sm font-black text-navy-900">Partner ID: 7019411</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="p-3 bg-navy-800 rounded-xl hover:bg-accent hover:text-navy-900 transition-all"><Linkedin className="w-6 h-6" /></a>
              <a href="#" className="p-3 bg-navy-800 rounded-xl hover:bg-accent hover:text-navy-900 transition-all"><Twitter className="w-6 h-6" /></a>
              <a href="mailto:info@seraphis-it.com" className="p-3 bg-navy-800 rounded-xl hover:bg-accent hover:text-navy-900 transition-all"><Mail className="w-6 h-6" /></a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-xl mb-8 border-b border-accent w-fit pb-2">Explore</h3>
            <ul className="space-y-5 text-slate-400 font-medium">
              <li><Link to="/" className="hover:text-accent transition-colors">Home Base</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">Our Identity</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Managed Services</Link></li>
              <li><Link to="/industries" className="hover:text-accent transition-colors">Sector Defense</Link></li>
              <li><Link to="/blog" className="hover:text-accent transition-colors">Insights Blog</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact Expert</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-8 border-b border-accent w-fit pb-2">Core Competencies</h3>
            <ul className="space-y-5 text-slate-400 font-medium">
              <li className="hover:text-accent transition-colors cursor-pointer">POPIA Readiness</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Microsoft Sentinel SIEM</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Endpoint Protection</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Incident Response</li>
              <li className="hover:text-accent transition-colors cursor-pointer flex items-center">
                IR Hotline <ExternalLink className="ml-2 w-3 h-3" />
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm font-medium">
          <p>© {new Date().getFullYear()} Seraphis IT and data solutions. Managed Cyber Defence SA.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-accent transition-colors uppercase tracking-widest text-[10px]">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors uppercase tracking-widest text-[10px]">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-colors uppercase tracking-widest text-[10px]">Compliance Manual</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
