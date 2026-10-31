import React from 'react';
import { ArrowUp, Mail, Code, FileDown, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "DSA", href: "#dsa" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-[#05060d] border-t border-white/10 pt-16 pb-24 lg:pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">

        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-white/5">

          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-blue-500 p-[1px]">
              <div className="w-full h-full bg-[#0a0d1e] rounded-[11px] flex items-center justify-center font-bold text-white text-xs">
                YD
              </div>
            </div>
            <div>
              <span className="font-bold text-white text-base block tracking-tight">
                {personal.name}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Full Stack Software Developer
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-purple-300 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-white/10 text-xs font-medium text-slate-300 hover:text-white hover:border-purple-500/40 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 cursor-pointer"
            aria-label="Scroll back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Footer Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Yash Dhankar. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <a
              href={personal.resumeUrl}
              download="Yash_Dhankar_Resume.pdf"
              className="hover:text-purple-400 transition-colors flex items-center gap-1"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </a>
            <span>•</span>
            <a
              href="https://github.com/dhankaryash71-hue"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              LinkedIn
            </a>
            <span>•</span>
            <a
              href="https://leetcode.com/u/YASHDHANKAR/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors"
            >
              LeetCode
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
