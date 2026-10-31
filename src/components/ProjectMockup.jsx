import React, { useState } from 'react';
import { 
  Users, 
  Clock, 
  CheckCircle2, 
  MessageSquare, 
  Send, 
  ShieldCheck, 
  Flame, 
  CheckCheck,
  ImageIcon,
  Sparkles,
  Layers
} from 'lucide-react';

export default function ProjectMockup({ projectId, title }) {
  const [imgError, setImgError] = useState(false);
  const imageSrc = `/projects/${projectId}.png`;

  // If a real screenshot exists in public/projects/[id].png and loads, display it!
  // Otherwise, fall back to our beautiful, authentic UI simulation with a drop-in hint.
  return (
    <div className="relative w-full h-56 sm:h-64 md:h-72 bg-[#090d1f] rounded-t-2xl overflow-hidden border-b border-white/10 group-hover:border-purple-500/30 transition-colors">
      
      {/* Real image if present */}
      {!imgError && (
        <img
          src={imageSrc}
          alt={`${title} real screenshot`}
          onError={() => setImgError(true)}
          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      )}

      {/* Fallback Neutral / High-Tech UI Mockup Placeholder */}
      {imgError && (
        <div className="w-full h-full p-4 flex flex-col justify-between select-none relative overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
          
          {/* Subtle Ambient Background Light */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/15 pointer-events-none" />

          {/* Screenshot Drop-In Indicator Badge */}
          <div className="absolute top-3 right-3 z-20">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/90 border border-white/10 text-[10px] font-mono text-slate-300 shadow-md backdrop-blur-md">
              <ImageIcon className="w-3 h-3 text-purple-400" />
              <span>Placeholder • /projects/{projectId}.png</span>
            </div>
          </div>

          {projectId === 'queueless' ? (
            /* Queueless UI Mockup */
            <div className="h-full flex flex-col justify-between text-xs font-sans">
              {/* Mock Header */}
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-bold text-white tracking-wide">Queueless Admin Portal</span>
                </div>
                <span className="text-[10px] font-mono text-purple-300 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-800/40">
                  PostgreSQL • Prisma
                </span>
              </div>

              {/* Main Queue Dashboard Preview */}
              <div className="grid grid-cols-12 gap-3 my-auto">
                {/* Current Token Card */}
                <div className="col-span-7 bg-[#10152e] border border-purple-500/30 rounded-xl p-3 shadow-lg shadow-black/40">
                  <div className="text-[10px] uppercase font-semibold tracking-wider text-purple-300">
                    Now Serving
                  </div>
                  <div className="text-3xl font-extrabold text-white tracking-tight my-1 flex items-baseline gap-2">
                    #A-42
                    <span className="text-xs font-normal text-emerald-400 font-mono">Counter 3</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-slate-400">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>Est. wait: 3 mins • Digital Token</span>
                  </div>
                </div>

                {/* Next In Line */}
                <div className="col-span-5 bg-[#0e1329] border border-white/5 rounded-xl p-2.5 flex flex-col justify-between">
                  <span className="text-[10px] font-medium text-slate-400">Next In Queue</span>
                  <div className="space-y-1">
                    <div className="flex justify-between items-center text-[11px] font-mono text-slate-200">
                      <span>#A-43</span>
                      <span className="text-[9px] text-indigo-300">Consultation</span>
                    </div>
                    <div className="flex justify-between items-center text-[11px] font-mono text-slate-400">
                      <span>#A-44</span>
                      <span className="text-[9px] text-slate-500">Service Desk</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom status bar */}
              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  Structured queue workflow active
                </span>
                <span>Next.js App Router</span>
              </div>
            </div>
          ) : (
            /* SHADO Real-Time Chat UI Mockup */
            <div className="h-full flex flex-col justify-between text-xs font-sans">
              {/* Chat Header */}
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center font-bold text-white text-[10px]">
                    S
                  </div>
                  <div>
                    <span className="font-bold text-white block leading-tight">SHADO Space</span>
                    <span className="text-[9px] text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Socket.IO Connected
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-pink-300 bg-pink-950/40 px-2 py-0.5 rounded border border-pink-800/40">
                  Disappearing Msg: 24h
                </span>
              </div>

              {/* Chat Messages */}
              <div className="space-y-2 my-auto px-1">
                {/* Incoming Message */}
                <div className="flex items-start gap-2">
                  <div className="bg-[#141a38] border border-white/10 rounded-2xl rounded-tl-sm px-3 py-1.5 max-w-[80%] text-slate-200">
                    <p className="text-[11px]">Real-time message delivered with private encryption?</p>
                    <span className="text-[9px] text-slate-400 block text-right mt-0.5">10:24 AM</span>
                  </div>
                </div>

                {/* Outgoing Message */}
                <div className="flex items-end justify-end gap-1.5">
                  <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl rounded-br-sm px-3 py-1.5 max-w-[80%] text-white shadow-md">
                    <p className="text-[11px]">Yes! Socket.IO + PostgreSQL with read status receipts.</p>
                    <div className="flex items-center justify-end gap-1 text-[9px] text-purple-200 mt-0.5">
                      <span>10:25 AM</span>
                      <CheckCheck className="w-3 h-3 text-cyan-300" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Input Bar */}
              <div className="pt-2 border-t border-white/5 flex items-center gap-2">
                <div className="flex-1 bg-[#10152b] border border-white/10 rounded-lg px-2.5 py-1 text-slate-500 text-[11px] flex items-center justify-between">
                  <span>Type a message...</span>
                  <span className="text-[9px] text-purple-400 font-mono">Theme: Dark</span>
                </div>
                <div className="w-6 h-6 rounded-lg bg-purple-600 flex items-center justify-center text-white">
                  <Send className="w-3 h-3" />
                </div>
              </div>
            </div>
          )}

        </div>
      )}
    </div>
  );
}
