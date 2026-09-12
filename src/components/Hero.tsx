import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone, 
  ExternalLink, 
  ArrowRight, 
  FileText,
  Terminal,
  Sparkles,
  Bot
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section 
      id="hero" 
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-slate-800/80 bg-slate-950"
    >
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 md:w-[600px] h-96 md:h-[450px] bg-sky-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-indigo-600/10 blur-[110px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-sky-500/30 text-sky-300 text-xs sm:text-sm font-medium shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="w-2 h-2 -ml-3 rounded-full bg-emerald-400" />
              <span>{personalInfo.statusBadge}</span>
            </div>

            {/* Main Name & Titles */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-sky-200 bg-clip-text text-transparent">{personalInfo.name}</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-300">
                {personalInfo.title}
              </p>
              <p className="text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed">
                Computer Science undergraduate focused on <span className="text-sky-300 font-medium">AI/ML</span>, applied <span className="text-sky-300 font-medium">LLMs</span>, <span className="text-sky-300 font-medium">RAG</span>, and modern <span className="text-sky-300 font-medium">Full-Stack Web Development</span>. Experienced in turning complex problems into working products.
              </p>
            </div>

            {/* Quick Contact & Location Pills */}
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-400 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900 border border-slate-800">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                {personalInfo.location}
              </span>
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 hover:border-sky-500/50 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-sky-400" />
                {personalInfo.email}
              </a>
              <a 
                href={`tel:${personalInfo.phone}`} 
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 hover:border-sky-500/50 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                {personalInfo.phone}
              </a>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold transition-all shadow-lg shadow-sky-500/25 text-sm"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-850 text-slate-200 border border-slate-700 hover:border-slate-600 transition-all text-sm font-medium shadow-sm hover:text-white"
              >
                <FileText className="w-4 h-4 text-sky-400" />
                <span>View Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-all text-sm font-medium"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links Bar */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Connect:</span>
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-all"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-sky-400 hover:bg-slate-800 border border-slate-800 transition-all"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-sky-400 hover:bg-slate-800 border border-slate-800 transition-all"
                  aria-label="CCBP Portfolio"
                  title="CCBP Portfolio"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Profile Visual / Code Terminal Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl p-5 overflow-hidden">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="text-xs font-mono text-slate-400 ml-2">dinesh@portfolio:~</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-sky-400">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>zsh</span>
                </div>
              </div>

              {/* Code / Profile snippet */}
              <div className="py-4 font-mono text-xs sm:text-sm text-slate-300 space-y-2.5">
                <div className="text-slate-400">
                  <span className="text-indigo-400">const</span> developer = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-sky-400">name</span>: <span className="text-emerald-300">"{personalInfo.shortName}"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-sky-400">degree</span>: <span className="text-emerald-300">"B.Tech CSE (2023-2027)"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-sky-400">specialization</span>: [
                  <span className="text-amber-300">"AI/ML"</span>, 
                  <span className="text-amber-300">"LLMs"</span>, 
                  <span className="text-amber-300">"RAG"</span>
                  ],
                </div>
                <div className="pl-4">
                  <span className="text-sky-400">coreStack</span>: [
                  <span className="text-amber-300">"Python"</span>, 
                  <span className="text-amber-300">"React"</span>, 
                  <span className="text-amber-300">"NumPy"</span>, 
                  <span className="text-amber-300">"Node.js"</span>
                  ],
                </div>
                <div className="pl-4">
                  <span className="text-sky-400">status</span>: <span className="text-emerald-400 font-semibold">"Ready for Impact 🚀"</span>
                </div>
                <div className="text-slate-400">&#125;;</div>
              </div>

              {/* Quick AI & Engineering highlights */}
              <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                  <div className="flex items-center gap-1.5 text-sky-400 font-medium mb-1">
                    <Bot className="w-3.5 h-3.5" />
                    <span>LLM Analytics</span>
                  </div>
                  <p className="text-slate-400 text-[11px]">Prompt engineering & conversational data</p>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                  <div className="flex items-center gap-1.5 text-indigo-400 font-medium mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Production Web</span>
                  </div>
                  <p className="text-slate-400 text-[11px]">Clean, responsive & reliable deployments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
