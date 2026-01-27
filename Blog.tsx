
import React from 'react';
import { Calendar, User, ArrowRight, ShieldCheck, Newspaper } from 'lucide-react';

const Blog: React.FC = () => {
  const posts = [
    {
      id: 1,
      title: "South Africa's Evolving POPIA Enforcement Landscape in 2025",
      excerpt: "The Information Regulator is stepping up enforcement. Learn how SMEs can stay ahead of audit requirements.",
      date: "May 12, 2024",
      author: "Adriaan Seraphis",
      category: "Compliance",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      title: "Ransomware-as-a-Service: The Growing Threat to SA Logistics",
      excerpt: "Recent trends show a sharp increase in targeted attacks on transportation hubs. Here's how to defend.",
      date: "May 08, 2024",
      author: "IR Team",
      category: "Threat Intel",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      title: "Optimizing Microsoft Sentinel for Zero-Trust Architectures",
      excerpt: "A deep dive into building an automated SOC using Microsoft's world-class SIEM platform.",
      date: "May 02, 2024",
      author: "Azure Specialist",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="bg-navy-950 min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-4">Insights & Intelligence</h2>
            <h1 className="text-5xl font-extrabold text-white mb-6">Cyber Resilience Blog</h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Stay ahead of local threats and regulatory shifts with expert analysis from the Seraphis SOC and Compliance teams.
            </p>
          </div>
          <div className="mt-8 md:mt-0">
             <button className="bg-accent text-navy-900 px-8 py-4 rounded-lg font-bold flex items-center hover:bg-white transition-all shadow-xl shadow-accent/10">
               Subscribe to Alerts <Newspaper className="ml-2 w-4 h-4" />
             </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <article key={post.id} className="bg-navy-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col group h-full hover:border-accent/30 transition-all">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-75"
                />
                <div className="absolute top-4 left-4 bg-accent text-navy-900 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
                  {post.category}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center text-xs text-slate-500 mb-4 space-x-4 font-bold uppercase tracking-wider">
                  <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {post.date}</span>
                  <span className="flex items-center"><User className="w-3 h-3 mr-1" /> {post.author}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-slate-400 mb-8 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-auto">
                  <button className="text-accent font-bold flex items-center hover:translate-x-2 transition-transform uppercase text-sm tracking-widest">
                    Read Report <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-24 p-12 bg-navy-900 rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between border-b-8 border-accent shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mb-8 md:mb-0 text-left relative z-10">
             <ShieldCheck className="w-16 h-16 text-accent mb-6" />
             <h2 className="text-3xl font-bold mb-4">Want real-time threat alerts?</h2>
             <p className="text-slate-400 text-lg">
               Our managed SOC clients receive immediate notifications and remediation steps when vulnerabilities impact the South African ecosystem.
             </p>
          </div>
          <button className="relative z-10 bg-accent text-navy-900 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-lg hover:scale-105 transition-transform shadow-2xl">
            Partner with Seraphis
          </button>
          <div className="absolute inset-0 bg-accent/5 opacity-10 pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
