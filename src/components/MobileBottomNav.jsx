import React from 'react';
import { motion } from 'framer-motion';
import { Home, User, Code2, Layers, MessageSquare, Briefcase } from 'lucide-react';

export default function MobileBottomNav({ activeSection }) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home, href: '#home' },
    { id: 'about', label: 'About', icon: User, href: '#about' },
    { id: 'skills', label: 'Skills', icon: Code2, href: '#skills' },
    { id: 'projects', label: 'Projects', icon: Layers, href: '#projects' },
    { id: 'experience', label: 'Experience', icon: Briefcase, href: '#experience' },
    { id: 'contact', label: 'Contact', icon: MessageSquare, href: '#contact' },
  ];

  const scrollTo = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 75;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Determine which bottom item is active, mapping secondary sections gracefully
  const getActiveTab = () => {
    if (['education'].includes(activeSection)) return 'experience';
    if (['dsa'].includes(activeSection)) return 'skills';
    return activeSection;
  };

  const currentTab = getActiveTab();

  return (
    <nav
      aria-label="Mobile Bottom Navigation"
      className="fixed bottom-2.5 inset-x-2 sm:bottom-4 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 sm:w-[460px] z-40 lg:hidden"
    >
      <div className="relative p-1 rounded-2xl bg-[#0a0d1e]/92 backdrop-blur-xl border border-white/15 shadow-2xl shadow-black/90 flex items-center justify-between">
        
        {/* Subtle Ambient Glow inside dock */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/10 via-indigo-600/10 to-blue-600/10 pointer-events-none" />

        {navItems.map((item) => {
          const IconComp = item.icon;
          const isActive = currentTab === item.id;

          return (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => scrollTo(e, item.href)}
              className={`relative flex flex-col items-center justify-center py-1 px-1 sm:px-2 rounded-xl transition-all duration-200 select-none flex-1 touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
              aria-label={`Navigate to ${item.label}`}
              aria-current={isActive ? 'page' : undefined}
            >
              {/* Active animated pill background */}
              {isActive && (
                <motion.div
                  layoutId="mobileNavActivePill"
                  className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-indigo-600/30 border border-purple-500/50 rounded-xl shadow-md shadow-purple-900/30 -z-10"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}

              {/* Icon */}
              <div className="relative">
                <IconComp
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isActive ? 'scale-110 text-purple-300' : ''
                  }`}
                />
                {/* Active indicator dot */}
                {isActive && (
                  <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                )}
              </div>

              {/* Label */}
              <span
                className={`text-[9px] sm:text-[10px] leading-tight text-center truncate w-full mt-0.5 transition-colors ${
                  isActive ? 'font-bold text-white' : 'font-medium text-slate-400'
                }`}
              >
                {item.label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
