import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  Code, 
  Sparkles, 
  ArrowUpRight,
  MessageSquare
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { TechIcons } from '../data/techIcons';

export default function Contact() {
  const { personal } = portfolioData;

  const [copiedType, setCopiedType] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }
    // Prepare mailto link as fallback to open email client with prefilled details
    const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(
      formData.subject || `Portfolio Message from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;

    setStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-28 bg-[#070913] overflow-hidden border-t border-white/5">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-700/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/25 text-purple-300 text-xs font-semibold uppercase tracking-wider"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Get In Touch</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Let's Build Something Together
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal"
          >
            Open to discussing full-stack development roles, scalable web architectures, or technical collaborations. Reach out directly or send a message below.
          </motion.p>
        </div>

        {/* Two-Column Grid: Contact Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Direct Contact Details & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6 p-6 sm:p-8 rounded-2xl glass-card border border-white/10"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Contact Information
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 font-normal mt-1">
                  Feel free to call, email, or connect across verified professional platforms.
                </p>
              </div>

              {/* Direct Info Cards */}
              <div className="space-y-3">
                {/* Email */}
                <div className="p-4 rounded-xl bg-slate-900/90 border border-white/10 flex items-center justify-between gap-3 group hover:border-purple-500/40 transition-colors">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] uppercase font-semibold text-slate-400 block tracking-wider">Email</span>
                      <a
                        href={`mailto:${personal.email}`}
                        className="text-xs sm:text-sm font-bold text-white hover:text-purple-300 transition-colors block truncate"
                        title={personal.email}
                      >
                        {personal.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(personal.email, 'email')}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 shrink-0"
                    aria-label="Copy email address"
                    title="Copy email"
                  >
                    {copiedType === 'email' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone */}
                <div className="p-4 rounded-xl bg-slate-900/90 border border-white/10 flex items-center justify-between gap-3 group hover:border-blue-500/40 transition-colors">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] uppercase font-semibold text-slate-400 block tracking-wider">Phone</span>
                      <a
                        href={`tel:${personal.phone}`}
                        className="text-xs sm:text-sm font-bold text-white hover:text-blue-300 transition-colors block font-mono"
                      >
                        {personal.phone}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(personal.phone, 'phone')}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 shrink-0"
                    aria-label="Copy phone number"
                    title="Copy phone"
                  >
                    {copiedType === 'phone' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location */}
                <div className="p-4 rounded-xl bg-slate-900/90 border border-white/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-indigo-950/60 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-slate-400 block tracking-wider">Location</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-200 block">
                      {personal.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                Verified Profiles
              </span>
              <div className="grid grid-cols-3 gap-2">
                <a
                  href="https://github.com/dhankaryash71-hue"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-purple-500/40 text-slate-300 hover:text-white transition-all text-center gap-1.5 group"
                >
                  <div className="w-4 h-4 group-hover:scale-110 transition-transform"><TechIcons.GitHub /></div>
                  <span className="text-[11px] font-semibold">GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-blue-500/40 text-slate-300 hover:text-white transition-all text-center gap-1.5 group"
                >
                  <div className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform"><TechIcons.LinkedIn /></div>
                  <span className="text-[11px] font-semibold">LinkedIn</span>
                </a>

                <a
                  href="https://leetcode.com/u/YASHDHANKAR/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-amber-500/40 text-slate-300 hover:text-white transition-all text-center gap-1 group"
                >
                  <Code className="w-4 h-4 group-hover:scale-110 transition-transform text-amber-400" />
                  <span className="text-[11px] font-semibold">LeetCode</span>
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Interactive Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 p-6 sm:p-8 rounded-2xl glass-card border border-white/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <MessageSquare className="w-5 h-5 text-purple-400" />
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Send a Direct Message
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 font-normal mb-6">
                Have a question or opportunity? Drop your details and message below.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Name <span className="text-purple-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Smith"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Email <span className="text-purple-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Full-Stack Developer Opportunity"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Message <span className="text-purple-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, role, or inquiry..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors resize-none"
                  />
                </div>

                {status === 'success' && (
                  <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-medium flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Your message is ready! Opening your email client to send to dhankaryash71@gmail.com.</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-3 rounded-xl bg-rose-950/60 border border-rose-500/30 text-rose-300 text-xs font-medium">
                    Please fill out all required fields.
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 shadow-md shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 cursor-pointer"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

            <div className="pt-4 mt-6 border-t border-white/5 text-[11px] text-slate-500 flex items-center justify-between">
              <span>Direct inquiries receive prompt responses within 24 hours.</span>
              <span className="font-mono text-purple-400">dhankaryash71@gmail.com</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
