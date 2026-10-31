import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileDown, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "DSA", href: "#dsa" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle ESC key for mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const scrollTo = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070913]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => scrollTo(e, '#home')}
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded-lg p-1"
            aria-label="Yash Dhankar Portfolio Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-blue-500 p-[1px] shadow-md shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-shadow">
              <div className="w-full h-full bg-[#0d1022] rounded-[11px] flex items-center justify-center font-bold text-white text-sm tracking-wider">
                YD
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight text-white group-hover:text-purple-300 transition-colors">
                Yash Dhankar
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                Full Stack Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 border border-white/10 rounded-full px-3 py-1.5 backdrop-blur-md shadow-inner shadow-white/5">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollTo(e, item.href)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 relative ${
                    isActive
                      ? 'text-white bg-purple-600/30 border border-purple-500/40 shadow-sm shadow-purple-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="/Yash_Dhankar_Resume.pdf"
              download="Yash_Dhankar_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-white/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
              aria-label="Download Yash Dhankar Resume"
            >
              <FileDown className="w-3.5 h-3.5 text-purple-400" />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => scrollTo(e, '#contact')}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all shadow-md shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="/Yash_Dhankar_Resume.pdf"
              download="Yash_Dhankar_Resume.pdf"
              className="p-2 rounded-lg bg-slate-800/80 border border-white/10 text-purple-400 hover:text-white"
              aria-label="Download Resume"
            >
              <FileDown className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-slate-800/80 border border-white/10 text-slate-200 hover:text-white hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden border-b border-white/10 bg-[#0a0d1e]/98 backdrop-blur-xl px-4 pt-4 pb-6 mt-3 space-y-3"
          >
            <nav className="grid grid-cols-2 gap-2" aria-label="Mobile Navigation">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => scrollTo(e, item.href)}
                    className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-purple-600/30 border border-purple-500/50 text-white font-semibold'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
              <a
                href="/Yash_Dhankar_Resume.pdf"
                download="Yash_Dhankar_Resume.pdf"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium text-slate-200 bg-slate-800/80 border border-white/10"
              >
                <FileDown className="w-4 h-4 text-purple-400" />
                <span>Download Resume (PDF)</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => scrollTo(e, '#contact')}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 shadow-md shadow-purple-600/30"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
