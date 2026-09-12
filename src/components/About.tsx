import React from 'react';
import { personalInfo, stats } from '../data/portfolioData';
import { 
  User, 
  BrainCircuit, 
  Workflow, 
  MessageSquareCode, 
  Clock, 
  Lightbulb, 
  HeartHandshake, 
  Compass,
  CheckCircle2
} from 'lucide-react';

export const About: React.FC = () => {
  const strengths = [
    { title: "Technical Communication", desc: "Clearly translating complex AI/ML logic into actionable specs and documentation.", icon: MessageSquareCode },
    { title: "Analytical Problem Solving", desc: "Deconstructing ambiguous engineering challenges into methodical algorithmic steps.", icon: Lightbulb },
    { title: "Prompt Engineering & RAG", desc: "Crafting structured context pipelines and optimizing LLM output quality.", icon: BrainCircuit },
    { title: "Time & Sprint Management", desc: "Delivering projects and internship deliverables consistently ahead of deadlines.", icon: Clock },
    { title: "Adaptive & Self-Motivated", desc: "Rapidly mastering emerging developer tooling, libraries, and frameworks.", icon: Compass },
    { title: "Collaborative Teamwork", desc: "Thriving under mentor guidance and cross-functional engineering teams.", icon: HeartHandshake }
  ];

  return (
    <section id="about" className="py-20 bg-slate-900/60 border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/80 border border-sky-800/50 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Driven by Curiosity, Grounded in Engineering
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Get to know my academic background, technical focus, and passion for AI/ML innovation.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="p-5 rounded-xl bg-slate-900 border border-slate-800 text-center hover:border-sky-500/30 transition-all shadow-sm"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-sky-400 font-mono">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-slate-200 mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Narrative & Focus */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-7 space-y-5 text-slate-300 leading-relaxed text-base">
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="w-2 h-6 bg-sky-500 rounded-full inline-block"></span>
              Career Objective & Technical Vision
            </h3>
            <p className="text-slate-300">
              I am a <strong className="text-white font-semibold">Computer Science undergraduate (B.Tech, graduating April 2027)</strong> with a focused passion for <span className="text-sky-300 font-medium">Artificial Intelligence, Machine Learning, and Applied Large Language Model (LLM) engineering</span>.
            </p>
            <p className="text-slate-300">
              Through mentor-guided internships at <span className="text-white font-medium">Edunet Foundation (VOIS for Tech & AICTE)</span> and self-directed initiatives, I have developed hands-on proficiency in <span className="text-sky-300">prompt engineering</span>, <span className="text-sky-300">Retrieval-Augmented Generation (RAG)</span>, conversational data analytics, and modern generative AI tools.
            </p>
            <p className="text-slate-400">
              I am comfortable leveraging <span className="text-slate-200 font-medium">NumPy and Pandas</span> for data manipulation, decomposing complex problem spaces into structured model prompts, rigorously iterating on outputs for reliability, and delivering responsive, production-ready web interfaces with <span className="text-slate-200 font-medium">React.js, Node.js, and modern CSS</span>.
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              {['Prompt Engineering', 'RAG Pipelines', 'Conversational Analytics', 'React.js', 'Python & Pandas', 'Full-Stack Integration'].map((tag) => (
                <span key={tag} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700/60">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Highlight Box */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-900/90 border border-slate-800 shadow-xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                <Workflow className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">What I Bring to Teams</h4>
                <p className="text-xs text-slate-400">Technical rigor & execution speed</p>
              </div>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-slate-300 pt-2">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0"></span>
                <span><strong className="text-white">Applied AI Mindset:</strong> Practical experience in prompt refinement, hallucination mitigation, and LLM-driven analytical tools.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0"></span>
                <span><strong className="text-white">Clean Engineering:</strong> Modular code bases with an emphasis on testability, responsiveness, and performance.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0"></span>
                <span><strong className="text-white">Proven Discipline:</strong> Track record of delivering internship work packages ahead of target timelines.</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>Location: {personalInfo.location}</span>
              <span className="text-emerald-400 font-medium">B.Tech 2027</span>
            </div>
          </div>
        </div>

        {/* Core Strengths Grid */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white text-center sm:text-left">
            Core Behavioral & Technical Strengths
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {strengths.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={index} 
                  className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-sky-400 mb-3 group-hover:bg-sky-500 group-hover:text-slate-950 transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
