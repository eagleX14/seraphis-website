
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronRight
} from 'lucide-react';

// Components
import Hero from './components/Hero';
import Services from './components/Services';
import Industries from './components/Industries';
import About from './components/About';
import Contact from './components/Contact';
import AIChatbot from './components/AIChatbot';
import Footer from './components/Footer';
import Logo from './components/Logo';
import Blog from './components/Blog';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Industries', href: '/industries' },
    { label: 'Insights', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-navy-900/95 backdrop-blur-sm text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          <Link to="/" className="flex items-center space-x-4">
            <Logo className="w-16 h-16 text-accent" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight leading-none">SERAPHIS</span>
              <span className="text-[10px] text-accent font-medium tracking-[0.2em] uppercase">IT & DATA SOLUTIONS</span>
            </div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-semibold hover:text-accent transition-colors ${
                  location.pathname === item.href ? 'text-accent border-b-2 border-accent pb-1' : 'text-slate-300'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link 
              to="/contact"
              className="bg-accent text-navy-900 px-8 py-3 rounded-md font-bold text-sm hover:bg-white transition-all shadow-lg shadow-accent/10"
            >
              Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-navy-800 border-t border-slate-700 pb-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-base font-medium text-slate-300 hover:text-accent hover:bg-navy-900"
            >
              {item.label}
            </Link>
          ))}
          <div className="px-4 mt-4">
            <Link 
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-accent text-navy-900 px-6 py-3 rounded-md font-bold"
            >
              Request Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <AIChatbot />
      </div>
    </Router>
  );
};

export default App;
