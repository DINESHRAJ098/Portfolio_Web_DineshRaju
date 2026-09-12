import React from 'react';
import { educationHistory, certifications, hackathons } from '../data/portfolioData';
import { 
  GraduationCap, 
  Award, 
  Trophy, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  BookOpen, 
  Medal,
  ExternalLink
} from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-slate-950 border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/50 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Certifications
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Formal studies in Computer Science and Engineering alongside verified industry credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Education Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
              <BookOpen className="w-5 h-5 text-emerald-400" />
              Academic Milestones
            </h3>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-800 space-y-8">
              {educationHistory.map((edu, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline node */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-emerald-400 group-hover:bg-emerald-400 transition-colors shadow-sm shadow-emerald-400/20"></div>

                  <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {edu.degree}
                      </h4>
                      <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 px-2.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-800/40 self-start">
                        <Calendar className="w-3 h-3" />
                        <span>{edu.period}</span>
                      </div>
                    </div>

                    <div className="text-sm font-semibold text-slate-300 mb-1">
                      {edu.institution}
                    </div>

                    {edu.location && (
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-2">
                        <MapPin className="w-3 h-3 text-slate-500" />
                        <span>{edu.location}</span>
                      </div>
                    )}

                    {edu.field && (
                      <div className="text-xs text-slate-400 mb-2 font-medium">
                        Focus: <span className="text-slate-300">{edu.field}</span>
                      </div>
                    )}

                    {edu.description && (
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {edu.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Hackathons Column */}
          <div className="lg:col-span-5 space-y-8">
            {/* Certifications Card */}
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
                <Award className="w-5 h-5 text-sky-400" />
                Industry Certifications
              </h3>

              <div className="space-y-3">
                {certifications.map((cert, cIdx) => (
                  <div
                    key={cIdx}
                    className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-sky-500/40 transition-all flex items-center justify-between gap-3 shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
                        <Medal className="w-4 h-4" />
                      </div>
                      <div>
                        <h5 className="text-sm font-bold text-white leading-snug">
                          {cert.title}
                        </h5>
                        <div className="text-xs text-slate-400">
                          {cert.issuer}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-slate-400 px-2.5 py-1 rounded bg-slate-950 border border-slate-800 shrink-0">
                      {cert.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hackathons Box */}
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
                <Trophy className="w-5 h-5 text-amber-400" />
                Hackathon Achievements
              </h3>

              <div className="space-y-3">
                {hackathons.map((hack, hIdx) => (
                  <div
                    key={hIdx}
                    className="p-5 rounded-xl bg-gradient-to-br from-slate-900 to-amber-950/20 border border-amber-500/20 shadow-md space-y-2"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                          {hack.type}
                        </span>
                        <h4 className="text-base font-bold text-white">
                          {hack.title}
                        </h4>
                      </div>
                      <span className="text-xs font-mono text-slate-400 px-2.5 py-0.5 rounded bg-slate-950 border border-slate-800 shrink-0">
                        {hack.date}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {hack.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
