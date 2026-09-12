import React from 'react';
import { experiences, skillCategories } from '../data/portfolioData';
import { 
  Briefcase, 
  Cpu, 
  Code2, 
  Layers, 
  BarChart3, 
  Sparkles,
  Calendar,
  Building,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Cpu,
  Code2,
  Layers,
  BarChart3,
  Sparkles,
};

export const ExperienceSkills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-slate-950 border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Experience Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-800/50 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Internships & Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Industry Experience & Internships
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Hands-on work in Conversational Data Analytics, LLM prompt engineering, and Cloud Technology.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6 mb-20 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all shadow-md relative group"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-slate-300 mt-1">
                    <span className="font-semibold text-sky-400 flex items-center gap-1.5">
                      <Building className="w-4 h-4 text-sky-400" />
                      {exp.organization}
                    </span>
                    {exp.program && (
                      <span className="text-slate-400 text-xs sm:text-sm">
                        • {exp.program}
                      </span>
                    )}
                    {exp.mode && (
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-xs">
                        {exp.mode}
                      </span>
                    )}
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-mono text-slate-300 self-start">
                  <Calendar className="w-3.5 h-3.5 text-sky-400" />
                  {exp.period}
                </div>
              </div>

              {/* Bullet points */}
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Technical Skills Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/80 border border-sky-800/50 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Repertoire</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Technologies
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Comprehensive breakdown of my technical stack across AI/ML, languages, data, and web engineering.
          </p>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((categoryItem, idx) => {
            const IconComponent = iconMap[categoryItem.iconName] || Cpu;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-sky-500/40 transition-all flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {categoryItem.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {categoryItem.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx}
                        className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-950 border border-slate-800 text-slate-200 hover:border-slate-700 hover:text-white transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
